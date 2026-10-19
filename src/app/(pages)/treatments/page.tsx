import { ParallaxImage } from "@/components/ParallaxImage/ParallaxImage";
import { Treatments } from "@/components/Treatments/Treatments";
import { baseURL } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Treatments - Warrior Thai, Hot Stone, Sports Massage | Best Spa in Jhapa, Birtamode, Dhulabari",
    description: "Explore premium spa treatments at The Healing Therapy & Wellness Lounge. Offering Warrior Thai, Sports Massage, Hot Stone Therapy, Pain Potli, Swedish, Aromatherapy & D-Stress across Jhapa, Birtamode, & Dhulabari.",
    keywords: [
        "spa treatments Jhapa",
        "massage treatments Birtamode",
        "spa services Dhulabari",
        // "massage therapy Panitanki",
        "best spa treatments Jhapa",
        "Warrior Thai massage Jhapa",
        "Thai massage Birtamode",
        "hot stone therapy Jhapa",
        "hot stone massage Dhulabari",
        "sports massage Jhapa",
        "sports therapy Birtamode",
        "pain potli treatment Jhapa",
        "pain potli Dhulabari",
        "Swedish massage Jhapa",
        "Swedish therapy Birtamode",
        "aromatherapy Jhapa",
        "aromatherapy massage Dhulabari",
        "D-stress therapy Jhapa",
        "stress relief massage Birtamode",
        "therapeutic massage Jhapa",
        "relaxation massage Birtamode",
        "pain relief therapy Dhulabari",
        "deep tissue massage Jhapa",
        "traditional massage Nepal",
        "herbal therapy Birtamode",
        "spa treatment menu Jhapa",
        "massage services Birtamode",
        "wellness treatments Dhulabari",
        "best massage Jhapa Nepal",
        "professional spa services",
        "The Healing Therapy treatments",
        "premium spa therapy Jhapa"
    ],
    alternates: {
        canonical: "/treatments",
    },
    openGraph: {
        title: "Spa Treatments - Warrior Thai, Hot Stone & More | Best Spa in Jhapa",
        description: "Discover 7 premium spa treatments at The Healing Therapy & Wellness Lounge. From Warrior Thai to Pain Potli, experience authentic healing in Birtamode, and Dhulabari,.",
        url: `${baseURL}/treatments`,
        images: [
            {
                url: `${baseURL}/images/preview.webp`,
                width: 1200,
                height: 630,
                alt: "Spa Treatments - Warrior Thai, Hot Stone, Sports Massage in Jhapa, Nepal",
            }
        ],
    },
};

export default function TreatmentPage() {
    return <>
        <ParallaxImage page="Treatments" />
        <Treatments />
    </>;
}