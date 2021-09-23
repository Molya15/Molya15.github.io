import React from 'react';
import './App.css';
import Task from './components/Task';
import Add from './components/Add';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: [
        {id: 0, text: 'Сделать to-do list', done: true},
        {id: 1, text: 'Отправить преподавателю', done: true},
        {id: 2, text: 'Получить зачёт', done: false},
        {id: 2, text: 'Радоваться', done: false}
      ]
    }
  }

  doTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {tasks} = state;
      tasks[index].done = true;
      return tasks;
    });
  };

  doubleTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    let {tasks} = this.state;
    tasks.push({
      id:tasks.length !== 0 ? tasks.length : 0,
      text: tasks[index].text,
      done: false
    });
    this.setState(tasks);
  };

  deleteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {tasks} = state;
      delete tasks[index];
      return tasks;
    });
  };

  addTask = (text) => {
    let {tasks} = this.state;
    tasks.push({
      id:tasks.length !== 0 ? tasks.length : 0,
      text: text,
      done: false
    });
    this.setState(tasks);
  }

  render(){
    const {tasks} = this.state;
    const undoneTasks = tasks.filter(task => !task.done);
    const doneTasks = tasks.filter(task => task.done);

    return (
      <div className="App">
        <h1>Список дел</h1>

        {[...undoneTasks, ...doneTasks].map(task => (
          <Task 
            doTask={() => this.doTask(task.id)}
            doubleTask={() => this.doubleTask(task.id)} 
            deleteTask={() => this.deleteTask(task.id)}
            task={task} 
            key={task.id}>
          </Task>
        ))}
        <Add addTask={this.addTask}></Add>
      </div>
    );
  }
}

export default App;
