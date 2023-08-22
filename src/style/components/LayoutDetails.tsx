import { styled } from "styled-components";


const LayoutDetails = styled.div`
    width: 100%;

    padding: 0px 20px;

    .header{
        width: 100%;

        display: flex;

        justify-content: center;
        align-items: center;
    }

    nav{
        width: 100%;
        height: 60px;
        max-width: 1200px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo{
            color: white;
            margin: 0;

            font-size: 1.5rem;
            font-family: 'Kanit', sans-serif;
        }
    }

    .chidren{
        width: 100%;
    }
`

export default LayoutDetails;