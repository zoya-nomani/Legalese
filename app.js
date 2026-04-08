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
  const scoreBreakdown = document.getElementById("score-breakdown");
  const topicBreakdown = document.getElementById("topic-breakdown");
  const documentList = document.getElementById("document-list");
  const sortSelect = document.getElementById("sort-select");

  let selectedStateId = states[0].id;
  let currentSort = sortSelect.value;

  function classifyLevel(score) {
    if (score >= 75) return "high";
    if (score >= 50) return "medium";
    return "low";
  }

  function averageScore(key) {
    const total = states.reduce((sum, state) => sum + state.scores[key], 0);
    return Math.round(total / states.length);
  }

  function strongestState(key) {
    return states.reduce((best, candidate) =>
      candidate.scores[key] > best.scores[key] ? candidate : best
    );
  }

  function renderSummary() {
    const seedDate = formatDate(data.scope.seededAt);
    const metrics = [
      {
        label: "Highest challenge risk",
        value: strongestState("challengeRisk").name,
        subValue: strongestState("challengeRisk").scores.challengeRisk + "/100"
      },
      {
        label: "Average restriction pressure",
        value: averageScore("restrictionPressure") + "/100",
        subValue: "Across five tracked states"
      },
      {
        label: "Strongest expansion momentum",
        value: strongestState("expansionMomentum").name,
        subValue: strongestState("expansionMomentum").scores.expansionMomentum + "/100"
      },
      {
        label: "Seed dataset updated",
        value: seedDate,
        subValue: data.scope.note
      }
    ];

    summaryMetrics.innerHTML = metrics
      .map(
        (metric) => `
          <article class="metric-card">
            <div class="metric-label">${metric.label}</div>
            <div class="metric-value">${metric.value}</div>
            <div class="mini-label">${metric.subValue}</div>
          </article>
        `
      )
      .join("");
  }

  function renderRanking() {
    const sortedStates = [...states].sort(
      (left, right) => right.scores[currentSort] - left.scores[currentSort]
    );

    stateRanking.innerHTML = sortedStates
      .map((state) => {
        const level = classifyLevel(state.scores[currentSort]);
        return `
          <article class="state-card ${state.id === selectedStateId ? "active" : ""}" data-state-id="${state.id}">
            <div class="state-card-header">
              <h3>${state.name}</h3>
              <span class="pill ${level}">${scoreLabels[currentSort]}: ${state.scores[currentSort]}</span>
            </div>
            <p>${state.summary}</p>
            <div class="meter-group">
              ${Object.entries(scoreLabels)
                .map(
                  ([key, label]) => `
                    <div class="meter-row">
                      <span>${label}</span>
                      <div class="meter"><span style="width: ${state.scores[key]}%"></span></div>
                      <strong>${state.scores[key]}</strong>
                    </div>
                  `
                )
                .join("")}
            </div>
          </article>
        `;
      })
      .join("");

    document.querySelectorAll(".state-card").forEach((card) => {
      card.addEventListener("click", () => {
        selectedStateId = card.dataset.stateId;
        renderRanking();
        renderStateDetail();
      });
    });
  }

  function renderStateDetail() {
    const state = states.find((item) => item.id === selectedStateId);
    const strongestScore = Object.entries(state.scores).sort((a, b) => b[1] - a[1])[0];

    stateTitle.textContent = state.name;
    stateBadge.textContent = `${scoreLabels[strongestScore[0]]} lead`;
    stateOverview.className = "state-overview";
    stateOverview.innerHTML = `
      <div class="overview-copy">${state.summary}</div>
      <div class="document-meta">
        ${state.dominantTopics.map((topic) => `<span class="meta-tag">${topic}</span>`).join("")}
      </div>
    `;

    scoreBreakdown.className = "score-stack";
    scoreBreakdown.innerHTML = Object.entries(scoreLabels)
      .map(
        ([key, label]) => `
          <div class="score-row">
            <div class="score-header">
              <strong>${label}</strong>
              <span class="pill ${classifyLevel(state.scores[key])}">${classifyLevel(state.scores[key])}</span>
            </div>
            <div class="score-value">${state.scores[key]}</div>
            <p>${describeScore(key, state.scores[key])}</p>
          </div>
        `
      )
      .join("");

    const topicCounts = state.documents.reduce((accumulator, document) => {
      accumulator[document.topic] = (accumulator[document.topic] || 0) + 1;
      return accumulator;
    }, {});

    topicBreakdown.className = "topic-stack";
    topicBreakdown.innerHTML = Object.entries(topicCounts)
      .sort((left, right) => right[1] - left[1])
      .map(
        ([topic, count]) => `
          <div class="topic-chip">
            <strong>${topic}</strong>
            <p>${count} active source ${count === 1 ? "document" : "documents"} in the current MVP window.</p>
          </div>
        `
      )
      .join("");

    documentList.innerHTML = state.documents
      .sort((left, right) => new Date(right.date) - new Date(left.date))
      .map(
        (document) => `
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
        `
      )
      .join("");
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

  sortSelect.addEventListener("change", (event) => {
    currentSort = event.target.value;
    renderRanking();
  });

  document.getElementById("jump-to-ranking").addEventListener("click", () => {
    document.getElementById("ranking-panel").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("jump-to-method").addEventListener("click", () => {
    document.getElementById("methodology").scrollIntoView({ behavior: "smooth" });
  });

  renderSummary();
  renderRanking();
  renderStateDetail();
})();

