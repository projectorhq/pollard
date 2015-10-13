import React, { Component } from 'react';
import classNames from 'classnames';

import { POLLARD_ACTION } from '../constants/ActionTypes';
import SongInput from './SongInput';
import MarkPlayedBtn from './MarkPlayedBtn';
import mergeStyles from '../lib/mergeStyles';
import flatten2Array from '../lib/flattenObjectToArray';


export default class SelectedSong extends Component {

  render() {
		let flatInputs = flatten2Array(this.props.song.inputs);
		let inputs = flatInputs.map((keyVal, index) => {
			return <SongInput
				label={ keyVal[0] }
				val={ keyVal[1] }
				key={ index }
				/>;
    });

		let songStyle= mergeStyles({
			backgroundColor: '#F6EBFA'
		});

    return (
			<li className="list-group-item" style={ songStyle }>
				<div
					onClick={ (e) => this.handleClick(e) }
					className="row">
					{ inputs }
					<MarkPlayedBtn />
				</div>
			</li>
    );
  }

}
