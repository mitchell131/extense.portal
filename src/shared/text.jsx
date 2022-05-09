import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children, size, color, align, weight, line_height, as, className, styles, ...props }) => {

    return React.createElement(as || 'span', { className: classNames(className, size, color,  align, weight, line_height), ...props }, children);
};

Text.propTypes = {
    line_height: PropTypes.string,
    size: PropTypes.string,
};

export default Text;
