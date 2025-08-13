export interface Service {
    id: string;
    title: string;
    description: string;
    image: string;
    focus?: "top-center" | "center-left" | "center-right" | "bottom-center" | "bottom-left" | "bottom-right";
}

export const services: Service[] = [
    {
        id: "gartenpflege",
        title: "Gartenpflege",
        description:
            "Regelmäßige Pflege, Rasenmähen, Heckenschnitt und saisonale Bepflanzungen – damit Ihr Garten das ganze Jahr in Topform bleibt.",
        image: `${process.env.PUBLIC_URL}/services/gartenpflege.jpg`,
        focus: "bottom-left",
    },
    {
        id: "gartengestaltung",
        title: "Gartengestaltung",
        description: "Von der Planung bis zur Umsetzung – wir gestalten Ihren Traumgarten nach Ihren Vorstellungen.",
        image: `${process.env.PUBLIC_URL}/services/gartengestaltung.jpg`,
        focus: "bottom-left",
    },
    {
        id: "terrassenbau",
        title: "Terrassen- & Wegebau",
        description: "Individuelle Terrassen, Gartenwege und Einfahrten – fachgerecht und langlebig gebaut.",
        image: `${process.env.PUBLIC_URL}/services/terrassenbau.jpg`,
        focus: "bottom-left",
    },
    {
        id: "teichbau",
        title: "Teich- & Wasseranlagen",
        description: "Romantische Teiche, Bachläufe und Springbrunnen – für ein einzigartiges Ambiente.",
        image: `${process.env.PUBLIC_URL}/services/teichbau.jpg`,
        focus: "bottom-left",
    },
];
