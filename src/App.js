import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {bubble as Menu} from 'react-burger-menu';
import ProjectPageTag from './pages/ProjectPage.js';
import ResearchPageTag from './pages/ResearchPage.js';
import ParticipationPageTag from './pages/ParticipationPage.js';
import InvitePageTag from './pages/LinkedPage.js';
import './css/App.less';

const HomePage = () => (
    <ProjectPageTag/>
);

const ParticipatePage = () => (
    <ParticipationPageTag/>
);

const ResearchPage = () => (
    <ResearchPageTag/>
);

const InviteFriendsPage = ({ match }) => (
    <InvitePageTag/>
)

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
                        <h2>Participate</h2>
                        <a id="participate" className="menu-item" href="/participate">Experiment 1</a>
                    </Menu>
                </div>

                <Router>

                    <div className="content">
                        <Route path="/home" component={HomePage}/>
                        <Route path="/participate" component={ParticipatePage}/>
                        <Route path="/research" component={ResearchPage}/>
                        <Route path="/invite/:email/:uuid" component={InvitePageTag}/>
                    </div>

                </Router>


            </div>
        );
    }
}

export default App;