export const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const site = {
  name: "Cantina Bella",
  tagline: "Cozinha italiana · desde 1998",
  phoneDisplay: "(11) 3814-7702",
  whatsapp: "5511938147702",
  email: "reservas@cantinabella.com.br",
  address: "Rua Harmonia, 342 — Vila Madalena, São Paulo/SP",
  mapsUrl: "https://maps.google.com/?q=Rua+Harmonia+342+Vila+Madalena+Sao+Paulo",
  hours: [
    { day: "Terça a quinta", time: "18h — 23h" },
    { day: "Sexta e sábado", time: "18h — 00h" },
    { day: "Domingo", time: "12h — 17h" },
    { day: "Segunda", time: "Fechado" },
  ],
};

export function waLink(message) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "#casa", label: "A casa" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#ambiente", label: "Ambiente" },
  { href: "#reservas", label: "Reservas" },
];
