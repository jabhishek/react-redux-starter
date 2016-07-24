import React from 'react';
import styles from './home.less';
import { connect } from 'react-redux';
import { increase, decrease } from '../actionReducers/count';

export default class Home extends React.Component {
    onClick() {
        this.props.increase(1);
    }
    render() {
        return (
            <div className={styles.home}>
                { this.props.number }
                <button onClick={ this.onClick.bind(this) }>Click</button>
            </div>
        );
    }
}
Home.propTypes = {
    number: React.PropTypes.number,
    increase: React.PropTypes.func
};
export default connect(
    state => ({ number: state.count.number }),
    { increase, decrease }
)(Home);