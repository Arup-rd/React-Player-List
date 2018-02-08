 import React, { Component } from 'react'

//  class Playerlist extends Component {
//     render(){
//     return(
//         <ul>
//            {this.props.detail.map(function(name,index){
//               return <li 
//               key={index}>{name}
//               <button onClick={(e)=>{
//                   e.stopPropagation();
//                  this.props.deleteTask(index)
//                  }}>Delete</button>
//               </li>          
//            })}
//         </ul>
//     )
// }
// }
// export default Playerlist;



 const Playerlist = (props) =>{
    
    return(
        <ul className="list-group">
           {props.detail.map(function(name,index){
              return <li className="list-group-item li"
              key={index}>
              <span className="item">{name.item}</span>
              <button className="btn btn-info btt" onClick={()=>{
                 props.deleteTask(name._id)
              }}>Delete</button>
              </li>          
           })}
        </ul>
    )
}
export default Playerlist;