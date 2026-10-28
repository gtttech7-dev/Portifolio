import {site} from '../config/site.mjs';
export function whatsapp(context = 'default') {
  if (!/^\d{10,15}$/.test(site.phone)) throw new Error('Número de WhatsApp inválido');
  return `https://wa.me/${site.phone}?text=${encodeURIComponent(site.messages[context] || site.messages.default)}`;
}
