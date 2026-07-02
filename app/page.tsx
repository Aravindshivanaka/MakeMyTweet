import AppShell from "@/components/layout/AppShell";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="sr-only">
        <h1>Twitter Screenshot Generator & Fake Tweet Maker</h1>

        <section aria-labelledby="hero-heading">
          <h2 id="hero-heading">Create Realistic X (Twitter) Mockups in Seconds</h2>
          <p>
            Welcome to Make My Tweet, the ultimate premium tool for generating pixel-perfect Twitter screenshots. Whether you need a fake tweet generator for creative memes, or a professional X post generator for your marketing campaigns, our platform delivers unmatched fidelity.
          </p>
          <p>
            Start designing your mockup now with our <Link href="/">free tweet generator</Link> and experience the best-in-class layout accuracy.
          </p>
        </section>

        <section aria-labelledby="features-heading">
          <h2 id="features-heading">Key Features & Value Proposition</h2>
          <ul>
            <li><strong>High-Quality Export:</strong> Download high-resolution PNGs with absolutely no watermarks.</li>
            <li><strong>Advanced Customization:</strong> Add verified badges, custom organization logos, and toggle engagement metrics.</li>
            <li><strong>Multiple Formats:</strong> Export in square (1:1), landscape (16:9), and story (9:16) for seamless social sharing.</li>
            <li><strong>Theme Support:</strong> Perfectly replicated Dark Mode and Light Mode X designs with custom gradient backgrounds.</li>
          </ul>
        </section>

        <section aria-labelledby="trust-heading">
          <h3 id="trust-heading">Why Trust Make My Tweet?</h3>
          <p>
            Our tool ensures your data remains secure and private, as all image generation happens instantly within your browser. Built for marketers, creators, businesses, agencies, educators, and social media managers who need realistic Twitter/X screenshots for marketing, presentations, mockups, and content creation. Read our <Link href="/faq">frequently asked questions</Link> or view our transparent <Link href="/privacy-policy">privacy policy</Link> to learn how you can create authentic social media content safely.
          </p>
          <p>
            Need assistance? Visit our <Link href="/help">Help Center</Link> or <Link href="/contact">Contact Us</Link> for dedicated support. We value your input—share your thoughts on our <Link href="/feedback">Feedback</Link> page.
          </p>
        </section>
      </main>

      <AppShell />
    </>
  );
}
