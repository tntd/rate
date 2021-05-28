import React from 'react';
import cn from 'classnames';
import './index.less';

export default (props) => {
	let { status, color, text, width, count = 0, className } = props;

	const statusMap = {
		success: '#52c41a',
		error: '#ff4d4f',
		default: '#d9d9d9',
		processing: '#1890ff',
		warning: '#faad14'
	};

	if (['success', 'error', 'default', 'processing', 'warning'].indexOf(status) > -1) {
		color = statusMap[status];
	}

	return (
		<div
			className={cn('tntx-risk', className)}
			style={{
				width: width || '80px',
				borderColor: color
			}}
		>
			<span
				className='risk-score'
				style={{
					backgroundColor: color
				}}
			>
				{count}
			</span>
			<span
				className='risk-text'
				style={{
					color: color
				}}
			>
				{text || '-'}
			</span>
		</div>
	);
};
