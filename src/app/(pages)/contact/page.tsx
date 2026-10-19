import { ParallaxImage } from "@/components/ParallaxImage/ParallaxImage";
import { Contact } from "./_components/Contact/Contact";
import { Metadata } from "next";
import { baseURL } from "@/constants";

export const metadata: Metadata = {
    title: "Contact Us - The Healing Therapy & Wellness Lounge | Book Appointment in Jhapa, Birtamode, Dhulabari",
    description: "Contact The Healing Therapy & Wellness Lounge for appointments. Visit our spa in Birtamode, or Dhulabari (Jhapa, Nepal). Call us for bookings: Birtamode 9701064228, Dhulabari 9704959230. Best spa in Jhapa.",
    keywords: [
        "contact Absolute Professional Spa",
        "spa contact Jhapa",
        "spa contact Birtamode",
        "spa contact Dhulabari",
        // "spa contact Panitanki",
        "book spa appointment Jhapa",
        "spa booking Birtamode",
        "massage appointment Dhulabari",
        // "spa reservation Panitanki",
        "book massage Jhapa Nepal",
        "spa appointment near me",
        "spa address Birtamode",
        "spa address Dhulabari",
        "spa location Jhapa",
        "spa phone number Birtamode",
        "spa contact number Dhulabari",
        // "spa directions Panitanki",
        "book Thai massage Jhapa",
        "hot stone appointment Birtamode",
        "sports massage booking Dhulabari",
        "pain potli appointment Nepal",
        "aromatherapy booking Jhapa",
        "best spa contact Jhapa",
        "best spa booking Birtamode",
        "best massage appointment Dhulabari",
        "contact best spa Nepal",
        "spa timing Jhapa",
        "spa hours Birtamode",
        "spa schedule Dhulabari",
        "The Healing Therapy & Wellness Lounge contact",
        "spa near me Jhapa Nepal"
    ],
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact The Healing Therapy & Wellness Lounge - Book Your Appointment in Jhapa",
        description: "Get in touch with the best spa in Jhapa. Book your appointment at our Birtamode, or Dhulabari locations. Call 9701064228 (Birtamode) or 9704959230 (Dhulabari) for premium spa services.",
        url: `${baseURL}/contact`,
        images: [
            {
                url: `${baseURL}/images/preview.webp`,
                width: 1200,
                height: 630,
                alt: "Contact The Healing Therapy & Wellness Lounge - Best Spa in Jhapa, Nepal",
            }
        ],
    },
};

export default function ContactPage() {
    return <>
        <ParallaxImage page="Contact Us" />
        <Contact />
    </>;
}