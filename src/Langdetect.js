import {Form,redirect,useNavigation,} from 'react-router-dom';
import React, {useState,useEffect} from 'react';
import axios from 'axios';

function Langdetect(){
	const [ans, setAns]=useState({lang:'...',confidence:0});
	const langcodes = {'am':'Amharic',
	'ar':'Arabic',
	'eu':'Basque',
	'bn':'Bengali',
	'BG': 'Bulgarian',
	'ca': 'Catalan',
	'hr':'Croatian',
	'cs': 'Czech',
	'da': 'Danish',
	'nl':'Dutch',
	'en':'English (US)',
	'et': 'Estonian',
	'fi':'Finnish',
	'fr':'French',
	'de':'German',
	'el':'Greek',
	'gu':'Gujarati',
	'iw':'Hebrew',
	'hu':'Hungarian',
	'is':'Icelandic',
	'id':'indonesian',
	'it':'Italian',
	'ja':'Japanese',
	'kn':'Kannada',
	'ko':'Korean',
	'lv':'Latvian',
	'lt':'Lithuanian',
	'ms':'Malay',
	'ml': 'Malayalam',
	'mr': 'Marathi',
	'no': 'Norwegian',
	'pl':'Polish',
	'pt-PT':'Portuguese(Portugal)',
	'ro':'Romanian',
	'ru':'Russian',
	'sr':'Serbian',
	'zh-CN':'Chinese(PRC)',
	'sk':'Slovak',
	'sl':'Slovenian',
	'es': 'Spanish',
	'sw':'Swahili',
	'sv':'Swedish',
	'ta':'Tamil',
	'te':'Telugu',
	'th':'Thai',
	'zh-TW':'Chinese(Taiwan)',
	'tr':'Turkish',
	'ur':'Urdu',
	'uk':'Ukrainian',
	'vi':'Vietnamese',
	'cy':'Welsh'
	};
	function update(){
		const btn = document.getElementById('spinn');
		btn.style.display = 'block';
		var text=document.getElementById('text').value;
		axios({url:`https://blinkr-app.herokuapp.com/langdetect?text=${text}`,
			method:'GET',})
		.then(function(response){
			text=response.data;
			setAns(response.data);
			btn.style.display = 'none';
		}).catch(function (error){
			alert(error);
			text=error;
		});
	}
	useEffect(()=>{
		document.getElementById('lang').text = ans.lang;
	});
	return (
		<div>
			<p>Detect language used in text</p>
			<Form className='form-group'>
				<div className='row'>
					<label className='col-sm-3' for='text'>Input Text</label>
					<textarea name='text' className='col-sm-8' id='text' placeholder='Type Here!'></textarea>
				</div>
			</Form>
			<button className='btn btn-primary' onClick={update}>
				<span className="spinner-border spinner-border-sm" role="status" style={{display:'none'}} id='spinn'></span>
				submit
			</button>
			<p>Language code</p>
			<p id ='lang'>{langcodes[ans.lang]}</p>
			<p>confidence metric(for phrases with multiple languages used)</p>
			<p>{ans.confidence}</p>
		</div>);
}

export default Langdetect;