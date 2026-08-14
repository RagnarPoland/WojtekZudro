---
slug: "core-web-vitals-w-praktyce"
title: "Core Web Vitals w praktyce: co poprawiać najpierw"
description: "LCP, INP i CLS bez żargonu: co mierzyć, jak poprawić wydajność małej strony na mobile i jak łączyć Core Web Vitals z SEO i konwersją."
date: 2026-04-08
category: "SEO techniczne"
readingTime: 11
featured: false
draft: false
tags:
  - core web vitals
  - wydajność
  - ux
  - seo techniczne
ctaLead: "Chcesz poprawić szybkość strony i Core Web Vitals na mobile?"
faq:
  - question: "Co to są Core Web Vitals w prostych słowach?"
    answer: "To trzy metryki Google mierzące szybkość i stabilność strony z perspektywy użytkownika: LCP (kiedy widać główną treść), INP (jak szybko reaguje na kliknięcie) i CLS (czy layout skacze). Głównie liczą się na mobile."
  - question: "Które strony poprawiać najpierw przy czerwonych wynikach w Search Console?"
    answer: "Stronę główną, top 3 usługi lub kategorie, landing z reklam oraz Kontakt z mapą — tam trafia ruch i leady. Stary wpis blogowy może poczekać, jeśli money pages są na czerwono."
  - question: "Czy wynik 100/100 w PageSpeed Insights oznacza dobre Core Web Vitals?"
    answer: "Nie zawsze — wynik laboratoryjny to symulacja. Ważniejsze są dane polowe (Rzeczywici użytkownicy) w PageSpeed i raport Core Web Vitals w Search Console, bo mierzą prawdziwe wizyty."
  - question: "W jakiej kolejności naprawiać LCP, CLS i INP?"
    answer: "Najpierw LCP — kompresja hero i cache, bo użytkownik widzi wolne ładowanie od razu. Potem CLS (skaczący layout przy cookie barze i obrazach). INP na końcu — często wymaga odchudzenia wtyczek i JavaScriptu."
  - question: "Czy słabe Core Web Vitals zawsze obniżają pozycję w Google?"
    answer: "CWV to jeden z wielu sygnałów rankingowych, nie cały algorytm. Mimo to wolna strona obniża konwersję i zaufanie — naprawa UX przy czerwonych wynikach często daje szybszy zwrot biznesowy niż kolejny wpis blogowy."
---

Klient na telefonie klika „Zadzwoń” — strona jeszcze 4 sekundy ładuje slider z pięcioma zdjęciami
 w 4K. Wychodzi. Ty nawet nie wiesz, że straciłeś leada — w statystykach widać tylko odrzucenie. 📱💨

**Core Web Vitals (CWV)** to zestaw metryk Google mierzących **szybkość i stabilność** strony
 z perspektywy użytkownika — głównie na **mobile**. Wpływają na **UX**, **konwersję** i (jako sygnał
 jakości) na **SEO**. Nie musisz być programistą, żeby wiedzieć **co poprawiać najpierw** i gdzie
 szukać czerwonych flag w Search Console.

Ten wpis to praktyczny plan dla małej firmy: cukiernia, sklep, warsztat, strona usługowa z WordPressem
 albo sklepem SaaS. Cotygodniowy przegląd raportu **Doświadczenie** opisujemy w wpisie o
 [5 raportach Search Console](/blog/wpis/search-console-5-raportow-tygodniowo/) — tu **co te liczby znaczą**
 i **kolejność napraw**.

---

## 🤖 Trzy metryki — trzy pytania użytkownika

| Skrót | Nazwa | Pytanie użytkownika | Progi (mobile, uproszczenie) |
|-------|-------|---------------------|------------------------------|
| **LCP** | Largest Contentful Paint | „Kiedy widzę główną treść?” | ≤ 2,5 s dobrze |
| **INP** | Interaction to Next Paint | „Czy po kliknięciu coś się dzieje?” | ≤ 200 ms dobrze |
| **CLS** | Cumulative Layout Shift | „Czy strona skacze, gdy klikam?” | ≤ 0,1 dobrze |

**LCP** — czas do wyświetlenia największego elementu (hero, duże zdjęcie, nagłówek).  
**INP** — opóźnienie reakcji na tapnięcie (menu, przycisk, formularz) — zastąpiło starsze FID.  
**CLS** — elementy przeskakują (np. reklama lub baner cookies wciska treść w dół w momencie kliknięcia).

