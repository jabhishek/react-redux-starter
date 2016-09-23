import React from 'react';
import List from '../../common/list/list';
import ListItem from '../../common/list-item/list-item';

const PortfolioList = ({ portfolios }) => {
	const items = [];
	portfolios.forEach(p => {
		items.push(<ListItem key={ p }>{ p }</ListItem>);
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