"use client";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, Star } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// thêm onclick , hook,...

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");
  return (
    <div className=" hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
      <Link href={"/"}>
        <div className=" flex items-center ">
          <Image src="./logo.svg" alt="Logo" width={50} height={50}></Image>
          <span className=" font-semibold text-2xl ">Board</span>
        </div>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              border: "1px solid #E5E7EB",
              width: "100%",
              borderRadius: "4px",
            },
          },
        }}
      />
      <div className="space-y-1">
        <Button
          variant={favorites ? "ghost" : "secondary"}
          size="lg"
          className=" w-full justify-start px-2"
          asChild
        >
          <Link href="/">
            <LayoutDashboard className=" h-4 w-4 mr-2" />
            Team boards
          </Link>
        </Button>
        <Button
          variant={favorites ? "secondary" : "ghost"}
          asChild
          size="lg"
          className=" w-full justify-start px-2"
        >
          <Link
            href={{
              pathname: "/",
              query: { favorites: true },
            }}
          >
            <Star className=" h-4 w-4 mr-2" />
            Favourite boards
          </Link>
        </Button>
      </div>
    </div>
  );
};
