import TopNav from '@/components/TopNav/TopNav'
import Footer from '@/components/Footer/Footer'
import styles from './layout.module.css'
// import type { Metadata } from 'next'
// export const metadata: Metadata = {
//     title: 'Create Next App',
//     description: 'Generated by create next app',
// }


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // const = useContext
    return (
        <>
            <TopNav />
            <main className={`${styles.main} min-h-screen`}>
                {children}
            </main>
            <Footer />

        </>
    )
}
