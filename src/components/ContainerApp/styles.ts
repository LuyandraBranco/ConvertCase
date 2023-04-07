import styled from 'styled-components';

export const Container = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;

    @media screen and (max-width: 680px) {      
        width: 95%;  
        margin: 0 auto;
    }

`;

export const AppContainer = styled(Container)`
    
    width: 71rem;

    @media screen and (max-width: 680px) {      
        width: 95%; 
        height: 100%; 
        margin: 0 auto;
    }

    @media (min-width: 681px) and (max-width: 992px) {      
        width: 48rem;  
        height: 64rem;
        margin: 0 3rem;
    }


`;

export const Title = styled.h1`

    font-size: 2.5rem;
    color: var(--purple);
    font-weight: var(--font-weight-600);
    line-height: 2.93rem;
    margin-top: 1rem;

    @media screen and (max-width: 680px) {      
        font-size: 1.8rem;
    }

`;

export const TexContainer = styled.div`
    
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    flex-direction: column;

    @media (min-width: 681px) and (max-width: 992px) {      
        width: 48rem;  
        height: 64rem;
        margin: 0 3rem;
    }


`;

export const Description = styled.p`

    width: 56.625rem;
    font-size: 1.125rem;
    color: var(--gray-400);
    font-weight: var(--font-weight-400);
    margin-top: 1rem;
    margin-bottom: 2.5rem;

    @media screen and (max-width: 680px) {      
        font-size: 1rem; 
        width: 100%;
    }

    @media (min-width: 681px) and (max-width: 992px) {  
        width: 38rem;     
        text-align: center;      
    }

`;

export const Area = styled.div`
    
    width: 70rem;
    display: flex;
    margin-top: 0.7rem;

    @media screen and (max-width: 680px) {      
        width: 100%;
        flex-direction: column;
        margin-top: 1rem;
        align-items: left;
        margin-bottom: 2rem;
    }

    @media (min-width: 681px) and (max-width: 992px) {      
        width: 42rem;  
    }

`;

export const Counter = styled.p`
    
    font-size: 1rem;
    color: var(--gray-400);
    font-weight: var(--font-weight-400);

    @media screen and (max-width: 680px) {      
        margin-bottom: 1rem;
    }

`;
