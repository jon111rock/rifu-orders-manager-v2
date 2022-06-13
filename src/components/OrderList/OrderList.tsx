import React from "react";
import tableHeads from "./tableHeads";

// type Props = {};

const OrderList: React.FC = () => {
  return (
    <table className="table-auto h-full">
      <thead>
        <tr className=" ">
          {tableHeads.map((head) => (
            <th
              className="p-2 text-left bg-lightGreen first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg"
              key={head}
            >
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 text-left">a</td>
          <td className="p-2 text-left">b</td>
          <td className="p-2 text-left">c</td>
          <td className="p-2 text-left">d</td>
          <td className="p-2 text-left">e</td>
          <td className="p-2 text-left">f</td>
        </tr>
        <tr>
          <td className="p-2 text-left">a</td>
          <td className="p-2 text-left">b</td>
          <td className="p-2 text-left">c</td>
          <td className="p-2 text-left">d</td>
          <td className="p-2 text-left">e</td>
          <td className="p-2 text-left">f</td>
        </tr>
        <tr>
          <td className="p-2 text-left">a</td>
          <td className="p-2 text-left">b</td>
          <td className="p-2 text-left">c</td>
          <td className="p-2 text-left">d</td>
          <td className="p-2 text-left">e</td>
          <td className="p-2 text-left">f</td>
        </tr>
        <tr>
          <td className="p-2 text-left">a</td>
          <td className="p-2 text-left">b</td>
          <td className="p-2 text-left">c</td>
          <td className="p-2 text-left">d</td>
          <td className="p-2 text-left">e</td>
          <td className="p-2 text-left">f</td>
        </tr>
        <tr>
          <td className="p-2 text-left">a</td>
          <td className="p-2 text-left">b</td>
          <td className="p-2 text-left">c</td>
          <td className="p-2 text-left">d</td>
          <td className="p-2 text-left">e</td>
          <td className="p-2 text-left">f</td>
        </tr>
        <tr>
          <td className="p-2 text-left">a</td>
          <td className="p-2 text-left">b</td>
          <td className="p-2 text-left">c</td>
          <td className="p-2 text-left">d</td>
          <td className="p-2 text-left">e</td>
          <td className="p-2 text-left">f</td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderList;
