export interface UserProfile {
  id: string;
  first_name: string;
  last_name: string;
  institution: string;
  bio?: string;
  orcid_id?: string;
  academic_position?: string;
  academic_degree?: string;
  department?: string;
  lab_name?: string;
  research_areas?: string[];
  research_interests?: string[];
  publications?: string[];
  twitter?: string;
  website?: string;
  public_email?: string;
  created_at?: string;
  updated_at?: string;
}

export interface UserSettings {
  id?: string;
  user_id: string;
  email_notifications: boolean;
  dark_mode: boolean;
  language: string;
}

export type DashboardTab = 'overview' | 'submissions' | 'profile' | 'settings';