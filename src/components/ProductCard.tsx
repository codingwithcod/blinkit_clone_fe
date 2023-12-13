import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import AddButton from "./molecules/AddButton";

const ProductCard = () => {
  const [quantity, setQuantity] = useState(0);

  const handleIncQty = () => {
    setQuantity((prev) => ++prev);
  };
  const handleDecQty = () => {
    if (quantity === 0) {
      setQuantity(0);
    } else {
      setQuantity((prev) => --prev);
    }
  };

  return (
    <>
      <div className="min-w-[9rem] h-[14.2rem] border border-gray-300 rounded-md p-3 text-zinc-700 cursor-pointer">
        <div className="h-[50%] flex justify-center items-center">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/329500a.jpg?ts=1687949315"
            alt="product cart"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="w-12 px-[2px] py-[1px]  flex  items-center bg-gray-100 rounded-sm">
          <img src="../../public/timer.avif" alt="timer" className="h-3" />
          <span className="text-[8px] font-bold ">9 MINS</span>
        </div>
        <div className="mt-2 h-[3.2rem] flex flex-col justify-between">
          <h3 className="text-[11px] font-semibold">
            Amul Fresh Malai Paneer and this is...
          </h3>
          <h6 className="text-xxs text-gray-400">200 g</h6>
        </div>
        <div className="mt-2 flex justify-between items-center ">
          <div className="flex flex-col justify-center items-center">
            <h6 className="text-xxs font-semibold">₹88</h6>
            <h6 className="text-[11px] text-zinc-400 font-[300] leading-none line-through">
              ₹98
            </h6>
          </div>

          <AddButton />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
