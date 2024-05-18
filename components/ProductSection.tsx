import { useSearchParams } from "next/navigation";
import React from "react";
import { convertStringToQueriesObject } from "./ui/FilterSection";
import { products } from "./products";

function isAvailable(arr1?: string[], arr2?: string[]) {
  if (!arr1 || !arr2) {
    return true;
  }
  return arr1.some((item) => arr2?.includes(item));
}

const ProductSection = () => {
  const searchParams = useSearchParams();
  const paramsObj = convertStringToQueriesObject(searchParams);

  let filteredProducts = products.filter((product) => {
    const hasCategories = isAvailable(
      product.categories,
      paramsObj?.categories
    );
    const hasColors = isAvailable(product.colors, paramsObj?.colors);
    const hasSize = isAvailable(product.sizes, paramsObj?.sizes);
    return hasSize && hasColors && hasCategories;
  });

  filteredProducts = filteredProducts.sort((p1, p2) => {
    switch (paramsObj?.sort?.[0]) {
      case "newest":
        return Date.parse(p2.createdAt) - Date.parse(p1.createdAt);
      case "price high-low":
        return p2.price - p1.price;
      case "price low-high":
        return p1.price - p2.price;
      default:
        return 0;
    }
  });

  if (Object.keys(paramsObj).length === 0) {
    filteredProducts = products;
  }

  if (filteredProducts.length === 0) {
    return <p className="text-center text-slate-700">No products available</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {filteredProducts.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p className="text-sm text-gray-700">{product.desc}</p>
          <p className="text-xl font-semibold mt-2">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductSection;
