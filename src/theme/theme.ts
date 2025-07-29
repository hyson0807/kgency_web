export const theme = {
  name: "Linear Official Theme",
  version: "2.0.0",
  description: "Extracted from Linear's actual design system and UI redesign",
  colorSystem: {
    generationMethod: "LCH color space",
    baseVariables: {
      baseColor: "#ffffff",
      accentColor: "#5e6ad2",
      contrast: "standard"
    },
    supportedModes: ["light", "dark", "custom", "high-contrast"]
  },
  colors: {
    primary: {
      50: "#f4f5ff",
      100: "#e8eaff",
      200: "#d4d8ff",
      300: "#b5bbff",
      400: "#9196ff",
      500: "#5e6ad2",
      600: "#4c57c4",
      700: "#3d47a8",
      800: "#2e3680",
      900: "#1f2354"
    },
    surfaces: {
      background: "#ffffff",
      foreground: "#fafbfc",
      elevated: "#ffffff",
      translucent: "rgba(255, 255, 255, 0.8)",
      panel: "#f8f9fa",
      dialog: "#ffffff",
      modal: "#ffffff",
      sidebar: "#fafbfc",
      chrome: "#ffffff"
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#6b7280",
      tertiary: "#9ca3af",
      inverse: "#ffffff",
      accent: "#5e6ad2",
      muted: "#9ca3af",
      disabled: "#d1d5db"
    },
    border: {
      primary: "#e5e7eb",
      secondary: "#f3f4f6",
      focus: "#5e6ad2",
      hover: "#d1d5db",
      subtle: "#f9fafb"
    },
    semantic: {
      success: "#1a7f37",
      warning: "#d1242f",
      error: "#cf222e",
      info: "#0969da"
    },
    error: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d"
    },
    neutral: {
      50: "#fafbfc",
      100: "#f6f8fa",
      200: "#eaeef2",
      300: "#d0d7de",
      400: "#8b949e",
      500: "#656d76",
      600: "#4a5568",
      700: "#2d3748",
      800: "#1a1e23",
      900: "#0d1117"
    }
  },
  typography: {
    fontFamily: {
      primary: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
      display: "Inter Display, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      mono: "'SF Mono', Monaco, Inconsolata, 'Roboto Mono', Consolas, 'Courier New', monospace"
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem"
    },
    fontWeight: {
      thin: "100",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800"
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2"
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    }
  },
  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem"
  },
  borderRadius: {
    none: "0",
    sm: "0.125rem",
    default: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    full: "9999px"
  },
  shadows: {
    xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)"
  },
  animation: {
    duration: {
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1000: "1000ms"
    },
    easing: {
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      inOut: "cubic-bezier(0.4, 0, 0.2, 1)"
    }
  },
  layout: {
    sidebar: {
      width: "240px",
      backgroundColor: "#fafbfc",
      borderRight: "1px solid #e5e7eb",
      padding: "12px"
    },
    header: {
      height: "48px",
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #e5e7eb",
      padding: "0 16px"
    },
    tabs: {
      height: "36px",
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #f3f4f6"
    },
    container: {
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "0 24px"
    },
    section: {
      padding: "64px 0"
    },
    panel: {
      width: "320px",
      backgroundColor: "#f8f9fa",
      borderLeft: "1px solid #e5e7eb"
    },
    grid: {
      gap: "2rem",
      columns: {
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))"
      }
    }
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  zIndex: {
    0: "0",
    10: "10",
    20: "20",
    30: "30",
    40: "40",
    50: "50"
  },
  designPrinciples: {
    philosophy: "Relentless focus, fast execution, and commitment to quality of craft",
    goals: [
      "Reduce visual noise",
      "Maintain visual alignment", 
      "Increase hierarchy and density of navigation elements",
      "Create a timeless appearance",
      "Support accessibility with high contrast options"
    ],
    colorPhilosophy: "LCH color space for perceptual uniformity and consistent theme generation",
    layoutPhilosophy: "Inverted L-shape chrome with structured layouts supporting navigation and content"
  }
} as const;

export const darkTheme = {
  colorSystem: {
    baseVariables: {
      baseColor: "#0f0f10",
      accentColor: "#5e6ad2",
      contrast: "standard"
    }
  },
  colors: {
    surfaces: {
      background: "#0f0f10",
      foreground: "#1a1a1b",
      elevated: "#222224",
      translucent: "rgba(15, 15, 16, 0.8)",
      panel: "#1a1a1b",
      dialog: "#222224",
      modal: "#2a2a2c",
      sidebar: "#1a1a1b",
      chrome: "#0f0f10"
    },
    text: {
      primary: "#ffffff",
      secondary: "#a1a1aa",
      tertiary: "#71717a",
      inverse: "#0f0f10",
      accent: "#7c8aff",
      muted: "#71717a",
      disabled: "#52525b"
    },
    border: {
      primary: "#2a2a2c",
      secondary: "#1e1e20",
      focus: "#7c8aff",
      hover: "#3a3a3c",
      subtle: "#1a1a1b"
    }
  }
} as const;

export type Theme = typeof theme;
export type DarkTheme = typeof darkTheme;