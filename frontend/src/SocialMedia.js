import React, { Component } from 'react';

class SocialMedia extends Component {
	render(){
		return(
			<div>
				<a href="https://twitter.com/intent/tweet?button_hashtag=LoveTwitter&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-show-count="false">Tweet #LoveTwitter</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			</div>
			)
	}
}

export default SocialMedia;