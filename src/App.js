import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {bubble as Menu} from 'react-burger-menu';
import InfoProjectPage from './pages/InfoProjectPage.js';
import InfoResearchPage from './pages/InfoResearchPage.js';
import InfoTermsAndConditionPage from'./pages/InfoTermsAndConditionPage.js'
import InfoDesignPage from './pages/InfoDesignPage.js';
import ExperimentSeedParticipationPage from './pages/ExperimentSeedParticipationPage.js';
import ExperimentNormalParticipationPage from './pages/ExperimentNormalParticipationPage.js';
import ExperimentAccessAccountPage from './pages/ExperimentAccessAccountPage.js';

import './css/App.less';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <div className="header">
                    <Menu className="menu">
                        <h2>UCL MRes Project</h2>
                        <a id="home" className="menu-item" href="/home">Hybrid Spreading</a>
                        <a id="research" className="menu-item" href="/research">Research Results & Papers</a>

                        <h2>Experiments</h2>
                        <a id="design" className="menu-item" href="/design">Experiment Design</a>
                        <a id="participate" className="menu-item" href="/seedParticipate">Experiment 1</a>

                        <h2>Other</h2>
                        <a id="termsAndConditions" className="menu-item" href={"/termsAndConditions"}>Terms & Conditions</a>
                    </Menu>
                </div>

                <Router>
                    <div className="content">
                        {/*Information Pages*/}
                        <Route path="/home" component={InfoProjectPage}/>
                        <Route path="/research" component={InfoResearchPage}/>

                        {/*Experiment Related Routing*/}
                        <Route path="/design" component={InfoDesignPage}/>
                        <Route path="/termsAndConditions" component={InfoTermsAndConditionPage}/>
                        <Route path="/seedParticipate" component={ExperimentSeedParticipationPage}/>
                        <Route path="/participate/:dbid/:secret" component={ExperimentNormalParticipationPage}/>
                        <Route path="/confirm/:dbid/:email/:secret" component={ExperimentAccessAccountPage}/>
                    </div>

                </Router>


            </div>
        );
    }
}

export default App;