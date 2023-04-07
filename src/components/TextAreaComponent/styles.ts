import styled from 'styled-components';

export const TextArea = styled.textarea`

    width: 70rem;
    height: 22rem;
    border-radius: 0.375rem;
    background: var(--gray-800);
    color: var(--gray-400);
    border: 2px solid var(--gray-500);
    padding: 2rem;
    font-size: 1.1rem;
    resize: none;

    @media screen and (max-width: 680px) {      
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 681px) and (max-width: 992px) {      
        width: 42rem;  
        height: 22rem;
    }

`;

export const Icons = styled.div `

    display: flex;
    width: 70rem;
    height: 2rem;
    margin-top: -2rem;

    @media screen and (max-width: 680px) {      
        width: 100%;
        margin-top: -2.5rem;
    }

    @media (min-width: 681px) and (max-width: 992px) {      
        width: 42rem;  
    }

`;

export const Left = styled.div `
    
    margin-right: auto;

    > Svg{
        color: var(--gray-400);
        font-size: 1.5rem;
        margin-left: 1rem;
        cursor: pointer;
    }

`;

export const Right = styled.div `

    margin-left: auto;

    > Svg{
        color: var(--gray-400);
        font-size: 1.5rem;
        margin: 0 0.6rem;
        cursor: pointer;
    }
`;