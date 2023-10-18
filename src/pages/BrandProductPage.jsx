import { useParams } from "react-router-dom";
import ProductCard from "../components/Cards/ProductCard";
import BrandAdvertise from "../components/header/BrandAdvertise";

const BrandProductPage = () => {
  const {brandName} = useParams()
    const product = true;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
  });
  return (
    <div className="">
      <BrandAdvertise />

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
            {brandName}
          </p>
        </div>

        {/* {products} */}
        {
            !product ?
            <div className="mt-10">
                <p className="text-3xl font-bold dark:text-white">No Apple Product Available</p>
            </div>
            :
            <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 mt-10">
            <ProductCard brandPage={true}/>
            <ProductCard brandPage={true}/>
            <ProductCard brandPage={true}/>
            <ProductCard brandPage={true}/>
        </div>
        }
       
      </div>
    </div>
  );
};

export default BrandProductPage;
