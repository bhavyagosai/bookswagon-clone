import { useState } from "react";

import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";

export default function AuthModal() {
  const [state, setState] = useState("login");

  return (
    <>
      <input type="checkbox" id="authModal" class="modal-toggle" />
      <label
        for="authModal"
        class="modal cursor-pointer modal-bottom sm:modal-middle"
      >
        <label class="modal-box relative" for="">
          {/* <label
            for="authModal"
            class="btn btn-sm btn-circle absolute right-2 top-2 btn-ghost z-10"
          >
            ✕
          </label> */}

          <div class="tabs">
            <a
              className={
                "tab tab-lifted card-title text-lg w-1/2" +
                " " +
                (state == "register" ? "tab-active" : "")
              }
              onClick={() => setState("register")}
            >
              Signup
            </a>
            <a
              className={
                "tab tab-lifted card-title text-lg w-1/2" +
                " " +
                (state == "login" ? "tab-active" : "")
              }
              onClick={() => setState("login")}
            >
              Login
            </a>
          </div>
          {state == "login" ? <LoginComponent /> : <RegisterComponent />}
        </label>
      </label>
    </>
  );
}
