import { styled } from 'styled-components';


const ButtonDetails = styled.button<{$width?: string | number, $hight?: string | number, $type?: "primary" | "default"}>`
    width: ${props => props.$width ? `${props.$width}px` : "auto"};
    height: ${props => props.$hight ? `${props.$hight}px` : "auto"};

    padding: 10px 15px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    background-color: ${props => props.$type === "primary" ? "#9656ce" : "transparent"};
    border: ${props => props.$type === "primary" ? "none" : "solid 1px white"};

    color: white;

    border-radius: 6px;

    cursor: pointer;

    &&:hover{
        opacity: 0.8;
    }
`

export default ButtonDetails