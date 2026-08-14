---
slug: "indeksacja-noindex-i-canonical"
title: "Indeksacja: noindex i canonical — kiedy używać, żeby Google się nie gubił"
description: "Proste wyjaśnienie noindex i tagu canonical: co robią, kiedy pomagają, a kiedy przez nie tracisz ruch z wyszukiwarki."
date: 2026-07-15
category: "SEO techniczne"
readingTime: 13
featured: false
draft: false
tags:
  - indeksacja
  - noindex
  - canonical
  - seo techniczne
ctaLead: "Chcesz uporządkować indeksację strony — noindex i canonical?"
faq:
  - question: "Czym różni się noindex od tagu canonical?"
    answer: "Noindex mówi Google: nie pokazuj tej strony w wynikach (np. koszyk, podziękowanie po formularzu). Canonical wskazuje, która wersja podobnych URL-i ma być główna w wynikach — np. karta produktu bez parametrów śledzenia w adresie (UTM). Użytkownik w obu przypadkach normalnie widzi stronę."
  - question: "Kiedy warto użyć noindex na stronie firmowej?"
    answer: "Przy stronach technicznych: podziękowanie po formularzu, koszyk, panel logowania, archiwum starych promocji, wersja w budowie. Nigdy noindex na głównej ofercie, blogu ani kategoriach sklepu — chyba że świadomie chcesz zniknąć z Google."
  - question: "Czy canonical przekierowuje użytkownika na inną stronę?"
    answer: "Nie — to tylko wskazówka dla robota Google. Odwiedzający zostaje pod adresem, pod którym wszedł. Canonical sugeruje, która wersja ma trafić do wyników wyszukiwania, gdy ta sama lub bardzo podobna treść jest pod wieloma URL-ami."
  - question: "Co zrobić, gdy ta sama oferta jest pod dwoma adresami URL?"
    answer: "Wybierz jeden kanoniczny adres i ustaw rel=canonical na duplikatach. Gdy oba adresy muszą działać (np. ten sam produkt z parametrami śledzenia w URL) — canonical. Gdy stary adres można wyłączyć — lepsze przekierowanie 301 na docelowy URL."
  - question: "Jak sprawdzić, czy ważna strona ma przypadkowy noindex?"
    answer: "W Search Console użyj „Sprawdź adres URL” — zobaczysz status indeksowania i wykryte tagi. Możesz też podejrzeć źródło strony (Ctrl+U) i szukać meta robots z noindex. Klasyczny błąd po migracji: noindex zostaje na całej witrynie mimo gotowej strony."
---

Masz piękną stronę, blog, sklep — a w Google widać tylko połowę tego, co powinno być widoczne.
Albo gorzej: w wynikach wyszukiwania pojawiają się **dwie wersje tej samej oferty**, stara strona
z promocją sprzed roku i wersja testowa z napisem „Lorem ipsum”. 😬

To nie zawsze kara od algorytmu. Często to kwestia **indeksacji** — czyli tego, które adresy Google
**wpisuje do swojego katalogu** i pokazuje ludziom. Dwa proste narzędzia sterują tym procesem:
**noindex** i **canonical**. Brzmią jak zaklęcia z Hogwartu, ale w praktyce to instrukcje dla robota
Google: „tej strony nie pokazuj” albo „ta wersja jest główna”.

Ten wpis jest dla każdego, kto ma stronę firmową, blog albo sklep — bez konieczności bycia programistą.
Jeśli cotygodniowo zaglądasz do Search Console, połącz to z wpisem o
[5 raportach w Search Console](/blog/wpis/search-console-5-raportow-tygodniowo/) — tam widać,
czy Google w ogóle indeksuje nowe treści.

## 🔍 Co to znaczy „indeksacja” (w jednym akapicie)

Wyobraź sobie ogromną bibliotekę internetu. **Indeks Google** to katalog tej biblioteki — spis książek
(stron), które można wypożyczyć (czyli pokazać w wynikach wyszukiwania).

- Strona **zindeksowana** = Google zna adres i *może* ją pokazać po wpisaniu frazy.
- Strona **niezindeksowana** = jak książka schowana w magazynie — nikt jej nie znajdzie przez wyszukiwarkę.

Indeksacja to nie to samo co **ranking** (pozycja). Najpierw musisz trafić do katalogu, potem dopiero
walczysz o miejsce na pierwszej stronie. 🏁

