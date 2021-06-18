import { Text, Icon } from "@goright/design-system";

export default function WhyAttend() {
  return (
    <div className="flex max-w-4xl mx-auto mt-28">
      <div className="flex flex-col items-start justify-start flex-shrink-0 w-2/5">
        <Icon name="Education32" className="pr-4 mb-4" />
        <Text variant="6Xl" as="h2">
          What you will learn?
        </Text>
      </div>
      <Text variant="xlBolder" as="div" className="">
        <p className="mb-6">
          This workshop helps you learn and practice design systems working in a
          team. You can join as a designer or developer.
        </p>
        <p className="mb-6">
          The designers define visual design language and Figma components. At
          the same time, the developers create the components with React. You
          practice iterative component-driven design and development and create
          documentation along with making the product. The exercise contains
          managing collaborative updates and keeping the code in sync with the
          design reality.
        </p>
        <p>
          By the end of the workshop, each team has a ready-to-use component
          library, an end product built out of that, and a tuned process to
          ensure smooth updates.
        </p>
      </Text>
    </div>
  );
}
