"use client";

import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [message, setMessage] = useState("");

  const comingSoonSections = [
    {
      icon: "🆕",
      title: "New Added",
      status: "COMING SOON",
      text: "When creators publish manga on Overstimulate Anime, the newest uploads will automatically appear here first.",
    },
    {
      icon: "⭐",
      title: "Featured Series",
      status: "COMING SOON",
      text: "Featured stories selected by the Overstimulate Anime team will be displayed here.",
    },
    {
      icon: "⚡",
      title: "New Releases",
      status: "COMING SOON",
      text: "Newly released chapters and updates from creators will appear here automatically.",
    },
  ];

  function handleSearch() {
    if (!search.trim()) {
      setMessage("Type something in the search bar first.");
      return;
    }

    setMessage(`Search for "${search}" is coming soon.`);
  }

  function handleWaitlist() {
    setMessage("Waitlist feature coming soon.");
  }

  function handleCreatorInfo() {
    setMessage("Creator info page coming soon.");
  }

  function handleApply() {
    setMessage("Creator application form coming soon.");
  }

  function handleSignUp() {
    setMessage("Sign up system coming soon.");
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-fuchsia-900/50 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <h1 className="text-3xl font-black tracking-wide">
            OVERSTIMULATE <span className="text-fuchsia-500">ANIME</span>
          </h1>

          <nav className="hidden items-center gap-12 text-lg font-semibold md:flex">
            <a className="cursor-pointer border-b-2 border-fuchsia-500 pb-2 text-fuchsia-500">
              Home
            </a>
            <a className="cursor-pointer text-zinc-300 hover:text-white">
              Genres
            </a>
            <a className="cursor-pointer text-zinc-300 hover:text-white">
              Trending
            </a>
            <a className="cursor-pointer text-zinc-300 hover:text-white">
              Browse
            </a>
          </nav>

          <div className="flex items-center gap-5">
            <div className="hidden items-center rounded-full border border-zinc-700 bg-zinc-950 px-5 py-3 md:flex">
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSearch();
                  }
                }}
                placeholder="Search for series, creators..."
                className="w-72 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
              />

              <button onClick={handleSearch} className="ml-3 text-xl">
                🔍
              </button>
            </div>

            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative text-2xl transition hover:scale-110"
            >
              🔔
              <span className="absolute right-0 top-0 h-3 w-3 rounded-full bg-red-500"></span>
            </button>

            <button
              onClick={handleSignUp}
              className="rounded-full bg-fuchsia-600 px-8 py-3 font-bold shadow-lg shadow-fuchsia-900/50 hover:bg-fuchsia-500"
            >
              Sign Up
            </button>
          </div>
        </div>

        {showNotifications && (
          <div className="mx-auto max-w-7xl px-8 pb-5">
            <div className="rounded-xl border border-fuchsia-800 bg-zinc-950 p-4 text-sm text-zinc-300">
              <h3 className="mb-2 font-bold text-white">Notifications</h3>
              <p>No notifications yet.</p>
              <p className="mt-2 text-zinc-500">
                Creator updates and new manga releases will appear here.
              </p>
            </div>
          </div>
        )}
      </header>

      {message && (
        <div className="mx-auto mt-6 max-w-6xl px-6">
          <div className="rounded-xl border border-fuchsia-800 bg-zinc-950 px-5 py-4 text-center text-sm text-zinc-300">
            {message}
          </div>
        </div>
      )}

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-purple-700/60 bg-gradient-to-r from-black via-purple-950 to-fuchsia-900 p-12 shadow-2xl shadow-purple-900/40">
          <p className="text-sm font-bold text-red-400">
            🔥 PLATFORM LAUNCHING SOON
          </p>

          <h1 className="mt-5 text-6xl font-black leading-none">
            OVERSTIMULATE
            <br />
            <span className="text-fuchsia-500">ANIME</span>
          </h1>

          <p className="mt-6 max-w-2xl text-xl text-zinc-100">
            A new home for independent manga, webcomics, and anime-inspired
            stories.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={handleWaitlist}
              className="rounded-full bg-fuchsia-600 px-8 py-3 font-bold hover:bg-fuchsia-500"
            >
              Join Waitlist
            </button>

            <button
              onClick={handleCreatorInfo}
              className="rounded-full border border-white/30 px-8 py-3 font-bold hover:border-fuchsia-500 hover:text-fuchsia-400"
            >
              Creator Info
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-6 md:grid-cols-3">
        {comingSoonSections.map((section) => (
          <div
            key={section.title}
            className="rounded-3xl border border-purple-800/70 bg-zinc-950/40 p-10 text-center"
          >
            <div className="text-5xl">{section.icon}</div>

            <h2 className="mt-4 text-3xl font-black">{section.title}</h2>

            <p className="mt-3 text-xl font-black text-fuchsia-500">
              {section.status}
            </p>

            <p className="mx-auto mt-5 max-w-sm text-zinc-300">
              {section.text}
            </p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="rounded-3xl border border-purple-800/70 bg-zinc-950/40 p-12 text-center">
          <div className="text-5xl">🎨</div>

          <h2 className="mt-4 text-4xl font-black">Creator Applications</h2>

          <p className="mt-3 text-3xl font-black text-fuchsia-500">
            OPEN NOW
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-300">
            Submit your manga, webcomic, or anime-inspired story and become one
            of the first creators on the platform.
          </p>

          <button
            onClick={handleApply}
            className="mt-8 rounded-lg bg-fuchsia-600 px-8 py-3 font-bold hover:bg-fuchsia-500"
          >
            Apply Now
          </button>
        </div>
      </section>

      <footer className="mt-16 border-t border-purple-900/40 py-8 text-center text-zinc-400">
        <h2 className="text-2xl font-black text-white">
          OVERSTIMULATE <span className="text-fuchsia-500">ANIME</span>
        </h2>
        <p className="mt-2">Infinite stories. Maximum energy.</p>
      </footer>
    </main>
  );
}ss