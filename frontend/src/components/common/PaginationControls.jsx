import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationControl({
  pageIndex,
  pageCount,
  onPageChange,
  canPrev,
  canNext,
}) {
  return (
    <div className="flex justify-between items-center px-4 py-3 rounded-xl bg-transparent text-white">
      <button
        className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        onClick={() => onPageChange(pageIndex - 1)}
        disabled={!canPrev}
      >
        <ChevronLeft size={18} /> Prev
      </button>

      <span className="text-sm font-medium tracking-wide text-white">
        Page {pageIndex + 1} of {pageCount}
      </span>

      <button
        className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        onClick={() => onPageChange(pageIndex + 1)}
        disabled={!canNext}
      >
        Next <ChevronRight size={18} />
      </button>
    </div>
  );
}
