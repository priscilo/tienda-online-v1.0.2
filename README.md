```markdown
# 🛒 Tienda Online v1.0.2

Sistema modular de e-commerce desarrollado con enfoque en accesibilidad, defensividad y experiencia multicultural. Ideal para escalar catálogos de productos físicos con documentación visual y pruebas unitarias.

---

## 📦 Características principales

- 🔧 Arquitectura modular con componentes reutilizables (`Navbar`, `Hero`, `Footer`, `MueblesCard`)
- 🎨 Diseño responsivo con Tailwind CSS y accesibilidad mejorada
- 🧪 Pruebas unitarias defensivas con Vitest (`useCart`, `useAuth`)
- 📚 Documentación visual y props estructurados para onboarding técnico
- 🌐 Preparado para internacionalización y branding multicultural

---

## 🗂️ Estructura del proyecto

```
src/
├── assets/              # Imágenes y recursos visuales
├── components/          # Componentes Vue modulares
│   ├── Navbar.vue
│   ├── Hero.vue
│   ├── Footer.vue
│   └── MueblesCard.vue
├── composables/         # Hooks personalizados (useCart, useAuth)
├── layouts/             # Layouts visuales escalables
├── views/               # Vistas principales
└── App.vue
```

---

## 🧪 Pruebas unitarias

```bash
# Ejecutar pruebas con Vitest
npm run test
```

Cobertura defensiva para:
- `useCart.ts`: manejo de carrito, cantidades, persistencia
- `useAuth.ts`: autenticación simulada y validación

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
| `MueblesCard` | `producto` | Object | Objeto con `nombre`, `precio`, `img` |
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
- [x] Pruebas unitarias defensivas
- [x] Documentación visual de props
- [ ] Integración de carrito persistente con localStorage
- [ ] Exportación de README como PDF visual

---

## 🤝 Contribuciones

Pull requests bienvenidos. Para cambios mayores, abre un issue primero para discutir lo que te gustaría cambiar.

---

## 🧑‍💻 Autor

**Priscilo Pomachagua Durán**  
Arquitecto técnico y líder de INVERSIONES MÚLTIPLES PUMA S.R.L.  
Especialista en automatización, defensividad y branding visual.

---

## 📄 Licencia

MIT © 2025 — Priscilo Pomachagua Durán
```
