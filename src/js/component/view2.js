import React from "react";
import PropTypes from "prop-types";

export const View2 = props => {
	let mark = "";
	let i = 0;
	let total_turns = "";
	const putMark = () => {
		if (props.player == "X") {
			let total_turns = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
		} else {
			let total_turns = ["O", "X", "O", "X", "O", "X", "O", "X", "O"];
		}
		mark = total_turns[i];
		i++;
	};

	return (
		<div className="container">
			<h2>It is ? Turn!</h2>
			<div className="mx-auto mt-4">
				<div className="row justify-content-center">
					<div
						className="block border-bottom border-right border-bottom-color border-right-color"
						onClick={() => {
							putMark();
						}}>
						{mark}
					</div>
					<div className="block border-bottom border-bottom-color"></div>
					<div className="block border-bottom border-left border-bottom-color border-left-color"></div>
				</div>
				<div className="row justify-content-center">
					<div className="block border-right border-right-color"></div>
					<div className="block"></div>
					<div className="block border-left border-left-color"></div>
				</div>
				<div className="row justify-content-center">
					<div className="block border-top border-right border-top-color border-right-color"></div>
					<div className="block border-top border-top-color"></div>
					<div className="block border-top border-left border-top-color border-left-color"></div>
				</div>
			</div>
		</div>
	);
};

View2.propTypes = {
	player: PropTypes.string
};
