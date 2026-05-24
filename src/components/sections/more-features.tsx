import {
  ChatIcon,
  FlashIcon,
  GiftIcon,
  GlobeIcon,
  Image01Icon,
  MagicWand01Icon,
  StarIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";

import { GradientBlob } from "@/components/decor/gradient-blob";
import { GradientText } from "@/components/ui/gradient-text";

interface FloatingIcon {
  icon: IconSvgElement;
  id: string;
  position: string;
  size: string;
}

const floatingIcons: FloatingIcon[] = [
  { id: "star", icon: StarIcon, position: "top-0 left-1/4", size: "size-14" },
  {
    id: "wand",
    icon: MagicWand01Icon,
    position: "top-10 right-1/4",
    size: "size-16",
  },
  { id: "flash", icon: FlashIcon, position: "top-32 left-12", size: "size-12" },
  { id: "chat", icon: ChatIcon, position: "top-32 right-12", size: "size-12" },
  {
    id: "group",
    icon: UserGroupIcon,
    position: "bottom-12 left-1/3",
    size: "size-14",
  },
  {
    id: "globe",
    icon: GlobeIcon,
    position: "bottom-8 right-1/3",
    size: "size-14",
  },
  {
    id: "image",
    icon: Image01Icon,
    position: "bottom-0 left-1/4",
    size: "size-12",
  },
];

export function MoreFeatures() {
  return (
    <section className="relative flex flex-col items-center gap-12 py-24 md:py-32">
      <GradientBlob
        className="top-32 left-1/2 -z-10 -translate-x-1/2"
        color="pink"
        size="lg"
      />

      <div className="relative h-80 w-full max-w-3xl">
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        >
          <div className="absolute inset-0 rounded-3xl bg-pink-500/20 blur-2xl" />
          <div className="relative flex size-24 items-center justify-center rounded-3xl border border-pink-500/30 bg-card-glow-center text-pink-200 ring-pink-soft">
            <HugeiconsIcon
              className="size-10"
              icon={GiftIcon}
              strokeWidth={1.4}
            />
          </div>
        </div>

        {floatingIcons.map((item, index) => (
          <div
            className={`absolute flex animate-float-slow ring-pink-soft ${item.size} items-center justify-center rounded-2xl border border-pink-500/10 bg-card-tinted text-pink-300 transition-all hover:border-pink-500/30 hover:text-pink-200 ${item.position}`}
            key={item.id}
            style={{ animationDelay: `${index * 0.4}s` }}
          >
            <HugeiconsIcon
              className="size-1/2"
              icon={item.icon}
              strokeWidth={1.5}
            />
          </div>
        ))}
      </div>

      <div className="flex max-w-lg flex-col items-center gap-5 text-center">
        <h2 className="text-balance font-bold text-[30px] text-foreground leading-[110%] tracking-tight md:text-[35px]">
          Countless more <GradientText>Features</GradientText>
        </h2>
        <p className="text-balance font-medium text-[18px] text-muted-foreground leading-[175%] tracking-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. We've got
          every need covered so you never have to add another bot.
        </p>
      </div>
    </section>
  );
}
