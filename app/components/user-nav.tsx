/* eslint-disable react/no-unescaped-entities */
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function UserNav() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border px-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
          <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />
          <img
            src={
              user?.picture ??
              "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg"
            }
            alt="Image of the user"
            className="rounded-full h-8 w-8 lg:block "
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {user ? (
          <>
            <DropdownMenuItem>
              <LogoutLink className="w-full">Se déconnecter</LogoutLink>{" "}
            </DropdownMenuItem>
            {/* <DropdownMenuItem>
              {" "}
              <LoginLink className="w-full">Se connecter</LoginLink>{" "}
            </DropdownMenuItem> */}
          </>
        ) : (
          <>
            <DropdownMenuItem>
              {" "}
              <RegisterLink className="w-full">S'inscire</RegisterLink>{" "}
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <LoginLink className="w-full">Se connecter</LoginLink>{" "}
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
