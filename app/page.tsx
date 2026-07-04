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
            Make My Tweet is a free, browser-based Twitter screenshot generator. Create pixel-perfect X post mockups with custom profiles, verified badges, engagement metrics, and themes — then export as a clean PNG. No account required. No watermarks. Your content never leaves your device.
          </p>
          <p>
            Use it as a <Link href="/fake-tweet-generator">fake tweet generator</Link> for creative projects, a <Link href="/tweet-image-generator">tweet image generator</Link> for social content, or a <Link href="/twitter-screenshot-generator">Twitter screenshot tool</Link> for marketing and presentations. Start creating with the <Link href="/">free tweet generator</Link> now.
          </p>
        </section>

        <section aria-labelledby="features-heading">
          <h2 id="features-heading">Why Use This Over a Regular Screenshot</h2>
          <p>Screenshots break. They crop badly, show notifications, and look different on every device. Make My Tweet gives you a clean, controlled result every time.</p>
          <ul>
            <li><strong>Export sharp images, no cleanup needed:</strong> Download high-resolution PNGs with no watermarks. Ready to post, present, or publish as-is.</li>
            <li><strong>Control every detail:</strong> Edit the profile, verified badges, organization logos, and engagement metrics. Make the screenshot show exactly what you need.</li>
            <li><strong>Sized for any platform:</strong> Export in square (1:1), <Link href="/16-9-twitter-screenshot-generator">landscape (16:9)</Link>, or <Link href="/9-16-twitter-screenshot-generator">story (9:16)</Link>. Each layout fits where you need it without extra cropping.</li>
            <li><strong>Accurate light and dark themes:</strong> Switch between faithful X theme replicas and add custom gradient backgrounds to match your brand or content style.</li>
          </ul>
        </section>

        <section aria-labelledby="trust-heading">
          <h2 id="trust-heading">Built to Stay on Your Device</h2>
          <p>
            Make My Tweet runs entirely in your browser. Your tweet content, uploaded images, and exported files are never sent to a server. Nothing is stored, tracked, or logged. Read our <Link href="/privacy-policy">privacy policy</Link> for the full details, or check the <Link href="/faq">FAQ</Link> if you have questions about how it works.
          </p>
          <p>
            Something not working? Visit the <Link href="/help">Help Center</Link>, <Link href="/contact">get in touch</Link>, or share ideas on the <Link href="/feedback">Feedback</Link> page.
          </p>
        </section>
      </main>

      <AppShell />
    </>
  );
}
