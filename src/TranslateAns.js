import { Form, useLoaderData } from "react-router-dom";
import axios from 'axios';


export async function loader({params}){
	var text = params.text;
	const dest = params.dest;
	const url = `https://blinkr-app.herokuapp.com/langtranslate?dest=${dest}&text=${text}`;
	await axios({url:url,
		method:'POST',
		data:{text:text,dest:dest}
	})
	.then(function(response){
		console.log(response);
		text = response.data;
	}).catch(function (error){
		text = error;
	});
	return text;
}

function TranslateAns(){
	const ans=useLoaderData();
	return (
			<>
			<div>
				<p>{ans}</p>
			</div>
			</>
	);
}
export default TranslateAns;

