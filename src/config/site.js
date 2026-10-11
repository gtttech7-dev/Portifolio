export const siteConfig = {
  name: "Gomark",
  techName: "Gomark Tech",
  whatsapp: "5500000000000",
  instagram: "https://instagram.com/seuinstagram",
  instagramHandle: "@seuinstagram",
  email: "contato@gomark.com.br",
  location: "",
  prices: {
    landing: "R$ XXX",
    site: "R$ XXX",
  },
  hero: {
    title: "Sites que colocam seu negócio na internet.",
    subtitle: "Criação de sites modernos, rápidos e personalizados para empresas, profissionais e negócios locais.",
  },
};

export function whatsappUrl(message = "Olá! Quero falar sobre um projeto de site.") {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
