import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

Layout.propTypes = {
    
};

function Layout(props) {
    return (
            <div class="container-fluid bg-light">
        <Header/>
        <Body/>
       <Footer/>
      </div>
    );
}

export default Layout;