---

## 🚫 Noindex — „Google, nie pokazuj tej strony”

**Noindex** to sygnał: *nie uwzględniaj tej strony w wynikach wyszukiwania*. Strona może istnieć,
linki do niej mogą działać, ale **nie powinna** pojawiać się, gdy ktoś szuka w Google.

### Jak to wygląda technicznie (bez paniki)

Najczęściej to meta tag w nagłówku strony:

```html
<meta name="robots" content="noindex">
```

Albo nagłówek HTTP wysyłany przez serwer. Nie musisz tego pisać ręcznie — wiele CMS-ów (WordPress,
Shoper, IdoSell, Wix) ma przełącznik „Ukryj przed wyszukiwarkami” albo „Discourage search engines”.
Efekt bywa ten sam: **noindex**.

### Kiedy noindex ma sens ✅

| Sytuacja | Przykład z życia |
|----------|------------------|
| Strony techniczne | Podziękowanie po formularzu („Dziękujemy za zapytanie”) |
| Wersje do druku / PDF online | Cennik w PDF — jeśli masz lepszą wersję HTML |
| Stare promocje | „Black Friday 2023” — archiwum, nie aktualna oferta |
| Panel logowania, koszyk | Sklep RTV — strona koszyka nie powinna rankować |
| Duplikaty treści celowo | Ta sama treść na dwóch adresach — jedną wersję ukrywasz (noindex) |
| Strona w budowie | Landing przed premierą — dopóki nie jest gotowy |

**Cukiernia:** strona „Zamów tort — krok 3: podsumowanie” z danymi klienta — noindex, żeby
przypadkiem nie wypłynęła w Google obok galerii tortów.

**Firma budowlana:** wewnętrzna strona z wyceną dla konkretnego klienta (link wysłany mailem) —
noindex, bo to nie treść publiczna.

**Biuro rachunkowe:** strefa klienta za hasłem — jeśli technicznie jest dostępna bez logowania
(błąd!), noindex to minimum bezpieczeństwa SEO.

### Kiedy noindex **szkodzi** ❌

- Główna strona oferty, blog, kategorie sklepu — **nigdy** (chyba że świadomie chcesz zniknąć z Google).
- Nowy artykuł, na który liczysz w kategoriach „porady” — jeśli ma noindex, **sam się wykluczasz** z ruchu.
- Strona skopiowana z szablonu demo, gdzie zostawiono domyślne „noindex” — klasyk po migracji strony. 🙃

**Pułapka:** noindex na **całej** witrynie podczas prac deweloperskich, a potem zapomnienie
usunięcia po publikacji. Strona wygląda OK, a ruch z wyszukiwarki = zero przez miesiące.

### Jak sprawdzić, czy strona ma noindex

1. **Search Console** → Sprawdź adres URL (Inspect URL) — status indeksowania i wykryte tagi.
2. **Podgląd źródła strony** (Ctrl+U w przeglądarce) — szukaj `noindex`.
3. Narzędzie `site:twojadomena.pl` w Google — jeśli ważne strony nie wypadają, warto drążyć temat głębiej.

---

## 🔗 Canonical — „Główna wersja jest tutaj”

**Canonical** (pełna nazwa: *rel=canonical*) mówi Google: *spośród podobnych lub identycznych stron
**ta wersja URL jest kanoniczna** — tę traktuj jako oryginał w wynikach wyszukiwania*.

To nie przekierowanie dla użytkownika — odwiedzający nadal widzi stronę, pod którą wszedli.
To **wskazówka dla robota**, żeby nie traktował pięciu podobnych adresów jak pięć konkurentów sam ze sobą.

### Jak to wygląda

```html
<link rel="canonical" href="https://example.pl/oferta/montaz-klimatyzacji/">
```

Adres w `href` to **wersja, którą chcesz widzieć w Google**.

### Kiedy canonical ratuje sytuację ✅

| Problem | Rozwiązanie |
|---------|-------------|
| Ta sama treść pod HTTP i HTTPS | Canonical wskazuje wersję HTTPS |
| Strona z parametrami `?utm_source=...` | Canonical bez parametrów śledzenia |
| Produkt w wielu kategoriach sklepu | Jedna kanoniczna karta produktu |
| Wpis bloga pod `/blog/` i `/blog/wpis/` przez błąd | Canonical wybiera jeden adres |
| Paginacja (strona 2 listy artykułów) | Często canonical na stronę 1 albo na siebie — zależy od strategii |

