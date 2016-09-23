import React from 'react';
import List from '../../common/list/list';

const PortfolioList = ({ portfolios }) => {
	const items = [];
	portfolios.forEach(p => {
		items.push(<li key={ p }>{ p }</li>);
	});

	return (
		<List>
			{ items }
		</List>
	);
};
PortfolioList.propTypes = {
	portfolios: React.PropTypes.array
};
export default PortfolioList;