'use client';

import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { IoCloseSharp } from 'react-icons/io5';
import { HiOutlineTicket } from 'react-icons/hi2';
import { GiWoodCabin } from 'react-icons/gi';
import { BiHotel } from 'react-icons/bi';
import { TbPhotoHexagon } from 'react-icons/tb';

const StatePage = () => {
  // const [상태이름, 상태변경함수] = useState(초기);

  const [name, setName] = useState('김겨울');

  const chageName = () => {
    setName(name === '김겨울' ? '김가을' : '김겨울');
  };

  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };

  const [isOpen, setIsOpen] = useState(false);

  const sortArr = [
    {
      value: '컬처아이콘',
      icon: <HiOutlineTicket />,
    },
    {
      value: '한적한 시골',
      icon: <GiWoodCabin />,
    },
    {
      value: '최고의 전망',
      icon: <TbPhotoHexagon />,
    },
    {
      value: '한옥',
      icon: <BiHotel />,
    },
  ];
  // 변수, 변수를 받아줄 값 입력
  const [selected, setSelected] = useState(0);

  return (
    <div>
      {/* 에어비앤비_mini */}
      <div>
        {/* tab */}
        <div className="flex gap-3">
          {sortArr.map((item, index) => (
            <button
              key={index}
              onClick={(e) => {
                setSelected(index);
              }}
              className={`w-60 py-2 gap-5 flex flex-col justify-center items-center${
                selected === index ? 'bg-blue-600' : ''
              }`}
            >
              {item.icon}
              {item.value}
            </button>
          ))}
        </div>
        {/* tab content */}
        {sortArr.map((item, index) => (
          <div
            key={index}
            className={`w-full p-5 min-h-40 ${
              selected === index ? 'block' : 'hidden'
            }`}
          >
            {item.value}
          </div>
        ))}
      </div>
      <hr />
      <hr /> <hr /> <hr />
      <hr />
      <hr /> <hr />
      <hr /> <hr />
      <hr />
      <hr />
      <hr />
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {/* {isOpen ? 'x' : '='} */}
        {isOpen ? <IoCloseSharp /> : <FaBars />}
      </button>
      <hr />
      <button onClick={decrease}>감소</button>
      <strong>{number}</strong>
      <button onClick={increase}>증가</button>
      <hr />
      <strong className="block">{name}</strong>
      <button
        onClick={chageName}
        className="p-1 bg-primary-30"
      >
        이름 변경
      </button>
      <h2>useState</h2>
    </div>
  );
};

export default StatePage;
