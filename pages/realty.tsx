import {NextPage} from "next";
import styles from "../styles/Home.module.scss";
import Head from "next/head";
import Header from "../components/Header/Header";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Департамент красивой жизни</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>

            <main className={styles.main}>
                <a>Недвижимость</a>
            </main>

        </div>
    )
}

export default Home