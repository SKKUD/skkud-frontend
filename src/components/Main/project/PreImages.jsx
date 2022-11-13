import React from 'react';
import PropTypes from 'prop-types';

function PreImages({ imgFiles }) {
    return (
        <>
            {imgFiles.map((url) => (
                <img alt={url} key={url} src={url} width="20%" />
            ))}
        </>
    );
}

PreImages.propsTypes = {
    imgFiles: PropTypes.arrayOf(PropTypes.string).isRequired
    // imgFiles: PropTypes.string.isRequired,
};
export default PreImages;
