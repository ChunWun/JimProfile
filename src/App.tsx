import { makeStyles } from '@material-ui/styles';
import React, { FC } from 'react';
import HOC from './component/HOC';
import './css/style.scss'


const useStyles = makeStyles( {
	wrapper: {
		display: 'flex',
		justifyContent: 'center'
	},
	paper: {
		width: '794px',
		margin: '10px 10px 50px 10px',
		font: 'inherit',
		padding: '10px 10px 10px 10px',
		boxShadow: '0px 0px 5px 6px #cccccc',
		justifyContent: 'space-evenly',
		'@media  (max-width:780px)': {
			boxShadow: 'none',
			width: '100%'
		}
	}
}
);

const App: FC = () => {
	const styles = useStyles();
	return (
		<React.Fragment>
			<div className={styles.wrapper}>
				<div className={styles.paper}>
					<HOC />
				</div>
			</div>
		</React.Fragment>
	)
}

export default App;

