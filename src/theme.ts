import { Button, Card, createTheme } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "var(--font-body), sans-serif",
  headings: {
    fontFamily: "var(--font-display), serif",
    fontWeight: "600",
  },
  primaryColor: "indigo",
  defaultRadius: "md",
  components: {
    Button: Button.extend({
      defaultProps: {
        radius: "xl",
      },
      styles: {
        root: {
          letterSpacing: "0.01em",
          fontWeight: 600,
        },
      },
    }),
    Card: Card.extend({
      defaultProps: {
        radius: "lg",
        padding: "xl",
      },
    }),
  },
});
