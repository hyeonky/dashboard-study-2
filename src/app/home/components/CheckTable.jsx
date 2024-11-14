import Button, { ButtonIcon } from '@/components/button/Button';
import Card from '@/components/card/Card';
import { BsThreeDots } from 'react-icons/bs';
import React, { Children } from 'react';
import Title from '@/components/title/Title';

const CheckTable = ({ tableDataCheck }) => {
  return (
    <Card>
      <Title title="Check Table" />
      <main>
        <table className="w-full text-left text-gray-800">
          <thead className="border-b border-b-gray-600 font-medium text-gray-300 bg-slate-400">
            <tr>
              <th className="py-3">name</th>
              <th>progress</th>
              <th>quantity</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            {/* {배열이름.map((item, index) => (중복코드))} */}
            {tableDataCheck.map((item) => (
              <tr key={item.id}>
                <th className="py-3 flex gap-2">
                  <input
                    // checked={item.name[1]}
                    type="checkbox"
                    name="check-1"
                    id="check-1"
                  />
                  {/* <label htmlFor={`check-${item.id}`}>{item.name[0]}</label> */}
                </th>
                <td>{item.quantity}</td>
                <td>{item.date}</td>
                <td>{item.progress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Card>
  );
};

export default CheckTable;
