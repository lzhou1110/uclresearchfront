import React, {Component} from 'react';

class InfoDesignPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>Experiment Design</h1>
                <p><b>Note that all the designs on this page is subject to change.</b></p>

                <h2>Goal</h2>
                <p>Study the natural parameters in social information spreading (such as infectious rate, degree of
                    nodes and etc.). </p>

                <h2>Independent Variables</h2>
                <p>
                    <ul>
                        <li>All nature parameters</li>
                        <li>Infectious channel</li>
                        <li>Social network structure</li>
                    </ul>
                </p>

                <h2>Dependent Variables</h2>
                <p>
                    <ul>
                        <li>
                            Rate of occurrence of the initial event.
                        </li>
                    </ul>
                </p>

                <h2>How many times to repeat the experiment?</h2>
                <p>We will do the experiment under different settings for 3 times: <br/>
                    <ol>
                        <li>15th May - 23rd May: Post one poster every 1 day</li>
                        <li>15th June - 23rd June: Post one poster every 2 days</li>
                        <li>15th July - 23rd July: Post one poster every 3 days</li>
                    </ol>
                </p>


                <h2>Reward:</h2>
                <p>To be decided</p>

                <h2>Distribution of reward:</h2>
                <p>A score will be calculated as:</p>
                <p>1 + number of level 1 decedents + number of level 2 decedents.</p>
                <p>Decedents of X is defined as the number of verified users invited by X.</p>
                <p>10 winners will be randomly drawn from all participants, by using a uniform distribution based on the
                    scores. In other words, they higher the score, the more likely a participant will win.</p>

                <h2>Experiment Steps</h2>
                <p>
                    <ol>
                        <li>A poster with QR code is posted in UCL.</li>

                        <li>Participant X decides to participate. X scans the QR code.</li>

                        <li>A web page will show and asks to input email address.</li>

                        <li>Participant X enters email address and clicks confirm. The system will generate an link, and
                            send it to the email address provided in Step 3.
                        </li>

                        <li>Participant X clicks the link to confirm the email address. Now X is infected.
                        </li>

                        <li>Any infected participant will receive 5 active invitation links. We do not limit how the
                            participant spreads the links. The participant can request more if some links were used up.
                        </li>

                        <li>Say Participant Y has received the link from an already infected Participant X.
                        </li>

                        <li>If Participant Y decides to participate, it can click the link.
                        </li>

                        <li>Repeat from Step 3.
                        </li>
                    </ol>
                </p>
            </div>
        )
    }
}

export default InfoDesignPage;