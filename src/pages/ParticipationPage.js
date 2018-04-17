import React, {Component} from 'react';
import {Input, Row, Col, Button, message, Modal} from 'antd';
import InviteFriendsPage from './InviteFriendsPage.js';
import * as CONSTANTS from '../constants.js'

class ParticipationPage extends Component {
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
        fetch(`${CONSTANTS.BACKEND_URL}/verify/${this.state.data}`,
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
            <main id="page-wrap">
                <h1>Participate!</h1>
                <Row style={{marginTop: '20%'}}>
                    <Col span={4}></Col>
                    <Col span={10}>
                        <Input type="email" onChange={this.changeInput} placeholder="Enter your email address"/>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={4}>
                        <Button type="primary" onClick={this.submit}>Submit</Button>
                    </Col>
                </Row>
            </main>
        );
    }
}

export default ParticipationPage;