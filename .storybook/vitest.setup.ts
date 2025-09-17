import {
  afterEach,
  initialGlobals,
  parameters,
} from "@storybook/addon-a11y/preview";
import { setProjectAnnotations } from "@storybook/nextjs-vite";
import projectAnnotations from "./preview";

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
setProjectAnnotations([
  {
    afterEach,
    initialGlobals,
    parameters,
  },
  projectAnnotations,
]);
