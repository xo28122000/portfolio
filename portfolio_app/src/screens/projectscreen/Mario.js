import React, { Component } from "react";

import "./Mario.css";
class Mario extends Component {
  state = { playerLeftPosition: 500, playerBottomPosition: 20 };
  render() {
    const movementSpeed = 30;

    document.onkeydown = e => {
      const marioPlayer = document.getElementById("marioPlayer");
      if (e.code === "ArrowLeft") {
        if (this.state.playerLeftPosition - movementSpeed >= 0) {
          marioPlayer.style.transform = "";
          this.setState({
            playerLeftPosition: this.state.playerLeftPosition - movementSpeed
          });
        }
      } else if (e.code === "ArrowRight") {
        if (
          this.state.playerLeftPosition + 25 <=
          marioPlayer.offsetParent.offsetWidth
        ) {
          marioPlayer.style.transform = "scaleX(-1)";
          this.setState({
            playerLeftPosition: this.state.playerLeftPosition + movementSpeed
          });
        }
      } else if (e.code === "ArrowUp") {
        this.setState({
          playerBottomPosition: 50
        });
        setTimeout(() => {
          this.setState({
            playerBottomPosition: 20
          });
        }, 300);
      }
    };
    return (
      <div id="marioRoot" className="container-fluid" style={{}}>
        <div id="blockRegion"></div>
        <div id="playerRegion"></div>
        <div
          id="marioPlayer"
          style={{
            left: this.state.playerLeftPosition,
            right: "auto",
            bottom: String(this.state.playerBottomPosition) + "%"
          }}
        ></div>
        <div id="groundRegion"></div>
      </div>
    );
  }
}

export default Mario;
