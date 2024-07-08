"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const page = searchParams?.get("page") || 1;
  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;
  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    if (type === "prev" && hasPrev) {
      params.set("page", (parseInt(page) - 1).toString());
    } else if (type === "next" && hasNext) {
      params.set("page", (parseInt(page) + 1).toString());
    }
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="p-3 flex justify-between mt-9">
      <button
        className={`p-3 ${!hasPrev ? 'cursor-not-allowed' : 'cursor-pointer'} bg-white text-black rounded-lg`}
        onClick={() => hasPrev && handleChangePage("prev")}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        className={`p-3 ${!hasNext ? 'cursor-not-allowed' : 'cursor-pointer'} bg-white text-black rounded-lg`}
        onClick={() => hasNext && handleChangePage("next")}
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
