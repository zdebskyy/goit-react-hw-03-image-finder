import React, { Component } from "react";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.modalCloseFunction);
  }

  modalCloseFunction = (e) => {
    if (e.code === "Escape") {
      this.props.onCloseModal();
    }
  };

  componentWillUnmount() {
    window.removeEventListener("keydown", this.modalCloseFunction);
  }
  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.src} alt="" />
        </div>
      </div>
    );
  }
}
