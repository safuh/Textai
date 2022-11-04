import React from 'react';
import {Form,redirect,useNavigation,} from 'react-router-dom';

function Getsumm(){
	return (
		<div>
			<p>Generate in depth summaries from text.</p>
			<Form method = 'post' action='result'>
				<label for = 'text'>Input text</label>
				<input type='text'name='text'></input>
				<button type='submit'>submit</button>
			</Form>
		</div>
		);
}

export default Getsumm;