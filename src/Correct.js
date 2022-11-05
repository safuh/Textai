import {Form,redirect,useNavigation,} from 'react-router-dom';
import React, {useState,useEffect} from 'react';
import axios from 'axios';

function Correct(){
	const [ans, setAns]=useState(' ');
	function update(){
		var text = document.getElementById('text').value;
		axios({url:`https://blinkr-app.herokuapp.com/correct?text=${text}`,
			method:'GET',})
		.then((response)=>{

			setAns(response.data);
		}).catch((error)=>{
			setAns(error);
		});
	}
	useEffect(()=>{
		document.getElementById('ans').text = ans;
	});
	return (
		<div>
			<p>Input text for spell checking</p>
			<Form>
				<input type='text'name='text'id='text'></input>
			</Form>
			<button onClick = {update}>submit</button>
			<p id= 'ans'>{ans}</p>
		</div>
		);
}

export default Correct;