import React, {Component} from 'react';

export default class EditForm extends Component{
    constructor(props){
        super(props);
        this.onUpdate = this.onUpdate.bind(this);
    }

    onUpdate(e){
        e.preventDefault();
        let r = this.refs.inputValue.value;
        let id = this.props.values._id
        this.props.onUpdate(r, id);
    }

    render(){
        // console.log(this.props.values)
        return(
            <div>
                <form className="form-inline" onSubmit={this.onUpdate}>
                    <input type="text" name={"dd"} id="editBox" ref="inputValue" defaultValue={this.props.values.item}/>
                    <button className="btn btn-primary" type="text" >Update</button>
                </form>
            </div>
        )
    }


}