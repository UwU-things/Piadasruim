import { useEffect, useState } from 'react';

import piadasService from '../service/piadas.service';
import { DocumentData } from 'firebase/firestore';

import Layout from '../components/Layout';
import HomeDetails from '../style/pages/HomeDetails';

import CardPiadas from '../components/CardPiadas';

interface Piadas {
    author: string,
    createdAt: Date,
    likes: number,
    piada: string
}

function Home() {

    const [piadas, setPiadas] = useState<Piadas[] | DocumentData>([]);

    useEffect(() => {
        async function fetchData() {
            const datas = await piadasService.getPiadas();
            setPiadas(datas);
        }

        fetchData()
    }, [])

    return (
        <Layout>
            <HomeDetails>
                <div className="container">
                    {piadas ? piadas.map((item: Piadas, key: number) => {
                        return (
                            <CardPiadas piada={item} key={key}/>
                        )
                    }) : null}
                </div>
            </HomeDetails>
        </Layout>
    )
}

export default Home;