import React from "react";


const Title =(props)=> {
return (
  <div>
  {(props.small) ? (<p><small>{props.children}</small></p>) : (<p>{props.children}</p>)}

  </div>

)
}
export default Title;
