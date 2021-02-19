import React from "react";
import PropTypes from 'prop-types';

// UI components
import {Header} from '../component/Header/Header'
import {Button} from "../component/Button/Button";
import {Input} from "../component/Input/Input";
import TaskList from "../component/TaskList/TaskList";

// redux stuff
import {connect} from 'react-redux';
import {getAllTodos} from '../redux/actions/todoActions'

class Todo extends React.Component {

    componentDidMount() {
        this.props.getAllTodos();
    }

    handlePageChange(pageNumber) {
        debugger
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    createTodo = (e) => {
        /* let id = Math.random().toFixed();
         const newTodos = [...todos, {id, name}];
         setTodos(newTodos);
         */
    }

    render() {
        console.log('props----------------', this.props);
        const {todos, loading} = this.props.data;
        return (
            <div>
                <Header/>
                {/* <form>
                    <label style={{padding: '50px 50px'}}> Name: </label>
                    <Input
                        size="medium"
                        placeholder='Enter todo item'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Button
                        label='Create Todo'
                        type="submit"
                        onClick={createTodo}
                    />
                </form>*/}
                {loading ? 'Loading' :
                    <div>
                        <TaskList false tasks={todos}/>
                    </div>
                }
            </div>
        )
    }
}

Todo.propTypes = {
    getAllTodos: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    data: state.data
});

export default connect(mapStateToProps, {getAllTodos})(Todo)