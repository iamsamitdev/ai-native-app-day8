import Navbar from "@/app/(landing)/Navbar"
import Footer from "@/app/(landing)/Footer"
import Hero from "@/app/(landing)/Hero"
import Features from "@/app/(landing)/Features"
import About from "@/app/(landing)/About"
import Team from "@/app/(landing)/Team"
import TechStack from "@/app/(landing)/TechStack"
import Testimonial from "@/app/(landing)/Testimonial"
import LeadForm from "@/app/(landing)/LeadForm"

import ChatButton from "@/components/chat/ChatButton"

export default function HomePage() {
  return (
    <>
        <Navbar />
        <Hero />
        <Features />
        <About />
        <Team />
        <TechStack />
        <Testimonial />
        <LeadForm />
        <Footer />
        <ChatButton />
    </>
  )
}