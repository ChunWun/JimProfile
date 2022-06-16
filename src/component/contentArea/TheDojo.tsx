import React, { FC } from "react";
import { Avatar, Stack } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CV from '../../assets/text/CV.json';
import { IExperienceImage } from "./ExperienceArea";

const useStyles = makeStyles( {

	center: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		margin: '5px'
	},

	img_dojo: {
		width: 'auto',
		height: 'auto',
		maxHeight: '90px',
		maxWidth: '160px',
		margin: '0px'
	},
	card: {
		width: '100%',
		display: 'flex',
		flex: 'auto',
		justifyContent: 'space-evenly'
	},
	cardContent: {
		height: '90px',
		width: '100%',
		display: 'flex',
		flex: 'auto',
	},
	content: {
		width: '95%',
		margin: '10px',
		padding: '0px 10px 0px 10px',
		fontSize: '14px',
		color: '#627863c9',
		fontFamily: 'Sans-serif',
		textAlign: 'left',
		whiteSpace: 'break-spaces',
		verticalAlign: 'bottom',
		float: 'left',
	},
} )

const TheDojo: FC = () => {

	const styles = useStyles();

	const imageDOJO: IExperienceImage = {
		title: 'dojo',
		url: './assets/image/Dojo.jpg'
	}

	return (
		<div>
			<div className={styles.center}>
				<img className={styles.img_dojo} src={imageDOJO.url} alt='theDojo'></img>
				<p> 2019.09 - 2022.03 </p>
				<p className={styles.content}>
					{CV.the_dojo_exp}
				</p>
			</div>
			<div className={styles.center}>
				<Stack direction="row" spacing={2} margin="10px">
					<Avatar
						alt="pixi"
						src="./assets/image/skillBlock/Pixi_logo.png"
						sx={{ width: 40, height: 40 }}
						variant="square"
					/>
					<Avatar
						alt="typescript"
						src="./assets/image/skillBlock/TS_logo.png"
						sx={{ width: 40, height: 40 }}
						variant="square"
					/>
					<Avatar
						alt="webpack"
						src="./assets/image/webpack.png"
						sx={{ width: 40, height: 40 }}
						variant="square"
					/>
				</Stack>
				<p className={styles.content}>
					<li>Built several games based on <b>Pixi.js</b> and bundled by <b>webpack</b>.</li>
					<li>Use <b>state pattern</b> as the core manager to control the process of the game components.</li>
					<li>Make good use of <b>OOP</b> to enhance the ease of use and readability of <b>Typescript</b> code.</li>
					<li>Use <b>SourceTree</b> and <b>Fork</b> as Git GUI for version control, and manage tasks on <b>Jira</b>.</li>
					<li>Complete front-end performance of Free Round include function design, api, user interface and so on.</li>
					<li>Responsible for game client structure maintenance and upgrade.</li>
					<li>Use API and websocket connection with back-end developer to build features.</li>
					<li>Experience in maintaining Back-Office with React.js.</li>
				</p>
				<Stack direction="row" spacing={2} margin="10px">
					<Avatar
						alt="pixi"
						src="./assets/image/skillBlock/Pixi_logo.png"
						sx={{ width: 40, height: 40 }}
						variant="square"
					/>
					<Avatar
						alt="typescript"
						src="./assets/image/skillBlock/TS_logo.png"
						sx={{ width: 40, height: 40 }}
						variant="square"
					/>
					<Avatar
						alt="webpack"
						src="./assets/image/webpack.png"
						sx={{ width: 40, height: 40 }}
						variant="square"
					/>
				</Stack>
			</div>
		</div >
	)
}

export default TheDojo;