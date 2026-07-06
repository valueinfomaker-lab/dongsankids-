import { siteConfig } from "@/data/site";

const schema = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.jpg`,
  image: `${siteConfig.url}/images/og-image.jpg`,
  telephone: "+82-2-866-6571",
  address: {
    "@type": "PostalAddress",
    addressRegion: "서울특별시",
    addressLocality: "금천구",
    streetAddress: "시흥대로 152길 35",
    addressCountry: "KR",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:30",
    closes: "19:30",
  },
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
