export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-fuchsia-900/50 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <h1 className="text-3xl font-black tracking-wide">
            OVERSTIMULATE <span className="text-fuchsia-500">ANIME</span>
          </h1>

          <nav className="hidden items-center gap-12 text-lg font-semibold md:flex">
            <a className="border-b-2 border-fuchsia-500 pb-2 text-fuchsia-500">
              Home
            </a>
            <a className="text-zinc-300 hover:text-white">Genres</a>
            <a className="text-zinc-300 hover:text-white">Trending</a>
            <a className="text-zinc-300 hover:text-white">Browse</a>
          </nav>

          <div className="flex items-center gap-5">
            <div className="hidden items-center rounded-full border border-zinc-700 bg-zinc-950 px-5 py-3 md:flex">
              <input
                type="text"
                placeholder="Search for series, creators..."
                className="w-72 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
              />
              <span className="ml-3 text-xl">🔍</span>
            </div>

            <button className="relative text-2xl">
              🔔
              <span className="absolute right-0 top-0 h-3 w-3 rounded-full bg-red-500"></span>
            </button>

            <button className="rounded-full bg-fuchsia-600 px-8 py-3 font-bold shadow-lg shadow-fuchsia-900/50 hover:bg-fuchsia-500">
              Sign Up
            </button>
          </div>
        </div>
      </header>

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
            <button className="rounded-full bg-fuchsia-600 px-8 py-3 font-bold">
              Join Waitlist
            </button>

            <button className="rounded-full border border-white/30 px-8 py-3 font-bold">
              Creator Info
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="rounded-3xl border border-fuchsia-800/70 bg-zinc-950/40 p-12 text-center">
          <div className="text-5xl">🆕</div>
          <h2 className="mt-4 text-4xl font-black">New Added</h2>
          <p className="mt-3 text-3xl font-black text-fuchsia-500">
            COMING SOON
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-zinc-300">
            When creators publish manga on Overstimulate Anime, the newest
            uploads will automatically appear here first.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="rounded-3xl border border-purple-800/70 bg-zinc-950/40 p-12 text-center">
          <div className="text-5xl">⭐</div>
          <h2 className="mt-4 text-4xl font-black">Featured Series</h2>
          <p className="mt-3 text-3xl font-black text-fuchsia-500">
            COMING SOON
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-zinc-300">
            Featured stories selected by the Overstimulate Anime team will be
            displayed here.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="rounded-3xl border border-purple-800/70 bg-zinc-950/40 p-12 text-center">
          <div className="text-5xl">⚡</div>
          <h2 className="mt-4 text-4xl font-black">New Releases</h2>
          <p className="mt-3 text-3xl font-black text-fuchsia-500">
            COMING SOON
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-zinc-300">
            Newly released chapters and updates from creators will appear here
            automatically.
          </p>
        </div>
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

          <button className="mt-8 rounded-lg bg-fuchsia-600 px-8 py-3 font-bold">
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