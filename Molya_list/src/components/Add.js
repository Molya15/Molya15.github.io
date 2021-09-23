import React from 'react';
import './Add.css';
import plus from './../images/add.png';

class Add extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input: ''
        };
    };

    render(){
        const {input} = this.state;
        return (
            <div className="add">
                <div>
                    <input onChange={this.inputChange} onKeyPress={this.handleEnter} type="text" value = {input}></input>
                    <img src={plus} onClick={this.addTask} alt="Add" />
                </div>
            </div>
        );
    }

    addTask = () => {
        const {input} = this.state;
        if(input){
            this.props.addTask(input);
        }
        this.setState({input: ''});
    };

    inputChange = e => {
        this.setState({input: e.target.value});
    }

    handleEnter = e =>{
        if (e.key === 'Enter') this.addTask();
    }
}

export default Add;