import { Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Slider from '@mui/material/Slider';
import React, { FC } from "react";

interface IWorkBlock {
	company: string;
	title: string;
	duration?: string;
	contents: Array<string>;
	imgUrl?: string;
}

const useStyles = makeStyles({
	area: {
		margin: '10px',
		font: 'inherit',
		padding: '10px'
	},
	title: {
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

//TODO
const WorkBox: FC<IWorkBlock> = (props: IWorkBlock) => {
	const styles = useStyles();
	const contentArray: Array<JSX.Element> = props.contents.map((content) => {
		return (
			<li className={styles.content} key={content}>
				{content}
			</li>
		)
	});

	return (props.imgUrl) ?
		(
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
								{props.duration}
							</span>
							{contentArray}
						</span>
					</Grid>
				</Grid>
			</div>
		)
		: (
			<div className={styles.area}>
				<span className={styles.subTitle}>
					<h1 className={styles.subTitle}>
						{props.company}
					</h1>
					<span className={styles.jobTitle}>
						{props.title}
						{props.duration}
					</span>
					{contentArray}
				</span>
			</div>
		)
}

const YearMarks: Array<{ value: number, label: string }> = [
	{
		value: 2016,
		label: '2016',
	},
	{
		value: 2017,
		label: '2017',
	},
	{
		value: 2018,
		label: '2018',
	},
	{
		value: 2019,
		label: '2019',
	},
	{
		value: 2020,
		label: '2019',
	},
	{
		value: 2021,
		label: '2021',
	},
	{
		value: 2022,
		label: '2022',
	},
];

const ExperienceArea: FC = () => {
	const styles = useStyles();

	function valuetext(value: number): string {
		return `${value} year`;
	}

	return (

		<div className={styles.area}>
			<span className={styles.title}>
				My Experience
			</span>
			<div>
				<Slider
					aria-label="Year"
					defaultValue={2021}
					getAriaValueText={valuetext}
					valueLabelDisplay="auto"
					step={1}
					marks={YearMarks}
					color="primary"
					min={2016}
					max={2022}
				/>
			</div>
		</div >

	);
}

export default ExperienceArea;