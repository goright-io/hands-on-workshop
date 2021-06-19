import React from "react";
import { Text, Card, Badge, Emoji } from "@goright/design-system";

// import Hero from "@components/hero";
// import Card from "@components/card";
// import Ribbon from "@components/ribbon";
import Link from "next/link";
// import ToastIcon from "./icons/toast.svg";
// import ComponentsIcon from "./icons/web-design.svg";
// import BoxIcon from "./icons/package.svg";
// import CodingIcon from "./icons/coding.svg";
// import LegoIcon from "./icons/blocks.svg";
// import FeedbackIcon from "./icons/chat-box.svg";
// import DeploymentIcon from "./icons/deployment.svg";
// import TestingIcon from "./icons/testing.svg";
// import SyncIcon from "./icons/sync.svg";
// import SetupIcon from "./icons/setup.svg";
// import FlagIcon from "./icons/flag.svg";
// import CheckList from "./icons/check-list.svg";
// import Sketch from "./icons/sketch2.svg";
// import SettingsIcon from "./icons/settings.svg";
// import Flow from "./icons/flow.svg";

const pathPrefix = "/handout";
const blocks = [
  {
    title: "Workshop flow",
    // image: Flow,
    slug: "workshop-flow",
    roles: [],
  },
  {
    title: "Making a toast",
    // image: ToastIcon,
    slug: "toast",
    roles: ["designer", "developer"],
  },
  {
    title: "Figma setup",
    // image: SettingsIcon,
    slug: "figma-setup",
    roles: ["designer"],
  },
  {
    title: "Repository setup",
    // image: SetupIcon,
    slug: "repo-setup",
    roles: ["developer"],
  },
  {
    title: "UI inventory",
    // image: BoxIcon,
    slug: "ui-inventory",
    roles: ["developer", "designer"],
  },
  {
    title: "Design tokens",
    // image: Sketch,
    slug: "design-tokens",
    roles: ["designer"],
  },
  {
    title: "Coding the library",
    // image: CodingIcon,
    slug: "coding-library",
    roles: ["developer"],
  },
  {
    title: "Releasing the library",
    // image: FlagIcon,
    slug: "releasing-library",
    roles: ["developer"],
  },
  {
    title: "Product update",
    // image: ComponentsIcon,
    slug: "product-update",
    roles: ["developer"],
  },
  {
    title: "Design Changes",
    // image: LegoIcon,
    slug: "re-design",
    roles: ["designer"],
  },
  {
    title: "Cast in code",
    // image: CheckList,
    slug: "cast-in-code",
    roles: ["developer"],
  },
  {
    title: "Product release",
    // image: DeploymentIcon,
    slug: "product-release",
    roles: ["developer"],
  },
  // {
  //   title: "Visual regression tests",
  //   image: TestingIcon,
  //   slug: "visual-tests",
  //   roles: ["developer"],
  // },
  {
    title: "Automatic syncronizations",
    // image: SyncIcon,
    slug: "autosync",
    roles: ["developer"],
  },
  {
    title: "Feedback Form",
    // image: FeedbackIcon,
    slug: "feedback",
    url:
      "https://docs.google.com/forms/d/124ha3LG7-07rizB9yjoqNGkB31Yzw6jtFvImsz7-Utg",
    roles: ["designer", "developer"],
  },
];

const Blocks = (props) => {
  return (
    <>
      {blocks.map((block) => {
        const link = block.url ? block.url : `${pathPrefix}/${block.slug}`;
        const enabled = block.day === props.day || props.day === "all";

        const blockCard = (
          <Card
            key={block.slug}
            heading={block.title}
            link={{ link: undefined, text: undefined }}
            className={enabled ? "cursor-ponter p-5" : ""}
          >
            <div className="flex">
              <Badge
                role="developer"
                isHidden={!block.roles.includes("developer")}
              />
              <Badge
                role="designer"
                isHidden={!block.roles.includes("designer")}
              />
            </div>
          </Card>
        );

        return enabled ? (
          <Link href={link} key={block.title} className="cursor-pointer">
            <a>{blockCard}</a>
          </Link>
        ) : (
          <div
            className="filter grayscale sopacity-80 hover:none"
            key={block.title}
          >
            {blockCard}
          </div>
        );
      })}
    </>
  );
};

export default function HandoutPage() {
  return (
    <div className="container max-w-5xl mx-auto mt-16">
      <div className="text-center text-light-on-background-900">
        <Text variant="xlBolder" className="mb-6">
          <Emoji symbol="👋 " label="hand" />
          Welcome
        </Text>
        <Text variant="6xl" className="mb-32">
          Hands-on with design systems workshop handout.
        </Text>
        <Text variant="xlBolder" className="mb-6">
          What's next
          <Emoji symbol="👇" label="hand" />
        </Text>
      </div>
      {/* CARDS SECTION */}
      <div className="grid grid-cols-3 gap-10">
        <Blocks day="all" />
      </div>
    </div>
  );
}
