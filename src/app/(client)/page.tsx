import HeroSection from "@/components/HeroSection";
import PostPage from "@/components/PostPage";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section id="blog">
      <PostPage />
      </section>
    </div>
  );
}
