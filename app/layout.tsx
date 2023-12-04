import '@radix-ui/themes/styles.css';
import './theme-config.css';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel } from '@radix-ui/themes';

const inter = Inter({ 
  subsets: ['latin'],  
  variable: '--font-inter',
 });

export const metadata: Metadata = {
  title: 'Issue Tracker',
  description: 'An application to track bugs and issues in projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme accentColor="grass" radius="large">
          <NavBar />
          <main className='p-5'>{children}</main>
          {/* <ThemePanel /> use this to pull up the theme panel menu*/} 
        </Theme>
      </body>
    </html>
  )
}
