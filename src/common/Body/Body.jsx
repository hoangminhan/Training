import React from 'react';
import PropTypes from 'prop-types';
import "./body.scss"
Body.propTypes = {
    
};

function Body(props) {
    return (
        <section class="body row bg-success">
        <div class="col-xl-4 col-md-4 col-sm-4 col-4">Login</div>
        <div class="col-xl-8 col-md-8 col-sm-8 col-8 bg-info">Content</div>
    </section>
    );
}

export default Body;