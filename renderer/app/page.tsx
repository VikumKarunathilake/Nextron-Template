import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
    return (
        <React.Fragment>
            <Head>
                <title>Home - Nextron (with-tailwindcss)</title>
            </Head>
            
            <div className="container mx-auto p-8">
                <div className="grid grid-col-1 text-center mb-8">
                    <div className="mb-6">
                        <Image
                            className="ml-auto mr-auto"
                            src="/images/logo.png"
                            alt="Logo image"
                            width={256}
                            height={256}
                        />
                    </div>
                    
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold mb-4">
                                ⚡ Electron ⚡ + Next.js + TailwindCSS + Shadcn UI
                            </CardTitle>
                            <CardDescription className="text-xl">
                                = 💕 The Perfect Development Stack
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-center gap-2 mb-4">
                                <Badge variant="secondary">Electron</Badge>
                                <Badge variant="secondary">Next.js</Badge>
                                <Badge variant="secondary">TailwindCSS</Badge>
                                <Badge>Shadcn UI</Badge>
                            </div>
                            <p className="text-muted-foreground">
                                A modern desktop application built with cutting-edge technologies
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Next.js</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>The React framework for production</p>
                        </CardContent>
                    </Card>
                    
                    <Card>
                        <CardHeader>
                            <CardTitle>Tailwind CSS</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>A utility-first CSS framework</p>
                        </CardContent>
                    </Card>
                    
                    <Card>
                        <CardHeader>
                            <CardTitle>Shadcn UI</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Beautifully designed components</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="w-full flex-wrap flex justify-center gap-4">
                    <Link href="/next">
                        <Button>Go to next page</Button>
                    </Link>
                    <Link href="/shadcn">
                        <Button variant="outline">Test Shadcn UI</Button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}