**Sklep z elektroniką:** telewizor Samsung dostępny z kategorii „Telewizory”, „Promocje” i „Salon” —
trzy URL-e, jedna treść. Canonical mówi: **oficjalna karta to ta jedna**.

**Salon fryzjerski:** artykuł o pielęgnacji włosów dostępny pod adresem z datą i bez — canonical
wskazuje wersję bez daty (evergreen).

**E-commerce z filtrem:** `?sort=cena&filter=marka` tworzy setki adresów — canonical na czystą
kartę produktu chroni przed rozproszeniem sygnałów SEO.

### Kiedy canonical **nie** zastąpi noindex

Canonical **nie chowa** strony — sugeruje, która wersja ma być w wynikach. Jeśli strona
**w ogóle nie powinna** być w indeksie (np. podziękowanie po formularzu), użyj **noindex**,
a nie samego canonical.

### Błędy z canonical, które widzi się często

1. **Canonical wskazuje na inną domenę** bez planu (np. na sklep producenta) — Google może
   uznać, że oryginał jest gdzie indziej. Przy treści Twojej — canonical zwykle na **Twój** URL.
2. **Canonical na stronę 404** — jak mapa do nieistniejącego pokoju.
3. **Każda podstrona wskazuje canonical na stronę główną** — błąd szablonu; Google może zignorować
   większość podstron.
4. **Canonical ≠ treść** — jeśli canonical mówi „to ta strona”, a treść jest zupełnie inna,
   sygnał jest niespójny.

---

## ⚖️ Noindex vs canonical — szybkie porównanie

| | **Noindex** | **Canonical** |
|---|-------------|---------------|
| **Efekt** | Strona nie powinna być w wynikach | Spośród podobnych — wybierz główną w wynikach |
| **Dla użytkownika** | Normalnie widzi stronę | Normalnie widzi stronę |
| **Typowy przypadek** | Koszyk, podziękowanie, archiwum | Duplikaty URL, parametry, wiele ścieżek do produktu |
| **Metafora** | „Nie wystawiaj tego w witrynie sklepu” | „W witrynie wystaw **ten** egzemplarz, nie kopie” |

Czasem używa się **obu**: strona pomocnicza z noindex *i* canonical wskazującym na wersję główną —
np. wersja do druku artykułu. To zaawansowany scenariusz; przy małej firmie zwykle wystarczy jedno narzędzie.

---

## 🏭 Przykłady z kilku branż — co zrobić w praktyce

### ❄️ Instalator HVAC (strona usługowa)

- **Noindex:** strona „Wycena wysłana — sprawdź maila”, wersja testowa podstrony „Pompy ciepła”.
- **Canonical:** jedna usługa „Montaż klimatyzacji” — jeśli kiedyś była pod `/uslugi/` i `/oferta/`,
  wybierz jeden adres i drugi przekieruj (301) albo ustaw canonical.

### 🎂 Cukiernia ze sklepem online

- **Noindex:** filtry „Bez glutenu” z parametrami URL, jeśli generują setki pustych kombinacji.
- **Canonical:** karta „Tort weselny klasyczny” — jeden URL, nawet gdy produkt wisi w „Torty” i „Wesela”.

### 📺 Sklep RTV

- **Noindex:** strony porównywarki wewnętrznej z sesji użytkownika, stare kampanie `/promo-wiosna-2022/`.
- **Canonical:** recenzja telewizora — jeśli opublikowana w blogu i skopiowana w opisie kategorii,
  canonical na **pełny artykuł**, nie na listę kategorii.

### 🏗️ Firma remontowa

- **Noindex:** galeria „Realizacja — ul. Kwiatowa 5” jeśli to tylko zdjęcia bez tekstu i duplikuje
  case study — albo **jeden** mocny case z canonical zamiast pięciu cienkich kopii.
- **Canonical:** case study opublikowane pod dwoma slugami po zmianie CMS — wskaż wersję z lepszymi
  linkami wewnętrznymi (patrz też wpis o
  [mapie strony i linkowaniu wewnętrznym](/blog/wpis/mapa-strony-linkowanie-wewnetrzne/)).

---

## 🛠️ Co możesz zrobić bez programisty

