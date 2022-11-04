import { Form, useLoaderData } from "react-router-dom";
import axios from 'axios';


export async function loader({
	params}){
	var text = params.text;
	const url = '/websumm';
	await axios({url:url,
		method:'POST',
		data:{text:text}
	})
	.then(function(response){
		console.log(response);
		text = response.data;		
	}).catch(function (error){
		text = error;
	});
	alert(text);
	return text;
}

function WebAns(){
	const ans=useLoaderData();
	return (
			<>
			<div>hello{ans}
			</div>
			</>
	);
}
export default WebAns;

