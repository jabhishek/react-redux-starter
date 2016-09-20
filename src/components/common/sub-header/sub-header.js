import React from 'react';
import styles from './sub-header.less';
import classnames from 'classnames';

const SubHeader = ({ headerText, className = ''}) => {
	const headerClass = classnames(styles['sub-header'], className ? className : '');
	return (
		<div className={ headerClass }>
			{ headerText }
		</div>
	);
};
SubHeader.propTypes = {
	headerText: React.PropTypes.string,
	className: React.PropTypes.string
};
export default SubHeader;