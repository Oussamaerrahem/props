import React  from 'react';
import image2 from "./image2.png";
import Wrapper from "./Wrapper.js";
import Photo from "./Photo.js";
import Title from "./Title.js";

function App () 
{
  return (

    
<Wrapper>

	<Photo srcc={image2} />

	<Title style ={{color:"red"}} >My Name here </Title>

	<Title small>My job here</Title>


</Wrapper>
    

  )
}

export default App;
