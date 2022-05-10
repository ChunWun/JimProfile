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

const Ep2019: FC = () => {
	const styles = useStyles();

	const imageGenesis: IExperienceImage = {
		title: 'Genesis',
		url: './assets/image/genesis.png'
	}

	const imageDojo: IExperienceImage = {
		title: 'Dojo',
		url: './assets/image/Dojo.jpg'
	}

	return (
		<div>
			<div className={styles.center}>
				<div>
					<img className={styles.img_thinkabit} src={imageGenesis.url} alt='Genesis'></img>
					<img className={styles.img_thinkabit} src={imageDojo.url} alt='Dojo'></img>
				</div>

				<p> 2019.09 - 2022.03 </p>
				<p className={styles.content}>
					{CV.dojo_exp}
				</p>
			</div>
		</div >

	)
}

export default Ep2019;