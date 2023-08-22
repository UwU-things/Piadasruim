import LayoutDetails from "../style/components/LayoutDetails";
import Button from "./Button";

import { PlusOutlined } from '@ant-design/icons';

interface Props {
    children: JSX.Element | JSX.Element[] | string
}

const Layout = ({ children }: Props) => {
    return (
        <LayoutDetails>
            <div className="header">
                <nav>
                    <h1 className="logo">
                        Piadas Ruims
                    </h1>
                    <Button suffix={<PlusOutlined />} type="primary">
                        Piada
                    </Button>
                </nav>
            </div>
            <div className="childen">
                {children}
            </div>
        </LayoutDetails>
    )
}

export default Layout;