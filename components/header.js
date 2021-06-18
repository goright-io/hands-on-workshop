import { useState } from "react";
// import Nav from "@components/nav";
import { useScrollPosition } from "../hooks/useScrollPosition";
import Link from "next/link";
import { Nav, Button, Logo } from "@goright/design-system";

const navItems = [
  {
    name: "Workshops",
    href: "/workshops",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "About us",
    href: "/about",
  },
];
export default function Header() {
  // const [visible, setVisible] = useState(false);
  // useScrollPosition(
  //   ({ currPos }) => {
  //     const shouldShow = Math.abs(currPos.y) > HERO_HEIGHT;
  //     if (shouldShow !== visible) setVisible(shouldShow);
  //   },
  //   [visible]
  // );

  // In Next.js we cannot just pass a link, because it's not picking classes. See: https://github.com/vercel/next.js/issues/272
  const linkComponent = ({ className, children, ...props }) => (
    <Link {...props}>
      <a className={className}>{children}</a>
    </Link>
  );
  return (
    <header className="flex items-center w-full px-10 pt-8 mx-auto">
      <Logo className="mr-auto" />
      <Nav
        items={navItems}
        linkComponent={linkComponent}
        className="w-5/12 mx-auto"
      />
      <Button size="small" label="Let's&nbsp;talk" />
    </header>
  );
}
