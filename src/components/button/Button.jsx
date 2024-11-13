'use client';

import React from 'react';
import styled from 'styled-components';

const Button = ({ children, gray }) => {
  return (
    // 외우기
    // {조건 ? "참" : "거짓"} - 삼항연산자
    <ButtonStyled
      className={`bg-primary text-white px-5 py-1 rounded hover:bg-secondary 
        ${gray ? 'bg-gray-400' : 'bg-primary'}`}
    >
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  &::before {
    content: 'click';
  }
`;

export default Button;
