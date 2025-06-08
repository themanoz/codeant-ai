import Image from "next/image";
import React from "react";
import { NavOptions } from "../NavOptions";
import { Button } from "./button";

function NavBar() {
  return (
    <div className="flex items-center justify-evenly py-6">
      <Image
        src={
          "https://framerusercontent.com/images/sGuQ264iJUw3eJ3i97yxATcMH0o.png?scale-down-to=4096"
        }
        alt="logo"
        width={150}
        height={150}
      />
      <NavOptions />
      <div className="space-x-2">
        <Button variant={"secondary"}>Login</Button>
        {/* <Button>Book Call</Button> */}
      </div>
    </div>
  );
}

export default NavBar;
