"use client";

import { BiSolidSend } from "react-icons/bi";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { toast } from "@/components/ui/use-toast";
import { TooltipTrigger } from "@radix-ui/react-tooltip";

export default function Home() {
  return (
    <main className="w-full min-h-[calc(100vh-160px)] flex flex-col items-center justify-center text-center px-4 lg:px-0">
      <div className="max-w-2xl flex flex-col gap-12">
        <section className="w-full flex items-center justify-center gap-2">
          <h1 className="text-4xl font-extrabold">Ducky Search</h1>
        </section>
        <section className="w-full flex items-center justify-center gap-2">
          <Tooltip>
            <TooltipTrigger className="w-full">
              <Input
                type="search"
                placeholder="Pesquise patos sem ser rastreado"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Campo de Busca</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  toast({
                    variant: "destructive",
                    title: "Ops! Algo deu errado...",
                    description:
                      "Não podemos realizar essa pesquisa no momento!",
                  });
                }}>
                <BiSolidSend />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Buscar</p>
            </TooltipContent>
          </Tooltip>
        </section>
        <section className="w-full flex flex-col items-center justify-center ">
          <h2 className="text-lg font-medium">
            Cansado de não encontrar patos online? Nós podemos ajudar.
          </h2>
          <p className="text-sm font-normal text-center">
            Obtenha as imagens de patos perfeitos no seu navegador gratuitamente
            com uma pesquisa.
          </p>
        </section>
      </div>
    </main>
  );
}
