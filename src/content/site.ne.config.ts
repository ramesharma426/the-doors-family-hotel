import { SITE } from './site.config';

// Nepali-language counterpart of SITE, served at /ne. Copy is adapted for
// natural Nepali phrasing rather than translated word-for-word; the
// business/product/brand names throughout the menu are kept in English/Latin
// script since translating them would blur brand recognition. Business facts
// (phone, address, socials, map links) are reused as-is from SITE — they
// don't change by language.
export const SITE_NE = {
  title:
    "द डोर्स फ्यामिली होटल — हेटौंडा | लाइभ सङ्गीत, आरामदायी कटेजहरू, खाना र बार",
  description:
    "द डोर्स फ्यामिली होटल, हेटौंडा — हरेक साताअन्तमा लाइभ सङ्गीत हुने रक 'एन्' रोल थिमको गार्डेन रेस्टुरेन्ट, आरामदायी कटेजहरू, खुला हावामा डाइनिङ, ठूलो स्क्रिनमा म्याच नाइट, र पूर्ण खाना तथा बार मेनु सहित। हेटौंडा-५, रङ्गा मार्ग। फोन गर्नुहोस् ९८६४६७१४८२।",
  keywords:
    "द डोर्स फ्यामिली होटल, हेटौंडा रेस्टुरेन्ट, रक एन्ड रोल थिम रेस्टुरेन्ट नेपाल, हेटौंडा लाइभ सङ्गीत भेन्यु, हेटौंडा गार्डेन रेस्टुरेन्ट, हेटौंडा कटेज डाइनिङ, हेटौंडा बार एन्ड ग्रिल, हेटौंडा बार, हेटौंडा बिग स्क्रिन म्याच नाइट",
  canonical: 'https://thedoorsfamily.com.np/ne',
  alternateEn: SITE.canonical,
  themeColor: SITE.themeColor,
  geo: SITE.geo,
  og: {
    title:
      "द डोर्स फ्यामिली होटल — हेटौंडा | लाइभ सङ्गीत, आरामदायी कटेजहरू, खाना र बार",
    description:
      "हरेक साताअन्तमा लाइभ सङ्गीत हुने रक 'एन्' रोल थिमको गार्डेन रेस्टुरेन्ट — आरामदायी कटेजहरू, खुला हावामा डाइनिङ, ठूलो स्क्रिनमा म्याच नाइट, र पूर्ण खाना तथा बार मेनु सहित, हेटौंडामा।",
    image: SITE.og.image,
  },
  twitter: {
    title: 'द डोर्स फ्यामिली होटल — हेटौंडा',
    description:
      'लाइभ सङ्गीत, आरामदायी कटेजहरू, खुला हावामा डाइनिङ, र पूर्ण खाना तथा बार मेनु। हेटौंडा-५, रङ्गा मार्ग।',
    image: SITE.twitter.image,
  },
  jsonLd: {
    ...SITE.jsonLd,
    inLanguage: 'ne',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'लाइभ सङ्गीत' },
      { '@type': 'LocationFeatureSpecification', name: 'खुला हावामा बस्ने ठाउँ' },
      { '@type': 'LocationFeatureSpecification', name: 'पार्किङ' },
      { '@type': 'LocationFeatureSpecification', name: 'कटेजहरू' },
    ],
  },
  jsonLdRaw: `{
  "@context": "https://schema.org",
  "@type": ["Restaurant", "BarOrPub"],
  "name": "The Door's Family Hotel",
  "image": "https://thedoorsfamily.com.np/assets/img/garden_evening.jpg",
  "url": "https://thedoorsfamily.com.np/",
  "inLanguage": "ne",
  "telephone": "+977-9864671482",
  "servesCuisine": ["Nepali", "Continental", "Bar & Grill"],
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ranga Marg, Ward 5",
    "addressLocality": "Hetauda",
    "postalCode": "44100",
    "addressCountry": "NP"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 27.4175402,
    "longitude": 85.0443936
  },
  "hasMap": "https://www.google.com/maps/place/THE+DOOR'S+FAMILY+HOTEL/@27.4175072,85.0443358,20.93z/data=!4m6!3m5!1s0x39eb49602e945b3b:0x15b090b920ce9c3d!8m2!3d27.4175402!4d85.0443936!16s%2Fg%2F11p13j2p6m",
  "sameAs": [
    "https://www.facebook.com/share/1Dozy64Mpo/?mibextid=wwXIfr",
    "https://www.instagram.com/thedoorsfamilyhotel/",
    "https://www.tiktok.com/@the_doors_family_hotel"
  ],
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "लाइभ सङ्गीत" },
    { "@type": "LocationFeatureSpecification", "name": "खुला हावामा बस्ने ठाउँ" },
    { "@type": "LocationFeatureSpecification", "name": "पार्किङ" },
    { "@type": "LocationFeatureSpecification", "name": "कटेजहरू" }
  ]
}`,
  contact: SITE.contact,
  social: SITE.social,
  // A Nepali line matching the spirit of the English hero quote (a Doors/
  // "Alabama Song" lyric) rather than a literal translation — "whiskey bar"
  // kept as the Nepali-script rendering of the English term, not translated.
  heroQuote: '&ldquo;अर्को ह्विस्की बारको बाटो देखाइदेऊ&rdquo;',
  footerCopy: SITE.footerCopy,
  assetVersion: SITE.assetVersion,
};
