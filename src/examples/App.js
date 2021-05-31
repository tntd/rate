import React from 'react';
import RiskRate from '../lib';

export default () => {
	return (
		<div
			style={{
				textAlign: 'center',
				marginTop: '50px'
			}}
		>
			<RiskRate
				// status='error'
				color='#E86452'
				text='通过'
				count={67}
				width={100}
			/>
		</div>
	);
};