Google ocenia strony na **danych z prawdziwych użytkowników Chrome** (pole „Origin” / URL w Search Console)
 oraz w testach laboratoryjnych (PageSpeed Insights).

---

## 🎯 Dlaczego to ma znaczenie poza „punktami SEO”

- **Mobile first** — większość lokalnych i B2C wyszukań kończy się telefonem.
- **Konwersja** — wolna strona = mniej formularzy i telefonów, nawet przy dobrej pozycji.
- **Koszt Ads** — słaba strona docelowa podnosi **bounce**; PPC też traci ([SEO vs PPC](/blog/wpis/seo-vs-ppc-roi/)).
- **Zaufanie** — muląca witryna wygląda jak firma, która „może nie ogarnia” — to uderza w [E-E-A-T](/blog/wpis/budowanie-autorytetu-eeat/).

SEO: CWV to **jeden z sygnałów**, nie cały ranking. Ale poprawa UX przy słabych wynikach często
 daje szybki **biznesowy** zwrot — czasem ważniejszy niż kolejny wpis blogowy.

---

## 📊 Gdzie sprawdzić wyniki (2 miejsca wystarczą)

1. **Search Console → Doświadczenie → Core Web Vitals** — URL-e na czerwono / żółto / zielono
   (dane polowe — realni użytkownicy).
