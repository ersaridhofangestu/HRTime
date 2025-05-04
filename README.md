# HRTime – Aplikasi Dashboard Admin Manajemen Gaji Karyawan

![HRTime Logo](https://via.placeholder.com/200x80?text=HRTime+Logo)

**HRTime** adalah aplikasi dashboard admin berbasis web yang dikembangkan oleh **Ersa Ridho Fangestu** untuk mempermudah proses pengelolaan data karyawan dan penggajian dalam suatu perusahaan. Proyek ini menggunakan arsitektur **monorepo** dengan **Turborepo**, serta didukung oleh teknologi modern di sisi frontend dan backend.

---

## 📌 Ringkasan Fitur Utama

- 🔐 **Autentikasi Login Admin** menggunakan **Firebase Authentication** (Email & Password).
- 👥 **Manajemen Data Karyawan**: Tambah, edit, dan hapus data karyawan.
- 💰 **Pengelolaan Gaji**: Hitung dan simpan gaji karyawan dengan sistem otomatis.
- 🔒 **Akses Role Aman**: Hanya admin yang terautentikasi dapat mengakses dashboard.
- 📱 **Tampilan Responsif**: Menggunakan Tailwind CSS dan Ant Design untuk antarmuka yang modern dan mobile-friendly.

---

## 🧰 Teknologi yang Digunakan

### ⚙️ Backend

| Logo                                                                | Teknologi      | Fungsi                                                                                     |
| ------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------ |
| ![Docker](https://cdn.worldvectorlogo.com/logos/docker.svg)         | **Docker**     | Menyediakan lingkungan backend yang terisolasi dan konsisten melalui container.            |
| ![PHP](https://www.php.net/images/logos/php-logo-white.svg)         | **PHP Native** | Digunakan untuk membuat REST API backend yang menangani pengolahan data karyawan dan gaji. |
| ![PostgreSQL](https://cdn.worldvectorlogo.com/logos/postgresql.svg) | **PostgreSQL** | Database relasional untuk menyimpan data karyawan dan penggajian.                          |

### 🎨 Frontend

| Logo                                                                               | Teknologi            | Fungsi                                                                          |
| ---------------------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------- |
| ![React](https://cdn.worldvectorlogo.com/logos/react-2.svg)                        | **React**            | Framework utama untuk membangun antarmuka pengguna interaktif.                  |
| ![React Router](https://reactrouter.com/splash/hero-3d-logo.dark.webp)             | **React Router DOM** | Navigasi antar halaman pada aplikasi.                                           |
| ![Ant Design](https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg) | **Ant Design**       | Library komponen UI untuk tampilan dashboard profesional.                       |
| ![Tailwind](https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg)              | **Tailwind CSS**     | Framework utility-first untuk styling yang fleksibel dan cepat.                 |
| ![Firebase](https://cdn.worldvectorlogo.com/logos/firebase-1.svg)                  | **Firebase**         | Digunakan untuk autentikasi pengguna di sisi frontend dan notifikasi real-time. |
| ![Axios](https://avatars.githubusercontent.com/u/32372333?s=200&v=4)               | **Axios**            | Library HTTP client untuk komunikasi antara frontend dan backend.               |

### 🛠️ Tools Pengembangan

| Logo                                                                                                               | Teknologi      | Fungsi                                                            |
| ------------------------------------------------------------------------------------------------------------------ | -------------- | ----------------------------------------------------------------- |
| ![Turborepo](https://user-images.githubusercontent.com/4060187/106504110-82f58d00-6494-11eb-87b7-a16d4f68bc5a.png) | **Turborepo**  | Mengelola struktur monorepo dan proses build secara efisien.      |
| ![TypeScript](https://cdn.worldvectorlogo.com/logos/typescript.svg)                                                | **TypeScript** | Bahasa pemrograman yang memperluas JavaScript dengan tipe statis. |
| ![Prettier](https://cdn.worldvectorlogo.com/logos/prettier-2.svg)                                                  | **Prettier**   | Memastikan format kode tetap konsisten di seluruh project.        |
| ![Husky](https://cdn.worldvectorlogo.com/logos/husky-1.svg)                                                        | **Husky**      | Menambahkan hook Git seperti linting sebelum commit.              |

---

## 📁 Struktur Proyek

```
myapps/
├── apps/             # Berisi aplikasi frontend dan backend
│   ├── website/      # Dashboard admin (React)
│   └── server/       # API PHP Native
│       └── docker/   # Konfigurasi Docker
├── packages/         # Komponen bersama (bila ada)
├── .env.local        # Variabel lingkungan
├── turbo.json        # Konfigurasi Turborepo
├── package.json
└── README.md
```

---

## 🖥️ Skrip NPM

| Perintah              | Fungsi                                               |
| --------------------- | ---------------------------------------------------- |
| `npm run dev`         | Menjalankan seluruh aplikasi dalam mode pengembangan |
| `npm run build`       | Build semua aplikasi dan packages                    |
| `npm run lint`        | Menjalankan linting di semua workspace               |
| `npm run format`      | Memformat kode menggunakan Prettier                  |
| `npm run check-types` | Mengecek tipe TypeScript di semua project            |

---

## 🐳 Menjalankan Backend dengan Docker

### Contoh `docker-compose.yml`:

```yaml
version: "3.8"

services:
  db:
    image: postgres:15
    container_name:
    environment:
      POSTGRES_USER:
      POSTGRES_PASSWORD:
      POSTGRES_DB:
    ports:
      - "5432:5432"
    volumes:
      - db-data:/var/lib/postgresql/data

volumes:
  db-data:
```

### Menjalankan:

```bash
docker-compose up -d
```

---

## 🔐 Implementasi Login Firebase

Fitur login menggunakan Firebase Authentication dengan metode email & password.

### Contoh Penggunaan (React + Firebase):

```tsx
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebase"; // konfigurasi firebase

const auth = getAuth(app);

function login(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Login berhasil:", userCredential.user);
    })
    .catch((error) => {
      console.error("Login gagal:", error.message);
    });
}
```

> 💡 Firebase harus dikonfigurasi di file `firebase.js` / `firebase.ts` terlebih dahulu.

---

## ⚙️ Instalasi & Menjalankan Proyek

1. **Clone repositori**

```bash
git clone https://github.com/your-username/myapps.git
cd myapps
```

2. **Instal dependency**

```bash
npm install
```

3. **Jalankan frontend**

```bash
npm run dev
```

4. **Jalankan backend (Docker)**

```bash
docker-compose up -d
```

---

## 👨‍💼 Pengembang

**Ersa Ridho Fangestu** - 15240824  
**Kasih Setia Gaho** - 15240071  
**Rendy Ferdiansyah** - 15240310  
**Yoseph Wai** - 15240476  
**Risandi Arfanni** - 15240867
