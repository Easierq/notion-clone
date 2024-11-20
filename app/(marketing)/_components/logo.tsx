import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2 cursor-pointer">
      <Image
        src="/fav.svg"
        height="34"
        width="34"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/fav-dark.svg"
        height="34"
        width="34"
        alt="Logo"
        className="hidden dark:block"
      />
      <p className={cn("font-black", font.className)}>INotefy</p>
    </div>
  );
};
