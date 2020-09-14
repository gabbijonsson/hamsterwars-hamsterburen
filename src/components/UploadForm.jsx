import React from 'react';
import './UploadForm.css';

const UploadForm = () => {
    return(
        <form method="post">
            <h2>Make your own hamster...</h2>
            <div className="inputs">
                <label htmlFor="formName">Name: </label>
                <input id="formName" type="text"/>
                <div className="formRow">
                    <label htmlFor="formAge">Age: </label>
                    <input type="number" id="formAge"/>
                    <label htmlFor="formFood">Favourite food: </label>
                    <input type="text" id="formFood"/>
                </div>
                <label htmlFor="formLoves">Loves: </label>
                <input type="text" id="formLoves"/>
            </div>
        </form>
    );
}

export default UploadForm;