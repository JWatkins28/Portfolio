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

    const styles = {
        main: {
            minHeight: '90vh',
        }
    }

    return (
        <div className="relative">
            <NavBar currentPage={currentPage} pageChanger={pageChanger} />
            <div style={styles.main} className="h-full w-full inset-0 bg-pattern-light grid place-items-center">
                {renderPage()}
            </div>
            <Footer />
        </div>
    )
}
