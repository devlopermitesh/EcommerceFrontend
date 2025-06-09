import type React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Link} from "react-router-dom";

interface AdHeadingProps{
Heading:string,
link:string
}
const AdHeading:React.FC<AdHeadingProps>=({Heading,link})=>{
return (
    <div className="flex flex-col md:flex-row w-full h-auto bg-black  items-center">
<Link to={link} className="mx-auto text-white flex-1 text-xs hover:underline text-center">{Heading}</Link>
{/* theme of website  */}
<div className="md:flex flex-row hidden">
<Select>
    <SelectTrigger className="sm:w-[180px] border-none !shadow-none !text-slate-200 flex items-center justify-between">
        <SelectValue placeholder="Theme" />
    </SelectTrigger>
    <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
    </SelectContent>
</Select>
{/* //lanaguge of website  */}
<Select>
  <SelectTrigger className="sm:w-[180px] border-none !shadow-none !text-slate-200 flex items-center justify-between">
        <SelectValue placeholder="Language" />
    </SelectTrigger>
  <SelectContent>
    <SelectItem value="english">English</SelectItem>
  </SelectContent>
</Select>
</div>
    </div>
)
}

export default AdHeading;