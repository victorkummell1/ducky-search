"use client";

import * as React from "react";
import { Label } from "./ui/label";

export default function Footer() {
  const [theme, setTheme] = React.useState("light");

  return (
    <header className="w-full h-20 flex items-center justify-center">
      <section className="w-full max-w-4xl flex items-center justify-center">
        <Label className="text-zinc-600">
          Copyright &#169; Gamerstar, 2023
        </Label>
      </section>
    </header>
  );
}
