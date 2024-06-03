import type { ReactNode } from "react";
import Link from "next/link";

type INavBarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavBarTwoColumns = (props: INavBarProps) => (
  <div className="flex flex-wrap items-center justify-between">
    <div>
      <Link href="/"> {props.logo} </Link>
    </div>
    <nav>
      <ul className="navbar flex items-center text-xl font-medium text-emerald-700">
        {props.children}
      </ul>
    </nav>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);

export { NavBarTwoColumns };
