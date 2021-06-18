import React from "react";
import { Text, Emoji, Card, Icon } from "@goright/design-system";
// import Header from "@components/header";
import Link from "next/link";
import WorkshopContent from "../components/WorkshopContent";
import Deliverables from "../components/Deliverables";
import WhyAttend from "../components/WhyAttend";
import TeamsAttended from "../components/TeamsAttended";
import WhoAreWe from "../components/WhoAreWe";
import PeopleSay from "../components/PeopleSay";
import WhatYouWillLearn from "../components/WhatYouWillLearn";
import CustomWorkshop from "../components/CustomWorkshop";

export default function IndexPage() {
  return (
    <div className="max-w-5xl mx-auto">
      {/***** HERO SECTION *****/}
      <div className="leading-normal tracking-normal text-center text-light-on-background-900">
        <Text as="p" variant="xlBolder" className="mt-24">
          <Emoji symbol="👋 " label="hand" />
          Hands-on
        </Text>
        <Text as="h1" variant="6Xl" className="max-w-3xl mx-auto mt-4">
          2-day workshop on building{"\u00A0"}a{"\u00A0"}design{"\u00A0"}system
          {"\u00A0"}with{" "}
          <Text as="span" variant="6Xl" highlight="yellow-100">
            Figma
          </Text>
          {"\u00A0"}and{"\u00A0"}
          <Text as="span" variant="6Xl" highlight="primary-100">
            React
          </Text>
          .
        </Text>
        <Text variant="xlBolder" className="mt-16">
          Upcoming workshops
          <Emoji symbol="👇" label="hand" />
        </Text>
        <div className="grid grid-cols-3 gap-10 mt-6">
          <Card
            key="september"
            heading="1 &amp; 2 SEPTEMBER 11-15 EEST"
            link={{
              text: "Get early-bird tickets",
              href:
                "https://www.eventbrite.fi/e/hands-on-with-design-systems-september-tickets-154073882129",
            }}
          >
            <div className="mb-8">
              <Text variant="smBolder" className="mb-3">
                Available tickets:
              </Text>
              <p>Designers: 10</p>
              <p>Developers: 10</p>
            </div>
          </Card>
          <Card
            heading="Need a custom workshop for your team?"
            link={{ text: "Let's talk", href: "/contact" }}
            linkComponent={Link}
          />
        </div>
      </div>
      {/***** WHAT YOU WILL LEARN *****/}
      <WhatYouWillLearn />
      <WorkshopContent />
      <Deliverables />
      <WhyAttend />
      <TeamsAttended />
      <PeopleSay />
      <WhoAreWe />
      <CustomWorkshop />
    </div>
  );
}
