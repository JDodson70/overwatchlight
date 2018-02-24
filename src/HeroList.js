import React, { Component } from 'react';
import { render } from 'react-dom';
import './HeroList.css';
import Soldier from './heroes/offense/soldier.js'
import  SoldierThumb from './images/soldier.jpg';
import  SoldierIntro from './images/soldier-intro.jpg';


export class HeroList extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    const contentClass = this.state.isHovering ? "c-heroList__content is-active" : "c-heroList__content";

    return (
      <div className="l-full">
        <div className="c-heroList">
          <div className="c-heroList__thumbCol" >
            <img
              className="c-heroList__thumb"
              src={SoldierThumb}
              onMouseEnter={this.handleMouseHover}
              onMouseLeave={this.handleMouseHover}
              />
          </div>
          <div className={contentClass} style={{backgroundImage: "url(" + SoldierIntro + ")"}}>
          {
            this.state.isHovering &&
              <div className="c-heroList__content__caption">
                <h2>Soldier: 76</h2>
                <p>Armed with cutting-edge weaponry, including an experimental pulse rifle that’s capable of firing spirals of high-powered Helix Rockets, Soldier: 76 has the speed and support know-how of a highly trained warrior.</p>
              </div>
          }
          </div>
        </div>
      </div>
    );
  }
}