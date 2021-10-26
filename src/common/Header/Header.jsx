import React from 'react';
import PropTypes from 'prop-types';
import "./header.scss"

Header.propTypes = {
    
};

function Header(props) {
    return (
        <header class="header row bg-primary">
            <div class="col">Logo</div>
            <div class="col bg-warning">Translate</div>
        </header>
    );
}

export default Header;