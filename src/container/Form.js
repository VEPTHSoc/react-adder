import React from 'react';
import Input from '../components/input';
import Button from '../components/button';

class Form extends React.Component{
    constructor(){
        super();
        this.state ={
            input1: 0,
            input2: 0,
            answer: 0
        }
    }

    changeHandler1(value){
        this.setState({
            input1: value
        })
    }
    changeHandler2(){
        this.setState({
            input2: 0
        })
    }
    additonHandler(){
        this.setState({
            answer: this.state.input1 + this.state.input2
          });
    }

    render(){
        return(
            <div>
            <Input type="number" changed={(e)=> this.changeHandler1(e.target.value)}></Input>
            <p> + </p>
            <Input type="number" changed= {(e) => this.changeHandler2(e.target.value)}></Input>
            <Button onClick={this.additonHandler}>=</Button>
            <p>The addition is = {this.state.answer}</p>
            </div>
        )
    }
}

export default Form;