import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../store/slices/productsApiSlice";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "keep-react";
import { setSearchTerm, setFilteredData } from "../store/slices/filterSlice";
import { logoutUser } from "../store/slices/authSlice";
import { clearCart } from "../store/slices/cartSlice";
import ProductSkeleton from "../components/Loader/ProductSkeleton";
import ProductCard from "../components/ProductCard";
import PriceRange from "../components/PriceRange";

const ProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    data: allProducts,
    isLoading: isLoadingAllProducts,
    error: allProductsError,
  } = useGetProductsQuery();

  const skeletons = Array.from({ length: 30 }, (_, index) => (
    <ProductSkeleton key={index} />
  ));

  const searchTerm = useSelector((state) => state.filter.searchTerm);
  const filteredData = useSelector((state) => state.filter.filteredData);
  const minPrice = useSelector((state) => state.filter.priceRange.minPrice);
  const maxPrice = useSelector((state) => state.filter.priceRange.maxPrice);

  const handleOnChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleApply = () => {
    const newFilteredData = allProducts.products.filter((product) => {
      const titleMatch = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const priceInRange =
        (!minPrice || parseFloat(product.price) >= parseFloat(minPrice)) &&
        (!maxPrice || parseFloat(product.price) <= parseFloat(maxPrice));

      return titleMatch && priceInRange;
    });

    dispatch(setFilteredData(newFilteredData));
  };

  useEffect(() => {
    if (allProducts) {
      dispatch(
        setFilteredData(
          allProducts.products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      );
    }
  }, [allProducts, searchTerm, dispatch]);

  useEffect(() => {
    const handle401Error = () => {
      if (allProductsError?.status === 401) {
        // If the error status is 401,
        dispatch(clearCart());
        dispatch(logoutUser());
        navigate("/");
      }
    };

    handle401Error();
  }, [allProductsError, navigate, dispatch]);

  return (
    <section className="w-full max-w-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header>
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Product Collection
        </h2>

        <span className="flex gap-x-10 flex-col md:flex-row">
          <p className="mt-2 max-w-md text-gray-500 sm:hidden md:block flex-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
          <span className="flex-1 mt-4 md:mt-0">
            <SearchBar
              bordered={false}
              placeholder="Search Anything"
              handleOnChange={handleOnChange}
            />
          </span>
        </span>
      </header>
      <section className="flex mt-10">
        <PriceRange onApply={handleApply} />
      </section>
      <ul className="mt-4 grid gap-x-[1%] md:gap-x-2 gap-y-4 md:gap-y-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {isLoadingAllProducts
          ? // If loading is in progress, render skeletons or a loading indicator
            skeletons
          : allProductsError
          ? // If there's an error in fetching products
            allProductsError?.status === 500 || allProductsError?.status === 403
            ? // If the error status is 500, 403,  redirect to the login page
              navigate("/login")
            : // Otherwise, render an empty list
              null
          : // If there's no error and loading is not in progress, render the product cards
            filteredData?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
      </ul>
    </section>
  );
};

export default ProductPage;
