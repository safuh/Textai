import React, {Component} from 'react';
import { useLoaderData, } from 'react-router-dom';

export async function loader({params}){
	const text = params.text;

}

export default class Anstext extends Component{
	textdata = useLoaderData();
	render(){
		return <div>hello</div>;
	}

}
