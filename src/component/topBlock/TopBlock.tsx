import { Avatar, Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import React, { FC } from "react";

const useStyles = makeStyles( {
	picture: {
		width: '100 %',
		height: '160px',
		font: 'inherit',
		margin: '10px 0px 10px 0px',
		padding: 'auto'
	},
	title: {
		width: '100%',
		height: 'auto',
		margin: 'auto',
		padding: '0px',
		fontSize: '35px',
		color: '#00000099',
		fontFamily: 'Sans-serif',
		textAlign: 'center'
	},
	content: {
		width: '100%',
		height: 'auto',
		margin: 'auto',
		font: 'Sans-serif',
		padding: '0px',
		fontSize: '15px',
		letterSpacing: '5px',
		color: '#00000099',
		fontFamily: 'Sans-serif',
		textAlign: 'center',
	},
	block: {
		width: '100 %',
		height: '250px',
		font: 'inherit',
		margin: '10px 0px 10px 0px',
		padding: '0px'
	}
}
);


const TopBlock: FC = () => {
	const styles = useStyles();
	return (
		<Box className={styles.block}>
			<div className={styles.picture}>
				<Avatar
					alt='Mug'
					src='./assets/image/Jim02.jpg'
					sx={{ width: 150, height: 150, marginInline: 'auto' }}
				/>
			</div>
			<div className={styles.title}>
				<div>
					JIM HUANG
				</div>
				<div className={styles.content}>
					0912-540-291
				</div>
			</div>
		</Box>
	);
}

export default TopBlock;