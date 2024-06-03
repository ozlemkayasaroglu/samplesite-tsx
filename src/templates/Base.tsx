import { AppConfig } from "@/utils/AppConfig";
import { Meta } from "../layout/Meta";
import { Hero } from "./Hero";
import { Sponsors } from "./Sponsors";
import { VerticalFeatures } from "./VerticalFeatures";


const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero/>
    <Sponsors/>
    <VerticalFeatures />
  </div>
);
export { Base };
