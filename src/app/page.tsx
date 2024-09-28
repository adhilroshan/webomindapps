import Header from "@/components/header";
import Hero from "@/components/hero";
import Gallery from "@/components/gallery";
import Blog from "@/components/blog";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
export default function Home() {

    return (
        <>
            <main className="flex overflow-hidden flex-col  bg-white">
                <Header />
                <Hero />
                <Gallery />
                <Blog />
                <section className="flex flex-col rounded-none  bg-slate-900">
                    <Banner
                        title="Leverage technology to streamline credit-linked insurance"
                        subtitle="Share a few quick details to understand how we can best help."
                    />
                    <Footer />
                </section>
            </main>
        </>
    );
}
