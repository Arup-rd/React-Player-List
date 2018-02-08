import React, { Component } from 'react'
import Playerlist from './Playerlist'

const Playerform = (props) => {
    return(
        <form onSubmit={props.add}>
            <input name="listItem" type="text" 
            // value={props.currentList}
            />
            <button  className="btn btn-info bt" type="submit">Add</button>
        </form>
    )



}
export default Playerform;