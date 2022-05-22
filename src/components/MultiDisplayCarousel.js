import MultiCarousel from "react-multi-carousel";
import { useDispatch, useSelector } from "react-redux";

import { listBooks } from "../actions/bookActions";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function MultiDisplayCarousel({ type }) {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookList);
  const { books, error } = bookList;

  useEffect(() => {
    dispatch(listBooks());
    // console.log(books, error);
  }, []);

  return (
    <MultiCarousel
      swipeable
      draggable
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlay
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="transform 300ms ease-in-out"
      transitionDuration={500}
      containerClass={
        "carousel-container pr-14 pl-14 pt-8 pb-8" +
        " " +
        (type === "newArrival"
          ? "bg-chibi1 bg-cover"
          : type === "topTrending"
          ? "bg-chibi2 bg-cover"
          : type === "bestSeller"
          ? "bg-chibi3 bg-cover"
          : "bg-anime")
      }
      sliderClass="react-multi-carousel-track"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {error !== null ? (
        books ? (
          books?.length !== 0 ? (
            books?.map((book) => (
              <label
                for="bookModal"
                class="cursor-pointer card card-compact w-96 bg-base-100 shadow-xl bg-transparent/5 backdrop-blur-xl border-white border-opacity-20"
              >
                <figure>
                  <img src={book.bookIcon} alt="book" />
                </figure>
                <div class="card-body bg-white/20">
                  <h2 class="card-title">{book.bookName}</h2>
                  <p className="card-title text-primary">₹{book.price}</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </label>
            ))
          ) : (
            <p>Wow, such empty!</p>
          )
        ) : (
          <p>ohno</p>
        )
      ) : (
        <p>Oops!</p>
      )}
    </MultiCarousel>
  );
}
