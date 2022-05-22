import MainCarousel from "../src/components/MainCarousel";
import MultiDisplayCarousel from "../src/components/MultiDisplayCarousel";

export default function Home() {
  return (
    <>
      <div className="flex h-[calc(100%-8rem)] bg-center bg-cover bg-anime">
        <MainCarousel />
      </div>
      <p className="flex justify-center pt-6 pb-6 text-2xl card-title">
        NEW ARRIVALS
      </p>
      <MultiDisplayCarousel type={"newArrival"} />
      <p className="flex justify-center pt-6 pb-6 text-2xl card-title">
        TOP TRENDING
      </p>
      <MultiDisplayCarousel type={"topTrending"} />
      <p className="flex justify-center pt-6 pb-6 text-2xl card-title">
        BEST SELLERS
      </p>
      <MultiDisplayCarousel type={"bestSeller"} />
    </>
  );
}
