window.monitorData = {
  scope: {
    amendment: "14th Amendment",
    states: ["California", "Texas", "New York", "Minnesota", "Pennsylvania"],
    seededAt: "2026-04-08",
    note: "Direction labels, estimates, and trend statistics are interpretive seed judgments based on the linked source materials and are not legal advice.",
    amendmentBrief: {
      summary: "The 14th Amendment is one of the most important constitutional protections in everyday life because it limits what states can do to people without equal treatment, fair procedures, and recognized citizenship.",
      averagePerson: "For the average person, the 14th Amendment matters when a state government, school system, police agency, licensing office, or court treats them unfairly, denies process, or interprets rights differently across groups.",
      history: "Ratified in 1868 after the Civil War, the amendment was designed to secure citizenship and protect formerly enslaved people from discriminatory state action. Over time it became central to civil rights, due process, education access, marriage equality, and many modern constitutional disputes."
    },
    amendmentParts: [
      {
        title: "Citizenship Clause",
        summary: "Defines national and state citizenship, including birthright citizenship."
      },
      {
        title: "Due Process Clause",
        summary: "States cannot deprive people of life, liberty, or property without fair procedures and, in some contexts, without respecting core liberty interests."
      },
      {
        title: "Equal Protection Clause",
        summary: "States must not deny people equal protection of the laws, making this clause central to discrimination and classification disputes."
      },
      {
        title: "Privileges or Immunities / Enforcement",
        summary: "Less frequently litigated today, but historically important to debates over national rights and Congress's power to enforce the amendment."
      }
    ]
  },
  states: [
    {
      id: "ny",
      name: "New York",
      geography: {
        hotspotCounty: "Madison County",
        hotspotDistrict: "New York Supreme Court, Madison County / statewide constitutional amendment coverage"
      },
      summary: "New York currently shows the strongest expansion momentum in this seed set, driven by a broad equal-protection amendment and early litigation over how far those new protections reach.",
      confidence: 0.78,
      monitoringNote: "Watch how New York courts interpret the scope of the ERA in age and employment-related disputes.",
      estimates: {
        limited: 18,
        expanded: 64,
        challenged: 76
      },
      stats: [
        {
          label: "Protected-class coverage in tracked equal-protection text",
          thenLabel: "Before ERA update",
          thenValue: "6 categories",
          nowLabel: "Current seed view",
          nowValue: "10+ categories",
          note: "The amendment text itself now covers more classifications than the older baseline framework."
        },
        {
          label: "High-visibility 14th Amendment source records in current seed",
          thenLabel: "2018 seed-equivalent baseline",
          thenValue: "1 record",
          nowLabel: "2026 seeded dashboard",
          nowValue: "2 records",
          note: "The quantity is still small, but the legal significance is higher because one item is constitutional text and one is direct litigation over its meaning."
        }
      ],
      news: [
        {
          headline: "New York ERA implementation debates could reshape age and equality litigation",
          angle: "As courts test the new amendment language, coverage may focus on retirement rules, employment policies, and how far the expanded equal-rights text reaches.",
          relevance: "This correlates with the state's high challenge and expansion signals because the legal text has changed and courts are now deciding what it means in practice.",
          url: "https://www.nysenate.gov/legislation/bills/2023/S108"
        }
      ],
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
          region: "Statewide",
          amendmentPart: "Equal Protection Clause",
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
          region: "Madison County",
          amendmentPart: "Equal Protection Clause",
          explanation: "The court treated age as a suspect class under the new ERA and struck down a judicial retirement rule as applied to certain city court judges, showing both expansion pressure and active litigation over the amendment's reach.",
          url: "https://law.justia.com/cases/new-york/other-courts/2026/2026-ny-slip-op-26005.html"
        }
      ]
    },
    {
      id: "ca",
      name: "California",
      geography: {
        hotspotCounty: "Los Angeles County",
        hotspotDistrict: "California Court of Appeal / statewide constitutional interpretation"
      },
      summary: "California's seed profile leans strongly toward expansion because the state has recently embedded reproductive freedom into its constitution, though older education-litigation precedent still tempers the picture.",
      confidence: 0.73,
      monitoringNote: "California's expansion case is strong, but it needs more recent equal-protection disputes to support higher confidence.",
      estimates: {
        limited: 31,
        expanded: 71,
        challenged: 58
      },
      stats: [
        {
          label: "Explicit constitutional protection for reproductive autonomy",
          thenLabel: "2010 baseline",
          thenValue: "No explicit text",
          nowLabel: "2026 seeded dashboard",
          nowValue: "Explicitly protected",
          note: "California's constitution now contains direct text strengthening this liberty-related protection."
        },
        {
          label: "Major statewide 14th Amendment signals in seed",
          thenLabel: "Legacy baseline",
          thenValue: "Education equality dispute dominates",
          nowLabel: "Current mix",
          nowValue: "Reproductive liberty + equality",
          note: "The state's modern profile is broader than the older education-centered dispute alone."
        }
      ],
      news: [
        {
          headline: "California reproductive-rights enforcement and education equity disputes remain key constitutional storylines",
          angle: "Coverage may tie state constitutional protections to access, regulation, and how equality arguments evolve in schools and public institutions.",
          relevance: "This correlates with California's high expansion momentum and moderate challenge activity.",
          url: "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202120220SCA10"
        }
      ],
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
          region: "Statewide",
          amendmentPart: "Due Process Clause",
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
          region: "Los Angeles County / statewide impact",
          amendmentPart: "Equal Protection Clause",
          explanation: "The appellate court reversed a lower-court equal-protection win for students, concluding the challenged statutes themselves were not shown to cause unequal educational outcomes. That makes this a useful limiting counterweight in the California seed data.",
          url: "https://californiacourtofappealopinions.justia.com/2016/04/14/vergara-v-state-of-california/"
        }
      ]
    },
    {
      id: "mn",
      name: "Minnesota",
      geography: {
        hotspotCounty: "Hennepin County",
        hotspotDistrict: "District of Minnesota / statewide constitutional amendment activity"
      },
      summary: "Minnesota shows a mix of expansion pressure and active challenge activity, with an equal-rights amendment proposal on one side and fresh equal-protection litigation on the other.",
      confidence: 0.7,
      monitoringNote: "Minnesota is a good state to monitor for early movement because legislative expansion and constitutional challenge signals are arriving at the same time.",
      estimates: {
        limited: 22,
        expanded: 57,
        challenged: 72
      },
      stats: [
        {
          label: "Tracked amendment components actively in play",
          thenLabel: "Older baseline",
          thenValue: "1 primary component",
          nowLabel: "2026 seeded dashboard",
          nowValue: "2 active components",
          note: "Equal-protection litigation and broader equality-amendment efforts are both visible in Minnesota right now."
        },
        {
          label: "Visible challenge pressure in seed records",
          thenLabel: "2019 equivalent view",
          thenValue: "Low",
          nowLabel: "2026 seeded dashboard",
          nowValue: "Moderate to high",
          note: "The federal class action raises the state's challenge profile even without a final merits ruling."
        }
      ],
      news: [
        {
          headline: "Minnesota equality amendment and immigration-enforcement litigation could converge into a larger civil-rights conversation",
          angle: "News coverage may connect discrimination, profiling, and constitutional equality guarantees as the state weighs broader anti-discrimination language.",
          relevance: "This lines up with Minnesota's simultaneous expansion and challenge signals.",
          url: "https://www.aclu-mn.org/cases/hussen-v-noem/"
        }
      ],
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
          region: "Statewide",
          amendmentPart: "Equal Protection Clause",
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
          region: "Hennepin County / District of Minnesota",
          amendmentPart: "Equal Protection Clause",
          explanation: "The complaint alleges racial profiling, unlawful seizures, and equal-protection violations against Minnesotans, making Minnesota one of the more active challenge environments in the current seed set.",
          url: "https://www.aclu-mn.org/cases/hussen-v-noem/"
        }
      ]
    },
    {
      id: "pa",
      name: "Pennsylvania",
      geography: {
        hotspotCounty: "Philadelphia County",
        hotspotDistrict: "Pennsylvania Superior Court / statewide constitutional amendment debate"
      },
      summary: "Pennsylvania sits in the middle of the pack, with a recent equal-protection firearms decision and a pending sex-equality amendment creating moderate challenge and expansion signals.",
      confidence: 0.68,
      monitoringNote: "Pennsylvania's score is more tentative because the current seed set is smaller and split between judicial and legislative signals.",
      estimates: {
        limited: 28,
        expanded: 49,
        challenged: 61
      },
      stats: [
        {
          label: "Visible constitutional signal intensity",
          thenLabel: "2015 baseline",
          thenValue: "Low",
          nowLabel: "2026 seeded dashboard",
          nowValue: "Moderate",
          note: "The state now has both a meaningful court decision and an amendment proposal in the same general equality area."
        },
        {
          label: "Tracked 14th Amendment dispute types",
          thenLabel: "Earlier snapshot",
          thenValue: "Primarily litigation",
          nowLabel: "Current snapshot",
          nowValue: "Litigation + amendment debate",
          note: "That mix makes Pennsylvania more dynamic than its raw score alone suggests."
        }
      ],
      news: [
        {
          headline: "Pennsylvania equality debates could span firearms access, sex-equality language, and state constitutional reform",
          angle: "Coverage may focus on whether courts and lawmakers are moving toward broader equality guarantees or more fragmented rights debates.",
          relevance: "This aligns with the state's moderate challenge profile and slower expansion momentum.",
          url: "https://www.legis.state.pa.us/cfdocs/billinfo/bill_history.cfm?bn=388&body=S&sind=0&syear=2025&type=B"
        }
      ],
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
          region: "Philadelphia County",
          amendmentPart: "Equal Protection Clause",
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
          region: "Statewide",
          amendmentPart: "Equal Protection Clause",
          explanation: "This joint resolution would amend the Pennsylvania Constitution to strengthen sex-equality language. Because it has only been referred to committee, it currently functions more as a signal of active constitutional contest and potential expansion than as settled law.",
          url: "https://www.legis.state.pa.us/cfdocs/billinfo/bill_history.cfm?bn=388&body=S&sind=0&syear=2025&type=B"
        }
      ]
    },
    {
      id: "tx",
      name: "Texas",
      geography: {
        hotspotCounty: "Harris County",
        hotspotDistrict: "Texas Legislature / statewide education and classification disputes"
      },
      summary: "Texas remains the highest-pressure state in the current seed set because a major equal-protection precedent coexists with recent legislation that could trigger new constitutional disputes over state treatment and classification rules.",
      confidence: 0.81,
      monitoringNote: "Texas leads on challenge risk because its recent legislative signal points toward fresh equal-protection contests on top of a major historic precedent.",
      estimates: {
        limited: 52,
        expanded: 38,
        challenged: 86
      },
      stats: [
        {
          label: "Public-school access for undocumented children in the tracked rights story",
          thenLabel: "Before Plyler",
          thenValue: "At risk of exclusion",
          nowLabel: "Post-Plyler baseline",
          nowValue: "Protected by precedent",
          note: "This is a qualitative trend marker showing how a single 14th Amendment ruling changed educational access."
        },
        {
          label: "Current visible pressure on equal-protection disputes in seed",
          thenLabel: "Historic baseline",
          thenValue: "Precedent-focused",
          nowLabel: "2026 seeded dashboard",
          nowValue: "Precedent + new legislative friction",
          note: "Texas looks riskier today because the state has both foundational case law and fresh policy disputes that could test it."
        }
      ],
      news: [
        {
          headline: "Texas could see renewed equal-protection battles over education, discrimination policy, and state classification rules",
          angle: "Coverage may connect historic education-rights precedent with modern fights over diversity policy and access to public institutions.",
          relevance: "This matches Texas's top challenge-risk score in the dashboard.",
          url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/HB05135I.htm"
        }
      ],
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
          region: "Statewide Texas impact",
          amendmentPart: "Equal Protection Clause",
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
          region: "Statewide",
          amendmentPart: "Equal Protection Clause",
          explanation: "The bill frames itself as an antidiscrimination measure, but its restrictions on diversity and government decisionmaking are likely to generate substantial equal-protection disputes, keeping Texas at the top of the challenge-risk ranking.",
          url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/HB05135I.htm"
        }
      ]
    }
  ]
};
