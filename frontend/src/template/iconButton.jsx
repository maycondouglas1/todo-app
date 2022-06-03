import React from 'react';

const IconButton = (props) => {
    if (props.hide) {
        return null;
    }
    else {
        return (
            <div>
                <button className={'btn btn-' + props.style} onClick={props.onClick}>
                    <i className={'fa fa-' + props.icon}></i>
                </button>
            </div>
        );
    }

};

export default IconButton;