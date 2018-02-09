import React, {Component} from 'react';
import EditForm from './EditForm';

export default class List extends Component{
    constructor(props){
        super(props);
        this.onDeleteItem = this.onDeleteItem.bind(this);
        this.onEditItem = this.onEditItem.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.state = {
            e : true
        }
    }

    onDeleteItem(){
        // console.log(this.props.items);        
        this.props.onDeleteItem(this.props.items._id);
    }

    onEditItem(){
        this.setState({
            e: false
        })
    }

    onUpdate(value, id){
        this.props.onEditItem(value, id);
        this.setState({
            e: true
        })
    }

    render(){
        return (
            <div>
                {(this.state.e) ?
                <li className="list-group-item li">
                    <span className="item">{this.props.items.item}</span>
                    <button className="btn btn-info btt" onClick={this.onDeleteItem}>Delete</button>
                    <button className="btn btn-info btt" onClick={this.onEditItem}>Edit</button>
                </li> 
                : <EditForm values={this.props.items} onUpdate={this.onUpdate}/>
                }
            </div>
        )
    }


}