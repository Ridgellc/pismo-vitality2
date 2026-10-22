// Every fact below comes from Pismo Vitality's own treatment pages.
const BASE = "https://ridgellc.github.io/pismo-vitality/";
const PLANS = {
  lines: {
    tile: ["Lines and wrinkles", "Frown lines, crow's-feet"],
    name: "Injectables", form: "Injectables", page: "injectables/",
    lead: "Xeomin, Botox and Jeuveau relax the muscles between your brows and at the corners of your eyes, so frown lines and crow's-feet soften.",
    facts: [["Used for", "Frown lines and crow's-feet"], ["Brands", "Xeomin, Botox, Jeuveau"], ["Approved by", "The FDA"], ["Lasts", "Typically up to 3 months"]],
    also: "Also ask about fillers, which replenish lost volume right away (Radiesse, Belotero, Juvederm XC plus).",
    img: ["shutterstock_57431923-pgiycyaitbh9ezuk2ecy6x09il7p774l3nbrrtw7gs.jpg", "Smooth, refreshed skin"], ba: false,
    timeline: [["Day 3 to 4", "Some patients see smoothing"], ["Day 14", "Effect usually at its peak"], ["Month 3", "Typical effect lasts up to here"]],
  },
  sun: {
    tile: ["Sun spots and redness", "Freckles, rosacea, vessels"],
    name: "IPL Photorejuvenation", form: "IPL Photorejuvenation", page: "ipl-photorejuvenation/",
    lead: "Lumecca IPL sends gentle pulses of light at dark spots, rosacea and small vessels on the face, neck, chest, hands, arms and legs.",
    facts: [["Time in the chair", "About 30 minutes"], ["How it feels", "Most people don't find it painful"], ["Skin types", "Safe for all skin types"], ["Sessions", "Several may be recommended"]],
    img: ["ba_icon_skrenew_palcyno_post1m3tx.jpg", "IPL photorejuvenation before and after"], ba: true,
    timeline: [["Right after", "Back to normal activities"], ["First days", "A sunburn-like feeling and minor swelling that fade quickly"], ["Next sessions", "Booked as recommended for your skin"]],
  },
  hair: {
    tile: ["Unwanted hair", "Face or body"],
    name: "Laser Hair Removal", form: "Laser Hair Removal", page: "laser-hair-removal/",
    lead: "The Elite iQ system targets the hair cells that make hair grow, without damaging the skin around them. Treatments are personalized to your skin type.",
    facts: [["Time in the chair", "Most sessions under 30 minutes"], ["How it feels", "Not considered painful"], ["Skin types", "Works on all skin types"], ["Result", "Permanent hair reduction"]],
    img: ["ba_icon_hairrem_madatto_post3tx.jpg", "Laser hair removal before and after"], ba: true,
    timeline: [["Right after", "Back to your day"], ["First days", "Possibly a sunburn-like feeling and minor swelling"], ["Over a series", "Smooth skin that lasts"]],
  },
  fat: {
    tile: ["Stubborn fat", "Belly and flanks"],
    name: "SculpSure", form: "SculpSure", page: "sculpsure/",
    lead: "SculpSure is a non-invasive laser that heats and breaks down stubborn fat on the waistline and abdomen. No surgery and no anesthetic.",
    facts: [["Time in the chair", "About 25 minutes"], ["How it feels", "A slight tingling"], ["Downtime", "Practically none"], ["Best for", "A pinchable layer of fat"]],
    also: "Larger areas like the back or legs? Ask about Smartlipo laser liposuction.",
    img: ["sculpsureba04.jpg", "SculpSure before and after 12 weeks, 2 treatments, flanks and abdomen"], ba: true,
    timeline: [["Right after", "Back to normal activities"], ["Week 6", "Many people start to see results"], ["Week 12", "Best results usually show"]],
  },
  texture: {
    tile: ["Scars, pores, texture", "Acne scars, stretch marks"],
    name: "Morpheus8", form: "Skin Tightening and Resurfacing", page: "laser-skin-resurfacing/",
    lead: "Morpheus8 pairs micro-needling with radiofrequency energy to trigger new collagen, smoothing texture and firming the skin.",
    facts: [["Treats", "Fine lines, pores, acne scars, stretch marks"], ["Comfort", "Numbing cream or local anesthesia"], ["Skin tones", "Suitable for all skin tones"], ["Sessions", "Up to 3, four to six weeks apart"]],
    also: "Also ask about Helix laser resurfacing: CO2, FUSION and Sultra.",
    img: ["ba_icon_skrenew_h_alibhia_post3tx.jpg", "Skin resurfacing before and after"], ba: true, special: true,
    timeline: [["First days", "Some swelling and redness"], ["Weeks 4 to 6", "Your next session"], ["After the series", "Smoother, firmer skin"]],
  },
  tighten: {
    tile: ["Loose skin, no needles", "Tighten and smooth"],
    name: "TempSure Envi and Firm", form: "Tempsure", page: "tempsure/",
    lead: "TempSure gently heats the skin with radiofrequency, which triggers new collagen. It softens fine lines, tightens skin and improves the look of cellulite.",
    facts: [["Needles", "None, and no surgery"], ["How it feels", "Like a hot stone massage, patients say"], ["Downtime", "None"], ["Sessions", "3 to 5, about 4 weeks apart"]],
    img: ["prd_tempsure_envi_ba.jpg", "TempSure Envi before and after"], ba: true,
    timeline: [["Right after", "A glow, maybe slight redness"], ["Every 4 weeks", "Your next treatment"], ["After 3 to 5", "Collagen keeps rebuilding"]],
  },
  weight: {
    tile: ["Weight loss", "With the doctor"],
    name: "Weight Loss", form: "Weight Loss", page: "weight-loss/",
    lead: "A doctor-run weight loss program where you see the local doctor, face to face, in the office.",
    facts: [["Built for", "Your needs and goals"], ["Check-ins", "Monthly with the doctor, in person"], ["Options", "Medication, meal and exercise plans, supplements and more"], ["Length", "As long as you need, stop anytime"]],
    img: ["amazing_skin_50s-pgiydom04ohag2sbspqi4qd65dlz6q12j9ld7kt6mk.jpg", "An active life on the Central Coast"], ba: false,
    timeline: [["First visit", "Your plan, made with the doctor"], ["Every month", "An in-office check-in"], ["Your call", "Keep going or stop anytime"]],
  },
  unsure: {
    tile: ["Not sure yet", "Talk it through first"],
    name: "A consultation", form: "Not sure yet", page: "treatments/",
    lead: "Not sure what you need? That's what the consultation is for. Dr. Weiss looks at what's bothering you and lays out the options.",
    facts: [["Skin", "Peels, IPL, lasers, Morpheus8"], ["Face", "Injectables and fillers"], ["Body", "SculpSure, Smartlipo, TempSure"], ["Hair", "Laser hair removal"]],
    img: ["amazing_skin_50s-pgiydom04ohag2sbspqi4qd65dlz6q12j9ld7kt6mk.jpg", "Enjoying the Central Coast"], ba: false,
    timeline: [["Consultation", "Talk through what you'd like"], ["Your plan", "The options that fit you"], ["Next step", "Start when you're ready"]],
  },
};
const FORM_TREATMENTS = ["Chemical Peel", "CO2/Laser Resurfacing", "Tempsure", "Fillers", "Injectables", "IPL Photorejuvenation",
  "Skin Tightening and Resurfacing", "Laser Hair Removal", "SculpSure", "SmartLipo", "Weight Loss", "Microdermabrasion",
  "Laser Scar Removal", "Stretch Mark Removal", "Skin care products", "Makeover (Jane Iredale)", "Not sure yet"];
