import {
  BellIcon,
  BookIcon,
  BotIcon,
} from "lucide-react"
import { Logo } from "~/components/common/logo"

export const AuthBanner = () => {
  return (
    <header className="hidden lg:max-w-lg xl:max-w-2xl 
    w-full h-full lg:flex flex-col justify-between
    bg-foreground rounded-2xl p-10">
      <section className="flex flex-col gap-y-12">
        <h1 className="font-Adamina text-5xl font-bold text-background leading-relaxed">
          Empowring your information management
          with AI-driven bot
        </h1>
        <ul className="flex flex-col gap-y-8 text-background">
          {introduction.map((item, index) => (
            <li 
              className="flex flex-col gap-2"
              key={index}
            >
              <div className="flex items-center gap-2">
                <item.icon className="w-6 h-6" />
                <p className="text-xl font-bold">{item.title}</p>
              </div>
              <p className="text-sm">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col gap-y-2">
        <Logo className="text-background" />
        <p className="text-sm text-muted-foreground">Developed by Puggo</p>
      </section>
    </header>
  )
}

const introduction = [
  {
    icon: BookIcon,
    title: "Never miss a thing",
    description: "Summarize group information into structured documents with ease",
  },
  {
    icon: BellIcon,
    title: "Always on time",
    description: "Get notified when important information is posted",
  },
  {
    icon: BotIcon,
    title: "AI does it all",
    description: "Send AI instructions and let it do the rest",
  }
]
