import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals, clearCart } from '../redux/cartSlice';

const Container = styled.section`
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

`;
styled component

const Itembag = () =>{
    return
    <Container>
    <h2>장바구니</h2>
    </Container>
}