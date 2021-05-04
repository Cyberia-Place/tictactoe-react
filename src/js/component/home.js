import React from "react";
import { Interface } from "./interface.js";

//create your first component
export function Home() {
	return (
		<div className="h-100">
			<h1>Tic Tac Toe in React.js</h1>
			<Interface />
		</div>
	);
}
