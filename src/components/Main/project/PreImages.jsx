import React from 'react';

function PreImages({ imgFiles }) {
    return (
        <>
            {imgFiles.map((url) => {
                return <img alt={url} key={url} src={url} width="20%" />;
            })}
        </>
    );
}

export default PreImages;
