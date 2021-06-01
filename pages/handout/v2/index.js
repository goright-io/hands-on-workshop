import React from "react";

import Hero from "@components/hero";
import Card from "@components/card";
import Ribbon from "@components/ribbon";
import Link from "next/link";
import ToastIcon from "./icons/toast.svg";
import ComponentsIcon from "./icons/web-design.svg";
import BoxIcon from "./icons/package.svg";
import CodingIcon from "./icons/coding.svg";
import LegoIcon from "./icons/blocks.svg";
import FeedbackIcon from "./icons/chat-box.svg";
import DeploymentIcon from "./icons/deployment.svg";
import TestingIcon from "./icons/testing.svg";
import SyncIcon from "./icons/sync.svg";
import SetupIcon from "./icons/setup.svg";
import FlagIcon from "./icons/flag.svg";
import CheckList from "./icons/check-list.svg";
import Sketch from "./icons/sketch2.svg";
import SettingsIcon from "./icons/settings.svg";
import Flow from "./icons/flow.svg";
import Zeroheight from "./icons/zeroheight.svg"

const pathPrefix = "/handout";
const blocks = [
  {
    title: "Workshop flow",
    image: Flow,
    slug: "workshop-flow",
    roles: [],
  },
  {
    title: "Making a toast",
    image: ToastIcon,
    slug: "toast",
    roles: ["designer", "developer"],
  },
  {
    title: "Figma setup",
    image: SettingsIcon,
    slug: "figma-setup",
    roles: ["designer"],
  },
  {
    title: "Repository setup",
    image: SetupIcon,
    slug: "repo-setup",
    roles: ["developer"],
  },
  {
    title: "UI inventory",
    image: BoxIcon,
    slug: "ui-inventory",
    roles: ["developer", "designer"],
  },
  {
    title: "Design tokens",
    image: Sketch,
    slug: "design-tokens",
    roles: ["designer"],
  },
  {
    title: "Coding the library",
    image: CodingIcon,
    slug: "coding-library",
    roles: ["developer"],
  },
  {
    title: "Releasing the library",
    image: FlagIcon,
    slug: "releasing-library",
    roles: ["developer"],
  },
  {
    title: "Product update",
    image: ComponentsIcon,
    slug: "product-update",
    roles: ["developer"],
  },
  {
    title: "Design Changes",
    image: LegoIcon,
    slug: "re-design",
    roles: ["designer"],
  },
  {
    title: "Cast in code",
    image: CheckList,
    slug: "cast-in-code",
    roles: ["developer"],
  },
  {
    title: "Product release",
    image: DeploymentIcon,
    slug: "product-release",
    roles: ["developer"],
  },
  {
    title: "Documentations",
    image: Zeroheight,
    slug: "documentations",
    roles: ["designer"],
    day: 2,
  },
  // {
  //   title: "Visual regression tests",
  //   image: TestingIcon,
  //   slug: "visual-tests",
  //   roles: ["developer"],
  // },
  {
    title: "Automatic syncronizations",
    image: SyncIcon,
    slug: "autosync",
    roles: ["developer"],
  },
  {
    title: "Feedback Form",
    image: FeedbackIcon,
    slug: "feedback",
    url: "https://docs.google.com/forms/d/124ha3LG7-07rizB9yjoqNGkB31Yzw6jtFvImsz7-Utg",
    roles: ["designer", "developer"],
  },
]

export default function HandoutPage() {
  return (
    <>
      <Hero>
        <h2 className="text-2xl text-bold">
          Welcome to Hands-on with Design Systems workshop!
        </h2>
      </Hero>
      {/* CARDS SECTION */}
      <div className="flex-1 w-full h-full bg-gray-200">
        <div className="container flex flex-wrap max-w-5xl m-8 mx-auto">
          {blocks.map((block) => {
            const link = block.url ? block.url : `${pathPrefix}/v2/${block.slug}`;
            return (
              <Card key={block.slug} className="sm:w-1/2 md:w-1/3 group">
                <div className="w-full h-full px-16 pt-4 pb-8 md:px-8">
                  {<block.image className="w-full h-full p-2" />}
                </div>
                <Link href={link}>
                  <a className="absolute top-0 left-0 w-full h-full cursor-pointer ">
                    <div className="flex items-center justify-center w-full h-full text-lg text-center text-white uppercase transition duration-300 bg-gray-700 opacity-90 group-hover:bg-transparent text-bold group-hover:transform group-hover:-translate-y-1/1 group-hover:text-transparent">
                      <div>{block.title}</div>
                    </div>
                  </a>
                </Link>
                {block.roles.map((r) => (
                  <Ribbon key={r} role={r} />
                ))}
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
