import {
  // POSTS_UPDATE_REQUEST,
  // POSTS_UPDATE_SUCCESS,
  // POSTS_UPDATE_FAIL,
  BOOKS_CREATE_FAIL,
  BOOKS_CREATE_REQUEST,
  BOOKS_CREATE_SUCCESS,
  // POSTS_DELETE_FAIL,
  // POSTS_DELETE_REQUEST,
  // POSTS_DELETE_SUCCESS,
  BOOKS_LIST_FAIL,
  BOOKS_LIST_REQUEST,
  BOOKS_LIST_SUCCESS,
  BOOKS_REMOVEALL_SUCCESS,
} from "../constants/bookConstants";

export const bookListReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case BOOKS_LIST_REQUEST:
      return { loading: true };
    case BOOKS_LIST_SUCCESS:
      return { loading: false, books: action.payload };
    case BOOKS_LIST_FAIL:
      return { loading: false, error: action.payload };
    case BOOKS_REMOVEALL_SUCCESS:
      return { loading: true, books: [] };

    default:
      return state;
  }
};

export const bookCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOKS_CREATE_REQUEST:
      return { loading: true };
    case BOOKS_CREATE_SUCCESS:
      return { loading: false, success: true };
    case BOOKS_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// export const postDeleteReducer = (state = {}, action) => {
//   switch (action.type) {
//     case POSTS_DELETE_REQUEST:
//       return { loading: true };
//     case POSTS_DELETE_SUCCESS:
//       return { loading: false, success: true };
//     case POSTS_DELETE_FAIL:
//       return { loading: false, error: action.payload, success: false };

//     default:
//       return state;
//   }
// };

// export const postUpdateReducer = (state = {}, action) => {
//   switch (action.type) {
//     case POSTS_UPDATE_REQUEST:
//       return { loading: true };
//     case POSTS_UPDATE_SUCCESS:
//       return { loading: false, success: true };
//     case POSTS_UPDATE_FAIL:
//       return { loading: false, error: action.payload, success: false };

//     default:
//       return state;
//   }
// };
