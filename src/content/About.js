'use strict';

import React from 'react';
import DefaultLayout from 'app/layouts/Default';
import { Heading, URL } from 'app/components/UI';
import { Row, Col } from 'antd';


const About = (props) => {

	return (
		<DefaultLayout>

			<Heading
				title="Productivity Application - Kanban Style Customizable Boards, Lists and Cards to make you more productive."
				subtitle="Kanban style, Trello inspired Productivity application built using the awesome React, Ant Design, Apollo Client and other fantastic libraries."
			/>

			<Col span={14} offset={5} style={{ marginTop: 40 }}>
				<p>For installation instructions and how to use this application, Please visit <URL to="https://github.com/dhruv-kumar-jha/productivity-frontend" /></p>
			</Col>


		</DefaultLayout>
	);

}

export default About;
