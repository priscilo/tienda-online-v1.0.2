

```markdown
# 🛒 Tienda Online v1.0.2

Sistema modular de e-commerce desarrollado con enfoque en accesibilidad, defensividad y experiencia multicultural. Ideal para escalar catálogos de productos físicos con documentación visual y pruebas unitarias.

---

## 📦 Características principales

- 🔧 Arquitectura modular con componentes reutilizables (`Navbar`, `Hero`, `Footer`, `ProductCard`)
- 🎨 Diseño responsivo con Tailwind CSS y accesibilidad mejorada
- 🧪 Pruebas unitarias defensivas con Vitest (`cartStore`, `useCart`, `useAuth`)
- 📚 Documentación visual y props estructurados para onboarding técnico
- 🌐 Preparado para internacionalización y branding multicultural

---

## 🗂️ Estructura del proyecto

```
src/
├── assets/              # Imágenes y recursos visuales
├── components/          # Componentes React modulares
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Footer.jsx
│   └── ProductCard.jsx
├── store/               # Zustand stores (cartStore.js, balanceStore.js)
├── composables/         # Hooks personalizados (useCart, useAuth)
├── views/               # Vistas principales (Home, Cart, Checkout)
└── App.jsx
```

---

## 🧪 Pruebas unitarias

```bash
# Ejecutar pruebas con Vitest
npm run test
```

Cobertura defensiva para:

- `cartStore.js`: manejo de carrito, cantidades, eliminación y limpieza
- `useCart.js`: integración con componentes y persistencia
- `useAuth.js`: autenticación simulada y validación

---

## 🚀 Instalación rápida

```bash
git clone https://github.com/priscilo/tienda-online-v1.0.2.git
cd tienda-online-v1.0.2
npm install
npm run dev
```

---

## 🧠 Props y eventos clave

| Componente    | Propiedad  | Tipo   | Descripción                          |
| ------------- | ---------- | ------ | ------------------------------------ |
| `ProductCard` | `producto` | Object | Objeto con `nombre`, `precio`, `img` |
| `Navbar`      | `logo`     | String | Ruta del logo                        |
| `Hero`        | `titulo`   | String | Título principal                     |
| `Footer`      | `redes`    | Array  | Íconos y enlaces sociales            |

---

## 📸 Branding visual

> Diagramas y assets exportables disponibles en `/assets/branding/`  
> Incluye mockups, layout visual y variantes multiculturales.

---

## 🧭 Roadmap

- [x] Modularización de layout
- [x] Pruebas unitarias defensivas con Vitest
- [x] Documentación visual de props y stores
- [ ] Persistencia de carrito con localStorage
- [ ] Exportación de README como PDF visual
- [ ] Integración de autenticación real con backend

---

## 🤝 Contribuciones

Pull requests bienvenidos. Para cambios mayores, abre un issue primero para discutir lo que te gustaría mejorar o refactorizar.

---

## 🧑‍💻 Autor

**Priscilo Pomachagua Durán**  
Arquitecto técnico y líder de INVERSIONES MÚLTIPLES PUMA S.R.L.  
Especialista en automatización industrial, defensividad web y branding visual multicultural.

---

## 📄 Licencia

MIT © 2025 — Priscilo Pomachagua Durán
```
