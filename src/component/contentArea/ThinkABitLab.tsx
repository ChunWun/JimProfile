import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { FC } from "react";
import { IExperienceImage } from "./ExperienceArea";
import CV from '../../assets/text/CV.json';
import ThinkABitLab2 from "./ThinkABitLab2";


const useStyles = makeStyles({

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
	cardBlock: {
		width: '100%',
		display: 'flex',
		flex: 'auto',
		justifyContent: 'space-evenly',
		'@media  (max-width:620px)': {
			display: 'grid',
			justifyContent: 'center',
		}
	},
	card: {
		'@media  (max-width:620px)': {
			margin: '5px'
		}
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
})

const ThinkABitLab: FC = () => {

	const styles = useStyles();

	const imageThinkaBit: IExperienceImage = {
		title: 'think a bit',
		url: './assets/image/ThinkabitB.png'
	}

	const imageWanderers: IExperienceImage = {
		title: 'theWanderers_2',
		url: './assets/image/theWanderers/theWanderers_2.png'
	}

	const imageAnimals: IExperienceImage = {
		title: 'animals',
		url: './assets/image/animals.png'
	}

	return (
		<React.Fragment>
			<div className={styles.center}>
				<img className={styles.img_thinkabit} src={imageThinkaBit.url} alt='think a bit'></img>
				<p> 2017.01 - 2019.01 </p>
				<p className={styles.content}>
					{CV.think_a_bit_exp}
				</p>
			</div>
			<div className={styles.cardBlock}>
				<Card sx={{ maxWidth: 315 }} className={styles.card}>
					<CardMedia
						component="img"
						alt="green iguana"
						height="140"
						image={imageWanderers.url}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							The Wanderers
						</Typography>
						<Typography variant="body2" color="text.secondary" className={styles.cardContent} >
							{CV.the_wanderers_intro}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small" href='https://www.youtube.com/watch?v=vnlzJGAoJkw' target="_blank" >Demo Video</Button>
					</CardActions>
				</Card>
				<Card sx={{ maxWidth: 315 }} className={styles.card}>
					<CardMedia
						component="img"
						alt="green iguana"
						height="140"
						image={imageAnimals.url}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Feeding VR
						</Typography>
						<Typography variant="body2" color="text.secondary" className={styles.cardContent} >
							{CV.animals_intro}
						</Typography>
					</CardContent>
					<CardActions >
						<Button size="small" href='https://www.youtube.com/watch?v=SanTHATk_8s' target="_blank">Demo Video</Button>
					</CardActions>
				</Card>


			</div>
			<div>
				<ThinkABitLab2 />
			</div>

		</React.Fragment >

	)
}

export default ThinkABitLab;