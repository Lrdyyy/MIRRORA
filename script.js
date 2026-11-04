/* ============================================================
   MIRRORA: behavior + product list
   Part 1: your contact details   (edit these first!)
   Part 2: your products          (add or edit mirrors here)
   Part 3: code that draws the page (you rarely need to touch it)
   ============================================================ */

/* ---------- PART 1: CONTACT DETAILS ----------
   CHANGE THESE two values to your real ones. */
const CONTACT = {
  messenger: "https://m.me/YOUR-PAGE-NAME",   // your Facebook page's Messenger link
  email: "hello@yourdomain.com"
};

/* ---------- PART 2: PRODUCTS ----------
   Each mirror is an object { ... } inside the [ ] list.
   sizes: [ [label, dimensions, price], ... ]   prices are plain numbers (no commas). */
const HOOKS = "Back hooks included upon request";
const LED = ["Tri-color lights (3000K to 6500K)", "Single touch switch system", "Ready to plug & play", HOOKS];
const ALU = ["Available in Gold / Black / Custom color", "Backstand free upon request", "Back hooks free upon request"];
const WOOD = ["Free back stand upon request", "Color / finish can be customized", HOOKS];
const GRIDN = ["Available in Gold / Black / Custom color", HOOKS];
const ALU_SIZES = [["Petite", "16 × 60 in", 5499], ["Small", "24 × 60 in", 6899], ["Slim", "18 × 72 in", 6899], ["Tall", "24 × 72 in", 7999],
                   ["Big", "30 × 72 in", 8499], ["Large", "36 × 72 in", 10899], ["Full", "48 × 72 in", 13499]];
const LED_TALL = [["Small", "60 × 150 cm", 0], ["Mid", "60 × 180 cm", 0], ["Large", "60 × 210 cm", 0],
                  ["Big", "80 × 150 cm", 0], ["Full", "80 × 180 cm", 0], ["Extra", "80 × 210 cm", 0]];
const LED_VAN = [["Small", "60 × 80 cm", 0], ["Mid", "60 × 100 cm", 0], ["Large", "60 × 120 cm", 0],
                 ["Big", "80 × 90 cm", 0], ["Full", "80 × 100 cm", 0], ["Extra", "80 × 120 cm", 0]];
// A helper so each size list only needs the six prices: priced(LED_TALL, [14500, ...])
const priced = (sizes, prices) => sizes.map((s, i) => [s[0], s[1], prices[i]]);
const CAPSULE_SIZES = [["Bathroom / Vanity", "18 × 36 in", 0], ["Bathroom / Vanity", "24 × 40 in", 0], ["Whole body", "24 × 60 in", 0], ["Full size", "30 × 60 in", 0]];
const BACKLIGHT_ONE = ["One-color backlights", "Ready to plug & play", "Back hooks included"];
const BIG_IRR = [["Small", "50 × 25 in", 7499], ["Medium", "60 × 30 in", 7899], ["Large", "70 × 35 in", 8499]];

const ROUND_SIZES = [["Small", "60 cm diameter", 0], ["Mid", "80 cm diameter", 0], ["Large", "100 cm diameter", 0],
                     ["Big", "120 cm diameter", 0], ["Full", "150 cm diameter", 0], ["Extra", "180 cm diameter", 0]];
const ROUND_USE = "Bathroom / Vanity / Powder room";
const ROUND_WOODNOTES = ["Solid wood frame", "Available in wood stain or solid color paint", HOOKS];
const ACCENT_USE = "Bedroom / Vanity / Accent / Centerpiece";

