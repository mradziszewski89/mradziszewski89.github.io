---
layout: post
title: "XSS w SharePoint: jak dziala atak i jak sie bronic w 2026"
date: 2026-04-29 08:58:00 +0200
publish_at: 2026-05-05 09:00:00 +0200
categories: [SharePoint, Security, Hardening]
tags: [SharePoint, XSS, CSP, WAF, Hardening, OnPremise]
summary: "Praktyczne omowienie mechanizmu XSS w SharePoint na przykladzie CVE-2026-32201 i CVE-2026-26105 oraz zestawu warstw obronnych poza samym patchem."
eyebrow: "Hardening brief"
severity: "High in exposed environments"
status: "Exploit pattern understood"
scope: "SharePoint Server and authenticated sessions"
priority: "Patch plus layered controls"
focus: "Input validation, session abuse, browser-side defenses"
key_actions:
  - Traktuj XSS w SharePoint jako ryzyko sesyjne i phishingowe, a nie tylko blad frontendowy.
  - Wdrozone poprawki uzupelnij o CSP, HTTPOnly cookies i filtracje na WAF.
  - Monitoruj nietypowe redirecty, iframe injection i logowania z nowych lokalizacji po zdarzeniach na portalu.
---

## Wprowadzenie

W SharePoint on-premise XSS bardzo latwo bywa zbagatelizowany, bo brzmi mniej groznie niz klasyczne RCE. To blad. W realnym srodowisku biznesowym XSS potrafi otworzyc droge do przejecia sesji, eskalacji uprawnien przez zaufany kontekst i ruchu lateralnego.

W 2026 roku dobrze pokazaly to dwa problemy:

- CVE-2026-32201 z kwietnia
- CVE-2026-26105 z marca

---

## Jak wyglada lancuch ataku

Typowy scenariusz XSS w SharePoint mozna rozlozyc na kilka prostych etapow:

1. Atakujacy znajduje pole lub parametr bez poprawnej sanityzacji danych.
2. Wstrzykuje payload JavaScript w zadaniu HTTP albo spreparowanym URL.
3. Kod zostaje zapisany, odczytany lub wykonany podczas wyswietlania tresci.
4. Uwierzytelniony uzytkownik otwiera zainfekowany widok.
5. Skrypt dziala w kontekscie sesji ofiary.
6. Atakujacy przejmuje token lub wykonuje dzialania z prawami uzytkownika.

Szczegolnie grozny jest ten scenariusz w srodowiskach, gdzie SharePoint staje sie punktem wejscia do dokumentow, workflow i integracji z innymi systemami.

---

## Dlaczego brak uwierzytelnienia zmienia priorytet

Jesli podatnosc XSS nie wymaga logowania od strony atakujacego, skala ryzyka rosnie bardzo szybko. Wystarczy publiczna dostepnosc serwera i pojedyncza udana interakcja z uzytkownikiem, aby otworzyc droge do dalszych naduzyc.

To dlatego ocena typu Medium na papierze nie oddaje skutkow operacyjnych w organizacji, ktora korzysta z internetowo dostepnego SharePoint.

---

## Co mozna osiagnac po przejeciu sesji

Po skutecznym XSS napastnik moze:

- odczytywac dane dostepne ofierze
- wykonywac dzialania w jej imieniu
- osadzac elementy phishingowe w zaufanym portalu
- probowac dalszej eskalacji przez systemy powiazane z farma

XSS przestaje byc wtedy bledem strony, a staje sie realnym wektorem przejecia konta i danych.

---

## Ochrona poza patchem

Patch jest priorytetem, ale nie powinien byc jedyna warstwa obrony. Sensowny zestaw kontrolny obejmuje:

- Content Security Policy, aby ograniczyc wykonywanie nieautoryzowanych skryptow
- `HTTPOnly` i `Secure` dla cookies, aby utrudnic odczyt sesji
- WAF, ktory moze zatrzymywac typowe payloady zanim dotra do aplikacji
- monitoring nietypowych przekierowan, osadzania iframe i zmian zachowania stron
- zglaszanie przez uzytkownikow dziwnego zachowania interfejsu

---

## Podsumowanie

W SharePoint XSS trzeba oceniac przez pryzmat sesji i zaufanego kontekstu, a nie tylko przez sam typ luki. To dlatego dobra reakcja obejmuje dwa elementy jednoczesnie: szybkie patchowanie i stale warstwy obronne po stronie przegladarki, serwera oraz monitoringu.
