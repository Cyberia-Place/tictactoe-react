import React, { useState } from "react";
import PropTypes from "prop-types";

export const View2 = props => {
	let i = 0;
	const [turn, setTurn] = useState({ __html: "" });

	const putMark = () => {
		if (props.player == "X") {
			let total_turns = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
			setTurn({ __html: total_turns[i] });
			i++;
		} else {
			let total_turns = ["O", "X", "O", "X", "O", "X", "O", "X", "O"];
			setTurn({ __html: total_turns[i] });
			i++;
		}
	};

	return (
		<div className="container">
			<h2>It is {props.player} Turn!</h2>
			<div className="mx-auto mt-4">
				<div className="row justify-content-center">
					<div
						className="block border-bottom border-right border-bottom-color border-right-color"
						dangerouslySetInnerHTML={turn}
						onClick={() => putMark()}></div>
					<div
						className="block border-bottom border-bottom-color"
						dangerouslySetInnerHTML={turn}
						onClick={() => putMark()}></div>
					<div
						className="block border-bottom border-left border-bottom-color border-left-color"
						dangerouslySetInnerHTML={turn}
						onClick={() => putMark()}></div>
				</div>
				<div className="row justify-content-center">
					<div
						className="block border-right border-right-color"
						dangerouslySetInnerHTML={turn}
						onClick={() => putMark()}></div>
					<div
						className="block"
						dangerouslySetInnerHTML={turn}
						onClick={() => putMark()}></div>
					<div
						className="block border-left border-left-color"
						dangerouslySetInnerHTML={turn}
						onClick={() => putMark()}></div>
				</div>
				<div className="row justify-content-center">
					<div
						className="block border-top border-right border-top-color border-right-color"
						dangerouslySetInnerHTML={turn}
						onClick={() => putMark()}></div>
					<div
						className="block border-top border-top-color"
						dangerouslySetInnerHTML={turn}
						onClick={() => putMark()}></div>
					<div
						className="block border-top border-left border-top-color border-left-color"
						dangerouslySetInnerHTML={turn}
						onClick={() => putMark()}></div>
				</div>
			</div>
		</div>
	);
};

View2.propTypes = {
	player: PropTypes.string
};
