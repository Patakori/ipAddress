import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--background);

    width: 20.375rem;
    height: 18.5rem;
    border-radius: 20px;

    position: absolute;
    transform: translateY(-8.125rem);

    z-index: 20;

    h2 {
        color: var(--background-card);
        font-size: 0.5rem;
        
        padding-top: 1.625rem;
    }

    p {
        font-size: 0.875rem;
        font-weight: 600;

        padding-top: 0.875rem;
        
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 0.875rem;

        h3 {
            font-size: 1rem;
        }

        h4 {
            font-size: .6rem;
            font-weight: 500;
            margin-top: 0.20rem;
        }
    }

`