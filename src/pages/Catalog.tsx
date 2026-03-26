import { useState } from "react"
import { Header } from "@/components/Header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const GAMES = ["Все", "Dota 2", "CS2", "Valorant", "World of Warcraft", "Fortnite", "GTA V"]

const LISTINGS = [
  { id: 1, game: "Dota 2", rank: "Immortal", mmr: "8 500 MMR", hours: "3 200 ч", skins: "42 скина", price: 3200, color: "bg-red-700", initials: "D2", hot: true },
  { id: 2, game: "CS2", rank: "Global Elite", mmr: "3 000 ч", hours: "Premier 25k", skins: "18 скинов", price: 2800, color: "bg-orange-700", initials: "CS", hot: false },
  { id: 3, game: "Valorant", rank: "Radiant", mmr: "450 побед", hours: "850 ч", skins: "Phantom коллекция", price: 1900, color: "bg-pink-700", initials: "VL", hot: true },
  { id: 4, game: "World of Warcraft", rank: "Gladiator", mmr: "2 500 ilvl", hours: "5 000 ч", skins: "Легендарный маунт", price: 5500, color: "bg-blue-700", initials: "WW", hot: false },
  { id: 5, game: "Fortnite", rank: "Champion", mmr: "Win Rate 68%", hours: "1 200 ч", skins: "120+ скинов", price: 1200, color: "bg-yellow-700", initials: "FN", hot: false },
  { id: 6, game: "Dota 2", rank: "Divine 5", mmr: "6 800 MMR", hours: "2 100 ч", skins: "15 скинов", price: 1800, color: "bg-red-800", initials: "D2", hot: false },
  { id: 7, game: "GTA V", rank: "Max level", mmr: "Все бизнесы", hours: "800 ч", skins: "Премиум авто", price: 900, color: "bg-green-800", initials: "GV", hot: true },
  { id: 8, game: "CS2", rank: "Supreme", mmr: "2 400 ч", hours: "Premier 18k", skins: "5 ножей", price: 4100, color: "bg-orange-800", initials: "CS", hot: false },
  { id: 9, game: "Valorant", rank: "Immortal 3", mmr: "320 побед", hours: "600 ч", skins: "Vandal Prime", price: 1100, color: "bg-pink-800", initials: "VL", hot: false },
]

export default function Catalog() {
  const [activeGame, setActiveGame] = useState("Все")
  const [sortBy, setSortBy] = useState("popular")

  const filtered = LISTINGS.filter(l => activeGame === "Все" || l.game === activeGame)
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price_asc") return a.price - b.price
    if (sortBy === "price_desc") return b.price - a.price
    return 0
  })

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <section className="px-4 md:px-8 py-10 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Каталог аккаунтов</h1>
          <p className="text-gray-400">Проверенные профили с гарантией безопасной сделки</p>
        </div>

        {/* Фильтры по играм */}
        <div className="flex flex-wrap gap-2 mb-6">
          {GAMES.map(game => (
            <button
              key={game}
              onClick={() => setActiveGame(game)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                activeGame === game
                  ? "bg-violet-600 border-violet-600 text-white"
                  : "border-[#262626] text-gray-400 hover:text-white hover:border-gray-500 bg-transparent"
              }`}
            >
              {game}
            </button>
          ))}

          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="ml-auto px-4 py-1.5 rounded-full text-sm bg-[#141414] border border-[#262626] text-gray-400 outline-none cursor-pointer"
          >
            <option value="popular">По популярности</option>
            <option value="price_asc">Сначала дешевле</option>
            <option value="price_desc">Сначала дороже</option>
          </select>
        </div>

        {/* Карточки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sorted.map(item => (
            <div key={item.id} className="rounded-2xl bg-[#141414] border border-[#262626] p-5 flex flex-col hover:border-violet-500/40 transition-colors group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`h-12 w-12 rounded-xl ${item.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {item.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{item.game}</p>
                    <p className="text-violet-400 text-sm">{item.rank}</p>
                  </div>
                </div>
                {item.hot && (
                  <Badge className="bg-orange-500/20 text-orange-400 border-0 text-xs">🔥 Хит</Badge>
                )}
              </div>

              <div className="space-y-1.5 mb-5 flex-1">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Icon name="Clock" size={14} className="text-gray-600" />
                  {item.hours}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Icon name="BarChart2" size={14} className="text-gray-600" />
                  {item.mmr}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Icon name="Sparkles" size={14} className="text-gray-600" />
                  {item.skins}
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#262626]">
                <span className="text-xl font-bold text-white">{item.price.toLocaleString("ru")} ₽</span>
                <Button size="sm" className="rounded-full bg-violet-600 hover:bg-violet-700 text-white text-sm px-4">
                  Купить
                </Button>
              </div>
            </div>
          ))}
        </div>

        {sorted.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <Icon name="Search" size={40} className="mx-auto mb-3 opacity-30" />
            <p>Аккаунтов по этой игре пока нет</p>
          </div>
        )}
      </section>

      <footer className="py-8 text-center text-sm text-gray-400">
        Все сделки защищены гарантией —{" "}
        <span className="font-medium text-white">GameVault™</span>
      </footer>
    </main>
  )
}
