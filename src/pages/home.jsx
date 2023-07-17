import React from 'react';
import CenterContent from "src/layouts/CenterContent.jsx";
import Jumbotron from "src/components/homeComps/Jumbotron.jsx";
import Services from "src/components/homeComps/services.jsx";
import TwitterEmbed from "src/components/homeComps/twitterEmbed.jsx";
import YoutubeApi from "src/components/homeComps/youtubeApi.jsx";

function Home() {

	return (
		<CenterContent>
			<Jumbotron />
			<Services />
			<TwitterEmbed />
			<YoutubeApi/>
		</CenterContent>
	);
};

export default Home;