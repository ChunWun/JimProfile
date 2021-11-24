import React, { FC } from "react";

export interface IButton {
	name: string;
}


const Button: FC<IButton> = ( props: IButton ) => {
	return (
		<div className={"menuButton"} >
			<a>
				{props.name}
			</a>
		</div>
	)
}

export default Button;