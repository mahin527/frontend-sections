# 🚀 Header Section Practice

👨‍💻 Developed by: Mahin Hasan
📅 Date: July 18, 2025

---

## ✅ What I Practiced Today

- Header layout with **Flexbox**
- Responsive navbar using **Tailwind CSS**
- Sticky header with transparent background
- CTA button & hover effect
- Mobile-friendly menu design (basic)

---

## 📸 Preview

> Screenshots বা Live Preview Link দিতে পারো এখানে (যদি host করো)

---

## Problems

- menu will be different in sm & md

```html
<div class="absolute md:static w-full md:w-auto top-18 left-0 py-3">
  <ul class="">
    // menues
  </ul>
</div>
```

- menu center

```html
<div class="italic font-semibold text-2xl lg:text-3xl md:absolute md:left-1/2 lg:left-3/5 xl:left-1/2 md:transform md:-translate-x-1/2">
  <a href="#">demo</a>
</div>
```

- sub menu

```html
<li class="absolute md:static w-full md:w-auto top-18 left-0 py-3">
  <ul class="absolute top-5 left-6 md:left-3 py-3 px-7 w-40 space-y-2 shadow-2xl transition-all duration-150 invisible group-hover:visible z-10">
    // sub menues
  </ul>
</li>
```

- overlay

```html
<div id="menu-overlay" class="fixed inset-0 bg-black/40 backdrop:blur-sm z-30 hidden"></div>
```

- Escape key to close menu

```javascript
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMenuFunction();
  }
});
```

## 📂 Files Included

```bash
header/
├── header1.html
├── header2.html
└── header3.html
```
