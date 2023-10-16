import React from "react";
import Home from "./Home";
import axios from "axios";
class App extends React.Component {
componentDidMount(){

  axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
    console.log(response.data);
  }).catch((err)=>{
    console.log(err);
  })

}

  state ={
    a:25
    
  }


  changeA = (val) => {
     
    this.setState({ a: val });

    console.log(this.state)
  }
  render() {
   // var a = 10;
    return (
      <>
        <h2> Hello From App Component</h2>
         <p> a ={this.state.a} </p>

       
        { <button onClick={()=>{this.changeA(89)}}> changeA</button> }

        {/* <button onClick={this.printA} >print A</button> */}


        <Home  val1={this.state.a}  changeState ={this.changeA}  />
      </>
    )
  }
}
export default App