// Everything about you that is not a project lives here.
// Each text has an English (en) and German (de) version.
import type { Lang } from '../i18n/ui';

type L = Record<Lang, string>;

export const profile = {
  name: 'Anushika Jayasekara',
  email: 'anushikaj504@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anushika-jayasekara',
  github: 'https://github.com/AnushikaJ',
  portrait: '/img/portrait.jpg',
};

export const stats: { value: string; label: L }[] = [
  { value: '20 mo', label: { en: 'industry experience in IoT hardware production', de: 'Industrieerfahrung in der IoT-Hardwarefertigung' } },
  { value: '< 12 min', label: { en: 'automated calibration, flashing & NFC per device', de: 'automatisierte Kalibrierung, Flashen & NFC pro Gerät' } },
  { value: '−63%', label: { en: 'packaging unit cost after redesign', de: 'Stückkosten der Verpackung nach Redesign' } },
  { value: '100%', label: { en: 'grasp success over 20 randomised trials', de: 'Greiferfolg in 20 randomisierten Versuchen' } },
];

export const publications: { title: string; authors: string; venue: L; status: L; href?: string }[] = [
  {
    title: 'A Unified Control Framework for Swimming and Grasping in Underwater Snake Robots',
    authors: 'A. Jayasekara, S. D. Bandara, C. D. Makavita',
    venue: {
      en: 'IEEE ICEEET 2026 · University of Peradeniya, 17–18 Oct 2026',
      de: 'IEEE ICEEET 2026 · University of Peradeniya, 17.–18. Okt. 2026',
    },
    status: { en: 'Presented · to appear on IEEE Xplore', de: 'Präsentiert · erscheint in IEEE Xplore' },
  },
  {
    title: 'Autonomous Waypoint Navigation for a Flapping-Wing Ornithopter in GPS-Denied Environments',
    authors: 'A. Jayasekara et al.',
    venue: {
      en: 'Journal of Mechatronics, Electrical Power and Vehicular Technology',
      de: 'Journal of Mechatronics, Electrical Power and Vehicular Technology',
    },
    status: { en: 'Under review', de: 'In Begutachtung' },
  },
];

export const awards: L[] = [
  { en: 'Patent pending: gem faceting & polishing machine (filed by the university)', de: 'Patent angemeldet: Edelstein-Facettier- und Poliermaschine (durch die Universität)' },
  { en: 'Recognised by the President of Sri Lanka at FACETS Sri Lanka 2025', de: 'Anerkennung durch den Präsidenten Sri Lankas auf der FACETS Sri Lanka 2025' },
  { en: 'Final-year project: the only Grade A in the batch', de: 'Abschlussprojekt: einzige Note A im Jahrgang' },
  { en: "Dean's List, semester 8: ranked first in batch while working full-time", de: 'Dean’s List, 8. Semester: Jahrgangsbester bei Vollzeitbeschäftigung' },
  { en: 'University Colours: inter-university basketball, first runners-up 2024', de: 'University Colours: Basketball, Vizemeister der Universitätsmeisterschaft 2024' },
];

export const certificates: { src: string; title: L }[] = [
  { src: '/img/cert-iceeet.jpg', title: { en: 'IEEE ICEEET 2026: certificate of presentation', de: 'IEEE ICEEET 2026: Präsentationszertifikat' } },
];

