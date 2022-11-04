import { Form, useLoaderData } from "react-router-dom";
import axios from 'axios';


export async function loader({params}){
	var text = params.text;
	const url = '/sentiment';
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
	return text;
}

function SentimentAns(){
	const ans=useLoaderData();
	return (
			<>
			<div>
				<p>Language code</p>
				<p>{ans}</p>
			</div>
			</>
	);
}
export default SentimentAns;

