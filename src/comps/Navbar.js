import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return (  
        <nav>
            <div className="logo">
            <Image src="/LogoBig.jpg" alt="IUWD" width={128} height={128}/>
            </div>
            <div className="nav-links">
                <Link legacyBehavior href="/"><a>Home</a></Link>
                <Link legacyBehavior href="/about"><a>Über uns</a></Link>
                <Link legacyBehavior href="/contact"><a>Kontakt</a></Link>
            </div>
        </nav>
    );
}

export default Navbar;