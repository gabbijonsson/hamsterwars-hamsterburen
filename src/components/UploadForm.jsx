import React, {useState} from 'react';
import './UploadForm.css';
import GenericBtn from './GenericBtn';
import { json } from 'body-parser';


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
	const [imgName, setImgName] = useState({})
	const maxSize = 3000000; 
	const URL = 'https://hamsterwars-hamsterburen.herokuapp.com/'
	const addURL = '/api/addhamster'

	const addImg = (e) => {
		let impFile = e.target.files;
		for(let file of impFile){
			if(file.size > maxSize && file.type === 'image/*'){
				console.log('File too large, max 3MB, choese another one');
				impFile = undefined
				//TODO add message that file is not accepted
			}
			else{
				console.log('File accepted');
				console.log(file); //objektet användaren ladda upp ligger i "file"
				const reader = new FileReader();
				reader.readAsDataURL(file)	//FileReader gör om bilden till base64 sträng
				reader.onloadend = () => {
					console.log(reader.result);
					setImgName(reader.result) //Bilden läggs här i base64 format

				}
				
				//TODO add message that file is accepted
			}
		}
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if(
			!name.trim('') || !age.trim('') ||
			!favFood.trim('') || !loves.trim('') ||
			name.length > 15 || favFood.length > 15 ||
			loves.length > 40 || Number.isInteger(age) || age < 0
			){
				console.log('inside if');
				setBroadcastMsg('Error - Did you forgot a field?')
				
			}
			else{
				hamster = 
				{
					name: name,
					age: age,
					favFood: favFood,
					loves: loves,
					imgName: imgName
				}
				console.log(hamster);
				console.log('inside else, ALL OK');
				try {
					await fetch('/api/addhamster', {
						method: 'POST',
						body: JSON.stringify({data: hamster}),
						headers: {'Content-type': 'application/json'}
					})
				} catch (error) {
					console.error(error)
				}
			}

			
			
		
	};

	return (
		<>
		<form>
		<h2>Make your own hamster...</h2>
				<div className="inputs">
					<label style={{ position: "relative" }} htmlFor="formName">
						Name:
						<div className="name-error-message">
							<span
								style={
									!name.trim("") && nameTouched
										? { display: "block", color: "red" }
										: { display: "none" }
								}
							>
								Field Required
							</span>
							<span
								style={
									name.length > 15 && nameTouched
										? { display: "block", color: "orange" }
										: { display: "none" }
								}
							>
								{" "}
								max 15 chars
							</span>
						</div>
					</label>

					<input
						id="formName"
						type="text"
						onChange={(e) => setName(e.target.value)}
						onBlur={() => setNameTouched(true)}
					/>

					<label style={{ position: "relative" }} htmlFor="formAge">
						Age:
						<div className="age-error-message">
							<span
								style={
									!age && ageTouched
										? { display: "block", color: "red" }
										: { display: "none" }
								}
							>
								Field Required
							</span>
							<span
								style={
									(age < 0 ||
										age > 99 ||
										(Number.isInteger(age) && age)) &&
									ageTouched
										? { display: "block", color: "red" }
										: { display: "none" }
								}
							>
								0 - 99
							</span>
						</div>
					</label>

					<input
						type="number"
						id="formAge"
						onChange={(e) => setAge(e.target.value)}
						onBlur={() => setAgeTouched(true)}
					/>

					<label style={{ position: "relative" }} htmlFor="formFood">
						Favourite food:
						<div className="favFood-error-message">
							<span
								style={
									!favFood.trim("") && favFoodTouched
										? { display: "block", color: "red" }
										: { display: "none" }
								}
							>
								Field Required
							</span>
							<span
								style={
									favFood.length > 15 && favFoodTouched
										? { display: "block", color: "orange" }
										: { display: "none" }
								}
							>
								max 15 chars
							</span>
						</div>
					</label>

					<input
						type="text"
						id="formFood"
						onChange={(e) => setfavFood(e.target.value)}
						onBlur={() => setFavFoodTouched(true)}
					/>

					<label style={{ position: "relative" }} htmlFor="formLoves">
						Loves:
						<div className="loves-error-massage">
							<span
								style={
									!loves.trim("") && lovesTouched
										? { display: "block", color: "red" }
										: { display: "none" }
								}
							>
								Field Required
							</span>
							<span
								style={
									loves.length > 40 && lovesTouched
										? { display: "block", color: "orange" }
										: { display: "none" }
								}
							>
								max 40 chars
							</span>
						</div>
					</label>

					<input
						type="text"
						id="formLoves"
						onChange={(e) => setLoves(e.target.value)}
						onBlur={() => setLovesTouched(true)}
					/>
				</div>
			<div>
				<label htmlFor="fileReader" className="fileReader">
					Press to upload image
				</label>
				<input
					accept="image/*"
					type="file"
					name="fileReader"
					id="fileReader"
					onChange={(e) => addImg(e)}
				/>

			</div>
			
			
			
			<div className="genericBtn-form" onClick={(e) => onSubmit(e)}><div className="did-it-upload">{broadcastMsg}</div>
				<GenericBtn page={"result"} text={"add"} color={"peach"}/>
			</div>
		
		</form>
	</>
	);
}
export default UploadForm;
