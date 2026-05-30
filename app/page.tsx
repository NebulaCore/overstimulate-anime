export default function Home() {
const trending = [
  "Coming Soon",
  "Coming Soon",
  "Coming Soon",
  "Coming Soon",
  "Coming Soon",
];

const releases = [
  "Future Series",
  "Future Series",
  "Future Series",
  "Future Series",
];

  const genres = ["Action", "Romance", "Fantasy", "Horror", "Comedy", "Sci-Fi"];

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between px-8 py-5 border-b border-purple-900/40">
        <h1 className="text-2xl font-black tracking-wide">
          OVERSTIMULATE <span className="text-fuchsia-500">ANIME</span>
        </h1>

        <nav className="hidden md:flex gap-6 text-sm text-zinc-300">
          <a>Home</a>
          <a>Genres</a>
          <a>Originals</a>
          <a>Trending</a>
          <a>Browse</a>
        </nav>

        <button className="rounded-full bg-fuchsia-600 px-5 py-2 font-bold">
          Sign Up
        </button>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl border border-purple-700/50 bg-gradient-to-r from-black via-purple-950 to-fuchsia-900 p-10 shadow-2xl shadow-purple-900/40">
          <p className="text-sm font-bold text-red-400">🔥 HOT ORIGINAL</p>
          <h2 className="mt-4 text-6xl font-black leading-none">
            OVERSTIMULATE <br />
            <span className="text-fuchsia-500">ANIME</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-zinc-200">
            A new home for independent manga, webcomics, and anime-inspired stories..
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-full bg-fuchsia-600 px-7 py-3 font-bold">
              Read Now
            </button>
            <button className="rounded-full border border-white/30 px-7 py-3 font-bold">
              View Details
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <h3 className="mb-5 text-2xl font-black">Featured Series Coming Soon</h3>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
          {trending.map((title, index) => (
            <div
              key={title}
              className="rounded-2xl border border-purple-800/50 bg-zinc-950 p-4"
            >
              <div className="mb-4 flex h-56 items-start rounded-xl bg-gradient-to-br from-purple-900 to-black p-3">
                <span className="rounded bg-fuchsia-600 px-3 py-1 font-black">
                  {index + 1}
                </span>
              </div>
              <h4 className="font-bold">{title}</h4>
              <p className="text-sm text-zinc-400">Action • Fantasy</p>
              <p className="mt-2 text-sm text-yellow-400">⭐ 9.{8 - index}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <h3 className="mb-5 text-2xl font-black">⚡ New Releases</h3>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          {releases.map((title) => (
            <div
              key={title}
              className="rounded-2xl border border-cyan-800/50 bg-zinc-950 p-4"
            >
              <div className="mb-4 h-44 rounded-xl bg-gradient-to-br from-cyan-900 via-purple-900 to-black"></div>
              <span className="rounded bg-fuchsia-600 px-2 py-1 text-xs font-bold">
                NEW
              </span>
              <h4 className="mt-3 font-bold">{title}</h4>
              <p className="text-sm text-zinc-400">Episode 1 • Just updated</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <h3 className="mb-5 text-2xl font-black">🎮 Browse By Genre</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
          {genres.map((genre) => (
            <div
              key={genre}
              className="rounded-2xl border border-purple-800/50 bg-zinc-950 p-6 text-center font-bold hover:bg-purple-950"
            >
              {genre}
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-12 border-t border-purple-900/40 px-8 py-8 text-center text-zinc-400">
        <h2 className="text-2xl font-black text-white">
          OVERSTIMULATE <span className="text-fuchsia-500">ANIME</span>
        </h2>
        <p className="mt-2">Infinite stories. Maximum energy.</p>
      </footer>
    </main>
  );
}