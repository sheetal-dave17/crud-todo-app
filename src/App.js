import React from "react";

import {Provider} from 'react-redux';
import store from './redux/store';

import Todo from './pages/Todo'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Todo/>
            </Provider>
        );
    }
}

export default App;
