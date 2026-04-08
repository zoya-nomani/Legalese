(function () {
  const data = window.monitorData;
  const states = [...data.states];
  const scoreLabels = {
    challengeRisk: "Challenge Risk",
    restrictionPressure: "Restriction Pressure",
    expansionMomentum: "Expansion Momentum"
  };

  const summaryMetrics = document.getElementById("summary-metrics");
  const amendmentBrief = document.getElementById("amendment-brief");
  const amendmentParts = document.getElementById("amendment-parts");
  const stateRanking = document.getElementById("state-ranking");
  const stateTitle = document.getElementById("state-title");
  const stateBadge = document.getElementById("state-badge");
  const stateOverview = document.getElementById("state-overview");
  const stateHealth = document.getElementById("state-health");
  const locationAnswer = document.getElementById("location-answer");
  const estimateCards = document.getElementById("estimate-cards");
  const scoreBreakdown = document.getElementById("score-breakdown");
  const topicBreakdown = document.getElementById("topic-breakdown");
  const newsList = document.getElementById("news-list");
  const documentList = document.getElementById("document-list");
  const sortSelect = document.getElementById("sort-select");
  const filterSummary = document.getElementById("filter-summary");
  const filterState = document.getElementById("filter-state");
  const filterTopic = document.getElementById("filter-topic");
  const filterType = document.getElementById("filter-type");
  const filterDirection = document.getElementById("filter-direction");

  const filters = {
    state: "all",
    topic: "all",
    type: "all",
    direction: "all"
  };

  let selectedStateId = states[0].id;
  let currentSort = sortSelect.value;

  function classifyLevel(score) {
    if (score >= 75) return "high";
    if (score >= 50) return "medium";
    return "low";
  }

  function formatDate(dateValue) {
    return new Date(dateValue + "T00:00:00").toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }

  function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  function getAllDocuments() {
    return states.flatMap((state) =>
      state.documents.map((document) => ({
        ...document,
        stateId: state.id,
        stateName: state.name
      }))
    );
  }

  function getFilteredDocuments(state) {
    return state.documents.filter((document) => {
      const matchesTopic = filters.topic === "all" || document.topic === filters.topic;
      const matchesType = filters.type === "all" || document.type === filters.type;
      const matchesDirection = filters.direction === "all" || document.direction === filters.direction;
      return matchesTopic && matchesType && matchesDirection;
    });
  }

  function getVisibleStates() {
    return states.filter((state) => {
      const matchesState = filters.state === "all" || state.id === filters.state;
      const matchesDocuments = getFilteredDocuments(state).length > 0;
      return matchesState && matchesDocuments;
    });
  }

  function averageScore(visibleStates, key) {
    if (!visibleStates.length) return 0;
    const total = visibleStates.reduce((sum, state) => sum + state.scores[key], 0);
    return Math.round(total / visibleStates.length);
  }

  function strongestState(visibleStates, key) {
    if (!visibleStates.length) return null;
    return visibleStates.reduce((best, candidate) =>
      candidate.scores[key] > best.scores[key] ? candidate : best
    );
  }

  function getConfidenceText(value) {
    if (value >= 0.8) return "High confidence";
    if (value >= 0.7) return "Moderate confidence";
    return "Early confidence";
  }

  function populateFilters() {
    const topics = [...new Set(getAllDocuments().map((document) => document.topic))].sort();
    const types = [...new Set(getAllDocuments().map((document) => document.type))].sort();

    filterState.innerHTML = `
      <option value="all">All states</option>
      ${states.map((state) => `<option value="${state.id}">${state.name}</option>`).join("")}
    `;

    filterTopic.innerHTML = `
      <option value="all">All topics</option>
      ${topics.map((topic) => `<option value="${topic}">${topic}</option>`).join("")}
    `;

    filterType.innerHTML = `
      <option value="all">All source types</option>
      ${types.map((type) => `<option value="${type}">${type}</option>`).join("")}
    `;
  }

  function renderAmendmentBrief() {
    amendmentBrief.innerHTML = `
      <article class="amendment-card">
        <div class="mini-label">Overall explanation</div>
        <strong>${data.scope.amendment}</strong>
        <p>${data.scope.amendmentBrief.summary}</p>
      </article>
      <article class="amendment-card">
        <div class="mini-label">How it affects the average person</div>
        <strong>Everyday impact</strong>
        <p>${data.scope.amendmentBrief.averagePerson}</p>
      </article>
      <article class="amendment-card">
        <div class="mini-label">Why it exists</div>
        <strong>History and importance</strong>
        <p>${data.scope.amendmentBrief.history}</p>
      </article>
    `;

    amendmentParts.innerHTML = data.scope.amendmentParts.map((part) => `
      <article class="amendment-card">
        <h3>${part.title}</h3>
        <p>${part.summary}</p>
      </article>
    `).join("");
  }

  function renderSummary() {
    const visibleStates = getVisibleStates();
    const seedDate = formatDate(data.scope.seededAt);
    const topChallenge = strongestState(visibleStates, "challengeRisk");
    const topExpansion = strongestState(visibleStates, "expansionMomentum");
    const visibleDocuments = visibleStates.flatMap((state) => getFilteredDocuments(state));

    const metrics = [
      {
        label: "Highest challenge risk",
        value: topChallenge ? topChallenge.name : "No match",
        subValue: topChallenge ? `${topChallenge.scores.challengeRisk}/100` : "Adjust filters"
      },
      {
        label: "Average restriction pressure",
        value: `${averageScore(visibleStates, "restrictionPressure")}/100`,
        subValue: `${visibleStates.length} states in current filtered view`
      },
      {
        label: "Strongest expansion momentum",
        value: topExpansion ? topExpansion.name : "No match",
        subValue: topExpansion ? `${topExpansion.scores.expansionMomentum}/100` : "Adjust filters"
      },
      {
        label: "Seed dataset updated",
        value: seedDate,
        subValue: `${visibleDocuments.length} visible source records. ${data.scope.note}`
      }
    ];

    summaryMetrics.innerHTML = metrics.map((metric) => `
      <article class="metric-card">
        <div class="metric-label">${metric.label}</div>
        <div class="metric-value">${metric.value}</div>
        <div class="mini-label">${metric.subValue}</div>
      </article>
    `).join("");
  }

  function renderFilterSummary() {
    const visibleStates = getVisibleStates();
    const visibleDocuments = visibleStates.flatMap((state) => getFilteredDocuments(state));

    filterSummary.innerHTML = visibleDocuments.length
      ? `Showing <strong>${visibleDocuments.length}</strong> source records across <strong>${visibleStates.length}</strong> states. Filters now emphasize ${filters.topic === "all" ? "all tracked topics" : `<strong>${filters.topic}</strong>`}, ${filters.type === "all" ? "all source types" : `<strong>${filters.type}</strong>`}, and ${filters.direction === "all" ? "all directional outcomes" : `<strong>${capitalize(filters.direction)}</strong>`}.`
      : "No records match the current filter combination. Try widening the topic, source type, or direction filters.";
  }

  function renderRanking() {
    const visibleStates = [...getVisibleStates()].sort(
      (left, right) => right.scores[currentSort] - left.scores[currentSort]
    );

    if (!visibleStates.length) {
      stateRanking.innerHTML = '<div class="empty-results">No states match the current filters.</div>';
      return;
    }

    stateRanking.innerHTML = visibleStates.map((state) => {
      const level = classifyLevel(state.scores[currentSort]);
      const filteredDocuments = getFilteredDocuments(state);
      return `
        <article class="state-card ${state.id === selectedStateId ? "active" : ""}" data-state-id="${state.id}">
          <div class="state-card-header">
            <h3>${state.name}</h3>
            <span class="pill ${level}">${scoreLabels[currentSort]}: ${state.scores[currentSort]}</span>
          </div>
          <p>${state.summary}</p>
          <div class="document-meta">
            <span class="meta-tag">${filteredDocuments.length} matching source records</span>
            <span class="meta-tag">${state.geography.hotspotCounty}</span>
            <span class="meta-tag">${getConfidenceText(state.confidence)}</span>
          </div>
          <div class="meter-group">
            ${Object.entries(scoreLabels).map(([key, label]) => `
              <div class="meter-row">
                <span>${label}</span>
                <div class="meter"><span style="width: ${state.scores[key]}%"></span></div>
                <strong>${state.scores[key]}</strong>
              </div>
            `).join("")}
          </div>
        </article>
      `;
    }).join("");

    document.querySelectorAll(".state-card").forEach((card) => {
      card.addEventListener("click", () => {
        selectedStateId = card.dataset.stateId;
        renderRanking();
        renderStateDetail();
      });
    });
  }

  function renderStateDetail() {
    const visibleStates = getVisibleStates();

    if (!visibleStates.length) {
      stateTitle.textContent = "No matching state";
      stateBadge.textContent = "Adjust filters";
      stateOverview.className = "state-overview empty-state";
      stateOverview.textContent = "No state matches the current filters.";
      stateHealth.innerHTML = "";
      locationAnswer.innerHTML = '<div class="empty-results">No geography answer available.</div>';
      estimateCards.innerHTML = '<div class="empty-results">No estimate data available.</div>';
      scoreBreakdown.innerHTML = '<div class="empty-results">No statistics available.</div>';
      topicBreakdown.innerHTML = '<div class="empty-results">No amendment-part data available.</div>';
      newsList.innerHTML = '<div class="empty-results">No correlated news items available.</div>';
      documentList.innerHTML = '<div class="empty-results">No source documents match the active filters.</div>';
      return;
    }

    const visibleStateIds = new Set(visibleStates.map((state) => state.id));
    if (!visibleStateIds.has(selectedStateId)) {
      selectedStateId = visibleStates[0].id;
    }

    const state = states.find((item) => item.id === selectedStateId);
    const filteredDocuments = getFilteredDocuments(state).sort(
      (left, right) => new Date(right.date) - new Date(left.date)
    );
    const strongestScore = Object.entries(state.scores).sort((a, b) => b[1] - a[1])[0];
    const amendmentPartsInPlay = [...new Set(filteredDocuments.map((document) => document.amendmentPart))];
    const averageWeight = filteredDocuments.length
      ? Math.round(filteredDocuments.reduce((sum, document) => sum + document.weight, 0) / filteredDocuments.length)
      : 0;

    stateTitle.textContent = state.name;
    stateBadge.textContent = `${scoreLabels[strongestScore[0]]} lead`;

    stateOverview.className = "state-overview";
    stateOverview.innerHTML = `
      <div class="overview-copy">${state.summary}</div>
      <div class="document-meta">
        ${state.dominantTopics.map((topic) => `<span class="meta-tag">${topic}</span>`).join("")}
      </div>
      <p class="overview-copy">${state.monitoringNote}</p>
    `;

    stateHealth.innerHTML = `
      <article class="health-card">
        <div class="mini-label">Visible records</div>
        <strong>${filteredDocuments.length}</strong>
      </article>
      <article class="health-card">
        <div class="mini-label">Confidence</div>
        <strong>${Math.round(state.confidence * 100)}%</strong>
        <div class="mini-label">${getConfidenceText(state.confidence)}</div>
      </article>
      <article class="health-card">
        <div class="mini-label">Average source weight</div>
        <strong>${averageWeight}</strong>
      </article>
    `;

    locationAnswer.innerHTML = `
      <article class="answer-card">
        <div class="mini-label">What state?</div>
        <strong>${state.name}</strong>
        <p>The current decision-support view is centered on ${state.name}.</p>
      </article>
      <article class="answer-card">
        <div class="mini-label">What amendment?</div>
        <strong>${data.scope.amendment}</strong>
        <p>This prototype is focused specifically on the 14th Amendment and how state action affects equality, process, and citizenship-related protections.</p>
      </article>
      <article class="answer-card">
        <div class="mini-label">County or district hotspot</div>
        <strong>${state.geography.hotspotCounty}</strong>
        <p>${state.geography.hotspotDistrict}</p>
      </article>
    `;

    estimateCards.innerHTML = [
      { label: "Limited", value: state.estimates.limited, text: "Estimated risk that protections are narrowed, weakened, or placed under real pressure." },
      { label: "Expanded", value: state.estimates.expanded, text: "Estimated likelihood that protections are broadened, clarified, or spread to more people." },
      { label: "Challenged", value: state.estimates.challenged, text: "Estimated likelihood that the amendment's meaning is actively contested or reinterpreted." }
    ].map((estimate) => `
      <article class="answer-card">
        <div class="mini-label">${estimate.label}</div>
        <div class="score-value">${estimate.value}%</div>
        <p>${estimate.text}</p>
      </article>
    `).join("");

    scoreBreakdown.innerHTML = state.stats.map((stat) => `
      <div class="score-row">
        <div class="score-header">
          <strong>${stat.label}</strong>
          <span class="pill ${classifyLevel(averageWeight)}">seeded</span>
        </div>
        <div class="document-meta">
          <span class="meta-tag">${stat.thenLabel}: ${stat.thenValue}</span>
          <span class="meta-tag">${stat.nowLabel}: ${stat.nowValue}</span>
        </div>
        <p>${stat.note}</p>
      </div>
    `).join("");

    topicBreakdown.innerHTML = amendmentPartsInPlay.length
      ? amendmentPartsInPlay.map((part) => `
          <div class="topic-chip">
            <strong>${part}</strong>
            <p>This is one of the 14th Amendment components currently implicated by the selected state's visible source records.</p>
          </div>
        `).join("")
      : `<div class="empty-results">No amendment-part data matches the active filters for ${state.name}.</div>`;

    newsList.innerHTML = state.news.map((item) => `
      <article class="document-card">
        <div class="document-header">
          <h3>${item.headline}</h3>
          <span class="pill medium">News angle</span>
        </div>
        <p>${item.angle}</p>
        <p><strong>Why it correlates:</strong> ${item.relevance}</p>
      </article>
    `).join("");

    documentList.innerHTML = filteredDocuments.length
      ? filteredDocuments.map((document) => `
          <article class="document-card">
            <div class="document-header">
              <h3>${document.title}</h3>
              <span class="pill ${classifyLevel(document.weight)}">${document.weight}</span>
            </div>
            <div class="document-meta">
              <span class="meta-tag">${document.type}</span>
              <span class="meta-tag">${document.status}</span>
              <span class="meta-tag">${document.topic}</span>
              <span class="meta-tag">${document.amendmentPart}</span>
              <span class="meta-tag">${document.region}</span>
              <span class="meta-tag">${capitalize(document.direction)}</span>
              <span class="meta-tag">${formatDate(document.date)}</span>
            </div>
            <p>${document.explanation}</p>
            <a href="${document.url}" target="_blank" rel="noreferrer">View source: ${document.sourceName}</a>
          </article>
        `).join("")
      : `<div class="empty-results">No source documents match the active filters for ${state.name}.</div>`;
  }

  function syncFilters() {
    filters.state = filterState.value;
    filters.topic = filterTopic.value;
    filters.type = filterType.value;
    filters.direction = filterDirection.value;
    renderAll();
  }

  function renderAll() {
    renderAmendmentBrief();
    renderSummary();
    renderFilterSummary();
    renderRanking();
    renderStateDetail();
  }

  populateFilters();

  sortSelect.addEventListener("change", (event) => {
    currentSort = event.target.value;
    renderRanking();
    renderStateDetail();
  });

  [filterState, filterTopic, filterType, filterDirection].forEach((input) => {
    input.addEventListener("change", syncFilters);
  });

  document.getElementById("jump-to-ranking").addEventListener("click", () => {
    document.getElementById("ranking-panel").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("jump-to-method").addEventListener("click", () => {
    document.getElementById("methodology").scrollIntoView({ behavior: "smooth" });
  });

  renderAll();
})();
