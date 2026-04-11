(function () {
  const amendmentDatasets = {
    "14th Amendment": window.monitorData,
    "2nd Amendment": window.secondAmendmentData
  };
  const rootStyle = document.documentElement.style;

  const fallbackStateThemes = {
    ca: {
      accent: "#c96a2a",
      accentDark: "#8e4315",
      teal: "#1f7a6f",
      glowWarm: "rgba(201, 106, 42, 0.22)",
      glowCool: "rgba(31, 122, 111, 0.2)"
    },
    tx: {
      accent: "#b13b2e",
      accentDark: "#721f18",
      teal: "#3c5977",
      glowWarm: "rgba(177, 59, 46, 0.22)",
      glowCool: "rgba(60, 89, 119, 0.2)"
    },
    ny: {
      accent: "#8f4bb3",
      accentDark: "#5c2a78",
      teal: "#1f5a8a",
      glowWarm: "rgba(143, 75, 179, 0.2)",
      glowCool: "rgba(31, 90, 138, 0.2)"
    },
    mn: {
      accent: "#356fa8",
      accentDark: "#1f466d",
      teal: "#6b9f45",
      glowWarm: "rgba(53, 111, 168, 0.2)",
      glowCool: "rgba(107, 159, 69, 0.18)"
    },
    pa: {
      accent: "#9b7a22",
      accentDark: "#675014",
      teal: "#4c587f",
      glowWarm: "rgba(155, 122, 34, 0.22)",
      glowCool: "rgba(76, 88, 127, 0.18)"
    }
  };

  const fallbackJurisdictionFacts = {
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

  let stateThemes = fallbackStateThemes;
  let jurisdictionFacts = fallbackJurisdictionFacts;
  let liveDashboardOverlay = { amendments: {} };

  const heroTitle = document.getElementById("hero-title");
  const heroText = document.getElementById("hero-text");
  const focusAmendmentTitle = document.getElementById("focus-amendment-title");
  const amendmentBriefTitle = document.getElementById("amendment-brief-title");
  const newsSectionTitle = document.getElementById("news-section-title");
  const documentsSectionTitle = document.getElementById("documents-section-title");
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
  const heroAmendmentSelect = document.getElementById("hero-amendment-select");
  const heroGo = document.getElementById("hero-go");

  let selectedAmendmentName = "14th Amendment";
  let selectedStateId = amendmentDatasets[selectedAmendmentName].states[0].id;
  let selectedClauseId = "equal-protection";
  let generatedCourtSignals = [];
  let generatedCourtStatus = "idle";
  let generatedCourtTimestamp = null;
  let generatedBillSignals = [];
  let generatedBillStatus = "idle";
  let generatedBillTimestamp = null;
  let generatedNewsSignals = [];
  let generatedNewsStatus = "idle";
  let generatedNewsTimestamp = null;

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

  function getCurrentData() {
    return amendmentDatasets[selectedAmendmentName] || amendmentDatasets["14th Amendment"];
  }

  function getStates() {
    return [...getCurrentData().states];
  }

  function getClauses() {
    return [...getCurrentData().scope.clauses];
  }

  function getSelectedState() {
    const states = getStates();
    return states.find((state) => state.id === selectedStateId) || states[0];
  }

  function getSelectedClause() {
    const clauses = getClauses();
    return clauses.find((clause) => clause.id === selectedClauseId) || clauses[0];
  }

  function getClauseView() {
    return getSelectedState().clauseData[selectedClauseId];
  }

  function getGeneratedSignalsForSelection() {
    return generatedCourtSignals
      .filter((signal) => signal.amendment === selectedAmendmentName && signal.jurisdictionId === selectedStateId && signal.clauseId === selectedClauseId)
      .sort((a, b) => new Date(b.dateFiled || 0) - new Date(a.dateFiled || 0));
  }

  function getGeneratedBillsForSelection() {
    return generatedBillSignals
      .filter((bill) => bill.amendment === selectedAmendmentName && bill.jurisdictionId === selectedStateId && bill.clauseId === selectedClauseId)
      .sort((a, b) => new Date(b.latestActionDate || 0) - new Date(a.latestActionDate || 0));
  }

  function getGeneratedNewsForSelection() {
    return generatedNewsSignals
      .filter((signal) => signal.amendment === selectedAmendmentName && signal.jurisdictionId === selectedStateId && signal.clauseId === selectedClauseId)
      .sort((a, b) => new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0));
  }

  function getOverlaySignalsForSelection(bucket) {
    const amendmentOverlay = liveDashboardOverlay.amendments?.[selectedAmendmentName];
    const stateOverlay = amendmentOverlay?.[selectedStateId];
    const clauseOverlay = stateOverlay?.[selectedClauseId];
    const collection = clauseOverlay?.[bucket];

    if (!Array.isArray(collection)) {
      return [];
    }

    return [...collection].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  }

  function getPrimaryDirection(estimates) {
    return Object.entries(estimates).sort((a, b) => b[1] - a[1])[0][0];
  }

  function getDefaultClauseId() {
    return getClauses()[0]?.id || "";
  }

  function populateStateSelect() {
    const states = getStates();
    heroStateSelect.innerHTML = states.map((state) => `<option value="${state.id}">${state.name}</option>`).join("");
    if (!states.find((state) => state.id === selectedStateId)) {
      selectedStateId = states[0]?.id;
    }
    heroStateSelect.value = selectedStateId;
  }

  function populateAmendmentSelect() {
    const amendmentNames = Object.keys(amendmentDatasets);
    heroAmendmentSelect.innerHTML = amendmentNames.map((name) => `<option value="${name}">${name}</option>`).join("");
    heroAmendmentSelect.value = selectedAmendmentName;
  }

  async function loadGeneratedCourtSignals() {
    generatedCourtStatus = "loading";

    try {
      const response = await fetch(`./generated/courtlistener-signals.json?ts=${Date.now()}`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const payload = await response.json();
      generatedCourtSignals = Array.isArray(payload.signals) ? payload.signals : [];
      generatedCourtTimestamp = payload.generatedAt || null;
      generatedCourtStatus = "loaded";
    } catch (error) {
      generatedCourtSignals = [];
      generatedCourtTimestamp = null;
      generatedCourtStatus = "error";
    }

    renderStateDetail();
  }

  async function loadGeneratedBillSignals() {
    generatedBillStatus = "loading";

    try {
      const response = await fetch(`./generated/openstates-bills.json?ts=${Date.now()}`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const payload = await response.json();
      generatedBillSignals = Array.isArray(payload.bills) ? payload.bills : [];
      generatedBillTimestamp = payload.generatedAt || null;
      generatedBillStatus = "loaded";
    } catch (error) {
      generatedBillSignals = [];
      generatedBillTimestamp = null;
      generatedBillStatus = "error";
    }

    renderStateDetail();
  }

  async function loadGeneratedNewsSignals() {
    generatedNewsStatus = "loading";

    try {
      const response = await fetch(`./generated/news-signals.json?ts=${Date.now()}`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const payload = await response.json();
      generatedNewsSignals = Array.isArray(payload.signals) ? payload.signals : [];
      generatedNewsTimestamp = payload.generatedAt || null;
      generatedNewsStatus = "loaded";
    } catch (error) {
      generatedNewsSignals = [];
      generatedNewsTimestamp = null;
      generatedNewsStatus = "error";
    }

    renderStateDetail();
  }

  async function loadSiteConfig() {
    try {
      const response = await fetch(`./content/site-config.json?ts=${Date.now()}`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const payload = await response.json();
      stateThemes = payload.stateThemes || fallbackStateThemes;
      jurisdictionFacts = payload.jurisdictionFacts || fallbackJurisdictionFacts;
    } catch (error) {
      stateThemes = fallbackStateThemes;
      jurisdictionFacts = fallbackJurisdictionFacts;
    }

    renderStateDetail();
  }

  async function loadLiveDashboardOverlay() {
    try {
      const response = await fetch(`./generated/live-dashboard-overlay.json?ts=${Date.now()}`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const payload = await response.json();
      liveDashboardOverlay = payload && payload.amendments ? payload : { amendments: {} };
    } catch (error) {
      liveDashboardOverlay = { amendments: {} };
    }

    renderStateDetail();
  }

  function applyStateTheme(stateId) {
    const theme = stateThemes[stateId] || stateThemes.ca;
    rootStyle.setProperty("--accent", theme.accent);
    rootStyle.setProperty("--accent-dark", theme.accentDark);
    rootStyle.setProperty("--teal", theme.teal);
    rootStyle.setProperty("--glow-warm", theme.glowWarm);
    rootStyle.setProperty("--glow-cool", theme.glowCool);
  }

  function renderAmendmentChrome() {
    const currentData = getCurrentData();
    const amendmentName = currentData.scope.amendment;

    document.title = `Are your rights at risk?: Decoding the ${amendmentName}`;
    heroTitle.textContent = `Are your rights at risk?: Decoding the ${amendmentName}`;
    heroText.textContent = `A trend intelligence dashboard for California, Texas, New York, Minnesota, and Pennsylvania. This MVP treats the ${amendmentName} as a national constitutional right and lets users inspect jurisdictional signals that may shape how that right is interpreted.`;
    focusAmendmentTitle.textContent = amendmentName;
    amendmentBriefTitle.textContent = `What is the ${amendmentName}?`;
    newsSectionTitle.textContent = `Recent News Stories That Link With the ${amendmentName}`;
    documentsSectionTitle.textContent = `Recent Court Rulings, Their Decisions, and How This Affects the ${amendmentName}`;
  }

  function renderAmendmentBrief() {
    const currentData = getCurrentData();
    amendmentBrief.innerHTML = `
      <article class="amendment-card">
        <div class="mini-label">Overall explanation</div>
        <strong>${currentData.scope.amendment}</strong>
        <p>${currentData.scope.amendmentBrief.summary}</p>
      </article>
      <article class="amendment-card">
        <div class="mini-label">History of the amendment</div>
        <strong>History and importance</strong>
        <p>${currentData.scope.amendmentBrief.history}</p>
      </article>
      <article class="amendment-card">
        <div class="mini-label">How it affects the average person</div>
        <strong>Everyday impact</strong>
        <p>${currentData.scope.amendmentBrief.averagePerson}</p>
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

    clauseTabs.innerHTML = getClauses().map((clauseItem) => `
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
    const currentData = getCurrentData();
    const state = getSelectedState();
    const clause = getSelectedClause();
    const view = getClauseView();
    const primaryDirection = getPrimaryDirection(view.estimates);
    const liveSignals = getGeneratedSignalsForSelection();
    const liveBills = getGeneratedBillsForSelection();
    const liveNews = getGeneratedNewsForSelection();
    const promotedNews = getOverlaySignalsForSelection("news");
    const promotedEvidence = getOverlaySignalsForSelection("documents");
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
        <strong>${currentData.scope.amendment}</strong>
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

    const promotedNewsCards = promotedNews.map((item) => `
      <article class="document-card promoted-source-card">
        <div class="document-header">
          <h3>${item.title || "Promoted news signal"}</h3>
          <span class="pill promoted">${item.direction || "promoted"}</span>
        </div>
        <p class="evidence-summary">${item.summary || "This source has been reviewed and promoted into the live dashboard overlay."}</p>
        <p class="evidence-summary"><strong>Promotion note:</strong> ${item.promotionNote || "Reviewed and approved for display."}</p>
        ${item.link ? `<a href="${item.link}" target="_blank" rel="noreferrer">Open related source</a>` : ""}
      </article>
    `).join("");

    const liveNewsCards = liveNews.map((item) => `
      <article class="document-card live-source-card">
        <div class="document-header">
          <h3>${item.title || "News signal candidate"}</h3>
          <span class="pill live">${item.direction || "live news"}</span>
        </div>
        <p class="evidence-summary">${item.summary || "This result was pulled automatically from a configured news feed and should be reviewed before being promoted into the seeded analysis."}</p>
        <p class="evidence-summary"><strong>Connection:</strong> This is a live current-events candidate for the selected jurisdiction and clause.</p>
        <p class="evidence-summary"><strong>Automation note:</strong> ${generatedNewsTimestamp ? `Latest connector run: ${new Date(generatedNewsTimestamp).toLocaleString("en-US")}.` : "Latest connector timestamp unavailable."}</p>
        ${item.link ? `<a href="${item.link}" target="_blank" rel="noreferrer">Open related source</a>` : ""}
      </article>
    `).join("");

    const seededNewsCards = view.news.map((item) => `
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

    if ((generatedNewsStatus === "loading") && !liveNewsCards && !promotedNewsCards) {
      newsList.innerHTML = '<div class="empty-results">Checking the latest generated current-events signals for this jurisdiction and clause.</div>' + seededNewsCards;
    } else if (promotedNewsCards || liveNewsCards || seededNewsCards) {
      newsList.innerHTML = promotedNewsCards + liveNewsCards + seededNewsCards;
    } else if (generatedNewsStatus === "error") {
      newsList.innerHTML = '<div class="empty-results">The live news connector was not reachable during this session, so only seeded news sources will appear when available.</div>';
    } else {
      newsList.innerHTML = '<div class="empty-results">No recent news items are seeded for this clause and jurisdiction combination yet.</div>';
    }

    const promotedEvidenceCards = promotedEvidence.map((item) => `
      <article class="document-card promoted-source-card">
        <div class="document-header">
          <h3>${item.title || "Promoted source"}</h3>
          <span class="pill promoted">${item.direction || "promoted"}</span>
        </div>
        <div class="document-meta">
          <span class="meta-tag">${item.sourceType}</span>
          <span class="meta-tag">${clause.title}</span>
          ${item.date ? `<span class="meta-tag">${formatDate(item.date)}</span>` : ""}
        </div>
        <p class="evidence-summary">${item.summary || "This source has been reviewed and promoted into the live dashboard overlay."}</p>
        <p class="evidence-summary"><strong>Promotion note:</strong> ${item.promotionNote || "Reviewed and approved for display."}</p>
        ${item.link ? `<a href="${item.link}" target="_blank" rel="noreferrer">Open promoted source</a>` : ""}
      </article>
    `).join("");

    const liveSignalCards = liveSignals.map((signal) => `
      <article class="document-card live-source-card">
        <div class="document-header">
          <h3>${signal.caseName || "Court signal candidate"}</h3>
          <span class="pill live">live candidate</span>
        </div>
        <div class="document-meta">
          <span class="meta-tag">CourtListener</span>
          <span class="meta-tag">${clause.title}</span>
          <span class="meta-tag">${signal.jurisdictionName || state.name}</span>
          ${signal.dateFiled ? `<span class="meta-tag">${formatDate(signal.dateFiled)}</span>` : ""}
        </div>
        <p class="evidence-summary">${signal.snippet || "This result was pulled automatically from the CourtListener search connector and should be reviewed before being promoted into the seeded analysis."}</p>
        <p class="evidence-summary"><strong>Connection:</strong> This is a live court-search candidate for the selected jurisdiction and clause. It has not yet been manually classified into limited, expanded, or challenged.</p>
        <p class="evidence-summary"><strong>Automation note:</strong> ${generatedCourtTimestamp ? `Latest connector run: ${new Date(generatedCourtTimestamp).toLocaleString("en-US")}.` : "Latest connector timestamp unavailable."}</p>
        ${signal.sourceUrl ? `<a href="${signal.sourceUrl}" target="_blank" rel="noreferrer">Open CourtListener candidate</a>` : ""}
      </article>
    `).join("");

    const liveBillCards = liveBills.map((bill) => `
      <article class="document-card live-source-card">
        <div class="document-header">
          <h3>${bill.identifier || "Tracked bill candidate"}${bill.title ? `: ${bill.title}` : ""}</h3>
          <span class="pill live">live bill</span>
        </div>
        <div class="document-meta">
          <span class="meta-tag">Open States</span>
          <span class="meta-tag">${clause.title}</span>
          <span class="meta-tag">${bill.jurisdiction || state.name}</span>
          ${bill.latestActionDate ? `<span class="meta-tag">${formatDate(bill.latestActionDate)}</span>` : ""}
        </div>
        <p class="evidence-summary">${bill.latestAction || "Latest legislative action not available yet."}</p>
        <p class="evidence-summary"><strong>Connection:</strong> This is a live legislation candidate tied to the selected jurisdiction and clause. It should be reviewed before being promoted into the seeded analysis.</p>
        <p class="evidence-summary"><strong>Automation note:</strong> ${generatedBillTimestamp ? `Latest connector run: ${new Date(generatedBillTimestamp).toLocaleString("en-US")}.` : "Latest connector timestamp unavailable."}</p>
        ${bill.openstatesUrl ? `<a href="${bill.openstatesUrl}" target="_blank" rel="noreferrer">Open legislative candidate</a>` : ""}
      </article>
    `).join("");

    const seededDocCards = docs.map((document) => `
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
        `).join("");

    const liveConnectorCards = promotedEvidenceCards + liveSignalCards + liveBillCards;

    if ((generatedCourtStatus === "loading" || generatedBillStatus === "loading") && !liveConnectorCards) {
      documentList.innerHTML = '<div class="empty-results">Checking the latest generated court and legislation signals for this jurisdiction and clause.</div>' + seededDocCards;
    } else if (liveConnectorCards || seededDocCards) {
      documentList.innerHTML = liveConnectorCards + seededDocCards;
    } else if (generatedCourtStatus === "error" || generatedBillStatus === "error") {
      documentList.innerHTML = '<div class="empty-results">One or more live connectors were not reachable during this session, so only seeded sources will appear when available.</div>';
    } else {
      documentList.innerHTML = '<div class="empty-results">No recent source documents are seeded for this clause and jurisdiction combination yet.</div>';
    }

    renderJurisdictionFacts(state);
  }

  function renderAll() {
    renderAmendmentChrome();
    renderAmendmentBrief();
    renderClauseTabs();
    renderStateDetail();
  }

  populateAmendmentSelect();
  populateStateSelect();

  heroGo.addEventListener("click", () => {
    const nextAmendment = heroAmendmentSelect.value;
    if (nextAmendment !== selectedAmendmentName) {
      selectedAmendmentName = nextAmendment;
      selectedClauseId = getDefaultClauseId();
    }

    selectedStateId = heroStateSelect.value;
    if (!getStates().find((state) => state.id === selectedStateId)) {
      selectedStateId = getStates()[0]?.id;
    }

    populateAmendmentSelect();
    populateStateSelect();
    renderAll();
  });

  document.getElementById("jump-to-ranking").addEventListener("click", () => {
    clauseTabs.scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("jump-to-method").addEventListener("click", () => {
    document.getElementById("methodology").scrollIntoView({ behavior: "smooth" });
  });

  renderAll();
  loadSiteConfig();
  loadGeneratedCourtSignals();
  loadGeneratedBillSignals();
  loadGeneratedNewsSignals();
  loadLiveDashboardOverlay();
})();
