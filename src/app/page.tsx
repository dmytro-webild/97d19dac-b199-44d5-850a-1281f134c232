"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Laptop, Shield, Sparkles, Tag } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmallSizeLargeTitles"
        background="circleGradient"
        cardStyle="outline"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Benefits",
          id: "#benefits",
        },
        {
          name: "Products",
          id: "#products",
        },
        {
          name: "Membership",
          id: "#membership",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="BJ's Wholesale Club"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitKpi
      background={{
        variant: "radial-gradient",
      }}
      imagePosition="right"
      title="Save Big, Live Better: Your Membership to Wholesale Value"
      description="Discover incredible savings on everything from groceries to electronics. BJ's Wholesale Club offers premium products at unbeatable bulk prices for members like you."
      kpis={[
        {
          value: "Thousands",
          label: "Products Available",
        },
        {
          value: "Save 25%+",
          label: "On Everyday Essentials",
        },
        {
          value: "100k+",
          label: "Happy Members",
        },
      ]}
      enableKpiAnimation={true}
      tagAnimation="none"
      buttons={[
        {
          text: "Join Now",
          href: "#membership",
        },
        {
          text: "Explore Products",
          href: "#products",
        },
      ]}
      buttonAnimation="none"
      imageSrc="http://img.b2bpic.net/free-photo/portrait-beautiful-young-asian-woman-with-grocery-basket-from-supermarket-yellow_74190-15699.jpg"
      imageAlt="Shopping cart full of groceries at BJ's Wholesale Club"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-young-woman-stylish-red-dress-holding-shopping-bags-smiling-buying-promo-offe_1258-174602.jpg",
          alt: "Happy woman avatar",
        },
        {
          src: "http://img.b2bpic.net/free-photo/positive-caucasian-business-male-taking-off-face-mask-virus-protection-show-his-smile-with-cheerful-get-well-fight-spread-covid-19-epidemic-health-ideas-concept_609648-1061.jpg",
          alt: "Smiling man avatar",
        },
        {
          src: "http://img.b2bpic.net/free-photo/adorable-lovely-woman-with-long-wavy-hair-wearing-blue-shirt-is-sitting-near-window-looking-away-with-romantic-view_291650-2328.jpg",
          alt: "Confident woman avatar",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cute-young-guy-glasses-smiling-showing-finger-hearts-standing-white-background_1258-171884.jpg",
          alt: "Content man avatar",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-trying-listening-some-sound_1187-3768.jpg",
          alt: "Happy customer avatar",
        },
      ]}
      avatarText="Join our 100K+ members!"
      marqueeItems={[
        {
          type: "text",
          text: "Fresh Groceries",
        },
        {
          type: "text-icon",
          text: "Latest Tech",
          icon: Laptop,
        },
        {
          type: "text",
          text: "Household Essentials",
        },
        {
          type: "text-icon",
          text: "Amazing Deals",
          icon: Sparkles,
        },
        {
          type: "text",
          text: "Bulk Savings",
        },
        {
          type: "text-icon",
          text: "Member Exclusive",
          icon: Shield,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="About BJ's Wholesale Club"
      description="BJ's Wholesale Club is a leading membership-based warehouse retailer. We empower families and businesses to save money through bulk purchasing, exclusive member discounts, and a broad selection of products. With convenient online shopping, in-club pickup, and same-day delivery, we make saving easy."
      metrics={[
        {
          value: "9011 Snowden River Parkway",
          title: "Columbia, MD 21046",
        },
        {
          value: "(410) 312-2700",
          title: "Call Our Club",
        },
        {
          value: "Open Daily",
          title: "Until 10:00 PM",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/selective-focus-shelves-full-with-boxes-ready-delivery_482257-77623.jpg"
      imageAlt="Wide, well-stocked aisle inside a BJ's Wholesale Club store"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="benefits" data-section="benefits">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      features={[
        {
          title: "Bulk Savings & Discounts",
          description: "Enjoy significant savings on everyday essentials and premium items when you buy in bulk with exclusive member pricing.",
          imageSrc: "http://img.b2bpic.net/free-photo/composition-food-string-bag-close-up-food-donations-concept-food-delivery-quarantine_169016-9670.jpg",
          imageAlt: "Large packages of bulk food items",
        },
        {
          title: "Online & In-Club Shopping",
          description: "Shop how you want, whether it's browsing our aisles in-store or ordering from the comfort of your home.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-brunette-woman-with-tablet_23-2148302136.jpg",
          imageAlt: "Person shopping online with a laptop",
        },
        {
          title: "Convenient Delivery & Pickup",
          description: "Benefit from same-day delivery options or contactless in-club pickup for a hassle-free shopping experience.",
          imageSrc: "http://img.b2bpic.net/free-photo/fast-delivery_1098-19714.jpg",
          imageAlt: "Grocery delivery truck",
        },
        {
          title: "Exclusive Member Deals",
          description: "Gain access to special member-only pricing and exclusive deals across all product categories.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-s-hand-with-shopping-card-blank-white-card_23-2147889029.jpg",
          imageAlt: "Member card with special deals",
        },
        {
          title: "Teacher Discount Programs",
          description: "Eligible groups, including teachers, can take advantage of special discount programs.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-female-painters-with-easel-holding-sale-banner-dark-wall_140725-144396.jpg",
          imageAlt: "Teacher holding books with discount icon",
        },
        {
          title: "One-Stop Shopping",
          description: "Find everything you need under one roof, from groceries and electronics to home goods and tires.",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-storehouse-space-with-cardboard-boxes-shelves-racks-shelving-merchandise-before-shipping-it-clients-warehouse-filled-with-supplies-packages-wholesale-management_482257-62656.jpg",
          imageAlt: "Diverse products in a shopping cart",
        },
      ]}
      title="Unlock Unbeatable Value"
      description="Experience the ultimate convenience and savings with a BJ's Wholesale Club membership. We're dedicated to providing exceptional value and a seamless shopping experience."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "prod-1",
          name: "Groceries & Pantry",
          price: "Member Price",
          variant: "Bulk & Fresh",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-preserved-food-jars_23-2149238966.jpg",
          imageAlt: "Fresh produce and packaged groceries",
        },
        {
          id: "prod-2",
          name: "Household Essentials",
          price: "Member Price",
          variant: "Cleaning & Paper",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-eco-friendly-cleaning-brushes-with-baking-soda-lemon_23-2148818475.jpg",
          imageAlt: "Household cleaning supplies",
        },
        {
          id: "prod-3",
          name: "TVs & Electronics",
          price: "Member Price",
          variant: "Latest Tech",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-office-desk-composition-with-technological-device_23-2147916742.jpg",
          imageAlt: "Large screen television display",
        },
        {
          id: "prod-4",
          name: "Furniture & Home",
          price: "Member Price",
          variant: "Decor & Office",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-arrangement-modern-vases_23-2149646535.jpg",
          imageAlt: "Modern living room furniture",
        },
        {
          id: "prod-5",
          name: "Tires & Automotive",
          price: "Member Price",
          variant: "Service & Parts",
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-fixing-car-tyre_1170-1653.jpg",
          imageAlt: "New car tires stacked",
        },
        {
          id: "prod-6",
          name: "Personal Care & Health",
          price: "Member Price",
          variant: "Wellness & Beauty",
          imageSrc: "http://img.b2bpic.net/free-photo/rose-products-brush-spa-treatment-concept_23-2148645522.jpg",
          imageAlt: "Variety of personal care products",
        },
      ]}
      title="Explore Our Product Categories"
      description="From daily essentials to the latest electronics, BJ's Wholesale Club offers an expansive selection to meet all your needs. Discover quality products at wholesale prices."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "metric-1",
          value: "25%+",
          title: "Average Savings",
          description: "Members save significantly on their weekly shop compared to traditional supermarkets.",
          imageSrc: "http://img.b2bpic.net/free-photo/currency-change-piles-coins_23-2148305966.jpg",
          imageAlt: "Money savings",
        },
        {
          id: "metric-2",
          value: "100K+",
          title: "Active Members",
          description: "A growing community trusts BJ's for their bulk shopping needs and exclusive deals.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-friends-embracing-looking-camera_1262-4706.jpg",
          imageAlt: "Diverse group of happy members",
        },
        {
          id: "metric-3",
          value: "Daily",
          title: "New Deals",
          description: "Fresh discounts and offers are available daily, ensuring consistent value.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-with-full-shopping-bags_329181-5069.jpg",
          imageAlt: "Shopping cart with discount tags",
        },
        {
          id: "metric-4",
          value: "1000s",
          title: "Products",
          description: "An extensive range of high-quality products across all categories.",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-little-girl-choosing-candy-supermarket_171337-2378.jpg",
          imageAlt: "Shelves filled with various products",
        },
      ]}
      title="Our Commitment to Value"
      description="At BJ's, we are driven by our mission to deliver exceptional savings and a superior shopping experience to our members."
    />
  </div>

  <div id="membership" data-section="membership">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          badge: "Essentials",
          badgeIcon: Tag,
          price: "BJ's Club Membership",
          subtitle: "Access to Member-Only Savings",
          buttons: [
            {
              text: "Join Now",
              href: "#contact",
            },
          ],
          features: [
            "Bulk savings on everyday essentials",
            "Exclusive member discounts",
            "Online shopping convenience",
            "In-club purchasing access",
          ],
        },
        {
          id: "premium",
          badge: "Premium",
          badgeIcon: Sparkles,
          price: "$65/year",
          subtitle: "Enhanced Rewards & Benefits",
          buttons: [
            {
              text: "Upgrade Now",
              href: "#contact",
            },
          ],
          features: [
            "All Club Membership benefits",
            "Additional rewards and savings",
            "Access to premium services",
            "Priority customer support",
          ],
        },
      ]}
      title="Choose Your Membership"
      description="Unlock exclusive savings and benefits with a BJ's Wholesale Club membership. Select the plan that best suits your shopping needs."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Coca-Cola",
        "Procter & Gamble",
        "Samsung",
        "Kellogg's",
        "Whirlpool",
        "Goodyear",
        "Kraft Heinz",
        "Fisher-Price",
      ]}
      title="Trusted Brands, Unbeatable Prices"
      description="We partner with leading brands to bring you high-quality products at wholesale value. Your favorite brands, for less."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah M.",
          date: "May 10, 2024",
          title: "Fantastic Savings",
          quote: "The Columbia BJ's is always well-organized and the staff are incredibly friendly. I always find great value on cleaning supplies and packaged foods!",
          tag: "Happy Shopper",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-blonde-confident-young-businesswoman-against-gray-background_23-2148029500.jpg",
          avatarAlt: "Sarah M. avatar",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-friends-having-fun-with-cart_23-2148984761.jpg",
          imageAlt: "Woman shopping in a grocery aisle",
        },
        {
          id: "2",
          name: "John D.",
          date: "April 22, 2024",
          title: "Great Variety",
          quote: "Compared to other warehouse clubs, BJ's offers a unique variety of products. The produce section is surprisingly good!",
          tag: "Loyal Member",
          avatarSrc: "http://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2579.jpg",
          avatarAlt: "John D. avatar",
          imageSrc: "http://img.b2bpic.net/free-photo/man-enjoying-food-while-being-home-alone-watching-tv_23-2149527979.jpg",
          imageAlt: "Man browsing electronics",
        },
        {
          id: "3",
          name: "Emily R.",
          date: "March 15, 2024",
          title: "Friendly & Efficient",
          quote: "The employees here are so efficient, especially at checkout. Makes my bulk shopping trips much more pleasant.",
          tag: "Smooth Experience",
          avatarSrc: "http://img.b2bpic.net/free-photo/pretty-attractive-young-mixed-race-model-with-large-afro-wearing-navy-jacket-her-naked-body-shorts_633478-1216.jpg",
          avatarAlt: "Emily R. avatar",
          imageSrc: "http://img.b2bpic.net/free-photo/man-woman-with-medical-masks-out-grocery-shopping-with-shopping-cart_23-2149483148.jpg",
          imageAlt: "Cashier helping a customer",
        },
        {
          id: "4",
          name: "David K.",
          date: "February 28, 2024",
          title: "Unbeatable Value",
          quote: "I consistently save on dairy products and personal care items. It's a key part of our family's budget strategy.",
          tag: "Budget Saver",
          avatarSrc: "http://img.b2bpic.net/free-photo/pretty-female-smiling_1187-4949.jpg",
          avatarAlt: "David K. avatar",
          imageSrc: "http://img.b2bpic.net/free-photo/family-supermarket-woman-protective-mask-people-choose-vegetables-mother-with-daughter-coronavirus_1157-43993.jpg",
          imageAlt: "Family shopping for groceries",
        },
        {
          id: "5",
          name: "Maria P.",
          date: "January 19, 2024",
          title: "Always Well-Stocked",
          quote: "I love how easy it is to navigate the store. Even when busy, they keep everything tidy and well-stocked.",
          tag: "Organized Store",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-adult-having-great-time-with-friends_23-2149286534.jpg",
          avatarAlt: "Maria P. avatar",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-taking-care-warehouse-logistics_23-2149128296.jpg",
          imageAlt: "Well-stocked store aisle",
        },
      ]}
      title="What Our Members Say"
      description="Our Columbia location consistently receives high praise for its organization, friendly staff, and exceptional value."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",
          title: "What is BJ's Wholesale Club?",
          content: "BJ's Wholesale Club is a membership-based warehouse retailer offering a wide range of products including groceries, electronics, and household essentials at discounted bulk prices.",
        },
        {
          id: "faq-2",
          title: "How do I become a member?",
          content: "You can sign up for a membership online or in-club. Choose between our standard BJ's Club Membership or the premium BJ's Club+ Membership for extra benefits.",
        },
        {
          id: "faq-3",
          title: "Do you offer delivery services?",
          content: "Yes, we offer same-day delivery options and contactless in-club pickup services for your convenience.",
        },
        {
          id: "faq-4",
          title: "Can I shop online without a membership?",
          content: "Most member-exclusive deals and pricing require a membership for both online and in-club purchases.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about BJ's Wholesale Club memberships, shopping, and services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get in Touch"
      description="Have questions or need assistance? Reach out to our team at BJ's Wholesale Club in Columbia, MD. We are here to help you save big!"
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Phone Number (Optional)",
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your Message",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/building-with-colorful-walls_1127-2241.jpg"
      imageAlt="Exterior view of BJ's Wholesale Club"
      mediaAnimation="slide-up"
      mediaPosition="right"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",
              href: "#home",
            },
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Benefits",
              href: "#benefits",
            },
          ],
        },
        {
          items: [
            {
              label: "Products",
              href: "#products",
            },
            {
              label: "Membership",
              href: "#membership",
            },
            {
              label: "Feedback",
              href: "#testimonials",
            },
          ],
        },
        {
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "(410) 312-2700",
              href: "tel:+14103122700",
            },
            {
              label: "9011 Snowden River Parkway",
              href: "https://maps.app.goo.gl/example",
            },
            {
              label: "Columbia, MD 21046",
              href: "https://maps.app.goo.gl/example",
            },
          ],
        },
      ]}
      logoText="BJ's Wholesale Club"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
