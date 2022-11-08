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
			<Form>
				<div className='form-group'>
					<label for = 'text'>Input text to translate</label>
					<textarea className='form-control' placeholder='Type here!'cols='36'rows='6'type='textarea'name='text' id='text'></textarea>
				</div>
				<div className='form-group'>
					<label for = 'dest'>
						Select Language</label>
					<select className='form-control' name='dest'id='dest'>
						{options}
					</select>
				</div>
				<button id='button' className='btn btn-primary' onClick={update}>
					<span className="spinner-border spinner-border-sm" role="status" style={{display:'none'}} id='spinn'></span>
					submit
				</button>
			</Form>
			
			<p id = 'anstext'>{ans}</p>
		</div>
		);
}

export default Translate;