import type { ColumnDef } from "@tanstack/react-table"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import type { Cancellation } from "@/data/type"

export const cancellationColumns: ColumnDef<Cancellation>[] = [
  {
    accessorKey: "orderId",
    header: "Order ID",
  },
  {
    header: "Product",
    columns: [
      {
        accessorKey: "productImage",
        header: "",
        cell: ({ row }) => (
          <img
            src={row.getValue("productImage")}
            alt={row.getValue("product")}
            className="w-14 h-14 rounded object-cover"
          />
        ),
      },
      {
        accessorKey: "product",
        header: "Name",
      },
    ],
  },
  {
    accessorKey: "reason",
    header: "Reason",
  },
  {
    accessorKey: "requestedBy",
    header: "Requested By",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => new Date(row.getValue("date")).toLocaleDateString(),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge
          variant={
            status === "Approved"
              ? "default"
              : status === "Rejected"
              ? "destructive"
              : "outline"
          }
        >
          {status}
        </Badge>
      )
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const status = row.getValue("status")
      if (status !== "Pending") return null

      return (
        <div className="flex gap-2">
          <Button size="sm" variant="default">
            Approve
          </Button>
          <Button size="sm" variant="destructive">
            Reject
          </Button>
        </div>
      )
    },
  },
]