1. **Przejrzyj ustawienia SEO w CMS** — WordPress (Yoast, Rank Math), Shoper, IdoSell — sekcja
   „Indeksowanie” / „Visibility in search engines”.
2. **Po każdej większej zmianie strony** — sprawdź w Search Console 2–3 kluczowe URL-e
   (strona główna, top usługa, najnowszy wpis).
3. **Nie kopiuj treści 1:1** między podstronami — canonical to plaster, nie strategia treści.
4. **Przekierowanie 301** (trwałe) vs **canonical:** jeśli stary adres **w ogóle** nie powinien
   istnieć — lepsze 301 na nowy URL. Canonical, gdy oba adresy muszą żyć (np. parametry UTM).
5. **Mapa witryny** — wpisuj tylko strony, które **chcesz** indeksować; noindex w połączeniu z mapą witryny to mieszany
   sygnał (Google zwykle respektuje noindex, ale po co komplikować?). 🗺️

---

## 🧪 Jak testować po wdrożeniu

- **Search Console → Sprawdź adres URL** — „Czy URL jest w Google?” i „Indeksowanie dozwolone?”.
- **site:domena.pl/konkretna-podstrona** — czy wypada po tygodniu–dwóch (nie natychmiast).
- Po zmianie canonical na ważnej stronie — obserwuj w raporcie **Wydajność**, czy kliknięcia
  trzymają się **kanonicznego** URL (czasem Google potrzebuje kilku tygodni na przetasowanie).

Jeśli planujesz też wyróżnienia w wynikach (gwiazdki, FAQ), indeksacja musi być w porządku **zanim**
dodasz [schema i rich snippets](/blog/wpis/schema-rich-snippets/) — Google nie pokaże rozszerzeń
stronie, której nie ufa albo której nie indeksuje.

---

## 🚫 Mity, które słyszy się na kawie

**„Noindex zabija wartość linków”** — noindex mówi „nie pokazuj”; linki z tej strony nadal mogą istnieć,
ale strona nie zbiera widoczności w wyszukiwarce. Przy stronach technicznych to OK.

**„Canonical przekierowuje użytkownika”** — nie. Tylko sugestia dla Google.

**„Jak dam canonical na konkurencję, zniknę z Google”** — canonical na obcą domenę bez zgody i sensu
biznesowego to samobójstwo SEO. Nie rób tego.

**„Google i tak zindeksuje wszystko”** — Google jest coraz wybredny. Przy słabej treści może
indeksować wolno albo w ogóle nie — noindex i canonical to sposób, żeby **świadomie** zarządzać tym,
co ma być w katalogu.

---

## ✅ Checklist: indeksacja pod kontrolą

- [ ] 🔍 Kluczowe strony (oferta, kontakt, top wpisy) **bez** przypadkowego noindex.
- [ ] 🚫 Strony techniczne (formularze, koszyk, podziękowania) **z** noindex.
- [ ] 🔗 Duplikaty URL — canonical wskazuje na **jedną** wersję lub 301 na docelowy adres.
- [ ] 🗺️ Mapa witryny zawiera tylko to, co ma być w indeksie.
- [ ] 📊 Raz w tygodniu Search Console — nowe treści: status „Zindeksowano” (lub wiadomo dlaczego nie).
- [ ] ✍️ Po migracji / nowym szablonie — test noindex na **stronie głównej** (klasyk błędów).

---

## 💡 Podsumowanie

**Noindex** mówi: tej strony nie pokazuj w wyszukiwarce. **Canonical** mówi: spośród podobnych —
pokaż tę wersję. Oba to nie magiczne filtry, tylko **porządek w katalogu Google**, który przy małej
firmie często ważniejszy niż kolejny artykuł na blogu, którego robot i tak nie widzi.

Nie trzeba optymalizować każdego adresu — wystarczy chronić to, co ma przynosić klientów,
i schować resztę, zanim zacznie konkurować sama ze sobą w wynikach jak bliźnięta na rodzinnym zdjęciu. 📸

Następny krok: wybierz trzy URL-e (strona główna, jedna usługa, jeden wpis) i sprawdź je w Search Console.
Jedna poprawka tygodniowo — noindex, canonical albo proste 301 — i indeksacja przestaje być czarną skrzynką,
a zaczyna być listą kontrolną tak samo prozaiczną jak zamknięcie sklepu na noc. 🔐
