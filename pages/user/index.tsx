import { useRouter } from "next/router";
import Layout from "../../components/layout";
import styles from '../../styles/User.module.css'

interface UsersProps {
  dataUsers: Array<any>
}

export default function index(props: UsersProps) {
  const { dataUsers } = props;
  const router = useRouter()

  return (
    <Layout pageTitle='Users'> 
        {dataUsers.map((user) => {
          return (
            <div onClick={() => router.push(`user/${user.id}`)} key={user.id} className={styles.card}>
              <strong className={styles['margin-0']}>{user.name}</strong>
              <p className={styles['margin-0']}>{user.email}</p>
            </div>
          )
        })}
    </Layout>

  );
}

// menyiapkan api/data ketika sebelum halaman dipanggil user: STATIC GENERATION
// memproses data secara static ketika dibuild
// cocok untuk beberapa data yang tidak sering berubah
// kelemahan : tidak cocok untuk data dinamis (sering berubah)
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json()
  return {
    props: {
      dataUsers,
    }
  }
}