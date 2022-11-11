import React, {lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, 
	RouterProvider,
	Route,} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
const App = lazy(()=>
	import('./App'));
const Loading =()=>
(
	<div className='bg-light container-fluid text-center'>
		<div className="spinner-grow text-primary" role="status">
  			<span className="sr-only">Loading...</span>
  		</div>
		<div className="spinner-grow text-secondary" role="status">
  			<span className="sr-only">Loading...</span>
		</div>
		<div className="spinner-grow text-success" role="status">
  			<span className="sr-only">Loading...</span>
		</div>
		<div className="spinner-grow text-danger" role="status">
  			<span className="sr-only">Loading...</span>
		</div>
		<div className="spinner-grow text-warning" role="status">
  			<span className="sr-only">Loading...</span>
		</div>
		<div className="spinner-grow text-info" role="status">
  			<span className="sr-only">Loading...</span>
		</div>
		<div className="spinner-grow text-light" role="status">
  			<span className="sr-only">Loading...</span>
		</div>
		<div className="spinner-grow text-dark" role="status">
  			<span className="sr-only">Loading...</span>
		</div>
  	</div>
);
const Content =lazy(()=>
	import('./Content'));
const Websumm = lazy(()=>
	import('./Websumm'));
const Correct = lazy(()=>
	import('./Correct'));
const Langdetect = lazy(()=>
	import('./Langdetect'));
const Getsumm = lazy(()=>
	import('./Getsumm'));
const Entity = lazy(()=>
	import('./Entity'));
const Sentiment = lazy(()=>
	import('./Sentiment'));
const Translate = lazy(()=>
	import('./Translate'));
const router = createBrowserRouter([
	{
		path:'/',
		element:<App/>,
		children:[{
			index:true,
			element:<Langdetect/>,
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
		path:'/entity',
		element:<App/>,
		children:[
		{
			index:true,
			element:<Entity/>
		},
		],
	},
	]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  	<Suspense fallback=
  	{
  		<Loading/>
  	}>
    	<RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
