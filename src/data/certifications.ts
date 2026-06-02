export interface Cert {
  name: string;
  shortName?: string;
  date: string;
  expires?: string;
  significant?: boolean; // highlight badge
}

export interface CertGroup {
  id: string;
  issuer: string;
  shortName?: string;
  color: string;       // hex color for the issuer badge
  certs: Cert[];
}

// reorder or add certs here
export const certGroups: CertGroup[] = [
  {
    id: 'fortinet',
    issuer: 'Fortinet',
    color: '#EE3124',
    certs: [
      {
        name: 'Fortinet Certified Associate – Cybersecurity',
        shortName: 'FCA',
        date: 'Mai 2025',
        expires: 'Mai 2028',
        significant: true,
      },
      {
        name: 'Fortinet Certified Fundamentals – Cybersecurity',
        shortName: 'FCF',
        date: 'Mai 2025',
        expires: 'Mai 2028',
        significant: true,
      },
      {
        name: 'FortiGate 7.6 Operator',
        date: 'Mai 2026',
      },
      {
        name: 'Getting Started in Cybersecurity 3.0',
        date: 'Mai 2026',
      },
      {
        name: 'Introduction to the Threat Landscape 3.0',
        date: 'Mai 2026',
      },
    ],
  },
  {
    id: 'python-institute',
    issuer: 'Python Institute',
    color: '#4B8BBE',
    certs: [
      {
        name: 'PCEP™ – Certified Entry-Level Python Programmer',
        shortName: 'PCEP',
        date: 'Oct. 2025',
        significant: true,
      },
    ],
  },
  {
    id: 'openedg',
    issuer: 'OpenEDG',
    color: '#f59e0b',
    certs: [
      {
        name: 'Safety & Security',
        date: 'Oct. 2025',
      },
    ],
  },
  {
    id: 'cisco',
    issuer: 'Cisco Networking Academy',
    shortName: 'Cisco NetAcad',
    color: '#049FD9',
    certs: [
      { name: 'Introduction to Cybersecurity',  date: 'Fév. 2025' },
      { name: 'Networking Basics',              date: 'Mars 2025' },
      { name: 'Computer Hardware Basics',       date: 'Mars 2025' },
      { name: 'Operating Systems Basics',       date: 'Mars 2025' },
      { name: 'Linux Unhatched',                date: 'Mars 2025' },
      { name: 'Python Essentials 1',            date: 'Mars 2025' },
      { name: 'Introduction to IoT',            date: 'Mars 2025' },
      { name: 'Introduction to Modern AI',      date: 'Mars 2025' },
    ],
  },
];

// placeholder upcoming certs — add / remove freely
export const upcomingCerts = [
  { name: 'CompTIA Network+' },
  { name: 'CompTIA Security+' },
  { name: 'eJPT / eCPPT' },
  { name: 'PCAP – Python Institute' },
];
