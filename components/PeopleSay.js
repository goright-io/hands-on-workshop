import { Text, Icon, Testimonial } from "@goright/design-system";

import "react-multi-carousel/lib/styles.css";
const testimonials = [
  {
    name: "Junaid Rasheed",
    avatar: "/rasheed_avatar.png",
    text:
      "Varya is an expert in Design System domain. I have had chance to work with her in past and I found her very intellectual and hardworking individual. She has sounds technical background and deep understanding of web applications development. She leans into solving a problem not just defining it well. I would gladly recommend Varya to anyone who is looking for a Design System expert.",
    colors: "bg-primary-50 text-light-on-background-900",
  },
  {
    name: "Junaid Rasheed",
    avatar: "/rasheed_avatar.png",
    text:
      "Varya is an expert in Design System domain. I have had chance to work with her in past and I found her very intellectual and hardworking individual. She has sounds technical background and deep understanding of web applications development. She leans into solving a problem not just defining it well. I would gladly recommend Varya to anyone who is looking for a Design System expert.",
    colors: "bg-primary-500 text-light-on-background-100",
  },
  {
    name: "Junaid Rasheed",
    avatar: "/rasheed_avatar.png",
    text:
      "Varya is an expert in Design System domain. I have had chance to work with her in past and I found her very intellectual and hardworking individual. She has sounds technical background and deep understanding of web applications development. She leans into solving a problem not just defining it well. I would gladly recommend Varya to anyone who is looking for a Design System expert.",
    colors: "bg-light-background-50 text-light-on-background-100",
  },
  {
    name: "Junaid Rasheed",
    avatar: "/rasheed_avatar.png",
    text:
      "Varya is an expert in Design System domain. I have had chance to work with her in past and I found her very intellectual and hardworking individual.",
    colors: "bg-primary-50 text-light-on-background-900",
  },
];

export default function PeopleSay() {
  return (
    <div className="relative max-w-4xl mx-auto overflow-x-visible mt-28">
      <div className="flex items-start">
        <Icon name="Forum32" className="mr-6" />
        <Text variant="6Xl" as="h2">
          People Say
        </Text>
      </div>
      <div className="">
        <Testimonial testimonials={testimonials} />
      </div>
    </div>
  );
}
