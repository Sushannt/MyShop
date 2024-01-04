const ProductSkeleton = () => {
  return (
    <li
      className="relative flex flex-col text-gray-700 bg-white border-2 border-slate-200 shadow-md bg-clip-border rounded-xl w-96 md:w-72"
      key="skeleton"
    >
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-64">
        <div className="animate-pulse">
          <div className="h-full w-full bg-gray-400"></div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-col items-center justify-center mb-2">
          <div className="h-6 w-48 bg-gray-400"></div>
          <div className="h-4 w-32 bg-gray-400"></div>
        </div>
        <div className="h-4 w-full bg-gray-400"></div>
      </div>
      <div className="p-6 pt-0 ">
        <div className="animate-pulse">
          <div className="h-12 w-32 bg-gray-400"></div>
          <div className="h-4 w-full bg-gray-400"></div>
        </div>
      </div>
    </li>
  );
};

export default ProductSkeleton;