export const experience: { role: L; org: string; period: string; points: L[] }[] = [
  {
    role: { en: 'Associate Mechatronics Engineer', de: 'Associate Mechatronics Engineer' },
    org: 'Atlas Labs (Tavistock Group), Colombo',
    period: '09/2026 – ',
    points: [
      { en: 'Redesigned the Stall Monitor packaging for logistics: −37% volume, −63.1% unit cost', de: 'Logistikgerechtes Redesign der Stall-Monitor-Verpackung: −37 % Volumen, −63,1 % Stückkosten' },
      { en: 'New heat sink cutting heat by ~50%, validated by thermal simulation and testing', de: 'Neuer Kühlkörper mit ca. 50 % weniger Wärme, validiert durch Thermosimulation und Tests' },
      { en: 'YOLO / OpenCV vision pipeline for detecting horse movement', de: 'YOLO-/OpenCV-Bildverarbeitung zur Erkennung von Pferdebewegungen' },
    ],
  },
  {
    role: { en: 'Junior Mechatronics Engineer', de: 'Junior Mechatronics Engineer' },
    org: 'Atlas Labs (Tavistock Group), Colombo',
    period: '09/2025 – 09/2026',
    points: [
      { en: 'Interim lead mechanical engineer for the IP68 Bucket Meter', de: 'Kommissarischer leitender Maschinenbauingenieur für den IP68-Bucket-Meter' },
      { en: 'Commissioned the automated calibration jig, now standard on the line', de: 'Inbetriebnahme der automatisierten Kalibriervorrichtung – heute Standard in der Linie' },
      { en: 'STM32 firmware with NEMA 17/23 stepper control for production automation', de: 'STM32-Firmware mit NEMA-17/23-Schrittmotorsteuerung für die Fertigungsautomatisierung' },
    ],
  },
  {
    role: { en: 'Mechatronics Engineering Intern', de: 'Praktikant Mechatronik' },
    org: 'Atlas Labs (Tavistock Group), Colombo',
    period: '03/2025 – 09/2025',
    points: [
      { en: 'Delivered the calibration jig from concept to working prototype in six weeks', de: 'Kalibriervorrichtung in sechs Wochen vom Konzept zum funktionsfähigen Prototyp' },
      { en: 'Introduced structured Git practices across firmware repositories', de: 'Einführung strukturierter Git-Workflows in den Firmware-Repositories' },
    ],
  },
];

export const education: { degree: L; school: string; period: string; note: L }[] = [
  {
    degree: { en: 'BSc Eng (Hons), Mechanical Engineering · minor in Mechatronics', de: 'BSc Eng (Hons), Maschinenbau · Nebenfach Mechatronik' },
    school: 'University of Sri Jayewardenepura',
    period: '2022 – 2026',
    note: {
      en: 'Second Class Upper · GPA 3.31/4.00 · semester 8 SGPA 3.80, Dean’s List, first in batch · taught in English',
      de: 'Second Class Upper · GPA 3,31/4,00 · 8. Semester SGPA 3,80, Dean’s List, Jahrgangsbester · Unterrichtssprache Englisch',
    },
  },
];

export const skills: { group: L; items: string[] }[] = [
  { group: { en: 'CAD & design', de: 'CAD & Konstruktion' }, items: ['SolidWorks', 'Fusion 360', 'AutoCAD', 'GD&T', 'DFM / DFA', 'Design for Logistics'] },
  { group: { en: 'Embedded systems', de: 'Embedded-Systeme' }, items: ['ESP32', 'STM32', 'Arduino', 'KiCad', 'Linux SBCs', 'NFC'] },
  { group: { en: 'Motors & sensors', de: 'Antriebe & Sensorik' }, items: ['NEMA 17/23 steppers', 'DC & servo control', 'Load cells', 'Sensor calibration'] },
  { group: { en: 'Robotics & control', de: 'Robotik & Regelung' }, items: ['ROS 2', 'Pixhawk / ArduPilot', 'MAVLink', 'EKF sensor fusion', 'Control modelling'] },
  { group: { en: 'Machine vision', de: 'Bildverarbeitung' }, items: ['OpenCV', 'YOLO', 'Detection pipelines'] },
  { group: { en: 'Simulation', de: 'Simulation' }, items: ['MATLAB / Simulink', 'Ansys', 'SolidWorks Simulation', 'CoppeliaSim'] },
  { group: { en: 'Manufacturing', de: 'Fertigung' }, items: ['CNC milling', 'Injection moulding', 'Laser cutting', '3D printing', 'Silicone moulding'] },
  { group: { en: 'Programming', de: 'Programmierung' }, items: ['Python', 'C++', 'Rust', 'MATLAB', 'Lua', 'Git'] },
];

export const coursework: string[] = [
  'Robotics and Vision Systems', 'Smart Sensors, Actuators and Intelligent Systems', 'Theory of Control Systems',
  'Fundamentals of Mechatronics', 'Microcontroller and Microprocessor Based Systems', 'Advanced Automation',
  'Computer-Based Measurement Systems', 'Introduction to Micromechatronics', 'Dynamics of Mechanical Systems',
  'Advanced Machine Dynamics', 'Design of Machine Elements',
];

export const languagesSpoken: L = {
  en: 'Sinhala (native) · English (IELTS Academic 7.0) · German (learning)',
  de: 'Singhalesisch (Muttersprache) · Englisch (IELTS Academic 7.0) · Deutsch (Grundkenntnisse)',
};
