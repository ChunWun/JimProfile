import { makeStyles } from '@material-ui/styles';
import React, { FC } from 'react';
import ContactBlock from './component/contactBlock/ContactBlock';
import ContentArea from './component/contentArea/ContentArea';
import SkillBlock from './component/skillBlock/SkillBlock';
import TopBlock from './component/topBlock/TopBlock';
import './css/style.scss'


const useStyles = makeStyles( {
	wrapper: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column'
	},
	link: {
		width: '70%',
		height: '30px',
		padding: '10px 10px 10px 10px',
		margin: '0px 15%',
	},
	paper: {
		width: '70%',
		font: 'inherit',
		padding: '10px 10px 10px 10px',
		margin: '10px 15%',
		boxShadow: '0px 0px 5px 6px #cccccc',
		justifyContent: 'space-evenly',
		minWidth: '400px'
	}
}
);

const App: FC = () => {
	const styles = useStyles();
	return (
		<div className={styles.wrapper}>

			<div className={styles.link}>
				<ContactBlock />
			</div>

			<div className={styles.paper}>

				<TopBlock />
				<SkillBlock />
				<ContentArea />
			</div>
		</div>

	)
}

export default App;

