import React, { Component, PropTypes } from 'react';

const PortfolioPage = (portfolios) => {
	return (
		<div className="container">
			{ portfolios.length } portfolios
		</div>
	);
};
export default PortfolioPage;

