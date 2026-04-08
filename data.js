window.monitorData = {
  scope: {
    amendment: "14th Amendment",
    states: ["California", "Texas", "New York", "Minnesota", "Pennsylvania"],
    seededAt: "2026-04-08",
    note: "Direction labels and state scores are interpretive seed judgments based on the linked source materials."
  },
  states: [
    {
      id: "ny",
      name: "New York",
      summary: "New York currently shows the strongest expansion momentum in this seed set, driven by a broad equal-protection amendment and early litigation over how far those new protections reach.",
      confidence: 0.78,
      monitoringNote: "Watch how New York courts interpret the scope of the ERA in age and employment-related disputes.",
      scores: {
        challengeRisk: 76,
        restrictionPressure: 29,
        expansionMomentum: 84
      },
      dominantTopics: ["Equal Protection", "Age Discrimination", "State Constitutional Rights"],
      documents: [
        {
          title: "Senate Bill S108A",
          type: "Legislation",
          status: "Passed Senate and delivered to secretary of state",
          topic: "Equal Protection",
          direction: "expanded",
          date: "2023-08-04",
          weight: 88,
          sourceName: "New York State Senate",
          explanation: "This constitutional amendment broadens New York's equal-protection language to cover age, disability, ethnicity, national origin, sex, pregnancy, reproductive healthcare autonomy, sexual orientation, gender identity, and gender expression.",
          url: "https://www.nysenate.gov/legislation/bills/2023/S108"
        },
        {
          title: "Saltarelli v. State of New York",
          type: "Court Ruling",
          status: "Supreme Court, Madison County opinion",
          topic: "Equal Protection",
          direction: "challenged",
          date: "2026-01-02",
          weight: 79,
          sourceName: "New York Official Reports via Justia",
          explanation: "The court treated age as a suspect class under the new ERA and struck down a judicial retirement rule as applied to certain city court judges, showing both expansion pressure and active litigation over the amendment's reach.",
          url: "https://law.justia.com/cases/new-york/other-courts/2026/2026-ny-slip-op-26005.html"
        }
      ]
    },
    {
      id: "ca",
      name: "California",
      summary: "California's seed profile leans strongly toward expansion because the state has recently embedded reproductive freedom into its constitution, though older education-litigation precedent still tempers the picture.",
      confidence: 0.73,
      monitoringNote: "California's expansion case is strong, but it needs more recent equal-protection disputes to support higher confidence.",
      scores: {
        challengeRisk: 58,
        restrictionPressure: 37,
        expansionMomentum: 82
      },
      dominantTopics: ["Reproductive Freedom", "Equal Protection", "Education"],
      documents: [
        {
          title: "SCA 10 Reproductive Freedom",
          type: "Legislation",
          status: "Chaptered and filed with Secretary of State",
          topic: "Substantive Due Process",
          direction: "expanded",
          date: "2022-06-29",
          weight: 86,
          sourceName: "California Legislative Information",
          explanation: "California added explicit reproductive-freedom language to its constitution and tied that provision to existing privacy and equal-protection guarantees, pushing the state's 14th-Amendment-adjacent protections in an expansive direction.",
          url: "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202120220SCA10"
        },
        {
          title: "Vergara v. State of California",
          type: "Court Ruling",
          status: "California Court of Appeal summary",
          topic: "Equal Protection",
          direction: "limited",
          date: "2016-04-14",
          weight: 61,
          sourceName: "Justia California Court of Appeal summaries",
          explanation: "The appellate court reversed a lower-court equal-protection win for students, concluding the challenged statutes themselves were not shown to cause unequal educational outcomes. That makes this a useful limiting counterweight in the California seed data.",
          url: "https://californiacourtofappealopinions.justia.com/2016/04/14/vergara-v-state-of-california/"
        }
      ]
    },
    {
      id: "mn",
      name: "Minnesota",
      summary: "Minnesota shows a mix of expansion pressure and active challenge activity, with an equal-rights amendment proposal on one side and fresh equal-protection litigation on the other.",
      confidence: 0.7,
      monitoringNote: "Minnesota is a good state to monitor for early movement because legislative expansion and constitutional challenge signals are arriving at the same time.",
      scores: {
        challengeRisk: 72,
        restrictionPressure: 26,
        expansionMomentum: 69
      },
      dominantTopics: ["Equal Protection", "Immigrants' Rights", "State Constitutional Amendment"],
      documents: [
        {
          title: "SF 473 Equal Rights Amendment Proposal",
          type: "Legislation",
          status: "Passed committee and re-referred to Rules and Administration",
          topic: "Equal Protection",
          direction: "expanded",
          date: "2026-02-26",
          weight: 75,
          sourceName: "Minnesota Legislature / Revisor",
          explanation: "This proposal would add explicit equality guarantees and anti-discrimination language to the Minnesota Constitution, increasing expansion momentum in the state's 14th-Amendment-adjacent rights landscape.",
          url: "https://www.revisor.mn.gov/bills/94/2025/0/SF/473/"
        },
        {
          title: "Hussen v. Noem et al.",
          type: "Court Filing",
          status: "Class action filed",
          topic: "Equal Protection",
          direction: "challenged",
          date: "2026-01-15",
          weight: 73,
          sourceName: "ACLU of Minnesota",
          explanation: "The complaint alleges racial profiling, unlawful seizures, and equal-protection violations against Minnesotans, making Minnesota one of the more active challenge environments in the current seed set.",
          url: "https://www.aclu-mn.org/cases/hussen-v-noem/"
        }
      ]
    },
    {
      id: "pa",
      name: "Pennsylvania",
      summary: "Pennsylvania sits in the middle of the pack, with a recent equal-protection firearms decision and a pending sex-equality amendment creating moderate challenge and expansion signals.",
      confidence: 0.68,
      monitoringNote: "Pennsylvania's score is more tentative because the current seed set is smaller and split between judicial and legislative signals.",
      scores: {
        challengeRisk: 64,
        restrictionPressure: 34,
        expansionMomentum: 57
      },
      dominantTopics: ["Equal Protection", "Sex Equality", "Firearms Incorporation"],
      documents: [
        {
          title: "Commonwealth v. Sumpter",
          type: "Court Ruling",
          status: "Pennsylvania Superior Court opinion",
          topic: "Equal Protection",
          direction: "expanded",
          date: "2025-06-23",
          weight: 78,
          sourceName: "Justia Pennsylvania case law",
          explanation: "The court held Philadelphia's licensing rule unconstitutional as applied under the Equal Protection Clause of the Fourteenth Amendment, making this one of the stronger expansion-oriented judicial signals in Pennsylvania.",
          url: "https://law.justia.com/cases/pennsylvania/superior-court/2025/2271-eda-2023.html"
        },
        {
          title: "Senate Bill 388",
          type: "Legislation",
          status: "Referred to State Government Committee",
          topic: "Equal Protection",
          direction: "challenged",
          date: "2025-03-06",
          weight: 56,
          sourceName: "Pennsylvania General Assembly",
          explanation: "This joint resolution would amend the Pennsylvania Constitution to strengthen sex-equality language. Because it has only been referred to committee, it currently functions more as a signal of active constitutional contest and potential expansion than as settled law.",
          url: "https://www.legis.state.pa.us/cfdocs/billinfo/bill_history.cfm?bn=388&body=S&sind=0&syear=2025&type=B"
        }
      ]
    },
    {
      id: "tx",
      name: "Texas",
      summary: "Texas remains the highest-pressure state in the current seed set because a major equal-protection precedent coexists with recent legislation that could trigger new constitutional disputes over state treatment and classification rules.",
      confidence: 0.81,
      monitoringNote: "Texas leads on challenge risk because its recent legislative signal points toward fresh equal-protection contests on top of a major historic precedent.",
      scores: {
        challengeRisk: 86,
        restrictionPressure: 73,
        expansionMomentum: 43
      },
      dominantTopics: ["Equal Protection", "Education Access", "Government Classification"],
      documents: [
        {
          title: "Plyler v. Doe",
          type: "Court Ruling",
          status: "U.S. Supreme Court decision",
          topic: "Equal Protection",
          direction: "expanded",
          date: "1982-06-15",
          weight: 82,
          sourceName: "Legal Information Institute",
          explanation: "The Supreme Court invalidated a Texas law that denied public-education funding and access to undocumented schoolchildren, making this a foundational 14th Amendment expansion signal tied directly to Texas.",
          url: "https://www.law.cornell.edu/wex/plyler_v._doe"
        },
        {
          title: "HB 5135 Texas Antidiscrimination Act",
          type: "Legislation",
          status: "Introduced and referred to State Affairs",
          topic: "Equal Protection",
          direction: "challenged",
          date: "2025-04-07",
          weight: 77,
          sourceName: "Texas Legislature Online",
          explanation: "The bill frames itself as an antidiscrimination measure, but its restrictions on diversity and government decisionmaking are likely to generate substantial equal-protection disputes, keeping Texas at the top of the challenge-risk ranking.",
          url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/HB05135I.htm"
        }
      ]
    }
  ]
};
