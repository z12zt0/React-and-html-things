import React, {useState} from 'react';
import TweetButton from './TweetButton';
import TweetScript from './TweetScript';


function QuoteApp({state, fetching, getAnUrl}) {
    
    const [number, setNumber] = useState(0);
    console.log(state)

    function handleClick() {
        fetching();
        setTimeout(function() {return () => currentQuote = state[0] }, 0);
        setTimeout(function() {return () => currentAuthor = state[1]}, 0);
        setTimeout(function() {setNumber( prevNumber => prevNumber + 1)}, 1000);
    }
    let currentAuthor;
    let currentQuote;
    
    if (currentQuote === undefined) {
        currentQuote = state[0];
        currentAuthor = state[1];
    }

    function getQuote() {
        if (currentQuote.search(state[1] !== -1)) {
            return state[0].match(/^.+(?=\.)\./);
        } else if (state[0].search(state[1]) === -1) {
            return state[0];
        } 
        return <p>Sorry, there was an error, try again later!</p>
    }

    function getAuthor() {
        if (state[1] === '') {
            return "Unknown";
        } else if (state[1]) {
            return state[1];
        } else if (!state[1]) {
            return state[0].replace(/^.+(?=\.)\./, '')
        }
    }

    console.log(currentQuote, currentAuthor)

    return (
        <React.Fragment>

            {getQuote()}
            <hr/>
            {getAuthor()}
            <hr/>
            <div id='buttonDiv'>
                <button className={'button'} id={'newQuote'} onClick={handleClick} key={number+" NEW"}>Get a quote!</button>
                {(state[0] !== "" ) && < TweetButton className={'button'} id={'tweet'} author={getAuthor()} quote={getQuote()} key={number}/>}
            </div>
            <TweetScript/>
        </React.Fragment>
    )
}

export default QuoteApp;