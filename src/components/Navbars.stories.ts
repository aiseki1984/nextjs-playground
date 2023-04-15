import type { Meta, StoryObj } from "@storybook/react";
import Navbars from "./Navbars";

const meta: Meta<typeof Navbars> = {
  title: "MyStory/Navbars",
  component: Navbars,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Navbars>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut: Story = {};
