import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Playerform from './Playerform'
import Playerlist from './Playerlist'
import index from '../index.css';
import axios from 'axios';

export default class Player extends Component{
    constructor(props){
        super(props);        
        this.state={
            list : [], 
            cap: true
        }
        this.updateTask=this.updateTask.bind(this)
        this.addTask=this.addTask.bind(this)
        this.deleteTask=this.deleteTask.bind(this)
        this.EditTask = this.EditTask.bind(this)

    }

    //React Lifecycle
    componentWillMount(){
        this.updateTask();
    }

    //Come from PlayerForm
    updateTask(newvalue){
        let dt = [];
        axios.get('http://localhost:9999/')
        .then((res)=>{
            res.data.map((value, i)=>{
                dt.push(value);
            })
            // console.log(dt);
            
            this.setState({
                list: dt
            })            
            // console.log('List: ', this.state.list);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    addTask(event){
        event.preventDefault();
        let item = event.target.elements.listItem.value;

        axios.post('http://localhost:9999/', {item: item})
        .then((res)=>{
            console.log('Paici');
            this.updateTask();            
        })
        .catch((err)=>{
            console.log(err);            
        })
        event.target.elements.listItem.value = '';
        // let List=this.state.list;
        // List.push(item);
        // this.setState({
        //     list : List
        // })       
    }

    deleteTask(index){
        // console.log(index);

        axios.delete('http://localhost:9999/'+index)
        .then(res=>{
            this.updateTask();
            console.log('success');
        })
        .catch(err=>{
            console.log(err);            
        })
    }

    EditTask(player, id){
        console.log(player, id)  
        axios.put('http://localhost:9999/'+id, {item: player})  
        .then((res)=>{
            this.updateTask();
            console.log("Updated ", player);            
        })  
        .catch((err)=>{
            console.log("Error", err)
        })          
    }

    render(){
        return(
            <div id="Main">
                <h1>Player List</h1>
                <h2>Make Your Favourite Player List </h2>
                 <Playerform add={this.addTask}
                 updateTask={this.updateTask}                
                 />
                 <Playerlist
                    cap={this.state.cap} 
                    detail={this.state.list}
                    deleteTask={this.deleteTask}
                    EditTask={this.EditTask}
                 />
            </div>
        )
    }
}