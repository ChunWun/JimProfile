import { createStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React, { FC } from 'react';
import ContentArea from './component/contentArea/ContentArea';
import TopBlock from './component/topBlock/TopBlock';
import './css/style.scss'


const useStyles = makeStyles( () =>
	createStyles( {
		app: {
			width: '75%',
			height: '75%',
			font: 'inherit',
			padding: '50px 0px 10px 10px',
			margin: 'auto'
		}
	} )
);

const App: FC = () => {
	const styles = useStyles();
	return (
		<div className={styles.app}>
			<TopBlock />
			<ContentArea />
		</div>
	)
}

export default App;

