import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

let total_casillas = Array(9).fill("?");
let i = 0;
export const View2 = props => {
	// Define el ordenamiento de los turnos para la partida
	let total_turns = [];
	if (props.player == "X") {
		total_turns = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
	} else {
		total_turns = ["O", "X", "O", "X", "O", "X", "O", "X", "O"];
	}

	// Determina el turno actual, es actualizada por la función putMark
	const [turn, setTurn] = useState(total_turns[i]);
	// Determina la marca que va en cada casilla
	const [casilla, setCasillas] = useState(total_casillas);
	// Estado que determina el encabezado, dice el turno o el ganador
	const [winner, setWinner] = useState(`It is ${turn} turn!`);
	console.log(turn, winner);
	// Función que evalua el ganador y actualiza el estado winner
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
				setWinner(`${turn} Wins!`);
				break;
			} else {
				ind += 3;
				ind2 += 1;
				setWinner(`It is ${turn} turn!`);
			}
		}
	};

	// Pone la marca en la casilla y evalua si hay un ganador
	const putMark = index => {
		if (i < 9) {
			total_casillas[index] = total_turns[i];
			setTurn(total_turns[i]);
			i++;
			evaluateWinner();
		}
	};

	// useEffect(() => {}, [turn]);

	const tablero = total_casillas.map((item, index) => {
		return (
			<div
				key={index}
				className="col-sm-4 col-md-4 col-lg-4 block display-1 text-decoration"
				onClick={() => putMark(index)}>
				{casilla[index]}
			</div>
		);
	});

	return (
		<div className="container">
			<h2>{winner}</h2>
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
