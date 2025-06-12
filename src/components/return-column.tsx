import type { ColumnDef, TableMeta } from "@tanstack/react-table"
import { Button } from "./ui/button"

export type ReturnEntry = {
  returnId: string
  orderId: string
  customerName: string
  products: string
  quantity: number
  reason: string
  returnType: "Refund" | "Replacement" | "Store Credit"
  status: "Pending" | "Approved" | "Declined" | "Refunded" | "Completed"
  requestDate: string
  resolvedDate?: string
  refundAmount?: number
}

// Extend TableMeta to include updateData
declare module "@tanstack/react-table" {
  interface TableMeta<TData> {
    updateData?: (rowIndex: number, columnId: string, value: unknown) => void
  }
}
const isAdmin=false
export const returnColumns: ColumnDef<ReturnEntry>[] = [
  {
    accessorKey: "returnId",
    header: "Return ID",
  },
  {
    accessorKey: "orderId",
    header: "Order ID",
  },
  {
    accessorKey: "customerName",
    header: "Customer",
  },
  {
    accessorKey: "products",
    header: "Product(s)",
  },
  {
    accessorKey: "quantity",
    header: "Qty",
  },
  {
    accessorKey: "reason",
    header: "Reason",
  },
  {
    accessorKey: "returnType",
    header: "Return Type",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as ReturnEntry["status"]
      const statusColorMap: Record<ReturnEntry["status"], string> = {
        Pending: "bg-yellow-100 text-yellow-800",
        Approved: "bg-green-100 text-green-800",
        Declined: "bg-red-100 text-red-800",
        Refunded: "bg-blue-100 text-blue-800",
        Completed: "bg-gray-100 text-gray-800",
      }
      return (
        <span className={`text-xs px-2 py-1 rounded ${statusColorMap[status]}`}>
          {status}
        </span>
      )
    },
  },
  {
    accessorKey: "requestDate",
    header: "Requested On",
  },
  {
    accessorKey: "resolvedDate",
    header: "Resolved On",
    cell: ({ row }) => row.getValue("resolvedDate") || "—"
  },
  {
    accessorKey: "refundAmount",
    header: "Refund Amount",
    cell: ({ row }) => {
      const value = row.getValue("refundAmount")
      return value ? `$${value}` : "—"
    }
  },
   {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-2">
        {isAdmin ?(
            <>
        <Button variant="outline" size="sm">View</Button>
        <Button variant="destructive" size="sm">Reject</Button>
        </>
        ):(
        <Button variant="outline" size="sm">View</Button>
        )}
      </div>
    )
  }
]
