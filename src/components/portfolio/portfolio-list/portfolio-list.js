import React from 'react';

const PortfolioList = ({ portfolios }) => {
	const items = [];
	portfolios.forEach(p => {
		items.push(<li key={ p }>{ p }</li>);
	});

	return (
		<ul>
			{ items }
		</ul>
	);
};
PortfolioList.propTypes = {
	portfolios: React.PropTypes.array
};
export default PortfolioList;