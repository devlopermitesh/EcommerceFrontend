
import type { ColumnDef, TableMeta } from "@tanstack/react-table"
import { Button } from "./ui/button"

export type Cart = {
  product: string
  productImage:string
  price: number
  Quantity:number
  SubTotal:number
  status:string
}

// Extend TableMeta to include updateData
declare module "@tanstack/react-table" {
  interface TableMeta<TData> {
    updateData?: (rowIndex: number, columnId: string, value: unknown) => void
  }
}

export const cartcolumns: ColumnDef<Cart>[] = [
{
    header:"product details",
    columns: [
        {   
            header:"product",
            accessorKey: "productImage",

            cell:({row})=><img src={row.getValue("productImage") ?? ""} alt={`${row.getValue("product")}`} height={20} width={20} className="rounded h-20 w-20"/>
        },
        {
            accessorKey: "product",
            header:"title",

        }    
    ]

},
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => `$${(row.getValue("price") as number)?.toFixed(2)}`
  },
  {
    accessorKey: "Quantity",
    header: "Quantity",
    cell: ({ row, table }) => {
      const quantity = row.getValue("Quantity") as number

      const updateQuantity = (newQty: number) => {
        if (table.options.meta?.updateData) {
          table.options.meta.updateData(row.index, "Quantity", newQty)
        }
      }

      return (
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => updateQuantity(quantity - 1)}>-</Button>
          <span>{quantity}</span>
          <Button variant="outline" size="sm" onClick={() => updateQuantity(quantity + 1)}>+</Button>
        </div>
      )
    }
  },
  {
    accessorKey: "SubTotal",
    header: "SubTotal",
    cell: ({ row }) => `$${(row.getValue("SubTotal") as number)?.toFixed(2)}`
  },
]