import React from 'react';
import Subheader from '../common/sub-header/sub-header';
import PortfolioList from './portfolio-list/portfolio-list';
import AddPortfolio from './add-portfolio/add-portfolio-connect';

export default class PortfolioPage extends React.Component {
	componentWillMount() {
		this.props.portfolioActions.getPortfolios();
	}
	render() {
		return (
			<div className="container">
				<AddPortfolio />
				<div className="separator"></div>
				<Subheader headerText="All Portfolios"></Subheader>
				<PortfolioList portfolios={ this.props.portfolios}/>
			</div>
		);
	}
}
PortfolioPage.propTypes = {
	portfolioActions: React.PropTypes.object,
	portfolios: React.PropTypes.array
};

