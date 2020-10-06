import React, { Component } from "react";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.modalEscCloseFunction);
    window.addEventListener("click", this.modalClickCloseFunction);
  }

  modalEscCloseFunction = (e) => {
    if (e.code === "Escape") {
      this.props.onCloseModal();
    }
  };
  modalClickCloseFunction = (e) => {
    if (e.target.nodeName === "DIV") {
      this.props.onCloseModal();
    }
  };

  componentWillUnmount() {
    window.removeEventListener("keydown", this.modalEscCloseFunction);
    window.removeEventListener("click", this.modalClickCloseFunction);
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
