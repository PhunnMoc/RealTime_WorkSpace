import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div>Trinh thu phuong pro</div>
      <div>
        <UserButton/>
      </div>

    </div>
  );
}
