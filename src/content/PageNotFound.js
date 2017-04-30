'use strict';

import React from 'react';
import DefaultLayout from 'app/layouts/Default';
import { Heading } from 'app/components/UI';


const PageNotFound = (props) => {

	return (
		<DefaultLayout>

			<div className="component__empty">
				<Heading
					title="Page Not Found."
					subtitle="The page you're looking for doesn't exist or you dont have permission to access it."
				/>
			</div>

		</DefaultLayout>
	);

}

export default PageNotFound;
