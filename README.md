# Gomark — portfólio comercial

Site estático, responsivo, gerado a partir de dados centralizados. Não exige banco de dados ou servidor de aplicação. Foi usada uma implementação HTML/CSS/JavaScript com geração em Node, sem dependências de runtime, em lugar da stack Next.js preferencial. A saída pode ser publicada no Sites, Vercel ou em qualquer hospedagem estática.

## Executar

Requer Node 20 ou superior.

```sh
npm run dev
```

Abra http://localhost:3000 no navegador. Para parar, pressione Ctrl+C.
Não é necessário instalar dependências: usa apenas o Node.js.
Após alterações, pare e execute `npm run dev` novamente para reconstruir.

```sh
npm run build
npm run check
```

## GitHub e Vercel

1. Extraia o ZIP e abra a pasta `gomark-portfolio` no VS Code.
2. Crie um repositório no GitHub e envie o conteúdo desta pasta.
3. Importe esse repositório na Vercel usando o preset **Other**.
4. Build: `npm run build`. Diretório de saída: `dist`.
5. Em `src/config/site.mjs`, troque `site.url` pelo endereço final da Vercel ou seu domínio e envie a alteração ao GitHub. Isso atualiza sitemap, canonical e Open Graph.

O arquivo `vercel.json` já contém as configurações de build e saída.
O projeto é HTML/CSS/JavaScript com geração em Node; não usa Next.js ou TypeScript.

## Configuração

- Marca, nome profissional, domínio, telefone e mensagens: `src/config/site.mjs`.
- Links WhatsApp: `src/lib/whatsapp.mjs`, com telefone único e `encodeURIComponent`.
- Serviços e seus contextos comerciais: `src/data/services.mjs`.
- Projetos: `src/data/projects.mjs`.
- Layout e conteúdo das seções: `src/components/templates.mjs`.
- Visual, responsividade e redução de movimento: `public/styles.css`.
- Filtros, menu e galeria: `public/app.js`.

Depois de editar, execute novamente build e check. O build recria somente `dist`.

## Novos projetos

Adicione um objeto em `projects` com ID e slug únicos, nome, categoria, descrição, URL e texto de botão, status, tags, galeria, características demonstradas (`verified`), proposta de escopo (`scope`) e notas. Use `published: false` para não gerar a página. `featured: true` usa o card largo. `technologies` fica vazio enquanto não houver confirmação; o site não inventa stack dos projetos. Configure a mensagem com o ID do projeto em `site.messages`.

A página `/projetos/<slug>/` e o sitemap são gerados automaticamente. O contador acompanha automaticamente os projetos publicados.

## Imagens e galerias

Coloque arquivos otimizados em `public/projects/`. Cada entrada `gallery` recebe `src`, `alt` e `caption`. A primeira imagem é a capa. Quando há mais de uma, aparecem controles de navegação; a galeria suporta toque, ampliação, teclado e fechamento com Escape. Não distorça proporções. A variável `photo` é reservada: para exibir foto, inclua a imagem no template da seção sobre.

As imagens atuais foram obtidas nas páginas públicas em 28/10/2026:

- Orbis: tela pública de acesso, sem login e sem dados privados.
- FixFlowOS: landing page e imagem do dashboard, publicada pelo próprio site como dados fictícios de demonstração.
- Empório Pastelaria: cardápio do projeto identificado como demonstrativo.

**Pendente:** as duas capturas internas do Orbis (financeiro e tarefas) não foram fornecidas. Substitua a imagem de login apenas por capturas autorizadas, sem nomes e informações financeiras privadas. Não afirme que todos os módulos internos do FixFlowOS foram testados; a galeria demonstra somente o conteúdo público.

## Publicação na Vercel

Importe este repositório na Vercel. Selecione projeto estático/Other, comando de build `npm run build` e diretório de saída `dist`. Não há variáveis secretas. Atualize `site.url` para o domínio final antes do build para canonical, Open Graph e sitemap. Para iniciar com a CLI da Vercel em sua máquina, siga a documentação oficial da Vercel; não é necessário migrar para Next.js para hospedar a saída estática.

A configuração `vercel.json` declara build, saída e URLs limpas para a hospedagem alternativa.

## Qualidade e limites

Sem formulário simulado, banco, coleta de analytics, depoimentos ou resultados inventados. Links externos abrem em outra aba. O envio de mensagens ocorre somente quando o visitante confirma no próprio WhatsApp. Dados estruturados, títulos e descrições individuais, Open Graph, favicon, sitemap e robots estão incluídos. Fontes possuem fallback local.

`npm run check` verifica rotas, assets, metadados essenciais, textos alternativos, segurança dos links externos e codificação de todas as mensagens do WhatsApp. Não testa o sistema interno dos projetos nem confirma recebimento de mensagens pelo número informado. A versão inicial no Sites tem acesso privado; a configuração de audiência precisa ser alterada quando o proprietário decidir disponibilizar a clientes.
