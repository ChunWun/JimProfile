import React, { FC } from "react"
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/system";
import skillText from '../../assets/text/skill.json';

interface IItemBlock {
	title: string;
	content: string;
}

const useStyles = makeStyles( {
	block: {
		width: '100%',
		height: '200px',
		font: 'inherit',
		padding: '0px',
		display: 'inline-flex',
		flex: 'auto',
		justifyContent: 'space-around'
	},
	itemBlock: {
		width: '200px',
		height: '200px',
		font: 'inherit',
		padding: '0px',
		flex: 'true'
	},
	itemTitle: {
		margin: 'auto',
		font: 'Sans-serif',
		padding: '0px',
		fontSize: '20px',
		color: '#767676',
		fontFamily: 'Sans-serif',
		textAlign: 'center'
	},
	titleLine: {
		width: '70%',
		height: '1px',
		color: '#9e9e9e75',
		margin: 'auto',
		borderBottom: 'solid'
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

const ItemBlock: FC<IItemBlock> = ( props: IItemBlock ) => {
	const styles = useStyles();
	return (
		<div className={styles.itemBlock}>
			<h1 className={styles.itemTitle}>
				{props.title}
			</h1>
			<div className={styles.titleLine}></div>
			<h1 className={styles.itemText}>
				{props.content}
			</h1>
		</div>
	)
}

const SkillBlock: FC = () => {
	const styles = useStyles();
	const codeTitle: IItemBlock = {
		title: 'Code',
		content: skillText.skillItem_1
	}

	const toolTitle: IItemBlock = {
		title: 'Tool',
		content: skillText.skillItem_2
	}

	const artTitle: IItemBlock = {
		title: 'Art',
		content: skillText.skillItem_3
	}

	return (
		<Box className={styles.block}>
			<ItemBlock {...codeTitle} />
			<ItemBlock {...toolTitle} />
			<ItemBlock {...artTitle} />
		</Box >
	);
}


export default SkillBlock;