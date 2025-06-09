import type React from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { cn } from "@/lib/utils";

interface SheeboxProps{
    title:string,
    description?:string,
    side:"top" | "right" | "bottom" | "left",
    open?:boolean,
    onclose?:()=>void,
    children:React.ReactNode,
    trigger?:React.ReactNode,
    className?:string,
}
const Sheetbox:React.FC<SheeboxProps>=({title,description,side,children,onclose,className,open,trigger})=>{
return (
    <Sheet open={open} onOpenChange={onclose}>
      <SheetTrigger>
        {trigger}
      </SheetTrigger>
  <SheetContent side={side} className={cn("  md-!w-[650px]",className)}>
    <SheetHeader>
      <SheetTitle>{title}</SheetTitle>
      <SheetDescription>{description}
      </SheetDescription>
      {children}
    </SheetHeader>
  </SheetContent>
</Sheet>
)
}
export default Sheetbox;