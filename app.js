(function () {
  const data = window.monitorData;
  const states = [...data.states];
  const scoreLabels = {
    challengeRisk: "Challenge Risk",
    restrictionPressure: "Restriction Pressure",
    expansionMomentum: "Expansion Momentum"
  };

  const summaryMetrics = document.getElementById("summary-metrics");
  const stateRanking = document.getElementById("state-ranking");
  const stateTitle = document.getElementById("state-title");
  const stateBadge = document.getElementById("state-badge");
  const stateOverview = document.getElementById("state-overview");
  const stateHealth = document.getElementById("state-health");
  const scoreBreakdown = document.getElementById("score-breakdown");
  const topicBreakdown = document.getElementById("topic-breakdown");
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

  function describeScore(key, value) {
    if (key === "challengeRisk") {
      return value >= 75
        ? "High volume of unresolved constitutional disputes and active pressure points."
        : value >= 50
          ? "Noticeable constitutional contest activity with several signals worth monitoring."
          : "Limited near-term challenge activity compared with the other tracked states.";
    }

    if (key === "restrictionPressure") {
      return value >= 75
        ? "Recent cases or bills show a strong tendency to narrow protections or support stricter state discretion."
        : value >= 50
          ? "Some developments lean restrictive, but the trend is not dominant."
          : "Restriction-oriented signals are present but comparatively weak in the current dataset.";
    }

    return value >= 75
      ? "Recent developments show strong momentum toward broader 14th Amendment protections."
      : value >= 50
        ? "Several developments support incremental protection growth."
        : "Expansion activity exists, but it is not the main statewide trend right now.";
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
      scoreBreakdown.innerHTML = '<div class="empty-results">No score breakdown available.</div>';
      topicBreakdown.innerHTML = '<div class="empty-results">No topic data available.</div>';
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

    stateTitle.textContent = state.name;
    const strongestScore = Object.entries(state.scores).sort((a, b) => b[1] - a[1])[0];
    stateBadge.textContent = `${scoreLabels[strongestScore[0]]} lead`;

    stateOverview.className = "state-overview";
    stateOverview.innerHTML = `
      <div class="overview-copy">${state.summary}</div>
      <div class="document-meta">
        ${state.dominantTopics.map((topic) => `<span class="meta-tag">${topic}</span>`).join("")}
      </div>
      <p class="overview-copy">${state.monitoringNote}</p>
    `;

    const averageWeight = filteredDocuments.length
      ? Math.round(filteredDocuments.reduce((sum, document) => sum + document.weight, 0) / filteredDocuments.length)
      : 0;

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

    scoreBreakdown.innerHTML = Object.entries(scoreLabels).map(([key, label]) => `
      <div class="score-row">
        <div class="score-header">
          <strong>${label}</strong>
          <span class="pill ${classifyLevel(state.scores[key])}">${classifyLevel(state.scores[key])}</span>
        </div>
        <div class="score-value">${state.scores[key]}</div>
        <p>${describeScore(key, state.scores[key])}</p>
      </div>
    `).join("");

    const topicCounts = filteredDocuments.reduce((accumulator, document) => {
      accumulator[document.topic] = (accumulator[document.topic] || 0) + 1;
      return accumulator;
    }, {});

    topicBreakdown.innerHTML = Object.keys(topicCounts).length
      ? Object.entries(topicCounts)
          .sort((left, right) => right[1] - left[1])
          .map(([topic, count]) => `
            <div class="topic-chip">
              <strong>${topic}</strong>
              <p>${count} matching ${count === 1 ? "record" : "records"} in the current filtered view.</p>
            </div>
          `)
          .join("")
      : `<div class="empty-results">No topic data matches the active filters for ${state.name}.</div>`;

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
