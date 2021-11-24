
import { makeStyles } from "@material-ui/styles";
import React, { FC } from "react";

const useStyles = makeStyles( {
	block: {
		backgroundColor: '#ff9800b3',
		width: '80px',
		height: '80px',
		borderRadius: '99em',
		padding: '0px'
	}
}
);


const CircleBlock: FC = () => {
	const styles = useStyles();

	return (
		<div className={styles.block}>

		</div>
	);
}

export default CircleBlock