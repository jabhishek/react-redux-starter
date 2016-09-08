import React from 'react';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';
import { bindActionCreators } from 'redux';

class About extends React.Component {
    redirect() {
        this.props.routerActions.push('/home');
    }
    render() {
        return (
            <div>About
                <button onClick= {this.redirect.bind(this)}>Click</button>
            </div>
        );
    }
}
About.propTypes = {
    routerActions: React.PropTypes.object
};

const mapDispatchToProps = (dispatch) => {
    return {
        routerActions: bindActionCreators(routerActions, dispatch)
    };
};

export default connect(
    null,
    mapDispatchToProps
)(About);
