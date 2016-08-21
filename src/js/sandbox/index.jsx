import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import imageReducer from '~/sandbox/reducers/image';

import Sandbox from '~/sandbox/components/Sandbox.jsx';

function App() {
    const store = createStore(imageReducer);
    return (
        <Provider store={store}>
            <Sandbox />
        </Provider>
    );
}
render(<App />, document.getElementById('sandbox'));
