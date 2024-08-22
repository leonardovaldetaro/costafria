import Footer from 'components/footer';
import Header from 'components/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter () {
    return (
        <main className='mainContainer'>
            <Router>
                <Header />
                <Footer />
            </Router>
        </main>
    );
}