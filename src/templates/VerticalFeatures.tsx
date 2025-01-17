import { VerticalFeatureRow } from "@/feature/VerticalFeatureRow";
import { Section } from "@/layout/Section";

const VerticalFeatures = () => (
  <Section
    title="Your Title Here!"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <VerticalFeatureRow
      title="Your Title"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature.svg"
      imageAlt="First feature"
    />

    <VerticalFeatureRow
      title="Your Title"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature.svg"
      imageAlt="First feature"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
