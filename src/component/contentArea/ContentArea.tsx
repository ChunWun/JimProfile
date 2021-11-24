import { makeStyles } from "@material-ui/styles";
import React, { FC } from "react";


const useStyles = makeStyles( {
	area: {
		width: '100 %',
		height: '1000px',
		font: 'inherit',
		padding: '0px'
	},
	subTitle: {
		width: '100%',
		height: '180px',
		margin: 'auto',
		font: 'Sans-serif',
		padding: '0px',
		fontSize: '75px',
		color: 'white',
		fontFamily: 'Sans-serif'
	}
}
);

const ContentArea: FC = () => {
	const styles = useStyles();
	return (
		<div className={styles.area}>
			<span>
				in progess
			</span>
		</div>
	);
}

export default ContentArea;