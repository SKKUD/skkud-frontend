import React from 'react';
import PropTypes from 'prop-types';

function PreImages({ imgFiles }) {
    return (
        <>
            {imgFiles.map((url) => (
                <img alt={url} key={url} src={url} width="100%" />
            ))}
        </>
    );
}

PreImages.propTypes = {
    imgFiles: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default PreImages;
