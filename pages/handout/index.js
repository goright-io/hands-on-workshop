import React from "react";

import { Text, Card, Badge } from "@goright/design-system";

import Link from "next/link";

const pathPrefix = "/handout";

export const blocks = [
  {
    title: "Workshop flow",
    slug: "workshop-flow",
    roles: [],
    day: 1,
  },
  {
    title: "Making a toast",
    slug: "toast",
    roles: ["designer", "developer"],
    day: 1,
  },
  {
    title: "Figma setup",
    slug: "figma-setup",
    roles: ["designer"],
    day: 1,
  },
  {
    title: "Repository setup",
    slug: "repo-setup",
    roles: ["developer"],
    day: 1,
  },
  {
    title: "UI inventory",
    slug: "ui-inventory",
    roles: ["developer", "designer"],
    day: 1,
  },
  {
    title: "Design tokens",
    slug: "design-tokens",
    roles: ["designer"],
    day: 1,
  },
  {
    title: "Coding session",
    slug: "coding-session",
    roles: ["developer"],
    day: 1,
  },
  {
    title: "Releasing the library",
    slug: "releasing-library",
    roles: ["developer"],
    day: 2,
  },
  {
    title: "Product update",
    slug: "product-update",
    roles: ["developer"],
    day: 2,
  },
  {
    title: "Design Changes",
    slug: "re-design",
    roles: ["designer"],
    day: 2,
  },
  {
    title: "Cast in code",
    slug: "cast-in-code",
    roles: ["developer"],
    day: 2,
  },
  {
    title: "Product release",
    slug: "product-release",
    roles: ["developer"],
    day: 2,
  },
  {
    title: "Automatic syncronizations",
    slug: "autosync",
    roles: ["developer"],
    day: 2,
  },
  {
    title: "Feedback Form",
    slug: "feedback",
    url:
      "https://docs.google.com/forms/d/124ha3LG7-07rizB9yjoqNGkB31Yzw6jtFvImsz7-Utg",
    roles: ["designer", "developer"],
    day: 2,
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
          Welcome
        </Text>
        <Text variant="6xl" className="mb-32">
          Hands-on with design systems workshop handout.
        </Text>
        <Text variant="xlBolder" className="mb-6">
          What's next
        </Text>
      </div>
      {/* CARDS SECTION */}
      <div className="grid grid-cols-3 gap-10">
        <Blocks day={1} />
      </div>
    </div>
  );
}
