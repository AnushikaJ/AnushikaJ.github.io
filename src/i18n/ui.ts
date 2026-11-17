export const languages = { en: 'English', de: 'Deutsch' } as const;
export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'nav.industry': 'Industry',
    'nav.research': 'Research',
    'nav.lab': 'Lab',
    'nav.skills': 'Skills',
    'nav.publications': 'Publications',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.status': 'Open to Werkstudent roles in Germany · 2027',
    'hero.role': 'Mechatronics Engineer · Robotics · Automation · Mechanical Design',
    'hero.lead':
      'I design and build robots, production test jigs and factory automation, taking each idea from CAD and embedded firmware to hardware running on a live production line.',
    'hero.german': 'German · A2 exam early 2027',
    'hero.scroll': 'Scroll',
    'hero.cta.work': 'Explore my work',
    'hero.cta.contact': 'Get in touch',
    'stats.title': 'Selected results',
    'lab.kicker': '00 — The lab',
    'lab.title': 'Step into my lab.',
    'lab.lead': 'Everything in this room is something I designed and built. Pick any object to open its story.',
    'skills.kicker': '03 — Skills',
    'skills.title': 'Toolbox',
    'skills.lead': 'From CAD and embedded firmware to control theory and the factory floor.',
    'about.coursework': 'Relevant coursework',
    'industry.kicker': '01 — Industry',
    'industry.title': 'Production engineering at Atlas Labs',
    'industry.lead':
      'Two years designing test and production equipment for IoT hardware, taking each one from concept to a tool used every day on the production line.',
    'research.kicker': '02 — Research & projects',
    'research.title': 'Robotics & control',
    'research.lead':
      'Bio-inspired robots, autonomous flight and precision machines, from simulation and control theory to working hardware.',
    'pubs.kicker': '04 — Publications & recognition',
    'pubs.title': 'Publications',
    'pubs.awards': 'Recognition',
    'pubs.certs': 'Certificates',
    'about.kicker': '05 — About',
    'about.title': 'About me',
    'about.experience': 'Experience',
    'about.education': 'Education',
    'about.skills': 'Skills',
    'contact.kicker': '06 — Contact',
    'contact.title': "Let's build something.",
    'contact.lead':
      'I am open to Werkstudent and research positions in robotics, automation and production engineering in Germany from 2027.',
    'project.role': 'Role',
    'project.period': 'Period',
    'project.tools': 'Tools',
    'project.gallery': 'Gallery',
    'project.links': 'Links',
    'project.back': 'All projects',
    'project.next': 'Next project',
    'card.read': 'Case study',
    'footer.built': 'Designed and built by me with Astro. Source on GitHub.',
  },
  de: {
    'nav.industry': 'Industrie',
    'nav.research': 'Forschung',
    'nav.lab': 'Werkstatt',
    'nav.skills': 'Kenntnisse',
    'nav.publications': 'Publikationen',
    'nav.about': 'Über mich',
    'nav.contact': 'Kontakt',
    'hero.status': 'Offen für Werkstudentenstellen in Deutschland · 2027',
    'hero.role': 'Mechatronik-Ingenieur · Robotik · Automatisierung · Konstruktion',
    'hero.lead':
      'Ich konstruiere und baue Roboter, Prüfvorrichtungen und Fertigungsautomatisierung – vom CAD-Modell und der Embedded-Firmware bis zur Hardware in der laufenden Serienfertigung.',
    'hero.german': 'Deutsch · A2-Prüfung Anfang 2027',
    'hero.scroll': 'Scrollen',
    'hero.cta.work': 'Meine Arbeit entdecken',
    'hero.cta.contact': 'Kontakt aufnehmen',
    'stats.title': 'Ausgewählte Ergebnisse',
    'lab.kicker': '00 — Die Werkstatt',
    'lab.title': 'Willkommen in meiner Werkstatt.',
    'lab.lead': 'Alles in diesem Raum habe ich selbst konstruiert und gebaut. Wählen Sie ein Objekt, um mehr zu erfahren.',
    'skills.kicker': '03 — Kenntnisse',
    'skills.title': 'Werkzeugkasten',
    'skills.lead': 'Von CAD und Embedded-Firmware über Regelungstheorie bis in die Fertigung.',
    'about.coursework': 'Relevante Studienfächer',
    'industry.kicker': '01 — Industrie',
    'industry.title': 'Produktionstechnik bei Atlas Labs',
    'industry.lead':
      'Zwei Jahre Entwicklung von Prüf- und Fertigungsmitteln für IoT-Hardware – jeweils vom Konzept bis zum täglichen Einsatz in der Fertigungslinie.',
    'research.kicker': '02 — Forschung & Projekte',
    'research.title': 'Robotik & Regelungstechnik',
    'research.lead':
      'Bioinspirierte Roboter, autonomer Flug und Präzisionsmaschinen – von Simulation und Regelungstheorie bis zur funktionierenden Hardware.',
    'pubs.kicker': '04 — Publikationen & Auszeichnungen',
    'pubs.title': 'Publikationen',
    'pubs.awards': 'Auszeichnungen',
    'pubs.certs': 'Zertifikate',
    'about.kicker': '05 — Über mich',
    'about.title': 'Über mich',
    'about.experience': 'Berufserfahrung',
    'about.education': 'Ausbildung',
    'about.skills': 'Kenntnisse',
    'contact.kicker': '06 — Kontakt',
    'contact.title': 'Lassen Sie uns etwas bauen.',
    'contact.lead':
      'Ab 2027 suche ich Werkstudenten- und Forschungsstellen in Robotik, Automatisierung und Produktionstechnik in Deutschland.',
    'project.role': 'Rolle',
    'project.period': 'Zeitraum',
    'project.tools': 'Werkzeuge',
    'project.gallery': 'Galerie',
    'project.links': 'Links',
    'project.back': 'Alle Projekte',
    'project.next': 'Nächstes Projekt',
    'card.read': 'Fallstudie',
    'footer.built': 'Von mir mit Astro gestaltet und entwickelt. Quellcode auf GitHub.',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function t(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui.en[key];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'de' : 'en';
}
