import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import fetchApi from "./API/Fetch";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Modal from "./components/Modal";

export default class App extends Component {
  state = {
    img: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 1,
    showModal: false,
    src: "",
  };

  componentDidUpdate(prevPrors, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchPictures();
    }
  }

  fetchPictures = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    fetchApi
      .fetchSearchPictures(searchQuery, page)
      .then((img) =>
        this.setState((prevState) => {
          return { img: [...prevState.img, ...img], page: prevState.page + 1 };
        })
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  handleSearchQuery = (query) => {
    this.setState({ searchQuery: query, img: [], page: 1 });
  };
  handleShowModal = (src) => {
    this.setState({ showModal: true, src: src });
  };
  onCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { img, loading, showModal, src } = this.state;
    return (
      <>
        <SearchBar onSubmitForm={this.handleSearchQuery} />

        <ImageGallery images={img} onShowModal={this.handleShowModal} />

        {showModal && <Modal src={src} onCloseModal={this.onCloseModal} />}

        {loading && (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
        {img.length > 0 && (
          <button type="button" className="Button" onClick={this.fetchPictures}>
            Load more
          </button>
        )}
      </>
    );
  }
}
