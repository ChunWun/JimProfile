import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { FC } from "react";
import { IExperienceImage } from "./ExperienceArea";
import CV from '../../assets/text/CV.json';


const useStyles = makeStyles( {

	center: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		margin: '10px'
	},

	img_thinkabit: {
		width: 'auto',
		height: 'auto',
		maxHeight: '70px',
		maxWidth: '160px',
		margin: '10px'
	},

	content: {
		width: '95%',
		margin: 'auto',
		padding: '0px 10px 0px 10px',
		fontSize: '14px',
		color: '#627863c9',
		fontFamily: 'Sans-serif',
		textAlign: 'left',
		whiteSpace: 'break-spaces',
		verticalAlign: 'bottom',
		float: 'left',
	}
} )

const Ep2017: FC = () => {

	const styles = useStyles();

	const imageThinkaBit: IExperienceImage = {
		title: 'think a bit',
		url: './assets/image/ThinkabitB.png'
	}

	const imageWanderers: IExperienceImage = {
		title: 'theWanderers_2',
		url: './assets/image/theWanderers/theWanderers_2.png'
	}

	return (
		<div>
			<div className={styles.center}>
				<img className={styles.img_thinkabit} src={imageThinkaBit.url} alt='think a bit'></img>
				<p className={styles.content}>
					{CV.think_a_bit_exp}
				</p>
			</div>
			<Box>
				{/* <img src={imageWanderers.url} alt='the_wanderers'></img> */}
			</Box>
			< div className={styles.content}>
				{/* This is my first project built by Unity3D. The Wanderers is an educational Augmented Reality app, */}
			</div >
		</div>

	)
}

export default Ep2017;