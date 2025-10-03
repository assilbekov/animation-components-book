import { ScrollingHeadphones } from "@/components/scrolling-headphones";
import { SvgLightOnHover } from "@/components/svg-light-on-hover";
import { SvgMorphingTheme } from "@/components/svg-morphing-theme";
import { SpaceShipSvg } from "@/components/space-ship";
import { BetterAuthPrimaryButton } from "@/components/better-auth-primary-button";
import { UserTypingBasic } from "@/components/user-typing-basic";
import { TypingAdvanced } from "@/components/typing-advanced";
import { ConsoleLookingBlock } from "@/components/console-looking-block";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 p-8 space-y-6">
      <ConsoleLookingBlock title="dev-typing-animation.tsx">
        <TypingAdvanced />
      </ConsoleLookingBlock>

      <ConsoleLookingBlock title="cool-text-editing.tsx">
        <UserTypingBasic />
      </ConsoleLookingBlock>

      <BetterAuthPrimaryButton />
      <SpaceShipSvg />
      <SvgMorphingTheme />
      <SvgLightOnHover />
      <ScrollingHeadphones />
    </div>
  );
}
