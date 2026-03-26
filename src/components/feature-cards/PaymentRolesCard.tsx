import { ShieldCheck, ArrowUpRight, CheckCircle2, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PaymentRolesCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <ShieldCheck className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Безопасная сделка</h3>
      <p className="mb-4 text-sm text-gray-400">Деньги хранятся у нас до передачи аккаунта — ни продавец, ни покупатель не рискуют</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее о гарантиях <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <div className="space-y-2">
          {[
            "Покупатель оплачивает лот",
            "Продавец передаёт данные",
            "Покупатель проверяет аккаунт",
            "Деньги уходят продавцу",
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
              <CheckCircle2 className="h-4 w-4 text-violet-400 shrink-0" />
              <span className="text-sm text-white">{step}</span>
            </div>
          ))}
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Способ оплаты
          </label>
          <div className="flex items-center justify-between rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
            <span className="text-sm text-white">Банковская карта / СБП</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
          <p className="mt-1 text-xs text-gray-500">Мгновенное зачисление, защита транзакции.</p>
        </div>

        <Button className="w-full bg-[#252525] text-gray-400 hover:bg-[#2a2a2a] hover:text-white">Купить безопасно</Button>
      </div>
    </div>
  )
}
