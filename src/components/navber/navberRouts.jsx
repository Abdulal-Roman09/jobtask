import Logo from "../navber/logo"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

const navigationLinks = [
  { href: "/", label: "Home", active: true },
  { href: "#", label: "Features" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "About" },
]

export default function NavbarRoutes() {
  return (
    <div className="flex items-center gap-6">
      <a href="/" className="text-primary hover:text-primary/90">
        <Logo />
      </a>
      <NavigationMenu className="h-full *:h-full max-md:hidden">
        <NavigationMenuList className="h-full gap-2">
          {navigationLinks.map((link, index) => (
            <NavigationMenuItem key={index} className="h-full">
              <NavigationMenuLink
                href={link.href}
                active={link.active}
                className="text-muted-foreground hover:text-primary border-b-primary hover:border-b-primary h-full justify-center rounded-none border-y-2 border-transparent py-1.5 font-medium hover:bg-transparent"
              >
                {link.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
