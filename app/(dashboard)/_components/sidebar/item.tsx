"use client"

import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";


interface ItemProps{
    id:string;
    name: string;
    imgageUrl: string;
}

export const Item = ({
    id,
    name,
    imgageUrl,
}:ItemProps)=>{
    const { organization}=useOrganization();
    const {setActive}=useOrganizationList();


    const isActive= organization?.id=== id;

    const onClick=()=>{
        if(!setActive)
            return;
    }
    return(
        <div className=" aspect-square relative ">
            <Image
            fill
            src={imgageUrl}
            alt={name}
            onClick={onClick}
            className={cn(
                "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
                isActive && " opacity-100"
            )}/>
        </div>
    )
}