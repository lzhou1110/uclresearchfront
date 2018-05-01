import React, {Component} from 'react';
import {Input, Button, message} from 'antd';
import * as CONSTANTS from '../constants.js'
import InfoTermsAndConditionPage from './InfoTermsAndConditionPage.js'

class ExperimentSeedParticipationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        }
    }

    changeInput = (e) => {
        this.setState({
            data: e.target.value
        })
    };

    submit = () => {
        fetch(`${CONSTANTS.BACKEND_URL}/verify/seed/${CONSTANTS.SEED_ID}/${CONSTANTS.SEED_SECRET}/${this.state.data}`,
            {
                method: 'get',
            }
        ).then(response => {
            if (response.status === 406) {
                message.error('Invalid email address')
            }
            if (response.status === 400) {
                message.error('Email already registered')
            }
            return response;
        }).then(response => {
            if (response && response.status === 200) {
                message.info('Please check your email')
            }
        }).catch(error => {
            message.error("Unexpected error happened")
        });
    }

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
            <div id="page-wrap">
                <h1>You are a seed node!</h1>
                <Input type="email" onChange={this.changeInput} placeholder="Enter your email address here"/>
                <Button type="primary" onClick={this.submit}>Validate your email</Button>
                <br/>
                <br/>
                <p><b>Note that by clicking submit, you are agreeing to the following terms and conditions:</b></p>
                <div class="termsandconditions">
                    <InfoTermsAndConditionPage></InfoTermsAndConditionPage>
                </div>
            </div>
        );
    }
}

export default ExperimentSeedParticipationPage;