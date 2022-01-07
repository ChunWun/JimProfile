import React, { FC } from "react"
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import CV from '../../assets/text/CV.json';

interface ITabPanel {
	children?: React.ReactNode;
	index: number;
	value: number;
}

interface ISkillList {
	items: Array<string>;
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
		width: '100%',
		flex: 'true',
		justifyContent: 'center'
	},
	itemTitle: {
		margin: 'auto',
		padding: '0px',
		color: '#767676',
		fontSize: '18px',
		textAlign: 'left',
		fontFamily: '-webkit-pictograph'
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

function a11yProps ( index: number ) {
	return {
		id: `simple-tab-${ index }`,
		'aria-controls': `simple-tabpanel-${ index }`,
	};
}

function TabPanel ( props: ITabPanel ) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${ index }`}
			aria-labelledby={`vertical-tab-${ index }`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

const SkillList: FC<ISkillList> = ( skillItem: ISkillList ) => {
	const styles = useStyles();
	return (
		<div >
			{
				skillItem.items.map( ( skill ) => {
					return (
						<li className={styles.itemTitle} key={skill}>
							{skill}
						</li>
					)
				} )
			}
		</div>
	)
}

const SkillBlockV2: FC = () => {
	const styles = useStyles();
	const [ value, setValue ] = React.useState( 0 );

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleChange = ( event: any, newValue: number ) => {
		setValue( newValue );
	};

	const languageSkill: ISkillList = { items: [ 'Typescript', 'Javascript', 'C#', 'HTML/CSS' ] };
	const frameSkill: ISkillList = { items: [ 'Pixi.js', 'React', 'webpack' ] };
	const otherSkill: ISkillList = { items: [ 'Git', 'Jira', 'Postman' ] };

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
					<Tab label="About me" {...a11yProps( 0 )} />
					<Tab label="Skills" {...a11yProps( 1 )} />
					<Tab label="Outlook" {...a11yProps( 2 )} disabled />
				</Tabs>

				<Box className={styles.block}>
					<TabPanel value={value} index={0}>
						<span className={styles.itemText}>
							{CV.aboutmeContent}
						</span>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<Grid container spacing={4} justifyContent="center">
							<Grid item xs={4}>
								<SkillList {...languageSkill} />
							</Grid>
							<Grid item xs={4}>
								<SkillList {...frameSkill} />
							</Grid>
							<Grid item xs={4}>
								<SkillList {...otherSkill} />
							</Grid>
						</Grid>
					</TabPanel>
					<TabPanel value={value} index={2}>
						{/* TODO */}
					</TabPanel>
				</Box>
			</Box>
		</Box>

	);
}

export default SkillBlockV2;