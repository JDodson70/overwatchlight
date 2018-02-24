import React, { Component } from 'react';
import { render } from 'react-dom';
import './HeroList.css';
import  SoldierThumb from './images/soldier.jpg';

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
    return (
      <div>
        <div
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          Hover Me
          <img className="c-HeroList__thumb" src={SoldierThumb} />
        </div>
        {
          this.state.isHovering &&
          <div>
            Hovering right meow! 🐱
          </div>
        }
      </div>
    );
  }
}