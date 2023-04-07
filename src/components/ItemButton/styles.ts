import styled from 'styled-components';

export const Button = styled.button`

    width: ${props => props.width};
    height: 2.5rem;
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    font-size: 1rem;
    border: none;
    border: 2px solid var(--gray-500);
    border-radius: 0.375rem;
    margin-right: ${props => props.marginRight};
    margin-left: ${props => props.marginLeft};
    cursor: pointer;

    @media (min-width: 681px) and (max-width: 992px) {
        margin-bottom: 1rem;
    }

`;