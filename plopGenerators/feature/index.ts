import { PlopGeneratorConfig } from "plop";

const featureGenerator: Partial<PlopGeneratorConfig> = {
  description: "Feature Generator",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "feature name",
    },
  ],
};

export default featureGenerator
