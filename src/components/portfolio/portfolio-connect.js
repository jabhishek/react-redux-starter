import { connect } from 'react-redux';
import PortfolioPage from './portfolios';
import * as actionCreators from '../../actionCreators/portfolioActions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
	return {
		portfolios: state.portfolios
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		portfolioActions: bindActionCreators(actionCreators, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PortfolioPage);