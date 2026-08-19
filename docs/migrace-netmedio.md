# SEO migrace netmedio.cz (WordPress → nový web)

Cílová kanonická doména: **https://www.netmedio.cz/** (bez www → 301 na www).
DNS ani produkční doména se zatím **nemění**. E-mail (Active24) zůstává beze změny —
migrace se týká pouze A/CNAME záznamů webu, MX/SPF/DKIM/DMARC záznamy se nesmí přepisovat.

## 1. URL, které zůstávají 1:1 (bez redirectu)

| Původní URL | Stav |
| --- | --- |
| `/` | zachováno |
| `/blog/` | zachováno |
| `/sluzby/` | zachováno |
| `/o-nas/` | zachováno (nová stránka `/o-nas`) |
| `/sluzby/tvorba-webu/` | zachováno (detail služby) |
| `/mediestetik/` | zachováno (případová studie) |
| `/nemocnice-melnik/` | zachováno (případová studie) |
| `/navody-zadani-platebni-metody-google-ads-a-overeni-inzerenta/` | zachováno |
| `/2023/12/30/kolik-stoji-reklama-na-facebooku/` | zachováno |
| `/2023/10/21/jak-se-vyvarovat-sarlatanum-a-nekvalifikovanym-ppc-specialistum/` | zachováno |
| `/2023/10/20/google-ads-vs-facebook-ads-jak-rozhodovat-mezi-platformami/` | zachováno |
| `/2023/09/22/podivejte-se-na-10-nejcastejsich-dotazu-ohledne-ppc/` | zachováno |
| `/2023/09/11/trendy-v-marketingu-ovlivni-nas-ai-a-jak-na-to/` | zachováno |
| `/2022/10/25/marketingovy-slovnik/` | zachováno |
| `/2022/08/01/jak-propagovat-restauraci/` | zachováno |
| `/2021/06/10/stejny-produkt-ruzna-cena/` | zachováno |

Obsah těchto stránek byl přepsán do nového designu, ale zůstala zachována struktura
H1–H3, klíčové pojmy a fakta z původních textů (důležité pro GenAI odpovědi
v ChatGPT, Perplexity apod.).

## 2. Trvalé přesměrování (301)

| Původní URL | Nová URL |
| --- | --- |
| `/kontakt/` | `/#kontakt` |
| `/reference/` | `/case-studies` |
| `/sluzby/ppc-reklamy/` | `/sluzby/vykonnostni-reklama` |
| `/category/*` | `/blog` |
| `/author/*` | `/blog` |

Redirecty jsou implementované v aplikaci (`src/routes/*.tsx`, `beforeLoad` + `redirect`
se `statusCode: 301`), takže fungují i bez zásahu do hostingu.

## 3. Kanonizace domény

- Všechny `canonical` a `og:url` odkazují na `https://www.netmedio.cz/...`.
- `public/robots.txt` odkazuje na `https://www.netmedio.cz/sitemap.xml`.
- Přesměrování `netmedio.cz` → `www.netmedio.cz` se nastaví až při přepnutí domény
  (na úrovni DNS/hostingu, viz checklist níže).

## 4. Sitemap a robots

- `/sitemap.xml` se generuje dynamicky (`src/routes/sitemap[.]xml.ts`) a obsahuje
  homepage, `/o-nas/`, `/sluzby` + detaily služeb, `/case-studies` + detaily,
  `/blog` + nové články, migrované články i obě zachované případové studie.
- `public/robots.txt` povoluje crawl celého webu.

## 5. Checklist pro den přepnutí (zatím NEDĚLAT)

1. Zálohovat stávající WordPress (soubory + databáze).
2. Poznamenat si aktuální DNS záznamy, zejména **MX, SPF, DKIM a DMARC (Active24)** —
   ty se nemění.
3. Přepnout pouze A / AAAA / CNAME záznam pro `@` a `www` na nový hosting.
4. Nastavit 301 z `netmedio.cz` na `www.netmedio.cz` (a z `http` na `https`).
5. V Google Search Console ověřit vlastnictví nové property a odeslat `/sitemap.xml`.
6. Zkontrolovat report „Pokrytí“ a chyby 404 první 2–4 týdny po přepnutí.
7. Ověřit funkčnost formulářů, měření GA4 / GTM a konverzí v Google Ads.
