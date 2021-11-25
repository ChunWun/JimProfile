import React, { FC } from "react"
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/system";

interface IItemBlock {
	title: string;
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
		font: 'Sans-serif',
		padding: '0px',
		fontSize: '20px',
		color: 'white',
		fontFamily: 'Sans-serif'
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
		</div>
	)
}

const SkillBlock: FC = () => {
	const styles = useStyles();
	const codeTitle: IItemBlock = {
		title: 'Code'
	}

	const toolTitle: IItemBlock = {
		title: 'Tool'
	}

	const artTitle: IItemBlock = {
		title: 'Art'
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