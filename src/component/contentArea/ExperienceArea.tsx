import { makeStyles } from "@material-ui/styles";
import Slider from '@mui/material/Slider';
import React, { FC } from "react";
import Ep2016 from "./Ep2016";
import Ep2017 from "./Ep2017";
import Ep2018 from "./Ep2018";
import Ep2019 from "./Ep2019";
import Ep2020 from "./Ep2020";
import Ep2021 from "./Ep2021";
import Ep2022 from "./Ep2022";


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
	[2016, <Ep2016 key={2016} />],
	[2017, <Ep2017 key={2017} />],
	[2018, <Ep2018 key={2018} />],
	[2019, <Ep2019 key={2019} />],
	[2020, <Ep2020 key={2020} />],
	[2021, <Ep2021 key={2021} />],
	[2022, <Ep2022 key={2022} />],
])

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
	}
}
);

const ExperienceArea: FC = () => {
	const styles = useStyles();
	const defaultValueYear = 2021;
	const [value, setValue] = React.useState<number>(defaultValueYear);

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
			<div>
				<Slider
					aria-label="Year"
					defaultValue={defaultValueYear}
					getAriaValueText={valuetext}
					valueLabelDisplay="auto"
					step={1}
					marks={YearMarks}
					color="primary"
					onChange={onChangeYear}
					min={2016}
					max={2022}
				/>
			</div>
			<div className={styles.content}>
				{yearsMap.get(value)}
			</div>
		</div >

	);
}

export default ExperienceArea;