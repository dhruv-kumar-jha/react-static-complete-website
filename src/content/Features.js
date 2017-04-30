'use strict';

import React from 'react';
import DefaultLayout from 'app/layouts/Default';
import { Heading } from 'app/components/UI';
import { Row, Col, Icon } from 'antd';


const Features = (props) => {

	const APPLICATION_FEATURES = [
		{ status: true, title: 'Static Application', description: 'You can host the app on any Static Host/CDN instead of a server', },
		{ status: true, title: 'Boards', description: 'Boards are the gateway to your lists, You can have as many boards as you want', },
		{ status: true, title: 'Lists', description: 'Each list can easily be re-arranged and updated, You can add multiple cards to a list', },
		{ status: true, title: 'Cards', description: 'Cards are the meat of this app, you can add as many cards as you like, re-arrange them, drag them from one list to another, etc', },
		{ status: true, title: 'Todo List', description: 'Each card has Todo List tab, There you can add your todo list items, update them, mark them as completed and so on.', },
		{ status: true, title: 'Card Meta', description: 'Each card has meta section where you can specify Duedate, Link, Image and the appropriate icons will appear below card in the list view., If image URL is specified, Image will appear above the card title.', },
		{ status: true, title: 'Custom Background', description: 'Each board, list and card can have different Background color, Boards can have background images as well. To change the background color of board just edit the board by clicking the Edit icon below the header and there you can update board details along with background color.', },
		{ status: true, title: 'Settings', description: 'You can update your details, password and preferred language in the settings page', },
		{ status: true, title: 'Public Boards', description: 'Now you can make boards public, Public boards are accessible to all the users with the board URL., By default all boards are private.', },
		{ status: true, title: 'Code Splitting', description: "Split the code into different files and only load those files when necessary., Enable tree shaking so we only include the code we're actually using in the app.", },
		{ status: true, title: 'Lists Spacing', description: 'Now you can add spaces between lists, You can add space before and after a list. (might be useful to some of you)', },
		{ status: true, title: 'Customizations', description: 'Now you have more control over specifying background colors, you can either select it using colorpicker or enter it manually, it can be Color Names, HEX, RGB or RGBA.', },
		{ status: true, title: 'Multiple Languages', description: 'Added support for multiple languages, Current translation of Chinese langugae is done using Google Translate.', },
		{ status: true, title: 'Card Positioning', description: 'Now you can top and bottom margin to any card, Giving your more flexibility and control over the UI.', },
		{ status: true, title: 'Loading Indicator', description: 'Since the project makes use of Webpack code splitting, Sometimes it felt like clicks were unresponsive, Now you can see loading message whenever new script(s) is being loaded.', },
	];


	return (
		<DefaultLayout>

			<Heading
				title="Some of the Features of this Application."
				subtitle="Given below is a list of features of this application., If you have any suggestions for a feature, Just create a new issue or let me know."
			/>
	

			<Row type="flex" className="component--features">
				{ APPLICATION_FEATURES.map( (feature,index) => {
					return (
						<Col key={index} xs={24} sm={12} md={8} className="feature-container">
						<div className="feature">
							<div className="title">
								<div className="status">{ feature.status ? <Icon type="check-circle-o" /> : <Icon type="close-circle-o" /> }</div>
								{ feature.title }
							</div>
							<div className="description">{ feature.description }</div>
						</div>
						</Col>
					);
				}) }
			</Row>


		</DefaultLayout>
	);

}

export default Features;

