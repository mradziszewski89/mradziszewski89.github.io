(function () {
    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function isReleased(value) {
        if (!value) {
            return true;
        }

        var publishDate = new Date(value);
        if (Number.isNaN(publishDate.getTime())) {
            return true;
        }

        return Date.now() >= publishDate.getTime();
    }

    function formatPolishDate(value) {
        if (!value) {
            return "";
        }

        var date = new Date(value);
        if (Number.isNaN(date.getTime())) {
            return "";
        }

        return new Intl.DateTimeFormat("pl-PL", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }).format(date);
    }

    function updateFeaturedCard(cards) {
        var featuredCard = cards[0];
        var title = document.querySelector("[data-featured-title]");
        var summary = document.querySelector("[data-featured-summary]");
        var category = document.querySelector("[data-featured-category]");
        var publishDate = document.querySelector("[data-featured-date]");
        var link = document.querySelector("[data-featured-link]");

        if (!title || !summary || !category || !publishDate || !link) {
            return;
        }

        if (!featuredCard) {
            title.textContent = "Brak opublikowanych artykulow w aktywnym harmonogramie.";
            summary.textContent = "Gdy nadejdzie data publikacji kolejnego wpisu, panel zaktualizuje sie automatycznie bez nowego wdrozenia.";
            category.textContent = "Schedule";
            publishDate.textContent = formatPolishDate(new Date().toISOString());
            link.setAttribute("href", "#articles");
            return;
        }

        title.textContent = featuredCard.dataset.title || "Artykul";
        summary.textContent = featuredCard.dataset.summary || "";
        category.textContent = featuredCard.dataset.category || "Article";
        publishDate.textContent = featuredCard.dataset.displayDate || "";
        link.setAttribute("href", featuredCard.dataset.url || "#articles");
    }

    function updateScheduledFeed() {
        var cards = Array.prototype.slice.call(document.querySelectorAll("[data-scheduled-card]"));
        if (!cards.length) {
            return;
        }

        var visibleCards = [];
        cards.forEach(function (card) {
            var released = isReleased(card.dataset.publishAt);
            card.hidden = !released;

            if (released) {
                visibleCards.push(card);
            }
        });

        var countNode = document.querySelector("[data-visible-post-count]");
        if (countNode) {
            countNode.textContent = String(visibleCards.length);
        }

        var emptyState = document.querySelector("[data-empty-feed]");
        if (emptyState) {
            emptyState.hidden = visibleCards.length !== 0;
        }

        updateFeaturedCard(visibleCards);
    }

    function updateArticleGate() {
        var layout = document.querySelector("[data-article-layout]");
        if (!layout) {
            return;
        }

        var gate = document.querySelector("[data-publication-gate]");
        var released = isReleased(layout.dataset.articlePublishAt);

        layout.hidden = !released;

        if (!gate) {
            return;
        }

        gate.hidden = released;

        var dateNode = gate.querySelector("[data-publication-date]");
        if (dateNode) {
            dateNode.textContent = formatPolishDate(layout.dataset.articlePublishAt);
        }
    }

    function renderRepositoryCard(repo) {
        var language = repo.language ? "<span>" + escapeHtml(repo.language) + "</span>" : "";
        var description = repo.description ? escapeHtml(repo.description) : "Brak publicznego opisu repozytorium.";
        var archived = repo.archived ? "<span>Archived</span>" : "";
        var repoName = escapeHtml(repo.name);
        var repoUrl = escapeHtml(repo.html_url);

        return [
            "<article class=\"repo-card\">",
            "<div class=\"repo-card__meta\">",
            language,
            "<span>" + repo.stargazers_count + " stars</span>",
            "<span>" + repo.forks_count + " forks</span>",
            archived,
            "</div>",
            "<h3>" + repoName + "</h3>",
            "<p>" + description + "</p>",
            "<div class=\"repo-card__links\">",
            "<a href=\"" + repoUrl + "\">Otworz repozytorium</a>",
            "<span class=\"repo-card__updated\">Aktualizacja: " + formatPolishDate(repo.pushed_at) + "</span>",
            "</div>",
            "</article>"
        ].join("");
    }

    function loadPortfolio() {
        var grid = document.querySelector("[data-portfolio-grid]");
        if (!grid) {
            return;
        }

        var username = document.body.dataset.githubPortfolioUser || "mradziszewski89";
        var emptyState = document.querySelector("[data-portfolio-empty]");
        var profileCard = document.querySelector("[data-github-profile]");

        Promise.all([
            fetch("https://api.github.com/users/" + username),
            fetch("https://api.github.com/users/" + username + "/repos?per_page=100&sort=updated")
        ]).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                if (!response.ok) {
                    throw new Error("GitHub API error");
                }

                return response.json();
            }));
        }).then(function (payload) {
            var profile = payload[0];
            var repos = payload[1];

            if (profileCard) {
                var reposCount = profileCard.querySelector("[data-profile-public-repos]");
                var followersCount = profileCard.querySelector("[data-profile-followers]");
                var updatedAt = profileCard.querySelector("[data-profile-updated]");
                var summary = profileCard.querySelector(".profile-card__summary");

                if (reposCount) {
                    reposCount.textContent = String(profile.public_repos || 0);
                }

                if (followersCount) {
                    followersCount.textContent = String(profile.followers || 0);
                }

                if (updatedAt) {
                    updatedAt.textContent = formatPolishDate(profile.updated_at);
                }

                if (summary) {
                    summary.textContent = "Profil laduje dane bezposrednio z GitHub API. Na dzien odswiezenia konto udostepnia " + String(profile.public_repos || 0) + " publicznych repozytoriow.";
                }
            }

            if (!Array.isArray(repos) || repos.length === 0) {
                grid.innerHTML = "";
                if (emptyState) {
                    emptyState.hidden = false;
                }
                return;
            }

            grid.innerHTML = repos.map(renderRepositoryCard).join("");
            if (emptyState) {
                emptyState.hidden = true;
            }
        }).catch(function () {
            grid.innerHTML = "";
            if (emptyState) {
                emptyState.hidden = false;
            }
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        updateScheduledFeed();
        updateArticleGate();
        loadPortfolio();
    });
}());
