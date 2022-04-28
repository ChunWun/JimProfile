import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { FC } from "react";
import { IExperienceImage } from "./ExperienceArea";
import CV from '../../assets/text/CV.json';


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
})

const Ep2018: FC = () => {

	const styles = useStyles();

	const imageOdonto: IExperienceImage = {
		title: 'chariot',
		url: './assets/image/odonto/Odonto.png'
	}

	const imageChariot: IExperienceImage = {
		title: 'chariot',
		url: './assets/image/chariot/cover.png'
	}

	const imageAnimals: IExperienceImage = {
		title: 'animals',
		url: './assets/image/animals.png'
	}

	return (
		<div>
			<div className={styles.center}>
				<p className={styles.content}>
					{CV.think_a_bit_exp_2}
				</p>
			</div>
			<div className={styles.card}>
				<Card sx={{ maxWidth: 315 }}>
					<CardMedia
						component="img"
						alt="green iguana"
						height="140"
						image={imageOdonto.url}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Odonto VR
						</Typography>
						<Typography variant="body2" color="text.secondary" className={styles.cardContent} >
							{CV.the_wanderers_intro}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small" href='https://www.youtube.com/watch?v=mscAeTDt7i4' target="_blank" >Demo Video</Button>
					</CardActions>
				</Card>
				<Card sx={{ maxWidth: 315 }}>
					<CardMedia
						component="img"
						alt="green iguana"
						height="140"
						image={imageChariot.url}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Horse Chariot
						</Typography>
						<Typography variant="body2" color="text.secondary" className={styles.cardContent} >
							{CV.the_wanderers_intro}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small" href='https://www.youtube.com/watch?v=TeBRLjpE9mU&list=PLu52zuxKf2asjrmU-mUhcQzpcW3Ch_ffq&index=1' target="_blank" >Demo Video</Button>
					</CardActions>
				</Card>
			</div>

			<div className={styles.center}>
				<p className={styles.content}>
					{CV.think_a_bit_exp_3}
				</p>
			</div>

			<div className={styles.card}>
				<Card sx={{ maxWidth: 315 }}>
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

		</div >

	)
}

export default Ep2018;