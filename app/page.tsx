"use client";

import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [message, setMessage] = useState("");

  function handleSearch() {
    if (!search.trim()) return setMessage("Type something in the search bar first.");
    setMessage(`Search for "${search}" is coming soon.`);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-fuchsia-900/50 bg-black">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <h1 className="text-2xl font-black tracking-wide md:text-3xl">
            OVERSTIMULATE <span className="text-fuchsia-500">ANIME</span>
          </h1>

          <nav className="order-3 flex w-full items-center justify-center gap-8 text-sm font-semibold md:order-none md:w-auto md:gap-10 md:text-base">
            <a className="cursor-pointer border-b-2 border-fuchsia-500 pb-2 text-fuchsia-500">
              Home
            </a>
            <a className="cursor-pointer text-zinc-300 hover:text-white">Genres</a>
            <a className="cursor-pointer text-zinc-300 hover:text-white">Trending</a>
            <a className="cursor-pointer text-zinc-300 hover:text-white">Browse</a>
          </nav>

          <div className="flex items-center gap-3 md:gap-5">
            <div className="hidden items-center rounded-full border border-zinc-700 bg-zinc-950 px-4 py-2 lg:flex">
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") handleSearch();
                }}
                placeholder="Search for series, creators..."
                className="w-56 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500 xl:w-72"
              />
              <button onClick={handleSearch} className="ml-3 text-lg">
                🔍
              </button>
            </div>

            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative text-xl transition hover:scale-110 md:text-2xl"
            >
              🔔
              <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-red-500"></span>
            </button>

            <button
              onClick={() => setMessage("Sign up system coming soon.")}
              className="rounded-full bg-fuchsia-600 px-5 py-2 font-bold shadow-lg shadow-fuchsia-900/50 hover:bg-fuchsia-500 md:px-7 md:py-3"
            >
              Sign Up
            </button>
          </div>

          <div className="order-4 flex w-full items-center rounded-full border border-zinc-700 bg-zinc-950 px-4 py-2 lg:hidden">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") handleSearch();
              }}
              placeholder="Search for series, creators..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
            />
            <button onClick={handleSearch} className="ml-3 text-lg">
              🔍
            </button>
          </div>
        </div>

        {showNotifications && (
          <div className="mx-auto max-w-7xl px-6 pb-5">
            <div className="rounded-xl border border-fuchsia-800 bg-zinc-950 p-4 text-sm text-zinc-300">
              <h3 className="mb-2 font-bold text-white">Notifications</h3>
              <p>No notifications yet.</p>
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
        <div className="rounded-3xl border border-purple-700/60 bg-gradient-to-r from-black via-purple-950 to-fuchsia-900 p-8 shadow-2xl shadow-purple-900/40 md:p-12">
          <p className="text-sm font-bold text-red-400">
            🔥 PLATFORM LAUNCHING SOON
          </p>

          <h1 className="mt-5 text-5xl font-black leading-none md:text-6xl">
            OVERSTIMULATE
            <br />
            <span className="text-fuchsia-500">ANIME</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-zinc-100 md:text-xl">
            A new home for independent manga, webcomics, and anime-inspired stories.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setMessage("Waitlist feature coming soon.")}
              className="rounded-full bg-fuchsia-600 px-8 py-3 font-bold hover:bg-fuchsia-500"
            >
              Join Waitlist
            </button>

            <button
              onClick={() => setMessage("Creator info page coming soon.")}
              className="rounded-full border border-white/30 px-8 py-3 font-bold hover:border-fuchsia-500 hover:text-fuchsia-400"
            >
              Creator Info
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-6 md:grid-cols-3">
        {[
          ["🆕", "New Added", "When creators publish manga, the newest uploads will appear here first."],
          ["⭐", "Featured Series", "Featured stories selected by the team will be displayed here."],
          ["⚡", "New Releases", "New chapters and updates will appear here automatically."],
        ].map(([icon, title, text]) => (
          <div
            key={title}
            className="rounded-3xl border border-purple-800/70 bg-zinc-950/40 p-10 text-center"
          >
            <div className="text-5xl">{icon}</div>
            <h2 className="mt-4 text-3xl font-black">{title}</h2>
            <p className="mt-3 text-xl font-black text-fuchsia-500">COMING SOON</p>
            <p className="mx-auto mt-5 max-w-sm text-zinc-300">{text}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="rounded-3xl border border-purple-800/70 bg-zinc-950/40 p-12 text-center">
          <div className="text-5xl">🎨</div>
          <h2 className="mt-4 text-4xl font-black">Creator Applications</h2>
          <p className="mt-3 text-3xl font-black text-fuchsia-500">OPEN NOW</p>
          <p className="mx-auto mt-5 max-w-2xl text-zinc-300">
            Submit your manga, webcomic, or anime-inspired story and become one of
            the first creators on the platform.
          </p>

          <button
            onClick={() => setMessage("Creator application form coming soon.")}
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
}