import React, { useState } from "react";
import { View2 } from "./view2.js";

export const View1 = () => {
	const [display1, setDisplay1] = useState("d-block");
	const [display2, setDisplay2] = useState("d-none");
	const [player, setPlayer] = useState("");
	console.log(player);

	return (
		<div>
			<div className={display1}>
				<div className="container d-flex flex-column justify-content-center">
					<h3 className="align-self-start mx-auto">Pick A Weapon</h3>
					<div className="view1 justify-content-center mx-auto">
						<div className="card card-color">
							<div className="card-body card-color my-2">
								<h4 className="card-title card-color">
									CHOOSE YOUR WEAPON
								</h4>
								<input
									type="text"
									placeholder="Player 1 username"
								/>
								<input
									type="text"
									placeholder="Player 2 username"
								/>

								<div className="d-flex justify-content-center">
									<button
										className="button-player1 display-4 mx-3 my-3 text-center"
										onClick={() => {
											setDisplay1("d-none");
											setDisplay2("d-block");
											setPlayer("X");
										}}>
										<b>X</b>
									</button>
									<button
										className="button-player2 display-4 mx-3 my-3 text-center"
										onClick={() => {
											setDisplay1("d-none");
											setDisplay2("d-block");
											setPlayer("O");
										}}>
										<b>O</b>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={display2}>
				<View2 player={player} />
			</div>
		</div>
	);
};
