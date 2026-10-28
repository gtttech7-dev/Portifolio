import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {projects} from '../src/data/projects.mjs';
import {site} from '../src/config/site.mjs';
import {whatsapp} from '../src/lib/whatsapp.mjs';
const pages=['dist/index.html',...projects.filter(p=>p.published).map(p=>`dist/projetos/${p.slug}/index.html`)];
assert.equal(new Set(projects.map(p=>p.slug)).size,projects.length,'Slugs duplicados');
for(const key of Object.keys(site.messages)){const url=new URL(whatsapp(key));assert.equal(url.hostname,'wa.me');assert.equal(url.pathname,`/${site.phone}`);assert.equal(url.searchParams.get('text'),site.messages[key]);}
let links=0,images=0;
for(const file of pages){const html=await readFile(file,'utf8');assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`${file}: H1 único`);assert.match(html,/<html lang="pt-BR">/);assert.match(html,/<meta name="description"/);for(const match of html.matchAll(/(?:src|href)="(\/[^"#]*)(?:#[^"]*)?"/g)){let path=match[1];if(path.endsWith('/'))path+='index.html';await access(`dist${path}`);links++;}for(const match of html.matchAll(/<img[^>]+>/g)){assert.match(match[0],/alt="[^"]+"/);assert.match(match[0],/width="\d+"/);images++;}for(const match of html.matchAll(/<a[^>]*target="_blank"[^>]*>/g)){assert.match(match[0],/rel="noopener noreferrer"/);}}
for(const p of projects){assert.ok(p.gallery.length>0);for(const img of p.gallery)await access('dist'+img.src);assert.ok(new URL(p.url).protocol==='https:');}
console.log(`Verificações OK: ${pages.length} páginas, ${links} referências locais, ${images} imagens, ${Object.keys(site.messages).length} mensagens de WhatsApp e slugs únicos.`);
