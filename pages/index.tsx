import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from "../components/Header/Header";
import Cards from "../components/Cards/Cards"
import FindRealty from "../components/FindRealty/FindRealty";
import ResultBlock from "../components/ResultBlock/ResultBlock";
import CallRequest from "../components/CallRequest/CallRequest";
import Directions from "../components/Directions/Directions";
import Joincard from "../components/JoinCard/Joincard";
import OurTeam from "../components/OurTeam/OurTeam";
import Partners from "../components/Partners/Partners";
import Request_consult_call from "../components/Request_consult_call/Request_consult_call";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Департамент красивой жизни</title>
                <meta name="description" content="Где эта строка????"/>
            </Head>
            <Header/>
            <main className={styles.main}>
                <FindRealty />
                <Cards />
                <ResultBlock />
                <CallRequest />
                <Directions />
                <Joincard />
                <OurTeam />
                <Partners />
                <Request_consult_call />
            </main>
        </div>
    )
}

export default Home
