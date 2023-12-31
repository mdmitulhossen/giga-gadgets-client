import { useEffect, useState } from "react";
import { baseURL } from "../utilitis/Url.js";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner.jsx";
import { useLoaderData } from "react-router-dom";

// import baseURL from '../utilitis/url.js'
const AddProductPage = ({ update }) => {
  const [handleLoading, setHandleLoading] = useState(false);
  const [brands, setBrands] = useState([]);

  const product = useLoaderData();
  // const {productName,brandName,price,image,type,rating,description} = updateProduct || {}
  // console.log("Upadate ======>", product);

  // Brand data fetch
  useEffect(() => {
    fetch(`${baseURL}/brands`)
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });


  // Add & update product handle

  const productsHandle = (e) => {
    e.preventDefault();
    const form = e.target;

    const productName = form.name.value;
    const brandName = form.brand.value;
    const price = form.price.value;
    const image = form.image.value;
    const type = form.type.value;
    const rating = form.rating.value;
    // const description = form.description.value;
    const description = update ? '' : form.description.value;

    if (update) {
      // product update handle
      setHandleLoading(true);
      const updateProduct = {
        productName,
        brandName,
        price,
        image,
        type,
        rating,
      };
      // update product handle
      fetch(`${baseURL}/products/${product?._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateProduct),
      })
        .then((result) => {
          setHandleLoading(false);
          toast.success("Product Updated successfully");
          form.reset();
        })
        .catch((err) => {
          setHandleLoading(false);
          toast.error("Cannot Updated Product Somthing Wrong!!");
        });

    } else {
      // add product handle
      setHandleLoading(true);
      const addProduct = {
        productName,
        brandName,
        price,
        image,
        type,
        rating,
        description,
      };
      fetch(`${baseURL}/products`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addProduct),
      })
        .then((result) => {
          setHandleLoading(false);
          toast.success("Product added successfully");
          form.reset();
        })
        .catch((err) => {
          setHandleLoading(false);
          toast.error("Cannot Added Product Somthing Wrong!!");
        });
    }
  };

  return (
    <div className="gadgetContainer pt-10">
      {handleLoading && <Spinner />}
      <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-center text-3xl font-semibold">
            <span className="mr-3 text-[#FF497C]">
              <i className="bx bxs-alarm-add"></i>
            </span>
            <span className="dark:text-white">
              <span className="text-[#FF497C]">
                {update ? "Update " : "Add "}
              </span>
              Your Product
            </span>
          </p>
        </div>
        {/* form */}
        <form onSubmit={productsHandle}>
          <div className="flex gap-8 ">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                defaultValue={update ? product?.productName : ""}
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="brand"
              >
                Brand Name
              </label>
              <select
                name="brand"
                id="brand"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Select Brand"
                defaultValue={update ? product?.brandName : ""}
              >
                <option value={update ? product?.brandName : ""} selected>
                  {update ? product?.brandName : "Select Brand"}
                </option>
                {brands?.map((brand) => (
                  <option key={brand.id} value={brand.brandName}>
                    {brand.brandName}
                  </option>
                ))}
              </select>

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Price"
                id="Price"
                name="price"
                defaultValue={update ? product?.price : ""}
              />
            </div>
            {/* Right side */}
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="image">
                Image
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Image URL"
                id="image"
                name="image"
                defaultValue={update ? product?.image : ""}
              />
              <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
              Type
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter type"
                id="type"
                name="type"
                defaultValue={update ? product?.type : ""}
              />

              {/* <label className="block mt-4 mb-2 dark:text-white" htmlFor="type">
                Type
              </label>
              <select
                name="type"
                id="type"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Select type"
              >
                <option value={update ? product?.type : ""} selected>
                  {update ? product?.type : "Select type"}
                </option>
                <option value="phone">Phone</option>
                <option value="computer">Computer</option>
                <option value="laptop">Laptop</option>
                <option value="freeze">Freeze</option>
                <option value="headPhone">HeadPhone</option>
                <option value="tv">TV</option>
                <option value="camera">Camera</option>
              </select> */}

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="rating"
              >
                Rating
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                maxLength={5}
                max={5}
                min={0}
                type="number"
                placeholder="Enter Rating"
                id="rating"
                name="rating"
                defaultValue={update ? product?.rating : ""}
              />
            </div>
          </div>

          {!update && (
            <div>
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter short description"
                id="description"
                name="description"
              />
            </div>
          )}

          {update ? (
            <input
              className="px-4 text-white font-semibold w-full py-2 mt-4 rounded  bg-[#FF497C] duration-200 hover:text-white cursor-pointer hover:bg-[#ab3154] "
              type="submit"
              value="Update Product"
            />
          ) : (
            <input
              className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
              type="submit"
              value="Add Product"
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
