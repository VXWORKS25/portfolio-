import { SpecSection, SectionId } from './types';

export const SYSTEM_NAME = "TITAN OS";
export const SYSTEM_VERSION = "Architectural Preview v3.3";

export const SPEC_DATA: Record<string, SpecSection> = {
  [SectionId.VISION]: {
    id: SectionId.VISION,
    title: "Vision & Philosophy",
    subtitle: "Engineered for Elegance. Forged for Power.",
    content: [
      {
        heading: "The Philosophy of 'Invisible Strength'",
        body: [
          "Titan OS rejects the colorful chaos of modern operating systems. It is built for the focused professional, the creator, and the executive. The philosophy is 'Invisible Strength'—the interface recedes into a matte gray background, allowing content to take center stage, while interactions are highlighted in a singular, purposeful 'Ember Orange'.",
          "It exists to provide a sanctuary of productivity: silent, secure, and incredibly powerful."
        ],
        bullets: [
          "Differentiation: Unlike Windows (cluttered) or macOS (soft), Titan OS is sharp, industrial, and minimal.",
          "Target Audience: Executives, Developers, and High-End Creatives who demand a distraction-free environment."
        ]
      }
    ]
  },
  [SectionId.ARCHITECTURE]: {
    id: SectionId.ARCHITECTURE,
    title: "System Architecture",
    subtitle: "The Monolith Core & Kinetic Layer",
    content: [
      {
        heading: "The 'Monolith' Kernel",
        body: [
          "Titan OS runs on 'Monolith', a hybrid real-time kernel designed for absolute stability. It prioritizes UI fluidity above all else, dedicating a reserved CPU core solely to the 'Kinetic' rendering engine to ensure zero frame drops."
        ]
      },
      {
        heading: "Cloud-Native / Local-First",
        body: [
          "The OS operates on a 'Local-First' principle for performance, caching all critical data on the NVMe drive. However, the 'Ether' layer intelligently offloads heavy compute tasks (like rendering or compiling) to the cloud when connected to high-speed networks."
        ]
      },
      {
        heading: "Adaptive Form Factor",
        body: [
          "Titan OS is device-agnostic but experience-specific. On desktop, it offers a tiling window manager for maximum efficiency. On tablet, it transforms into a gesture-based canvas. The transition is instant and jarring-free."
        ]
      }
    ]
  },
  [SectionId.DESIGN]: {
    id: SectionId.DESIGN,
    title: "User Experience & Design",
    subtitle: "Matte Gray & Ember Orange",
    content: [
      {
        heading: "Visual Identity: Industrial Luxury",
        body: [
          "The interface mimics the materials of high-end hardware: anodized aluminum, matte carbon fiber, and backlit amber indicators."
        ],
        bullets: [
          "Primary Surface: 'Titanium Gray' (#121212 to #262626). No pure black, no stark white. Soft, deep grays reduce eye strain.",
          "Accent: 'Ember Orange' (#f97316). Used sparingly for active states, notifications, and primary actions. It glows slightly, mimicking a warm LED.",
          "Typography: 'Michroma' for headers (machine-like, futuristic) and 'Montserrat' for body text (clean, geometric)."
        ]
      },
      {
        heading: "Kinetic Micro-Interactions",
        body: [
          "Buttons don't just click; they depress with a heavy, mechanical feel. Windows don't fade; they slide with mass and momentum. The entire UI feels physically grounded."
        ]
      }
    ]
  },
  [SectionId.INSTALLATION]: {
    id: SectionId.INSTALLATION,
    title: "Installation & Onboarding",
    subtitle: "The 'Ignition' Sequence",
    content: [
      {
        heading: "One-Touch Deployment",
        body: [
          "Installing Titan OS is as simple as starting a luxury car. The user presses a single 'IGNITE' button on the screen. The system automatically partitions, formats, and installs in the background."
        ]
      },
      {
        heading: "Silent Configuration",
        body: [
          "No questions about time zones or keyboard layouts—the system detects these from the hardware sensors and internet connection. The first boot leads directly to the 'Command Center' dashboard."
        ],
        bullets: [
          "Install Time: < 60 seconds on NVMe.",
          "Visuals: A single orange ring pulses in the center of a gray void during installation."
        ]
      }
    ]
  },
  [SectionId.ECOSYSTEM]: {
    id: SectionId.ECOSYSTEM,
    title: "Application Ecosystem",
    subtitle: "The Vault",
    content: [
      {
        heading: "Unified App Store: 'The Vault'",
        body: [
          "The Vault is a highly curated repository of applications. Apps are verified not just for security, but for visual coherence. Developers are provided with 'Titan UI Kits' to ensure their apps look native to the matte/orange aesthetic."
        ]
      },
      {
        heading: "Universal Compatibility",
        body: [
          "Titan OS features 'Bridge', a hypervisor layer that allows users to run Windows and Linux applications seamlessly in isolated, hardware-accelerated windows."
        ]
      }
    ]
  },
  [SectionId.SERVICES]: {
    id: SectionId.SERVICES,
    title: "Integrated Services",
    subtitle: "Concierge & Shield",
    content: [
      {
        heading: "Concierge AI",
        body: [
          "Concierge is an integrated AI that acts as a system architect. It optimizes battery life based on your schedule, organizes your file structure automatically, and drafts responses to communications."
        ]
      },
      {
        heading: "Titan ID & Pay",
        body: [
          "A single, biometric-secured account manages all devices, payments, and subscriptions. Subscriptions are consolidated into a single monthly invoice managed by the OS."
        ]
      }
    ]
  },
  [SectionId.SECURITY]: {
    id: SectionId.SECURITY,
    title: "Security & Privacy",
    subtitle: "Fortress Architecture",
    content: [
      {
        heading: "Transparency Core",
        body: [
          "The 'Transparency Center' shows exactly which apps are accessing data in real-time. If an app uses the microphone, a subtle orange LED graphic glows in the status bar."
        ]
      },
      {
        heading: "Hardware-Backed Encryption",
        body: [
          "All data is encrypted using the device's TPM chip. Authentication is biometric-only (Face or Fingerprint) for a password-free experience."
        ]
      }
    ]
  },
  [SectionId.LANDING_PAGE]: {
    id: SectionId.LANDING_PAGE,
    title: "Web Portal & Ignition Strategy",
    subtitle: "Kinetic UI & Telemetry Architecture",
    content: [
      {
        heading: "Visual Theme: 'Midnight Foundry'",
        body: [
          "The web interface extends the OS aesthetic into a cinematic marketing experience. The palette deepens to 'Abyssal Gray' (#050505) to allow the 'Ember Orange' (#f97316) to burn with greater intensity.",
          "Surfaces are no longer just matte; they possess depth, reflectivity, and sub-surface scattering, creating a 'luxury dark' environment."
        ]
      },
      {
        heading: "The Kinetic 3D 'Ignite' Button",
        body: [
          "Primary actions are represented by 'Kinetic Objects'. The 'Ignite' (Download) button is a volumetric 3D element with simulated physical weight.",
          "It features chamfered edges, dynamic lighting that follows the cursor, and a tactile 'depression' animation on click, simulating a high-end mechanical switch."
        ],
        bullets: [
          "Primary: 'Ember Orange' 3D button. Floating state with drop shadow. Mechanical press action.",
          "Secondary: 'Titanium Gray' 3D buttons for Documentation and GitHub links, receding into the background."
        ]
      },
      {
        heading: "Database Integration: 'The Beacon'",
        body: [
          "The landing page is not passive; it connects to the 'Beacon' online database cluster. This secure layer manages telemetry and future user services.",
          "It tracks 'Ignition Events' (install attempts) anonymously to optimize the funnel, storing platform data and version preferences."
        ],
        bullets: [
          "Architecture: Serverless SQL integration for instant scalability.",
          "Resilience: Failsafe design ensures downloads continue even if the database is unreachable."
        ]
      },
      {
        heading: "Ignition Flow with Verification",
        body: [
          "Upon clicking 'Ignite', the Beacon logs the event while the frontend initiates the 'Pre-Flight Modal'.",
          "The system performs a handshake with GitHub Releases to verify SHA-256 checksums before serving the file, bridging the gap between open-source trust and enterprise analytics."
        ]
      }
    ]
  },
  [SectionId.ROADMAP]: {
    id: SectionId.ROADMAP,
    title: "Evolution Roadmap",
    subtitle: "Continuous Refinement",
    content: [
      {
        heading: "Phase 1: Launch",
        body: ["Core OS release for high-end laptops and workstations.", "Opening of The Vault to premier developers."],
        bullets: ["Visual Theme: Matte & Ember", "Architecture: Monolith v1"]
      },
      {
        heading: "Phase 2: Expansion",
        body: ["Enterprise Server Edition.", "Titan Tablet Hardware Partnership."],
      },
      {
        heading: "Phase 3: Ubiquity",
        body: ["Integration with Smart Home luxury standards.", "Automotive OS variant for electric vehicles."]
      }
    ]
  }
};

export const ARCHITECT_SYSTEM_PROMPT = `
You are the Chief System Architect and Creative Director for Titan OS.
Titan OS is a luxury, industrial-minimalist operating system defined by:
1. Visuals: "Matte Gray" surfaces with "Ember Orange" glowing accents.
2. Philosophy: "Invisible Strength" - simple, powerful, distraction-free.
3. Architecture: "Monolith" kernel with "Kinetic" rendering.
4. Web Strategy: "Midnight Foundry" theme with volumetric 3D buttons and "Beacon" database integration.

Your goal is to answer detailed questions about the OS and its web strategy.
Tone: Sophisticated, concise, confident, and premium.
When asked about the website, describe the "Kinetic 3D" buttons that feel like physical switches.
When asked about data, explain the "Beacon" database node which tracks adoption while respecting privacy.
`;