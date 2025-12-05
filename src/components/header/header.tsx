import { Icon } from "@iconify/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { gitHubOwner, githubRepo } from "@/const/github";

export function Header() {
  return (
    <header className="max-w-full mx-4 md:mx-10 top-0 z-50 flex border-b dark:bg-gray-800 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        {/* Middle: ナビゲーション（PC表示時） */}
        <nav className="hidden md:flex items-center gap-6 text-xl">
          <h1 className="text-3xl">
            <Link href="/" className="hover:text-primary">
              proof-dictionary
            </Link>
          </h1>
        </nav>

        <div className="hidden md:block">
          <nav className="flex items-center gap-6">
            <div>
              <Link href="/editor" className="hover:text-primary">
                Editor
              </Link>
            </div>
            <div>
              <Link
                href={`https://github.com/${gitHubOwner}/${githubRepo}`}
                target="_blank"
              >
                <Icon mode="style" icon="octicon:mark-github-16" inline />{" "}
                {gitHubOwner}/{githubRepo}
              </Link>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Icon icon="ic:baseline-menu" className="h-5 w-5" inline />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="dark:bg-gray-800">
              <SheetHeader>
                <SheetTitle>proof-dictionary</SheetTitle>
              </SheetHeader>
              <nav className="mx-4 flex flex-col gap-4">
                <Link href="/" className="hover:text-primary">
                  Dictionaries
                </Link>
                <Link href="/editor" className="hover:text-primary">
                  Editor
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
