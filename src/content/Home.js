'use strict';

import React from 'react';
import DefaultLayout from 'app/layouts/Default';
import { Heading } from 'app/components/UI';
import { Row, Col, Carousel } from 'antd';


const Home = (props) => {

	return (
		<DefaultLayout>

			<Heading
				title="Hey You, Yes You!, Want to be More Productive? Have lists of things you care about? Love simple and sexy UI?"
			/>

			<Col span={24} className="component--slider">
				<Carousel autoplay autoplaySpeed={5000}>
					<div>
						<div className="image">
							<img src="/images/slider/1.png" />
						</div>
						<div className="title">This is a screenshot of the Board view page</div>
					</div>
					<div>
						<div className="image">
							<img src="/images/slider/2.png" />
						</div>
						<div className="title">This is a screenshot of The Login page in Chinese Language.</div>
					</div>
				</Carousel>
			</Col>

		</DefaultLayout>
	);

}

export default Home;
