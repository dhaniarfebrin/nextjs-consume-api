import Head from 'next/head';
import { ReactNode } from "react";
import Footer from "../footer";
import Header from "../Header";
import styles from './Layout.module.css';

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}

function Layout(props: LayoutProps) {
    const { children, pageTitle } = props;
    return (
        <>
            <Head>
                <title>{pageTitle} | Next Basic</title>
                <meta name="description" content="Website Next JS Basic" />
            </Head>
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>
                    {children} 
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Layout;