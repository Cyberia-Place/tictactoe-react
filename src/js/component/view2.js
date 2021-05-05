import React, { useState } from "react";
import PropTypes from "prop-types";

let total_casillas = Array(9).fill("");
let i = 0;
export const View2 = props => {
	const [turn, setTurn] = useState(props.player);
	// console.log(i);
	const putMark = casilla => {
		if (props.player == "X") {
			let total_turns = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
			setTurn(total_turns[i]);
			i++;
			total_casillas[casilla] = turn;
			console.log(total_casillas);
		} else {
			let total_turns = ["O", "X", "O", "X", "O", "X", "O", "X", "O"];
			setTurn(total_turns[i]);
			i++;
			total_casillas[casilla] = turn;
			console.log(total_casillas);
		}
    };
    
    const evaluateWinner = () => {
        if (total_casillas[0] == total_casillas[1] == total_casillas[2]) {
            
        }
    }

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
			<h2>It is {turn} Turn!</h2>
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
