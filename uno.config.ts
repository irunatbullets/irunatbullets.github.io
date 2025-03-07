import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWebFonts,
  transformerVariantGroup,
  transformerDirectives,
} from "unocss";

import presetWind4 from "@unocss/preset-wind4";

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    },
  },
  presets: [
    presetWind4(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
        // ...
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        "Markazi Text": "Markazi+Text:400,500,600,700,800,900",
      },
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
});
