import { useEffect, useState } from "react";

const AddProductPage = ({ update }) => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
});

  return (
    <div className="gadgetContainer pt-10">
      <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
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
        <form>
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
              >
                <option value="" selected>
                  Select Brand
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
              />

              <label className="block mt-4 mb-2 dark:text-white" htmlFor="type">
                Type
              </label>
              <select
                name="type"
                id="type"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Select type"
              >
                <option value="" selected>
                  Select type
                </option>
                <option value="phone">Phone</option>
                <option value="computer">Computer</option>
                <option value="laptop">Laptop</option>
                <option value="freeze">Freeze</option>
                <option value="headPhone">HeadPhone</option>
                <option value="tv">TV</option>
                <option value="camera">Camera</option>
              </select>

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
              className="px-4 text-white font-semibold w-full py-2 mt-4 rounded  bg-[#FF497C] duration-200 hover:text-white cursor-pointer"
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
