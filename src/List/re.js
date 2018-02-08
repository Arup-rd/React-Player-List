const item=[];
var tasks = item.map((element,index)=>{
     return <li key={index}>{element}</li>
})

return(
    <div>
       <ul>
          <li>
            {tasks}
          </li>
         {data}
       </ul>
    </div>
