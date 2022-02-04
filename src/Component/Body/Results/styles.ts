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

    @media (min-width: 1440px) {
        width: 69.375rem;
        height: 10rem;

        flex-direction: row;
    }


    div {
        display: flex;
        flex-direction: column;
        align-items: center;
  

        @media (min-width: 1440px) {

        align-items: flex-start;
        padding-left: 2.063rem;
        width: 15.25rem;

           & + div::after {
                background-color: var(--background-card);

                content: "";

                height: 75px;
                width: 2px;

                position: absolute;
                top: 2.75rem;  
                transform: translate(-33px, 0px);  

            }
        }
    }

        h2 {
        color: var(--background-card);
        font-size: 0.5rem;
        
        padding-top: 1.625rem;

            @media (min-width: 1440px) {

                padding-top: 0rem;
                font-size: 0.625rem;
                margin-bottom: 1.313rem;

            }
        }

        p {
            font-size: 0.875rem;
            font-weight: 600;

            padding-top: 0.875rem;

            @media (min-width: 1440px) {

                padding-top: 0rem;
                font-size: 1.125rem;
                margin-bottom: 1.563rem;
            }           
        }

        h3 {
            font-size: 1rem;
            padding-top: 0.875rem;

            @media (min-width: 1440px) {

            padding-top: 0rem;
            font-size: 1.125rem;
            }
        }

        h4 {
            font-size: .6rem;
            font-weight: 500;
            margin-top: 0.20rem;

            @media (min-width: 1440px) {

                padding-top: 0rem;
                margin-bottom: 0.713rem;

            } 
        }


    }

`