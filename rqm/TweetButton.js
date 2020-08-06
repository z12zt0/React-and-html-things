import React from 'react';

function TweetButton(props) {

    let link = `https://twitter.com/intent/tweet?text=${props.quote}`;

    return (
        <a className="twitter-share-button"
         href={link} data-size="large" data-hashtags={props.author}>Share the quote</a> 
    ) 
}

export default TweetButton;
