import { Form, useLoaderData } from "react-router-dom";
import axios from 'axios';


export async function loader({params}){
	var text = params.text;
	alert(text);
	const url = `https://blinkr-app.herokuapp.com/langdetect?text=${text}`;
	await axios({url:url,
		method:'GET',
	})
	.then(function(response){
		alert(response);
		text = response.json();		
	}).catch(function (error){
		text = error;
	});
	alert(text);
	return text;
}

function DetectAns(){
	const ans=useLoaderData();
	return (
			<>
			<div>
				<p>Language code</p>
				<p>{ans.lang}</p>
				<p>confidence metric</p>
				<p>{ans.confidence}</p>
			</div>
			</>
	);
}
export default DetectAns;

