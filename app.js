(function () {
  const data = window.monitorData;
  const states = [...data.states];
  const clauses = data.scope.clauses;

  const amendmentBrief = document.getElementById("amendment-brief");
  const selectedClauseBrief = document.getElementById("selected-clause-brief");
  const clauseTabs = document.getElementById("clause-tabs");
  const stateTitle = document.getElementById("state-title");
  const stateBadge = document.getElementById("state-badge");
  const stateHealth = document.getElementById("state-health");
  const estimateCards = document.getElementById("estimate-cards");
  const scoreBreakdown = document.getElementById("score-breakdown");
  const topicBreakdown = document.getElementById("topic-breakdown");
  const newsList = document.getElementById("news-list");
  const documentList = document.getElementById("document-list");
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

    clauseTabs.innerHTML = clauses.map((clause) => `
      <button class="clause-tab ${clause.id === selectedClauseId ? "active" : ""}" data-clause-id="${clause.id}">${clause.title}</button>
    `).join("");

    document.querySelectorAll(".clause-tab").forEach((button) => {
      button.addEventListener("click", () => {
        selectedClauseId = button.dataset.clauseId;
        renderAll();
      });
    });
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

    stateHealth.innerHTML = `
      <article class="health-card">
        <div class="mini-label">Jurisdiction selected</div>
        <strong>${state.name}</strong>
        <div class="mini-label">${view.summary}</div>
      </article>
      <article class="health-card">
        <div class="mini-label">What amendment?</div>
        <strong>${data.scope.amendment}</strong>
        <div class="mini-label">${clause.title}</div>
      </article>
      <article class="health-card">
        <div class="mini-label">Signal origin hotspot</div>
        <strong>${view.hotspotCounty}</strong>
        <div class="mini-label">${view.hotspotDistrict}</div>
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
          <span class="pill ${classifyLevel(Math.max(view.estimates.limited, view.estimates.expanded, view.estimates.challenged))}">seeded</span>
        </div>
        <div class="document-meta">
          <span class="meta-tag">${stat.thenLabel}: ${stat.thenValue}</span>
          <span class="meta-tag">${stat.nowLabel}: ${stat.nowValue}</span>
        </div>
        <p>${stat.note}</p>
      </div>
    `).join("");

    topicBreakdown.innerHTML = `
      <div class="topic-chip">
        <strong>${clause.title}</strong>
        <p>${clause.definition}</p>
      </div>
    `;

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
      : '<div class="empty-results">No recent source documents are seeded for this clause and state combination yet.</div>';
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
