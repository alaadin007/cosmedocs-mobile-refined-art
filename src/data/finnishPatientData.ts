import type { PatientPageData } from './internationalPageTypes';
import { sharedPricingItems, sharedTreatmentMenu, sharedAboutPoints } from './swedishPatientData';

export const finnishData: PatientPageData = {
  lang: "fi",
  slug: "finnish-patients",
  hero: {
    badge: "Cosmedocs · Harley Street · Lontoo",
    h1: "Esteettinen klinikka Lontoossa suomalaisille potilaille",
    subtitle: "Lääkärijohtoinen esteettinen lääketiede – luonnolliset tulokset vuodesta 2007",
    tagline: "Turvallisen ja luonnollisen kauneudenhoitosi kohde Lontoossa",
  },
  welcome: {
    title: "Tervetuloa Cosmedocsiin",
    text: "Cosmedocs sijaitsee Lontoon kuuluisalla Harley Streetillä ja on vuodesta 2007 toivottanut tervetulleeksi potilaita Pohjoismaista. Tunnemme lääketieteellisestä tarkkuudestamme, luonnollisista tuloksistamme ja potilaan yksityisyyden kunnioittamisesta. Monet suomalaiset potilaat yhdistävät Lontoon matkansa hoitoihin – usein edullisemmin kuin Suomessa.",
    motto: "Todellinen kauneus on piirteidesi vahvistamista, ei muuttamista.",
  },
  whyChoose: {
    title: "Miksi suomalaiset potilaat valitsevat Cosmedocsin?",
    reasons: ["Lääkärit suorittavat kaikki hoidot", "Harley Streetillä vuodesta 2007", "Yli 1 miljoona injektiota", "Erikoistunut luonnollisiin tuloksiin", "Usein edullisempi kuin Suomessa", "Tiukka yksityisyyden suoja"],
  },
  philosophy: {
    title: "Filosofiamme: luonnollinen, ei koskaan liioiteltu",
    donts: ["Ei 'Instagram-kasvoja'", "Ei ylitäyttöä", "Ei vakiomalleja"],
    dos: ["Parannetut mittasuhteet", "Tasapainoinen lihasvoima", "Kevyempi, hienostuneempi – mutta silti sinä"],
    motto: "Luonnolliset tulokset eivät ole lupaus – ne ovat päivittäinen standardimme.",
  },
  haMakeover: {
    title: "Mikä on HA Makeover?",
    subtitle: "(Hyaluronihappo-pohjainen kasvojen nuorentaminen)",
    description: "Kokonaisvaltainen hoitosuunnitelma hyaluronihapolla tasapainon, volyymin ja hehkun palauttamiseksi – muuttamatta piirteitäsi.",
    goal: "Tavoite: Näytä nuoremmalta ja raikkaammalta ilman, että kukaan huomaa.",
    ages: [
      { label: "30+", age: "30-vuotiaat", items: ["Lievä volyymin menetys", "Väsyneet silmät", "Ensimmäiset hienot juonteet"], goal: "Ennaltaehkäisy ja säilyttäminen" },
      { label: "40+", age: "40-vuotiaat", items: ["Selvä volyymin menetys", "Lievä löystyminen", "Pysyvät juonteet"], goal: "Tasapainon palauttaminen" },
      { label: "50+", age: "50+ vuotiaat", items: ["Syvä volyymin menetys", "Muuttunut kasvojen muoto", "Näkyvä löystyminen"], goal: "Kokonaisvaltainen nuorentaminen" },
    ],
  },
  masseter: {
    title: "Masseter Botox (leuan kaventaminen)",
    intro: "Suosittu hoito pohjoismaisille potilaille, jotka haluavat kapeammat kasvonpiirteet.",
    suitableFor: ["Leveä leuka", "Hampaiden narskuttelu (bruksismi)", "Luonnollisen kasvojen kaventamisen toive"],
    advantages: ["Kontrolloitu annostelu", "Ei 'jäätynyttä' ilmettä", "Kapea mutta ei terävä"],
    result: "Tulos: Kevyemmät ääriviivat, pehmeämmät linjat – silti luonnollinen.",
  },
  calfReduction: {
    title: "Pohkeen hoikentaminen (Calf Reduction)",
    intro: "Cosmedocs on yksi Lontoon ensimmäisistä klinikoista, jotka tarjoavat pohkeen hoikentamista Botoxilla.",
    suitableFor: ["Lihaksikkaat pohkeet", "Ei halua leikkausta", "Haluaa hoikemmat jalkalinjat"],
    features: ["Tarkka lihaksen arviointi", "Kävelykyky säilyy", "Asteittainen, luonnollinen oheneminen"],
  },
  botox: {
    title: "Botox – luonnollisella tavalla",
    uses: ["Otsajuonteet", "Ryppyjuonteet", "Naururypyt", "Kulmakohotus"],
    benefits: ["Ei jäätymistä", "Säilytetty ilme", "Rentoutunut ja raikas ulkonäkö"],
  },
  skinTreatments: {
    title: "Ihonhoito",
    treatments: ["Profhilo", "Polynukleotidit", "Kemiallinen kuorinta", "Microneedling", "PRP"],
  },
  privacy: {
    title: "Yksityisyys ja luottamus",
    values: ["Yksityinen, rauhallinen ympäristö", "Suora yhteys lääkäriin", "Ei myyntipainetta", "Kulttuurinen kunnioitus"],
    footer: "Konsultaatio on rauhallinen, lääketieteellinen ja täysin sinulle räätälöity.",
  },
  pricing: {
    title: "Hinnat – Lontoo vs Suomi",
    intro: "Monet suomalaiset potilaat huomaavat Lontoon hintojen olevan usein edullisempia kuin kotimaassa.",
    comparison: [
      { treatment: "Botox 3 aluetta", local: "500–700 €", cosmedocs: "£350 (~410 €)" },
      { treatment: "Masseter Botox", local: "500–800 €", cosmedocs: "£350 (~410 €)" },
      { treatment: "Calf Reduction", local: "800–1 200 €", cosmedocs: "£750 (~880 €)" },
      { treatment: "Lip Filler 1ml", local: "400–600 €", cosmedocs: "£350 (~410 €)" },
      { treatment: "Nose Filler", local: "500–800 €", cosmedocs: "£450 (~530 €)" },
    ],
    items: sharedPricingItems,
  },
  treatmentMenu: {
    title: "Hoitovalikko",
    categories: sharedTreatmentMenu({ botox: "Botox", fillers: "Täyteaineet", skin: "Ihon nuorentaminen", contouring: "Muotoilu", medical: "Lääketieteellinen Botox", makeover: "HA Makeover" }),
  },
  aboutUs: {
    title: "Tietoa Cosmedocsista",
    points: sharedAboutPoints({ since: "Perustettu 2007 Harley Streetillä", injections: "Yli 1 miljoona injektiota", harley: "10 Harley Street, London W1G 9PF", doctors: "Kaikki hoidot lääkärin suorittamia", natural: "Filosofia: 'Näkymätön taide' – luonnolliset tulokset", regulated: "Säännelty, GMC-rekisteröity klinikka" }),
  },
  gallery: { title: "Todellisia potilastuloksia", disclaimer: "Tulokset vaihtelevat. Kuvat ovat muokkaamattomia ja näyttävät todellisia hoitotuloksia." },
  cta: {
    title: "Koska luonnollinen on kauneinta",
    details: ["📍 Harley Street, Lontoo", "👨‍⚕️ Vain lääkärijohtoiset hoidot", "🕰 Vuodesta 2007"],
    motto: "Muutoksen ei tarvitse näkyä. Kauneus on tunne.",
    buttonText: "Varaa konsultaatio",
  },
  faq: {
    title: "Usein kysytyt kysymykset",
    items: [
      { q: "Ottaako Cosmedocs vastaan suomalaisia potilaita?", a: "Kyllä. Konsultaatiot ovat englanniksi selkein selityksin." },
      { q: "Onko Lontoossa halvempaa?", a: "Usein kyllä. Botox 3 aluetta maksaa £350, verrattuna 500–700 € Suomessa." },
      { q: "Mikä on Masseter Botox?", a: "Masseter Botox kaventaa kasvoja rentouttamalla leukalihasta. Painotamme kontrolloitua annostelua." },
      { q: "Tarjoatteko pohkeen hoikentamista?", a: "Kyllä, olemme yksi Lontoon ensimmäisistä klinikoista. Hoito ohenentaa pohjelihasta asteittain." },
      { q: "Mikä on HA Makeover?", a: "Kokonaisvaltainen hyaluronihapon hoitosuunnitelma volyymin, rakenteen ja ihon laadun palauttamiseksi." },
      { q: "Miten varaan ajan?", a: "Voit varata ajan yhteystietosivultamme tai käyttää AI-avustajaamme verkkosivuillamme." },
    ],
  },
  disclaimer: "Tämä sivu on luotu tekoälyn avustuksella. Suosittelemme konsultoimaan erikoislääkäreitämme tarkimman tiedon saamiseksi.",
  seoText: "Cosmedocs esteettinen klinikka Harley Street Lontoo suomalaisille potilaille vuodesta 2007. Botox, täyteaineet, masseter botox leuan kaventaminen, pohkeen hoikentaminen, HA Makeover. Yli 1 miljoona injektiota. Lääkärijohtoinen esteettinen lääketiede luonnollisilla tuloksilla.",
  keywords: "esteettinen klinikka lontoo, suomalaiset potilaat lontoo, botox lontoo, masseter botox, pohkeen hoikentaminen, calf reduction, HA makeover, huulitäyte lontoo, Harley Street",
};
