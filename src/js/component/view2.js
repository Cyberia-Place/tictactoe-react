import React, { useState } from "react";
import PropTypes from "prop-types";

let total_casillas = Array(9).fill("");
let i = 0;

export const View2 = props => {
	const evaluateWinner = () => {
		let ind = 0;
		let ind2 = 0;
		for (let iter = 0; iter < 3; iter++) {
			let fila =
				total_casillas[0 + ind] +
				total_casillas[1 + ind] +
				total_casillas[2 + ind];

			let columna =
				total_casillas[0 + ind2] +
				total_casillas[3 + ind2] +
				total_casillas[6 + ind2];

			if (
				((fila == "XXX" || fila == "OOO") && fila !== "") ||
				((columna == "XXX" || columna == "OOO") && columna != "")
			) {
				alert(`${turn} Wins`);
				break;
			} else {
				ind += 3;
				ind2 += 1;
			}
		}
	};

	const [turn, setTurn] = useState(props.player);
	let encabezado = `It is ${turn} turn!`;
	const putMark = casilla => {
		if (props.player == "X") {
			let total_turns = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
			setTurn(total_turns[i]);
			i++;
			total_casillas[casilla] = turn;
		} else {
			let total_turns = ["O", "X", "O", "X", "O", "X", "O", "X", "O"];
			setTurn(total_turns[i]);
			i++;
			total_casillas[casilla] = turn;
		}
		evaluateWinner();
	};

	const tablero = total_casillas.map((item, index) => {
		return (
			<div
				key={index}
				className="col-sm-4 col-md-4 col-lg-4 block display-1 text-decoration"
				dangerouslySetInnerHTML={{ __html: total_casillas[index] }}
				onClick={() => putMark(index)}></div>
		);
	});

	return (
		<div className="container">
			<h2>{encabezado}</h2>
			<div className="mx-auto mt-4">
				<div className="row mx-auto" style={{ width: "60%" }}>
					{tablero}
				</div>
			</div>
		</div>
	);
};

View2.propTypes = {
	player: PropTypes.string
};
