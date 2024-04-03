"use client";

import { Hint } from "@/components/hint";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { Plus } from "lucide-react";

const New_button = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" aspect-square mt-4">
          <Hint
            label="Creat organization"
            side="right"
            align="start"
            sideOffset={18}
          >
            <button className=" bg-white/35 h-full w-full flex justify-center items-center rounded-sm  opacity-70 hover:opacity-100 transition-opacity">
              <Plus className=" text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[480px] ">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

export default New_button;
