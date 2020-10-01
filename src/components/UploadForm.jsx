import React, {useState} from 'react';
import './UploadForm.css';
import GenericBtn from './GenericBtn';
import {useHistory, useLocation} from 'react-router-dom';
import dotenv from 'dotenv'
dotenv.config()



const UploadForm = ({createHamster}) => {	
		const location = useLocation();
		console.log(location.pathname);
		sessionStorage.setItem('pathName', location.pathname)
	const history = useHistory();

	const [name, setName] = useState('')
	const [age, setAge] = useState('')
	const [favFood, setfavFood] = useState('')
	const [loves, setLoves] = useState('')
	
	const [nameTouched, setNameTouched] = useState(false)
	const [ageTouched, setAgeTouched] = useState(false)
	const [favFoodTouched, setFavFoodTouched] = useState(false)
	const [lovesTouched, setLovesTouched] = useState(false)
	const [broadcastMsg, setBroadcastMsg] = useState('add')
	const [userSetImg, setUserSetImg] = useState(null)
	const [loading, setLoading] = useState(false)
	let cloudianyData;

	const maxSize = 3000000; 
	const cloudName = process.env.REACT_APP_CLOUDINARY_NAME
	const cloudinaryURL = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`

	const addImg = (e) => {
		let impFile = e.target.files;
		setUserSetImg(impFile)
		let allowedExtensions = ['jpeg', 'jpg', 'gif', 'tiff', 'psd', 'eps', 'ai', 'indd', 'raw', 'png'];
		for(let file of impFile){
			let Extension = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
			if(allowedExtensions.indexOf(Extension) === -1){
				document.getElementById('fileReaderLabel').textContent = 'Sorry - This file type is not supperted!'
				setUserSetImg(null)
			}
			else if(file.size > maxSize ){
				document.getElementById('fileReaderLabel').textContent = 'Too large (MAX 3MB) - Select another one!'
				setUserSetImg(null)
			}
			else{
				document.getElementById('fileReaderLabel').textContent = 'File Selected!'
				setUserSetImg(file)
				
			}
		}
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		setLoading(true)
		setBroadcastMsg('Submiting...')
		if(
			!name.trim('') || !age.trim('') ||
			!favFood.trim('') || !loves.trim('') ||
			name.length > 15 || favFood.length > 15 ||
			loves.length > 40 || Number.isInteger(age) || age < 0 ||
			isNaN(age)
			){
				setBroadcastMsg('Error - Did you forgot a field?')	
			}
			else if(userSetImg === null){
				setBroadcastMsg('Error - you must select a image')
			}
			else{	
				
				const formData = new FormData();
				formData.append('file', userSetImg)
				formData.append('upload_preset', 'dev_hamster')
				await fetch(cloudinaryURL, {
					method: 'POST',
					body: formData
				})
				.then(response => response.json())
				.then(data => {
					cloudianyData = data
				})
				.catch(error => console.error('error ', error))
				
				let myHeaders = new Headers();
				myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

				let urlencoded = new URLSearchParams();
				urlencoded.append('name', name)
				urlencoded.append('age', age)
				urlencoded.append('favFood', favFood)
				urlencoded.append('loves', loves)
				urlencoded.append('imgName', cloudianyData.secure_url)

				let requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: urlencoded,
					redirect: 'follow'
				}
				await fetch('/api/addhamster', requestOptions)
				.then(async response => {
					let hamster = await response.json();
					if( response.status === 200 ){
						setBroadcastMsg('Success!')
						document.getElementById('checkMark').style.display = 'block'
						document.getElementsByTagName('input').value = ''
						document.getElementById('fileReader').value = ''
						setLoading(false)
						createHamster(hamster.id);
					}else{
						setBroadcastMsg('Oops! Try again!')
						document.getElementById('crossMark').style.display = 'block'
						setTimeout(() => {
							setLoading(false)
							document.getElementById('crossMark').style.display = 'none'
						}, 5000)
					}

				})
				.then(result => {console.log(result)})
				.catch(error => console.error('error ', error))

				history.push('/new-fighter-added');
			}

			
			
		
	};

	return (
		<>
		<form>
		<h1>Create Hamster</h1>
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
										isNaN(age) ||
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
				<label htmlFor="fileReader" className="fileReader" id="fileReaderLabel">
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
			
			<svg id="crossMark" className="checkmark cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
				<circle className="checkmark__circle cross" cx="26" cy="26" r="25" fill="none" />
				<path className="checkmark__check" fill="none" d="M16 16 36 36 M36 16 16 36" />
			</svg>
				
			<svg id="checkMark" className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
				<circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
				<path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
			</svg>
			
			<div className="genericBtn-form" onClick={(e) => onSubmit(e)}>		
				<GenericBtn text={loading ? broadcastMsg : 'add'} color={"peach"}/>
			</div>
		
		</form>
	</>
	);
}
export default UploadForm;


