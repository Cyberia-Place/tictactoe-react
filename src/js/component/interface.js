import React from "react";

export const Interface = () => {
	const Game = () => (
		<div className="container">
			<h2>It is ? Turn!</h2>
			<div className="mx-auto mt-4">
				<div className="row justify-content-center">
					<div className="block border-bottom border-right border-bottom-color border-right-color"></div>
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

	return (
		<div>
			<h3>Pick A Weapon</h3>
			<div className="view1 d-flex justify-content-center">
				<div className="card card-color align-self-center">
					<div className="card-body card-color my-2">
						<h4 className="card-title card-color">
							CHOOSE YOUR WEAPON
						</h4>
						<input type="text" placeholder="Player 1 username" />
						<input type="text" placeholder="Player 2 username" />

						<div className="d-flex justify-content-center">
							<button className="button-player1 display-4 mx-3 my-3 text-center">
								<b>X</b>
							</button>
							<button className="button-player2 display-4 mx-3 my-3 text-center">
								<b>O</b>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
