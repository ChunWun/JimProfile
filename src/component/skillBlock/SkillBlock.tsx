import React, { FC } from "react"
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/system";
import CV from '../../assets/text/CV.json';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";

interface IItemBlock {
	title: string;
	content: string;
	imgUrl: string;
}

const useStyles = makeStyles( {
	block: {
		width: '100%',
		height: '215px',
		font: 'inherit',
		padding: '10px 0px 10px 0px',
		display: 'inline-flex',
		flex: 'auto',
		justifyContent: 'center'
	},
	itemBlock: {
		padding: '0px 10px 10px 0px',
		flex: 'true'
	},
	itemTitle: {
		margin: 'auto',
		padding: '0px',
		color: '#767676',
		textAlign: 'center'
	},
	itemText: {
		margin: 'auto',
		padding: '10px 0px 0px 0px',
		fontSize: '15px',
		color: '#627863c9',
		fontFamily: 'Sans-serif',
		textAlign: 'center',
		whiteSpace: 'pre-line',
		verticalAlign: 'bottom'
	}
}
);

const CardBlock: FC<IItemBlock> = ( props: IItemBlock ) => {
	const styles = useStyles();
	return (
		<Card >
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image={props.imgUrl}
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div"
						className={styles.itemTitle}>
						{props.title}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

const SkillBlock: FC = () => {
	const styles = useStyles();
	const codeTitle: IItemBlock = {
		title: 'Code',
		content: CV.skillItem_1,
		imgUrl: './assets/image/Code.jpg'
	}

	const toolTitle: IItemBlock = {
		title: 'Tools',
		content: CV.skillItem_2,
		imgUrl: './assets/image/Tools.jpg'
	}

	const gameTitle: IItemBlock = {
		title: 'Game',
		content: CV.skillItem_3,
		imgUrl: './assets/image/Game.jpg'
	}

	return (
		<Box className={styles.block}>
			<div className={styles.itemBlock}>
				<CardBlock {...codeTitle} />
			</div>
			<div className={styles.itemBlock}>
				<CardBlock {...toolTitle} />
			</div>
			<div className={styles.itemBlock}>
				<CardBlock {...gameTitle} />
			</div>
		</Box >
	);
}


export default SkillBlock;