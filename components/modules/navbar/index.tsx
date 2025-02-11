import { m } from "motion/react"
import Link from "next/link"

const menuItems = [
    {
        href: "/",
        name: "Home"
    },
    {
        href: "/blog",
        name: "Blog"
    },
    
]

const Navbar = () => { 

    return (
        <nav className="w-full py-6">
            <div className="max-w-4xl mx-auto">
                <ul className="flex gap-8 justify-center">
                    {menuItems.map((item) => (
                        <NavbarItem key={item.href} href={item.href}>{item.name}</NavbarItem>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

const NavbarItem = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return (
        <li className="text-md font-bold text-gray-700 hover:scale-105 hover:text-black transition-all duration-300">
            <Link href={href}>{children}</Link>
        </li>
    )
}

export default Navbar;