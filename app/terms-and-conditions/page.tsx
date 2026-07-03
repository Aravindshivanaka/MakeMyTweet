import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions - Make My Tweet",
  description: "Read the Terms & Conditions for using the Make My Tweet mockup tool.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions - Make My Tweet",
    description: "Read the Terms & Conditions for using the Make My Tweet mockup tool.",
    url: "/terms-and-conditions",
  },
};

interface TermsSection {
  title: string;
  paragraphs: string[];
}

const TERMS_SECTIONS: TermsSection[] = [
  {
    title: "1. Introduction",
    paragraphs: [
      "Welcome to Make My Tweet (available at https://www.makemytweet.com). These Terms & Conditions govern your access to and use of our website and tool. By accessing or using our service, you agree to be bound by these Terms.",
      "If you do not agree to these Terms, you must immediately discontinue your use of the website."
    ]
  },
  {
    title: "2. Description of the Service",
    paragraphs: [
      "Make My Tweet is a browser-based design and content creation tool that allows users to create realistic Twitter/X-style screenshots directly within their web browser.",
      "Our service is designed to simplify and streamline design workflows for content creators, digital marketers, educators, design agencies, businesses, and UI/UX designers looking to build realistic tweet mockups."
    ]
  },
  {
    title: "3. Permitted Uses",
    paragraphs: [
      "Make My Tweet is intended to be used solely for lawful, legitimate, and constructive purposes. Permitted use cases include, but are not limited to:",
      "• Educational projects and learning exercises",
      "• Visual demonstrations and presentations",
      "• UI/UX design mockups and prototypes",
      "• Marketing campaigns and promotional concept designs",
      "• Social media content creation and graphic design"
    ]
  },
  {
    title: "4. Prohibited Uses",
    paragraphs: [
      "You are strictly prohibited from using Make My Tweet for any harmful, deceptive, or malicious activity. Prohibited uses include, but are not limited to, the creation of content for:",
      "• Fraud or identity impersonation",
      "• Harassment, defamation, or hate speech",
      "• Misinformation, fake news, or forgery",
      "• Phishing, scams, or other deceptive activities",
      "• Any other illegal or unethical activities",
      "• Violating the legal rights of any third party",
      "• Creating screenshots specifically intended to deceive, mislead, or harm others"
    ]
  },
  {
    title: "5. User Responsibility",
    paragraphs: [
      "You are solely and fully responsible for every screenshot you generate using Make My Tweet.",
      "You assume all responsibility and risk associated with how you publish, distribute, or otherwise use the generated content. Make My Tweet and its creators do not review, approve, monitor, or endorse any user-generated mockups."
    ]
  },
  {
    title: "6. No Affiliation",
    paragraphs: [
      "Make My Tweet is an independent service. It is NOT affiliated with, endorsed by, authorized by, or sponsored by X Corp., Twitter, or any other social media platform.",
      "Twitter and X are registered trademarks of their respective owners, and their appearance on this site is purely for mockup illustration and design demonstration purposes."
    ]
  },
  {
    title: "7. Intellectual Property",
    paragraphs: [
      "You retain ownership of the original text, ideas, and uploaded images you use to generate your mockups, subject to applicable laws and third-party rights.",
      "The Make My Tweet website, software, layout engine, branding, design, logos, graphics, and source code remain the exclusive intellectual property of Make My Tweet and its creators, protected by applicable copyright and trademark laws."
    ]
  },
  {
    title: "8. Availability of Service",
    paragraphs: [
      "We strive to keep Make My Tweet accessible and operational. However, we cannot guarantee uninterrupted, secure, error-free, or continuous availability of our service. Service maintenance, updates, or technical failures may occur without notice."
    ]
  },
  {
    title: "9. Disclaimer of Warranties",
    paragraphs: [
      "Make My Tweet is provided on an 'As Is' and 'As Available' basis, without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement, to the maximum extent permitted by law."
    ]
  },
  {
    title: "10. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, Make My Tweet and its creators shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, or any losses, claims, legal disputes, or negative consequences arising out of your use, misuse, or inability to use the service, or from any content generated on our website."
    ]
  },
  {
    title: "11. Indemnification",
    paragraphs: [
      "You agree to defend, indemnify, and hold harmless Make My Tweet and its creators from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees) resulting from or arising out of your misuse of our service or your violation of these Terms & Conditions."
    ]
  },
  {
    title: "12. Termination",
    paragraphs: [
      "We reserve the right, in our sole discretion, to restrict, suspend, or block access to our website or tool for any user who violates these Terms & Conditions, without prior notice or liability."
    ]
  },
  {
    title: "13. Changes to the Terms",
    paragraphs: [
      "We reserve the right to revise or update these Terms & Conditions at any time. Any changes will be posted directly to this page with an updated modification date. Your continued use of the website after any revisions constitutes your acceptance of the updated terms."
    ]
  },
  {
    title: "14. Governing Law",
    paragraphs: [
      "These Terms & Conditions and any disputes arising out of or related to the use of Make My Tweet shall be governed by and construed in accordance with the laws of the jurisdiction where the website operator resides, without regard to its conflict of law provisions."
    ]
  },
  {
    title: "15. Contact Information",
    paragraphs: [
      "If you have any questions, feedback, or concerns regarding these Terms & Conditions, please contact us at support@makemytweet.com."
    ]
  }
];

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-200">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="border-b border-[#1E2D4A] pb-8 mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Terms & <span className="text-[#1D6FEB]">Conditions</span>
          </h1>
          <p className="text-muted-foreground text-sm font-medium">
            Last updated: July 3, 2026
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="flex flex-col gap-8">
          {TERMS_SECTIONS.map((section, idx) => (
            <section
              key={idx}
              className="bg-panel-bg border border-[#1E2D4A] rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-[#1D6FEB]/40 hover:shadow-lg dark:hover:shadow-[#1D6FEB]/10"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                {section.title}
              </h2>
              <div className="flex flex-col gap-4">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
