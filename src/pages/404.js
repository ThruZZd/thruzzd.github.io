import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {

    const router = useRouter();

    useEffect(()=>{

        setTimeout(()=>{
            router.push('/');
        },3000)

    },[])

    return (  
        <div className="notfound">
            <h1>404</h1>
            <h2>Diese Seite haben wir nicht gefunden...</h2>
            <p>Schnell zurück zur <Link legacyBehavior href="/"><a>Homepage</a></Link></p>
        </div>


    );
}
 
export default NotFound;