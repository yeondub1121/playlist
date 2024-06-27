// components/Modal.js
import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../redux/modalSlice';
import { clearCart } from '../redux/cartSlice';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: var(--radius);
  text-align: center;

  h4 {
    margin-bottom: 2rem;
  }

  .btn-container {
    display: flex;
    justify-content: space-around;
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
`;

const Modal = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalWrapper>
      <ModalContent>
        <h4>담아두신 모든 음반을 삭제하시겠습니까?</h4>
        <div className="btn-container">
          <button className="btn" onClick={() => {
            dispatch(clearCart());
            dispatch(closeModal());
          }}>
            네
          </button>
          <button className="btn" onClick={() => dispatch(closeModal())}>
            아니요
          </button>
        </div>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
