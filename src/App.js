import React, { Component } from 'react';
import './App.css';
import TodoItem from './comonents/TodoItem';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todoItems : [
        {title:'Mua Bim Bim', isComplete: true},
        {title:'Mua Quần áo', isComplete: false},
        {title:'Đi đổ xăng'}
      ]
    };
  }

  onItemClicked(item){

    return(event)=>{
      const isComplete = item.isComplete;
      const {todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          { 
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    }
  }
 
  render() {
    const { todoItems } = this.state;
    if(todoItems.length){
      return (
        <div className="App">
          {
          todoItems.length && todoItems.map((item,index)=> 
            <TodoItem 
            key={index} 
            item={item} 
            onClick ={this.onItemClicked(item)}/>)
          }
        </div>
      );
    }
  }
}

export default App;
