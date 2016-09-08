import React from 'react';
import styles from './home.less';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { increase } from '../actionReducers/count';

class Home extends React.Component {
    redirect() {
        this.props.routerActions.push('/about');
    }
    onClick() {
        this.props.increase(1);
    }
    render() {
        return (
            <div className={styles.home}>
                { this.props.number }
                <button onClick={ this.onClick.bind(this) }>Click</button>
                <button onClick={ this.redirect.bind(this) }>Home</button>
            </div>
        );
    }
}
Home.propTypes = {
    number: React.PropTypes.number,
    increase: React.PropTypes.func,
    routerActions: React.PropTypes.object
};

const mapDispatchToProps = (dispatch) => {
    return {
        routerActions: bindActionCreators(routerActions, dispatch),
        increase: bindActionCreators(increase, dispatch)
    };
};
export default connect(
    state => ({ number: state.count.number }),
    mapDispatchToProps
)(Home);