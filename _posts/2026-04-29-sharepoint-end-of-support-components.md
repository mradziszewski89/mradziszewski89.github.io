---
layout: post
title: "Co znika z SharePoint 14 lipca 2026: lista elementow do zastapienia"
date: 2026-04-29 09:02:00 +0200
publish_at: 2026-05-07 09:00:00 +0200
categories: [SharePoint, Lifecycle, Modernization]
tags: [SharePoint, InfoPath, PowerApps, PowerAutomate, SPFx, Deprecation]
summary: "Lista komponentow i technologii, ktore wygasaja lub sa juz wycofane w ekosystemie SharePoint, wraz z praktycznymi zamiennikami dla formularzy, workflow i dodatkow."
eyebrow: "Deprecation brief"
severity: "Modernization deadline"
status: "Replacement planning required"
scope: "Products, workflows, add-ins and auth methods"
priority: "Inventory and replacement before July 2026"
focus: "InfoPath, workflows, add-ins, Basic Auth"
key_actions:
  - Sporządz inwentaryzacje InfoPath, SharePoint Designer i workflow 2010/2013 zanim cos przestanie dzialac w produkcji.
  - Dla kazdej zaleznosci wybierz konkretny zamiennik oraz wlasciciela migracji.
  - Nie mieszaj technicznej inwentaryzacji z pozniejszym wdrozeniem - oba etapy musza miec osobne terminy.
---

## Wprowadzenie

Koniec wsparcia SharePoint 2016 i 2019 to nie tylko brak nowych latek. To rowniez koniec calej klasy technologii pomocniczych, ktore latami byly podstawowym narzedziem budowy procesow i formularzy.

Jesli organizacja nie zrobi teraz inwentaryzacji zaleznosci, odkryje problem dopiero wtedy, gdy konkretna funkcja przestanie byc wspierana albo zacznie psuc migracje.

---

## Co jest juz nieaktywne

2 kwietnia 2026 przestal dzialac model, na ktory wiele organizacji nadal liczylo:

- SharePoint Add-Ins w Microsoft 365
- SharePoint 2013 Workflows w Microsoft 365
- Azure Access Control Service authentication

To nie sa ostrzezenia o przyszlosci. To zmiany, ktore juz zaszly.

---

## Co konczy sie 14 lipca 2026

Najwazniejsze pozycje do zastapienia lub wycofania to:

- SharePoint Server 2016
- SharePoint Server 2019
- InfoPath Forms Services
- SharePoint Designer 2013
- SharePoint 2010 Workflows, takze w SPSE
- Basic Authentication w SharePoint Server Subscription Edition
- Internet Explorer 11 w SharePoint poza Central Administration

To jest lista, ktora w wielu srodowiskach dotyka bezposrednio procesow biznesowych, a nie tylko samego zespolu IT.

---

## Zamienniki, ktore trzeba planowac z wyprzedzeniem

### InfoPath Forms Services -> Power Apps

Proste formularze da sie przeniesc szybko. Zlozone scenariusze z logika walidacji, workflow i integracjami wymagaja juz projektu, nie tylko przepiecia interfejsu.

### SharePoint Designer Workflows -> Power Automate

Przy prostych przeplywach migracja moze byc stosunkowo prosta. Przy skomplikowanych procesach akceptacyjnych czesto potrzebny jest redesign, a nie tlumaczenie jeden do jednego.

### SharePoint Add-Ins -> SharePoint Framework

To standard nowoczesnych rozszerzen. Dla wielu organizacji oznacza to wejscie w TypeScript, React i bardziej wspolczesny model developmentu.

### Workflow 2010/2013 -> Workflow Manager lub Power Automate

W srodowiskach on-premise Workflow Manager nadal pozostaje istotnym punktem przejsciowym. Trzeba jednak uczciwie ocenic, czy nie lepiej wykorzystac moment do pełnej modernizacji procesu.

### Basic Auth -> OIDC lub Trusted Identity Provider

To nie jest kosmetyka. To osobny projekt tozsamosciowy, ktory trzeba policzyc w czasie i ryzyku.

---

## Najwieksze ryzyko

Prawdziwy problem zaczyna sie wtedy, gdy organizacja nie wie:

- ile ma formularzy InfoPath
- ile procesow nadal biegnie przez stare workflow
- ktore systemy zalezne nadal korzystaja z Basic Auth
- czy add-ins nie blokuja scenariusza migracyjnego

Bez tego nie da sie poprawnie oszacowac zakresu prac.

---

## Podsumowanie

Lista rzeczy do zastapienia w SharePoint do 14 lipca 2026 jest dluga, ale przewidywalna. To dobra wiadomosc, bo oznacza, ze problem da sie rozbic na inwentaryzacje, priorytetyzacje i konkretne projekty modernizacyjne. Zla wiadomosc jest taka, ze czasu na te decyzje zostalo bardzo malo.
