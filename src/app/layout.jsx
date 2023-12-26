import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Navbar from '@/components/Utilities/Navbar';

const PJS = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'AwAnime',
  description: 'Website Anime Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${PJS.className} bg-color-secondary`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
