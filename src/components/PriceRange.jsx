import { useDispatch, useSelector } from "react-redux";
import { setPriceRange } from "../store/slices/filterSlice";
import PropTypes from "prop-types";

const PriceRange = ({ onApply }) => {
  const dispatch = useDispatch();
  const { minPrice, maxPrice } = useSelector(
    (state) => state.filter.priceRange
  );

  const handleReset = () => {
    dispatch(setPriceRange({ minPrice: "", maxPrice: "" }));
  };

  const handleApply = () => {
    dispatch(setPriceRange({ minPrice, maxPrice }));
    onApply(); // This will trigger the onApply callback passed from the parent component
  };

  return (
    <div className="relative">
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
          <span className="text-sm font-medium"> Price </span>

          <span className="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>
        <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
          <div className="w-96 rounded border border-gray-200 bg-white">
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-700">
                The highest price is $2000
              </span>

              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
                onClick={handleReset}
              >
                Reset
              </button>
            </header>

            <div className="border-t border-gray-200 p-4">
              <div className="flex justify-between gap-4">
                <label
                  htmlFor="FilterPriceFrom"
                  className="flex items-center gap-2"
                >
                  <span className="text-sm text-gray-600">$</span>

                  <input
                    type="number"
                    id="FilterPriceFrom"
                    placeholder="From"
                    value={minPrice}
                    onChange={(e) =>
                      dispatch(
                        setPriceRange({
                          minPrice: e.target.value,
                          maxPrice,
                        })
                      )
                    }
                    className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </label>

                <label
                  htmlFor="FilterPriceTo"
                  className="flex items-center gap-2"
                >
                  <span className="text-sm text-gray-600">$</span>

                  <input
                    type="number"
                    id="FilterPriceTo"
                    placeholder="To"
                    value={maxPrice}
                    onChange={(e) =>
                      dispatch(
                        setPriceRange({
                          minPrice,
                          maxPrice: e.target.value,
                        })
                      )
                    }
                    className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </label>
              </div>
              <button
                type="button"
                onClick={() => {
                  handleApply();
                }}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
};

PriceRange.propTypes = {
  onApply: PropTypes.func.isRequired,
};

export default PriceRange;
