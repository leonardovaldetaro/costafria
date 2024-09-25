import Footer from 'components/footer';
import Header from 'components/header';
import ScrollToTop from 'components/scrollToTop';
import Home from 'pages/home';
import Cardapio from 'pages/cardapio';
import Reservas from 'pages/reservas';
import Galeria from 'pages/galeria';

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
                    <Route path='cardapio' element={<Cardapio />} />
                    <Route path='galeria' element={<Galeria />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}