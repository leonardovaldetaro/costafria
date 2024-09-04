import Footer from 'components/footer';
import Header from 'components/header';
import Home from 'pages/home';
import Reservas from 'pages/reservas';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter () {
    return (
        <main className='mainContainer'>
            <Router>
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