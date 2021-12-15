import { makeStyles } from '@material-ui/styles';
import React, { FC } from 'react';
import ContentArea from './component/contentArea/ContentArea';
import SkillBlock from './component/skillBlock/SkillBlock';
import TopBlock from './component/topBlock/TopBlock';
import './css/style.scss'


const useStyles = makeStyles( {
	wrapper: {
		display: 'flex',
		justifyContent: 'center'
	},
	app: {
		width: '794px',
		font: 'inherit',
		padding: '10px 10px 10px 10px',
		margin: '50px 10px 50px 10px',
		boxShadow: '0px 0px 5px 6px #cccccc',
		justifyContent: 'space-evenly',
	}
}
);

const App: FC = () => {
	const styles = useStyles();
	return (
		<div className={styles.wrapper}>
			<div className={styles.app}>
				<TopBlock />
				<SkillBlock />
				<ContentArea />
			</div>
		</div>

	)
}

export default App;

