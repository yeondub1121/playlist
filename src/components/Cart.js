import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';
import { fetchCartItems } from '../redux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, loading, error } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  if (loading) return <Loading />;

  if (error) {
    return (
      <div>
        <p>Error occurred: {error}</p>
      </div>
    );
  }

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.singer}</p>
          <p>{item.price}</p>
          <img src={item.img} alt={item.title} />
        </div>
      ))}
    </div>
  );
};

export default Cart;