import Head from 'next/head'
import Navigation from './Navigation'


const Layout = ( { children }) => {
    return ( 
        <main>
            <Head>
                <title>My Next.JS Page</title>
            </Head>
            <Navigation />
            {children}
            
        </main>
     );
}
 
export default Layout;