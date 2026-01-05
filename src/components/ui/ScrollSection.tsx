import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

type ScrollSectionProps = {
  group: {
    title: string;
    icon: any;
    wide?: boolean;
    items: any[];
  };
};

const ScrollSection = ({ group }: ScrollSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;

    ref.current.scrollBy({
      left: dir === "right" ? 480 : -480,
      behavior: "smooth",
    });
  };

  const onScroll = () => {
    if (!ref.current) return;

    const el = ref.current;
    const atEnd =
      el.scrollLeft + el.clientWidth >= el.scrollWidth - 20;

    setDirection(atEnd ? "left" : "right");
  };

  // 🔒 lock vertical scroll → horizontal only
  const onWheel = (e: React.WheelEvent) => {
    if (!ref.current) return;
    e.preventDefault();
    ref.current.scrollBy({
      left: e.deltaY,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Title */}
      <h3 className="text-3xl font-bold text-center mb-10">
        <span className="gradient-text">{group.title}</span>
      </h3>

      <div className="relative">
        {/* Arrow */}
        <button
          onClick={() => scroll(direction)}
          className={`
            absolute top-1/2 -translate-y-1/2 z-20
            w-12 h-12 rounded-full bg-primary text-white
            flex items-center justify-center shadow-lg
            hover:scale-110 transition
            ${direction === "right" ? "right-0" : "left-0"}
          `}
          aria-label="Scroll"
        >
          {direction === "right" ? <ArrowRight /> : <ArrowLeft />}
        </button>

        {/* Horizontal Scroll */}
        <div
          ref={ref}
          onScroll={onScroll}
          onWheel={onWheel}
          className="
            flex gap-6 px-14
            overflow-x-auto overflow-y-hidden
            snap-x snap-mandatory scroll-smooth
            scrollbar-hide touch-pan-x
          "
        >
          {group.items.map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`
                snap-center glass-card flex-shrink-0 overflow-hidden
                ${group.wide ? "min-w-[540px] h-80" : "min-w-[320px] h-72"}
              `}
            >
              <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/20 flex items-center justify-center">
                <group.icon className="w-12 h-12 text-primary opacity-70" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
