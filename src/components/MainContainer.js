import React, { useState } from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function MainContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        } else if (currentPage === 'Portfolio') {
            return <Portfolio />
        } else if (currentPage === 'Resume') {
            return <Resume />
        } else {
            return <Contact />
        }
    }

    const pageChanger = (page) => setCurrentPage(page)

    return (
        <div>
            <NavBar currentPage={currentPage} pageChanger={pageChanger} />
            {renderPage()}
            <Footer />
        </div>
    )
}