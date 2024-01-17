import PropTypes from "prop-types";
import { originalPriceWithoutDiscount } from "../utils/priceCalculations.js";
import { addToCart } from "../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { NumberInput } from "keep-react";
import Rating from "./Rating";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const minValue = 1;
  const maxValue = 10;
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className="object-cover w-72 hover:scale-125 aspect-square transition"
          src={product.images[0]}
          alt="product image"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {Math.floor(product.discountPercentage)}% OFF
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <span className="flex justify-between">
          <a href="#">
            <h6 className="text-md text-wrap tracking-tight text-slate-900 text-clip">
              {product.title}
            </h6>
          </a>
          <div className="flex items-center">
            <Rating value={product.rating} />
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {product.rating.toFixed(1)}
            </span>
          </div>
        </span>
        <div className="mt-4 md:mt-8 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              ${product.price}
            </span>
            <span className="text-sm text-slate-900 line-through ml-2">
              $
              {Math.floor(
                originalPriceWithoutDiscount(
                  product.price,
                  product.discountPercentage
                )
              )}
            </span>
          </p>
          <NumberInput
            sizing="sm"
            value={Math.min(maxValue, Math.max(minValue, quantity))}
            setValue={setQuantity}
          />
        </div>
        <button
          className="w-full"
          onClick={() =>
            dispatch(addToCart({ product: product, quantity: quantity }))
          }
        >
          <a
            href="#"
            className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </a>
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
