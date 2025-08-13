// src/data/contact.ts
export interface ContactInfo {
    email: string;
    phone: string;
    address: string;
    instagramUrl: string;
}

export const contactInfo: ContactInfo = {
    email: "info@huelsmann-privatgarten.de",
    phone: "+49 123 456789",
    address: "Musterstraße 12, 12345 Musterstadt",
    instagramUrl: "https://www.instagram.com/huelsmann_privatgarten",
};

export type ContactTileType = "email" | "phone" | "address" | "instagram";

export interface ContactTile {
    type: ContactTileType;
    title: string;
    text: string;
    href?: string; // nur wenn klickbar
}

export const contactTiles: ContactTile[] = [
    {
        type: "email",
        title: "E-Mail",
        text: contactInfo.email,
        href: `mailto:${contactInfo.email}`,
    },
    {
        type: "phone",
        title: "Telefon",
        text: contactInfo.phone,
        href: `tel:${contactInfo.phone.replace(/\s+/g, "")}`,
    },
    {
        type: "address",
        title: "Adresse",
        text: contactInfo.address,
    },
    {
        type: "instagram",
        title: "Instagram",
        text: "@huelsmann_privatgarten",
        href: contactInfo.instagramUrl,
    },
];