const HOURS = [["Sunday", null], ["Monday", "8:00 am", "4:30 pm"], ["Tuesday", "8:00 am", "4:30 pm"], ["Wednesday", "8:00 am", "4:30 pm"],
  ["Thursday", "8:00 am", "4:30 pm"], ["Friday", "8:00 am", "3:00 pm"], ["Saturday", null]];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- concern tiles ---------- */
const grid = $(".concern-grid");
for (const [key, p] of Object.entries(PLANS)) {
  const b = document.createElement("button");
  b.type = "button"; b.className = "concern"; b.dataset.key = key; b.setAttribute("aria-pressed", "false");
  b.innerHTML = `<b>${p.tile[0]}</b><small>${p.tile[1]}</small>`;
  b.addEventListener("click", () => { choose(key, true); });
  grid.append(b);
}
$("#rq-treatment").innerHTML = FORM_TREATMENTS.map((t) => `<option>${t}</option>`).join("");

/* ---------- personalize the walk-through ---------- */
const swapEls = [".t-title", ".t-lead", ".t-facts", ".t-also", ".frame-ba", ".t-timeline"].map((s) => $(s));
swapEls.forEach((el) => el.classList.add("swap"));
let currentKey = null;

function render(key) {
  const p = PLANS[key];
  $(".t-title").textContent = key === "unsure" ? "Your consultation." : `${p.name}.`;
  $(".t-lead").textContent = p.lead;
  $(".t-facts").innerHTML = p.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");
  const also = $(".t-also"); also.hidden = !p.also; also.textContent = p.also || "";
  $(".t-link").href = BASE + p.page;
  $(".t-link").textContent = key === "unsure" ? "See every treatment" : `Read more about ${p.name}`;
  const img = $(".t-img"); img.src = "images/" + p.img[0]; img.alt = p.img[1];
  $(".t-cap").hidden = !p.ba;
  $(".t-timeline").innerHTML = p.timeline.map(([w, t]) => `<li><span class="when">${w}</span><span class="what">${t}</span></li>`).join("");
  $(".special").hidden = !p.special;
  $$(".plan-inline").forEach((el) => { el.textContent = key === "unsure" ? "what you'd like to change" : p.tile[0].toLowerCase(); });
  $(".plan-name").textContent = p.tile[0];
  $("#rq-treatment").value = p.form;
  litTimeline();
}

