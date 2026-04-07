"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { signOut } from "@/lib/auth-client"

export function SignOutButton() {
    
    const router = useRouter()

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={async () => {
                await signOut()
                router.push("/auth/signin")
            }}
            className="gap-2"
        >
            <LogOut className="h-4 w-4" />
            ออกจากระบบ
        </Button>
    )
}