import Icon from "@/components/ui/icon"

const games = [
  { name: "Dota 2", icon: "Swords" },
  { name: "CS2", icon: "Target" },
  { name: "Valorant", icon: "Crosshair" },
  { name: "World of Warcraft", icon: "Globe" },
  { name: "Fortnite", icon: "Zap" },
  { name: "GTA V", icon: "Car" },
  { name: "Minecraft", icon: "Box" },
]

export function PartnersSection() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-4 py-8">
      {games.map((game) => (
        <div key={game.name} className="flex items-center gap-2 text-gray-500">
          <Icon name={game.icon} fallback="Gamepad2" className="h-4 w-4" />
          <span className="text-sm font-medium">{game.name}</span>
        </div>
      ))}
    </section>
  )
}