import { 
    Home, 
    Settings, 
    Clock,
    Bell
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SidebarNav {
    name: string;
    icon: LucideIcon;
    url: string;
}

export const sidebarNavs: SidebarNav[] = [
    {
        name: '主页',
        icon: Home,
        url: '/'
    },
    {
        name: '定时任务',
        icon: Clock,
        url: '/schedules'
    },
    {
        name: '事件中心',
        icon: Bell,
        url: '/events'
    },
    {
        name: '设置',
        icon: Settings,
        url: '/settings'
    }
];