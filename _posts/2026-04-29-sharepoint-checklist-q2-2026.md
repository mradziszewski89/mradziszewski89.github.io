---
layout: post
title: "Checklist administratora SharePoint on-premise na Q2 2026"
date: 2026-04-29 09:12:00 +0200
publish_at: 2026-05-13 09:00:00 +0200
categories: [SharePoint, Operations, BestPractices]
tags: [SharePoint, Checklist, Hardening, PatchManagement, Q2, OnPremise]
summary: "Zbiorcza lista kontrolna na Q2 2026 obejmujaca patchowanie, lifecycle, compliance i architekture dla administratorow SharePoint on-premise."
eyebrow: "Checklist"
severity: "Operational readiness"
status: "Quarterly control list"
scope: "Security, lifecycle and platform operations"
priority: "Use as working baseline for Q2 2026"
focus: "Patching, migration, telemetry, governance"
key_actions:
  - Przejdz checkliste wspolnie z zespolem infrastruktury, bezpieczenstwa i wlascicielami systemu.
  - Oznacz pozycje krytyczne, ktore nie maja jeszcze wlasciciela lub terminu realizacji.
  - Uzyj listy jako podstawy do kwartalnego przegladu ryzyka dla farm SharePoint.
---

## Jak czytac te liste

Q2 2026 dla SharePoint on-premise laczy trzy rozne watki: aktywnie wykorzystywane CVE, deadline konca wsparcia oraz modernizacje tozsamosci i workflow. Dlatego lista kontrolna musi obejmowac nie tylko bezpieczeństwo, ale tez architekture i lifecycle.

---

## Bezpieczenstwo - pilne

- `April 2026 CU` zainstalowany i `PSConfig` wykonany
- CVE-2026-32201 zremediowany
- Sekwencja `Jan -> Feb -> Mar -> Apr` potwierdzona tam, gdzie dotyczy SPSE
- AMSI wlaczony w zgodnym trybie
- Machine Keys po zmianach zweryfikowane, a IIS poprawnie przeladowany
- SharePoint za reverse proxy lub WAF tam, gdzie ekspozycja tego wymaga
- EDR obecny na serwerach SharePoint
- Logi IIS i ULS trafiaja do SIEM z podstawowymi alertami

---

## Lifecycle i compliance

- Zidentyfikowane wersje SharePoint w srodowisku
- Istnieje plan migracji lub upgrade do SPSE przed 14 lipca 2026
- Inwentaryzacja InfoPath wraz z planem Power Apps
- Inwentaryzacja SharePoint Designer Workflows wraz z planem Power Automate
- Zweryfikowane skutki wygaszenia Add-Ins po 2 kwietnia 2026
- Plan odejscia od Basic Authentication
- Plan migracji SharePoint 2010 Workflows

---

## Procesy i architektura

- Srodowisko testowe istnieje i jest uzywane przed wdrozeniem CU
- Zespol subskrybuje Microsoft Security Update Guide
- Zespol monitoruje CISA KEV
- Istnieje SLA dla patchowania krytycznych CVE
- OIDC i zgodnosc z nowszymi scenariuszami Entra ID sa zaplanowane
- Cloud Hybrid Search i inne zaleznosci po upgrade sa zweryfikowane

---

## Co zrobic z wynikami

Sama lista nie daje jeszcze poprawy. Po przejsciu checklisty warto od razu rozdzielic pozycje na trzy grupy:

1. rzeczy zrobione i udokumentowane
2. rzeczy rozpoczęte, ale bez daty domkniecia
3. rzeczy niepodjete, ktore generuja realne ryzyko w Q2

Ten trzeci koszyk powinien trafic do jawnego przegladu ryzyka, a nie zostac tylko w notatkach administratora.

---

## Podsumowanie

Zarzadzanie SharePoint on-premise w 2026 roku to juz nie tylko administracja systemem. To polaczenie bezpieczenstwa, lifecycle, tozsamosci i architektury. Taka lista kontrolna pomaga sprowadzic ten szerszy zakres do konkretnych decyzji operacyjnych.
