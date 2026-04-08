window.monitorData = {
  scope: {
    amendment: "14th Amendment",
    states: ["California", "Texas", "New York", "Minnesota", "Pennsylvania"]
  },
  states: [
    {
      id: "tx",
      name: "Texas",
      summary: "Equal protection and due process disputes are appearing across both litigation and active legislative proposals, creating the strongest challenge environment in this MVP.",
      scores: {
        challengeRisk: 88,
        restrictionPressure: 81,
        expansionMomentum: 34
      },
      dominantTopics: ["Equal Protection", "Procedural Due Process"],
      documents: [
        {
          title: "Appellate ruling scrutinizes student discipline process",
          type: "Court Ruling",
          status: "Appellate opinion",
          topic: "Procedural Due Process",
          direction: "challenged",
          date: "2026-03-12",
          weight: 82,
          explanation: "The ruling leaves core procedural questions unresolved and signals continued litigation over notice and hearing sufficiency in state-run institutions.",
          url: "#"
        },
        {
          title: "State bill proposes expanded enforcement standards affecting public benefits eligibility",
          type: "Legislation",
          status: "In committee",
          topic: "Equal Protection",
          direction: "limited",
          date: "2026-03-28",
          weight: 77,
          explanation: "The bill’s structure raises equal protection challenge potential by altering how similarly situated residents are treated in access decisions.",
          url: "#"
        },
        {
          title: "Federal district court challenge to administrative removal procedures proceeds",
          type: "Court Ruling",
          status: "District court order",
          topic: "Substantive Due Process",
          direction: "challenged",
          date: "2026-02-18",
          weight: 65,
          explanation: "The court allowed a constitutional claim to move forward, increasing short-term uncertainty around state process safeguards.",
          url: "#"
        }
      ]
    },
    {
      id: "ca",
      name: "California",
      summary: "California shows the strongest expansion momentum, with several developments reinforcing process protections while still producing targeted challenge activity.",
      scores: {
        challengeRisk: 63,
        restrictionPressure: 41,
        expansionMomentum: 79
      },
      dominantTopics: ["Procedural Due Process", "Equal Protection"],
      documents: [
        {
          title: "State supreme court opinion strengthens hearing protections in licensing disputes",
          type: "Court Ruling",
          status: "State supreme court opinion",
          topic: "Procedural Due Process",
          direction: "expanded",
          date: "2026-03-21",
          weight: 84,
          explanation: "The court reinforced notice and hearing standards in a way that broadens procedural due process protections for regulated parties.",
          url: "#"
        },
        {
          title: "Civil rights measure expands review obligations for automated public-sector decisions",
          type: "Legislation",
          status: "Passed lower chamber",
          topic: "Equal Protection",
          direction: "expanded",
          date: "2026-03-04",
          weight: 68,
          explanation: "The measure increases scrutiny around state decisions that may produce unequal treatment, boosting expansion momentum.",
          url: "#"
        },
        {
          title: "Challenge filed over disparate treatment in public housing administration",
          type: "Court Ruling",
          status: "Complaint filed",
          topic: "Equal Protection",
          direction: "challenged",
          date: "2026-02-26",
          weight: 52,
          explanation: "The case does not resolve doctrine yet, but it raises the volume of current equal protection contest activity in the state.",
          url: "#"
        }
      ]
    },
    {
      id: "ny",
      name: "New York",
      summary: "New York is balanced but active, with steady constitutional litigation and a moderate push toward expansion in administrative and civil rights contexts.",
      scores: {
        challengeRisk: 71,
        restrictionPressure: 46,
        expansionMomentum: 66
      },
      dominantTopics: ["Equal Protection", "Substantive Due Process"],
      documents: [
        {
          title: "Appellate panel revives equal protection claim involving municipal enforcement",
          type: "Court Ruling",
          status: "Appellate opinion",
          topic: "Equal Protection",
          direction: "expanded",
          date: "2026-03-15",
          weight: 72,
          explanation: "By reviving the claim, the court increased the practical viability of equal protection litigation in this enforcement setting.",
          url: "#"
        },
        {
          title: "Proposed education rule faces constitutional challenge over differential treatment",
          type: "Legislation",
          status: "Introduced",
          topic: "Equal Protection",
          direction: "challenged",
          date: "2026-03-27",
          weight: 61,
          explanation: "The proposal triggered immediate constitutional objections, raising challenge risk even before enactment.",
          url: "#"
        },
        {
          title: "District court narrows substantive due process theory in local governance dispute",
          type: "Court Ruling",
          status: "District court opinion",
          topic: "Substantive Due Process",
          direction: "limited",
          date: "2026-01-30",
          weight: 58,
          explanation: "The opinion constrains one pathway for plaintiffs and modestly increases restriction pressure.",
          url: "#"
        }
      ]
    },
    {
      id: "mn",
      name: "Minnesota",
      summary: "Minnesota shows moderate challenge pressure with a notable lean toward procedural due process disputes and a smaller but growing expansion trend.",
      scores: {
        challengeRisk: 67,
        restrictionPressure: 39,
        expansionMomentum: 58
      },
      dominantTopics: ["Procedural Due Process", "Equal Protection"],
      documents: [
        {
          title: "State administrative appeals ruling increases procedural review requirements",
          type: "Court Ruling",
          status: "State appellate opinion",
          topic: "Procedural Due Process",
          direction: "expanded",
          date: "2026-03-08",
          weight: 69,
          explanation: "The opinion improves access to review before adverse administrative action takes effect.",
          url: "#"
        },
        {
          title: "Public benefits bill raises classification questions under equal protection doctrine",
          type: "Legislation",
          status: "Committee hearing scheduled",
          topic: "Equal Protection",
          direction: "challenged",
          date: "2026-03-20",
          weight: 59,
          explanation: "The bill’s classification approach is already drawing constitutional attention, pushing challenge signals upward.",
          url: "#"
        },
        {
          title: "Trial court upholds stricter eligibility standard against due process challenge",
          type: "Court Ruling",
          status: "Trial court opinion",
          topic: "Procedural Due Process",
          direction: "limited",
          date: "2026-02-03",
          weight: 49,
          explanation: "The ruling modestly favors state discretion and adds to restriction pressure, though at a lower authority level.",
          url: "#"
        }
      ]
    },
    {
      id: "pa",
      name: "Pennsylvania",
      summary: "Pennsylvania is currently the least pressured of the five, though recent filings suggest a slow increase in challenge activity worth monitoring.",
      scores: {
        challengeRisk: 54,
        restrictionPressure: 36,
        expansionMomentum: 49
      },
      dominantTopics: ["Equal Protection", "Procedural Due Process"],
      documents: [
        {
          title: "State court challenge questions unequal access in local election administration",
          type: "Court Ruling",
          status: "Petition filed",
          topic: "Equal Protection",
          direction: "challenged",
          date: "2026-03-11",
          weight: 55,
          explanation: "The filing raises a visible equal protection issue without yet creating a higher-authority doctrinal shift.",
          url: "#"
        },
        {
          title: "Legislative proposal creates additional review rights in agency enforcement cases",
          type: "Legislation",
          status: "Introduced",
          topic: "Procedural Due Process",
          direction: "expanded",
          date: "2026-02-22",
          weight: 51,
          explanation: "If enacted, the proposal would improve process protections, contributing modest expansion momentum.",
          url: "#"
        },
        {
          title: "Federal court dismisses broad substantive due process claim without prejudice",
          type: "Court Ruling",
          status: "District court opinion",
          topic: "Substantive Due Process",
          direction: "limited",
          date: "2026-01-18",
          weight: 44,
          explanation: "The court limited the claim in its current form, but the posture leaves room for further litigation.",
          url: "#"
        }
      ]
    }
  ]
};
