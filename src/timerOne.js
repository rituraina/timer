import React from "react"
export default class Timer extends React.Component{
    constructor(){
        super();

        this.state={
            time:0
        }
        this.timer=null;
        console.log("timerOne Constructor")
    }

    static getDerivedStateFromProps(){
        console.log("timerOne getDerivedStateFromprops")
        return null;
    }

    shouldComponentUpdate(nextPrips,nextState){
        return true;
    }
    
    render(){
        console.log("timerOne render")
        return(
            <>
        <h1>Timer:  {new Date(this.state.time *1000).toISOString().slice(11,19)}</h1>
       
        </>
        )
    }
    componentDidMount(){
        console.log("timerOne componentDidMount")

    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("timerOne getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate(prevProps,prevState,snapShot){
        console.log("timerOne componentDidUpdate");
      
        if(prevProps.timerOn !==this.props.timerOn){
            if(this.props.timerOn){
                this.timer=setInterval(() =>{
                    this.setState((prevState)=> ({time: prevState.time+1}))
                },1000);
            }
            else{
                clearInterval(this.timer);
            }
        }

    }
    componentWillUnmount(){
        console.log("Timer componentWillUnmount");
        clearInterval(this.timer);
    }
}