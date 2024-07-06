"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
    return (
        <section className='h-[100vh] flex items-center justify-center'>
            <div className="py-8 px-4 lg:py-16 lg:px-6">
                <div className="text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something&rsquo;s missing.</p>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page. </p>
                    <Button variant={'secondary'}
                        onClick={() => window.history.back()}
                    >
                        Go back
                    </Button>

                </div>
            </div>
        </section>
    )
}