import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export const CartIcon = () => {
  const { amount } = useSelector(state => state.cart);

  return (
      <Wrapper>
          <div className="cart-icon">
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='icon '
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
        width='24'
        height='24'
        color='white'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
        />
      </svg>
      <span className="cart-count">{amount}</span>
            </div>
        </Wrapper>
    );
};
   
  
  export const ChevronDown = () => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
            width='24'
            height='24'
        >
            <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
        </svg>
    );
};

export const ChevronUp = () => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
            width='24'
            height='24'
        >
            <path strokeLinecap='round' strokeLinejoin='round' d='M5 15l7-7 7 7' />
        </svg>
    );
};

const Wrapper = styled.div`
.cart-icon {
    position: relative;
    width: 24px;
    height: 24px;

    svg {
        width: 100%;
        height: 100%;
    }
}

.cart-count {
    position: absolute;
    top: -8px;
    right: -8px;
    background: #77AFFF;
    color: #fff;
    border-radius: 80%;
    padding: 2px 3px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

export default CartIcon; 