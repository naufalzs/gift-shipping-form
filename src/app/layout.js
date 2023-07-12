import './globals.sass'
import { Poppins, Roboto } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500' ,'700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

const roboto = Roboto({
  weight: ['300'],
  subsets: ['latin'],
  variable: '--font-roboto'
})

export const metadata = {
  title: 'Gift Shipping Form',
  description: 'Gift shipping form is pilot multiple step form project which used to collect necessary data for shipping in gift order website. Tech used here are ReactJS, Sass, and Context API.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable}`}>{children}</body>
    </html>
  )
}
