---
slug: "search-console-5-raportow-tygodniowo"
title: "Search Console: 5 raportów, które warto sprawdzać co tydzień"
description: "Prosty rytuał analityczny dla małej firmy: co kliknąć w Google Search Console, żeby widzieć problemy zanim urosną."
date: 2026-07-08
category: "Analityka"
readingTime: 12
featured: false
draft: false
tags:
  - search console
  - analityka
  - google
  - raporty
ctaLead: "Chcesz regularnie wyciągać wnioski z Google Search Console?"
faq:
  - question: "Ile czasu tygodniowo wystarczy na sensowny przegląd Search Console?"
    answer: "15–20 minut raz w tygodniu — pięć raportów i jedna konkretna decyzja na następny tydzień. To kompromis między brakiem analityki a siedzeniem godzinami w wykresach."
  - question: "Które 5 raportów w Search Console warto sprawdzać najczęściej?"
    answer: "Wydajność (zapytania, kliknięcia), Strony w indeksowaniu, Mapa witryny, Doświadczenie (Core Web Vitals na mobile) oraz Linki zewnętrzne. Ten zestaw daje obraz ruchu, indeksacji, techniki i sygnałów zaufania."
  - question: "Czym różni się Search Console od Google Analytics?"
    answer: "Search Console pokazuje, jak strona wygląda w wyszukiwarce Google: zapytania, kliknięcia, indeksacja, mapa witryny. Analytics mierzy zachowanie na stronie po wejściu. Oba się uzupełniają — jedno to wyszukiwarka, drugie to witryna."
  - question: "Co zrobić, gdy nowy wpis na blogu nie jest zindeksowany?"
    answer: "Sprawdź link wewnętrzny z menu lub innego artykułu, czy URL jest w mapie witryny i czy przypadkiem nie ma noindex. Dla pojedynczej strony możesz użyć „Sprawdź adres URL” i poprosić o indeksowanie — to prośba, nie gwarancja."
  - question: "Czy warto panikować przy jednodniowym spadku kliknięć w Search Console?"
    answer: "Nie — porównuj trendy tygodniowe (np. ostatnie 28 dni vs poprzednie 28). Jednodniowe wahania to szum. Ważniejsze: czy spadek dotyczy stron, które realnie dowiozły leady, i czy masz jedną decyzję naprawczą na tydzień."
---

Google Search Console brzmi jak narzędzie „dla informatyków” — a to **darmowy panel**, w którym Google mówi,
jak widzi Twoją stronę w wyszukiwarce: co ludzie wpisują, na co klikają, co się indeksuje, a co leży
w kącie jak niewyprane skarpetki. 🧦

Nie musisz siedzieć tam godzinę dziennie. Wystarczy **15–20 minut raz w tygodniu** i pięć raportów,
które dają sensowny obraz zdrowia strony. Ten wpis jest dla właściciela firmy, marketera „od wszystkiego”
albo osoby, która sama ogarnia stronę — od cukierni po warsztat samochodowy, od sklepu z elektroniką po biuro rachunkowe.

Jeśli chcesz też wiedzieć, **co robić z danymi po zebraniu**, zajrzyj do wpisu o
[market insight z SEO](/blog/wpis/market-insight-z-seo/) — tam, jak wyciągać intencje klientów z zapytań.

## ☕ Dlaczego co tydzień, a nie „kiedyś”

SEO i widoczność nie psują się z dnia na dzień — ale **sygnały ostrzegawcze** często widać wcześniej:

- spadek kliknięć na stronę, która zawsze przynosiła zapytania;
- nowa podstrona, która Google w ogóle nie indeksuje;
- błąd techniczny po aktualizacji strony;
- frazy, o których nie wiedziałeś, a ludzie już po nie szukają.

Tygodniowy rytm (np. poniedziałek rano z kawą ☕) to kompromis między „zero analityki” a obsesją na wykresach.
Masz pętlę feedbacku bez życia w Excelu.

## 🗺️ Gdzie w ogóle wejść

