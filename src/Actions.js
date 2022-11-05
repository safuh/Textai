import {useLoaderData, redirect,} from 'react-router-dom';
import axios from 'axios';


export async function action({request,params}){
	const formData = await request.formData();
	const updates=Object.fromEntries(formData);
	const ans = updates.text;
	return redirect(`/ans/${ans}`,);
}
export async function websumm({request,params}){
	const formData = await request.formData();
	const updates=Object.fromEntries(formData);
	const ans = updates.text;
	return redirect(`/webans/${ans}`,);
}
export async function sentiment({request,params}){
	const formData = await request.formData();
	const updates=Object.fromEntries(formData);
	const ans = updates.text;
	return redirect(`/sentimentans/${ans}`,);
}

/*export async function entityextract({request,params}){
	alert('hh');
	const formData = await request.formData();
	const updates=Object.fromEntries(formData);
	alert(axios);
	axios.get('https://blinkr-app.herokuapp.com/entityextract',{
		text:updates.text
	})
	.then(function(response){
		alert('hhe');
		console.log(response);
		const body = response.data;
		alert(body);
		const text = body.text;
		return redirect(`/ans/${text}`,);		
	}).catch(function (error){
		console.log(error);});
	const url = '/entityextract';
	const formData = await request.formData();
	const updates=Object.fromEntries(formData);
	const ans = updates.text;
	const data = {text:ans};
	console.log(data.text);
	const customHeaders = {
    	"Content-Type": "application/json",
	}
	const response= await fetch(url,{
		method:'POST',
		headers:customHeaders,
		body:JSON.stringify(data)});

	const body= await response.json();
	console.log(body);
	alert(body);
	if(response.status !== 200){	
		const text=response.text;
		return redirect(`/ans/${text}`,);
	}
	const text=body.text;
	alert(text);
}*/
