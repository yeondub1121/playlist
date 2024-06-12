import React from 'react';
import CartContainer from './components/CartContainer';
import { CartIcon } from './constants/icons';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Main = styled.main`
  background-color: #f0f8ff; /* 전체 화면을 연한 하늘색 배경으로 */
  min-height: 100vh; /* 화면 전체 높이를 채우도록 설정 */
`;

const Navbar = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
  background: #6a0dad; /* 보라색 배경 */

  .nav-center {
    width: 90vw;
    max-width: var(--max-width);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h3 {
    color: white;
  }

  .nav-container {
    display: flex;
    align-items: center;
    position: relative;
  }

  .amount-container {
    background: var(--clr-primary-5);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -10px;
    right: -16px;
    width: 1.5rem;
    height: 1.5rem;
  }

  
`;

function App() {
  const { amount } = useSelector((state) => state.cart);

  return (
    <Main>
      <Navbar>
        <div className='nav-center'>
          <h3>UMC PlayList</h3>
          <div className='nav-container'>
            <CartIcon />
            <div className='amount-container'>
              
            </div>
          </div>
        </div>
      </Navbar>
      <CartContainer />
    </Main>
  );
}


export default App;
