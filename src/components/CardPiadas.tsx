import CardPiadasDetails from "../style/components/CardPiadasDetails";

import { MessageOutlined, HeartOutlined, EllipsisOutlined } from '@ant-design/icons';

interface Props {
    piada: Piada
}

interface Piada {
    author: string,
    createdAt: Date,
    likes: number,
    piada: string
}

const CardPiadas = ({ piada }: Props) => {
    return (
        <CardPiadasDetails>
            <div className="piada">
                <p>{piada.piada}</p>
            </div>
            <div className="others">
                <div className="author">
                    {piada.author}
                </div>

                <div className="post-stuff">
                    <div className="like">
                        <HeartOutlined />
                        {piada.likes ? piada.likes : null}
                    </div>
                    <div className="message">
                        <MessageOutlined />
                    </div>
                    <div className="more">
                        <EllipsisOutlined />
                    </div>
                </div>
            </div>
        </CardPiadasDetails>
    )
}

export default CardPiadas;