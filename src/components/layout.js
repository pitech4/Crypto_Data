import Head from "next/head"
import styles from "./layout.module.css"
import Link from "next/link"

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
        <Head>
            <title>Crypto-Ranks</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className={styles.header}>
            <Link href="/">
            Crypto-Ranks
            </Link>
        </header>

        <main className={styles.main}>
            {children}
        </main>

        <footer className={styles.footer}>
            footer
        </footer>
    </div> 
    )
}

export default Layout