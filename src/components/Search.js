import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
	const [term, setTerm] = useState("");

	console.log("I RUN WITH EVERY RERENDER");

	useEffect(() => {
		console.log("I ONLY RUN ONCE");
	}, [term]);

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Search Term</label>
					<input
						className="input"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Search;
