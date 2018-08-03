import React, { Component } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import {connect} from 'react-redux'


class StepOne extends Component {
    constructor() {
        super()


        
    }
    handleName = (e) => {
        this.setState({
            name: e.tatget.value
        })
    }
    handleAddress =(e)=> {
        this.setState({
            address: e.target.value
        })
    }
    handleCity = (e)=>{
        this.setState({
            city: e.target.value
        })
    }
    handleState = (e) => {
        this.setState({
            state: e.target.value
        })
    }
    handleZipcode = (e) =>{
        this.setState({
            zipcode: e.target.value
        })
    }


    render() {
        return (
            <div>
                <Wizard />
                {/* <input this.props.name/>
            <input this.props.address/>
            <input this.props.city/>
            <input this.props.state/>
            <input this.props.zipcode/> */}
                
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zipcode: state.zipcode,
    }
}

export default connect(mapStateToProps)(StepOne)