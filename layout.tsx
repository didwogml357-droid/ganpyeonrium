import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: '간편리엄 | 일상을 간편하게', description: '귀찮음은 줄이고, 만족은 높이고. 생활을 편리하게 만드는 아이템 큐레이션' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ko"><body>{children}</body></html>; }
