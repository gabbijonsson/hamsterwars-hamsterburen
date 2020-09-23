import React from 'react';
import HeaderGeneric from './HeaderGeneric';
import UploadForm from './UploadForm';
import GenericBtn from './GenericBtn';

const CreateHamsterView = ({showBattle, showStats, showCreate}) => {
    return(
        <>
            <HeaderGeneric />
            <UploadForm/>
            <GenericBtn text={"add"} color={"peach"}/>
        </>
    )
    
}

export default CreateHamsterView;