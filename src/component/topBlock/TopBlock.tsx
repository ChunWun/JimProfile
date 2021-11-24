import { Toolbar } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import React, { FC } from "react";
import Button, { IButton } from "../buttons/Button";

const useStyles = makeStyles( () =>
	createStyles( {
		title: {
			width: '100%',
			height: '180px',
			margin: 'auto',
			font: 'Sans-serif',
			padding: '0px',
			fontSize: '75px',
			color: 'white',
			fontFamily: 'Sans-serif'
		},
		block: {
			backgroundColor: '#ff9800b3',
			width: '100 %',
			height: '300px',
			font: 'inherit',
			padding: '0px'
		}
	} )
);


const TopBlock: FC = () => {
	const styles = useStyles();
	const homeButton: IButton = { name: "Home" };
	return (
		<Toolbar className={styles.block}>
			<div className={styles.title}>
				<div>
					JIM HUANG
				</div>
			</div>

			<Button {...homeButton} />
		</Toolbar>
	);
}

export default TopBlock;