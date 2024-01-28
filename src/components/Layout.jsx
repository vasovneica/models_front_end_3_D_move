import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer.jsx';


const Layout = () => {
    return (

        <div className='layout'>
            <Header />
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export { Layout }
