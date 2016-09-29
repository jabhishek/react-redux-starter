import React from 'react';
import Subheader from '../common/sub-header/sub-header';
import PortfolioList from './portfolio-list/portfolio-list';
import AddPortfolio from './add-portfolio/add-portfolio';

const PortfolioPage = ({portfolios}) => {
	return (
		<div className="container">
			<AddPortfolio />
			<div className="separator"></div>
			<Subheader headerText="All Portfolios"></Subheader>
			<PortfolioList portfolios={ portfolios}/>
		</div>
	);
};
PortfolioPage.propTypes = {
	portfolios: React.PropTypes.array
};
export default PortfolioPage;

