import styled from 'styled-components';

export const Container = styled.div `

    width: 70rem;
    height: 2.5rem;
    display: flex;
    margin-bottom: 1rem;
    flex-wrap: wrap;

    @media screen and (max-width: 680px) {      
        width: 100%;
        height: 14rem;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 681px) and (max-width: 992px) {
        width: 42rem;
        height: 6rem;
    }

`;