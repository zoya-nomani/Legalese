(function () {
  const data = window.monitorData;
  const states = [...data.states];
  const clauses = data.scope.clauses;
  const rootStyle = document.documentElement.style;

  const stateThemes = {
    ca: {
      accent: "#b35c38",
      accentDark: "#8b4326",
      teal: "#2f7d78",
      glowWarm: "rgba(214, 126, 83, 0.18)",
      glowCool: "rgba(47, 125, 120, 0.16)"
    },
    tx: {
      accent: "#b14a3a",
      accentDark: "#7d2f25",
      teal: "#476c78",
      glowWarm: "rgba(177, 74, 58, 0.18)",
      glowCool: "rgba(71, 108, 120, 0.16)"
    },
    ny: {
      accent: "#a0492f",
      accentDark: "#72311f",
      teal: "#315f7f",
      glowWarm: "rgba(160, 73, 47, 0.16)",
      glowCool: "rgba(49, 95, 127, 0.16)"
    },
    mn: {
      accent: "#8a4f86",
      accentDark: "#5f355c",
      teal: "#2c6e74",
      glowWarm: "rgba(138, 79, 134, 0.16)",
      glowCool: "rgba(44, 110, 116, 0.15)"
    },
    pa: {
      accent: "#9a5a2f",
      accentDark: "#6f3f20",
      teal: "#49657a",
      glowWarm: "rgba(154, 90, 47, 0.16)",
      glowCool: "rgba(73, 101, 122, 0.16)"
    }
  };

  const jurisdictionFacts = {
    ca: {
      capital: "Sacramento",
      population: "39,355,309",
      populationLabel: "U.S. Census Bureau estimate (July 1, 2025)",
      electoralVotes: 54,
      districtMapAlt: "California congressional districts shaded by 2025 voter registration balance",
      districtMapUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/CA%202025%20Voter%20Registration%20by%20CD.svg",
      districtMapSource: "Wikimedia Commons",
      districtMapPage: "https://commons.wikimedia.org/wiki/File:CA_2025_Voter_Registration_by_CD.svg",
      districtMapNote: "Latest available district-level partisan registration map. Blue-leaning and red-leaning districts are shown by party registration balance.",
      populationSource: "https://www.census.gov/quickfacts/fact/table/CA/POP645222"
    },
    tx: {
      capital: "Austin",
      population: "31,709,821",
      populationLabel: "U.S. Census Bureau estimate (July 1, 2025)",
      electoralVotes: 40,
      districtMapAlt: "Texas congressional districts shaded by 2024 U.S. Senate results",
      districtMapUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/2024%20United%20States%20Senate%20election%20in%20Texas%20results%20map%20by%20congressional%20district.svg",
      districtMapSource: "Wikimedia Commons",
      districtMapPage: "https://commons.wikimedia.org/wiki/File:2024_United_States_Senate_election_in_Texas_results_map_by_congressional_district.svg",
      districtMapNote: "Latest available statewide district map showing red-blue performance by congressional district in a 2024 statewide federal race.",
      populationSource: "https://www.census.gov/quickfacts/fact/table/TX/RHI125224",
    },
    ny: {
      capital: "Albany",
      population: "20,002,427",
      populationLabel: "U.S. Census Bureau estimate (July 1, 2025)",
      electoralVotes: 28,
      districtMapAlt: "New York congressional districts shaded by 2025 voter registration balance",
      districtMapUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/2025%20New%20York%20voter%20registration%20map%20by%20congressional%20district.svg",
      districtMapSource: "Wikimedia Commons",
      districtMapPage: "https://commons.wikimedia.org/wiki/File:2025_New_York_voter_registration_map_by_congressional_district.svg",
      districtMapNote: "Latest available district-level partisan registration map. Blue-leaning and red-leaning districts are shown by party registration balance.",
      populationSource: "https://www.census.gov/quickfacts/fact/table/NY/POP815223"
    },
    mn: {
      capital: "Saint Paul",
      population: "5,830,405",
      populationLabel: "U.S. Census Bureau estimate (July 1, 2025)",
      electoralVotes: 10,
      districtMapAlt: "Minnesota congressional districts shaded by 2024 U.S. Senate results",
      districtMapUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/2024%20United%20States%20Senate%20election%20in%20Minnesota%20results%20map%20by%20congressional%20district.svg",
      districtMapSource: "Wikimedia Commons",
      districtMapPage: "https://commons.wikimedia.org/wiki/File:2024_United_States_Senate_election_in_Minnesota_results_map_by_congressional_district.svg",
      districtMapNote: "Latest available statewide district map showing red-blue performance by congressional district in a 2024 statewide federal race.",
      populationSource: "https://www.census.gov/quickfacts/fact/table/MN/POP815223"
    },
    pa: {
      capital: "Harrisburg",
      population: "13,059,432",
      populationLabel: "U.S. Census Bureau estimate (July 1, 2025)",
      electoralVotes: 19,
      districtMapAlt: "Pennsylvania congressional districts shaded by 2025 voter registration balance",
      districtMapUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/2025%20Pennsylvania%20voter%20registration%20map%20by%20congressional%20district.svg",
      districtMapSource: "Wikimedia Commons",
      districtMapPage: "https://commons.wikimedia.org/wiki/File:2025_Pennsylvania_voter_registration_map_by_congressional_district.svg",
      districtMapNote: "Latest available district-level partisan registration map. Blue-leaning and red-leaning districts are shown by party registration balance.",
      populationSource: "https://www.census.gov/quickfacts/fact/table/PA/RHI125223"
    }
  };

  const amendmentBrief = document.getElementById("amendment-brief");
  const selectedClauseBrief = document.getElementById("selected-clause-brief");
  const clauseTabs = document.getElementById("clause-tabs");
  const stateTitle = document.getElementById("state-title");
  const stateBadge = document.getElementById("state-badge");
  const stateHealth = document.getElementById("state-health");
  const estimateCards = document.getElementById("estimate-cards");
  const scoreBreakdown = document.getElementById("score-breakdown");
  const newsList = document.getElementById("news-list");
  const documentList = document.getElementById("document-list");
  const jurisdictionFactsPanel = document.getElementById("jurisdiction-facts");
  const heroStateSelect = document.getElementById("hero-state-select");
  const heroGo = document.getElementById("hero-go");

  let selectedStateId = states[0].id;
  let selectedClauseId = "equal-protection";

  function formatDate(dateValue) {
    return new Date(dateValue + "T00:00:00").toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }

  function classifyLevel(score) {
    if (score >= 75) return "high";
    if (score >= 50) return "medium";
    return "low";
  }

  function getSelectedState() {
    return states.find((state) => state.id === selectedStateId) || states[0];
  }

  function getSelectedClause() {
    return clauses.find((clause) => clause.id === selectedClauseId) || clauses[0];
  }

  function getClauseView() {
    return getSelectedState().clauseData[selectedClauseId];
  }

  function getPrimaryDirection(estimates) {
    return Object.entries(estimates).sort((a, b) => b[1] - a[1])[0][0];
  }

  function populateStateSelect() {
    heroStateSelect.innerHTML = states.map((state) => `<option value="${state.id}">${state.name}</option>`).join("");
    heroStateSelect.value = selectedStateId;
  }

  function applyStateTheme(stateId) {
    const theme = stateThemes[stateId] || stateThemes.ca;
    rootStyle.setProperty("--accent", theme.accent);
    rootStyle.setProperty("--accent-dark", theme.accentDark);
    rootStyle.setProperty("--teal", theme.teal);
    rootStyle.setProperty("--glow-warm", theme.glowWarm);
    rootStyle.setProperty("--glow-cool", theme.glowCool);
  }

  function renderAmendmentBrief() {
    amendmentBrief.innerHTML = `
      <article class="amendment-card">
        <div class="mini-label">Overall explanation</div>
        <strong>${data.scope.amendment}</strong>
        <p>${data.scope.amendmentBrief.summary}</p>
      </article>
      <article class="amendment-card">
        <div class="mini-label">History of the amendment</div>
        <strong>History and importance</strong>
        <p>${data.scope.amendmentBrief.history}</p>
      </article>
      <article class="amendment-card">
        <div class="mini-label">How it affects the average person</div>
        <strong>Everyday impact</strong>
        <p>${data.scope.amendmentBrief.averagePerson}</p>
      </article>
    `;
  }

  function renderClauseTabs() {
    const clause = getSelectedClause();
    selectedClauseBrief.innerHTML = `
      <div class="mini-label">Selected clause</div>
      <strong>${clause.title}</strong>
      <p>${clause.definition}</p>
    `;

    clauseTabs.innerHTML = clauses.map((clauseItem) => `
      <button class="clause-tab ${clauseItem.id === selectedClauseId ? "active" : ""}" data-clause-id="${clauseItem.id}">${clauseItem.title}</button>
    `).join("");

    document.querySelectorAll(".clause-tab").forEach((button) => {
      button.addEventListener("click", () => {
        selectedClauseId = button.dataset.clauseId;
        renderAll();
      });
    });
  }

  function renderJurisdictionFacts(state) {
    const facts = jurisdictionFacts[state.id];
    if (!facts) {
      jurisdictionFactsPanel.innerHTML = '<div class="empty-results">Jurisdiction facts are not available for this selection yet.</div>';
      return;
    }

    jurisdictionFactsPanel.innerHTML = `
      <div class="facts-grid">
        <article class="fact-stat">
          <div class="mini-label">Jurisdiction</div>
          <strong>${state.name}</strong>
        </article>
        <article class="fact-stat">
          <div class="mini-label">Capital city</div>
          <strong>${facts.capital}</strong>
        </article>
        <article class="fact-stat">
          <div class="mini-label">Population</div>
          <strong>${facts.population}</strong>
          <p>${facts.populationLabel}</p>
        </article>
        <article class="fact-stat">
          <div class="mini-label">Electoral votes</div>
          <strong>${facts.electoralVotes}</strong>
        </article>
      </div>
      <div class="map-frame">
        <img src="${facts.districtMapUrl}" alt="${facts.districtMapAlt}">
      </div>
      <p class="facts-note">${facts.districtMapNote}</p>
      <div class="facts-links">
        <a href="${facts.populationSource}" target="_blank" rel="noreferrer">Population source</a>
        <a href="${facts.districtMapPage}" target="_blank" rel="noreferrer">District map source</a>
      </div>
    `;
  }

  function renderStateDetail() {
    const state = getSelectedState();
    const clause = getSelectedClause();
    const view = getClauseView();
    const primaryDirection = getPrimaryDirection(view.estimates);
    const docs = [...view.documents].sort((a, b) => new Date(b.date) - new Date(a.date));

    stateTitle.textContent = state.name;
    stateBadge.textContent = clause.title;
    heroStateSelect.value = state.id;
    applyStateTheme(state.id);

    stateHealth.innerHTML = `
      <article class="health-card">
        <div class="mini-label">Jurisdiction selected</div>
        <strong>${state.name}</strong>
        <p class="mini-support">${view.summary}</p>
      </article>
      <article class="health-card">
        <div class="mini-label">National right in focus</div>
        <strong>${data.scope.amendment}</strong>
        <p class="mini-support">${clause.title}</p>
      </article>
      <article class="health-card">
        <div class="mini-label">Signal origin hotspot</div>
        <strong>${view.hotspotCounty}</strong>
        <p class="mini-support">${view.hotspotDistrict}</p>
      </article>
    `;

    estimateCards.innerHTML = [
      { label: "Limited", key: "limited", value: view.estimates.limited, text: "Rights are being narrowed, weakened, or placed under pressure." },
      { label: "Expanded", key: "expanded", value: view.estimates.expanded, text: "Rights are being broadened, clarified, or extended to more people." },
      { label: "Challenged", key: "challenged", value: view.estimates.challenged, text: "The clause is being actively contested, tested, or reinterpreted." }
    ].map((estimate) => `
      <article class="answer-card ${estimate.key === primaryDirection ? "emphasis" : ""}">
        <div class="mini-label">${estimate.label}</div>
        <div class="score-value">${estimate.value}%</div>
        <p>${estimate.text}</p>
      </article>
    `).join("");

    scoreBreakdown.innerHTML = view.stats.map((stat) => `
      <div class="score-row">
        <div class="score-header">
          <strong>${stat.label}</strong>
          <button class="pill stat-mode ${classifyLevel(Math.max(view.estimates.limited, view.estimates.expanded, view.estimates.challenged))}" type="button" title="This statistic is a modeled trend estimate built from the current dashboard signals. Open the detail below for context.">Modeled trend</button>
        </div>
        <div class="document-meta">
          <span class="meta-tag">${stat.thenLabel}: ${stat.thenValue}</span>
          <span class="meta-tag">${stat.nowLabel}: ${stat.nowValue}</span>
        </div>
        <p>${stat.note}</p>
        <details>
          <summary>How this statistic is being interpreted</summary>
          <div class="score-detail">
            This card compares an earlier baseline with the current dashboard view for the selected clause. It is a modeled interpretation built from the sources, labels, and weighting used in this MVP rather than an official government metric.
          </div>
        </details>
      </div>
    `).join("");

    newsList.innerHTML = view.news.map((item) => `
      <article class="document-card">
        <div class="document-header">
          <h3>${item.headline}</h3>
          <span class="pill ${classifyLevel(view.estimates[item.direction || primaryDirection])}">${item.direction || primaryDirection}</span>
        </div>
        <p class="evidence-summary">${item.angle}</p>
        <p class="evidence-summary"><strong>Connection:</strong> This source most directly supports <strong>${item.direction || primaryDirection}</strong> because ${item.relevance}</p>
        <p class="evidence-summary"><strong>Jurisdictional role:</strong> This is a signal originating in the selected jurisdiction, not a separate version of the constitutional right.</p>
        <a href="${item.url}" target="_blank" rel="noreferrer">Open related source</a>
      </article>
    `).join("");

    documentList.innerHTML = docs.length
      ? docs.map((document) => `
          <article class="document-card">
            <div class="document-header">
              <h3>${document.title}</h3>
              <span class="pill ${classifyLevel(view.estimates[document.direction] || document.weight)}">${document.direction}</span>
            </div>
            <div class="document-meta">
              <span class="meta-tag">${document.type}</span>
              <span class="meta-tag">${document.status}</span>
              <span class="meta-tag">${document.topic}</span>
              <span class="meta-tag">${document.region}</span>
              <span class="meta-tag">${formatDate(document.date)}</span>
            </div>
            <p class="evidence-summary">${document.explanation}</p>
            <p class="evidence-summary"><strong>Connection:</strong> This source most directly supports <strong>${document.direction}</strong> in the selected clause view.</p>
            <p class="evidence-summary"><strong>Jurisdictional role:</strong> This source originates in ${document.region} and may have local, persuasive, or broader constitutional influence depending on the court or body involved.</p>
            <a href="${document.url}" target="_blank" rel="noreferrer">View source: ${document.sourceName}</a>
          </article>
        `).join("")
      : '<div class="empty-results">No recent source documents are seeded for this clause and jurisdiction combination yet.</div>';

    renderJurisdictionFacts(state);
  }

  function renderAll() {
    renderAmendmentBrief();
    renderClauseTabs();
    renderStateDetail();
  }

  populateStateSelect();

  heroGo.addEventListener("click", () => {
    selectedStateId = heroStateSelect.value;
    renderAll();
  });

  document.getElementById("jump-to-ranking").addEventListener("click", () => {
    clauseTabs.scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("jump-to-method").addEventListener("click", () => {
    document.getElementById("methodology").scrollIntoView({ behavior: "smooth" });
  });

  renderAll();
})();
