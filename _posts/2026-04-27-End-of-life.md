---
layout: post
title: "March 2026 Patch Tuesday: SharePoint dostaje trzy latki i jedna pulapke operacyjna"
date: 2026-04-27 20:00:00 +0200
categories: [SharePoint, Security, PatchTuesday]
tags: [SharePoint, PatchTuesday, CVE, OnPremise, SPSE, Patching]
summary: "Brief o marcowym Patch Tuesday 2026 dla SharePoint: trzy podatnosci, w tym krytyczne RCE, oraz istotna pulapka aktualizacyjna dla SharePoint Subscription Edition."
eyebrow: "Patch brief"
severity: "Critical RCE + operational risk"
status: "Patch available"
scope: "SharePoint Server 2016, 2019, Subscription Edition"
priority: "Sequential patching with PSConfig after every CU"
focus: "RCE exposure, XSS risk, upgrade path discipline"
key_actions:
  - Zweryfikuj, czy farma nie pomija lutowego CU przed wdrozeniem marcowego pakietu dla SPSE.
  - Uruchom PSConfig po kazdej aktualizacji i na kazdym wezle farmy bez wyjatkow.
  - Traktuj CVE-2026-26106 jako wysoki priorytet naprawczy dla wszystkich publicznie dostepnych instancji.
---

## Wprowadzenie

10 marca 2026 Microsoft opublikowal aktualizacje bezpieczenstwa dla SharePoint Server, w tym pakiet **KB5002843**. Z perspektywy administratora to nie jest zwykly zestaw poprawek: obok podatnosci pojawil sie tez realny problem operacyjny, ktory moze zatrzymac proces aktualizacji farmy.

Marcowy zestaw wart jest uwagi z dwoch powodow:

- zawiera **krytyczne RCE** dla SharePoint
- ujawnia blad sekwencji aktualizacji w **SharePoint Subscription Edition**

---

## Co obejmuje marcowy pakiet

Microsoft zaadresowal trzy istotne problemy:

### 1. CVE-2026-26106 - krytyczne RCE

- **Poziom ryzyka:** krytyczny
- **Scenariusz:** nieuwierzytelniony atakujacy moze wykonac dowolny kod zdalnie na serwerze
- **Dotyczy:** SharePoint Server 2016, SharePoint Server 2019, SharePoint Subscription Edition
- **Znaczenie operacyjne:** to jedna z powazniejszych luk w SharePoint od czasu ToolShell 2025

To jest typ podatnosci, ktory wymaga bardzo krotkiego czasu reakcji. Jezeli instancja SharePoint jest wystawiona do internetu albo ma szeroki dostep z sieci wewnetrznej, nalezy traktowac ten problem jako priorytet pierwszego rzedu.

### 2. CVE-2026-26105 - XSS spoofing (CVSS 7.1)

- **Typ:** Cross-Site Scripting / Spoofing
- **Wymagana interakcja:** klikniecie spreparowanego linku
- **Dotyczy:** SharePoint Server 2016 i 2019
- **Uwaga:** SharePoint Subscription Edition nie jest podatne wedlug opisu poprawki

Chociaz to nie jest bezposrednie RCE, luka nadal ma wysoka wartosc dla atakujacego. W praktyce moze posluzyc do przejecia sesji, osadzenia zlosliwego skryptu w zaufanym kontekscie lub wsparcia kampanii phishingowej.

### 3. CVE-2026-26113 - spoofing / Office RCE

- **Powiazanie:** luka jest skojarzona z komponentami Microsoft Office
- **Szczegoly techniczne:** Microsoft ograniczyl publiczne informacje o mechanizmie ataku
- **Wniosek:** brak pelnej publikacji nie powinien opozniac wdrozenia poprawek

---

## Krytyczna pulapka operacyjna dla SPSE

Najwazniejsza informacja z punktu widzenia utrzymania farmy dotyczy nie samej CVE, ale procesu aktualizacji.

Bezposredni skok z **January 2026 CU** do **March 2026 CU** w SharePoint Subscription Edition moze skonczyc sie bledem Configuration Wizard.

Typowy komunikat:

> Invalid column name `SAFE_NOTIFICATION_DATA`

To oznacza, ze sama instalacja binariow nie wystarcza. Jezeli farma przeskakuje wymagany etap aktualizacji, proces konfiguracji bazy i komponentow moze nie dojsc do stanu zgodnego z oczekiwaniami marca 2026.

---

## Prawidlowa sekwencja instalacji

Dla SPSE poprawna kolejnosc wyglada tak:

1. January 2026 CU
2. `PSConfig`
3. February 2026 CU (`KB5002833`)
4. `PSConfig`
5. March 2026 CU (`KB5002843`)
6. `PSConfig`

Dopiero **April 2026 CU** zawiera kompletna poprawke dla opisanego bledu sekwencyjnego.

To jest jeden z tych przypadkow, w ktorych "przyspieszenie" procesu patchowania przez pomijanie etapow realnie zwieksza ryzyko przestoju i nieudanej aktualizacji.

---

## Co to oznacza dla administratora

Najwazniejsza zasada pozostaje prosta:

**PSConfig po kazdej aktualizacji i na kazdym wezle farmy - bez wyjatkow.**

Farma, w ktorej binaria zostaly zaktualizowane, ale Configuration Wizard nie zostal uruchomiony poprawnie wszedzie, jest tylko czesciowo zaktualizowana. Taki stan prowadzi do:

- niespojnosci wersji komponentow
- problemow z konfiguracja bazy
- nieprzewidywalnego zachowania uslug i aplikacji
- ryzyka awarii w trakcie kolejnych patchy

---

## Zalecane dzialania

### 1. Zweryfikuj stan aktualizacji

- sprawdz, z jakiego CU rzeczywiscie startuje SPSE
- nie wykonuj skoku January -> March bez walidacji sciezki
- potwierdz numer builda na kazdym serwerze w farmie

### 2. Egzekwuj sekwencje patchowania

- instaluj brakujace CU we wlasciwej kolejnosci
- uruchamiaj `PSConfig` po kazdym etapie
- dokumentuj wynik konfiguracji i czas zakonczenia na kazdym wezle

### 3. Priorytetyzuj podatnosc RCE

- przyspiesz wdrozenie poprawki dla CVE-2026-26106
- ogranicz ekspozycje systemow wystawionych do internetu
- monitoruj logi IIS, ULS i sygnaly nietypowych prob dostepu

### 4. Testuj przed produkcja

Srodowisko testowe nie jest luksusem. W 2026 roku to podstawowy element procesu utrzymania SharePoint, zwlaszcza gdy jedna aktualizacja jednoczesnie naprawia CVE i potrafi ujawnic blad proceduralny.

---

## Podsumowanie

Marcowy Patch Tuesday 2026 dla SharePoint to polaczenie klasycznego ryzyka bezpieczenstwa i bardzo konkretnej pulapki operacyjnej. Krytyczne RCE wymusza szybkie dzialanie, ale samo tempo nie wystarczy - rownie wazna jest poprawna kolejnosc aktualizacji, szczegolnie w SharePoint Subscription Edition.

Najbezpieczniejsze podejscie jest proste: patchuj szybko, ale patchuj sekwencyjnie i zawsze domykaj proces przez `PSConfig`.
