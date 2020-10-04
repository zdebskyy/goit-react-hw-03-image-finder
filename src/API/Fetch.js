const fetchSearchPictures = (searchQuery, page = 1) => {
  return fetch(
    `https://pixabay.com/api/?key=17911527-5bdfde13a28c678a168d7ccf7&q=${searchQuery}&per_page=15&page=${page}`
  ).then((response) => response.json().then((data) => data.hits));
};

export default {
  fetchSearchPictures,
};
