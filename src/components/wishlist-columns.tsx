import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import type { WishlistItem } from "@/data/type";

export const wishlistColumns: ColumnDef<WishlistItem>[] = [
  {
    accessorKey: "productImage",
    header: "Image",
    cell: ({ row }) => (
      <img
        src={row.getValue("productImage")}
        alt={row.getValue("product")}
        className="h-16 w-16 object-contain rounded"
      />
    ),
  },
  {
    accessorKey: "product",
    header: "Product",
    cell: ({ row }) => (
      <span className="font-medium">{row.getValue("product")}</span>
    ),
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => `$${(row.getValue("price") as number).toFixed(2)}`,
  },
  {
    accessorKey: "availability",
    header: "Availability",
    cell: ({ row }) => {
      const status = row.getValue("availability") as string;
      return (
        <span
          className={`font-semibold ${
            status === "In Stock" ? "text-green-600" : "text-red-600"
          }`}
        >
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "addedOn",
    header: "Added On",
    cell: ({ row }) => {
      const date = new Date(row.getValue("addedOn"));
      return date.toLocaleDateString();
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Button size="sm" variant="default">
          Add to Cart
        </Button>
        <Button size="sm" variant="destructive">
          Remove
        </Button>
      </div>
    ),
  },
];
