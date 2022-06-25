import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{
            overflow: 'scroll',
            height: '900px',
            borderTop: '1px solid rgba(0, 128, 128, 1)',
            width: '80%',
            margin: '0 auto'
        }}>
            {props.children}
        </div>
    )
}

export default Scroll;
