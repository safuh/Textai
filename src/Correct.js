import {Form,redirect,useNavigation,} from 'react-router-dom';
import React, {useState,useEffect} from 'react';

function Correct(){
	return (
		<div>
			<p>Input text for spell checking</p>
			<Form method = 'post' action='result'>
				<label for = 'text'>Input text</label>
				<input type='text'name='text'></input>
				<button type='submit'>submit</button>
			</Form>
		</div>
		);
}

export default Correct;