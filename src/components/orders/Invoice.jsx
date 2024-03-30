/* eslint-disable react/display-name */
import { forwardRef } from "react";
import Logo from "../UI/Logo";

const Invoice = forwardRef(({ order }, ref) => {
  return (
    <div ref={ref} className={`py-4 }`}>
      <div className="px-5 flex justify-between items-start">
        <Logo />
        <div className="">
          <div>
            <span className=" text-gray-600">Legal Registration No:</span>{" "}
            <span className=" text-gray-800 font-semibold"> 987654</span>
          </div>
          <div>
            <span className=" text-gray-600">Email:</span>{" "}
            <span className=" text-gray-800 font-semibold">
              support@eshop.com
            </span>
          </div>
          <div>
            <span className=" text-gray-600">Website:</span>{" "}
            <span className=" text-gray-800 font-semibold">www.eshop.com</span>
          </div>
          <div>
            <span className=" text-gray-600">Contact No:</span>{" "}
            <span className=" text-gray-800 font-semibold">+8801XXXXXXXXX</span>
          </div>
        </div>
      </div>
      <div className="px-5 text-gray-500">
        <h1 className=" font-semibold">ADDRESS</h1>
        <h1>Dhaka, Bangladesh</h1>
        <h1>Zip-code: 1204</h1>
      </div>
      <div className="px-5 py-4 my-5 border-y-[1px] flex justify-between items-center font-semibold text-gray-400">
        <div className="">
          <h1 className=" font-semibold mb-1">INVOICE NO</h1>
          <p className=" text-gray-700">{order.id}</p>
        </div>
        <div className="">
          <h1 className=" font-semibold mb-1">DATE</h1>
          <p className=" text-gray-700">{order.shippingDate}</p>
        </div>
        <div className="">
          <h1 className=" font-semibold mb-1">PAYMENT STATUS</h1>

          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden
              className={`absolute inset-0 ${
                order?.isPaid ? "bg-green-200" : "bg-red-200"
              } opacity-50 rounded-md`}></span>
            <span className="relative font-normal">
              {order?.isPaid ? "Paid" : "Not Paid"}
            </span>
          </span>
        </div>
        <div className="">
          <h1 className=" font-semibold mb-1">TOTAL AMOUNT</h1>
          <p className=" text-gray-700"> ${order?.totalMoney}</p>
        </div>
      </div>

      <div className="px-5 mt-5 flex justify-start items-start text-gray-500">
        <div className="w-full">
          <h1 className=" font-semibold text-gray-400">BILLING ADDRESS</h1>
          <h1 className=" font-semibold text-gray-700">E-Shop</h1>
          <h1>
            Address: <span>Dhaka, Bangladesh</span>
          </h1>
          <h1>
            Email: <span>support@eshop.com</span>
          </h1>
          <h1>
            Phone: <span>+88018XXXXXXX</span>
          </h1>
        </div>
        <div className="w-full">
          <h1 className=" font-semibold text-gray-400">SHIPPING ADDRESS</h1>
          <h1 className=" font-semibold text-gray-700">{order.user.name}</h1>
          <h1>
            Address: <span>{order.shippingAddress}</span>
          </h1>
          <h1>
            Email: <span>{order.user.address}</span>
          </h1>
          <h1>
            Phone: <span>{order.user.phone}</span>
          </h1>
        </div>
      </div>
      <div className="px-5">
        <table className="min-w-full leading-normal mt-20 border-b">
          <thead>
            <tr>
              <th className="px-5 py-3  border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700   tracking-wider">
                #
              </th>
              <th className="px-5 py-3  border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700  tracking-wider">
                Product Details
              </th>
              <th className="px-5 py-3 text-center border-gray-200 bg-gray-100 text-sm font-semibold text-gray-700  tracking-wider">
                Rate
              </th>
              <th className="px-5 py-3 text-center border-gray-200 bg-gray-100  text-sm font-semibold text-gray-700  tracking-wider">
                Quantity
              </th>
              <th className="px-5 py-3 text-right border-gray-200 bg-gray-100  text-sm font-semibold text-gray-700  tracking-wider">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {order.products.map((product, index) => (
              <tr key={index}>
                <td className="px-5 py-5  border-gray-200 bg-white text-sm">
                  {index + 1}
                </td>
                <td className="px-5 py-5  border-gray-200 bg-white text-sm">
                  {product.productname}
                </td>
                <td className="px-5 py-5 text-center border-gray-200 bg-white text-sm">
                  ${product.productprice}
                </td>
                <td className="px-5 py-5 text-center border-gray-200 bg-white text-sm">
                  {product.productquantity}
                </td>
                <td className="px-5 py-5 text-right border-gray-200 bg-white text-sm">
                  ${product.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className=" flex justify-end items-start text-gray-600 ">
          <div className=" min-w-64 flex flex-col gap-3 mt-3">
            <div className=" flex w-full justify-between">
              <h1>Sub Total </h1> <span>${order.subtotal}</span>
            </div>
            <div className=" flex w-full justify-between">
              <h1>Estimated Tax (12.5%) </h1> <span>${order.tex}</span>
            </div>
            <div className=" flex w-full justify-between">
              <h1>Discount (TONER50) </h1> <span>${order.discount}</span>
            </div>
            <div className=" flex w-full justify-between">
              <h1>Shipping Charge </h1> <span>${order.shippingCharge}</span>
            </div>
            <div className=" border-t text-gray-700 font-semibold ">
              <div className="flex w-full justify-between mt-3">
                <h1>Total Amount </h1> <span>${order.totalMoney}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Invoice;
