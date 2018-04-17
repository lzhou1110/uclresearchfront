import React, {Component} from 'react';
import {Input, Row, Col, Button, message, Modal} from 'antd';
import * as CONSTANTS from '../constants.js'
import InviteFriendsPage from './InviteFriendsPage.js';

class LinkedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        fetch(
            `${CONSTANTS.BACKEND_URL}/confirm/${this.props.match.params.email}/${this.props.match.params.uuid}`,
            {
                method: 'get',
                visible: false,
                alreadyUpdated: false
            }
        ).then(response => {
            console.log(response.status)
            if (response.status === 200) {
                console.log(this.state)
                this.state.visible = true;
            } else if (response.status === 208) {
                this.state.alreadyUpdated = true;
            } else {
                message.error('Not permitted to access this page')
            }
            this.forceUpdate()
        });
    }

    render() {
        return (
            <main id="page-wrap">
                {
                    this.state.visible ?
                        <div>
                            <h1>Invite Friends</h1>
                            < InviteFriendsPage email={this.props.match.params.email}/>
                        </div>
                        :
                        null
                }

                {
                    this.state.alreadyUpdated?
                        <div>
                            <h1>Already Entered</h1>
                        </div>
                        :
                        null
                }

                {
                    !this.state.alreadyUpdated && !this.state.visible?
                        <div>
                            <h1>No access</h1>
                        </div>
                        :
                        null
                }
            </main>
        );
    }
}

export default LinkedPage;