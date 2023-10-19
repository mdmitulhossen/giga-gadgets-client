import { useEffect, useState } from "react";
import BrandCard from "../components/Cards/BrandCard";
import Hero from "../components/header/Hero";

// image
import choose1 from "../assets/whyChoose/1.webp";
import choose2 from "../assets/whyChoose/2.webp";
import choose3 from "../assets/whyChoose/3.webp";
import choose4 from "../assets/whyChoose/4.webp";
import choose5 from "../assets/whyChoose/5.webp";
import ProductCard from "../components/Cards/ProductCard";
import { baseURL } from "../utilitis/Url";

const HomePage = () => {
  const [brands, setBrands] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    // brands
    fetch(`${baseURL}/brands`)
      .then((res) => res.json())
      .then((data) => setBrands(data));

    // all products
    fetch(`${baseURL}/products`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  return (
    <div className="">
      <Hero />

      <div className="gadgetContainer">
        {/* header */}
        <div className="text-center md:text-left mt-16">
          <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
            <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
              <i className="bx bxs-category"></i>
            </span>
            Top Brands
          </p>
          <p className="text-[32px] lg:text-[40px] font-semibold dark:text-white">
            Browse By Brands
          </p>
        </div>

        {/* grid grid-cols-5 gap-4  dark:bg-[#0F172A] */}
        <div className=" grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3  xl:grid-cols-5 gap-5  mt-10 w-full ">
          {brands?.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>

        {/* Explore our product */}
        <div>
          {/* header */}
          <div className="text-center md:text-left mt-20">
            <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
              <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
                <i className="bx bxs-shopping-bag"></i>
              </span>
              Our Products
            </p>
            <p className="text-[32px] lg:text-[40px] font-semibold dark:text-white">
              Explore Our Product
            </p>
          </div>

          {/* Product container */}
          <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 mt-10">
            {allProducts?.length > 8
              ? allProducts
                  ?.slice(0, 8)
                  .map((item) => <ProductCard key={item._id} item={item} />)
              : allProducts?.map((item) => (
                  <ProductCard key={item._id} item={item} />
                ))}
          </div>
          {allProducts?.length > 8 && (
            <div className="mt-10 flex justify-center">
              <button className="text-white bg-[#FF497C] border-0 py-2 px-6 focus:outline-none hover:bg-[#ab3154] rounded font-semibold duration-200">
                See All
              </button>
            </div>
          )}
        </div>

        {/* Why people choose us */}
        <div>
          {/* header */}
          <div className="text-center md:text-left mt-20">
            <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
              <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
                <i className="bx bxs-like"></i>
              </span>
              Why Us
            </p>
            <p className="text-[32px] lg:text-[40px] font-semibold dark:text-white">
              Why People Choose Us
            </p>
          </div>

          {/* Container */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
            <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
              <img src={choose1} alt="" />
              <p className="font-semibold text-lg text-center dark:text-white">
                Fast & Secure <br />
                Delivery
              </p>
            </div>
            <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
              <img src={choose2} alt="" />
              <p className="font-semibold text-lg text-center dark:text-white">
                Money Back <br />
                Guarantee
              </p>
            </div>
            <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
              <img src={choose3} alt="" />
              <p className="font-semibold text-lg text-center dark:text-white">
                24 Hour Return <br />
                Policy
              </p>
            </div>
            <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
              <img src={choose4} alt="" />
              <p className="font-semibold text-lg text-center dark:text-white">
                Pro Quality <br />
                Support
              </p>
            </div>
            <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
              <img src={choose5} alt="" />
              <p className="font-semibold text-lg text-center dark:text-white">
                Next Level Pro <br />
                Quality
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
