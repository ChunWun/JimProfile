import React, { FC } from "react";
import { createStyles, makeStyles } from "@material-ui/styles";


const useStyles = makeStyles( () =>
	createStyles( {
		area: {
			backgroundColor: '#edde8042',
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
	} )
);

const ContentArea: FC = () => {
	const styles = useStyles();
	return (
		<div className={styles.area}>
			<span>
				content
			</span>
		</div>
	);
}

export default ContentArea;