import Image from "next/image";
import Header from "@/app/Header";
import Hero from "@/app/Hero";
import About from "@/app/About";
import Projects from "@/app/Projects";
import Contact from "@/app/Contact";

export default function Home() {
    return (
        <div>
            <Header/>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <Hero/>
                <About/>
                <Projects/>
                <Contact/>

            </main>
        </div>
    );
}
