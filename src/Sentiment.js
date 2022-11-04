import React from 'react';
import {Form,redirect,useNavigation,} from 'react-router-dom';

function Sentiment(){
	return (
		<div>
			<p>Sentiment Analysis</p>
			<Form method = 'post' action='result'>
				<label for = 'text'>Input text</label>
				<input type='text'name='text'></input>
				<button type='submit'>submit</button>
			</Form>
		</div>
		);
}

export default Sentiment;