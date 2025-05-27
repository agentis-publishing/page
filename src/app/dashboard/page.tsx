'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthProvider';
import { Button } from '@/components/neo/Button';
import { Card } from '@/components/neo/Card';
import { DashboardTab, UserSettings } from '@/types';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();
  const { user, profile, isLoading: authLoading, updateProfile } = useAuth();
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  // Settings state
  const [settings, setSettings] = useState<UserSettings>({
    user_id: user?.id || '',
    email_notifications: true,
    dark_mode: false,
    language: 'en'
  });

  // Profile form state
  const [profileForm, setProfileForm] = useState({
    first_name: '',
    last_name: '',
    institution: '',
    bio: '',
    orcid_id: '',
    academic_position: '',
    academic_degree: '',
    department: '',
    lab_name: '',
    twitter: '',
    website: '',
    public_email: ''
  });

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [authLoading, user, router]);

  // Load user settings and profile
  useEffect(() => {
    if (user && profile) {
      setProfileForm({
        first_name: profile.first_name || '',
        last_name: profile.last_name || '',
        institution: profile.institution || '',
        bio: profile.bio || '',
        orcid_id: profile.orcid_id || '',
        academic_position: profile.academic_position || '',
        academic_degree: profile.academic_degree || '',
        department: profile.department || '',
        lab_name: profile.lab_name || '',
        twitter: profile.twitter || '',
        website: profile.website || '',
        public_email: profile.public_email || ''
      });
      
      // Load settings inline
      const loadSettings = async () => {
        try {
          const { data } = await supabase
            .from('user_settings')
            .select('*')
            .eq('user_id', user.id)
            .single();
          
          if (data) {
            setSettings(data);
          }
        } catch (error) {
          console.error('Error loading settings:', error);
        }
      };
      
      loadSettings();
    }
  }, [user, profile]);

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { error } = await updateProfile(profileForm);
      if (error) throw error;
      
      setSuccess('Profile updated successfully!');
    } catch (err) {
      setError((err as Error).message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const handleSettingsUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { error } = await supabase
        .from('user_settings')
        .upsert({
          ...settings,
          user_id: user?.id
        });
      
      if (error) throw error;
      
      setSuccess('Settings updated successfully!');
    } catch (err) {
      setError((err as Error).message || 'Failed to update settings');
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="font-display text-2xl font-bold">LOADING...</div>
        </div>
      </div>
    );
  }

  if (!user || !profile) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-4xl font-black mb-2">AUTHOR DASHBOARD</h1>
          <p className="text-gray-600">
            Welcome back, {profile.first_name} {profile.last_name}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <nav className="space-y-2">
                {(['overview', 'submissions', 'profile', 'settings'] as DashboardTab[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full text-left px-4 py-2 font-bold uppercase transition-colors ${
                      activeTab === tab
                        ? 'bg-accent text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {error && (
              <div className="bg-red-100 border-2 border-red-400 p-4 mb-6">
                <p className="text-red-800 font-medium">{error}</p>
              </div>
            )}

            {success && (
              <div className="bg-green-100 border-2 border-green-400 p-4 mb-6">
                <p className="text-green-800 font-medium">{success}</p>
              </div>
            )}

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <Card className="p-6">
                  <h2 className="font-display text-2xl font-bold mb-4">OVERVIEW</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border-2 border-black">
                      <div className="text-3xl font-bold">0</div>
                      <div className="text-sm uppercase">Total Submissions</div>
                    </div>
                    <div className="p-4 border-2 border-black">
                      <div className="text-3xl font-bold">0</div>
                      <div className="text-sm uppercase">Under Review</div>
                    </div>
                    <div className="p-4 border-2 border-black">
                      <div className="text-3xl font-bold">0</div>
                      <div className="text-sm uppercase">Published</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-display text-xl font-bold mb-4">QUICK ACTIONS</h3>
                  <div className="space-y-2">
                    <Link href="/submit-paper">
                      <Button className="w-full">SUBMIT NEW PAPER</Button>
                    </Link>
                  </div>
                </Card>
              </div>
            )}

            {/* Submissions Tab */}
            {activeTab === 'submissions' && (
              <Card className="p-6">
                <h2 className="font-display text-2xl font-bold mb-4">MY SUBMISSIONS</h2>
                <div className="text-center py-8 text-gray-500">
                  <p className="mb-4">You haven&apos;t submitted any papers yet.</p>
                  <Link href="/submit-paper">
                    <Button>SUBMIT YOUR FIRST PAPER</Button>
                  </Link>
                </div>
              </Card>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <Card className="p-6">
                <h2 className="font-display text-2xl font-bold mb-4">EDIT PROFILE</h2>
                <form onSubmit={handleProfileUpdate} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold mb-2">FIRST NAME</label>
                      <input
                        type="text"
                        value={profileForm.first_name}
                        onChange={(e) => setProfileForm({...profileForm, first_name: e.target.value})}
                        className="w-full p-3 border-4 border-black focus:outline-none focus:ring-2 focus:ring-accent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-2">LAST NAME</label>
                      <input
                        type="text"
                        value={profileForm.last_name}
                        onChange={(e) => setProfileForm({...profileForm, last_name: e.target.value})}
                        className="w-full p-3 border-4 border-black focus:outline-none focus:ring-2 focus:ring-accent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold mb-2">INSTITUTION</label>
                    <input
                      type="text"
                      value={profileForm.institution}
                      onChange={(e) => setProfileForm({...profileForm, institution: e.target.value})}
                      className="w-full p-3 border-4 border-black focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-bold mb-2">BIO</label>
                    <textarea
                      value={profileForm.bio}
                      onChange={(e) => setProfileForm({...profileForm, bio: e.target.value})}
                      className="w-full p-3 border-4 border-black focus:outline-none focus:ring-2 focus:ring-accent"
                      rows={4}
                    />
                  </div>

                  <div>
                    <label className="block font-bold mb-2">ORCID ID</label>
                    <input
                      type="text"
                      value={profileForm.orcid_id}
                      onChange={(e) => setProfileForm({...profileForm, orcid_id: e.target.value})}
                      className="w-full p-3 border-4 border-black focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="0000-0000-0000-0000"
                    />
                  </div>

                  <Button type="submit" disabled={loading}>
                    {loading ? 'UPDATING...' : 'UPDATE PROFILE'}
                  </Button>
                </form>
              </Card>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <Card className="p-6">
                <h2 className="font-display text-2xl font-bold mb-4">SETTINGS</h2>
                <form onSubmit={handleSettingsUpdate} className="space-y-4">
                  <div>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.email_notifications}
                        onChange={(e) => setSettings({...settings, email_notifications: e.target.checked})}
                        className="w-5 h-5 border-2 border-black"
                      />
                      <span className="font-bold">EMAIL NOTIFICATIONS</span>
                    </label>
                  </div>

                  <div>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.dark_mode}
                        onChange={(e) => setSettings({...settings, dark_mode: e.target.checked})}
                        className="w-5 h-5 border-2 border-black"
                      />
                      <span className="font-bold">DARK MODE</span>
                    </label>
                  </div>

                  <div>
                    <label className="block font-bold mb-2">LANGUAGE</label>
                    <select
                      value={settings.language}
                      onChange={(e) => setSettings({...settings, language: e.target.value})}
                      className="w-full p-3 border-4 border-black focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="en">English</option>
                      <option value="es">Español</option>
                      <option value="fr">Français</option>
                    </select>
                  </div>

                  <Button type="submit" disabled={loading}>
                    {loading ? 'SAVING...' : 'SAVE SETTINGS'}
                  </Button>
                </form>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}