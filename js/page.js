// The page: a soft pink hero with her name in rounded type, the vertical
// series in a phone-shaped frame, credits, stills from set and a footer.
import { html, featuredCredits, poster, reel, socials, representation } from "./components.js";

export default function page(c) {
  const p = c.person;
  const v = c.reels.verticalDrama;
  const stills = c.stills.items || [];
  return html`
  <section class="k-hero" id="top">
    <nav class="k-nav wrap"><a href="#top" aria-current="page">Home</a><a href="#reel">Reel</a><a href="#credits">Credits</a>${stills.length ? html`<a href="#stills">On set</a>` : ""}<a href="#about">About</a><a href="#contact">Contact</a></nav>
    <div class="k-hero__in wrap">
      <div class="k-hero__text">
        <p class="k-hero__tag">${c.hero.tagline}</p>
        <h1 class="k-name"><span>${p.firstName}</span><span>${p.lastName}</span></h1>
        <p class="k-hero__sub">${c.hero.subline}</p>
        <a class="k-btn" href="#reel">Watch her reel</a>
      </div>
      <figure class="k-hero__photo"><img src="${c.images.hero}" alt="${p.fullName}"></figure>
    </div>
    <span class="k-dots" aria-hidden="true"></span>
  </section>

  <section class="k-reel wrap" id="reel">
    <div class="k-phone">${reel(v)}</div>
    <div class="k-reel__copy">
      <p class="k-eyebrow">Vertical series</p>
      <h2 class="k-title">${v.title}</h2>
      <p class="k-role">${v.role}</p>
      <p class="k-text">${v.description}</p>
    </div>
  </section>

  <section class="k-credits" id="credits">
    <div class="wrap">
      <h2 class="k-label">Credits</h2>
      <div class="k-posters">${featuredCredits(c).map((cr) => poster(cr, { caption: true, meta: true }))}</div>
    </div>
  </section>

  ${stills.length ? html`<section class="k-stills wrap" id="stills">
    <h2 class="k-label">${c.stills.title}</h2>
    <div class="k-stills__grid">${stills.map(
      (s) => html`<figure class="k-still"><img src="${s.src}" alt="${s.caption || `${p.firstName} on set`}" loading="lazy">${s.caption ? html`<figcaption>${s.caption}</figcaption>` : ""}</figure>`
    )}</div>
  </section>` : ""}

  <section class="k-about" id="about">
    <div class="k-about__in wrap">
      <figure class="k-about__photo"><img src="${c.images.about}" alt="" loading="lazy"></figure>
      <div>
        <h2 class="k-label">About ${p.firstName}</h2>
        ${c.about.paragraphs.map((x) => html`<p>${x}</p>`)}
      </div>
    </div>
  </section>

  <footer class="k-foot" id="contact">
    <div class="k-foot__in wrap">
      <div>
        <h2 class="k-label">Contact</h2>
        ${c.representation.note ? html`<p class="k-foot__note">${c.representation.note}</p>` : ""}
      </div>
      <div class="k-foot__col">${representation(c)}</div>
      <div class="k-foot__col"><p>${p.location}</p><p><a href="${p.imdb}" target="_blank" rel="noopener">IMDb profile</a></p></div>
      ${socials(c, "socials k-foot__socials")}
    </div>
  </footer>`;
}
