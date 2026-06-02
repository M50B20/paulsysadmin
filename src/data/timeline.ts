export type EventType = 'academic' | 'pro';
export type EventStatus = 'completed' | 'in-progress' | 'upcoming';

export interface TimelineEvent {
  year: string;
  period?: string;
  type: EventType;
  title: string;
  org: string;
  location?: string;
  description?: string;
  status: EventStatus;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2024',
    period: '2024 – 2026',
    type: 'academic',
    title: 'BTS CIEL option A',
    org: 'Lycée de Mirepoix',
    location: 'Mirepoix, Ariège',
    description:
      'Formation initiale en Cybersécurité, Informatique et réseaux, Électronique. Option A — Systèmes numériques et réseaux.',
    status: 'completed',
  },
  {
    year: '2026',
    period: 'Juillet – Sept. 2026',
    type: 'pro',
    title: 'CDD — Technicien support N1/N2',
    org: 'Alsatis Services',
    location: 'Verniolle, Ariège',
    description:
      'Mission estivale : support technique N1/N2, gestion et maintenance du parc, assistance aux utilisateurs.',
    status: 'in-progress',
  },
  {
    year: '2026',
    period: '2026 – 2027',
    type: 'academic',
    title: 'Bachelor ASR',
    org: 'CESI',
    description:
      'Administration des Systèmes et des Réseaux — en alternance, orienté infra, virtualisation et cybersécurité.',
    status: 'upcoming',
  },
  {
    year: '2027',
    period: '2027 – 2029',
    type: 'academic',
    title: 'Mastère MICSI',
    org: 'CESI',
    description:
      'Manager en Infrastructure et Cybersécurité des SI — en alternance.',
    status: 'upcoming',
  },
];
