import Link from "next/link";
import Image from "next/image";
import DesktopLogo from "../../public/airbnb-desktop.png";
import MobileLogo from "../../public/image.png";

export function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href="/">
          <Image
            src={DesktopLogo}
            alt="desktop logo"
            className="w-32 hidden lg:block "
          />

          <Image
            src={MobileLogo}
            alt="mobile logo"
            className="block lg:hidden w-12 "
          />
        </Link>
      </div>
    </nav>
  );
}
