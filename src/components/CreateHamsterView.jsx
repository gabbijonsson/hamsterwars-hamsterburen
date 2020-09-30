import React from 'react';
import UploadForm from './UploadForm';

const CreateHamsterView = ({createHamster}) => {
    return(
        <>
            <UploadForm createHamster={createHamster}/>
        </>
    )
    
}

export default CreateHamsterView;
