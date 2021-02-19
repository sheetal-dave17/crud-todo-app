import {
    LOADING,
    SET_TODOS,
} from '../types';
import axios from 'axios';

// Get all todos
export const getAllTodos = () => async (dispatch) => {
    debugger
    try {
        dispatch({type: LOADING});
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        dispatch({
            type: SET_TODOS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: SET_TODOS,
            payload: []
        });
    }
};
