import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Custom404() {
    const router = useRouter(); // untuk redirect menggunakan useRouter

    // redirect ketika di 404 page menggunakan lifecycle react hooks
    useEffect(() => {
        setTimeout(() => {
            router.push('/'); // redirect ke home
        }, 2000)
    }, [])

    return (
        <div>
            <h1 className="title-not-found">OOOPppppsss.... halaman tidak ditemukan</h1>
        </div>
    );
}

export default Custom404;