
import {{ Helmet }} from 'react-helmet-async';

const SitewideSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Eritage ENT Care",
    "description": "Expert Ear, Nose, and Throat (ENT) specialist services in Entebbe, Uganda. Over 10 years of clinical experience.",
    "url": "https://eritageentcare.com",
    "logo": "https://eritageentcare.com/logo.png",
    "image": "https://eritageentcare.com/images/og/default-og.png",
    "telephone": "+256740166778",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot 34, 48 Berkeley Road, Entebbe Road",
      "addressLocality": "Entebbe",
      "addressRegion": "Wakiso",
      "postalCode": "256",
      "addressCountry": "UG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "0.0451",
      "longitude": "32.4789"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/eritageentcare",
      "https://twitter.com/eritageentcare",
      "https://www.linkedin.com/company/eritage-ent-care"
    ],
    "hasMap": "https://www.google.com/maps/place/Eritage+ENT+Care/@0.0451,32.4789,17z/data=!3m1!4b1!4m5!3m4!1s0x177d8b7a68999999:0x16b74488f4b0f279!8m2!3d0.0451!4d32.4789",
    "priceRange": "UGX",
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://eritageentcare.com/bookings",
        "inLanguage": "en-US",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Book an ENT Appointment"
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SitewideSchema;
