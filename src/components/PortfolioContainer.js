import React, { useState } from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact'
import NavBar from './Navbar';
import Footer from './Footer';



function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {

    if (currentPage === 'About') {
      return <About />;
    } else if (currentPage === 'Portfolio') {
      return <Portfolio />
    } else if (currentPage === 'Resume') {
      return <Resume />
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}

      <Footer />
    </div>
  );
}

export default PortfolioContainer