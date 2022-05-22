export default function HidingNavbar() {
  return (
    <>
      <div
        tabindex="0"
        className={
          "collapse w-screen collapse-open overflow-visible"
          //  +
          // " " +
          // (scrollY > 0
          //   ? "collapse-close overflow-hidden"
          //   : "collapse-open overflow-visible")
        }
      >
        {/* <div class="collapse-title text-xl font-medium">
            Focus me to see content
          </div> */}
        <div
          class={
            "collapse-content overflow-visible p-0 border-b-2"
            //  +
            // " " +
            // (scrollY > 0 ? "border-0 border-t-2" : "border-b-2")
          }
        >
          <div class="navbar bg-base-100">
            <div class="flex-none">
              <ul class="menu menu-horizontal p-0">
                <li tabIndex="0">
                  <a>
                    Books
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </a>
                  <ul class="p-2 bg-base-100 z-30">
                    <li>
                      <a>Arts and Photography</a>
                    </li>
                    <li>
                      <a>Biography and Memoirs</a>
                    </li>
                    <li>
                      <a>Dictionaries and Language</a>
                    </li>
                    <li>
                      <a>Literature and Literary Studies</a>
                    </li>
                    <li>
                      <a>English Language and Teaching</a>
                    </li>
                    <li>
                      <a>Fiction</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>New Arrivals</a>
                </li>
                <li>
                  <a>Box Sets</a>
                </li>
                <li>
                  <a>Best Sellers</a>
                </li>
                <li>
                  <a>Fictional Books</a>
                </li>
                <li>
                  <a>Award Winners</a>
                </li>
                <li>
                  <a>Featured Authors</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
