# Immagini dei progetti

Metti qui gli screenshot. I nomi file attesi sono quelli scritti in
`src/data/projects.ts`, campo `images[].src`:

| Progetto | File attesi |
| --- | --- |
| App smart home | `smart-home-1.webp`, `smart-home-2.webp`, `smart-home-3.webp` |
| App con CRM | `crm-mobile-1.webp`, `crm-mobile-2.webp` |
| E-commerce | `ecommerce-1.webp`, `ecommerce-2.webp` |
| App Cordova | `cordova-1.webp` |

Finché un file manca, la card mostra un segnaposto con il percorso atteso:
è il modo più rapido per capire cosa aggiungere.

## Formato

Le card ritagliano le immagini in 4:3 con `object-cover`. Esporta a **1200×900 px**
in WebP, qualità 80. Da JPG/PNG:

```sh
cwebp -q 80 -resize 1200 0 screenshot.png -o smart-home-1.webp
```

Se preferisci restare su JPG, cambia l'estensione in `src/data/projects.ts`.
