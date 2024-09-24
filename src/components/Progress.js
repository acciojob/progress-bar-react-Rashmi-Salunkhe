import React, { Component } from 'react'

class Progress extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       progress:0
    }
  }
  startProcess(){
    this.interval=setInterval(()=>{
        this.setState((prevstate)=>({
            progress:prevstate.progress+10
        }),()=>{
            if(this.state.progress>=100){
                clearInterval(this.interval);
            }
        })


    },1000)
  }
 
  componentDidMount() {
    this.startProcess();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <div id="barOuter" style={{width:"200px",height:"30px",backgroundColor:"lightgray"}}>
        <div id="barInner" style={{width:`${this.state.progress}%`,height:"30px",backgroundColor:"blue"}}></div></div><p>{`${this.state.progress}%`}</p>
      </div>
    )
  }
}

export default Progress
