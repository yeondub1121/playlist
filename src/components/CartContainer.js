import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals, clearCart } from '../redux/cartSlice';
import CartItem from './CartItem';

const Wrapper = styled.section`
margin: 3rem auto;
width: 90vw;
max-width: 40rem;
text-align: center;

h2 {
    margin-bottom: 2rem;
}

.empty-cart {
    color: var(--clr-grey-3);
    text-transform: capitalize;
}

.btn {
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border: transparent;
    border-radius: var(--radius);
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
}

.btn:hover {
    background: var(--clr-primary-3);
}

.clear-btn {
    background: var(--clr-red-dark);
}

.clear-btn:hover {
    background: var(--clr-red-light);
}

.cart-total {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    text-transform: capitalize;
}

hr {
    margin-top: 2rem;
}
`;

const CartContainer = () => {
    const dispatch = useDispatch();
    const { cartItems, total, amount } = useSelector(state => state.cart);
  
    useEffect(() => {
      dispatch(calculateTotals());
    }, [cartItems, dispatch]);
  
    if (amount < 1) {
      return (
        <Wrapper>
          <h2>당신이 선택한 음반</h2>
          <h4 className='empty-cart'>고객님이 좋아하는 음반을 담아보세요~!.</h4>
        </Wrapper>
      );
    }
  
    return (
      <Wrapper>
        <header>
          <h2>당신이 선택한 음반</h2>
        </header>
        <div>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <footer>
          <hr />
          <div className='cart-total'>
            <h4>
              총 가격 <span>₩ {total}</span>
            </h4>
          </div>
          <button className='btn clear-btn' onClick={() => dispatch(clearCart())}>
            장바구니 초기화
          </button>
        </footer>
      </Wrapper>
    );
  };
  

export default CartContainer;