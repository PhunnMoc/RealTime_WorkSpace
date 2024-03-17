"use client"

import { UserButton } from "@clerk/nextjs"

export const Navbar =()=>{
    return(
        <div className=" bg-purple-600 p-5 flex items-center gap-x-4">
            <div className="hidden lg:flex bg-yellow-500 flex-1">
                hehe
             </div>
            <div>
                <UserButton/>
            </div>
            
        </div>
    )
}