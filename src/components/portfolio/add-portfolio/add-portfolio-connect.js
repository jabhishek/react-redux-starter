import { connect } from 'react-redux';
import * as actionCreators from '../../../actionCreators/portfolioActions';
import AddPortfolio from './add-portfolio';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = (dispatch) => {
	const portfolioActions = bindActionCreators(actionCreators, dispatch);
	return {
		addPortfolio: portfolioActions.addPortfolio
	};
};

export default connect(
	null,
	mapDispatchToProps
)(AddPortfolio);
