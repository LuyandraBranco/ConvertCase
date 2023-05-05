import styled from 'styled-components';

export const Container = styled.div `

    width: 70rem;
    height: 2.5rem;
    display: flex;
    margin-bottom: 1rem;
    flex-wrap: wrap;

    @media screen and (max-width: 399px){
        width: 100%;
        height: 13.5rem;
    }

    @media (min-width: 400px) and (max-width: 561px) {  
        width: 100%;
        height: 9rem;
        
    }

    @media (min-width: 562px) and (max-width: 680px) {  
        width: 100%;
        height: 7rem;
        
    }

    @media (min-width: 681px) and (max-width: 992px) {
        width: 42rem;
        height: 6rem;
    }

    @media (min-width: 993px) and (max-width: 1140px) {      
        justify-content: center;
    }

`;