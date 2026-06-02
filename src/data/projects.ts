export interface ProjectTech {
  name: string;
  color?: string; // optional hex accent
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tech: ProjectTech[];
  status: 'active' | 'coming-soon';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'homelab',
    title: 'Home-Lab Proxmox',
    subtitle: 'Infrastructure de virtualisation & sécurité',
    description:
      'Home-lab complet basé sur Proxmox VE. L\'objectif est de reproduire un environnement d\'entreprise réel pour expérimenter, apprendre et valider des compétences en infrastructure et cybersécurité — sans budget cloud.',
    tech: [
      { name: 'Proxmox VE',     color: '#E57000' },
      { name: 'Wazuh SIEM',     color: '#0099CC' },
      { name: 'Active Directory',color: '#0078D4' },
      { name: 'PKI interne' },
      { name: 'Linux Debian' },
      { name: 'Windows Server 2022' },
      { name: 'FortiGate VM' },
    ],
    status: 'active',
    featured: true,
  },
  {
    id: 'wazuh',
    title: 'SIEM Wazuh',
    subtitle: 'Supervision & détection d\'incidents',
    description:
      'Déploiement et configuration de Wazuh pour la corrélation de logs, la détection d\'intrusions et la remontée d\'alertes sur le home-lab.',
    tech: [
      { name: 'Wazuh' },
      { name: 'Elastic Stack' },
      { name: 'Filebeat' },
      { name: 'Linux' },
    ],
    status: 'active',
  },
  {
    id: 'ad-pki',
    title: 'AD & PKI d\'entreprise',
    subtitle: 'Annuaire & infrastructure à clé publique',
    description:
      'Mise en place d\'un Active Directory complet (ADCS, GPO, délégation) avec PKI interne et intégration Zero Trust.',
    tech: [
      { name: 'Windows Server' },
      { name: 'Active Directory' },
      { name: 'ADCS / PKI' },
      { name: 'GPO' },
    ],
    status: 'active',
  },
  {
    id: 'ctf-lab',
    title: 'CTF & Pentest Lab',
    subtitle: 'Entraînement offensif / défensif',
    description:
      'Environnement isolé dédié aux CTF, à la pratique du pentest et à la compréhension des vecteurs d\'attaque courants.',
    tech: [
      { name: 'Kali Linux' },
      { name: 'Metasploit' },
      { name: 'Burp Suite' },
    ],
    status: 'coming-soon',
  },
  {
    id: 'automation',
    title: 'Automatisation Infra',
    subtitle: 'Scripts & Infrastructure as Code',
    description:
      'Automatisation du déploiement de VMs, de la configuration des services et des sauvegardes via Ansible et Python.',
    tech: [
      { name: 'Ansible' },
      { name: 'Python' },
      { name: 'Bash' },
    ],
    status: 'coming-soon',
  },
];

// Hardware specs for the home-lab — update as needed
export const homelabHardware = [
  {
    name: 'Dell R610',
    role: 'Hyperviseur principal',
    specs: ['Dual Xeon E5645', '64 Go RAM ECC', 'Proxmox VE'],
    icon: 'server',
    color: 'violet',
  },
  {
    name: 'HP Victus 15',
    role: 'Workstation principal',
    specs: ['Ryzen 5 5600H', '40 Go RAM', 'Windows 10 IoT LTSC', 'RX 6500M'],
    icon: 'laptop',
    color: 'cyan',
  },
  {
    name: 'Asus F540LJ',
    role: 'Hyperviseur secondaire 24/7',
    specs: ['Intel i5', 'Proxmox VE', 'Allumé en permanence'],
    icon: 'server',
    color: 'indigo',
  },
];
