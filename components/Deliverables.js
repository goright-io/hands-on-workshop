import { Text, Icon } from "@goright/design-system";

export default function Deliverables() {
  return (
    <div className="max-w-4xl mx-auto mt-28">
      <div className="flex items-start">
        <Icon name="Delivery32" className="mr-6" />
        <Text variant="6Xl" as="h2">
          Deliverables
        </Text>
      </div>
      <Text variant="xlBolder" as="p" className="mt-10">
        By the end of the workshop, each team has a ready-to-use component
        library, an end product built out of that, and a tuned process to ensure
        smooth updates.
      </Text>
      <figure className="mt-10">
        <div className="w-full aspect-w-5 aspect-h-3">
          <iframe
            width="888"
            // height="315"
            src="https://www.youtube.com/embed/RWECCt6rDPU"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="item-center"
          ></iframe>
        </div>
        <Text
          as="figcaption"
          variant="sm"
          className="mt-2 text-center text-light-on-background-500"
        >
          Sneak peek: Changes in Figma design tokens are automatically reflected
          in the components and exported to code.
        </Text>
      </figure>
    </div>
  );
}
