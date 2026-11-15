# Cantina Bella — site institucional

Site demonstrativo de portfólio para restaurante italiano. Construído com Next.js (App Router), React e Tailwind CSS, exportado como site estático.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Build de produção

```bash
npm run build
```

Gera a pasta `out/` pronta para hospedagem estática.

Para publicar em um subdiretório (ex.: GitHub Pages), informe o `basePath`:

```powershell
$env:NEXT_PUBLIC_BASE_PATH="/nome-do-repo"; npm run build
```

## Estrutura

```
app/               layout, página e estilos globais
components/        seções (Hero, Cardápio, Reservas…)
lib/site.js        dados do restaurante (telefone, endereço, horários)
lib/menu.js        cardápio por categoria
public/img/        imagens otimizadas
```

O cardápio é editável em `lib/menu.js` — cada item tem nome, descrição e preço, agrupado por categoria.

> Projeto de portfólio. Restaurante fictício, sem vínculo comercial.
