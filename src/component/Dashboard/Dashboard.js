import React, {Component} from 'react';
import axios from 'axios';

import House from './House/House';

class Dashboard extends Component {
    constructor(){
        super();

        this.state = {
            houses: []
        }
    }
    componentDidMount() {
        axios.get('/api/houses').then( response => {
            this.setState({
                houses: response.data
            })
        })
    }

    render(){
        <div>
           Dashboard
           {
               this.state.houses.map((element, index) => {
                   return (
                       <House houses={element}/>
                   )
               })
           }
           <button onClick={Wizard}>Add new Property</button>
        </div>
    }
}
export default Dashboard