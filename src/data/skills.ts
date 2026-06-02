export interface Skill {
  name: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  color: string;        // Tailwind color name e.g. 'violet'
  accentClass: string;  // Tailwind classes for accent
  skills: Skill[];
}

// update skill lists freely here
export const skillCategories: SkillCategory[] = [
  {
    id: 'infra',
    title: 'Infrastructure & Virtualisation',
    description: 'Déploiement et gestion de serveurs physiques et environnements virtualisés',
    color: 'violet',
    accentClass: 'text-violet-400 border-violet-500/30 bg-violet-500/5',
    skills: [
      { name: 'Proxmox VE' },
      { name: 'Linux (Debian / Ubuntu)' },
      { name: 'Windows Server 2022' },
      { name: 'Active Directory' },
      { name: 'PKI / ADCS' },
      { name: 'Docker' },
      { name: 'Dell PowerEdge (R610)' },
      { name: 'Ansible (bases)' },
    ],
  },
  {
    id: 'network',
    title: 'Réseaux & Systèmes',
    description: 'Architecture réseau, routage, administration et supervision',
    color: 'cyan',
    accentClass: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/5',
    skills: [
      { name: 'TCP/IP' },
      { name: 'VLAN / Trunk' },
      { name: 'Routage & Switching' },
      { name: 'Fortinet FortiGate' },
      { name: 'DNS / DHCP' },
      { name: 'VPN (IPSec / SSL)' },
      { name: 'Wireshark' },
      { name: 'pfSense' },
    ],
  },
  {
    id: 'security',
    title: 'Cybersécurité',
    description: 'Sécurisation des SI, SIEM, Zero Trust et analyse d\'incidents',
    color: 'indigo',
    accentClass: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/5',
    skills: [
      { name: 'Zero Trust' },
      { name: 'Wazuh SIEM' },
      { name: 'IDS / IPS' },
      { name: 'Analyse de logs' },
      { name: 'Hardening OS' },
      { name: 'PKI & Chiffrement' },
      { name: 'OSINT (bases)' },
      { name: 'CTF / Pentest (bases)' },
    ],
  },
  {
    id: 'dev',
    title: 'Langages & Outils',
    description: 'Scripting, automatisation et outillage du quotidien',
    color: 'emerald',
    accentClass: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5',
    skills: [
      { name: 'Python (PCEP certifié)' },
      { name: 'Bash / Shell' },
      { name: 'PowerShell' },
      { name: 'Git' },
      { name: 'HTML / CSS' },
      { name: 'SQL (bases)' },
      { name: 'YAML / Markdown' },
      { name: 'VS Code' },
    ],
  },
];
