import React, { useState } from 'react';
import { User, Mail, Shield, CheckCircle2, Save, Image as ImageIcon, Sparkles } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';

export default function DashboardSettingsPage() {
  const { user, updateProfile } = useAuth();
  const { language } = useLanguage();

  const [fullName, setFullName] = useState(user?.fullName || 'Alex Morgan');
  const [headline, setHeadline] = useState('Aspiring Full-Stack & AI Product Builder');
  const [bio, setBio] = useState('Passionate about building intuitive software products and mastering modern digital skills.');
  const [targetCareer, setTargetCareer] = useState('Web Developer & AI Specialist');
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [cartoonSeed, setCartonSeed] = useState(user?.fullName || 'Ashiskillrise Student');
  const [cartoonStyle, setCartoonStyle] = useState('avataaars');

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ fullName });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        updateProfile({ avatarUrl: base64String });
        setSavedSuccess(true);
        setTimeout(() => setSavedSuccess(false), 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateCartoon = () => {
    const seed = cartoonSeed.trim() || fullName || 'student';
    const cartoonUrl = `https://api.dicebear.com/7.x/${cartoonStyle}/svg?seed=${encodeURIComponent(seed)}`;
    updateProfile({ avatarUrl: cartoonUrl });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Account Settings
        </h2>
        <p className="text-xs text-slate-500">
          Manage your student profile, public showcase information, and account preferences.
        </p>
      </div>

      {savedSuccess && (
        <div className="flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-xs text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
          <span>Profile changes saved and synchronized!</span>
        </div>
      )}

      {/* Profile Form */}
      <form onSubmit={handleSaveProfile} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
          Student Profile Details
        </h3>

        {/* Profile Picture: Gallery Upload & Cartoon Avatar Generator */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 space-y-4 bg-slate-50/50 dark:bg-slate-800/30">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-violet-600" />
              <span>{language === 'ur' ? 'پروفائل تصویر (گیلری یا کارٹون جنریٹر)' : 'Profile Picture (Gallery or Cartoon Generator)'}</span>
            </h4>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            {user?.avatarUrl ? (
              <img
                src={user.avatarUrl}
                alt="Profile Avatar"
                className="h-20 w-20 rounded-full object-cover ring-4 ring-blue-600/30 shadow-md bg-white shrink-0"
              />
            ) : (
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white ring-4 ring-blue-600/30 shadow-md shrink-0">
                <User className="h-10 w-10 text-white" />
              </div>
            )}

            <div className="flex-1 space-y-3 w-full">
              {/* Option 1: Choose from Gallery */}
              <div className="flex flex-wrap items-center gap-2">
                <label className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-white cursor-pointer transition-colors shadow-sm">
                  <ImageIcon className="h-4 w-4" />
                  <span>{language === 'ur' ? 'گیلری سے تصویر منتخب کریں' : 'Choose from Gallery'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                </label>

                {user?.avatarUrl && (
                  <button
                    type="button"
                    onClick={() => {
                      updateProfile({ avatarUrl: '' });
                      setSavedSuccess(true);
                      setTimeout(() => setSavedSuccess(false), 3000);
                    }}
                    className="px-3 py-2 rounded-xl border border-rose-200 dark:border-rose-900/50 bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 text-xs font-semibold hover:bg-rose-100 transition-colors"
                  >
                    {language === 'ur' ? 'تصویر ہٹائیں' : 'Remove Photo'}
                  </button>
                )}
              </div>

              {/* Option 2: Generate Cartoon Avatar with Urdu / Name Text */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-700/80 space-y-2">
                <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                  {language === 'ur' ? 'یا نام / اردو متن درج کر کے کارٹون ایوارٹر بنائیں:' : 'Or Generate Cartoon Avatar from Name / Urdu Text:'}
                </label>
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <input
                    type="text"
                    value={cartoonSeed}
                    onChange={e => setCartonSeed(e.target.value)}
                    placeholder={language === 'ur' ? 'اپنا نام یا اردو متن لکھیں...' : 'Type name or Urdu text for cartoon...'}
                    className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  />
                  <select
                    value={cartoonStyle}
                    onChange={e => setCartoonStyle(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  >
                    <option value="avataaars">Cartoon Character</option>
                    <option value="bottts">Robot Cartoon</option>
                    <option value="adventurer">Adventurer</option>
                    <option value="lorelei">Artistic Illustration</option>
                    <option value="fun-emoji">Fun Emoji</option>
                  </select>
                  <button
                    type="button"
                    onClick={handleGenerateCartoon}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold shadow-sm transition-colors whitespace-nowrap"
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>{language === 'ur' ? 'کارٹون بنائیں' : 'Generate Cartoon'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            required
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={user?.email || 'learner@ashiskillrise.org'}
            disabled
            className="w-full rounded-xl border border-slate-200 bg-slate-100 px-3 py-2 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-800/50 cursor-not-allowed"
          />
          <span className="text-[10px] text-slate-400 mt-0.5 block">Managed via session authentication</span>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Professional Headline
          </label>
          <input
            type="text"
            value={headline}
            onChange={e => setHeadline(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Target Career Discipline
          </label>
          <input
            type="text"
            value={targetCareer}
            onChange={e => setTargetCareer(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Bio
          </label>
          <textarea
            value={bio}
            onChange={e => setBio(e.target.value)}
            rows={3}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700 shadow-sm transition-colors"
        >
          <Save className="h-4 w-4" />
          <span>Save Changes</span>
        </button>
      </form>
    </div>
  );
}
