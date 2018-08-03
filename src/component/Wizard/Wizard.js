import React, {Component} from 'react';
import Dashboard from '../Dashboard/Dashboard';

    let initialState = {
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: ''
    }

class Wizard extends Component {

    render(){
        <div>
            <Wizard />
            {/* <input name/>
            <input address/>
            <input city/>
            <input state/>
            <input zipcode/> */}
            <button onClick={Dashboard}>Cancel</button>
        </div>
    }
}
export default Wizard