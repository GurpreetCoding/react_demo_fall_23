import React, {Component} from "react";

class Body extends Component{
    constructor(props){
        super(props)
        this.state ={
            count: 0
        }
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevState)
        console.log(this.state)
        // function or do something based on changes
    }

    render(){
        const increment = () => {
            this.setState({count: this.state.count + 1})
        }
        return(
            <React.Fragment>
                <button type="button" className="btn btn-dark" on onClick={increment}>
                    {this.state.count}
                    
                </button>
            </React.Fragment>
        )
    }

}

export default Body