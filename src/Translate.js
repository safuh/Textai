import React, {useState,useEffect} from 'react';
import {Form,} from 'react-router-dom';
import axios from 'axios';

function Translate(){
	const [ans, setAns]=useState(' ');
	function update(){
		var text = document.getElementById('text').value;
		var dest = document.getElementById('dest').value;
		axios.get({
			url:`https://blinkr-app.herokuapp.com/langtranslate?text=${text}&dest=${dest}`,
			method:'GET'
		})
		.then((response)=>{
			setAns(response.data);
		})
		.then((error)=>{
			setAns(error);
		});
	}
	useEffect(()=>{
		document.getElementById('anstext').text = ans;
	});
	return (
		<div>
			<p>Input text to translate</p>
			<Form>
				<label for = 'text'>Input text</label>
				<input type='text'name='text' id='text'></input>
				<label for = 'dest'>Input <a href='https://developers.google.com/admin-sdk/directory/v1/languages'>language code as shown here</a></label>
				<input type='text'id='dest' name='dest'></input>
			</Form>
			<button onClick={update}>submit</button>
			<p id = 'anstext'>{ans}</p>
		</div>
		);
}

export default Translate;