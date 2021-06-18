import { Text, Icon, Timetable } from "@goright/design-system";

export default function WorkshopContent() {
  const timetableData = [
    {
      color: "bg-accent-red",
      description: "What are design systems",
      name: "Introduction",
      time: "9.00 am – 9:30",
    },
    {
      color: "bg-accent-red",
      description: "Design & code automatic sync",
      name: "Introduction",
      time: "9.00 am – 9:30",
    },
    {
      color: "bg-accent-purple",
      description: "UI inventory and scoping",
      name: "Design and process",
      time: "9.00 am – 9:30",
    },
    {
      color: "bg-accent-purple",
      description: "Structure of Figma library",
      name: "Design and process",
      time: "9.00 am – 9:30",
    },
    {
      color: "bg-accent-turqoise",
      description: "Structure of Figma library",
      name: "Design and process",
      time: "9.00 am – 9:30",
    },
    {
      color: "bg-accent-turqoise",
      description: "Structure of Figma library",
      name: "Design and process",
      time: "9.00 am – 9:30",
    },
    {
      color: "bg-accent-blue",
      description: "Structure of Figma library",
      name: "Design and process",
      time: "9.00 am – 9:30",
    },
    {
      color: "bg-accent-blue",
      description: "Structure of Figma library",
      name: "Design and process",
      time: "9.00 am – 9:30",
    },
  ];
  return (
    <div className="max-w-4xl mx-auto mt-28">
      <div className="flex items-start">
        <Icon name="TableOfContents32" className="mr-6" />
        <Text variant="6Xl" as="h2">
          Workshop content
        </Text>
      </div>
      <Timetable className="w-full mt-16" data={timetableData} header="Day 1" />
      <Timetable className="w-full mt-16" data={timetableData} header="Day 2" />
    </div>
  );
}
