import React from "react";

type Props = {};

const OrderTable = (props: Props) => {
  return (
    <div className="fixed  left-0 top-0  w-screen h-screen bg-black-rgba flex justify-center items-center">
      <div className="md:w-[80%] md:h-auto w-full h-[90%] m-4 p-5 bg-white rounded-lg overflow-auto">
        {/* 表單 */}
        <div className="md:grid md:grid-cols-2 md:gap-5 mb-4">
          {/* 使用者資訊 */}
          <ul className="w-full">
            <li className="mb-4">
              <p className="mb-2">姓名</p>
              <input
                type="text"
                className="p-1 focus:outline-none w-full border border-solid border-lightGray rounded-md"
              />
            </li>
            <li className="mb-2">
              <p className="mb-2">地址</p>
              <input
                type="text"
                className="p-1 focus:outline-none w-full border border-solid border-lightGray rounded-md"
              />
            </li>
            <li className="mb-2">
              <p className="mb-2">聯絡電話</p>
              <input
                type="text"
                className="p-1 focus:outline-none  w-full border border-solid border-lightGray rounded-md"
              />
            </li>
            <li className="mb-2 flex gap-4">
              <div>
                <p className="mb-2">預計出貨時間</p>
                <input
                  type="date"
                  className="p-1 focus:outline-none  border border-solid border-lightGray rounded-md"
                />
              </div>
              <div>
                <p className="mb-2">預計到貨時間</p>
                <input
                  type="date"
                  className="p-1 focus:outline-none border border-solid border-lightGray rounded-md"
                />
              </div>
            </li>
            <li className="mb-2">
              <p className="mb-2">訂單類型</p>
              <input
                type="text"
                className="p-1 focus:outline-none w-full border border-solid border-lightGray rounded-md"
              />
            </li>
            <li className="mb-2">
              <p className="mb-2">訂單類型</p>
              <input
                type="text"
                className="p-1 focus:outline-none w-full border border-solid border-lightGray rounded-md"
              />
            </li>
          </ul>
          {/* 商品列表 */}
          <ul className="w-full">
            <li className="p-1 border-b border-solid border-lightGray mb-2 last:border-none">
              <p>草莓三明治</p>
              <div className="flex justify-between ">
                <span>1</span>
                <span>$ 50</span>
              </div>
            </li>
            <li className="p-1 border-b border-solid border-lightGray mb-2 last:border-none">
              <p>草莓三明治</p>
              <div className="flex justify-between ">
                <span>1</span>
                <span>$ 50</span>
              </div>
            </li>
          </ul>
        </div>
        {/* 結算 */}
        <div className="p-5 border-t border-1 border-lightGray flex items-center justify-between">
          <div>
            <span className="mr-5">總金額</span>
            <span>$100</span>
          </div>
          <div>
            <button className="p-1.5 rounded-md bg-blue text-white mr-5">
              儲存
            </button>
            <button className="p-1.5 rounded-md bg-white text-blue border border-solid border-blue">
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
