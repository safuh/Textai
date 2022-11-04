import {Form,redirect,useNavigation,} from 'react-router-dom';

function Websumm(){
	return (
		<>
		<div>
			<p>Generate summaries from a web page by extracting key sentences.</p>
			<Form method = 'post' action='result'>
				<label for = 'text'>Input text</label>
				<input type='text'name='text'></input>
				<button type='submit'>submit</button>
			</Form>
		</div>
		</>
		);
}

export default Websumm;