import {Form,redirect,useNavigation,} from 'react-router-dom';
import React, {useState, useEffect,} from 'react';
import axios from 'axios';

function Websumm(){
	const [ans, setAns] = useState('');
	function update(){
		const btn = document.getElementById('spinn');
		btn.style.display = 'block';
		const text = document.getElementById('text').value;
		axios.get(`https://blinkr-app.herokuapp.com/?url=${text}`)
		.then((response)=>{
			setAns(response.data);
			btn.style.display = 'none';
		})
		.then((error)=>{
			console.log(error);
		});
	}
	useEffect(()=>{
		document.getElementById('ans').text=ans;
	});
	return (
		<>
		<div>
			<p>Generate summaries from a web page by extracting key sentences.</p>
			<Form className='form-group'>
				<label for = 'text'>Input text</label>
				<input type='text'name='text'id='text'></input>
			</Form>
			<button onClick={update}>
				<span class="spinner-border spinner-border-sm" role="status" style={{display:'none'}} id='spinn'></span>
				submit
			</button>
			<p id = 'ans'>{ans}</p>
		</div>
		</>
		);
}

export default Websumm;