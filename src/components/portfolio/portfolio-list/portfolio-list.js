import React from 'react';
import List from '../../common/list/list';
import ListItem from '../../common/list-item/list-item';

const PortfolioList = ({ portfolios }) => {
	const items = [];
	if (!portfolios) {
		return (
			<div className="no-items"></div>
		);
	}
	portfolios.forEach(p => {
		items.push(<ListItem key={ p._id }>{ p.portfolio }</ListItem>);
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