1. Wejdź na [search.google.com/search-console](https://search.google.com/search-console).
2. Zaloguj się kontem Google.
3. Wybierz **właściwą witrynę** (adres Twojej strony).
4. Menu po lewej — stamtąd raporty poniżej.

Jeśli nie masz jeszcze dodanej strony — Search Console poprosi o **weryfikację** (plik na serwerze, meta tag
albo DNS u hostingu). To jednorazowa procedura, potem już normalna praca.

---

## 1️⃣ Wydajność (Performance / Wyniki wyszukiwania)

**Co to jest:** serce Search Console. Widzisz **zapytania** (co ludzie wpisują w Google), **kliknięcia**,
**wyświetlenia**, **CTR** (ile osób kliknęło vs zobaczyło wynik) i **średnią pozycję**.

**Co sprawdzić w 5 minut:**

- **Ostatnie 28 dni** vs poprzednie 28 dni — czy kliknięcia rosną, stoją, spadają?
- **Zapytania** — sortuj po kliknięciach: co realnie dowozi ruch?
- **Strony** — które URL-e są najczęściej klikane?

**Przykłady z różnych branż:**

| Branża | Co możesz zobaczyć | Co z tego wynika |
|--------|-------------------|------------------|
| 🎂 Cukiernia | „tort urodzinowy na zamówienie [miasto]” | warto mieć podstronę / wpis z cennikiem i zdjęciami |
| ❄️ Instalator HVAC | „serwis klimatyzacji cennik” | ludzie szukają ceny — daj orientacyjny zakres lub formularz wyceny |
| 📺 Sklep RTV | „soundbar do samsung [model]” | brakuje poradnika kompatybilności → stracone kliknięcia |
| 🔧 Warsztat | „wymiana opon [dzielnica]” | sezonowy skok — przygotuj landing przed sezonem |

**Pułapka:** patrzenie tylko na wyświetlenia. Wyświetlenie to „ktoś mógł zobaczyć wynik” — **kliknięcie**
to „ktoś wszedł”. Dla biznesu ważniejsze są kliknięcia i jakość strony po wejściu.

**Działanie:** zapisz 3 frazy, które rosną, i 3, które spadły. Jedna decyzja na tydzień — np. nowy akapit
w artykule, doprecyzowanie tytułu, strona z FAQ pod pytanie klientów.

---

## 2️⃣ Indeksowanie → Strony (Pages)

**Co to jest:** lista adresów, które Google **zna** — i status: zindeksowane, niezindeksowane, z problemem.

**Co sprawdzić:**

- Czy **nowy wpis na blogu** albo **nowa podstrona oferty** pojawiła się jako „zindeksowana”?
- Czy coś ważnego ma status **„Nie zindeksowano”** z powodem (duplicate, redirect, crawled not indexed…)?

**Typowy scenariusz:** dodałeś piękny poradnik „Jak dobrać moc pompy ciepła” — minęło 10 dni, strony
nie ma w indeksie. Bez tego raportu dowiesz się przypadkiem za pół roku. Z raportem — wcześniej: brak linku
wewnętrznego, brak w mapie witryny, przypadkowego [noindex](/blog/wpis/indeksacja-noindex-i-canonical/) przy kopiowaniu szablonu. 🔍

**Działanie:** jeśli ważna strona nie jest zindeksowana — sprawdź link wewnętrzny, mapę XML, czy przypadkiem
nie ma blokady. W razie wątpliwości użyj **„Poproś o indeksowanie”** (Inspect URL / Sprawdź adres URL)
dla pojedynczej strony — to prośba, nie gwarancja, ale czasem przyspiesza.

---

## 3️⃣ Indeksowanie → Mapa witryny (Sitemap)

**Co to jest:** status pliku **sitemap.xml**, który wysyłasz Google jako spis ważnych adresów.

**Co sprawdzić:**

- Czy mapa jest **„Pomyślnie przetworzona”** (bez czerwonych flag)?
- Czy liczba **odkrytych URL-i** ma sens względem tego, co naprawdę masz na stronie?
- Czy po publikacji nowych wpisów mapa została **zaktualizowana** (ręcznie lub przez build bloga)?

**Analogia:** sitemap to lista gości wysłana do Google — „proszę odwiedzić te pokoje”. Jeśli listy nie ma
albo jest stara, robot może ominąć nowy „pokój” (wpis, promocję). 🏠

**Działanie:** raz na tydzień rzut oka — czy data ostatniego odczytu jest świeża. Po większej aktualizacji
strony warto sprawdzić, czy nowe URL-e weszły do mapy.

---

## 4️⃣ Doświadczenie na stronie (Experience) — Core Web Vitals i mobile

**Co to jest:** sekcja o **użyteczności**: szybkość ładowania, stabilność layoutu, mobile-friendly.
Często pod etykietą **Core Web Vitals** (LCP, INP, CLS — brzmi skomplikowanie, ale chodzi o szybkość i stabilność strony 🤖).

**Co sprawdzić bez doktoratu:**

- Czy jest dużo URL-i na **czerwono** („Słabe”)?
- Czy problem dotyczy **mobile** (telefony) — u większości małych firm tak właśnie jest?

**Przykład:** sklep z elektroniką ma świetne zdjęcia produktów — i strona ładuje się na telefonie 8 sekund.
Google może to uwzględnić; klient na pewno **nie czeka** i idzie do konkurencji. Search Console tu tylko
**pokazuje lampkę** — naprawa to kompresja obrazów, lżejszy motyw, mniej wtyczek (wpis o
[Core Web Vitals](/blog/wpis/core-web-vitals-w-praktyce/) rozwija temat).

**Działanie:** nie naprawiaj wszystkiego naraz. Wybierz **1–2 najważniejsze URL-e** (strona główna, bestseller,
formularz kontaktu) i popraw je pierwsze.

---

## 5️⃣ Linkowanie → Linki zewnętrzne (Links → External links)

**Co to jest:** kto **linkuje do Twojej strony** z innych witryn — oraz jakie teksty kotwic (anchor text) się pojawiają.
Przy małej firmie lista bywa krótka, ale wartościowa.

**Co sprawdzić:**

- Czy pojawił się **nowy link** (lokalny portal, partner, katalog branżowy, artykuł gościnny)?
- Czy **najczęściej linkowana strona** to ta, którą chcesz promować — czy przypadkiem „Kontakt” z footera?
- Czy nie widać **dziwnych domen** (spamowe katalogi) — wtedy warto ocenić, czy to zagrożenie.

**Przykład:** firma budowlana dostała wzmiankę w lokalnym portalu po realizacji chodnika — Search Console
to pokaże. Możesz podziękować partnerowi, powtórzyć współpracę, albo dodać case na blogu (wpis o
[case study bez chwalipięstwa](/blog/wpis/case-study-w-artykule-bez-chwalipiestwa/) pasuje idealnie).

**Działanie:** raz w tygodniu — czy jest coś nowego do wykorzystania w komunikacji („zobacz, piszą o nas w…”).
To też sygnał zaufania dla Google (linki = rekomendacje).

---

## 📅 Prosty harmonogram „piątek analityczny” (20 minut)

| Minuta | Raport | Pytanie |
|--------|--------|---------|
| 0–7 | **Wydajność** | Co rośnie? Co spada? Jeden wniosek na treść / ofertę. |
| 7–11 | **Strony (indeks)** | Czy nowe rzeczy są zindeksowane? |
| 11–13 | **Mapa witryny** | Czy mapa witryny jest aktualna? |
| 13–17 | **Doświadczenie** | Czy coś świeci na czerwono na mobile? |
| 17–20 | **Linki zewnętrzne** | Czy ktoś nowy linkuje? |

Zapisuj **jedną decyzję** na tydzień w notatniku — np. „dopisać sekcję cennika do artykułu X”.
Bez decyzji analityka to tylko podglądanie wykresów jak Netflixa. 📺

## 🚫 Czego NIE robić w Search Console

- **Panikować** przy jednodniowym spadku — sprawdzaj trendy tygodniowe.
- **Optymalizować pod każdą frazę** z listy — wybieraj te bliskie ofercie.
- **Ignorować mobile** — tam często siedzi większość ruchu lokalnego.
- **Myśleć, że Search Console = Google Analytics** — to inne narzędzie (tu: wyszukiwarka; GA: zachowanie na stronie).
  Oba się uzupełniają — jak kanapka i herbata. 🥪

## ✅ Checklist tygodniowy

- [ ] 📈 Wydajność: porównane ostatnie 28 dni, zapisane 1–3 obserwacje.
- [ ] 📄 Strony: nowe treści zindeksowane (lub wiadomo, dlaczego nie).
- [ ] 🗺️ Sitemap: przetworzona bez błędów.
- [ ] ⚡ Doświadczenie: brak nowych „czerwonych” kluczowych URL-i (albo plan naprawy).
- [ ] 🔗 Linki: sprawdzone nowe odnośniki zewnętrzne.
- [ ] ✍️ **Jedna konkretna decyzja** na następny tydzień.

## 💡 Podsumowanie

Search Console to nie magiczna kula — to **cotygodniowy przegląd** pięciu miejsc: co ludzie szukają,
co Google indeksuje, czy mapa witryny działa, czy strona nie muli na telefonie i kto linkuje do Twojej strony.
Przy małej firmie to wystarczy, żeby wyprzedzić konkurencję, która „kiedyś sprawdzi SEO” trzy lata temu
i od tego pamięta tylko legendę. 😉

Następny krok: ustaw powtarzalny termin w kalendarzu. Pięć raportów, dwadzieścia minut, jedna decyzja —
i SEO przestaje być czarną skrzynką, a zaczyna być rozmową z rynkiem, który już wpisuje Twoje usługi
w pasek wyszukiwania — tylko czeka, czy jesteś gotowy, żeby go słuchać.
