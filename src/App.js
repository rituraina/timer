import React from "react"
import Timer from "./timerOne"

class App extends React.Component{
constructor(){
  super();

this.state={
  timerOn:false
}
}
handleTimerOn =()=>{
  this.setState((prevState)=>({timerOn: !prevState.timerOn}));
}


  render(){
  return (
    <>
    
      <Timer timerOn={this.state.timerOn}/>
      <button onClick={this.handleTimerOn}>{this.state.timerOn?"STOP":"START"}</button>
     
    </>
  

    
   
  );
}
}

export default App;
