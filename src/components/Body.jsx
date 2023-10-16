import React, {Component} from "react";
import axios from 'axios';

class Body extends Component{
    constructor(props){
        super(props)
        this.state ={
            count: 0,
            coffee: {}
        }
    }

    componentDidMount(){
        //axios api call
        axios.get('https://random-data-api.com/api/coffee/random_coffee')
         .then( (response) => {
            this.setState({coffee: response.data})
         })
          .catch(function (error){
            console.log(error);
          })
    }

    //componentDidUpdate(prevProps, prevState){
    //    console.log(prevState)
    //    console.log(this.state)
    //   // function or do something based on changes
    //}

    render(){
        const {coffee} = this.state 
        const increment = () => {
            this.setState({count: this.state.count + 1})
        }
        return(
            <React.Fragment>
                <button type="button" className="btn btn-dark" on onClick={increment}>
                    {this.state.count}
                </button>
                <p>
                    {coffee.blend_name}
                </p>
            </React.Fragment>
        )
    }

}

export default Body