"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { categoryFilters } from "@/static/constant";

const Categories = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const handleTags = (item: string) => {
    router.push(`${pathName}?category=${item}`);
  };

  return (
   <div className="flexBetween w-full gap-5 flex-wrap">
    <ul className="flex gap-1 flex-wrap">
     {categoryFilters.map((filter) => (
      <li key={filter}>
       <button
        type="button"
        onClick={() => handleTags(filter)}
        className={`${
         category === filter
          ? "bg-light-white-300 font-medium"
          : "font-normal"
        } px-3 py-3 rounded-lg capitalize whitespace-nowrap hover:bg-light-white-300 hover:font-medium transition-all duration-500 text-sm`}
       >
        {filter}
       </button>
      </li>
     ))}
    </ul>
   </div>
  );
};

export default Categories;