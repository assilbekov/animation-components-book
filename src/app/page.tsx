import { ScrollingHeadphones } from "@/components/scrolling-headphones";
import { SvgLightOnHover } from "@/components/svg-light-on-hover";
import { SvgMorphingTheme } from "@/components/svg-morphing-theme";
import { SpaceShipSvg } from "@/components/space-ship";

export default function Home() {
  return (
    <div>
      <SpaceShipSvg />
      <SvgMorphingTheme />
      <SvgLightOnHover />
      <ScrollingHeadphones />
    </div>
  );
}