const PRODUCTS = [
  /* ---------- RECTANGLE (MIMI + TITA) ---------- */
  { id: "mimi-alu", name: "MIMI Rectangle Mirror with Aluminum Frames", cat: "Rectangle (MIMI)",
    use: "Whole body mirror", images: ["images/mimi-alu.jpg"], sizes: ALU_SIZES, notes: ALU },
  { id: "mimi-wood", name: "MIMI Rectangle Mirror with Wood Frame", cat: "Rectangle (MIMI)",
    use: "Vanity / Walk-in / Whole body", images: ["images/mimi-wood.jpg"],
    sizes: [["Bathroom / Vanity", "24 × 60 in", 8899], ["Bathroom / Vanity", "30 × 72 in", 10899], ["Whole body", "36 × 72 in", 12499],
            ["Extra", "36 × 84 in", 14999], ["Full", "48 × 72 in", 15899]], notes: WOOD },
  { id: "mimi-backlights", name: "MIMI Rectangle Mirror with Backlights", cat: "Rectangle (MIMI)",
    use: "Bedroom / Vanity use", images: ["images/mimi-backlights.jpg"],
    sizes: priced(LED_VAN, [6500, 8800, 10400, 8000, 10500, 11500]), notes: LED },
  { id: "mimi-led-whole", name: "MIMI Rectangle LED Mirror (Whole body)", cat: "Rectangle (MIMI)",
    use: "Bedroom / Whole body use", images: ["images/mimi-led-whole.jpg"],
    sizes: priced(LED_TALL, [12500, 13800, 15100, 13500, 14800, 15800]), notes: LED },
  { id: "mimi-led-vanity", name: "MIMI Rectangle LED Mirror (Vanity)", cat: "Rectangle (MIMI)",
    use: "Bedroom / Vanity use", images: ["images/mimi-led-vanity.jpg"],
    sizes: priced(LED_VAN, [8500, 10800, 12400, 10000, 12500, 13500]), notes: LED },
  { id: "mimi-led-alu", name: "MIMI Rectangle LED Mirror with Aluminum Frame", cat: "Rectangle (MIMI)",
    use: "Bedroom / Whole body use", images: ["images/mimi-led-alu.jpg"],
    sizes: priced(LED_TALL, [13500, 14800, 16100, 14500, 15800, 16800]), notes: LED },

  { id: "tita", name: "TITA Mirror with Backlights", cat: "Rectangle (MIMI)",
    use: "Bedroom / Vanity use", images: ["images/tita.jpg"],
    sizes: priced(LED_VAN, [7500, 9800, 11400, 9000, 11500, 12500]), notes: LED },
  { id: "tita-led-alu", name: "TITA Mirror with LED and Aluminum Frame", cat: "Rectangle (MIMI)",
    use: "Bedroom / Vanity use / Whole body", images: ["images/tita-led-alu.jpg"],
    sizes: priced(LED_TALL, [13500, 14800, 16100, 14500, 15800, 16800]), notes: LED },
  { id: "tita-aluminum", name: "TITA Mirrors with Aluminum Frames (Whole body)", cat: "Rectangle (MIMI)",
    use: "Bedroom / Vanity use | Whole body mirror", images: ["images/tita-aluminum.jpg"],
    sizes: [["Small", "24 × 60 in", 6899], ["Big", "30 × 72 in", 8499]], notes: ALU },
  { id: "tita-aluminum-vanity", name: "TITA Mirror with Aluminum Frames (Vanity)", cat: "Rectangle (MIMI)",
    use: "Bedroom / Bathroom / Vanity use", images: ["images/tita-aluminum-vanity.jpg"],
    sizes: [["Bathroom / Vanity", "24 × 30 in", 5699], ["Bathroom / Vanity", "24 × 48 in", 6299]], notes: ALU },
  { id: "tita-wood", name: "TITA Mirror with Wood Frame", cat: "Rectangle (MIMI)",
    use: "Vanity / Walk-in / Whole body", images: ["images/tita-wood.jpg"],
    sizes: [["Bathroom / Vanity", "24 × 60 in", 12499], ["Bathroom / Vanity", "30 × 72 in", 14499], ["Whole body", "48 × 72 in", 15899], ["Full", "36 × 84 in", 16899]], notes: WOOD },

  /* ---------- CAPSULE ---------- */
  { id: "phoem-led", name: "PHOEM Capsule Mirror with LED & Aluminum Frame", cat: "Capsule",
    use: "Bathroom / Vanity / Walk-in / Whole body", images: ["images/phoem-led.jpg"],
    sizes: priced(CAPSULE_SIZES, [10499, 12499, 14299, 15599]),
    notes: ["Aluminum frame in Black / Gold / Custom color", "Tri-color lights, single touch switch system", "Ready to plug & play", "Back hooks included"] },
  { id: "phoem-backlights", name: "PHOEM Capsule Mirror with Backlights", cat: "Capsule",
    use: "Bathroom / Vanity / Walk-in / Whole body", images: ["images/phoem-backlights.jpg"],
    sizes: priced(CAPSULE_SIZES, [6499, 7299, 7699, 8299]),
    notes: ["Tri-color backlights", "Single touch switch system", "Ready to plug & play", "Back hooks included"] },
  { id: "phoem-led-edge", name: "PHOEM Capsule Mirror with LED (Edge)", cat: "Capsule",
    use: "Bathroom / Vanity / Walk-in / Whole body", images: ["images/phoem-led-edge.jpg"],
    sizes: priced(CAPSULE_SIZES, [8499, 10899, 12499, 13299]),
    notes: ["Tri-color lights", "Single touch switch system", "Ready to plug & play", "Back hooks included"] },
  { id: "phoem-aluminum", name: "PHOEM Capsule Mirror with Aluminum Frame", cat: "Capsule",
    use: "Bathroom / Vanity / Walk-in / Whole body", images: ["images/phoem-aluminum.jpg"],
    sizes: priced(CAPSULE_SIZES, [5499, 6299, 6999, 7499]), notes: ALU },
  { id: "phoem-wood", name: "PHOEM Capsule Mirror with Wood Frame", cat: "Capsule",
    use: "Vanity / Walk-in / Whole body", images: ["images/phoem-wood.jpg"],
    sizes: priced(CAPSULE_SIZES, [8499, 10499, 12499, 13699]), notes: WOOD },
  { id: "phoem-rattan", name: "PHOEM Capsule Mirror with Rattan Frame", cat: "Capsule",
    use: "Vanity / Walk-in / Whole body", images: ["images/phoem-rattan.jpg"],
    sizes: priced(CAPSULE_SIZES, [12499, 14499, 16899, 16899]), notes: WOOD },
  { id: "anika", name: "ANIKA Mirror with Wood Frame & PU Leather Strap", cat: "Capsule",
    use: "Bathroom / Vanity / Powder room", images: ["images/anika.jpg"],
    sizes: [["Small", "15 × 30 in", 7899], ["Medium", "20 × 40 in", 9699], ["Large", "24 × 60 in", 12499]],
    notes: ["Solid wood frame + leather strap", "Available in wood stain or solid color paint", HOOKS] },

  /* ---------- ARCH ---------- */
  { id: "viv-led", name: "VIV Arch LED Mirror with Aluminum Frame", cat: "Arch",
    use: "Bedroom / Whole body use", images: ["images/viv-led.jpg"],
    sizes: priced(LED_TALL, [14500, 15800, 17800, 15500, 16800, 18500]), notes: LED },
  { id: "viv-led-frameless", name: "VIV Arch LED Mirror (Whole body)", cat: "Arch",
    use: "Bedroom / Whole body use", images: ["images/viv-led-frameless.jpg"],
    sizes: priced(LED_TALL, [13500, 14800, 16100, 14500, 15800, 16800]), notes: LED },
  { id: "viv-led-vanity", name: "VIV Arch LED Mirror (Vanity)", cat: "Arch",
    use: "Bedroom / Vanity use", images: ["images/viv-led-vanity.jpg"],
    sizes: priced(LED_VAN, [8500, 10800, 12400, 10800, 12500, 13500]), notes: LED },
  { id: "viv-polka", name: "VIV Arch Mirror with Wood Frame in Polka Dots", cat: "Arch",
    use: "Vanity / Walk-in / Whole body", images: ["images/viv-polka.jpg"],
    sizes: [["Bathroom / Vanity", "24 × 60 in", 12499], ["Bathroom / Vanity", "30 × 72 in", 14499],
            ["Whole body", "48 × 72 in", 16899], ["Full", "36 × 84 in", 17299]], notes: WOOD },
  { id: "viv-wood", name: "VIV Arch Mirror with Wood Frame", cat: "Arch",
    use: "Vanity / Walk-in / Whole body", images: ["images/viv-wood.jpg"],
    sizes: [["Bathroom / Vanity", "24 × 60 in", 9899], ["Bathroom / Vanity", "30 × 72 in", 11899], ["Whole body", "36 × 72 in", 13499],
            ["Extra", "36 × 84 in", 16899], ["Full", "48 × 72 in", 17499]], notes: WOOD },
  { id: "viv-rattan", name: "VIV Arch Mirror with Rattan Frame & Solihiya Accent", cat: "Arch",
    use: "Whole body mirror", images: ["images/viv-rattan.jpg"],
    sizes: [["One size only", "40 × 72 in", 12499]],
    notes: ["Available in natural finish", HOOKS, "Back stand +Php 1,000"] },
  { id: "viv-alu", name: "VIV Arch Mirror with Aluminum Frames (Whole body)", cat: "Arch",
    use: "Whole body mirror", images: ["images/viv-alu.jpg"], sizes: ALU_SIZES, notes: ALU },
  { id: "viv-alu-vanity", name: "VIV Arch Mirror with Aluminum Frames (Vanity)", cat: "Arch",
    use: "Bedroom / Bathroom / Vanity use", images: ["images/viv-alu-vanity.jpg"],
    sizes: [["Bathroom / Vanity", "24 × 30 in", 5699], ["Bathroom / Vanity", "24 × 48 in", 6299]], notes: ALU },

  /* ---------- IRREGULAR ---------- */
  { id: "tiki", name: "TIKI Irregular Mirror", cat: "Irregular",
    use: "Bathroom / Vanity / Walk-in / Whole body", images: ["images/tiki.jpg"],
    sizes: [["Small", "51 × 28 in", 7499], ["Medium", "65 × 32 in", 8499], ["Large", "67 × 44 in", 9499]], notes: BACKLIGHT_ONE },
  { id: "poppy", name: "POPPY Irregular Mirror", cat: "Irregular",
    use: "Bathroom / Vanity / Walk-in / Whole body", images: ["images/poppy.jpg"], sizes: BIG_IRR, notes: BACKLIGHT_ONE },
  { id: "rosso", name: "ROSSO Irregular Mirror", cat: "Irregular",
    use: "Bathroom / Vanity / Walk-in / Whole body", images: ["images/rosso.jpg"], sizes: BIG_IRR, notes: BACKLIGHT_ONE },
  { id: "sonoma", name: "SONOMA Irregular Mirror", cat: "Irregular",
    use: "Bathroom / Vanity / Walk-in / Whole body", images: ["images/sonoma.jpg"],
    sizes: [["Small", "24 × 35 in", 6899], ["Medium", "35 × 48 in", 9499], ["Large", "44 × 60 in", 12399]],
    notes: ["Tri-color backlights + single touch switch system", "Ready to plug & play", "Back hooks included"] },
  { id: "suri", name: "SURI Irregular Mirror with Wood Frame", cat: "Irregular",
    use: "Bedroom / Vanity use | Whole body mirror", images: ["images/suri.jpg"],
    sizes: [["Small", "24 × 60 in", 12499], ["Medium", "30 × 72 in", 14499]], notes: WOOD },
  { id: "elke", name: "ELKE Irregular Mirror with Wood Frame", cat: "Irregular",
    use: "Bedroom / Vanity use | Whole body mirror", images: ["images/elke.jpg"],
    sizes: [["One size only", "24 × 60 in", 12499]], notes: WOOD },
  { id: "fiji", name: "FIJI Irregular Frameless Mirror", cat: "Irregular",
    use: "Bedroom / Vanity use | Whole body mirror", images: ["images/fiji.jpg"],
    sizes: [["One size only", "24 × 60 in", 4999]],
    notes: ["Frameless mirror with back stand", "Back hooks included", "Add Php 2,000 for backlights"] },
  { id: "fiji-wave", name: "FIJI Irregular Frameless Mirror (Wavy)", cat: "Irregular",
    use: "Bedroom / Vanity use | Whole body mirror", images: ["images/fiji-wave.jpg"],
    sizes: [["One size only", "36 × 72 in", 12499]],
    notes: ["Frame color can be customized", "Back hooks free upon request", "Back stand free upon request"] },
  { id: "frau", name: "FRAU Islet Frameless Mirror", cat: "Irregular",
    use: "Bedroom / Vanity / Powder room / Whole body", images: ["images/frau.jpg"],
    sizes: [["Small", "25 × 43 in", 5599], ["Whole body", "42 × 60 in", 7299], ["Full", "54 × 72 in", 9899]],
    notes: ["Add Php 2,000 for one-color backlights", HOOKS] },

  /* ---------- GRID ---------- */
  { id: "grid-mirror", name: "GRID Mirror", cat: "Grid",
    use: "Bedroom / Table top / Whole body", images: ["images/grid-living.jpg", "images/grid-bedroom.jpg"],
    sizes: [["Table top", "30 × 30 in", 8499], ["Whole body", "30 × 60 in", 12499], ["Full", "48 × 72 in", 14499]], notes: GRIDN },
  { id: "cathedral", name: "GRID Mirror in Cathedral", cat: "Grid",
    use: "Bedroom / Table top / Whole body", images: ["images/cathedral.jpg"],
    sizes: [["Table top", "30 × 30 in", 8499], ["Whole body", "30 × 60 in", 12499], ["Full", "48 × 72 in", 14499]], notes: GRIDN },
  { id: "arch-grid", name: "Arch GRID Mirror", cat: "Grid",
    use: "Bedroom / Table top / Whole body", images: ["images/arch-grid-window.jpg", "images/arch-grid.jpg"],
    sizes: [["Table top", "30 × 30 in", 8499], ["Whole body", "30 × 60 in", 12499], ["Full", "48 × 72 in", 14499]], notes: GRIDN },
  { id: "reno", name: "GRID MIRROR in Reno", cat: "Grid",
    use: "Bedroom / Table top / Dining", images: ["images/reno.jpg"],
    sizes: [["One size only", "48 × 24 in", 7899]], notes: GRIDN },
  { id: "amalfi", name: "GRID MIRROR in Amalfi", cat: "Grid",
    use: "Bedroom / Table top / Dining", images: ["images/amalfi.jpg"],
    sizes: [["One size only", "48 × 24 in", 7899]], notes: GRIDN },

  /* ---------- ROUND ---------- */
  { id: "faith-wood", name: "FAITH Round Mirror with Wood Frame", cat: "Round",
    use: "Bathroom / Vanity / Powder room", images: ["images/faith-wood.jpg"],
    sizes: [["Small", "60 cm diameter", 3999], ["Mid", "80 cm diameter", 5999], ["Large", "100 cm diameter", 9699],
            ["Big", "120 cm diameter", 10299], ["Full", "150 cm diameter", 15499], ["Extra", "180 cm diameter", 18899]],
    notes: ["Solid wood frame", "Available in wood stain or solid color paint", HOOKS] },

  { id: "faith-strap", name: "FAITH Round Mirror with Wood Frame & PU Leather Strap", cat: "Round",
    use: "Bathroom / Vanity / Powder room", images: ["images/faith-strap.jpg"],
    sizes: [["Small", "60 cm diameter", 5999], ["Mid", "80 cm diameter", 7999], ["Large", "100 cm diameter", 11699],
            ["Big", "120 cm diameter", 12299], ["Full", "150 cm diameter", 17499], ["Extra", "180 cm diameter", 20899]],
    notes: ["Solid wood frame", "Available in wood stain or solid color paint", HOOKS] },

  { id: "faith-sunrays", name: "FAITH Round Mirror with Sunrays Rattan Frame", cat: "Round",
    use: "Bathroom / Vanity / Powder room", images: ["images/faith-sunrays.jpg"],
    sizes: [["One size only", "100 cm diameter", 15499]],
    notes: ["Available in natural finish", "Back hooks included", "Available for customization"] },
  { id: "faith-polka", name: "FAITH Round Mirror with Wood Frame & Polka Dots", cat: "Round",
    use: ROUND_USE, images: ["images/faith-polka.jpg"],
    sizes: priced(ROUND_SIZES, [5999, 7999, 12699, 13299, 18499, 20899]), notes: ROUND_WOODNOTES },
  { id: "faith-crescent", name: "FAITH Round Mirror with Crescent Wood Frame", cat: "Round",
    use: ROUND_USE, images: ["images/faith-crescent.jpg"],
    sizes: [["Small", "60 cm diameter", 7999], ["Mid", "80 cm diameter", 9699], ["Large", "90 cm diameter", 11299]],
    notes: ["Available in Walnut & Ash finish", "Not available for customization", "Back hooks included"] },
  { id: "faith-alu", name: "FAITH Round Mirror with Aluminum Frame", cat: "Round",
    use: ROUND_USE, images: ["images/faith-alu.jpg"],
    sizes: priced(ROUND_SIZES, [3499, 4299, 6499, 10299, 14499, 16299]),
    notes: ["Available in Gold / Black / Custom color", "Back hooks free upon request"] },
  { id: "faith-alu-backlights", name: "FAITH Round Mirror with Aluminum Frame & Backlights", cat: "Round",
    use: ROUND_USE, images: ["images/faith-alu-backlights.jpg"],
    sizes: priced(ROUND_SIZES, [6999, 8499, 9699, 12699, 14999, 20499]),
    notes: ["Available in Gold / Black / Custom color", "Back hooks free upon request"] },
  { id: "faith-backlights", name: "FAITH Round Mirror with Backlights", cat: "Round",
    use: ROUND_USE, images: ["images/faith-backlights.jpg"],
    sizes: priced(ROUND_SIZES, [5999, 7299, 8499, 11299, 13699, 18299]),
    notes: ["Tri-color backlights (3000K to 6500K)", "Single touch switch system", "Ready to plug & play", HOOKS] },
  { id: "faith-led", name: "FAITH Round Mirror with Front LED", cat: "Round",
    use: ROUND_USE, images: ["images/faith-led.jpg"],
    sizes: priced(ROUND_SIZES, [7499, 9699, 11199, 14299, 19299, 25499]), notes: LED },
  { id: "faith-led-alu", name: "FAITH Round Mirror with Front LED & Aluminum Frame", cat: "Round",
    use: ROUND_USE, images: ["images/faith-led-alu.jpg"],
    sizes: priced(ROUND_SIZES, [8499, 11299, 13499, 15699, 20299, 27699]), notes: LED },
  { id: "akar", name: "AKAR Accent Mirror", cat: "Round",
    use: ACCENT_USE, images: ["images/akar.jpg"],
    sizes: [["Small", "60 cm diameter", 15499], ["Large", "80 cm diameter", 18899]],
    notes: ["Hand-carved wood frame", "Available in Gold", "Back hooks included", "Not available for customization"] },
  { id: "rafflesia", name: "RAFFLESIA Accent Mirror", cat: "Round",
    use: ACCENT_USE, images: ["images/rafflesia.jpg"],
    sizes: [["One size only", "72 cm diameter", 8499]],
    notes: ["Available in Gold", "Back hooks included", "Not available for customization"] },
  { id: "sola", name: "SOLA Accent Mirror", cat: "Round",
    use: ACCENT_USE, images: ["images/sola.jpg"],
    sizes: [["One size only", "85 × 85 cm", 7999]],
    notes: ["Available in Black", "Back hooks included", "Not available for customization"] },

  /* ---------- ULTRAFRAGOLA ---------- */
  { id: "ultrafragola", name: "ULTRAFRAGOLA Mirror", cat: "Ultrafragola",
    use: "Bathroom / Vanity / Walk-in / Whole body", images: ["images/ultrafragola.jpg"],
    sizes: [["One size only", "100 cm L × 195 cm H", 40000]],
    notes: ["Up to 20+ colored lights", "Remote control operated", "Ready to plug & play", "Back hooks included"] }
];