2. **[PageSpeed Insights](https://pagespeed.web.dev/)** — wpisz adres; sekcja „Rzeczywici użytkownicy”
   + „Lab” z listą rekomendacji.

**Priorytet URL-i:** strona główna, top 3 usługi / kategorie, landing z reklam, strona Kontakt z mapą.

Nie optymalizuj najpierw starego wpisu blogowego z 2019, jeśli **Kontakt** i **Oferta** są czerwone.

---

## 🪜 Kolejność napraw — od największego bólu

### Krok 1: LCP — „co wolno się pokazuje?”

**Typowe winowajcy:**

- Ogromne zdjęcie hero bez kompresji (2–5 MB).
- Slider z wieloma slajdami od razu.
- Wolny serwer / brak cache.
- Czcionki i CSS blokujące render.

**Szybkie wygrane:**

- Kompresja obrazów → **WebP** / AVIF, sensowna szerokość (np. 1200–1600 px na hero, nie 4000).
- **Jedno** główne zdjęcie above the fold zamiast karuzeli.
- **Lazy loading** na obrazach poniżej pierwszego ekranu (`loading="lazy"`).
- Cache na hostingu / CDN (Cloudflare itd.) — zapytaj dział wsparcia hostingu (np. SEOHost).

**🎂 Cukiernia:** zdjęcie tortu w hero — 150 KB zamiast 3 MB to często różnica jak dzień i noc dla LCP.  
**📺 Sklep RTV:** miniatury produktów — jeden format, jedna jakość, bez oryginałów z aparatu.

### Krok 2: CLS — „dlaczego wszystko skacze?”

**Typowe winowajcy:**

- Baner cookies wpychający stronę.
- Obrazy bez `width` / `height` — przeglądarka nie rezerwuje miejsca.
- Fonty ładujące się późno — tekst „miga” i przesuwa layout.
- Reklamy / widgety czatu wstawiane dynamicznie.

**Szybkie wygrane:**

- Rezerwuj miejsce na obrazki (wymiary w HTML lub aspect-ratio w CSS).
- Cookie bar — stała wysokość lub overlay, bez przesuwania całej strony w dół.
- `font-display: swap` + preload kluczowej czcionki (motyw lub programista).
- Opóźnij widget czatu do scrolla lub 5 s po LCP.

### Krok 3: INP — „dlaczego menu muli?”

**Typowe winowajcy:**

- 15 wtyczek WordPress (slider, pop-up, chat, analytics × 3).
- Ciężki JavaScript motywu / page buildera.
- Brak optymalizacji formularzy i filtrów sklepu.

**Szybkie wygrane:**

- Wyłącz **nieużywane wtyczki** — każda to potencjalny JS.
- Jedna wtyczka cache + minifikacja (WP Rocket, LiteSpeed — w zależności od hostingu).
- Uprość menu mobile — bez animacji 2 s.
- Przenieś analitykę / pixel do **Google Tag Manager** z kontrolą ładowania.

Przy sklepie SaaS (Shoper, IdoSell) — część optymalizacji robi platforma; i tak sprawdź **obrazy
 produktów** i **liczbę widgetów** w szablonie.

---

## 🏭 Priorytety wg typu strony

| Typ strony | LCP | CLS | INP |
|------------|-----|-----|-----|
| **Strona usługowa (5–15 podstron)** | Hero, zdjęcia realizacji | Cookie bar, mapa Google | Menu, formularz |
| **Sklep (<500 produktów)** | Lista kategorii, karta produktu | Obrazy produktów bez wymiarów | Filtry, koszyk |
| **Blog + oferta** | Wpis z dużymi zdjęciami | Embed YouTube / reklamy | Komentarze, widgety udostępniania |
| **Landing pod Ads** | Jeden komunikat, lekki hero | Brak pop-upów zasłaniających CTA | Przycisk CTA natychmiastowy |

---

## 🔧 Plan 2 tygodnie — bez rewolucji w kodzie

| Dzień | Zadanie |
|-------|---------|
| 1 | PageSpeed Insights: 3 kluczowe URL-e — zapisz LCP, INP, CLS |
| 2–3 | Kompresja wszystkich obrazów above the fold |
| 4 | Lazy load na reszcie obrazów; wymiary w HTML gdzie brakuje |
| 5 | Audyt wtyczek / skryptów — wyłącz zbędne |
| 6–7 | Cookie bar / chat — poprawa CLS |
| 8 | Cache + ewentualnie CDN u hostingu |
| 9–10 | Ponowny test; Search Console za tydzień–dwa — czy mniej czerwieni |

Jedna duża zmiana → test → następna. Nie pięć naraz — nie wiesz, co zadziałało.

---

## 📈 Jak łączyć CWV z biznesem

Przed i po (2–4 tygodnie):

| Metryka techniczna | Metryka biznesowa |
|--------------------|-------------------|
| LCP z czerwonego → zielone | Bounce rate na mobile ↓ |
| CLS poprawiony | Mniej „misclicków” na formularzu |
| INP lepszy | Więcej kliknięć „Telefon” w GA4 |

Jeśli CWV zielone, a **zero leadów** — problem leży w **treści / CTA**, nie w wydajności
 ([inbound](/blog/wpis/staly-doplyw-ruchu-inbound/)). Jeśli CWV czerwone — napraw najpierw technikę,
 potem A/B nagłówka.

---

## 🚫 Mity

**„Desktop jest szybki — wystarczy”** — Google patrzy na mobile; desktop to drugie skrzypce.

**„PageSpeed 100/100 albo nic”** — lab to cel treningowy; **field data** w GSC ważniejsze dla użytkowników.

**„Wtyczka naprawi wszystko jednym kliknięciem”** — cache pomaga, ale 3 MB hero nadal boli bez kompresji.

**„CWV = hosting”** — hosting ma znaczenie, ale obrazy i JS często ważą więcej niż TTFB.

**„Blog może mulić, oferta musi być szybka”** — tak, ale blog też buduje pierwsze wrażenie z Google.

---

## ✅ Checklist Core Web Vitals

- [ ] 📱 Test **mobile** PageSpeed dla: strona główna, top usługa, Kontakt.
- [ ] 🔴 Search Console CWV — lista czerwonych URL-i (priorytet money pages).
- [ ] 🖼️ Obrazy hero skompresowane (WebP/AVIF), lazy load poniżej fold.
- [ ] 📐 Wymiary obrazów / brak skakania layoutu (CLS).
- [ ] 🧩 Audyt wtyczek i skryptów (INP).
- [ ] 🍪 Cookie bar i chat nie psują CLS.
- [ ] 🔄 Ponowny test po 2 tygodniach + porównanie bounce / leadów.

---

## 💡 Podsumowanie

**Core Web Vitals** to trzy pytania: *czy szybko widać treść (LCP), czy strona reaguje (INP),
 czy nie skacze (CLS)*. Dla małej firmy wystarczy skupić się na **kilku kluczowych URL-ach**,
 obrazach i zbędnym JavaScript — bez planowania pełnego przepisania całej strony.

Wolna witryna to cichy zabójca leadów — szczególnie na telefonie, gdzie klient porównuje Cię
 z konkurencją jednym kciukiem. Napraw LCP na stronie głównej i ofercie, potem CLS, potem INP —
 i dopiero wtedy dokładaj kolejne warstwy SEO. Reszta optymalizacji i tak nie pomoże, jeśli użytkownik
 wyszedł w trzeciej sekundzie ładowania. ⏱️

Następny krok: wklej adres strony głównej w PageSpeed Insights — jeśli LCP na czerwono,
 zmień **jedno** zdjęcie hero na skompresowaną wersję i zmierz ponownie jutro.
