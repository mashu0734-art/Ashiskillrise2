import React, { useState } from 'react';
import { MessageSquare, Users, Sparkles, Send, CheckCircle2, Heart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function CommunityPage() {
  const { user } = useAuth();
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 'p-1',
      author: 'Fatima Zahra',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      time: '2 hours ago',
      track: 'Web Development',
      content: 'Just deployed my first responsive CSS Grid project to Cloudflare! The mobile media queries were tricky initially, but the box-sizing principle made everything align neatly.',
      likes: 12
    },
    {
      id: 'p-2',
      author: 'Carlos Mendez',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      time: '5 hours ago',
      track: 'Freelancing Fundamentals',
      content: 'Pitched my first client using the 3-tier milestone pricing framework from Course 3. The client chose the Professional tier without haggling over hourly rates!',
      likes: 24
    },
    {
      id: 'p-3',
      author: 'Priya Sharma',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      time: 'Yesterday',
      track: 'Artificial Intelligence',
      content: 'Tip for the Prompt Engineering quiz: Remember that few-shot examples give models the exact output schema you need. It reduced hallucinations completely in my spreadsheet workflow.',
      likes: 19
    }
  ]);

  const handleShare = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;
    setPosts([
      {
        id: `p-${Date.now()}`,
        author: user?.fullName || 'Student Learner',
        avatar: user?.avatarUrl || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
        time: 'Just now',
        track: 'Student Learner',
        content: newPost,
        likes: 1
      },
      ...posts
    ]);
    setNewPost('');
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
      <div className="max-w-2xl space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
          <Users className="h-4 w-4" />
          <span>Learner Community & Showcase</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Ashiskillrise Community
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Share your study wins, ask questions about course exercises, and exchange tips with fellow digital learners.
        </p>
      </div>

      {/* Share Box */}
      <form onSubmit={handleShare} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-3">
        <label className="text-xs font-bold text-slate-900 dark:text-white block">
          Share a Learning Milestone or Ask a Question:
        </label>
        <textarea
          value={newPost}
          onChange={e => setNewPost(e.target.value)}
          placeholder="What did you learn or build today? Share tips or project links..."
          rows={3}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700 transition-colors"
          >
            <Send className="h-3.5 w-3.5" />
            <span>Post to Community</span>
          </button>
        </div>
      </form>

      {/* Posts Feed */}
      <div className="space-y-4">
        {posts.map(p => (
          <div
            key={p.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={p.avatar}
                  alt={p.author}
                  className="h-9 w-9 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                    {p.author}
                  </h3>
                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <span className="text-blue-600 dark:text-blue-400">{p.track}</span>
                    <span aria-hidden="true">·</span>
                    <span>{p.time}</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {p.content}
            </p>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 hover:text-rose-600 cursor-pointer transition-colors">
                <Heart className="h-4 w-4" />
                <span className="tabular-nums">{p.likes} likes</span>
              </span>
              <span className="text-[11px] text-slate-400">Peer verified</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
