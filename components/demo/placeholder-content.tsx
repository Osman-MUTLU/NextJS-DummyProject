import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PlaceholderContent() {
  return (
    <Card className="glass-card h-full rounded-lg">
      <CardContent className="p-4">
        <ScrollArea className="">
          <div className="flex justify-center items-center">
            <div className="flex flex-col relative">
              <div className="absolute -bottom-8 right-0">
                <Link
                  href="https://www.freepik.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground"
                >
                  Designed by Freepik
                </Link>
              </div>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
