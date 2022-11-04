import {Form,redirect,useNavigation,} from 'react-router-dom';

function Entity(){
	return (
		<div>
			<p>Entity extraction from text.</p>
			<Form method = 'post' action='result'>
				<label for = 'text'>Input text</label>
				<input type='text'name='text'></input>
				<button type='submit'>submit</button>
			</Form>
		</div>);
}

export default Entity;