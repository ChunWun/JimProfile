import { Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { FC } from "react";
import CV from '../../assets/text/CV.json';

interface IWorkBlock {
	company: string;
	title: string;
	duration: string;
	contents: Array<string>;
	imgUrl?: string;
}

const useStyles = makeStyles( {
	area: {
		margin: '10px',
		font: 'inherit',
		padding: '10px'
	},
	title: {
		backgroundColor: '#bee7ec',
		fontSize: '30px',
		color: '#00000099',
		fontFamily: 'monospace',
		display: 'flow-root',
		textAlign: 'center'
	},
	icon: {
		width: '90px',
		height: '90px',
		display: 'inline',
		boxShadow: '1px 2px 2px 2px #e3e3e3'
	},
	subTitle: {
		margin: 'auto',
		fontSize: '21px',
		color: '#00000099',
		fontFamily: '-webkit-pictograph'
	},
	jobTitle: {
		margin: 'auto',
		fontSize: '18px',
		color: '#000000d9',
		fontFamily: '-webkit-pictograph'
	},
	content: {
		margin: 'auto',
		fontSize: '14px',
		color: '#00000099',
		fontFamily: '-webkit-pictograph',
		whiteSpace: 'pre-line',
		lineHeight: '2'
	}
}
);

const WorkBox: FC<IWorkBlock> = ( props: IWorkBlock ) => {
	const styles = useStyles();
	const contentArray: Array<JSX.Element> = props.contents.map( ( content ) => {
		return (
			<li className={styles.content} key={content}>
				{content}
			</li>
		)
	} );

	return (
		<div className={styles.area}>
			<Grid container spacing={2} margin={'5px 0px 5px 0px'}>
				<Hidden mdDown>
					<Grid item xs={2}>
						<img src={props.imgUrl} className={styles.icon} />
					</Grid>
				</Hidden>
				<Grid item xs={10} borderLeft={'outset'}>
					<span className={styles.subTitle}>
						<h1 className={styles.subTitle}>
							{props.company}
						</h1>
						<span className={styles.jobTitle}>
							{props.title}
							/
							{props.duration}
						</span>
						{contentArray}
					</span>
				</Grid>
			</Grid>
		</div>
	);
}

const ContentArea: FC = () => {
	const styles = useStyles();

	const item1: IWorkBlock = {
		company: 'THE DOJO',
		title: 'Game Engineer',
		duration: '2019-2021',
		contents: [ CV.workItem1_1, CV.workItem1_2, CV.workItem1_3 ],
		imgUrl: './assets/image/Dojo.jpg'
	}

	const item2: IWorkBlock = {
		company: '微想實驗室 Think a bit Lab',
		title: 'Game Developer',
		duration: '2017-2019',
		contents: [ CV.workItem2_1, CV.workItem2_2 ],
		imgUrl: './assets/image/Thinkabit.jpg'
	}

	return (
		<div className={styles.area}>
			<span className={styles.title}>
				Work Experience
			</span>
			<WorkBox {...item1} />
			<WorkBox {...item2} />
		</div>

	);
}

export default ContentArea;