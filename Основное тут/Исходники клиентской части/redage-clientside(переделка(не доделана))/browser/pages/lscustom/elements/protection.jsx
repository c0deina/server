import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProtectionLogo from '../../../assets/img/lscustom/protection.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={ProtectionLogo} alt="ProtectionLogo" width="50px" height="50px"/>
                    <p>Каркас безопасности</p>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        
    };
};

export default connect(mapStateToProps)(Home);