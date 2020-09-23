import React from 'react';
import HeaderGeneric from './HeaderGeneric';
import UploadForm from './UploadForm';
import GenericBtn from './GenericBtn';

const CreateHamsterView = () => {
    return(
        <>
            <UploadForm/>
            <GenericBtn text={"add"} color={"peach"}/>
        </>
    )
    
}

export default CreateHamsterView;