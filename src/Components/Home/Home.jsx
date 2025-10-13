import React from 'react'
import HeroSlider from '../HeroSlider/HeroSlider'
import SelectBodyStyle from '../SelectBodyStyle/SelectBodyStyle'
import PlanYourTrip from '../PlanYourTrip/PlanYourTrip'
import MostSearchedCars from '../MostSearchedCars/MostSearchedCars'
import RecommendedeCars from '../RecommendedeCars/RecommendedeCars'
import GetStartSection from '../GetStartSection/GetStartSection'
import BookRideSection from '../BookRideSection/BookRideSection'
import FAQSection from '../FAQSection/FAQSection'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import { Title, Meta, Link as HeadLink } from "react-head"; // ✅ صح هنا


export default function Home() {
  return <>

{/* العنوان */}
      <Title>الجوكر لتأجير السيارات في دبي | Al Joker Car Rental Dubai</Title>

      {/* الوصف والكلمات المفتاحية */}
      <Meta
        name="description"
        content="الجوكر لتأجير السيارات في دبي يوفر أفخم السيارات الرياضية والفاخرة مثل لامبورجيني، فيراري، رولز رويس وبنتلي بأسعار منافسة وخدمة راقية. احجز الآن بأفضل تجربة قيادة في دبي. | Al Joker Car Rental Dubai offers luxury and sports cars such as Lamborghini, Ferrari, Rolls-Royce, and Bentley at competitive prices with premium service. Book your dream car today!"
      />
      <Meta
        name="keywords"
        content="تأجير سيارات دبي, ايجار سيارات دبي, تأجير سيارات فاخرة دبي, ايجار لامبورجيني دبي, ايجار فيراري دبي, تأجير رولز رويس دبي, ايجار بنتلي دبي, سيارات رياضية للايجار دبي, سيارات اقتصادية دبي, تأجير سيارات مطار دبي, تأجير سيارات شهرية دبي, Al Joker Car Rental Dubai, Rent a car Dubai, Luxury car rental Dubai, Sports car hire Dubai, Lamborghini rent Dubai, Ferrari rent Dubai, Rolls Royce rental Dubai, Bentley rental Dubai, Dubai airport car rental, Monthly car rental Dubai"
      />

      {/* Open Graph */}
      <Meta property="og:title" content="الجوكر لتأجير السيارات في دبي | Al Joker Car Rental Dubai" />
      <Meta
        property="og:description"
        content="أفخم السيارات الرياضية والفاخرة للإيجار في دبي. احجز لامبورجيني، فيراري، رولز رويس وبنتلي مع معرض الجوكر."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://jokercarrentaldubai.com/" />
      <Meta property="og:image" content="https://yourdomain.com/images/joker-cars.jpg" />

      {/* Twitter Card */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="الجوكر لتأجير السيارات في دبي | Al Joker Car Rental Dubai" />
      <Meta
        name="twitter:description"
        content="الجوكر لتأجير السيارات في دبي يقدم لامبورجيني، فيراري، رولز رويس وبنتلي بأسعار مذهلة وخدمة راقية."
      />
      <Meta name="twitter:image" content="https://yourdomain.com/images/joker-cars.jpg" />

      {/* Canonical Link */}
      <HeadLink rel="canonical" href="https://jokercarrentaldubai.com/" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CarRental",
            "name": "الجوكر لتأجير السيارات في دبي",
            "alternateName": "Al Joker Car Rental Dubai",
            "url": "https://jokercarrentaldubai.com/",
            "logo": "https://yourdomain.com/images/joker-logo.png",
            "image": "https://yourdomain.com/images/joker-cars.jpg",
            "description":
              "الجوكر لتأجير السيارات في دبي يقدم أفخم السيارات الرياضية والفاخرة مثل لامبورجيني، فيراري، رولز رويس وبنتلي بأسعار مذهلة مع خدمة التوصيل والدفع المرن.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Al Khabeesi Building, Office No. M5-189, Deira",
              "addressLocality": "Dubai",
              "addressRegion": "Dubai",
              "postalCode": "00000",
              "addressCountry": "AE",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "25.262903213500977",
              "longitude": "55.3350944519043",
            },
            "telephone": "‪+97142236476‬",
            "priceRange": "AED 300 - AED 4000",
            "openingHours": "Mo-Su 08:00-23:00",
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61578290960070",
              "https://www.instagram.com/eljokerdrivedubai/?next=%2F",
              "https://www.tiktok.com/@eljoker.drive?_t=ZS-8zyEPuwv5vD&_r=1",
              "https://www.snapchat.com/add/eljoker.drive?share_id=kgf13llUJ7E&locale=ar-EG",
              "https://www.google.com/maps?q=25.262903213500977,55.3350944519043&z=17&hl=ar",
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "عروض السيارات المتاحة",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Car",
                    "name": "Lamborghini Huracan",
                    "brand": "Lamborghini",
                  },
                  "priceCurrency": "AED",
                  "price": "2500",
                  "availability": "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Car",
                    "name": "Ferrari 488 Spider",
                    "brand": "Ferrari",
                  },
                  "priceCurrency": "AED",
                  "price": "3000",
                  "availability": "https://schema.org/InStock",
                },
              ],
            },
          }),
        }}
      />
  
 {/* comment */}
<div className=' overflow-x-hidden'>
    <Nav/>
  <HeroSlider/>
  {/* <SelectBodyStyle/> */}
 <div className=' my-12'>
   <PlanYourTrip/>
 </div>
 <div className=' my-12'>
  <MostSearchedCars/>
  </div>
  <GetStartSection/>
  {/* <RecommendedeCars/> */}
  <BookRideSection/>
  <FAQSection/>
  <Footer/>
</div>
  </>
}
