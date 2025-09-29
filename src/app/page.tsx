import { ScrollingHeadphones } from "@/components/scrolling-headphones";
import { SvgLightOnHover } from "@/components/svg-light-on-hover";
import { SvgMorphingTheme } from "@/components/svg-morphing-theme";
import { SpaceShipSvg } from "@/components/space-ship";
import { BetterAuthPrimaryButton } from "@/components/better-auth-primary-button";

export default function Home() {
  return (
    <div>
      <BetterAuthPrimaryButton />
      <SpaceShipSvg />
      <SvgMorphingTheme />
      <SvgLightOnHover />
      <ScrollingHeadphones />
    </div>
  );
}
