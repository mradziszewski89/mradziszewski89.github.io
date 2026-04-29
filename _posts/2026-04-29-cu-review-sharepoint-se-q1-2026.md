---
layout: post
title: "Przeglad CU dla SharePoint SE: styczen - kwiecien 2026"
date: 2026-04-29 08:55:00 +0200
publish_at: 2026-05-03 09:00:00 +0200
categories: [SharePoint, Updates, Operations]
tags: [SharePointSE, CumulativeUpdate, Patching, SPSE, Microsoft]
summary: "Syntetyczny przeglad styczniowych, lutowych, marcowych i kwietniowych aktualizacji SharePoint Subscription Edition wraz z najwazniejszymi CVE i pulapkami wdrozeniowymi."
eyebrow: "Update review"
severity: "Operationally important"
status: "Quarterly review"
scope: "SharePoint Subscription Edition"
priority: "Correct CU sequence and post-install validation"
focus: "Builds, CVE coverage, feature timing"
key_actions:
  - Traktuj lutowe CU jako obowiazkowy krok posredni przed marcowym wydaniem dla SPSE.
  - Po kazdym CU potwierdz build na wszystkich serwerach, a nie tylko sukces instalatora.
  - Nie planuj prac wokol Feature Updates bez zalozenia, ze Microsoft nie trzyma stalego rytmu wydawniczego.
---

## Wprowadzenie

Pierwsze cztery miesiace 2026 roku pokazaly, ze utrzymanie SharePoint Subscription Edition wymaga jednoczesnie uwagi bezpieczenstwa i dyscypliny operacyjnej. Same aktualizacje nie byly trudne tylko dlatego, ze zawieraly CVE. Problemem byla tez sekwencja i zaleznosci miedzy kolejnymi wydaniami.

---

## Styczen 2026 CU

Styczniowe wydanie bylo baza dla dalszych patchy w kwartale:

- zawieralo poprawki bezpieczenstwa
- nie przynioslo Feature Update 26H1
- stalo sie punktem odniesienia dla kolejnych aktualizacji

To wlasnie z tej bazy wyniknal pozniej operacyjny problem dla organizacji, ktore chcialy skoczyc od razu do marca.

---

## Luty 2026 CU - KB5002833

Lutowe CU bylo kluczowym krokiem posrednim:

- bezpieczne wydanie aktualizacyjne
- wymagane przed instalacja March CU w wielu srodowiskach SPSE
- raportowane byly przypadki `SPUpgradeException`, co oznacza, ze monitoring po wdrozeniu byl rownie wazny jak sama instalacja

W praktyce luty nie byl opcjonalnym miesiacem, tylko elementem bezpiecznej sciezki przejscia.

---

## Marzec 2026 CU - KB5002843

Marcowe wydanie bylo najbogatsze merytorycznie:

- CVE-2026-26106 - krytyczne RCE
- CVE-2026-26105 - XSS
- CVE-2026-26113 - spoofing / Office-related issue
- poprawki funkcjonalne, miedzy innymi dla Secure Store

Jednoczesnie to w marcu najglosniej wybrzmial problem sekwencji January -> March bez February, zakonczony bledem Configuration Wizard.

---

## Kwiecien 2026 CU - KB5002853

Kwietniowe CU domknelo kwartal:

- naprawialo aktywnie wykorzystywany zero-day CVE-2026-32201
- zawieralo kompletny fix dla problemu sekwencji aktualizacji ujawnionego w marcu
- poprawialo wybrane zachowania UI i wydajnosc indeksowania

To wydanie bylo jednoczesnie poprawka bezpieczenstwa, stabilizacja procesu i korekta zaleznosci w produkcie.

---

## Co z Feature Update 26H1

Jedna z praktycznych lekcji z 2026 roku jest prosta: Feature Updates dla SPSE nie pojawiaja sie w przewidywalnym rytmie, na ktory mozna budowac twardy plan projektu. Trzeba patrzec na faktyczne wydanie, a nie na zalozenie, ze konkretny miesiac przyniesie nowa funkcjonalnosc.

---

## Podsumowanie

Jesli administrator ma zapamietac z Q1 2026 trzy rzeczy, to powinny to byc:

1. luty byl krytycznym krokiem posrednim
2. `PSConfig` po kazdym wydaniu nadal jest obowiazkowy
3. najnowsze CU nie zawsze wystarczy, jesli nie rozumiesz drogi, ktora do niego prowadzi

W SharePoint SE patchowanie to nie tylko instalacja pakietu. To kontrolowany proces wersjonowania calej farmy.
