import React, {Component} from 'react';
import * as CONSTANTS from '../constants.js'

class ExperimentAccessAccountPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'pending',
            email: '',
            links: '',
            totalParticipants: 0,
            level1child: 0,
            level2child: 0,
            score: 0
        }

        fetch(
            `${CONSTANTS.BACKEND_URL}/account/${this.props.match.params.dbid}/${this.props.match.params.email}/${this.props.match.params.secret}`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                }
            }
        ).then(response => {
            if (response.status === 200) {
                this.state.status = 'visible';
            } else {
                this.state.status = 'invisible';
                this.forceUpdate()
            }
            return response;
        }).then(responseData => {
            return responseData.json();
        }).then(responseJson => {
            this.state.email = responseJson.email;
            this.state.totalParticipants = responseJson.totalParticipants;
            this.state.level1child = responseJson.totalLevel1Children;
            this.state.level2child = responseJson.totalLevel2Children;
            this.state.score = responseJson.score;
            return this.state.status;
        }).then(status => {
            if (status === 'visible') {
                fetch(
                    `${CONSTANTS.BACKEND_URL}/participant/invitations/${this.props.match.params.dbid}/secret/${this.props.match.params.secret}`,
                    {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                        }
                    }
                ).then(linksData => {
                    return linksData.json()
                }).then(linksJson => {
                    console.log(linksJson)
                    this.state.links = linksJson;
                    this.forceUpdate()
                })
            }
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.status === 'visible' ?
                        <div>
                            <h1>Welcome, {this.state.email}</h1>
                            <h2>Activation links:</h2>
                            <p>
                                <ul>
                                    {
                                        this.state.links.map(function (link) {
                                            return <li>{link}</li>
                                        })
                                    }
                                </ul>
                            </p>
                            <h2>Score: {this.state.score}</h2>
                            <p>
                                <ul>
                                    <li>Number of participants in the system: {this.state.totalParticipants}</li>
                                    <li>Number of level 1 decedents you invited: {this.state.level1child}</li>
                                    <li>Number of level 2 decedents you invited: {this.state.level2child}</li>

                                </ul>
                            </p>
                        </div>
                        :
                        null
                }

                {
                    this.state.status === 'pending' ?
                        <div>
                            <h1>Fetching ......</h1>
                        </div>
                        :
                        null
                }

                {
                    this.state.status === 'invisible' ?
                        <div>
                            <h1>You do not have access</h1>
                        </div>
                        :
                        null
                }
            </div>
        );
    }
}

export default ExperimentAccessAccountPage;