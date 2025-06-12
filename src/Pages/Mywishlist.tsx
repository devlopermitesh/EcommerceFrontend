import { cancellationColumns } from "@/components/cancellation-columns";
import { DataTable } from "@/components/Data-table";
import { wishlistColumns } from "@/components/wishlist-columns";
import { dummyCancellationData, wishlistData } from "@/data/dummy";
import { Link } from "react-router-dom";
function NoFoundChild(){
    return (
        <>
        <div className="text-md font-thin">No Wishlist productFound</div>
        <Link to={'/'} className="text-md hover:underline cursor-pointer">Continue Shoping</Link>
        </>
    )
}
const Mywishlist=()=>{
return (
    <div className="flex flex-col w-full">
<DataTable searchkey="product" NoFoundChild={<NoFoundChild/>} columns={wishlistColumns} data={wishlistData}/>
    </div>
)
}
export default Mywishlist;