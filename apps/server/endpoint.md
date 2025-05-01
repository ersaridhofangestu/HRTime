
## 📘 Employee Salary API Documentation

RESTful API untuk mengelola data gaji karyawan menggunakan PHP dan PostgreSQL.

---

### 🌐 Base URL
```
http://localhost:8000
```

---

## 📌 Endpoints

---

### 📅 [POST] `/` - Tambah Data Karyawan

**Deskripsi:** Menambahkan data gaji karyawan baru.

**Headers:**
```http
Content-Type: application/json
```

**Body:**
```json
{
  "name": "Budi Hartono",
  "status": "Kontrak",
  "date": "2025-05-01",
  "entry_time": "08:00",
  "clock_out": "17:00"
}
```

**Response Success:**
```json
{
  "message": "Employee created successfully"
}
```

**Response Error (Field Kosong):**
```json
{
  "error": "Field tidak lengkap",
  "status_code": 400
}
```

**Response Error (Kesalahan Server):**
```json
{
  "error": "Internal Server Error",
  "status_code": 500
}
```

---

### 📄 [GET] `/` - Ambil Semua Data Karyawan

**Deskripsi:** Mengambil semua data gaji karyawan.

**Response:**
```json
[
  {
    "id": 1,
    "name": "Budi Hartono",
    "status": "Kontrak",
    "date": "2025-05-01",
    "entry_time": "08:00:00",
    "clock_out": "17:00:00"
  },
  ...
]
```

---

### 📄 [GET] `/?id={id}` - Ambil Satu Karyawan Berdasarkan ID

**Deskripsi:** Mengambil detail satu karyawan.

**Contoh URL:**
```
http://localhost/myapps/api.php?id=1
```

**Response:**
```json
{
  "id": 1,
  "name": "Budi Hartono",
  "status": "Kontrak",
  "date": "2025-05-01",
  "entry_time": "08:00:00",
  "clock_out": "17:00:00"
}
```

---

### ♻️ [PUT] `/?id={id}` - Update Data Karyawan

**Deskripsi:** Memperbarui data gaji karyawan berdasarkan ID.

**Headers:**
```http
Content-Type: application/json
```

**Body:**
```json
{
  "name": "Budi Santoso",
  "status": "Tetap",
  "date": "2025-05-01",
  "entry_time": "09:00",
  "clock_out": "18:00"
}
```

**Response:**
```json
{
  "message": "Employee updated successfully"
}
```

---

### ❌ [DELETE] `/?id={id}` - Hapus Data Karyawan

**Deskripsi:** Menghapus data karyawan berdasarkan ID.

**Contoh URL:**
```
http://localhost/myapps/api.php?id=1
```

**Response:**
```json
{
  "message": "Employee deleted successfully"
}
```

---

## ⚠️ Error Handling

- `400 Bad Request` — Jika ada field kosong.
- `500 Internal Server Error` — Jika terjadi kesalahan database.
- `405 Method Not Allowed` — Jika HTTP method tidak didukung.

---
