import React from 'react';
import CenterContent from "src/layouts/CenterContent.jsx";
import Jumbotron from "src/components/homeComps/Jumbotron.jsx";
import Services from "src/components/homeComps/services.jsx";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


function Home() {

	return (
		<CenterContent>
			<Jumbotron />
			<Services />
			<div className="centerContent">
				<div className="selfCenter spaceBetween">
					<TwitterTimelineEmbed
						onLoad={function noRefCheck() { }}
						options={{
							height: 500,
							width: 500,
						}}
						screenName="pogopedia"
						sourceType="profile"
						tweetLimit={10} 
						noHeader= "false"
					/>
				</div>
			</div>
		</CenterContent>

	);
};

export default Home;