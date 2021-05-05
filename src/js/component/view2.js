import React, { useState } from "react";
import PropTypes from "prop-types";

let i = 0;
export const View2 = props => {
	const [turn, setTurn] = useState(props.player);
	let total_casillas = ["", "", "", "", "", "", "", "", ""];
	// console.log(i);
	const putMark = casilla => {
		if (props.player == "X") {
			let total_turns = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
			setTurn(total_turns[i]);
			i++;
			total_casillas[casilla] = `dangerouslySetInnerHTML=${{ __html: turn}}`;
			console.log(total_casillas[casilla]);
		} else {
			let total_turns = ["O", "X", "O", "X", "O", "X", "O", "X", "O"];
			setTurn(total_turns[i]);
			i++;
			total_casillas[casilla] = `dangerouslySetInnerHTML=${{ __html: turn}}`;
		}
	};

	return (
		<div className="container">
			<h2>It is {turn} Turn!</h2>
			<div className="mx-auto mt-4">
				<div className="row justify-content-center">
					<div
						className="block border-bottom border-right border-bottom-color border-right-color"
						{total_casillas[0]}
						onClick={() => putMark("0")}></div>
					<div
						className="block border-bottom border-bottom-color"
						onClick={() => putMark("1")}>
						{total_casillas[1]}
					</div>
					<div
						className="block border-bottom border-left border-bottom-color border-left-color"
						onClick={() => putMark("2")}>
						{total_casillas[2]}
					</div>
				</div>
				<div className="row justify-content-center">
					<div
						className="block border-right border-right-color"
						onClick={() => putMark("3")}>
						{total_casillas[3]}
					</div>
					<div className="block" onClick={() => putMark("4")}>
						{total_casillas[4]}
					</div>
					<div
						className="block border-left border-left-color"
						onClick={() => putMark("5")}>
						{total_casillas[5]}
					</div>
				</div>
				<div className="row justify-content-center">
					<div
						className="block border-top border-right border-top-color border-right-color"
						onClick={() => putMark("6")}>
						{total_casillas[6]}
					</div>
					<div
						className="block border-top border-top-color"
						onClick={() => putMark("7")}>
						{total_casillas[7]}
					</div>
					<div
						className="block border-top border-left border-top-color border-left-color"
						onClick={() => putMark("8")}>
						{total_casillas[8]}
					</div>
				</div>
			</div>
		</div>
	);
};

View2.propTypes = {
	player: PropTypes.string
};
