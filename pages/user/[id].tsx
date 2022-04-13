import Layout from "../../components/layout";

interface UserDetailProps {
    user: {
        name: string
        email: string
        phone: string
        website: string
        id: number
    }
}

export default function UserDetail(props: UserDetailProps) {
    const { user } = props // dari getStaticProps 

    // if (router.isFallback) {
    //     console.log('loading')
    // }

    return (
        <Layout pageTitle={user.name}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.website}</p>
            <p>{user.phone}</p>
        </Layout>
    );

}

interface UserData {
    id: number
    name: string
    email: string
    phone: string
    website: string
}

// mengenerate halaman - halaman static html sebanyak user yang kita miliki sebelum req user`
// STATIC GENERATION
// tidak cocok untuk data yang sering diubah
// This function gets called at build time
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json()

    // mendapatkan list ID user
    const paths = dataUsers.map((user: UserData) => ({
        params: {
            id: `${user.id}`, // return params.id ke paths
        },
    }));

    return {
        paths, // return paths ke GetStaticProps context
        // false: ketika ada url tidak ditemukan, akan dilarikan ke 404 page
        fallback: false
    }
}

interface GetProps {
    params: {
        id: string
    }
}

// mendapatkan data sesuai user id
// If the route is like /posts/1, then params.id is 1
export async function getStaticProps(context: GetProps) {
    const { id } = context.params // sesuai dari get static paths    
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json()

    // return props.user ke page user detail
    // Pass post data to the page via props
    return {
        props: {
            user,
        }
    }
}