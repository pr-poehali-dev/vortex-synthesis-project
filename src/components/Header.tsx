import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <GameVaultLogo />
        <span className="text-lg font-semibold text-white">
          GameVault<sup className="text-xs">™</sup>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <Link to="/catalog" className="text-sm text-gray-300 hover:text-white transition-colors">
          Каталог
        </Link>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1">
          Игры <ChevronDown className="h-4 w-4" />
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Гарантии
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Цены
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Контакты
        </a>
      </nav>

      <Button
        variant="outline"
        className="rounded-full border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300 bg-transparent"
      >
        Войти
      </Button>
    </header>
  )
}

function GameVaultLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="6" width="20" height="13" rx="3" fill="#8B5CF6" opacity="0.8" />
      <rect x="10" y="2" width="4" height="4" rx="1" fill="#8B5CF6" />
      <circle cx="8" cy="13" r="1.5" fill="white" opacity="0.9" />
      <circle cx="16" cy="13" r="1.5" fill="white" opacity="0.9" />
      <rect x="11.5" y="11" width="1" height="4" rx="0.5" fill="white" opacity="0.6" />
      <rect x="9.5" y="13" width="5" height="1" rx="0.5" fill="white" opacity="0.6" />
    </svg>
  )
}