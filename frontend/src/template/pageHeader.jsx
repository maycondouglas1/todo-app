import React from 'react';

const PageHeader = (props) => {
    return (
        <div>
            <h1 className='page-header'>{props.name}<small> {props.small}</small></h1>
        </div>
    );
};

export default PageHeader;