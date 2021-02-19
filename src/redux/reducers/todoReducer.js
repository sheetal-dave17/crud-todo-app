import {
    LOADING,
    GET_TODO,
    SET_TODO,
    SET_TODOS,
    GET_ALL_TODO,
    CREATE_TODO,
    EDIT_TODO,
    DELETE_TODO
} from '../types';

const initialState = {
    todos: [],
    todo: {},
    loading: false
};

export default function (state = initialState, action) {
    debugger;
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_TODOS:
            return {
                ...state,
                todos: action.payload,
                loading: false
            };
        case SET_TODO:
            return {
                ...state,
                scream: action.payload
            };
        default:
            return state;
    }
}