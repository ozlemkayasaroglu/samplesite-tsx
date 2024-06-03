import type { ReactNode } from "react"

type IHeroOneButton ={
    title: ReactNode;
    description:string;
    button:ReactNode;
}

const HeroOneButton = (props: IHeroOneButton) => (
<header className="text-center">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
        {props.title}
    </h1>
    <div className="mb-16 mt-4 text-2xl">
        {props.description}
    </div>
    {props.button}
</header>
)

export {HeroOneButton}