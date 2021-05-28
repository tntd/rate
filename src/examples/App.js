import React from 'react';
import Risk from '../lib';

export default () => {
	return (
		<div
			style={{
				textAlign: 'center',
				marginTop: '50px'
			}}
		>
			<Risk
				// status='error'
				color='#E86452'
				text='通过'
				count={67}
				width={100}
			/>
		</div>
	);
};
