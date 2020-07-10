import React from 'react';
import Helmet from 'react-helmet';

const TitleComponent=({title})=>{
    var defTitle="Codespark";
    return(
        <Helmet>
            <title>{title?title:defTitle}</title>
        </Helmet>
    )
}

export default TitleComponent;