import { useScrollSpy } from '../hooks'
import { Calendar, Heart, House, Images, MessageCircle } from './Icons'

const TABS = [
  { id: 'top', label: 'Home', icon: House },
  { id: 'programs', label: 'Programs', icon: Images },
  { id: 'events', label: 'Events', icon: Calendar },
  { id: 'donate', label: 'Give', icon: Heart },
  { id: 'contact', label: 'Contact', icon: MessageCircle },
]

// App-style bottom navigation, shown on phones (and in the installed app).
export default function TabBar() {
  const active = useScrollSpy()
  const current = active === 'about' ? 'top' : active === 'moments' ? 'programs' : active
  return (
    <nav className="tabbar" aria-label="Quick navigation">
      {TABS.map((t) => {
        const { id, label } = t
        const Icon = t.icon
        return (
        <a key={id} href={`#${id}`} className={current === id ? 'is-active' : ''} aria-current={current === id ? 'page' : undefined}>
          <Icon size={22} aria-hidden />
          <span>{label}</span>
        </a>
        )
      })}
    </nav>
  )
}
