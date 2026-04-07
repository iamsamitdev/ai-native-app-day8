import { Metadata } from "next"
import LeadContent from "@/app/(main)/management/lead/LeadContent"

export const metadata: Metadata = {
    title: "Leads",
    description:
        "แดชบอร์ด AI Native App — ศูนย์กลางการจัดการลีด AI ครบวงจร ดูสถิติการใช้งาน, จัดการ Knowledge Base, AI Chat และตั้งค่าระบบทั้งหมดได้ในที่เดียว",
    keywords: [
        "Leads",
        "ลีด",
        "AI Native App",
        "ศูนย์กลางการจัดการ",
        "Knowledge Base",
        "AI Chat",
        "สถิติการใช้งาน",
        "ระบบจัดการ AI",
    ],
}

export default function LeadPage() {
  return <LeadContent />
}
