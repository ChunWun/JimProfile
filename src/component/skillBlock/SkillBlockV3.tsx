import React, { FC } from "react"
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/system";
import CV from '../../assets/text/CV.json';

interface IItemBox {
	title: string;
	iconUrl:string;
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
		justifyContent: 'space-between'
	},
	rightBlock: {
		margin:'0px 0px 0px 10px'
	},
	breakLine: {
		width: '1px',
		height:'170px',
		backgroundColor:'black',
		justifyContent: 'center'
	},
	itemBox: {
		width: '365px',
		height:'60px',
		justifyContent: 'center',
		flex:'auto',
		margin:'0px 1px 0px 1px'
	},
	itemIcon: {
		borderRadius:'5px',
		width: '45px',
		height: '45px',
		float:'left',
	},
	itemContent: {
		width:'300px',
		margin: 'auto',
		padding: '0px 10px 0px 10px',
		fontSize: '14px',
		color: '#627863c9',
		fontFamily: 'Sans-serif',
		textAlign: 'left',
		whiteSpace: 'pre-line',
		verticalAlign: 'bottom',
		float:'left',
	}
}
);

const ItemBox: FC<IItemBox> = ( props: IItemBox ) => {
	const styles = useStyles();
	return (
		<div className={styles.itemBox}>
			<img className={styles.itemIcon} src = {props.iconUrl} alt='icon'></img>
			<p className={styles.itemContent}>
				{props.content}
			</p>
		</div>
	);
}

const SkillBlockV3: FC = () => {
	const styles = useStyles();
	const itemTypeScript: IItemBox = {
		title: 'TypeScripts',
		// here use relative path
		iconUrl: '../../assets/image/skillBlock/TS_logo.png',
		content: CV.skill_TypeScripts	
	}

	const itemJavaScript: IItemBox = {
		title: 'JavaScripts',
		iconUrl: '../../assets/image/skillBlock/JS_logo.png',
		content: CV.skill_JavaScripts	
	}

	const itemPixiJs: IItemBox = {
		title: 'PixiJs',
		iconUrl: '../../assets/image/skillBlock/Pixi_logo.png',
		content: CV.skill_TypeScripts	
	}

	const itemReact: IItemBox = {
		title: 'React',
		iconUrl: '../../assets/image/skillBlock/React_logo.png',
		content: CV.skill_TypeScripts	
	}

	const itemHtml: IItemBox = {
		title: 'PixiJs',
		iconUrl: '../../assets/image/skillBlock/HTML_logo.png',
		content: CV.skill_TypeScripts	
	}

	return (
		<Box className={styles.block}>
			<div>
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