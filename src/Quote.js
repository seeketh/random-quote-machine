/* Quote functional componet */
import { useEffect, useState } from 'react';
import './css/quote.scss';
import { quoteData } from './data'
import { IoLogoTwitter, IoPlayForwardCircleOutline } from 'react-icons/io5';
//import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Quote = (props) => {
	const [quotes] = useState(quoteData);

	const randomIndex = () => Math.floor(Math.random() * 50);

	const [activeQuote, setActiveQuote] = useState({
		index: randomIndex()
	});


	const twitterBaseUrl = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";

	useEffect(() => {
		const handleClick = () => {
			setActiveQuote({ index: randomIndex() });
		}
		document.getElementById('new-quote').addEventListener('click', handleClick);

		return () => document.getElementById('new-quote').removeEventListener('click', handleClick);
	}, [setActiveQuote]);

    return (
		<div className="container">
			<div id="quote-box" className="quote-box">
				<div className="body-box">
					<div id="text" className="text">
						{ quotes[activeQuote.index].quote }
        	    	</div>
					<div id="author" className="author">
						{ quotes[activeQuote.index].author }
					</div>
				</div>
				<div className="controls">
					<div className="twitter">
        	            <a
							href={twitterBaseUrl + encodeURI(`"${quotes[activeQuote.index].quote}" -${quotes[activeQuote.index].author}`)}
							id="tweet-quote"
							target="-top"
						>
							<IoLogoTwitter />
						</a> 
        	        </div>
					<button className="next-btn" id="new-quote">
							<IoPlayForwardCircleOutline />
					</button>
				</div>
			</div>
		</div>
    );
}

export default Quote;