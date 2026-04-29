---
layout: page
title: Portfolio
eyebrow: GitHub Profile
summary: Dynamiczny widok profilu GitHub mradziszewski89 wraz z lista publicznych repozytoriow ladowana bezposrednio z GitHub API.
hero_link: https://github.com/mradziszewski89
hero_link_label: Otworz profil GitHub
---

<section class="portfolio-shell">
    <div class="profile-card" data-github-profile>
        <p class="profile-card__eyebrow">Profil konta</p>
        <h2>mradziszewski89</h2>
        <p class="profile-card__summary">Portfolio pobiera aktualne dane publiczne z GitHub API przy kazdym otwarciu strony.</p>

        <div class="repo-stats">
            <div>
                <strong data-profile-public-repos>0</strong>
                <span>publicznych repozytoriow</span>
            </div>
            <div>
                <strong data-profile-followers>0</strong>
                <span>followers</span>
            </div>
            <div>
                <strong data-profile-updated>--</strong>
                <span>ostatnia aktualizacja profilu</span>
            </div>
        </div>

        <div class="repo-links">
            <a class="button button--secondary" href="https://github.com/mradziszewski89">Przejdz do profilu</a>
        </div>
    </div>

    <section class="portfolio-section">
        <div class="section-heading">
            <p class="eyebrow">Repositories</p>
            <h2>Publiczne repozytoria</h2>
        </div>

        <p class="portfolio-note">Lista ponizej jest ladowana dynamicznie z GitHub API, wiec pokazuje biezacy stan profilu bez koniecznosci kolejnych commitow na stronie.</p>

        <div class="portfolio-grid" data-portfolio-grid></div>

        <div class="empty-state" data-portfolio-empty hidden>
            <p>Aktualnie konto nie udostepnia publicznych repozytoriow lub GitHub API nie zwrocilo zadnych pozycji.</p>
        </div>
    </section>
</section>
