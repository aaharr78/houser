import React, { Component } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { Route } from 'react-router-dom';
import StepOne from './src/StepOne';
import StepTwo from './src/StepTwo';
import StepThree from './src.StepThree';

class Wizard extends Component {
    constructor() {
        super()



    }
    render() {
        return (
            <div>
                <Route component={StepOne} path='/Wizard/StepOne' />
                <Route component={StepTwo} path='/Wizard/StepTwo' />
                <Route component={StepThree} path='Wizard/StepThree' />
                <button onClick={Dashboard}>Cancel</button>
            </div>
        )

    }
}

export default Wizard