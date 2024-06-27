import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { increase, decrease } from '../redux/cartSlice';
import { ChevronUp, ChevronDown } from '../constants/icons';

const Wrapper = styled.article`
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 1rem;
    justify-items: center;
    align-items: center;
    margin-bottom: 1.5rem;

    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: var(--radius);
    }

    h4 {
        margin-bottom: 0.5rem;
    }

    .item-price {
        color: var(--clr-primary-5);
        margin-bottom: 0.5rem;
    }

    .amount-btn {
        background: transparent;
        border: transparent;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .icon {
        width: 24px;  /* 아이콘의 크기 */
        height: 24px; /* 아이콘의 크기 */
        color: #6a0dad; /* 보라색 아이콘 */
    }

    .amount {
        font-size: 1.25rem;
        margin-bottom: 0;
    }
`;

const CartItem = ({ id, img, title, singer, price, amount }) => {
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <img src={img} alt={title} />
            <div>
                <h4>{title} | {singer}</h4>
                <h4 className='item-price'>₩{price}</h4>
            </div>
            <div>
                <button className='amount-btn' onClick={() => dispatch(increase(id))}>
                    <ChevronUp className='icon' />
                </button>
                <p className='amount'>{amount}</p>
                <button className='amount-btn' onClick={() => dispatch(decrease(id))}>
                    <ChevronDown className='icon' />
                </button>
            </div>
        </Wrapper>
    );
};



export default CartItem;
