import {Form,redirect,useNavigation,} from 'react-router-dom';
import React, {useState,useEffect} from 'react';
import axios from 'axios';

function Correct(){
	const [ans, setAns]=useState(' ');
	function update(){
		const btn = document.getElementById('spinn');
		btn.style.display = 'block';
		var text = document.getElementById('text').value;
		axios({url:`https://blinkr-app.herokuapp.com/correct?text=${text}`,
			method:'GET',})
		.then((response)=>{
			setAns(response.data);
			btn.style.display='none';
		}).catch((error)=>{
		});
	}
	useEffect(()=>{
		document.getElementById('ans').text = ans;
	});
	return (
		<div >
			<p>Check on Spelling and autocorrect text input</p>
			<Form >
				<div className='form-group'>
					<label  for='text'>Input text</label>
					<textarea cols='36' rows='6' name='text' className='form-control' id='text'  placeholder='Type Here'></textarea>
				</div>
				<button onClick = {update} className='btn btn-primary'>
				<span className="spinner-border spinner-border-sm" role="status" style={{display:'none'}} id='spinn'></span>
				submit
			</button>
			</Form>
			<p id= 'ans'>
				{ans}
			</p>
		</div>
		);
}

export default Correct;