import { Layers, PocketKnife, Rocket, Share, Shield } from "lucide-react";
import { features } from "process";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const FeatureData = [
  {
    title: "Real-Time Collaboration",
    description:
      "Work together with your team in live rooms, enabling seamless discussions and real-time updates on your projects. Say goodbye to endless email threads and delays.",
    icon: <Rocket />,
  },
  {
    title: "Shared Code Environment",
    description:
      "Collaborate on code in a shared environment where changes appear instantly for everyone in the room. Review, edit, and debug as a team effortlessly.",
    icon: <Share />,
  },
  {
    title: "Built-in Communication Tools",
    description:
      "Communicate effectively with built-in chat and voice tools, ensuring that no idea gets lost. Simplify teamwork with everything in one place.",
    icon: <PocketKnife />,
  },
  {
    title: "Organized Rooms for Every Project",
    description:
      "Create dedicated rooms for each project and stay organized. Focus on tasks with a clear overview of discussions, shared resources, and progress.",
    icon: <Layers />,
  },
  {
    title: "Secure and Scalable Platform",
    description:
      "Collaborate confidently with enterprise-grade security. Whether you're a small team or a growing organization, our platform scales with your needs.",
    icon: <Shield />,
  },
];

const FeatureCard = ({
  title,
  description,
  icon,
  className,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "border p-6 rounded-lg text-justify hover:bg-zinc-900 transition",
        className
      )}
    >
      <h1 className="font-semibold tracking-tight text-md sm:text-xl flex gap-2">
        {icon}
        {title}
      </h1>
      <p className="text-neutral-300 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto my-60">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight my-10 bg-gradient-to-t from-neutral-300 to-white text-transparent bg-clip-text">
        Features
      </h1>
      <div className="grid md:grid-cols-3 gap-2">
        {FeatureData.map((feature, index) => (
          <FeatureCard
            title={feature.title}
            icon={feature.icon}
            description={feature.description}
            className={index === 3 ? "sm:col-span-2" : "col-span-1"}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
