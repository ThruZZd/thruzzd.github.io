import Link from 'next/link'

const Navbar = () => {
    return (  
        <nav>
            <div className="logo">
            <img src="public/LogoBig.jpg" alt="IUWD"/>
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