import {mkdir,writeFile,cp,rm} from 'node:fs/promises';
import {home,detail,document} from '../src/components/templates.mjs';
import {site} from '../src/config/site.mjs';
import {projects} from '../src/data/projects.mjs';
await rm('dist',{recursive:true,force:true}); await mkdir('dist',{recursive:true});
await cp('public','dist',{recursive:true});
await writeFile('dist/index.html',document(home()));
for(const p of projects.filter(p=>p.published)){await mkdir(`dist/projetos/${p.slug}`,{recursive:true}); await writeFile(`dist/projetos/${p.slug}/index.html`,document(detail(p),`${p.name} — Projeto ${site.name}`,p.description,`/projetos/${p.slug}/`));}
await writeFile('dist/404.html',document('<main class="wrap not-found"><span class="eyebrow">404 / PÁGINA NÃO ENCONTRADA</span><h1>Vamos voltar<br>ao começo?</h1><a class="button primary" href="/">Conhecer a Gomark →</a></main>','Página não encontrada — Gomark'));
await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['/',...projects.filter(p=>p.published).map(p=>`/projetos/${p.slug}/`)].map(path=>`<url><loc>${site.url}${path}</loc></url>`).join('')}</urlset>`);
await writeFile('dist/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`);
console.log('Build concluído: início, 3 páginas de projetos, 404 e SEO.');
