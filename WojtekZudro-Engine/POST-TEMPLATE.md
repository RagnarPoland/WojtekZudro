# Szablon nowego wpisu (copy/paste)

Skopiuj blok poniżej do nowego pliku w `src/content/blog/` i uzupełnij pola.

```md
---
slug: "temat-wpisu-seo"
title: "Konkretny tytuł wpisu z intencją wyszukiwania"
description: "Krótki opis wpisu (40-180 znaków), który zachęca do kliknięcia."
date: 2026-04-06
category: "SEO fundamentals"
readingTime: 8
featured: false
draft: false
tags:
  - seo
  - content
  - wzrost
faq:
  - question: "Konkretne pytanie dopasowane do tematu wpisu?"
    answer: "Krótka odpowiedź w 1-3 zdaniach — bez powtarzania wstępu ani checklisty."
  - question: "Drugie pytanie, którego nie ma wyraźnie w treści artykułu?"
    answer: "Konkretna odpowiedź z przykładem lub wyjątkiem, jeśli to potrzebne."
  - question: "Od czego zacząć w praktyce w tym tygodniu?"
    answer: "Jeden jasny krok i ewentualnie wskazanie powiązanego wpisu w serii."
ctaLead: "Chcesz [krótkie pytanie dopasowane do tematu wpisu]?"
---

Krótki lead: 2-3 zdania, które mówią, dla kogo jest ten wpis i co czytelnik wyniesie.

## Problem i kontekst biznesowy

Opisz problem użytkownika, konsekwencje i moment, w którym temat staje się pilny.

### Najczęstszy błąd

Krótki akapit z typowym błędem i jego wpływem na widoczność lub konwersję.

## Plan działania krok po kroku

Podaj ramę działania: co zrobić najpierw, co mierzyć i kiedy iterować.

### Krok 1: Diagnoza

Jak sprawdzić punkt wyjścia i jakie dane zebrać.

### Krok 2: Wdrożenie

Jakie działania wykonać, żeby osiągnąć efekt.

### Krok 3: Pomiar i poprawki

Jakie KPI monitorować i po czym poznać, że działania działają.

## Przykład z praktyki

Dodaj mini-case: sytuacja -> działanie -> wynik.

## Checklist do wdrożenia

- [ ] Punkt 1
- [ ] Punkt 2
- [ ] Punkt 3

## Podsumowanie

Zamknij wpis 3-5 zdaniami: najważniejsze wnioski i co czytelnik ma zrobić dalej.
```

## FAQ (frontmatter, nie w treści markdown)

- Pole `faq` w YAML na górze pliku — 3-5 pytań **specyficznych dla tematu** wpisu.
- Sekcja FAQ renderuje się automatycznie pod artykułem; bez `faq` w frontmatter FAQ się nie pokazuje.
- Google dostaje schema `FAQPage` tylko wtedy, gdy FAQ jest w frontmatter (treść widoczna na stronie).

## Dozwolone wartości `category`

- `SEO fundamentals`
- `GEO i AI`
- `SEO techniczne`
- `Content i E-E-A-T`
- `Local SEO`
- `Analityka`

## Jak działa CTA w stopce wpisu

- Pole `ctaLead` w YAML — **jedno zdanie-pytanie** dopasowane do tematu wpisu (min. 15 znaków).
- Stopka renderuje się automatycznie: lead + mail + link do formularza kontaktowego.
- Bez `ctaLead` na stronie wpisu działa fallback z kategorii (`SEO techniczne` → technical, `Local SEO` → local, reszta → strategy).
- Lista bloga, paginacja i strony kategorii nadal używają wariantów kategorii — bez `ctaLead` per wpis.

## Krótkie zasady jakości

- Jeden wpis = jedna główna intencja.
- Tytuł i opis mają mówić o konkretnej korzyści.
- Każdy wpis powinien mieć sekcję praktyczną (kroki/checklista/case).
- Linkuj do 1-3 powiązanych wpisów wewnętrznie.
- FAQ: pytania dopasowane do tematu, nie globalny szablon pod każdy wpis.
- CTA: `ctaLead` dopasowany do tematu, nie ogólne „Chcesz plan SEO…”.
