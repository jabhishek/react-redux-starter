import { connect } from 'react-redux';
import TradesPage from './trades-page';

const mapStateToProps = (state) => {
	return {
		trades: state.trades
	};
};

export default connect(
	mapStateToProps,
	null
)(TradesPage);