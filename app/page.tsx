"use client";

import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [message, setMessage] = useState("");

  function showMessage(text: string) {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 5000);
  }

  function handleSearch() {
    if (!search.trim()) {
      showMessage("Type something in the search bar first.");
      return;
    }

    showMessage(`Search for "${search}" is coming soon.`);
  }

  function openNotifications() {
    setShowNotifications(true);
    setHasUnread(false);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-fuchsia-900/40 bg-black">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Overstimulate Anime"
              className="h-14 w-auto"
            />
          </div>

          <nav className="flex items-center gap-8 text-sm font-semibold">
            <a className="cursor-pointer border-b-2 border-fuchsia-500 pb-1 text-fuchsia-500">
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

          <div className="flex items-center gap-4">
            <div className="flex items-center rounded-full border border-zinc-700 bg-zinc-950 px-4 py-2">
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") handleSearch();
                }}
                placeholder="Search..."
                className="w-52 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
              />

              <button onClick={handleSearch} className="ml-2 text-sm">
                🔍
              </button>
            </div>

            <div className="relative">
              <button onClick={openNotifications} className="relative text-xl">
                🔔
                {hasUnread && (
                  <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 top-12 z-50 w-80 rounded-2xl border border-fuchsia-800 bg-zinc-950 shadow-2xl shadow-fuchsia-900/40">
                  <div className="flex items-center justify-between border-b border-zinc-800 p-4">
                    <h2 className="font-bold">Notifications</h2>

                    <button
                      onClick={() => setShowNotifications(false)}
                      className="text-zinc-400 hover:text-white"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="p-4">
                    <div className="rounded-xl border border-zinc-800 bg-black p-4">
                      <p className="font-bold">No notifications yet.</p>
                      <p className="mt-2 text-sm text-zinc-500">
                        Creator updates and new manga releases will appear here.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => showMessage("Sign up system coming soon.")}
              className="whitespace-nowrap rounded-full bg-fuchsia-600 px-6 py-2 font-bold hover:bg-fuchsia-500"
            >
              Sign Up
            </button>
          </div>
        </div>
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
              onClick={() => showMessage("Waitlist feature coming soon.")}
              className="rounded-full bg-fuchsia-600 px-8 py-3 font-bold hover:bg-fuchsia-500"
            >
              Join Waitlist
            </button>

            <button
              onClick={() => showMessage("Creator info page coming soon.")}
              className="rounded-full border border-white/30 px-8 py-3 font-bold hover:border-fuchsia-500 hover:text-fuchsia-400"
            >
              Creator Info
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-6 md:grid-cols-3">
        {[
          [
            "🆕",
            "New Added",
            "When creators publish manga, the newest uploads will appear here first.",
          ],
          [
            "⭐",
            "Featured Series",
            "Featured stories selected by the team will be displayed here.",
          ],
          [
            "⚡",
            "New Releases",
            "New chapters and updates will appear here automatically.",
          ],
        ].map(([icon, title, text]) => (
          <div
            key={title}
            className="rounded-3xl border border-purple-800/70 bg-zinc-950/40 p-10 text-center"
          >
            <div className="text-5xl">{icon}</div>
            <h2 className="mt-4 text-3xl font-black">{title}</h2>
            <p className="mt-3 text-xl font-black text-fuchsia-500">
              COMING SOON
            </p>
            <p className="mx-auto mt-5 max-w-sm text-zinc-300">{text}</p>
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
            onClick={() =>
              showMessage("Creator application form coming soon.")
            }
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