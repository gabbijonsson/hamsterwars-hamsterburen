import React, {useState} from 'react';
import './UploadForm.css';
import GenericBtn from './GenericBtn';


const UploadForm = ({hamster}) => {
    
    const [name, setName] = useState('')
    const [age, setAge] = useState(Number())
    const [favFood, setfavFood] = useState('')
    const [loves, setLoves] = useState('')
    const [nameTouched, setNameTouched] = useState(false)
    const [ageTouched, setAgeTouched] = useState(false)
    const [favFoodTouched, setFavFoodTouched] = useState(false)
    const [lovesTouched, setLovesTouched] = useState(false)
    const [broadcastMsg, setBroadcastMsg] = useState('')
    
    const onSubmit = (e) => {
        e.preventDefault();
        if(
            !name.trim('') || !age.trim('') ||
            !favFood.trim('') || !loves.trim('') ||
            name.length > 15 || favFood.length > 15 ||
            loves.length > 40 || !Number.isInteger(age) || age < 0
            ){
                console.log('inside if');
                setBroadcastMsg('Tip: Field Required')
                e.preventDefault();
            }
            else{
                console.log('inside else');
                hamster = 
                {
                    name: name,
                    age: age,
                    favFood: favFood,
                    loves: loves,
                    imgName:"hamster-1.jpg"
                }
        }

        e.preventDefault();
    }

    
    
    return(
        <>
        <form>
            <h2>Make your own hamster...</h2>
            <div className="inputs">
                <label htmlFor="formName">Name: </label>    
                
                <input id="formName" type="text" 
                onChange={e => setName(e.target.value)}
                onBlur={() => setNameTouched(true)}
                />

                <label htmlFor="formAge">Age: </label>  
                
                <input type="number" id="formAge" 
                onChange={e => setAge(e.target.value)}
                onBlur={() => setAgeTouched(true)}
                />

                <label htmlFor="formFood">Favourite food: </label>  
                
                <input type="text" id="formFood" 
                onChange={e => setfavFood(e.target.value)}
                onBlur={() => setFavFoodTouched(true)}
                />

                <label htmlFor="formLoves">Loves: </label>  
                
                <input type="text" id="formLoves" 
                onChange={e => setLoves(e.target.value)}
                onBlur={() => setLovesTouched(true)}
                />

            </div>
            <button className="uploadImage">Press to upload image</button>
            
            <div className="errorsection">
            <div className="name-error-message">    
                <span style={ !name.trim('') && nameTouched ? {display: "block", color: 'red'} : {display: "none"}}>Field Required</span>
                <span style={ name.length > 15 && nameTouched ? {display: 'block', color: 'orange'} : {display: "none"}}> max 15 chars</span>
            </div>
            <div className="age-error-message">    
                <span style={ !age && ageTouched ? {display: 'block', color: 'red'} : {display: "none"}}>Field Required</span>
                <span style={((age < 0 || age > 99) || (Number.isInteger(age) && age)) && ageTouched ? {display: 'block', color: 'red'} : {display: "none"}}>0 - 99</span>
            </div>
            <div className="favFood-error-message">
                <span style={ !favFood.trim('') && favFoodTouched ? {display: 'block', color: 'red'} : {display: 'none'}}>Field Required</span>
                <span style={favFood.length > 15 && favFoodTouched ? {display: 'block', color: 'orange'} : {display: 'none'}}>max 15 chars</span>
            </div>    
            <div className="loves-error-massage">    
                <span style={ !loves.trim('') && lovesTouched ? {display: 'block', color: 'red'} : {display: "none"}}>Field Required</span>
                <span style={loves.length > 40 && lovesTouched ? {display: 'block', color: 'orange'} : {display: 'none'}}>max 40 chars</span>
            </div>
            </div>
        <div className="genericBtn-form" onClick={(e) => onSubmit(e)}><GenericBtn page={"result"} text={"add"} color={"peach"}/></div>
        </form>
        </>
    );
}

export default UploadForm;