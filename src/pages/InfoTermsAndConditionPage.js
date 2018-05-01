import React, {Component} from 'react';

class InfoTermsAndConditionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h2>Terms and conditions</h2>
                <h3>Under the Data Protection Act, we have a legal duty to protect any information we collect from
                    users</h3>
                <p>The privacy policy below relates to personal data collected in the course of registration
                </p>
                <h3>PERSONALLY PROVIDED INFORMATION</h3>
                <p><b>The personal data supplied at registration are held in a database owned by the University College
                    London</b>, and are only ever processed for <b>research purpose</b> and <b>purposes explicitly
                    agreed to by the
                    end user</b>, in accordance with the Data Protection Act 1998.</p>
                <p>Personal data are:</p>
                <p>
                    <ul>
                        <li>email address</li>
                        <li>date of registration</li>
                        <li>date of last amendment</li>
                        <li>agreement to any end user or special conditions</li>
                        <li>any username and id required for user authentication and validation</li>
                        <li>internal user database unique id</li>
                        <li>details of any data accessed/downloaded</li>
                        <li>details of invitation links generated using user email</li>
                    </ul>
                </p>

                <p>The personal data are used for authentication and statistical purposes, and for the purposes of the
                    management of the service (including registration and access to data). They are also used for other
                    lawful purposes notified to the user where user(s) have been given the opportunity to withdraw
                    consent.
                </p>

                <p>Personal data relating to access to a particular data collection (e.g. in the form of a data usage
                    report) may only ever be passed to:
                </p>

                <p>
                    <ul>
                        <li>University College London</li>
                        <li>the depositors and distributors of the data</li>
                        <li>copyright and other intellectual property rights owners of the data collection</li>
                        <li>the funders of the project</li>
                        <li>in exceptional circumstances, the user’s own institution or organisation</li>
                    </ul>
                </p>

                <p>To ensure effective management of the service, personal data are retained for 50 years from the date
                    of first registration. At the end of that period and subject to the individual no longer being
                    registered, data which could identify that individual user will be removed from the database, though
                    anonymised data are retained to facilitate reporting and statistical analysis. The anonymised data
                    which are retained are:</p>

                <p>
                    <ul>
                        <li>date of registration</li>
                        <li>date of last amendment</li>
                        <li>internal user database unique id</li>
                        <li>details of any data accessed/downloaded</li>
                        <li>details of invitation links generated using user email (with email removed)</li>
                    </ul>
                </p>

                <p>Users may at any time request withdrawal of registration. At this point, contact details will be
                    removed, ensuring that no further communication will be received. However, for contractual reasons,
                    remaining personal data are subject to the same retention policy stated above.</p>

                <p>Registered users may access their personal data online at any time by logging in to their
                    account.</p>

                <h3>INFORMATION AUTOMATICALLY COLLECTED AND STORED</h3>

                <p>When browsing through any website, certain information about a visitor can be collected.</p>

                <p>The following information is automatically collected and stored about each visitor to the site:</p>

                <p>
                    <ul>
                        <li>date of last amendment</li>
                    </ul>
                </p>

                <p>This information is used for statistical purposes and to help make the site more useful to visitors.
                    Unless it is specifically stated otherwise, no additional information will be collected from
                    visitors to the website.
                </p>
            </div>
        );
    }
}

export default InfoTermsAndConditionPage;
