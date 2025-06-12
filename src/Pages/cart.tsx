import { cartcolumns } from "@/components/Cart-column";
import { DataTable } from "@/components/Data-table";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { products } from "@/data/dummy";
import type { JSX } from "react";
import { Link, useNavigate } from "react-router-dom";

const CartPage=()=>{
  const navigate=useNavigate()
  const ShopMoreButton = () => (
    <div className="flex flex-col items-center justify-center ">
      <h4 className="text-md italic">No Match found</h4>
      <Button className="bg-black text-white hover:bg-zinc-900 hover:text-slate-50 rounded">Continue Shoping</Button>
    </div>
  );

return (
    <div className="flex flex-col w-full h-full border px-30 py-5 gap-4">
{/* //breadcrumb  */}
    <Breadcrumb className="">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link className="text-xl font-semibold" to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-xl font-semibold">Cart</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
<DataTable
searchkey="product"
  data={products.map((item) => ({
    product: item.title, 
    productImage:item.images[0],
    Quantity: 1,
    price: item.price,
    SubTotal: item.price,
    status: "Available", 
  }))}
  columns={cartcolumns}
  NoFoundChild={<ShopMoreButton/>}
/>
<div className="flex flex-col md:flex-row justify-between space-y-2"> 
<Button onClick={()=>navigate("/")} className="border-2 rounded border-gray-400 text-black bg-white capitalize px-4 py-2 cursor-pointer hover:bg-slate-50">
Return To Shop
</Button>
  <div className="flex flex-row justify-center min-w-xs  md:min-w-md gap-2">
<Input placeholder="Coupan Code" size={10} className="flex-2"/>
<Button onClick={()=>navigate("/")} className="border-2 rounded border-gray-400 text-white bg-[#DB4444] hover:bg-[#DB4444] capitalize px-4 py-2 cursor-pointer  flex-1">
Apply Code
</Button>
  </div>
</div>
<div className="flex flex-row justify-between"> 

<div className="flex flex-1 flex-col rounded-lg border p-6 bg-muted/30 space-y-4">
  <h2 className="text-lg font-semibold text-foreground">Cart Total</h2>
  <ul className="space-y-2 text-sm text-muted-foreground">
    <li className="flex justify-between">
      <span>Subtotal</span>
      <span>$99.00</span>
    </li>
    <li className="flex justify-between">
      <span>Shipping</span>
      <span>Free</span>
    </li>
    <li className="flex justify-between font-medium text-foreground border-t pt-2 mt-2">
      <span>Total</span>
      <span>$99.00</span>
    </li>
  </ul>
</div>

</div>
    </div>
)
}

export default CartPage;
