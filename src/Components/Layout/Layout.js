import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
    <div>
        {children}
    </div>
)
Layout.propTypes = {
    children: PropTypes.any.isRequired
};

export default Layout;
