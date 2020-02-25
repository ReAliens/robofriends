import React, {Component} from 'react';

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state ={
            hasError: false
        }
    }
componentDidCatch(error , info){
    this.setstate({hasError:true})
}




    render(){
        if(this.state.hasError){
        return <h1>Ooooooooooops that's not good</h1>
    }

    return this.props.children;
} 
}
 export default ErrorBoundary;