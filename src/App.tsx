/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import CourseCatalogPage from './pages/CourseCatalogPage';
import CourseDetailPage from './pages/CourseDetailPage';
import LessonViewerPage from './pages/LessonViewerPage';
import LearningPathsPage from './pages/LearningPathsPage';
import LearningPathDetailPage from './pages/LearningPathDetailPage';
import DailyChallengesPage from './pages/DailyChallengesPage';
import PracticeProjectsPage from './pages/PracticeProjectsPage';
import FreeResourcesPage from './pages/FreeResourcesPage';
import CareerPage from './pages/CareerPage';
import CommunityPage from './pages/CommunityPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';

// Dashboard Pages
import DashboardLayout from './components/DashboardLayout';
import DashboardOverviewPage from './pages/dashboard/DashboardOverviewPage';
import DashboardCoursesPage from './pages/dashboard/DashboardCoursesPage';
import DashboardProgressPage from './pages/dashboard/DashboardProgressPage';
import DashboardAchievementsPage from './pages/dashboard/DashboardAchievementsPage';
import DashboardBookmarksPage from './pages/dashboard/DashboardBookmarksPage';
import DashboardSettingsPage from './pages/dashboard/DashboardSettingsPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LanguageProvider>
          <BrowserRouter>
            <ScrollToTop />
            <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  {/* Public Marketing & Educational Routes */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/courses" element={<CourseCatalogPage />} />
                  <Route path="/courses/:slug" element={<CourseDetailPage />} />
                  <Route path="/learn/:courseSlug/:lessonSlug" element={<LessonViewerPage />} />
                  <Route path="/learning-paths" element={<LearningPathsPage />} />
                  <Route path="/learning-paths/:slug" element={<LearningPathDetailPage />} />
                  <Route path="/daily-challenges" element={<DailyChallengesPage />} />
                  <Route path="/practice-projects" element={<PracticeProjectsPage />} />
                  <Route path="/free-resources" element={<FreeResourcesPage />} />
                  <Route path="/career" element={<CareerPage />} />
                  <Route path="/community" element={<CommunityPage />} />
                  <Route path="/privacy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms" element={<TermsPage />} />

                  {/* Authentication Routes */}
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/forgot-password" element={<ForgotPasswordPage />} />

                  {/* Dashboard & Student Portal */}
                  <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<DashboardOverviewPage />} />
                    <Route path="courses" element={<DashboardCoursesPage />} />
                    <Route path="progress" element={<DashboardProgressPage />} />
                    <Route path="achievements" element={<DashboardAchievementsPage />} />
                    <Route path="bookmarks" element={<DashboardBookmarksPage />} />
                    <Route path="settings" element={<DashboardSettingsPage />} />
                  </Route>

                  {/* 404 Fallback */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </LanguageProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