const CATEGORIES = ["All", "Rectangle (MIMI)", "Capsule", "Arch", "Irregular", "Grid", "Round", "Ultrafragola"];

/* ---------- PART 3: THE CODE THAT DRAWS THE PAGE ---------- */

// A helper: turn 8499 into "Php 8,499"
const php = n => "Php " + n.toLocaleString("en-US");

// Grab the page elements we will fill in
const chipsBox = document.getElementById("chips");
const grid     = document.getElementById("grid");
const modal    = document.getElementById("modal");
const mBody    = document.getElementById("mBody");

let active = "All";   // which chip is selected right now

// 1) Draw the filter chips
function drawChips() {
  chipsBox.innerHTML = "";
  CATEGORIES.forEach(cat => {
    const b = document.createElement("button");
    b.className = "chip";
    b.textContent = cat;
    b.setAttribute("aria-pressed", cat === active);
    b.addEventListener("click", () => { active = cat; drawChips(); drawGrid(); });
    chipsBox.appendChild(b);
  });
}

// 2) Draw the product cards (only the ones matching the chip)
function drawGrid() {
  grid.innerHTML = "";
  PRODUCTS.filter(p => active === "All" || p.cat === active).forEach(p => {
    const card = document.createElement("button");
    card.className = "card";
    const from = p.soon ? "Ask us for details" : "From " + php(Math.min(...p.sizes.map(s => s[2])));
    const photo = p.images.length
      ? `<img class="photo" src="${p.images[0]}" alt="${p.name}" loading="lazy">`
      : `<div class="ph">Photos coming soon</div>`;
    card.innerHTML = `${photo}<p class="tag">${p.cat}</p><h3>${p.name}</h3><p class="price">${from}</p>`;
    card.addEventListener("click", () => openModal(p));
    grid.appendChild(card);
  });
}

