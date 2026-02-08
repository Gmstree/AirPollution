export interface TeamMember {
  id: string;
  studentId: string;
  name: string;
  role: 'Leader' | 'Co-leader' | 'Member';
  email: string;
  bio: string;
  image: string;
  socials: {
    website?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    email: string;
  };
  skills: string[];
}

export interface Reference {
  id: string;
  text: string;
  doi?: string;
}

export interface NavItem {
  label: string;
  path: string;
}