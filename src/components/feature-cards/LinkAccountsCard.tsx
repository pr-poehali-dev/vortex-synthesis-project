import { Gamepad2, ArrowUpRight, Plus } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const listings = [
  { game: "Dota 2", info: "Immortal · 8500 MMR", price: "3 200 ₽", color: "bg-red-700", initials: "D2" },
  { game: "CS2", info: "Global Elite · 3 000 часов", price: "2 800 ₽", color: "bg-orange-700", initials: "CS" },
  { game: "Valorant", info: "Radiant · 450 побед", price: "1 900 ₽", color: "bg-pink-700", initials: "VL" },
  { game: "World of Warcraft", info: "Gladiator · 2 500 ilvl", price: "5 500 ₽", color: "bg-blue-700", initials: "WW" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Gamepad2 className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Тысячи аккаунтов в каталоге</h3>
      <p className="mb-4 text-sm text-gray-400">Выбирай из сотен проверенных профилей в любой игре — от Dota до WoW</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Смотреть каталог <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {listings.map((item, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarFallback className={`${item.color} text-white text-xs`}>
                  {item.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-white">{item.game}</p>
                <p className="text-xs text-gray-500">{item.info}</p>
              </div>
            </div>
            <Badge className="bg-violet-500/20 text-violet-300 border-0 text-xs">{item.price}</Badge>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-center text-gray-500 hover:text-white hover:bg-[#1f1f1f] mt-2"
        >
          <Plus className="mr-2 h-4 w-4" /> Загрузить свой аккаунт
        </Button>
      </div>
    </div>
  )
}
