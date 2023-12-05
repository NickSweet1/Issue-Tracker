"use client";
import React from "react";
import Link from "next/link";
import { PiBugBeetleBold } from "react-icons/pi";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";

const NavBar = () => {


  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <PiBugBeetleBold />
            </Link>
            <NavLinks />
          </Flex> 
          <AuthStatus />      
        </Flex>
      </Container>
    </nav>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();
  

  const link = [
    //setting like array to our link paths and labels to avoid dupilcate code
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];

  return (
    <ul className="flex space-x-6">
              {/* rendering the navbar compents by mapping through the link array */}
              {link.map((link) => (
                <li key={link.href}>
                  <Link
                    // using classnames library to create a function that returns a string of the classes to render
                    className={classnames({
                      "nav-link": true,
                      "!text-zinc-900": link.href === currentPath,
                    })}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
  )
}
const AuthStatus = () => {
  const { status, data: session } = useSession();

  if (status === "loading") return null;

  if (status === "unauthenticated") 
     return <Link className="nav-link" href="/api/auth/signin">Sign in</Link>

  return (
    <Box>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Avatar
                    src={session!.user!.image!}
                    fallback="?"
                    size="2"
                    radius="full"
                    className="cursor-pointer"
                    referrerPolicy="no-referrer"
                  />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Label>
                    <Text>{session!.user!.email}</Text>
                  </DropdownMenu.Label>
                  <DropdownMenu.Item>
                    <Link href="/api/auth/signout">Log out</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
          </Box>
  )
}

export default NavBar;
