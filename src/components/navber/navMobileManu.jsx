"use client"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const navigationLinks = [
  { href: "/", label: "Home", active: true },
  { href: "#", label: "Features" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "About" },
]

export default function NavbarMobileMenu() {
  return (
    <div className="flex items-center md:hidden">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="group size-8" variant="ghost" size="icon">
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 6H20M4 12H20M4 18H20" />
            </svg>
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-36 p-1 md:hidden">
          <NavigationMenu className="max-w-none *:w-full">
            <NavigationMenuList className="flex-col items-start gap-0">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index} className="w-full">
                  <NavigationMenuLink href={link.href} className="py-1.5" active={link.active}>
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </PopoverContent>
      </Popover>
    </div>
  )
}
