import { Form, useLoaderData } from "react-router-dom";
import React, {useState,useEffect} from 'react';
import axios from 'axios';


export async function loader({params}){
	var text = params.text;
	const url = `https://blinkr-app.herokuapp.com/correct?text=${text}`;
	await axios.get(url)
	.then(function(response){
		alert(response);
	}).catch(function (error){
		text=error;
	});
	return text;
}

function CorrectAns(){
	const ans=useLoaderData();
	/*const [text, setText] = useState('loading....');
	useEffect(()=>{
		setText()
	});*/
	return (
			<>
			<div>{ans}
			</div>
			</>
	);
}
export default CorrectAns;

