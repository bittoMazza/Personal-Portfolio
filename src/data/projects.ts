import { named } from "./config";

export type ProjectImage = {
  /** File in public/images/projects/ — preferisci .webp (vedi README). */
  src: string;
  /** Alt text descrittivo: obbligatorio, è quello che legge uno screen reader. */
  alt: string;
  caption?: string;
};

export type Project = {
  id: string;
  title: string;
  period: string;
  /** Il contesto: che problema c'era e per chi. */
  context: string;
  /** Il mio ruolo dentro quel contesto. */
  role: string;
  responsibilities: string[];
  stack: string[];
  images: ProjectImage[];
};

/**
 * ### PLACEHOLDER ###
 * Ogni voce qui sotto è una case study di esempio costruita sui contesti di
 * lavoro reali. Sostituisci testi, periodi e immagini con i dati definitivi:
 * i campi sono già quelli che il layout si aspetta.
 */
export const projects: Project[] = [
  {
    id: "smart-home",
    title: named(
      "Smart home platform for a global home appliance leader",
      "hOn — Smart home platform for Haier Europe"
    ),
    period: "Tinexta Group · 2024 — Present",
    context:
      "Mobile app for the world’s leading major home appliance brand, ranked No. 1 globally by sales volume for 17 consecutive years. It is the company’s official smart home platform, used across Europe to connect and manage appliances from the group’s brands, with around 10 million connected users.",
    role: "I’m currently part of the team developing the app in React Native. It interfaces directly with physical devices, bringing control, monitoring and personalized services together in a single app.",
    responsibilities: [
      "Control, monitoring and customization of washing machines, dishwashers, ovens, refrigerators, air conditioners, heat pumps and much more.",
      "Home automation scenarios.",
      "Energy optimization features.",
      "Maintenance and personalized services, all from a single app.",
    ],
    stack: ["React Native", "TypeScript", "IoT", "Jira", "AWS", "CI/CD"],
    images: [],
  },
  {
    id: "recliner-ble",
    title: named(
      "Bluetooth control app for motorized recliners",
      "Motion Italia — Bluetooth control app for motorized recliners"
    ),
    period: "Netrising · 2022 — 2024",
    context:
      "Mobile app for an Italian company that is an international leader in manufacturing mechanisms and electronic systems for motorized recliners and sofas.",
    role: "I handled the entire project lifecycle, from initial concept to release on the App Store and Google Play.",
    responsibilities: [
      "Built entirely in React Native, for iOS and Android.",
      "Bluetooth Low Energy connection to the recliner using react-native-ble-plx.",
      "Interactive visual representation of the seat that lets users control its movements, acting directly on each moving part.",
      "Publishing and release on the App Store and Google Play.",
    ],
    stack: [
      "React Native",
      "Bluetooth Low Energy",
      "react-native-ble-plx",
      "iOS",
      "Android",
    ],
    images: [],
  },
];
