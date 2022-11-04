import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Content from './Content';
import Websumm from './Websumm';
import Correct from './Correct';
import Langdetect from './Langdetect';
import Getsumm from './Getsumm';
import Entity from './Entity';
import Sentiment from './Sentiment';
import Translate from './Translate';
import Ans, {loader as AnsLoader,} from './Ans';
import WebAns, {loader as Webloader} from './WebAns';
import CorrectAns, {loader as CorrectLoader} from './CorrectAns';
import DetectAns, {loader as DetectLoader} from './DetectAns';
import SentimentAns, {loader as SentimentLoader} from './SentimentAns';
import TranslateAns, {loader as TranslateLoader} from './TranslateAns';
import {action as SummAction, langtranslate as TranslateAction, sentiment as SentimentAction, langdetect as DetectAction, websumm as WebAction,correct as CorrectAction} from './Actions';
import {createBrowserRouter, 
	RouterProvider,
	Route,} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
const router = createBrowserRouter([
	{
		path:'/',
		element:<App/>,
		children:[{
			index:true,
			element:<Content/>,
		},
		]
	},
	{
		path:'/home',
		element:<App/>,
		children:[{
			index:true,
			element:<Content/>,
		},
		]
	},
	{
		path:'/websumm',
		element:<App/>,
		children:[
		{
			index:true,
			element:<Websumm/>
		},
		],
	},
	{
		path:'/websumm/result',
		action:WebAction,
	},
	{
		path:'webans/:text',
		element:<App/>,
		children:[
		{
			index:true,
			element:<WebAns/>,
			loader:Webloader
		},],
	},
	{
		path:'/correct',
		element:<App/>,
		children:[
		{
			index:true,
			element:<Correct/>
		},
		],
	},
	{
		path:'/correct/result',
		action:CorrectAction,
	},
	{
		path:'/correctans/:text',
		element:<App/>,
		children:[
		{
			index:true,
			loader:CorrectLoader,
			element:<CorrectAns/>
		}],
	},
	{
		path:'/detect',
		element:<App/>,
		children:[
		{
			index:true,
			element:<Langdetect/>
		},
		],
	},
	{
		path:'/detect/result',
		action:DetectAction
	},
	{
		path:'/detectans/:text',
		element:<App/>,
		children:[
		{
			index:true,
			loader:DetectLoader,
			element:<DetectAns/>
		}]
	},
	{
		path:'/getsumm',
		element:<App/>,
		children:[
		{
			index:true,
			element:<Getsumm/>
		},
		],
	},
	{
		path:'/sentiment',
		element:<App/>,
		children:[
		{
			index:true,
			element:<Sentiment/>
		},
		],
	},
	{
		path:'/sentiment/result',
		action:SentimentAction,
	},
	{
		path:'sentimentans/:text',
		element:<App/>,
		children:[
		{
			index:true,
			element:<SentimentAns/>,
			loader:SentimentLoader,
		}]
	},
	{
		path:'/translate',
		element:<App/>,
		children:[
		{
			index:true,
			element:<Translate/>
		},
		],
	},
	{
		path:'/translate/result',
		action:TranslateAction
	},
	{
		path:'/translateans/:dest/:text',
		element:<App/>,
		children:[
		{
			index:true,
			element:<TranslateAns/>,
			loader:TranslateLoader,
		},]
	},
	{
		path:'/entity/result',
		action:SummAction,
	},
	{
		path:'/entity',
		element:<App/>,
		children:[
		{
			index:true,
			element:<Entity/>
		},
		],
	},
	{
		path:'/getsumm/result',
		action:SummAction,
	},
	{
		path:'/ans/:text',
		element:<App/>,
		children:[
		{
			index:true,
			loader:AnsLoader,
			element:<Ans/>
		}]
	},
	]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
