import { Section } from "@/layout/Section";
import Image from "next/image";

const Sponsors = () => (
  <Section
    title="Sponsors"
    description="Our sponsors' exceptional support has made this project."
  >
    <table className="mx-auto border-separate">
      <tbody>
        <tr className="h-56">
          <td className="border-2 boder-gray-300 p-4">
            <a href="/" target="_blank">
              <Image
                src="/assets/images/sentry-dark.png"
                alt="sentry"
                width={216}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 boder-gray-300 p-4">
            <a href="/" target="_blank">
              <Image
                src="/assets/images/better-stack-dark.png"
                alt="better"
                width={216}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 boder-gray-300 p-4">
            <a href="/" target="_blank">
              <Image
                src="/assets/images/clerk.png"
                alt="sentry"
                width={216}
                height={224}
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);


export {Sponsors};