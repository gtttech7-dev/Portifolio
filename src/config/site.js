export const siteConfig = {
  name: "Gabriel Tech",
  whatsapp: "5500000000000", // Troque pelo número no formato internacional, sem +, espaços ou símbolos.
  instagram: "https://instagram.com/seuinstagram",
  email: "contato@gabrieltech.com",
  location: "",
  prices: {
    landing: "R$ XXX",
    site: "R$ XXX",
  },
  hero: {
    title: "Sites que colocam seu negócio na internet.",
    subtitle:
      "Criação de sites modernos, rápidos e personalizados para empresas, profissionais e negócios locais.",
  },
};

export function whatsappUrl(message = "Olá! Quero falar sobre um projeto de site.") {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}