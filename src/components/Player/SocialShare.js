import React from 'react';
import { 
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon
} from 'react-share';

import './Player.scss';

const SocialShare = ({ shareTitle, item, size }) => {
  return (
    <div className="share-wrapper">
      <FacebookShareButton
        quote={shareTitle}
        url={item && item.trackViewUrl}
      >
        <FacebookIcon size={size} round />
      </FacebookShareButton>
      <RedditShareButton
        title={shareTitle}
        url={item && item.trackViewUrl}
      >
        <RedditIcon  size={size} round />
      </RedditShareButton>
      <TwitterShareButton
        title={shareTitle}
        url={item && item.trackViewUrl}
      >
        <TwitterIcon  size={size} round />
      </TwitterShareButton>
      <WhatsappShareButton
        title={shareTitle}
        url={item && item.trackViewUrl}
      >
        <WhatsappIcon  size={size} round />
      </WhatsappShareButton>
    </div>
  )
}

export default SocialShare;