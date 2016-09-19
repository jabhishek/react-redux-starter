import { connect } from 'react-redux';
import PortfolioPage from './portfolios';

const mapStateToProps = (state) => {
	return {
		portfolios: state.portfolios
	};
};

export default connect(
	mapStateToProps,
	null
)(PortfolioPage);