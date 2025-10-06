import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ShadcnPage() {
    return (
        <React.Fragment>
            <Head>
                <title>Shadcn UI - Nextron (with-tailwindcss)</title>
            </Head>
            <div className="container mx-auto p-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-2">Shadcn UI Components</h1>
                    <p className="text-lg text-muted-foreground">
                        Testing various Shadcn UI components with Tailwind CSS
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Buttons Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Buttons</CardTitle>
                            <CardDescription>Various button styles and states</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            <Button>Default</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="destructive">Destructive</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="link">Link</Button>
                        </CardContent>
                    </Card>

                    {/* Badges Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Badges</CardTitle>
                            <CardDescription>Different badge variants</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            <Badge>Default</Badge>
                            <Badge variant="secondary">Secondary</Badge>
                            <Badge variant="destructive">Destructive</Badge>
                            <Badge variant="outline">Outline</Badge>
                        </CardContent>
                    </Card>
                </div>

                {/* Form Section */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Form Example</CardTitle>
                        <CardDescription>Input fields with labels</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Enter your name" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Input id="message" placeholder="Enter your message" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Submit Form</Button>
                    </CardFooter>
                </Card>

                {/* Tabs Section */}
                <Card>
                    <CardHeader>
                        <CardTitle>Tabs</CardTitle>
                        <CardDescription>Interactive tab components</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="account" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="account">Account</TabsTrigger>
                                <TabsTrigger value="password">Password</TabsTrigger>
                                <TabsTrigger value="settings">Settings</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Account</CardTitle>
                                        <CardDescription>
                                            Make changes to your account here.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <div className="space-y-1">
                                            <Label htmlFor="username">Username</Label>
                                            <Input id="username" defaultValue="@username" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="password">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Password</CardTitle>
                                        <CardDescription>
                                            Change your password here.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <div className="space-y-1">
                                            <Label htmlFor="current">Current password</Label>
                                            <Input id="current" type="password" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="new">New password</Label>
                                            <Input id="new" type="password" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="settings">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Settings</CardTitle>
                                        <CardDescription>
                                            Configure your application settings.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Settings content goes here.</p>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>

                <div className="mt-8 w-full flex-wrap flex justify-center gap-4">
                    <Link href="/">
                        <Button variant="outline">Go to home page</Button>
                    </Link>
                    <Link href="/next">
                        <Button variant="outline">Go to next page</Button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}