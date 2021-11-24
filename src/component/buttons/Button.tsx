import React, { FC } from "react";
import { createStyles, makeStyles } from "@material-ui/styles";

export interface IButton {
	name: string;
	shape: string;
}

export enum ButtonShapeType {
	CIRCLE = 'CIRCLE',
	SQUARE = 'SQUARE'
}

const useStyles = makeStyles( () =>
	createStyles( {
		circle: {
			backgroundColor: '#ff9800b3',
			width: '50px',
			height: '50px',
			borderRadius: '99em',
			padding: '0px'
		}
	} )
);


const Button: FC<IButton> = ( props: IButton ) => {
	const styles = useStyles();
	function handleSubmit () {
		console.error( props.name );

	}

	return ( props.shape == ButtonShapeType.CIRCLE )
		?
		<button onClick={() => handleSubmit()} className={styles.circle}>
			{props.name}
		</button>
		:
		<button onClick={() => handleSubmit()}>

		</button>
}

export default Button;