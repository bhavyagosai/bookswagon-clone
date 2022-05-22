import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../actions/userActions";
import { removeStateBooks } from "../actions/bookActions";

export default function StickyNavbar() {
  const router = useRouter();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(removeStateBooks());
    dispatch(logout());
    router.push("/");
  };
  useEffect(() => {}, [userInfo]);
  return (
    <div className="sticky top-0 z-30 transition-all duration-100 shadow-sm bg-opacity-90 backdrop-blur bg-base-100 text-base-content bg-white/30">
      <div class="navbar bg-base-100 border-b bg-white/30">
        <div class="navbar-start">
          <label
            for="my-drawer"
            tabindex="0"
            class="btn btn-ghost btn-circle mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <div className="flex transition-all duration-100 border rounded-full shadow-sm backdrop-blur-3xl bg-base-100 text-base-content bg-white/0">
            <div className="transition duration-200 form-control">
              <input
                type="text"
                placeholder="Search"
                className="w-96 input focus:outline-none"
              />
            </div>
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="navbar-center">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            fill="hsl(var(--p))"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 16H5V3h10v14zM13 5H7v2h6V5zm0 8H7v2h6v-2zm0-4H7v2h6V9z" />
          </svg>
          <a className="text-xl normal-case">bookswagon</a>
        </div>
        <div className="navbar-end">
          {userInfo ? (
            <>
              <div tabindex="0" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">3</span>
                </div>
              </div>
              <div className="mr-4 dropdown dropdown-end">
                <label tabindex="0" className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">2</span>
                  </div>
                </label>
                <div
                  tabindex="0"
                  className="mt-3 shadow card card-compact dropdown-content w-52 bg-base-100"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">2 Items</span>
                    <span className="text-info">Subtotal: ₹1670</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {/* <img src="https://api.lorem.space/image/face?hash=33791" /> */}
                    <img
                      src={
                        localStorage.getItem("userInfo")
                          ? JSON.parse(localStorage.getItem("userInfo"))
                              .profileIcon
                            ? JSON.parse(localStorage.getItem("userInfo"))
                                .profileIcon
                            : "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                          : "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                      }
                    />
                  </div>
                </label>
                <ul
                  tabindex="0"
                  className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        logoutHandler();
                      }}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <label class="btn btn-ghost gap-2 btn-modal" for="authModal">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    stroke-width="2"
                    d="M9,15 L9,22 L22,22 L22,2 L9,2 L9,9 M18,12 L0,12 M13,7 L18,12 L13,17"
                  />
                </svg>
                Login/Signup
              </label>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
