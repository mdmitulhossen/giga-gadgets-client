import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { baseURL } from "../utilitis/Url";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";

const MyCartPage = () => {
  const { products, productsCart } = useLoaderData() || {};
  const { user } = useAuth() || {};
  // useState
  const [totalPrice, setTotalPrice] = useState(0);
  const [productOfCart, setProductOfCart] = useState([]);
  const [cartLoading, setCartLoading] = useState(false);

  // find cart product
  useEffect(() => {
    const filterProduct = productsCart?.filter(
      (item) => item.userEmail === user?.email
    );

    const filterData = products?.filter((item) => {
      return filterProduct.some((i) => i.productId === item._id);
    });

    setProductOfCart(filterData);
  }, []);

  // handle delete product into cart
  const deleteProductCard = (id) => {
    console.log(id);
    setCartLoading(true);
    fetch(`${baseURL}/cartProducts/${id}`, {
      method: "DELETE",
    })
      .then((result) => {
        setCartLoading(false);
        location.reload();
        toast.success("Successfully Deleted product into Cart ");
      })
      .catch((err) => {
        setCartLoading(false);
        toast.error("Somthing worng!! Not delete product into Cart");
      });
  };
// handle total price

const handleTotalPrice = () => { 
  console.log(productOfCart[0]?.price)
  let total = 0;
  productOfCart.map((item) => {
    total = total + parseFloat(item.price);
   
  })
  console.log(total)
  console.log(total)
  setTotalPrice(total)

}
  // cartProducts
  useEffect(() => {
    handleTotalPrice();


    const cartProducts = document.querySelectorAll(".cartProducts");
    const quantity = cartProducts[0]?.children[1].children[0].value
    console.log(cartProducts[0]?.children[1].children[0].value)

    
  }, [productOfCart]);
  console.log(totalPrice)
  return (
    <div className="gadgetContainer pt-10">
      {cartLoading && <Spinner />}
      <div className="flex flex-wrap shadow-md mt-10">
        {/* Product */}
        <div className="lg:w-3/4 w-full bg-white dark:bg-[#1a2641d5] px-10 py-10">
          <div className="flex justify-between border-b pb-8 dark:text-white">
            <h1 className="font-semibold text-2xl">Your Cart</h1>
            <h2 className="font-semibold text-2xl">
              {productOfCart.length} Items
            </h2>
          </div>
          <div className="flex mt-10 mb-5 flex-wrap">
            <h3 className="font-semibold text-gray-600 dark:text-gray-300 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-gray-600 dark:text-gray-300 text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 className="font-semibold text-gray-600 dark:text-gray-300 text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 className="font-semibold text-gray-600 dark:text-gray-300 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>
          {/* Items */}

          {productOfCart.length === 0 ? (
            <p className="text-2xl font-semibold dark:text-white my-4">
              No product here
            </p>
          ) : (
            productOfCart?.map((item) => (
              <div
                key={item._id}
                className="cartProducts flex relative items-center dark:text-white  -mx-8 px-6 py-5 flex-wrap border mt-3"
              >
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img
                      className="h-24 w-full object-fill"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-2 ml-4 flex-grow">
                    <span className="font-bold text-sm">
                      {item.productName}
                    </span>
                    <span className="text-red-500 text-xs">
                      {item.brandName}
                    </span>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <input
                    id="quantity"
                    className="mx-2 border text-center w-16 dark:text-black"
                    type="number"
                    defaultValue={1}
                    min={1}
                  />
                </div>
                <span
                  id="productPrice"
                  className="text-center w-1/5 font-semibold text-sm"
                >
                  $<span>{item.price}</span>
                </span>
                <span
                  id="totalPrice"
                  className="text-center w-1/5 font-semibold text-sm"
                >
                  $<span>{item.price}</span>
                </span>
                <button
                  onClick={() => deleteProductCard(item._id)}
                  className="px-3 py-1 bg-[#FF497C] font-semibold text-white w-10 absolute top-2 right-2"
                >
                  X
                </button>
              </div>
            ))
          )}

          {/* Continue Shoping */}
          <Link
            to="/"
            className="flex font-semibold text-[#FF497C] text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-[#FF497C] w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>

        {/* Order summary */}
        <div
          id="summary"
          className="lg:w-1/4 w-full px-8 py-10 dark:text-white"
        >
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items {productOfCart?.length}</span>
            <span className="font-semibold text-sm">{totalPrice}$</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm border">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="py-10">
            <label
              htmlFor="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full border"
            />
          </div>
          <button className="bg-[#FF497C] hover:bg-[#ab3154] px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>${totalPrice+10}</span>
            </div>
            <button className="bg-[#FF497C] hover:bg-[#ab3154] font-semibold  py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCartPage;
