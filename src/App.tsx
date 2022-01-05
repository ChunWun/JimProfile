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
		justifyContent: 'center'
	},
	link: {
		height: '30px',
		padding: '10px 10px 10px 10px',
		justifyContent: 'center',
	},
	paper: {
		width: '794px',
		margin: '10px 10px 50px 10px',
		font: 'inherit',
		padding: '10px 10px 10px 10px',
		boxShadow: '0px 0px 5px 6px #cccccc',
		justifyContent: 'space-evenly',
		minWidth: '400px'
	}
}
);

const App: FC = () => {
	const styles = useStyles();
	return (
		<React.Fragment>
			<div className={styles.link}>
				<ContactBlock />
			</div>
			<div className={styles.wrapper}>
				<div className={styles.paper}>
					<TopBlock />
					<SkillBlock />
					<ContentArea />
				</div>
			</div>
		</React.Fragment>

	)
}

export default App;

