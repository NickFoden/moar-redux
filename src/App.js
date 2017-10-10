import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import {updateCurrent} from './reducers/todo'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React with Redux</h1>
        </header>
        <div className="Todo-App">
          <ToDoForm 
          currentTodo={this.props.currentTodo} 
          changeCurrent={this.props.updateCurrent}
          />
          <ToDoList todos={this.props.todos} />
        </div>
      </div>
    );
  }
}
 
export default connect(
  (state) => state,
  {updateCurrent}
)(App)