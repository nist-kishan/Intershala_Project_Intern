import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import PaginationControl from "../components/common/PaginationControls";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor((_, index) => index + 1, {
    id: "rank",
    header: "Rank",
    cell: info => <span className="font-medium text-white">{info.getValue()}</span>,
  }),
  columnHelper.accessor("name", {
    header: "Name",
    cell: info => <span className="text-purple-200">{info.getValue()}</span>,
  }),
  columnHelper.accessor("totalDonations", {
    header: "Donations",
    cell: info => (
      <span className="text-green-400 font-semibold">₹{info.getValue()}</span>
    ),
  }),
];

export default function LeaderboardTable({ data, pageIndex, setPageIndex, pageSize = 5 }) {
  const table = useReactTable({
    data,
    columns,
    state: { pagination: { pageIndex, pageSize } },
    pageCount: Math.ceil(data.length / pageSize),
    onPaginationChange: newState => {
      setPageIndex(newState.pagination.pageIndex);
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const rows = table.getRowModel().rows;
  const totalPages = table.getPageCount();

  return (
    <div className="bg-transparent border border-white/10 rounded-lg p-4 w-full overflow-x-auto">
      <table className="min-w-full text-left rounded-md overflow-hidden">
        <thead className="bg-white/5 text-white">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className="px-4 py-3 text-sm font-semibold whitespace-nowrap"
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={row.id}
              className={`${
                idx % 2 === 0 ? "bg-white/5" : "bg-white/10"
              } hover:bg-white/20 transition border-b border-white/10`}
            >
              {row.getVisibleCells().map(cell => (
                <td
                  key={cell.id}
                  className="px-4 py-2 text-sm text-white whitespace-nowrap"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <PaginationControl
        pageIndex={pageIndex}
        pageCount={totalPages}
        onPageChange={table.setPageIndex}
        canPrev={table.getCanPreviousPage()}
        canNext={table.getCanNextPage()}
      />
    </div>
  );
}
