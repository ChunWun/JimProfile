import { makeStyles } from '@material-ui/styles';
import { Box } from "@material-ui/core";
import React, { FC } from 'react';
import { FacebookOutlined } from '@material-ui/icons';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const useStyles = makeStyles( {
	icon: {
		margin: '3px'
	},
	block: {
		width: '100%',
		height: '30px',
		font: 'inherit',
		padding: '0px',
		display: 'flex',
		flexDirection: 'row-reverse',
		alignSelf: 'flex-end'
	}
}
);

const ContactBlock: FC = () => {
	const styles = useStyles();
	return (
		<Box className={styles.block}>
			<a href='' target='_blank' rel="noreferrer">
				<div className={styles.icon}>
					<FacebookOutlined fontSize="large" color='action' />
				</div>
			</a>

			<a href='' target='_blank' rel="noreferrer">
				<div className={styles.icon}>
					<InstagramIcon fontSize="large" color='action' />
				</div>
			</a>

			<a href='https://github.com/ChunWun' target='_blank' rel="noreferrer">
				<div className={styles.icon}>
					<GitHubIcon fontSize="large" color='action' />
				</div>
			</a>

			<a href='https://www.linkedin.com/in/jim-huang-397846190/' target='_blank' rel="noreferrer">
				<div className={styles.icon}>
					<LinkedInIcon fontSize="large" color='action' />
				</div>
			</a>

		</Box >
	);
}

export default ContactBlock;