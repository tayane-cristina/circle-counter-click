import React from 'react';
import "./circleClick.css"

class App extends React.Component {
   constructor() {
     super()
     this.ResetCouter = this.ResetCouter.bind(this)
      this.CircleClick = this.CircleClick.bind(this)
      this.state = {
        numberClick: 0
      }
   }

  CircleClick() {
    console.log("clicou")
    this.setState((previoursNumber, _prop) => ({
      numberClick: previoursNumber.numberClick + 1
    }))
  }

  ResetCouter() {
    console.log("clicou")
    this.setState((previoursNumber, _prop) => ({
      numberClick: 0
    }))

  } 
  
  render () {
    return (
    <div className="div-circle">
      <button className="circle" onClick={this.CircleClick}>{this.state.numberClick}</button>
      <p>Clique no círculo para iniciar a contagem</p>
      <button className='reset' onClick={this.ResetCouter}>RESET</button>
    </div>
    )
  }
};


export default App;
