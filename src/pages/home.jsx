import React from 'react';
import CenterContent from "src/layouts/CenterContent.jsx";
import Jumbotron from "src/components/homeComps/Jumbotron.jsx";
import Services from "src/components/homeComps/services.jsx";

function Home() {
	return (
		<CenterContent>

			<Jumbotron/>	
			<Services/>

		</CenterContent>
	)
}

export default Home;
