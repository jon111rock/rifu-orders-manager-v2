import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getItems } from "../../api/itemApi";
import { postOrder, deleteOrder, updateOrder } from "../../api/orderApi";
import { postUser, updateUser, findUserByName } from "../../api/userApi";

import NewItemButton from "../../components/NewItemButton";
import SelectItem from "../../components/SelectItem";
import PopupModal from "../../components/PopupModal";
import ItemDetail from "../../components/ItemDetail";

import Order from "../../types/Order";
import Detail from "../../types/ItemDetail";
import Item from "../../types/Item";
import User from "../../types/User";

type Props = {
  ordersList?: Order[];
  refreshOrderList: () => void;
  setIsOrderTableOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const OrderTable: React.FC<Props> = ({
  ordersList,
  refreshOrderList,
  setIsOrderTableOpen,
}) => {
  const navigate = useNavigate();
  const { orderId } = useParams<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [deletePopupOpen, setDeletePopupOpen] = useState<boolean>(false);
  const [selectItemOpen, setSelectItemOpen] = useState<boolean>(false);
  const [itemDetailList, setItemDetailList] = useState<Detail[]>([]);
  const [itemList, setItemList] = useState<Item[]>();

  const [userId, setUserId] = useState<string>();
  const [name, setName] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [date, setDate] = useState<string>();
  const [completedDate, setCompletedDate] = useState<string>();
  const [orderType, setOrderType] = useState<string>();
  const [orderState, setOrderState] = useState<string>();

  const handleAddItemBtnClick = () => {
    setSelectItemOpen((current) => !current);
  };

  const handleSelectItemClick = (item?: Item) => {
    if (!item) {
      setSelectItemOpen(false);
      return;
    }
    const newItemDetail: Detail = {
      _id: item._id,
      item: item,
      count: 1,
    };

    setItemDetailList((currentList) => [...currentList, newItemDetail]);
    setSelectItemOpen(false);
  };

  const handleDeleteOrder = async () => {
    if (!orderId) return;
    setIsLoading(true);
    try {
      await deleteOrder(orderId);
      await refreshOrderList();
      navigate(-1);
    } catch (error) {}
  };

  const handleDeleteItem = async (itemId?: string) => {
    if (!itemId) return;

    const newList = itemDetailList?.filter((item) => item._id !== itemId);
    setItemDetailList(newList);
  };

  const handleSave = async () => {
    if (!orderType) setOrderType("外送");
    if (!orderState) setOrderState("準備中");
    if (
      !name ||
      !address ||
      !phoneNumber ||
      !date ||
      !completedDate ||
      !orderType ||
      !orderState
    )
      return;

    setIsLoading(true);

    const user: User = {
      name: name,
      address: address,
      phone_number: phoneNumber,
    };

    const detailsWithoutId = itemDetailList.map((item: Detail) => ({
      item: item.item.name,
      count: item.count,
    }));

    const order = {
      date: date,
      completed_date: completedDate,
      type: orderType,
      state: orderState,
      details: detailsWithoutId,
    };
    if (orderId === "new") {
      try {
        const res = await findUserByName(user.name);
        let userId: string | undefined;
        if (res.message === "success") {
          userId = res.result._id as string;
        } else {
          userId = await postUser(user);
        }
        if (!userId) return;
        await postOrder(userId, order);
        await refreshOrderList();
        navigate(-1);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        if (!orderId || !userId) return;
        await updateUser(userId, user);
        await updateOrder(orderId, order);
        await refreshOrderList();
        navigate(-1);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleCancel = () => {
    if (setIsOrderTableOpen) setIsOrderTableOpen(false);
    navigate(-1);
  };

  const setOrderDafultValue = (order: Order) => {
    setUserId(order.user._id);
    setName(order.user.name);
    setAddress(order.user.address);
    setPhoneNumber(order.user.phone_number);
    setDate(order.date);
    setCompletedDate(order.completed_date);
    setOrderType(order.type);
    setOrderState(order.state);
    setItemDetailList(order.details);
  };

  // set default order
  useEffect(() => {
    if (!ordersList) return;
    const foundOrder = ordersList.find((order) => order._id === orderId);
    if (!foundOrder) return;
    setOrderDafultValue(foundOrder);
  }, [orderId, ordersList]);

  // get items api
  useEffect(() => {
    if (setIsOrderTableOpen) setIsOrderTableOpen(true);

    setIsLoading(false);
    getItems().then((res) => {
      if (res === null) return;
      setItemList(res);
    });
  }, [setIsOrderTableOpen]);

  return (
    <>
      <div className="fixed left-0 top-0 w-screen h-screen bg-black-rgba flex justify-center items-center">
        <div className="md:w-[80%] md:h-auto w-full h-[90%] m-4 p-5 bg-white rounded-lg overflow-auto md:pb-0 pb-20">
          {/* 表單 */}
          <div className="md:grid md:grid-cols-2 md:gap-5 mb-4">
            {/* 使用者資訊 */}
            <ul className="w-full">
              <li className="mb-4">
                <p className="mb-2">姓名</p>
                <input
                  type="text"
                  className="order-table-input"
                  defaultValue={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </li>
              <li className="mb-2">
                <p className="mb-2">地址</p>
                <input
                  type="text"
                  className="order-table-input"
                  defaultValue={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </li>
              <li className="mb-2">
                <p className="mb-2">聯絡電話</p>
                <input
                  type="text"
                  className="order-table-input"
                  defaultValue={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </li>
              <li className="mb-2 flex gap-4">
                <div className="w-1/2">
                  <p className="mb-2">預計出貨時間</p>
                  <input
                    type="date"
                    className="order-table-input"
                    defaultValue={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  />
                </div>
                <div className="w-1/2">
                  <p className="mb-2">預計到貨時間</p>
                  <input
                    type="date"
                    className="order-table-input"
                    defaultValue={completedDate}
                    onChange={(e) => {
                      setCompletedDate(e.target.value);
                    }}
                  />
                </div>
              </li>
              <li className="mb-2">
                <p className="mb-2">訂單類型</p>
                {orderType ? (
                  <select
                    defaultValue={orderType}
                    className="order-table-input"
                    onChange={(e) => {
                      setOrderType(e.target.value);
                    }}
                  >
                    <option value="外送">外送</option>
                    <option value="自取">自取</option>
                  </select>
                ) : (
                  <select
                    key={0}
                    className="order-table-input"
                    onChange={(e) => {
                      setOrderType(e.target.value);
                    }}
                  >
                    <option value="外送">外送</option>
                    <option value="自取">自取</option>
                  </select>
                )}
              </li>
              <li className="mb-2">
                <p className="mb-2">訂單狀態</p>
                {orderState ? (
                  <select
                    defaultValue={orderState}
                    className="order-table-input"
                    onChange={(e) => {
                      setOrderState(e.target.value);
                    }}
                  >
                    <option value="準備中">準備中</option>
                    <option value="已出貨">已出貨</option>
                    <option value="已完成">已完成</option>
                  </select>
                ) : (
                  <select
                    key={0}
                    className="order-table-input"
                    onChange={(e) => {
                      setOrderState(e.target.value);
                    }}
                  >
                    <option value="準備中">準備中</option>
                    <option value="已出貨">已出貨</option>
                    <option value="已完成">已完成</option>
                  </select>
                )}
              </li>
            </ul>
            {/* 商品列表 */}
            <ul className="w-full">
              {itemDetailList ? (
                itemDetailList.map((item: Detail, key) => (
                  <li
                    className="p-1 border-b border-solid border-lightGray mb-2 last:border-none"
                    key={`${item._id}${key}`}
                  >
                    <ItemDetail
                      item={item}
                      onDelete={(itemId) => {
                        handleDeleteItem(itemId);
                      }}
                    />
                  </li>
                ))
              ) : (
                <></>
              )}
              {/* 新增商品 */}
              <NewItemButton onClick={handleAddItemBtnClick} />
            </ul>
          </div>
          {/* 結算 */}
          <div className="p-5 border-t border-1 border-lightGray flex items-center justify-between">
            <div>
              <span className="mr-5">總金額</span>
              <span>$100</span>
            </div>
            <div>
              {orderId !== "new" && !isLoading ? (
                <button
                  className="p-1.5 rounded-md bg-red text-white mr-5"
                  onClick={(e) => {
                    setDeletePopupOpen(true);
                  }}
                >
                  刪除
                </button>
              ) : (
                ""
              )}
              <button
                className="p-1.5 rounded-md bg-blue text-white mr-5"
                onClick={() => {
                  handleSave();
                }}
              >
                {isLoading ? (
                  <i className="bx bx-loader-alt bx-spin"></i>
                ) : (
                  "儲存"
                )}
              </button>
              <button
                className="p-1.5 rounded-md bg-white text-blue border border-solid border-blue"
                onClick={() => {
                  handleCancel();
                }}
              >
                取消
              </button>
            </div>
          </div>
        </div>
      </div>
      {deletePopupOpen ? (
        <PopupModal
          confirm={() => {
            handleDeleteOrder();
          }}
          cancel={() => {
            setDeletePopupOpen(false);
          }}
        >
          <div>
            確定要刪除嗎?
            {isLoading ? <i className="bx bx-loader-alt bx-spin"></i> : ""}
          </div>
        </PopupModal>
      ) : (
        ""
      )}
      {selectItemOpen ? (
        <SelectItem itemList={itemList} onClick={handleSelectItemClick} />
      ) : (
        <></>
      )}
    </>
  );
};

export default OrderTable;
