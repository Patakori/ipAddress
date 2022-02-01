import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 18.75rem;
    width: 100%;

    background-image: url('../../pattern-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    h1{
        color: var(--background);
        margin-top: 2rem;
        font-size: 1.125rem;
        
    }

    div {
        margin-top: 2.125rem;
        display: flex ;
        flex-direction: row;
        justify-content: center;
         
        input{
            width: 16.875rem;
            height: 3.75rem;

            padding-left: 1.563rem;

            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            border-color: var(--background);
            border-style: none;

            color: var(--text);

            :focus{
                outline: none;
            }
        }

        Button{

            width: 3.625rem;
            height: 3.75rem;

            background-color: black;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            border-color: var(--text);
            border-style: none;
        }
    }


`