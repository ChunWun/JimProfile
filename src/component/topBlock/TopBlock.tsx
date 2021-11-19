import { Toolbar } from "@material-ui/core";
import React from "react";

const topStyle = {
	backgroundColor: '#33CCFF',
	width: '100 %',
	height: '500 px',
	font: 'inherit',
	padding: '0px'
}

export class TopBlock extends React.Component {

	render (): JSX.Element {

		return (
			<Toolbar style={topStyle}>
				<div className="topblock">
					<a href="#intro" className="logo">
						Jim Huang
					</a>
				</div>
			</Toolbar>
		)
	}
}