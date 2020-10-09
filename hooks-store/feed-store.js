import { initStore } from "./store";

const feed = [];

const configureStore = () => {
  const actions = {
    SET_FEED: (_, newArticles) => ({ feed: [...newArticles] }),
    REMOVE_FEED: () => ({ feed }),
  };

  initStore(actions, { feed });
};

export default configureStore;
