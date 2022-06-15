import React from "react";

type Props = {
  children?: string;
  confirm: () => void;
  cancel: () => void;
};

const PopupModal: React.FC<Props> = ({ children, confirm, cancel }) => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-black-rgba flex justify-center items-center">
      <div className="bg-white p-5 md:w-[500px] md:h-1/3 w-3/4 h-1/2 rounded-xl grid place-items-center">
        <div className="text-xl">{children}</div>
        <div className="flex md:gap-32 gap-16 justify-between">
          <button
            className="bg-red text-white p-2 rounded-lg"
            onClick={() => {
              confirm();
            }}
          >
            確定
          </button>
          <button
            className="bg-white text-blue border border-solid border-blue p-2 rounded-lg"
            onClick={() => {
              cancel();
            }}
          >
            取消
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
