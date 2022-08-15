import Box from '@mui/material/Box';
import { makeStyles } from "@material-ui/styles";
import Slider from '@mui/material/Slider';
import React, { FC, useState } from "react";
import Ep2019 from "./Ep2019";
import Ep2020 from "./Ep2020";
import Ep2021 from "./Ep2021";
import Ep2022 from "./Ep2022";

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
		margin: '10px',
		fontSize: '18px',
		color: '#00000099',
		fontFamily: '-webkit-pictograph',
		whiteSpace: 'pre-line',
		lineHeight: '2',
		justifyContent: 'center',
		display: 'flex'
	},
	sliderBox: {
		width: '100%',
		"@media (max-width:480)": {
			width: '90%'
		}
	}
}
);

export interface IExperienceImage {
	title: string,
	url: string
}

const YearMarks: Array<{ value: number, label: string }> = [
	{
		value: 2019,
		label: '2019',
	},
	{
		value: 2020,
		label: '2020',
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

const yearsMap: Map<number, JSX.Element> = new Map<number, JSX.Element>([
	[2019, <Ep2019 key={2019} />],
	[2020, <Ep2020 key={2020} />],
	[2021, <Ep2021 key={2021} />],
	[2022, <Ep2022 key={2022} />],
])



const ExperienceArea: FC = () => {
	const styles = useStyles();
	const defaultValueYear = 2019;
	const [value, setValue] = useState<number>(defaultValueYear);

	const onChangeYear = (event: Event, newValue: number | number[]) => {
		if (typeof newValue === 'number') {
			setValue(newValue);
		}
	};

	function valuetext(value: number): string {
		return `${value} year`;
	}

	return (
		<div className={styles.area}>
			<span className={styles.title}>
				My Experience
			</span>
			<p className={styles.content}>
				(switch time)
			</p>
			<div>
				<Box className={styles.sliderBox}>
					<Slider
						aria-label="Year"
						defaultValue={defaultValueYear}
						getAriaValueText={valuetext}
						valueLabelDisplay="auto"
						step={1}
						marks={YearMarks}
						color="primary"
						onChange={onChangeYear}
						min={2019}
						max={2022}
					/>
				</Box>

			</div>
			<div >
				{yearsMap.get(value)}
			</div>
		</div >
	);
}

export default ExperienceArea;