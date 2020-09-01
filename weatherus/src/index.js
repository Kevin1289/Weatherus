import React from 'react';

import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<div className="Outer">
		<App />
	</div>,
	document.getElementById('root')
);

serviceWorker.unregister();