// 3) Open the pop-up for one product
function openModal(p) {
  const mail = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Inquiry: " + p.name)}`;
  const img  = p.images.length ? `<img class="m-img" id="mImg" src="${p.images[0]}" alt="${p.name}">` : "";
  const thumbs = p.images.length > 1
    ? `<div class="thumbs">${p.images.map((src, i) =>
        `<button data-i="${i}" aria-label="Photo ${i + 1}" aria-current="${i === 0}"><img src="${src}" alt=""></button>`).join("")}</div>`
    : "";
  const table = p.sizes.length
    ? `<table>${p.sizes.map(s => `<tr><td>${s[0]}</td><td>${s[1]}</td><td>${php(s[2])}</td></tr>`).join("")}</table>`
    : "";
  const notes = p.notes.length ? `<ul>${p.notes.map(n => `<li>${n}</li>`).join("")}</ul>` : "";

  mBody.innerHTML = `${img}${thumbs}
    <div class="m-info">
      <p class="tag">${p.cat}</p><h2 id="mTitle">${p.name}</h2><p class="use">${p.use}</p>
      ${table}${notes}
      <div class="actions">
        <a class="btn" href="${CONTACT.messenger}" target="_blank" rel="noopener">Inquire on Messenger</a>
        <a class="btn outline" href="${mail}">Email us</a>
      </div>
    </div>`;

  // Clicking a small thumbnail swaps the big photo
  mBody.querySelectorAll(".thumbs button").forEach(btn => btn.addEventListener("click", () => {
    document.getElementById("mImg").src = p.images[btn.dataset.i];
    mBody.querySelectorAll(".thumbs button").forEach(b => b.setAttribute("aria-current", b === btn));
  }));

  modal.showModal();   // built-in: shows the pop-up, and Esc closes it
}

