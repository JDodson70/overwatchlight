import React, { Component } from 'react';
import './tracer.css';

class Tracer extends Component {
  render() {
    return (

    	// JSX Code
			<div className="c-page c-page--tracer">
				<h1>Tracer</h1>
				<p>Toting twin pulse pistols, energy-based time bombs, and rapid-fire banter, Tracer is able to "blink" through space and rewind her personal timeline as she battles to right wrongs the world over.</p>
				<h3>abilities</h3>
				<table>
						<tbody>
							<tr>
								<td>Pulse Tools</td>
								<td>Tracer rapid-fires both of her pistols.</td>
							</tr>
							<tr>
								<td>Btrnk</td>
								<td>Tracer zips horizontally through space in the direction she’s moving, and reappears several yards away. She stores up to three charges of the blink ability and generates more every few seconds.</td>
							</tr>
							<tr>
								<td>Recall</td>
								<td>Tracer bounds backward in time, returning her health, ammo and position on the map to precisely where they were a few seconds before.</td>
							</tr>
							<tr>
								<td>Pulse Bomb</td>
								<td>Tracer lobs a large bomb that adheres to any surface or unfortunate opponent it lands on. After a brief delay, the bomb explodes, dealing high damage to all enemies within its blast radius.</td>
							</tr>
						</tbody>
					</table>
					<div class="sketchfab-embed-wrapper"><iframe width="640" height="480" src="https://sketchfab.com/models/25b5dfad18ce4ef29efc4b8846f32c42/embed?autostart=1&amp;camera=0" frameborder="0" allowvr allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>
				</div>
			</div>

		);
	}
}

export default Tracer;