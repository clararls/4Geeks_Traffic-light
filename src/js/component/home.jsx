import React, { useState } from "react";

const TrafficLight = () => {
	const [color, setColor] = useState("");
	return (
		<div className="text-center mt-5">
			<div className="row">
				<div className="col-1 mx-auto bg-black rounded">
					<div
						className={
							color == "red"
								? "light bg-danger mx-auto m-2 rounded-circle selected"
								: "light bg-danger mx-auto m-2 rounded-circle"
						}
						onClick={() => setColor("red")}></div>
					<div
						className={
							color == "yellow"
								? "light bg-warning mx-auto m-2 rounded-circle selected"
								: "light bg-warning mx-auto m-2 rounded-circle"
						}
						onClick={() => setColor("yellow")}></div>
					<div
						className={
							color == "green"
								? "light bg-success mx-auto m-2 rounded-circle selected"
								: "light bg-success mx-auto m-2 rounded-circle"
						}
						onClick={() => setColor("green")}></div>
				</div>
			</div>
		</div>
	);
};

export default TrafficLight;