function choose(key, jump) {
  $$(".concern").forEach((b) => b.setAttribute("aria-pressed", b.dataset.key === key));
  if (currentKey && !reduced) {
    swapEls.forEach((el) => el.classList.add("is-out"));
    setTimeout(() => { render(key); swapEls.forEach((el) => el.classList.remove("is-out")); }, 250);
  } else {
    render(key);
  }
  currentKey = key;
  onScroll();
  if (jump) $("#step-1").scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
}
$(".plan-change").addEventListener("click", () => {
  $("#concerns").scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
  setTimeout(() => $(".concern[aria-pressed=true]")?.focus({ preventScroll: true }), reduced ? 0 : 600);
});
render("unsure");
$(".plan-pill").hidden = true;

/* ---------- hours: open today? (Pacific time) ---------- */
(function hours() {
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
  const day = now.getDay();
  const mins = now.getHours() * 60 + now.getMinutes();
  const toMin = (t) => { const [h, m] = t.split(/[: ]/); let x = (+h % 12) * 60 + +m; if (t.endsWith("pm")) x += 720; return x; };
  $("#hours").innerHTML = HOURS.map(([d, o, c], i) =>
    `<li${i === day ? ' class="is-today"' : ""}><span>${d}</span><span>${o ? `${o} to ${c}` : "Closed"}</span></li>`).join("");
  const [, open, close] = HOURS[day];
  const today = $("#today");
  if (open && mins >= toMin(open) && mins < toMin(close)) {
    today.textContent = `Open now, until ${close}`; today.classList.add("is-open");
  } else {
    let n = day, label = "";
    for (let k = 0; k < 7; k++) {
      const d = (day + k) % 7;
      if (HOURS[d][1] && (k > 0 || mins < toMin(HOURS[d][1]))) { n = d; label = k === 0 ? "today" : k === 1 ? "tomorrow" : HOURS[d][0]; break; }
    }
    today.textContent = `Closed now. Opens ${label} at ${HOURS[n][1]}`;
  }
})();

/* ---------- header and step rail follow the scroll ---------- */
const header = $(".top");
const railItems = $$(".rail li");
const stepIds = ["step-1", "step-2", "step-3", "step-4", "book"];
const fill = $(".rail-fill");
function onScroll() {
  header.classList.toggle("is-solid", scrollY > innerHeight * 0.75);
  $(".plan-pill").hidden = !currentKey || scrollY < $(".intro").offsetHeight * 0.8;
  const mid = innerHeight * 0.45;
  let here = -1;
  stepIds.forEach((id, i) => { if (document.getElementById(id).getBoundingClientRect().top < mid) here = i; });
  railItems.forEach((li, i) => { li.classList.toggle("is-done", i < here); li.classList.toggle("is-here", i === here); });
  const visit = $(".steps").getBoundingClientRect();
  const p = Math.min(1, Math.max(0, (mid - visit.top) / visit.height));
  fill.style.height = `${p * 100}%`;
  litTimeline();
}
function litTimeline() {
  const lis = $$(".t-timeline li");
  const tl = $(".t-timeline").getBoundingClientRect();
  const shown = tl.top < innerHeight * 0.8 ? lis.length : 0;
  lis.forEach((li, i) => setTimeout(() => li.classList.toggle("is-lit", i < shown), reduced ? 0 : i * 220));
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- appointment request (same form and inbox as the main site) ---------- */
const form = $("#request-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!form.reportValidity()) return;
  const error = $(".form-error", form);
  const done = $("#request-done");
  const name = form.elements.name.value;
  const fields = {};
  new FormData(form).forEach((v, k) => { fields[k] = fields[k] ? `${fields[k]}, ${v}` : v; });
  if (fields.botcheck) return;
  const btn = $("button[type=submit]", form), label = btn.textContent;
  btn.disabled = true; btn.textContent = "Sending..."; error.hidden = true;
  try {
    const body = new FormData();
    Object.entries({
      access_key: form.dataset.formKey, from_name: "Pismo Vitality Website (sample 2)",
      subject: `${form.dataset.subject}: ${name.trim()}${fields.treatment ? ` (${fields.treatment})` : ""}`,
      ...fields,
    }).forEach(([k, v]) => body.append(k, v));
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { Accept: "application/json" }, body });
    if (!(await res.json()).success) throw new Error("not sent");
  } catch {
    error.hidden = false; return;
  } finally {
    btn.disabled = false; btn.textContent = label;
  }
  const first = name.trim().split(/\s+/)[0];
  $(".done-name", done).textContent = first ? `, ${first}` : "";
  form.hidden = true; done.hidden = false; done.focus();
});
