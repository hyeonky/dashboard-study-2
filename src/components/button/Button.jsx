'use client';

import React from 'react';
import styled from 'styled-components';

const Button = ({ children, gray, className }) => {
  return (
    // 외우기
    // {조건 ? "참" : "거짓"} - 삼항연산자
    <button
      className={`bg-primary text-white px-5 py-1 rounded hover:bg-blue-300
        ${gray ? 'bg-gray-400' : 'bg-primary'} ${className}`}
    >
      {children}
    </button>
  );
};

export const ButtonIcon = ({ children, className, blind }) => {
  return (
    <button className={`flex justify-center items-center rounded ${className}`}>
      {children}
      <span className="blind">{blind}</span>
    </button>
  );
};

// const ButtonStyled = styled.button`
//   &::before {
//     content: 'click';
//   }
// `;

export default Button;
