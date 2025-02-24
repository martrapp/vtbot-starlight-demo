// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import {
  viewTransitions,
  remarkEndOfMarkdown,
} from "astro-vtbot/starlight-view-transitions";

// https://astro.build/config
export default defineConfig({
  site: "https://vtbot-starlight-demo.pages.dev",
  trailingSlash: "always",
  markdown: {
    remarkPlugins: [remarkEndOfMarkdown],
  },
  integrations: [
    starlight({
      title: "My Docs",
      plugins: [viewTransitions()],
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
