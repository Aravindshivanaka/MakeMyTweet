import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Make My Tweet",
  description: "Read our privacy policy to understand how Make My Tweet protects your data using client-side image creation.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy - Make My Tweet",
    description: "Read our privacy policy to understand how Make My Tweet protects your data using client-side image creation.",
    url: "/privacy-policy",
  },
};

interface PolicySection {
  title: string;
  paragraphs: string[];
}

const POLICY_SECTIONS: PolicySection[] = [
  {
    title: "1. Introduction",
    paragraphs: [
      "Make My Tweet is a browser-based Twitter/X Screenshot Generator designed to help users create realistic tweet mockups directly in their web browser. We are highly committed to protecting user privacy.",
      "This Privacy Policy explains what information we collect, what we do not collect, and how your data is processed when you use our website at https://www.makemytweet.com."
    ]
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "When you visit and interact with Make My Tweet, we may collect minimal technical information to maintain site operations. This includes browser information (such as browser type and version), device information (such as device type and operating system), general usage analytics (such as pages visited and time spent on the site), and cookies. Nothing more."
    ]
  },
  {
    title: "3. Information We Do NOT Collect",
    paragraphs: [
      "We operate under a strict privacy-first framework. We do not require or collect the following:",
      "• We do not require user accounts.",
      "• We do not require login.",
      "• We do not intentionally store tweet content.",
      "• We do not intentionally store uploaded images.",
      "• We do not collect payment information.",
      "• We do not require subscriptions."
    ]
  },
  {
    title: "4. Local Browser Processing",
    paragraphs: [
      "The core functionality of Make My Tweet operates client-side. This means that:",
      "• Any tweet content you input is processed locally inside your browser.",
      "• Any uploaded profile pictures or custom backgrounds are processed locally inside your browser.",
      "• All generated screenshots are created and exported locally on your device.",
      "Our website's editor and export functionality do not intentionally upload, transfer, or store your tweet content or uploaded images on Make My Tweet servers."
    ]
  },
  {
    title: "5. Browser Local Storage",
    paragraphs: [
      "We may use standard browser Local Storage or Session Storage on your device. This storage is used exclusively to store user preferences, editor settings (such as text values or configuration options), and theme preferences (such as Light or Dark mode) to improve the user experience across visits.",
      "This information is saved locally on your device and is not sent to our servers."
    ]
  },
  {
    title: "6. Cookies",
    paragraphs: [
      "We use cookies to analyze site traffic, optimize website performance, and enhance user experience. A cookie is a small text file stored on your browser. You can manage or disable cookies through your browser settings, though doing so might affect how you interact with certain parts of our website."
    ]
  },
  {
    title: "7. Google Analytics",
    paragraphs: [
      "We use Google Analytics to collect anonymous usage analytics. This service helps us understand aggregate user behavior, visitor volume, and site performance. This data is collected anonymously and does not contain personal identification details."
    ]
  },
  {
    title: "8. Third-party Services",
    paragraphs: [
      "We use Google Analytics to analyze website usage and Vercel for website hosting. These third-party service providers may process technical data, such as IP addresses or server logs, in accordance with their respective privacy policies to ensure site availability, stability, and speed."
    ]
  },
  {
    title: "9. Data Security",
    paragraphs: [
      "We take reasonable security measures to protect the integrity of our website and keep server communication secure. However, please note that no method of transmission over the internet or electronic storage is absolutely secure, and we cannot guarantee absolute data security."
    ]
  },
  {
    title: "10. Children's Privacy",
    paragraphs: [
      "Our website does not collect personal information from any visitors, including children. We do not target our services to children under the age of 13, and our client-side architecture naturally prevents the gathering or storage of personal details from minors."
    ]
  },
  {
    title: "11. International Users",
    paragraphs: [
      "Make My Tweet is operated and hosted globally. Because we do not collect personal profiles, user accounts, or private databases, our operational practices minimize the storage and transfer of personal data across jurisdictions."
    ]
  },
  {
    title: "12. Changes to this Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated modification date. We encourage you to check this page periodically to stay informed about our privacy practices."
    ]
  },
  {
    title: "13. Contact Information",
    paragraphs: [
      "If you have any questions or feedback regarding this Privacy Policy or how your data is processed, you can contact us at support@makemytweet.com."
    ]
  },
  {
    title: "14. Independent Service Disclaimer",
    paragraphs: [
      "Make My Tweet is an independent service. It is NOT affiliated with, endorsed by, or sponsored by X Corp., Twitter, or any other social media platform. All logos, branding, and trademark assets shown belong entirely to their respective owners."
    ]
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-200">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="border-b border-[#1E2D4A] pb-8 mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Privacy <span className="text-[#1D6FEB]">Policy</span>
          </h1>
          <p className="text-muted-foreground text-sm font-medium">
            Last updated: July 3, 2026
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="flex flex-col gap-8">
          {POLICY_SECTIONS.map((section, idx) => (
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
