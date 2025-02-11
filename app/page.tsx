import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";


const contactLinks = [
  {
    href: "https://www.linkedin.com/in/eduardodusik/",
    icon: "/images/icons/linkedin.svg",
    alt: "LinkedIn",
  },
  {
    href: "https://github.com/eduardodusik",
    icon: "/images/icons/github.svg",
    alt: "GitHub",
  },
];

export default function Home() {
  return (
    <div className="mx-5 sm:mx-0 flex flex-col space-y-5 max-w-xl">
      <Image
        src="/images/Eduardo.webp"
        alt="Eduardo Dusik"
        width={68}
        height={68}
        className="rounded-full"
      />
      <h1 className="pt-4 text-4xl font-bold">Build. Automate. Iterate.</h1>
      <p className="text-gray-800">
        Hey, I'm Eduardo Dusik. I'm building <a href="https://retorno.io" className="underline underline-offset-4 text-zinc-800 font-semibold">Retorno</a>, a micro-SaaS Copilot for
        n8n, helping developers automate workflows effortlessly. I love micro-SaaS,
        indie hacking, and making things that scale.
      </p>

      <div className="flex space-x-2">
        {contactLinks.map((link) => (
          <TooltipProvider key={link.href}>
            <Tooltip>
              <TooltipTrigger>
                <Link href={link.href} target="_blank">
                  <Image className="hover:scale-110 transition-transform duration-300" src={link.icon} alt={link.alt} width={24} height={24} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.alt}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
}
