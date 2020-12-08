import Link from 'next/link'

const Navigation = () => {
    return ( 
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/faq">
                        <a>FAQ</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>
            <style jsx>{`
            ul {
                display: flex;
                justify-content: space-between;
                list-style: none;
            }

            a{
                color: lime;
            }

            a:hover {
                transform: scale(1.1)
            }
            nav {
                background: #333;
            }
                
                `}</style>
        </nav>
     );
}
 
export default Navigation;