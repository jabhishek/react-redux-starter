import React from 'react';
import Subheader from '../common/sub-header/sub-header';
import PortfolioList from './portfolio-list/portfolio-list';

const PortfolioPage = ({portfolios}) => {
	return (
		<div className="container">
			<Subheader headerText={ `${portfolios.length} portfolios` }></Subheader>
			<PortfolioList portfolios={ portfolios}/>
		</div>
	);
};
PortfolioPage.propTypes = {
	portfolios: React.PropTypes.array
};
export default PortfolioPage;

