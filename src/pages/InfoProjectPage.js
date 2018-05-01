import React, {Component} from 'react';

class InfoProjectPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>

                <h1>Hybrid information diffusion in society</h1>

                <h2>About this project</h2>

                <p>
                    Our hypothesis is that the theory of critical hybrid epidemics could be used to explain how
                    information diffuse in society. We have already studied how information diffuse online (in Twitter).
                    Now we would like to conduct several experiments to study how information spreads both offline and
                    online.
                </p>

                <h2>Metapopulation</h2>

                <p>
                    Metapopulation is a population in which individuals are spatially distributed in a habitat in two or
                    more subpopulations. Populations of butterflies and coral-reef fishes are good examples of
                    metapopulation . Human activities and natural disasters are the main causes of metapopulation and
                    increase the population that occurs as metapopulatons. Such factors cause the fragmentation of a
                    large habitat into patches. This may be an important reason whereby models of metapopulation
                    dynamics become important methods/tools in the field of conservation biology.
                </p>

                <h2>Critical hybrid epidemic spreading</h2>

                <p>
                    Dr. Zhou’s team introduced the theory of <a href="https://arxiv.org/abs/1409.7291">critical hybrid
                    epidemics,</a> where used a meta-population model to explain how to combine simple, ineffective
                    spreading mechanisms to produce extremely infectious and persistent epidemics. This theory explained
                    the massive <a href="https://arxiv.org/abs/1406.6046">outbreak of Internet worm Conficker</a> and
                    led to <a href="https://arxiv.org/abs/1503.08992">the first mathematical model that reproduces the
                    full course of HIV infection in human body</a>. Dr. Zhou also studies hybrid information
                    diffusion in society and cyberspace, and new strategies to assist/control hybrid spreading.
                </p>

                <h2>Our research plan</h2>

                <p>
                    We will firstly do our research on Twitter. After we have analysed the results, we will do a few
                    experiments in the real world, and try to workout how information spreads using email.
                </p>

                <h2>Contacts</h2>
                <p>
                    <ul>
                        <li>Liyi Zhou: liyi.zhou.17@ucl.ac.uk</li>
                        <li>Dr Shi Zhou (Supervisor) @ucl</li>
                    </ul>
                </p>
            </div>
        );
    }
}

export default InfoProjectPage;
