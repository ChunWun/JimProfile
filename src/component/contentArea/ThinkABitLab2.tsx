import { Button, Card, CardActions, CardContent, CardMedia, Typography, Avatar, Stack } from "@material-ui/core";
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
		height: '70px',
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

const ThinkABitLab2: FC = () => {

	const styles = useStyles();

	const imageOdonto: IExperienceImage = {
		title: 'odonto',
		url: './assets/image/odonto/Odonto.png'
	}

	const imageChariot: IExperienceImage = {
		title: 'chariot',
		url: './assets/image/chariot/cover.png'
	}

	const imageAtomic: IExperienceImage = {
		title: 'atomic',
		url: './assets/image/atomic/atomic.png'
	}

	const imageTime: IExperienceImage = {
		title: 'time',
		url: './assets/image/time/time.png'
	}

	return (
		<div>

			<div className={styles.center}>
				<Stack direction="row" spacing={2} margin="10px">
					<Avatar
						alt="unity"
						src="./assets/image/Unity.png"
						sx={{ width: 40, height: 40 }}
						variant="square"
					/>
					<Avatar
						alt="3dmax"
						src="./assets/image/3Dmax.png"
						sx={{ width: 40, height: 40 }}
						variant="square"
					/>
					<Avatar
						alt="Csharp"
						src="./assets/image/Csharp.png"
						sx={{ width: 40, height: 40 }}
						variant="square"
					/>
					<Avatar
						alt="AI"
						src="./assets/image/AI.png"
						sx={{ width: 40, height: 40 }}
						variant="square"
					/>
					<Avatar
						alt="PS"
						src="./assets/image/PS.png"
						sx={{ width: 40, height: 40 }}
						variant="square"
					/>
				</Stack>
				<p className={styles.content}>
					{CV.think_a_bit_exp_2}
				</p>
			</div>
			<div className={styles.cardBlock}>
				<Card sx={{ maxWidth: 315 }} className={styles.card}>
					<CardMedia
						component="img"
						alt="green iguana"
						height="130"
						image={imageOdonto.url}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Odonto VR
						</Typography>
						<Typography variant="body2" color="text.secondary" className={styles.cardContent} >
							{CV.odonto_intro}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small" href='https://www.youtube.com/watch?v=mscAeTDt7i4' target="_blank" >Demo Video</Button>
					</CardActions>
				</Card>
				<Card sx={{ maxWidth: 315 }} className={styles.card}>
					<CardMedia
						component="img"
						alt="green iguana"
						height="130"
						image={imageChariot.url}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Horse Chariot
						</Typography>
						<Typography variant="body2" color="text.secondary" className={styles.cardContent} >
							{CV.chariot_intro}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small" href='https://www.youtube.com/watch?v=TeBRLjpE9mU&list=PLu52zuxKf2asjrmU-mUhcQzpcW3Ch_ffq&index=1' target="_blank" >Demo Video</Button>
					</CardActions>
				</Card>
			</div>

			<div className={styles.center}>
				<p className={styles.content} >
					{CV.think_a_bit_exp_3}
				</p>
			</div>

			<div className={styles.cardBlock}>
				<Card sx={{ maxWidth: 315 }} className={styles.card}>
					<CardMedia
						component="img"
						alt="green iguana"
						height="140"
						image={imageAtomic.url}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Atomic
						</Typography>
						<Typography variant="body2" color="text.secondary" className={styles.cardContent} >
							{CV.animals_intro}
						</Typography>
					</CardContent>
					<CardActions >
						<Button size="small" href='https://www.youtube.com/watch?v=SanTHATk_8s' target="_blank">Demo Video</Button>
					</CardActions>
				</Card>
				<Card sx={{ maxWidth: 315 }} className={styles.card}>
					<CardMedia
						component="img"
						alt="green iguana"
						height="140"
						image={imageTime.url}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							The Time Zone
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

export default ThinkABitLab2;