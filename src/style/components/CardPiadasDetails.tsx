import { styled } from 'styled-components';

const CardPiadasDetails = styled.div`
   width: 100%;

   border-radius: 6px;
   max-width: 500px;

   background-color: white;


   .piada{
        width: 100%;
        height: 300px;
        padding: 10px 40px;

        font-size: 2rem;

        display: flex;
        align-items: center;
        justify-content: center;

        background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);

        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
   }

   .others{
        width: 100%;
        height: 50px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 5px 20px;

        .left{
            display: flex;
        }

        .post-stuff{

            display: flex;
            align-items: center;
            gap: 20px;

        
            .like{
                font-size: 0.95rem;
                display: flex;
                align-items: center;
                gap: 5px;

                svg{
                    font-size: 1.2rem;
                    cursor: pointer;

                    &:hover{
                        opacity: 0.6;
                    }
                }
            }

            .message {
                font-size: 1.2rem;
                display: flex;
                gap: 5px;

                svg{
                    cursor: pointer;

                    &:hover{
                        opacity: 0.6;
                    }
                }
            }

            .more svg{
                cursor: pointer;

                &:hover{
                    opacity: 0.6;
                }
            }
        }
   }



`

export default CardPiadasDetails;