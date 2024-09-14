import Footer from 'components/footer';
import Header from 'components/header';
import ScrollToTop from 'components/scrollToTop';
import Home from 'pages/home';
import Reservas from 'pages/reservas';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter () {
    return (
        <main className='mainContainer'>
            <Router>
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path='reservations' element={<Reservas />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}