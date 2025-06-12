import { DataTable } from "@/components/Data-table";
import { returnColumns } from "@/components/return-column";
import { returnData } from "@/data/dummy";
function NoFoundChild(){
    return (
        <div className="text-md font-thin">No Return Product found</div>
    )
}
const MyReturn=()=>{
return (
    <div className="flex flex-col w-full">
<DataTable searchkey="products" NoFoundChild={<NoFoundChild/>} columns={returnColumns} data={returnData}/>
    </div>
)
}
export default MyReturn;