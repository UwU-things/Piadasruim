import ButtonDetails from "../style/components/ButtonDetails";

interface Props{
    children: JSX.Element | JSX.Element[] | string,
    width?: number,
    height?: number,
    type?: "primary" | "default",
    suffix?: JSX.Element
}

const Button = ({children, width, height, type, suffix}: Props) => {
    return(
        <ButtonDetails $type={type} $width={width} $hight={height}>
            {suffix ? suffix : null}
            {children}
        </ButtonDetails>
    )
}

export default Button;