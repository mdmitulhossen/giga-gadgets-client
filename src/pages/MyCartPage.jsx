

const MyCartPage = () => {
    return (
        <div className="gadgetContainer pt-10">
            <div className="flex flex-wrap shadow-md mt-10">
                {/* Product */}
      <div className="lg:w-3/4 w-full bg-white dark:bg-[#1a2641d5] px-10 py-10">
        <div className="flex justify-between border-b pb-8 dark:text-white">
          <h1 className="font-semibold text-2xl">Your Cart</h1>
          <h2 className="font-semibold text-2xl">3 Items</h2>
        </div>
        <div className="flex mt-10 mb-5 flex-wrap">
          <h3 className="font-semibold text-gray-600 dark:text-gray-300 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-gray-600 dark:text-gray-300 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 className="font-semibold text-gray-600 dark:text-gray-300 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 className="font-semibold text-gray-600 dark:text-gray-300 text-xs uppercase w-1/5 text-center">Total</h3>
        </div> 
        {/* Items */}
        <div className="flex relative items-center dark:text-white  -mx-8 px-6 py-5 flex-wrap border mt-3">
          <div className="flex w-2/5">
            <div className="w-20">
              <img className="h-24 w-full object-fill" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt=""/>
            </div>
            <div className="flex flex-col justify-center gap-2 ml-4 flex-grow">
              <span className="font-bold text-sm">Iphone 6S</span>
              <span className="text-red-500 text-xs">Apple</span>
              
            </div>
          </div>
          <div className="flex justify-center w-1/5">
            <input className="mx-2 border text-center w-16 dark:text-black" type="number" defaultValue={0}  min={0}/>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
          <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
          <button className="px-3 py-1 bg-[#FF497C] font-semibold text-white w-10 absolute top-2 right-2">X</button>
        </div>
        {/* Items */}
        <div className="flex relative items-center dark:text-white  -mx-8 px-6 py-5 flex-wrap border mt-3">
          <div className="flex w-2/5">
            <div className="w-20">
              <img className="h-24 w-full object-fill" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt=""/>
            </div>
            <div className="flex flex-col justify-center gap-2 ml-4 flex-grow">
              <span className="font-bold text-sm">Iphone 6S</span>
              <span className="text-red-500 text-xs">Apple</span>
              
            </div>
          </div>
          <div className="flex justify-center w-1/5">
            <input className="mx-2 border text-center w-16 dark:text-black" type="number" defaultValue={0}  min={0}/>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
          <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
          <button className="px-3 py-1 bg-[#FF497C] font-semibold text-white w-10 absolute top-2 right-2">X</button>
        </div>

       

        <a href="#" className="flex font-semibold text-[#FF497C] text-sm mt-10">
      
          <svg className="fill-current mr-2 text-[#FF497C] w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </a>
      </div>


{/* Order summary */}
      <div id="summary" className="lg:w-1/4 w-full px-8 py-10 dark:text-white">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Items 3</span>
          <span className="font-semibold text-sm">590$</span>
        </div>
        <div>
          <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select className="block p-2 text-gray-600 w-full text-sm border">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div className="py-10">
          <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full border"/>
        </div>
        <button className="bg-[#FF497C] hover:bg-[#ab3154] px-5 py-2 text-sm text-white uppercase">Apply</button>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>$600</span>
          </div>
          <button className="bg-[#FF497C] hover:bg-[#ab3154] font-semibold  py-3 text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>

    </div>
        </div>
    );
};

export default MyCartPage;