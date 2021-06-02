import React from "react";

import BlockImage from "@components/block-image";
import Hero from "@components/hero";
import SectionShape from "@components/section-shape";
import Avatar from "@components/avatar";
import Section from "@components/section";
import Card from "@components/card";
import Button from "@components/button";
import Timeline, { TimelineItem } from "@components/timeline";
import Testimonial from "@components/testimonials";
import LocalTime from "@components/local-time";
import Header from "@components/header";

import DesignIcon from "../public/sketch.svg";
import DevIcon from "../public/web-development.svg";
import ProcessIcon from "../public/planning.svg";
import TwitterIcon from "../public/twitter.svg";
import LinkedinIcon from "../public/linkedin.svg";
import Airbnb from "../public/logo/airbnb.svg";
import Atlassian from "../public/logo/atlassian.svg";
import IBM from "../public/logo/ibm.svg";
import Microsoft from "../public/logo/microsoft.svg";
import Salesforce from "../public/logo/salesforce.svg";
import Shopify from "../public/logo/shopify.svg";
import Spotify from "../public/logo/spotify.svg";
import Yandex from "../public/logo/yandex.svg";

export default function IndexPage() {
  return (
    <div className="leading-normal tracking-normal text-white gradient">
      <Header />
      <Hero>
        <div className="flex flex-col items-center justify-center w-full mt-12 text-center md:text-left">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Hands-on with Design Systems
          </h1>
          <p className="mb-8 text-2xl leading-normal text-center">
            2-day workshop on building a design system with Figma and React.
            Join as a designer or as a developer to work as a team.
          </p>
        </div>

        <div className="flex flex-wrap w-full">

          {/* <!--Left Col--> */}
          <div className="flex flex-col items-center md:w-1/2">
            <p className="w-full text-xl font-bold text-center uppercase tracking-loose">
              2 & 3 June
            </p>
            <p className="w-full text-xl font-bold text-center uppercase tracking-loose">
              <LocalTime start={11} end={15} format="%start%-%end% %timezone%" />
            </p>
            <Button
              variant="base"
              className="mt-12 mb-0"
              name="hero register"
              onClick={() =>
                (location.href =
                  "https://www.eventbrite.com/e/hands-on-with-design-systems-june-tickets-152896600849")
              }
            >
              REGISTER
            </Button>
            <p className="m-6 mx-6 text-sm text-bold">
              <b>Available tickets</b>: 1 for a designer, 2 for developers
            </p>
          </div>

          {/* <!--Right Col--> */}
          <div className="flex flex-col items-center md:w-1/2">
          <p className="w-full text-xl font-bold text-center uppercase tracking-loose">
            1 & 2 September
          </p>
          <p className="w-full text-xl font-bold text-center uppercase tracking-loose">
            <LocalTime start={11} end={15} format="%start%-%end% %timezone%" />
          </p>
          <Button
            variant="base"
            className="mt-12 mb-0"
            name="hero register"
            onClick={() =>
              (location.href =
                "https://www.eventbrite.com/e/hands-on-with-design-systems-september-tickets-154073882129")
            }
          >
            REGISTER
          </Button>
          <p className="m-6 mx-6 text-sm text-bold">
            10 tickets for designers, 10 tickets for developers
          </p>
          {/* <p className="w-full text-xl font-bold text-center uppercase tracking-loose">
            Want same workshop but
          </p>
          <p className="w-full text-xl font-bold text-center uppercase tracking-loose">
            on another date?
          </p>
          <Button
            variant="base"
            className="mt-12 mb-0"
            name="hero register"
            onClick={() =>
              (location.href =
                "https://docs.google.com/forms/d/e/1FAIpQLSdatFiIDgRfQ0_uNhNHN0Hk6dWz8sRCwa0QLh1s6jVjzLyBNg/viewform")
            }
          >
            Join waiting list
          </Button>
          <p className="m-6 mx-6 text-sm text-bold">
            We will ran once again and ensure your early-bird price!
          </p> */}
          </div>
        </div>
      </Hero>
      <SectionShape className="-mt-12 lg:-mt-24" />
      <Section>
        <div className="px-4 my-8 tracking-wider text-justify text-gray-600 ">
          <p className="my-4 text-xl leading-8 ">
            This workshop helps you learn and practice design systems working in
            a team. You can join as a designer or developer.
          </p>
          <p className="my-4 text-xl leading-8 ">
            The designers define visual design language and Figma components. At
            the same time, the developers create the components with React. You
            practice iterative component-driven design and development and
            create documentation along with making the product. The exercise
            contains managing collaborative updates and keeping the code in sync
            with the design reality via design tokens.
          </p>
          <p className="my-4 text-xl leading-8 ">
            By the end of the workshop, each team has a ready-to-use and documented component
            library, an end product built out of that, and a tuned process to
            ensure smooth updates.
          </p>
        </div>
      </Section>
      <Section title="Workshop content">
        <h3 className="w-1/5 py-8 text-xl font-bold text-right text-gray-900">
          Day 1
        </h3>
        <Timeline>
          <TimelineItem
            time={<LocalTime start={11} format="%start%:00" />}
            heading="Introduction"
          >
            <ul className="list-disc list-inside">
              <li key="1">What are design systems</li>
              <li key="2">Technologies to support design systems</li>
            </ul>
          </TimelineItem>
          <TimelineItem
            time={<LocalTime start={12} format="%start%:00" />}
            heading="Design and Process"
          >
            <ul className="list-disc list-inside">
              <li key="3">UI inventory and scoping</li>
              <li key="4">Structure of Figma library</li>
              <li key="5">Designing and coding first components together</li>
              <li key="6">Design&code automatic sync</li>
            </ul>
          </TimelineItem>
          <TimelineItem
            time={<LocalTime start={15} format="%start%:00" />}
            heading="End of first day"
            align="end"
          />
        </Timeline>
        <h3 className="w-1/5 py-8 text-xl font-bold text-right text-gray-900">
          Day 2
        </h3>
        <Timeline>
          <TimelineItem
            time={<LocalTime start={11} format="%start%:00" />}
            heading="Design system in action"
          >
            <ul className="list-disc list-inside">
              <li key="7">Patterns and components in Figma</li>
              <li key="8">Coding the library of components</li>
              <li key="9">Library release cycle</li>
              <li key="10">Building the product using the design system</li>
            </ul>
          </TimelineItem>
          <TimelineItem
            time={<LocalTime start={13} format="%start%:00" />}
            heading="Design system in action"
          >
            <ul className="list-disc list-inside">
              <li key="11">Brand changes to the components</li>
              <li key="12">Updating and releasing the component library</li>
              <li key="13">Automatic product update</li>
            </ul>
          </TimelineItem>
          <TimelineItem
            time={<LocalTime start={14} format="%start%:00" />}
            heading="Running through the processes"
          >
            <ul className="list-disc list-inside">
              <li>Recap</li>
            </ul>
          </TimelineItem>
          <TimelineItem
            time={<LocalTime start={15} format="%start%:00" />}
            heading="End of the workshop"
            align="end"
          />
        </Timeline>
      </Section>
      {/* RESULT SECTION */}
      <Section title="Deliverables" className="bg-gray-100">
        <div className="px-4 my-8 tracking-wider text-justify text-gray-600">
          <p className="my-4 text-xl leading-8">
            By the end of the workshop, each team has a ready-to-use component
            library, an end product built out of that, and a tuned process to
            ensure smooth updates.
          </p>
        </div>
      </Section>
      {/* VIDEO SECTION */}
      <Section title="Sneak peek">
        <div className="px-4 my-8 tracking-wider text-justify text-gray-600">
          <p className="my-4 text-xl leading-8">
            Changes in Figma design tokens are automatically reflected in the
            components and exported to code.
          </p>
        </div>
        <div className="w-full mx-4 aspect-w-16 aspect-h-9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RWECCt6rDPU"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="item-center"
          ></iframe>
        </div>
      </Section>
      {/* CARDS SECTION */}
      <Section title="Why attend" className="bg-gray-100">
        <Card className="md:w-1/3">
          <DesignIcon className="w-full h-full px-16 pt-4 pb-8 max-h-64 md:px-8" />
          <ul className="list-disc list-inside">
            <li key="9" className="pb-2">
              Practice UI inventory{" "}
            </li>
            <li key="10" className="pb-2">
              Run brand-changes in nearly zero time
            </li>
            <li key="11" className="pb-2">
              Learn how to organize the components in Figma
            </li>
          </ul>
        </Card>
        <Card className="md:w-1/3">
          <DevIcon className="w-full h-full px-8 pt-4 pb-8 max-h-64" />
          <ul className="list-disc list-inside">
            <li key="12" className="pb-2">
              Component-driven development
            </li>
            <li key="13" className="pb-2">
              Learn tips and tricks of making a pattern library
            </li>
            <li key="14" className="pb-2">
              Practice React, Storybook, and styled-components
            </li>
          </ul>
        </Card>
        <Card className="md:w-1/3">
          <ProcessIcon className="w-full h-full px-8 pt-4 pb-8 max-h-64" />
          <ul className="list-disc list-inside">
            <li key="15" className="pb-2">
              Automate design and development processes
            </li>
            <li key="16" className="pb-2">
              Learn to work with a design system in a multifunctional team
            </li>
            <li key="17" className="pb-2">
              Practice DS development cycle: create, maintain and keep coherent
            </li>
          </ul>
        </Card>
      </Section>

      <Section title="Who we are">
        <BlockImage image={<Avatar src="/varya.jpg" alt="Varya Stepanova" />}>
          <h3 className="mb-3 text-3xl font-bold leading-none text-gray-800">
            Varya Stepanova
          </h3>
          <p className="w-full text-lg font-bold leading-loose text-gray-900 uppercase">
            Design systems architect and engineering manager
          </p>
          <p className="mb-8 text-xl text-gray-600">
            As an independent consultant, Varya helps companies to launch and
            boost their design systems. Her major focus is bridging the gap for
            designers, developers, and business specialists. That all is
            seasoned with extensive experience in component-driven UI
            development and a design degree.
          </p>
          <div className="flex">
            <a
              key="l-v"
              className="flex mr-4 cursor-pointer"
              href="https://www.linkedin.com/in/varyastepanova/"
            >
              <LinkedinIcon
                height="30"
                width="30"
                className="hover:opacity-50"
              />
            </a>
            <a key="t-v" href="https://twitter.com/varya_en">
              <TwitterIcon
                className="hover:opacity-50"
                height="30"
                width="30"
              />
            </a>
          </div>
        </BlockImage>
        <BlockImage
          reverse
          image={<Avatar src="/sherif.jpg" alt="Sherif Saleh" />}
        >
          <h3 className="mb-3 text-3xl font-bold leading-none text-gray-800">
            Sherif Saleh
          </h3>
          <p className="w-full text-lg font-bold leading-loose text-gray-900 uppercase">
            Senior product designer
          </p>

          <p className="mb-8 text-xl text-gray-600">
            Sherif is a senior product designer. He crafts deligthful
            experiences through data analytics, user research, prototypes, and
            validation. Sherif has extensive experience with design systems and
            years of working for financial services, banks, and automotive.
          </p>
          <div className="flex">
            <a
              key="l-n"
              className="flex mr-4 cursor-pointer"
              href="https://www.linkedin.com/in/salehsherif/"
            >
              <LinkedinIcon
                height="30"
                width="30"
                className="hover:opacity-50"
              />
            </a>
            <a key="t-v" href="https://twitter.com/sans_sherif">
              <TwitterIcon
                className="hover:opacity-50"
                height="30"
                width="30"
              />
            </a>
          </div>
        </BlockImage>
        {/* <BlockImage image={<Avatar src="/nikita.jpg" alt="Nikita Sharbakov" />}>
          <h3 className="mb-3 text-3xl font-bold leading-none text-gray-800">
            Nikita Sherbakov
          </h3>
          <p className="w-full text-lg font-bold leading-loose text-gray-900 uppercase">
            Software architect & senior frontend engineer
          </p>

          <p className="mb-8 text-xl text-gray-600">
            Nikita has 10+ years of experience building web projects of
            different kinds, starting from small websites to Design Systems and
            complex web services. He can help with creating and maintaining
            frontend architecture, tuning the automations and sharing the
            processes.
          </p>
          <div className="flex">
            <a
              key="l-n"
              className="flex mr-4 cursor-pointer"
              href="https://linkedin.com/in/nikita-sherbakov"
            >
              <LinkedinIcon
                height="30"
                width="30"
                className="hover:opacity-50"
              />
            </a>
            <a key="t-v" href="https://twitter.com/sherbakovdev">
              <TwitterIcon
                className="hover:opacity-50"
                height="30"
                width="30"
              />
            </a>
          </div>
        </BlockImage> */}
      </Section>

      <Section title="People say" className="bg-gray-100">
        <Testimonial author="Junaid Rasheed" dir="right">
          Varya is an expert in Design System domain. I have had chance to work
          with her in past and I found her very intellectual and hardworking
          individual. She has sounds technical background and deep understanding
          of web applications development. She leans into solving a problem not
          just defining it well. I would gladly recommend Varya to anyone who is
          looking for a Design System expert.
        </Testimonial>
        {/* <Testimonial author="Ekaterina Blake">
          Nikita is an extremely skilled web programmer and a wonderful person
          to work with. His ability to efficiently understand, communicate, and
          execute requested adjustments is superior. His experience is
          recognized in the functionality, proficiency, and competency that is
          reflected in each completed task. He also cares about his client and
          takes the time to handle every question and concern right down to the
          last detail. I highly recommend Nikita for any programming need and
          happily serve as a reference!
        </Testimonial> */}
        <Testimonial author="Anthony Tahar" dir="right">
          Sherif is a proactive and tireless contributor who would make a great
          addition to any team. He completed his assignments on time and never
          failed to add a creative touch when appropriate.
        </Testimonial>
        <Testimonial author="Alexander Petrovsky">
          Varya is a highly skilled professional designer and developer. Along
          with these qualities, she is a great leader, a team player, and a
          business partner! She is a valuable asset to any team when it comes to
          solving complex business problems! I'm glad to recommend her!
        </Testimonial>
        {/* <Testimonial author="Rami Etrimo" dir="right">
          Ability and need to understand the big picture, and always learning
          new things and utilising those learnings in practice, makes Nikita an
          asset to any product development team. Nikita's experience and skills
          nicely combine front-end development with UX design. I had the
          pleasure of working with Nikita in a team responsible for developing a
          fairly complex product where he was able to show the power to those
          two combined with very good results.
        </Testimonial> */}
        <Testimonial author="David Teissier">
          Sherif was a true professional in his business. Great skills in web
          design and UX. CSS has no secrets for him also. We worked together on
          web projects to large sizes.
        </Testimonial>
      </Section>
      {/* LOGO SECTION */}
      <Section
        wide
        title="Companies that use design systems"
        titleDecoration={false}
        className="border-transparent design-systems-companies"
      >
        <div className="relative flex w-full py-8 bg-center bg-design-systems">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-200 opacity-75" />
          <div className="container z-10 flex flex-wrap justify-between max-w-5xl mx-auto">
            {[
              Microsoft,
              Spotify,
              Atlassian,
              Yandex,
              Airbnb,
              Salesforce,
              Shopify,
              IBM,
            ].map((Logo, i) => {
              return (
                <div className="flex w-1/2 h-24 md:w-1/4" key={i + "_logo"}>
                  {
                    <Logo
                      className="w-full px-8 max-h-24"
                      preserveAspectRatio="xMidYMid"
                    />
                  }
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section title="Custom workshop version" className="border-b-0">
        <div className="px-4 my-8 tracking-wider text-justify text-gray-600 ">
          <p className="my-4 text-xl leading-8 ">
            Need a custom version? We can tailor this workshop for your company.
            When focused on your product and taking into account your team
            shape, the workshop outcome is not only a training session but also
            your design system's kick-off. We’ll walk through the design system
            process, how to get started and how to fit it into your existing
            design processes. There will be an opportunity for the team to
            discuss questions they might have about implementing a design
            system.
          </p>
          <p className="my-4 text-xl leading-8">
            Contact Varya by&nbsp;
            <a className="text-v-dark-blue" href="mailto:mail@varya.me">
              mail@varya.me
            </a>{" "}
            to discuss your custom workshop details.
          </p>
        </div>
      </Section>
      {/* <SectionShape className="transform rotate-180" />
             <section className="container py-6 mx-auto mb-12 text-center">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
          Tickets
        </h2>
        <div className="w-full mb-4">
          <div className="w-1/6 h-1 py-0 mx-auto my-0 bg-white rounded-t opacity-25"></div>
        </div>
        <div className="container flex flex-col flex-wrap max-w-5xl px-3 py-16 mx-auto md:flex-row">
          {/* LEFT COL */}
          {/* <div className="flex flex-col w-full pr-6 mt-12 text-center md:w-6/12">
            <p className="w-full text-xl font-bold text-center uppercase tracking-loose">
              8 & 9 April
            </p>
            <p className="my-4 text-3xl leading-tight">
              SOLD OUT
            </p>
          </div> */}
          {/* RIGHT COL */}
          {/* <div className="flex flex-col w-full pl-6 mt-12 justify- md:w-6/12">
            <p className="w-full text-xl font-bold uppercase tracking-loose">
              5 & 6 May
            </p>
            <p className="my-4 text-2xl leading-tight">
              Early-bird tickets: €300.00{" "}
              <span className="opacity-60">(+{"\u00A0"}€72.00 VAT)</span>
            </p>
            <p className="my-4 text-2xl leading-tight">
              Early-bird ticket combo (1 designer + 1 developer): €250.00{" "}
              <span className="opacity-60">
                (+{"\u00A0"}€60.00 VAT) per ticket
              </span>
            </p>

            <p className="my-4 text-2xl leading-tight">
              Regular tickets: €450.00{" "}
              <span className="opacity-60">(+{"\u00A0"}€108.00 VAT)</span>
            </p>

            <Button
              name="bottom-register"
              className="px-8 py-4 mx-auto my-6 mt-auto font-bold text-gray-800 transition duration-300 ease-in-out transform bg-white rounded-full shadow-lg lg:mx-0 hover:underline focus:outline-none focus:shadow-outline hover:scale-105"
              onClick={() =>
                (location.href =
                  "https://www.eventbrite.com/e/hands-on-with-design-systems-may-tickets-148020289671")
              }
            >
              Register to the workshop
            </Button>
          </div>
        </div>
      </section>   */}
    </div>
  );
}
