import React, {useState,useEffect} from 'react';
import {Form,} from 'react-router-dom';
import axios from 'axios';

function Translate(){
	const [ans, setAns]=useState(' ');

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
		var text = document.getElementById('text').value;
		var dest = document.getElementById('dest').value;
		axios.get(`https://blinkr-app.herokuapp.com/langtranslate?text=${text}&dest=${dest}`)
		.then((response)=>{
			setAns(response.data);
			btn.style.display = 'none';
		})
		.then((error)=>{
		});
	}
	useEffect(()=>{
		document.getElementById('anstext').text = ans;
	});
	var options=[];
	for (var key in langcodes){
		options.push(<option value={key}>{langcodes[key]}</option>)
	}
	return (
		<div>
			<p>text translation</p>
			<Form className='form-group'>
			<div className='row'>
				<label className='col-sm-3' for = 'text'>Input text to translate</label>
				<textarea placeholder='Type here!'className='col-sm-9'type='textarea'name='text' id='text'></textarea>
			</div>
			<div className='row'>
				<label className='col-sm-3' for = 'dest'>
				Language</label>
				<select className='col-sm-9' name='dest'id='dest'>
					{options}
				</select>
			</div>
			
			</Form>
			<button id='button' className='btn btn-primary' onClick={update}>
				<span className="spinner-border spinner-border-sm" role="status" style={{display:'none'}} id='spinn'></span>
				submit
			</button>
			<p id = 'anstext'>{ans}</p>
		</div>
		);
}

export default Translate;