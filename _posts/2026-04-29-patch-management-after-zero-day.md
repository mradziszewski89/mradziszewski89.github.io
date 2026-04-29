---
layout: post
title: "1370+ niezalatanych serwerow: co ten zero-day mowi o patch management"
date: 2026-04-29 08:50:00 +0200
publish_at: 2026-05-01 09:00:00 +0200
categories: [SharePoint, Operations, Security]
tags: [SharePoint, PatchManagement, CVE, Shadowserver, CISA, OnPremise]
summary: "Analiza tego, dlaczego tydzien po publikacji poprawki ponad 1370 instancji SharePoint pozostawalo podatnych oraz jak powinien wygladac minimalny proces patch management."
eyebrow: "Operations brief"
severity: "Active exposure"
status: "Post-zero-day remediation"
scope: "Patch governance for on-premise SharePoint"
priority: "Patch pipeline within 72 hours for critical issues"
focus: "Process, telemetry, dependency awareness"
key_actions:
  - Ustal zrodla alertow MSRC i CISA KEV jako stale wejscie do procesu patchowania.
  - Zbuduj testowe odzwierciedlenie produkcji, aby nie blokowac patchy strachem przed wdrozeniem.
  - Dokumentuj sekwencje CU i weryfikuj build po instalacji zamiast traktowac patchowanie jako jednorazowa akcje.
---

## Wprowadzenie

Tydzien po publikacji poprawki dla CVE-2026-32201 dane Shadowserver Foundation nadal wskazywaly ponad 1370 podatnych adresow IP. To nie jest pojedyncza pomylka administratora. To sygnal, ze wiele organizacji nadal nie ma procesu, ktory potrafi zareagowac na krytyczna podatnosc w akceptowalnym oknie czasu.

---

## To nie jest problem tylko technologii

W przypadku aktywnie wykorzystywanego zero-day problem bardzo rzadko zaczyna sie od samego patcha. Najczesciej peka jeden z procesow:

- priorytetyzacja podatnosci
- przygotowanie srodowiska testowego
- znajomosc zaleznosci miedzy kolejnymi CU
- monitoring zrodel ostrzezen

Gdy kazdy z tych elementow jest slaby, patch nawet po wydaniu nie trafia szybko do produkcji.

---

## Cztery najczestsze przyczyny opoznien

### 1. Mylaca ocena CVSS

Ocena 6.5 dla CVE-2026-32201 mogla uspokoic czesc zespolow. W praktyce aktywna eksploatacja i brak wymogu uwierzytelnienia powinny od razu podniesc priorytet do poziomu natychmiastowej reakcji.

### 2. Brak srodowiska testowego

Jezeli kazdy patch wymaga ryzykownego testu na produkcji, to organizacja sama skazuje sie na opoznienia. Bez test labu nawet sluszna ostroznosc zamienia sie w paraliz.

### 3. Nieznajomosc sekwencji CU

Marcowy problem January -> March bez February dla SPSE pokazal, ze samo "instalujemy najnowsze" nie wystarcza. Administratorzy musza znac poprawna kolejnosc i stan buildow.

### 4. Brak stalych alertow

Bez subskrypcji Security Update Guide oraz CISA KEV zespol dowiaduje sie o sprawie z opoznieniem. W 2026 roku opozniony sygnal bardzo szybko zamienia sie w opozniony patch.

---

## Minimalny skuteczny proces patch management

W srodowiskach SharePoint on-premise sensowny standard minimum powinien obejmowac:

- stale monitorowanie MSRC i CISA KEV
- srodowisko testowe zblizone do produkcji
- udokumentowana sekwencje instalacji CU
- obowiazkowy `PSConfig` po kazdej aktualizacji
- walidacje wersji build po wdrozeniu
- SLA: krytyczne CVE i KEV -> patch w 72h

To nie jest proces premium. To podstawowa zdolnosc operacyjna.

---

## Dodatkowe zrodla wiedzy

W praktyce wielu administratorow SPSE korzysta tez z nieoficjalnych, ale bardzo wartosciowych zrodel, takich jak blog Stefana Gossnera. Dla zespolu utrzymaniowego takie miejsca powinny byc elementem codziennego monitoringu, a nie przypadkowej lektury po incydencie.

---

## Podsumowanie

1370+ podatnych instancji tydzien po patchu to nie tylko statystyka. To miernik dojrzalosci operacyjnej. Organizacje, ktore patchuja skutecznie, nie opieraja sie na pojedynczym adminie i dobrej woli, ale na procesie obejmujacym alerting, testy, sekwencje CU i SLA dla krytycznych podatnosci.