// Close the pop-up with the × button or by clicking the dark area outside it
document.getElementById("mClose").addEventListener("click", () => modal.close());
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });

// Connect the Contact section buttons to the CONTACT settings
document.getElementById("msgBtn").href = CONTACT.messenger;
document.getElementById("mailBtn").href = "mailto:" + CONTACT.email;

// The "Contact us now" buttons open a small bubble right under them with two choices
function closeBubbles() {
  document.querySelectorAll(".bubble").forEach(b => b.remove());
  document.querySelectorAll("[data-contact]").forEach(a => a.setAttribute("aria-expanded", "false"));
}
document.querySelectorAll("[data-contact]").forEach(btn => btn.addEventListener("click", e => {
  e.preventDefault();                      // don't scroll down the page
  const wasOpen = btn.getAttribute("aria-expanded") === "true";
  closeBubbles();                          // only one bubble at a time
  if (wasOpen) return;                     // clicking again closes it
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerHTML = `
    <a class="btn" href="${CONTACT.messenger}" target="_blank" rel="noopener">Message us on Messenger</a>
    <a class="btn outline" href="mailto:${CONTACT.email}">Email us</a>`;
  btn.parentElement.appendChild(bubble);
  btn.setAttribute("aria-expanded", "true");
}));
// Click anywhere else, or press Esc, to close the bubble
document.addEventListener("click", e => { if (!e.target.closest(".pop")) closeBubbles(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeBubbles(); });

// Go!
drawChips();
drawGrid();
