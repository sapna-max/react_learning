import React, {Component} from 'react'

class Counter2 extends Component{
    
  
        shouldComponentUpdate(nextprops,nextstate){
            console.log(nextprops);
            console.log(this.props.value);
            if(this.props.value!==nextprops.value){
                return true
            }
            return false
        }
    
 
    render(){
        console.log('Counter2 calling');
        return(
            <div>
                <h1>Counter 1.</h1>
                <h2>{this.props.value}</h2>
                <button onClick={this.props.onClick}>ADD</button>
            </div>
        )
    }
}

export default Counter2
