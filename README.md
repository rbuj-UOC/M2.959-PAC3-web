# Reserves d'habitacions

Aplicació web d'storytelling amb Node, Webpack i SCSS. Presenta una experiència visual immersiva amb scroll interactiu on les imatges de la dreta canvien suaument mentre es navega per les seccions.

## Característiques

- **Pantalla inicial** amb el títol de la presentació
- **Scroll interactiu** que canvia les imatges segons la secció visible
- **Disseny elegant** amb colors moderns (paleta blava i gris clar)
- **Transicions suaus** amb GSAP
- **Scroll snap** per assegurar una secció visible a la vegada
- **Tipografia sans-serif** moderna (Inter)
- **Responsive** adaptat a dispositius mòbils

## Instal·lació

```bash
npm install
```

## Desenvolupament

Executar la construcció en mode observació i el servidor Express, ja que actualitza el contingut en desar els canvis:

```bash
npm run dev
```

Obriu: <http://localhost:3000>

## Producció

Compilar i arrencar el servidor:

```bash
npm run build
npm start
```

## Desplegament a GitHub Pages

L'aplicació inclou una acció de GitHub que automàticament construeix i publica a GitHub Pages en cada commit a la branca principal.

## Tecnologies

- **Express** - Servidor Node.js
- **Webpack + Babel** - Empacat i transpilació moderna
- **SCSS** - Estils amb preprocessador
- **GSAP** - Transicions i animacions suaus
- **Scroll Snap CSS** - Control precís del scroll
- **GitHub Actions** - CI/CD automàtic

## Paleta de colors

- Fons principal: `#E3E3E3`
- Text principal: `#1B3C53`
- Text secundari: `#456882`
- Accent: `#234C6A`

## Estructura del projecte

```plaintext
/
├── src/
│   ├── client/
│   │   ├── index.html       # Template HTML
│   │   ├── index.js         # Lògica JavaScript
│   │   └── styles/
│   │       └── main.scss    # Estils principals
│   └── server/
│       └── index.js         # Servidor Express
├── dist/                    # Build de producció
├── .github/
│   └── workflows/
│       └── deploy.yml       # Acció GitHub Pages
├── webpack.config.js        # Configuració Webpack
└── package.json             # Dependencies i scripts
```
