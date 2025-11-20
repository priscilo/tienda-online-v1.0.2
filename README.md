# 🛒 Tienda Online con React: Carrito de Compras en Tiempo Real

¿Quieres llevar tus habilidades de React al siguiente nivel? Este proyecto es una tienda online dinámica diseñada para enseñarte a construir un **ecommerce completo** desde cero. Utiliza herramientas modernas como **React JS**, **Zustand** y **Bootstrap** para crear una experiencia de usuario fluida y profesional.

## Resultado final

![](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/refs/heads/master/tienda-online-con-carrito-de-compra-en-react.gif)


### Características principales:
- Agregar productos al carrito.
- Incrementar o decrementar la cantidad de un producto.
- Eliminar productos individualmente.
- Total de productos agregados al carrito
- Total a pagar

---

## 🚀 Tecnologías utilizadas

- **[Vite](https://vitejs.dev/):** Configuración rápida y ligera para React.
- **[Bootstrap](https://getbootstrap.com/):** Framework CSS para un diseño atractivo y responsivo.
- **React Hooks:** `useState`, `useEffect`, `useMemo`, `useFetch`, entre otros.
- **[Zustand](https://zustand-demo.pmnd.rs/):** Librería de gestión de estado simple y rápida.
- **[Axios](https://axios-http.com/):** Cliente HTTP para consumir APIs.
- **[React Icons](https://react-icons.github.io/react-icons/):** Iconos personalizables para React.
- **[Typewriter Effect](https://www.npmjs.com/package/typewriter-effect):** Efectos de texto animados para mejorar la experiencia visual.
- **[loadingbars](https://klendi.github.io/react-top-loading-bar/):** Efecto de loading bars para el filtro.

---


## Pasos para ejecutar el proyecto en tu entorno local:

1. Clona este repo.
2. Instala las dependencias con `npm install`
3. Corre el proyecto con `npm run dev`
4. Ve al navegador y abre `http://localhost:5173/`.


## 🙌 Cómo puedes apoyar 📢:

✨ **Comparte este proyecto** con otros desarrolladores para que puedan beneficiarse 📢.

☕ **Invítame un café o una cerveza 🍺**:
   - [Paypal](https://www.paypal.me/iamdeveloper86) (`iamdeveloper86@gmail.com`).

### ⚡ ¡No olvides SUSCRIBIRTE a la [Comunidad WebDeveloper](https://www.youtube.com/WebDeveloperUrianViera?sub_confirmation=1)!


#### ⭐ **Déjanos una estrella en GitHub**:
   - Dicen que trae buena suerte 🍀.
**Gracias por tu apoyo 🤓.**

# 🛍️ TIENDA-ONLINE-V1.1

Sistema modular para tienda online con React + Vite + Zustand. Optimizado para onboarding técnico, validación visual y escalabilidad.

---

## 🚀 Inicio rápido

```bash
git clone https://github.com/tu-org/tienda-online.git
cd tienda-online
npm install
npm run dev

TREND-A-ONLINE/
├── public/
│   ├── imgs-api/              # Imágenes de productos (idealmente optimizadas)
│   ├── products.json          # Datos de productos simulados (mock API)
│   └── vite.svg               # Logo de Vite
│
├── src/
│   ├── assets/
│   │   ├── components/        # Componentes reutilizables
│   │   │   ├── Footer.jsx
│   │   │   ├── MyCart.jsx
│   │   │   ├── ProductList.jsx
│   │   │   ├── SideBarOffCanvas.jsx
│   │   │   ├── SizeFilter.jsx
│   │   │   ├── SizeFilterSkeleton.jsx
│   │   │   └── TitleTypeWriter.jsx
│   │   └── styles/            # Archivos Sass/CSS globales
│   │       └── main.scss
│   │
│   ├── hooks/
│   │   └── useFetch.js        # Hook personalizado para consumir productos
│   │
│   ├── store/
│   │   └── App.jsx            # Componente raíz
│   │
│   ├── context/               # (Opcional) Contextos globales (ej. carrito, usuario)
│   │   └── CartContext.jsx
│   │
│   ├── services/              # (Opcional) Funciones para consumir APIs
│   │   └── productService.js
│   │
│   ├── utils/                 # (Opcional) Funciones auxiliares
│   │   └── formatPrice.js
│   │
│   ├── routes/                # (Opcional) Definición de rutas con React Router
│   │   └── AppRoutes.jsx
│   │
│   └── main.jsx               # Punto de entrada de la app
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

internacionalización (i18n) 


src/
├── i18n/
│   ├── en.json         # Inglés
│   ├── es.json         # Español
│   └── index.js        # Configuración central de i18n
08/11/2025
