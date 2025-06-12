import type { ColumnDef, ColumnFiltersState } from "@tanstack/react-table"
import {
  flexRender,
  getFilteredRowModel,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data:TData[],
  NoFoundChild:React.ReactElement
}

export function DataTable<TData, TValue>({
  columns,
   data,
   searchkey,
   NoFoundChild,
}: DataTableProps<TData, TValue> &{searchkey:string}) {
   const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )
  const [pagination, setPagination] = useState({
  pageIndex: 0,
  pageSize: 3, //  limit
})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
     getPaginationRowModel: getPaginationRowModel(),
  onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
       pagination 
    },
   meta: {
    updateData: (rowIndex, columnId, value) => {
    //   setData((old:TData[]) =>
    //     old.map((row, index) =>
    //       index === rowIndex ? { ...row, [columnId]: value } : row
    //     )
    //   )
    },
  },
  })

  return (
  
    <div>
       <div className="flex items-center py-4">
        <Input
          placeholder={`Filter  ${searchkey}...`}
          value={(table.getColumn(searchkey)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(searchkey)?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
         {NoFoundChild}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
     
    </div>
    
  )
}