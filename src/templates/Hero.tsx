import { Background } from "@/background/Background";
import { Section } from "@/layout/Section";
import { NavBarTwoColumns } from "@/navigation/NavBarTwoColumns";
import Link from "next/link";
import { Logo } from "./Logo";
import { HeroOneButton } from "@/hero/HeroOneButton";
import { Button } from "@/button/Button";


const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavBarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ozlemkayasaroglu">Github</Link>
        </li>
        <li>
          <Link href="/">Sign In</Link>
        </li>
      </NavBarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {"The modern ladnging page for\n"}
            <span className="text-primary-500">React Developers</span>
          </>
        }
        description="The eas,est way to build a React Landing page in seconds"
        button={
          <Link href="/">
            <Button xl>Download</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
