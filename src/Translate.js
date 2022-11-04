import React from 'react';
import {Form,} from 'react-router-dom';

function Translate(){
	return (
		<div>
			<p>Input text to translate</p>
			<Form method = 'post' action='result'>
				<label for = 'text'>Input text</label>
				<input type='text'name='text'></input>
				<input type='hidden' value='sw'name='dest'></input>
				<button type='submit'>submit</button>
			</Form>
		</div>
		);
}

export default Translate;