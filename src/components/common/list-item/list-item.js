import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './list-item.less';

const ListItem = ({ children, className }) => {
	const itemClass = classnames(styles.listItem, className ? className : '');
	return (
		<li className={ itemClass }>
			{ children }
		</li>
	);
};
ListItem.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string
};
export default ListItem;
