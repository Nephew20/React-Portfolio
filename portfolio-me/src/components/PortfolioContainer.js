import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Contact from './pages/Contact'
import NavBar from './Navbar';

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    
    if (currentPage === 'About') {
      return <About />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (

    <div>
      <Header />
      {/* We are passing the currentPage from state and the function to update it */}
      <NavBar className='d-flex' currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}

export default PortfolioContainer;