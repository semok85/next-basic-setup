import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { LogIn } from "lucide-react"
import { getAuthSession } from "@/lib/nextAuth"
import UserAvatar from "@/components/user-avatar"

export async function SiteHeader() {
  const session = await getAuthSession()
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            {session?.user ? (
					<UserAvatar user={session.user} />
				) : (
					<Link
              href="/sign-in"
              className={buttonVariants({
                variant: "outline",
              })}
            >
                <LogIn className="mr-2 h-4 w-4"/>
                Sign In
            </Link>
				)}
            
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
