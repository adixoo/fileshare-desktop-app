import { Copy01Icon, Moon02Icon, Sun03Icon } from "./Icon";
import QrCode from "./QR";
import { Button } from "./ui/button";
import { useTheme } from "@/components/theme-provider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
   const { setTheme, theme } = useTheme();

   return (
      <>
         <div>
            <header className="max-w-6xl mx-auto flex justify-between items-center p-4 fixed top-0 left-0 right-0 h-max">
               <h1>FileShare</h1>
               <Button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  variant={"outline"}
                  size={"icon"}
               >
                  {theme === "light" ? (
                     <Moon02Icon className="size-5" />
                  ) : (
                     <Sun03Icon className="size-5" />
                  )}
               </Button>
            </header>

            <section className="max-w-6xl mx-auto px-4 pt-28">
               <div className="flex items-center justify-between text-lg">
                  <ul className="space-y-6">
                     <li>
                        <span className="bg-muted rounded-full px-3 py-1 font-bold mr-3">
                           Step - 1
                        </span>{" "}
                        Open Hotspot and connect to your device.
                     </li>
                     <li>
                        <span className="bg-muted rounded-full px-3 py-1 font-bold mr-3">
                           Step - 2
                        </span>{" "}
                        Scan the qr code or type the link in the browser and hit
                        enter.
                     </li>
                  </ul>
                  <div>
                     <Tabs
                        defaultValue="account"
                        className="w-full mx-auto text-center"
                     >
                        <TabsList className="">
                           <TabsTrigger value="account">Link 1</TabsTrigger>
                           <TabsTrigger value="password">Link 2</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                           <QrTab link={"http://aadi/"} />
                        </TabsContent>
                        <TabsContent value="password">
                           <QrTab link={"http://192.168.24.76/"} />
                        </TabsContent>
                     </Tabs>
                  </div>
               </div>

               <div>
                  <h2 className="text-center font-bold mt-10 text-3xl">
                     Trouble with Connecting?
                  </h2>
               </div>
            </section>
         </div>
      </>
   );
}

function QrTab({ link }: { link: string }) {
   return (
      <>
         <div className="w-60 p-4 border rounded-xl mx-auto">
            <QrCode value={link} />
         </div>

         <TooltipProvider>
            <Tooltip>
               <TooltipTrigger>
                  <Button variant={"outline"} size={"lg"} className="mt-4">
                     {link} <Copy01Icon className="size-5" />
                  </Button>
               </TooltipTrigger>
               <TooltipContent>Click to Copy</TooltipContent>
            </Tooltip>
         </TooltipProvider>
      </>
   );
}
