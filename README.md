# XENIA Physio & Rehab Center – Hospital Landing Page

A clean, modern, and professional hospital landing page for **XENIA Physio & Rehab Center**, built using pure HTML5, CSS3, and Vanilla JavaScript.

---

## 🏥 Architecture & Key Features

1. **Top Header – Hospital Branding & Aesthetic Doodles (Untouched)**
   - **XENIA** branding and medical emblem on the **top-left corner** (brightens and enlarges on hover).
   - Creative hospital tagline in the **centre**: *“Restoring Movement. Rebuilding Lives. Caring with Heart.”* in stylized **Playfair Display (Italic)** typography with pastel gradient text and sparkles.
   - Aesthetic hospital doodles (stethoscope, heartbeat wave, first-aid cross, pill capsule, healing leaf) in the header background.
   - Bright, decent pastel healthcare colors: Light Teal (`#2dd4bf`), Medical Sky Blue (`#38bdf8`), Soft Mint (`#34d399`), and Pure White.

2. **Left-Side Navigation & Dashboard Information (Untouched)**
   - **Sidebar Dashboard Box**: Displays basic hospital information (timings, emergency line, capacity).
   - **Search Bar on Top of the Modules**: Live search & filter across all 8 modules and 58 subtopics.
   - **8 Expandable Functional Modules**: Enlarges on hover with smooth dropdowns.

3. **Populated Main Area – Patient Directory & Records (Requested Area)**
   - **Top Right Button**: `+ New Patient Registration` which opens an intake modal form to register a new patient.
   - **Clean List with Proper Spacing & Alignment**: Zero components overlapping or overflowing.
   - **Basic Patient Fields**:
     - Patient Name & Demographics (Age/Gender + Avatar initials)
     - Patient ID (e.g., `XEN-2026-0142`)
     - Date of Consultation (e.g., `📅 02 Nov 2026`)
     - Department / Speciality badge
     - Active Status chip
   - **View Patient Button**: Positioned beside each patient row.
     - When clicked, opens a **Patient Profile Popup Modal** containing complete clinical information (primary diagnosis, attending therapist, reported pain score, rehabilitation mobility progress bar, and emergency contacts).
   - **New Patient Registration Popup Form**:
     - Form fields for full name, age, gender, consultation date, department, diagnosis, and emergency contact.
     - Submitting immediately creates and prepends the new patient into the live directory list with a confirmation notification.

---

## 📁 File Structure

- `index.html` – Clean semantic HTML5 markup.
- `style.css` – Pure CSS3 styling with pastel healthcare variables, table styling, and modal animations.
- `script.js` – Beginner-friendly Vanilla JavaScript for dropdown toggling, patient rendering, search filtering, and modal popups.
- `server.js` – Zero-dependency Node server for local testing.

---

## 🚀 How to Run & Preview

### Option 1: Direct Browser
Open `index.html` directly in any web browser.

### Option 2: Local Server
```bash
node server.js
```
Then visit `http://localhost:3000`.
