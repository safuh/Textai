import {Form,redirect,useNavigation,} from 'react-router-dom';
import React, {useState,useEffect} from 'react';
import axios from 'axios';

function Langdetect(){
	const [ans, setAns]=useState({lang:'...',confidence:0});
	function update(){
		var text=document.getElementById('text').value;
		axios({url:`https://blinkr-app.herokuapp.com/langdetect?text=${text}`,
			method:'GET',})
		.then(function(response){
			text=response.data;
			setAns(response.data);
		}).catch(function (error){
			alert(error);
			text=error;
		});
	}
	useEffect(()=>{
		document.getElementById('lang').text = ans.lang;
	});
	return (
		<div>
			<p>Detect language used in text</p>
			<Form >
				<input type='text'name='text' id='text'></input>
			</Form>
			<button onClick={update}>submit</button>
			<p>Language code</p>
			<p id ='lang'>{ans.lang}</p>
			<p>confidence metric</p>
			<p>{ans.confidence}</p>
		</div>);
}

export default Langdetect;