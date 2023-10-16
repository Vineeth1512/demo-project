
import React from "react"

class Home extends React.Component{

    render(){
        return(
            <>
            <h2> Hello from Home Component</h2>
            <p> val ={this.props.val1}  </p>
            <button onClick={()=>{this.props.changeState(44)}}> change state from child</button>
            </>
        )
    }
}
export default Home;