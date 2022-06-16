import React, { FC } from "react";
import { Avatar, Stack } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CV from '../../assets/text/CV.json';
import { IExperienceImage } from "./ExperienceArea";

const useStyles = makeStyles( {

	center: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		margin: '10px'
	},

	img_dojo: {
		width: 'auto',
		height: 'auto',
		maxHeight: '90px',
		maxWidth: '160px',
		margin: '10px'
	},
	card: {
		width: '100%',
		display: 'flex',
		flex: 'auto',
		justifyContent: 'space-evenly'
	},
	cardContent: {
		height: '90px',
		width: '100%',
		display: 'flex',
		flex: 'auto',
	},
	content: {
		width: '95%',
		margin: '10px',
		padding: '0px 10px 0px 10px',
		fontSize: '14px',
		color: '#627863c9',
		fontFamily: 'Sans-serif',
		textAlign: 'left',
		whiteSpace: 'break-spaces',
		verticalAlign: 'bottom',
		float: 'left',
	},
} )

const Now: FC = () => {

	const styles = useStyles();

	const imageDOJO: IExperienceImage = {
		title: 'dojo',
		url: './assets/image/Dojo.jpg'
	}

	return (
		<div>
			<div className={styles.center}>
				<p> 2022.03 -  </p>
			</div>
			<div className={styles.center}>
				<p className={styles.content}>
					in progress
				</p>
			</div>
		</div >
	)
}

export default Now;