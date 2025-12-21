# Storytelling Elegant (Node + Webpack + SCSS)

Aplicació de storytelling on la imatge de la dreta canvia quan et mous cap avall entre seccions. L'estil és elegant, el marc de la imatge ocupa tot l'alt de la pàgina i la següent secció no es mostra fins que la anterior hagi desaparegut (via scroll-snap).

## Instal·lació

```bash
npm install
```

## Desenvolupament

Executa build en mode observació i el servidor Express amb reinici automàtic:

```bash
npm run dev
```

Obre: http://localhost:3000

## Producció

Compila i arrenca el servidor:

```bash
npm run build
npm start
```

## Tecnologies

- Express (servidor Node)
- Webpack + Babel (empacat modern)
- SCSS (estils)
- GSAP (transicions suaus de la imatge)
- Scroll Snap CSS (una sola secció visible a la vegada)
