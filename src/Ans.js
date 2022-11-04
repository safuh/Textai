import { Form, useLoaderData } from "react-router-dom";
import axios from 'axios';


export async function loader({params}){
	var text = params.text;
	alert(text);
	const url = `https://blinkr-app.herokuapp.com/getsummary?text=${text}`;
	await axios({url:url,
		method:'GET',
	})
	.then(function(response){
		alert(response);
		text = response.text();		
	}).catch(function (error){
		text = error;
	});
	return text;
}

function Ans(){
	const ans=useLoaderData();
	return (
			<>
			<div>hello{ans}
			</div>
			</>
	);
}
export default Ans;

