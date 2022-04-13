import type { NextPage } from 'next';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import Image from 'next/image'

const Home: NextPage = () => (

  <Layout pageTitle='Home'>
    <Image src="/imag1.jpeg" width={400} height={200} alt="kenti" />  {/* auto optimasi dan lazyload */}
    <h1 className={styles['title']}>Welcome kenti</h1>
  </Layout>

);

export default Home;
