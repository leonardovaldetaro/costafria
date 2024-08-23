import Footer from 'components/footer';
import Header from 'components/header';
import Home from 'pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter () {
    return (
        <main className='mainContainer'>
            <Router>
                <Header />
                <Routes>
                    <Route index element={<Home />}></Route>
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}