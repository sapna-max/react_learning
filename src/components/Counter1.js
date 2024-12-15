import React, {Component} from 'react'

class Counter1 extends Component{
    shouldComponentUpdate(nextprops,nextstate){
        console.log(nextprops);
        console.log(this.props.value);
        if(this.props.value!==nextprops.value){
            return true
        }
        return false
    }

    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("call getSnapshotBeforeUpdate method");
        console.log(prevprops);        
        return prevprops;
    }
 
    componentDidUpdate(prevprops,prevstate,snapshot){
        console.log("call componentDidUpdate method");
        console.log(prevprops);     
        console.log(snapshot);
     }

    render(){
        console.log('Counter1 calling');
        return(
            <div>
                <h1>Counter 1.</h1>
                <h2>{this.props.value}</h2>
                <button onClick={this.props.onClick}>ADD</button>
            </div>
        )
    }
}

export default Counter1
