import { cancellationColumns } from "@/components/cancellation-columns";
import { DataTable } from "@/components/Data-table";
import { dummyCancellationData } from "@/data/dummy";
function NoFoundChild(){
    return (
        <div className="text-md font-thin">No Cancellation Product found</div>
    )
}
const MyCancellation=()=>{
return (
    <div className="flex flex-col w-full">
<DataTable searchkey="product" NoFoundChild={<NoFoundChild/>} columns={cancellationColumns} data={dummyCancellationData}/>
    </div>
)
}
export default MyCancellation;