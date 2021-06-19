import { Text, Icon } from "@goright/design-system";

export default function WhyAttend() {
  return (
    <div className="max-w-4xl mx-auto mt-28">
      <div className="flex items-start">
        <Icon name="Idea32" className="mr-6" />
        <Text variant="6Xl" as="h2">
          Why Attend
        </Text>
      </div>
      <div className="grid grid-cols-2 mt-10 gap-x-20 gap-y-16">
        <div className="">
          <Text as="h3" variant="2Xl">
            As a Designer
          </Text>
          <Text
            variant="lgBolder"
            as="ul"
            className="mt-6 list-disc list-inside list"
          >
            <li>Practice UI inventory</li>
            <li className="mt-3">Run brand-changes in nearly zero time</li>
            <li className="mt-3">
              Learn how to organize the components in Figma
            </li>
          </Text>
        </div>
        <div className="">
          <Text as="h3" variant="2Xl">
            As a Developer
          </Text>
          <Text
            variant="lgBolder"
            as="ul"
            className="mt-6 list-disc list-inside list"
          >
            <li>Practice UI inventory</li>
            <li className="mt-3">Run brand-changes in nearly zero time</li>
            <li className="mt-3">
              Learn how to organize the components in Figma
            </li>
          </Text>
        </div>
        <div className="">
          <Text as="h3" variant="2Xl">
            As a Product Owner
          </Text>
          <Text
            variant="lgBolder"
            as="ul"
            className="mt-6 list-disc list-inside list"
          >
            <li>Practice UI inventory</li>
            <li className="mt-3">Run brand-changes in nearly zero time</li>
            <li className="mt-3">
              Learn how to organize the components in Figma
            </li>
          </Text>
        </div>
      </div>
    </div>
  );
}
