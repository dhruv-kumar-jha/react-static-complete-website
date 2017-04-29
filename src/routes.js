'use strict';

import DynamicImport from 'app/components/DynamicImport';

const WebsiteRoutes = {
	childRoutes: [

		{
			path: '/',
			indexRoute: {
				getComponent(location, cb) {
					DynamicImport(
						import(/* webpackChunkName: "home" */'app/content/Home'),
						cb,
						'home'
					);
				}
			},
		},


	],
};

export default WebsiteRoutes;

