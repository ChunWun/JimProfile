import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { FC, useState } from "react";
import Now from "./Now";
import TheDojo from "./TheDojo";
import ThinkABitLab from "./ThinkABitLab";


export interface IExperienceImage {
	title: string,
	url: string
}

// const YearMarks: Array<{ value: number, label: string }> = [
// 	{
// 		value: 2017,
// 		label: '2017',
// 	},
// 	{
// 		value: 2018,
// 		label: '2018',
// 	},
// 	{
// 		value: 2019,
// 		label: '2019',
// 	},
// 	{
// 		value: 2020,
// 		label: '2020',
// 	},
// 	{
// 		value: 2021,
// 		label: '2021',
// 	},
// 	{
// 		value: 2022,
// 		label: '2022',
// 	},
// ];

// const yearsMap: Map<number, JSX.Element> = new Map<number, JSX.Element>([
// 	[2017, <ThinkABitLab key={2017} />],
// 	[2018, <ThinkABitLab2 key={2018} />],
// 	[2019, <TheDojo key={2019} />],
// 	[2020, <Ep2020 key={2020} />],
// 	[2021, <Ep2021 key={2021} />],
// 	[2022, <Ep2022 key={2022} />],
// ])

const experienceMap: Map<string, JSX.Element> = new Map<string, JSX.Element>( [
	[ 'ThinkABit', <ThinkABitLab key={0} /> ],
	[ 'TheDojo', <TheDojo key={1} /> ],
	[ 'Now', <Now key={2} /> ]
] )

const useStyles = makeStyles( {
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
	jobButton: {
		margin: '10px',
		fontSize: '18px',
		color: '#00000099',
		fontFamily: '-webkit-pictograph',
		whiteSpace: 'pre-line',
		lineHeight: '2',
		justifyContent: 'center',
		display: 'flex',
		'@media  (max-width:620px)': {
			display: 'none',
		}
	},
	selectDiv: {
		display: 'flex',
		justifyContent: 'center'
	},
	jobSelect: {
		display: 'none',
		'@media  (max-width:620px)': {
			fontSize: '20px',
			color: '#00000099',
			fontFamily: 'monospace',
			display: 'flex',
			margin: '10px',
			lineHeight: '2',
			textAlign: 'center',
			justifyContent: 'center'
		}
	},
	sliderBox: {
		width: '100%',
		"@media (max-width:480)": {
			width: '90%'
		}
	}
}
);

const ExperienceArea: FC = () => {
	const styles = useStyles();
	const [ job, setExperience ] = useState( 'ThinkABit' );

	// const onChangeYear = (event: Event, newValue: number | number[]) => {
	// 	if (typeof newValue === 'number') {
	// 		setExperience(newValue);
	// 	}
	// };

	// function valuetext(value: number): string {
	// 	return `${value} year`;
	// }

	const onSelectJob = ( event: React.ChangeEvent<HTMLSelectElement> ) => {
		setExperience( event.target.value );
	};

	const onSelectJobHandler = ( event: any ) => {
		setExperience( event.target.id );
	}

	return (
		<div className={styles.area}>
			<span className={styles.title}>
				My Experience
			</span>
			<div className={styles.jobButton}>
				<Button id="ThinkABit" onClick={onSelectJobHandler} >Think a Bit Lab</Button>
				<Button id="TheDojo" onClick={onSelectJobHandler} >The Dojo</Button>
				{/* <Button id="Now" onClick={onSelectJobHandler} >Now</Button> */}

			</div>

			<div className={styles.selectDiv}>
				<select className={styles.jobSelect} name="selectJob" onChange={onSelectJob} value={job}>
					<option value={'ThinkABit'}>Think a Bit Lab</option>
					<option value={'TheDojo'}>The Dojo</option>
					{/* <option value={'Now'}>Now</option> */}
				</select>
			</div>
			<div>
				{experienceMap.get( job )}
			</div>
		</div >

	);
}

export default ExperienceArea;