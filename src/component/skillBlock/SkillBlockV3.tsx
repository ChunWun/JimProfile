import React, { FC } from "react"
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/system";
import CV from '../../assets/text/CV.json';

interface IItemBox {
	title: string;
	iconUrl: string;
	content: string;
}

const useStyles = makeStyles( {
	block: {
		width: '95%',
		height: '215px',
		font: 'inherit',
		padding: '10px 20px 10px 20px',
		display: 'inline-flex',
		flex: 'auto',
		justifyContent: 'space-between',
		'@media  (max-width:780px)': {
			display: 'table',
			justifyContent: 'center',
			padding: '0px 5px 0px 5px'
		}
	},
	leftBlock: {
		'@media  (max-width:780px)': {
			display: 'grid',
			justifyContent: 'center'
		}
	},
	rightBlock: {
		margin: '0px 0px 0px 10px',
		'@media  (max-width:780px)': {
			margin: '0px',
			display: 'grid',
			justifyContent: 'center'
		}
	},
	breakLine: {
		width: '1px',
		height: '170px',
		backgroundColor: 'black',
		justifyContent: 'center',
		'@media  (max-width:780px)': {
			display: 'none'
		}
	},
	itemBox: {
		width: '365px',
		height: '60px',
		justifyContent: 'center',
		flex: 'auto',
		margin: '0px 1px 0px 1px',
		display: 'flex',
		'@media  (max-width:400px)': {
			width: '100%',
		}
	},
	itemIcon: {
		borderRadius: '5px',
		justifyContent: 'center',
		width: '45px',
		height: '45px',
		margin: 'auto',
		float: 'left',
	},
	itemContent: {
		width: '300px',
		margin: 'auto',
		padding: '0px 10px 0px 10px',
		fontSize: '14px',
		color: '#627863c9',
		fontFamily: 'Sans-serif',
		textAlign: 'left',
		whiteSpace: 'pre-line',
		verticalAlign: 'bottom',
		float: 'left',
		'@media  (max-width:400px)': {
			width: '100%',
			fontSize: '12px',
		}
	}
}
);

const ItemBox: FC<IItemBox> = ( props: IItemBox ) => {
	const styles = useStyles();
	return (
		<div className={styles.itemBox}>
			<img className={styles.itemIcon} src={props.iconUrl} alt='icon'></img>
			<p className={styles.itemContent}>
				{props.content}
			</p>
		</div>
	);
}

//TODO fix relative path problem
const SkillBlockV3: FC = () => {
	const styles = useStyles();
	const itemTypeScript: IItemBox = {
		title: 'TypeScripts',
		iconUrl: './assets/image/skillBlock/TS_logo.png',
		content: CV.skill_TypeScripts
	}

	const itemJavaScript: IItemBox = {
		title: 'JavaScripts',
		iconUrl: './assets/image/skillBlock/JS_logo.png',
		content: CV.skill_JavaScripts
	}

	const itemPixiJs: IItemBox = {
		title: 'PixiJs',
		iconUrl: './assets/image/skillBlock/Pixi_logo.png',
		content: CV.skill_Pixi
	}

	const itemReact: IItemBox = {
		title: 'React',
		iconUrl: './assets/image/skillBlock/React_logo.png',
		content: CV.skill_React
	}

	const itemHtml: IItemBox = {
		title: 'html',
		iconUrl: './assets/image/skillBlock/HTML_logo.png',
		content: CV.skill_Html
	}

	return (
		<Box className={styles.block}>
			<div className={styles.leftBlock}>
				<ItemBox {...itemTypeScript} />
				<ItemBox {...itemJavaScript} />
				<ItemBox {...itemPixiJs} />
			</div>
			<div className={styles.breakLine}></div>
			<div className={styles.rightBlock}>
				<ItemBox {...itemReact} />
				<ItemBox {...itemHtml} />
			</div>
		</Box >
	);
}


export default SkillBlockV3;