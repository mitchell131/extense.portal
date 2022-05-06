import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';

const Image = props => {
    const { width, url, className} = props;
    const style = { width };
    const class_names = classNames('image__image', className);
    return (
        <div className='image__container'>
            <img src={url} className={class_names} style={style} />
        </div>
    );
};

Image.propTypes = {
    url: PropTypes.string,
};

export default Image;
