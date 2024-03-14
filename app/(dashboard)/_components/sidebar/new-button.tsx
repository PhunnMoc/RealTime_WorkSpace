"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { CreateOrganization } from "@clerk/nextjs"
import { Plus } from "lucide-react"

const New_button =()=>{
    return(
        <Dialog>
            <DialogTrigger asChild>
                <div className=" aspect-square">
                    <button className=" bg-white/35 h-full w-full flex justify-center items-center rounded-sm  opacity-70 hover:opacity-100 transition-opacity">
                        <Plus className=" text-white"/>
                    </button>
                </div>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[480px] ">
                <CreateOrganization/>
            </DialogContent>
        </Dialog>
    )
}

export default New_button