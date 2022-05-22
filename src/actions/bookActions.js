import {
  BOOKS_UPDATE_REQUEST,
  BOOKS_UPDATE_SUCCESS,
  BOOKS_UPDATE_FAIL,
  BOOKS_CREATE_FAIL,
  BOOKS_CREATE_REQUEST,
  BOOKS_CREATE_SUCCESS,
  BOOKS_DELETE_FAIL,
  BOOKS_DELETE_REQUEST,
  BOOKS_DELETE_SUCCESS,
  BOOKS_LIST_FAIL,
  BOOKS_LIST_REQUEST,
  BOOKS_LIST_SUCCESS,
  BOOKS_REMOVEALL_SUCCESS,
} from "../constants/bookConstants";

import axios from "axios";

export const listBooks = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: BOOKS_LIST_REQUEST,
    });

    const { data } = await axios.get("/api/books/allbooks");

    console.log(data);

    dispatch({
      type: BOOKS_LIST_SUCCESS,
      payload: data,
    });
    return Promise.resolve(true);
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: BOOKS_LIST_FAIL,
      payload: message,
    });
    return Promise.reject(error.response.data.message);
  }
};

export const addBookAction =
  (bookName, authorName, description, bookIcon, price) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: BOOKS_CREATE_REQUEST,
      });

      //   const {
      //     userLogin: { userInfo },
      //   } = getState();

      // get the books from current postList state
      const {
        bookList: { books },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          //   Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/books/add`,
        { bookName, authorName, description, bookIcon, price },
        config
      );
      dispatch({
        type: BOOKS_CREATE_SUCCESS,
        payload: data,
      });

      // add the new post to the current postList state
      dispatch({
        type: BOOKS_LIST_SUCCESS,
        payload: [...books, data],
      });

      return Promise.resolve(true);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: BOOKS_CREATE_FAIL,
        payload: message,
      });
      return Promise.reject(error.response.data.message);
    }
  };

// export const deletePostAction = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: BOOKS_DELETE_REQUEST,
//     });

//     const {
//       userLogin: { userInfo },
//     } = getState();

//     // get the books from current postList state
//     const {
//       postList: { books },
//     } = getState();

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };

//     books.splice(
//       books.findIndex((post) => post._id === id),
//       1
//     );

//     const { data } = await axios.delete(`/api/books/${id}`, config);
//     dispatch({
//       type: BOOKS_DELETE_SUCCESS,
//       payload: data,
//     });
//     // add the new post to the current postList state
//     dispatch({
//       type: BOOKS_LIST_SUCCESS,
//       payload: [...books],
//     });

//     return Promise.resolve(true);
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({
//       type: BOOKS_DELETE_FAIL,
//       payload: message,
//     });

//     return Promise.reject(error.response.data.message);
//   }
// };

// export const updatePostAction =
//   (id, caption, encryptedCode, lang) => async (dispatch, getState) => {
//     try {
//       dispatch({
//         type: BOOKS_UPDATE_REQUEST,
//       });

//       const {
//         userLogin: { userInfo },
//       } = getState();

//       const {
//         postList: { books },
//       } = getState();

//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${userInfo.token}`,
//         },
//       };

//       const { data } = await axios.put(
//         `/api/books/${id}`,
//         { caption, encryptedCode, lang },
//         config
//       );

//       dispatch({
//         type: BOOKS_UPDATE_SUCCESS,
//         payload: data,
//       });

//       const updatedPostList = books.map((obj) => {
//         if (obj._id === id) {
//           console.log(obj);
//           console.log(data);
//           return data;
//         } else {
//           return obj;
//         }
//       });

//       // update the post in the postList state
//       dispatch({
//         type: BOOKS_LIST_SUCCESS,
//         payload: updatedPostList,
//       });

//       return Promise.resolve(true);
//     } catch (error) {
//       const message =
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message;
//       dispatch({
//         type: BOOKS_UPDATE_FAIL,
//         payload: message,
//       });

//       return Promise.reject(error.response.data.message);
//     }
//   };

export const removeStateBooks = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: BOOKS_REMOVEALL_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: BOOKS_DELETE_FAIL,
      payload: message,
    });
  }
};
