import { useState } from "react";

import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";

export default function BookModal() {
  const [state, setState] = useState("login");

  return (
    <>
      <input type="checkbox" id="bookModal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="bookModal"
            class="btn btn-sm btn-circle absolute right-2 top-2 btn-ghost"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">
            Congratulations random Interner user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div>
    </>
  );
}
