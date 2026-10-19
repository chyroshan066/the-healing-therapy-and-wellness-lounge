import { Gallery } from "@/components/Gallery/Gallery";
import { Indicator } from "@/components/Indicator/Indicator";
import { Intro } from "@/components/Intro/Intro";
import { Offer } from "@/components/Offer/Offer";
import { ParallaxImage } from "@/components/ParallaxImage/ParallaxImage";
import { Services } from "@/components/Services/Services";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { baseURL } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - The Healing Therapy & Wellness Lounge | Best Spa in Jhapa, Birtamode, Dhulabari",
    description: "Discover The Healing Therapy & Wellness Lounge, the best spa in Jhapa with 3 branches in Birtamode, and Dhulabari. Learn about our expert therapists, traditional healing treatments, and commitment to wellness in Nepal.",
    keywords: [
        "about The Healing Therapy & Wellness Lounge",
        "best spa in Jhapa",
        "spa in Birtamode about",
        "spa in Dhulabari about",
        // "spa in Panitanki about",
        "expert massage therapists Jhapa",
        "professional spa team Birtamode",
        "certified therapists Dhulabari",
        "experienced massage therapists Nepal",
        "spa specialists Jhapa",
        "wellness experts Birtamode",
        "Thai massage specialists Jhapa",
        "sports therapy experts Nepal",
        "hot stone therapy professionals",
        "pain relief specialists Birtamode",
        "therapeutic massage experts Dhulabari",
        "spa mission Jhapa",
        "wellness commitment Nepal",
        "best spa services Birtamode",
        "trusted spa Dhulabari",
        "premium spa experience Jhapa",
        "professional wellness center",
        "spa branches Jhapa Nepal",
        "multi-location spa Birtamode",
        // "spa locations Dhulabari Panitanki",
        "Eastern Nepal spa services",
        // "India Nepal border spa",
        "The Healing Therapy & Wellness Lounge team"
    ],
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About The Healing Therapy & Wellness Lounge - Best Spa in Jhapa, Birtamode & Dhulabari",
        description: "Meet our expert team at the best spa in Jhapa. The Healing Therapy & Wellness Lounge offers authentic wellness treatments across Birtamode, and Dhulabari with certified therapists and traditional healing methods.",
        url: `${baseURL}/about`,
        images: [
            {
                url: `${baseURL}/images/preview.webp`,
                width: 1200,
                height: 630,
                alt: "About The Healing Therapy & Wellness Lounge - Best Spa Team in Jhapa, Nepal",
            }
        ],
    },
};

export default function About() {
    return <>
        <ParallaxImage page="About" />
        <Intro />
        <Offer />
        <Services />
        <Testimonials />
        <Indicator />
        <Gallery />
    </>;
}