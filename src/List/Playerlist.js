 import React, { Component } from 'react'
 import List from './List';

export default class Playerlist extends React.Component {
    constructor(props){
        super(props);
        this.onDeleteItem = this.onDeleteItem.bind(this);
        this.onEditItem = this.onEditItem.bind(this);
    }

    onDeleteItem(id){
        this.props.deleteTask(id);
    }

    onEditItem(item, id){
        this.props.EditTask(item, id);
        
    }

    render(){
        return(
            <ul className="list-group">
            {this.props.detail.map((name,index)=>{
                return (
                    <List 
                        key={index} 
                        items={name} 
                        onDeleteItem={this.onDeleteItem}
                        onEditItem={this.onEditItem}
                    />
                )
            })}
            </ul>
        )
    }
}
