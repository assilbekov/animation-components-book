import { ScrollingHeadphones } from "@/components/scrolling-headphones";
import { SvgLightOnHover } from "@/components/svg-light-on-hover";
import { SvgMorphingTheme } from "@/components/svg-morphing-theme";

export default function Home() {
  return (
    <div>
      <SvgMorphingTheme />
      <SvgLightOnHover />
      <ScrollingHeadphones />
    </div>
  );
}
