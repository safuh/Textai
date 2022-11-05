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
import SentimentAns, {loader as SentimentLoader} from './SentimentAns';
import {action as SummAction, sentiment as SentimentAction, websumm as WebAction,} from './Actions';
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
