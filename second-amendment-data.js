window.secondAmendmentData = {
  scope: {
    amendment: "2nd Amendment",
    states: ["California", "Texas", "New York", "Minnesota", "Pennsylvania"],
    seededAt: "2026-04-10",
    note: "Direction labels, estimates, and trend statistics are interpretive seed judgments based on linked source materials and are not legal advice.",
    amendmentBrief: {
      summary: "The Second Amendment protects the right to keep and bear arms, but modern constitutional fights focus on how far that right extends, who may exercise it, and which public-safety regulations survive constitutional review.",
      history: "Ratified in 1791 as part of the Bill of Rights, the amendment originally sat in a militia-centered constitutional context. Modern doctrine changed dramatically after District of Columbia v. Heller and McDonald v. Chicago recognized an individual right that constrains state and local governments.",
      averagePerson: "For the average person, the amendment affects whether firearms may be purchased, carried in public, stored at home, or restricted in sensitive places, and whether governments may limit access based on age, licensing, or criminal history."
    },
    clauses: [
      { id: "core-right", title: "Core Right", definition: "Tracks the baseline individual right to possess firearms for lawful purposes such as self-defense." },
      { id: "public-carry", title: "Public Carry", definition: "Tracks whether people may carry firearms outside the home and what licensing barriers governments may impose." },
      { id: "sensitive-places", title: "Sensitive Places", definition: "Tracks when governments may restrict firearms in places such as schools, transit systems, government buildings, and other regulated locations." },
      { id: "eligibility", title: "Eligibility and Access", definition: "Tracks who may buy or possess firearms, including age limits, background restrictions, and disqualifying-status rules." }
    ]
  },
  states: [
    {
      id: "ca",
      name: "California",
      clauseData: {
        "core-right": {
          summary: "California's core-right picture is shaped by a long-running clash between expansive state regulation and aggressive Second Amendment litigation.",
          hotspotCounty: "San Diego County",
          hotspotDistrict: "Southern District of California / Ninth Circuit pipeline",
          confidence: 0.71,
          monitoringNote: "Watch how broad California firearm regulations are tested after the Supreme Court's history-and-tradition turn.",
          estimates: { limited: 72, expanded: 36, challenged: 79 },
          stats: [
            { label: "High-visibility Second Amendment challenges in the seed", thenLabel: "Earlier baseline", thenValue: "2", nowLabel: "Current seed view", nowValue: "4", note: "California remains one of the most regulation-heavy and litigation-heavy states in the dashboard." }
          ],
          news: [
            { headline: "California remains a national testing ground for modern firearm-rights doctrine", angle: "Coverage frequently links sweeping firearm regulations with immediate constitutional challenges after major federal rulings.", relevance: "This aligns with California's strong challenge profile because even baseline ownership rules are regularly contested.", url: "https://www.law.cornell.edu/wex/second_amendment" }
          ],
          documents: [
            { title: "District of Columbia v. Heller", type: "Court Ruling", status: "U.S. Supreme Court decision", topic: "Core Right", direction: "expanded", date: "2008-06-26", weight: 90, sourceName: "Legal Information Institute", region: "National doctrine with California regulatory impact", explanation: "Heller recognized an individual right to keep a handgun in the home for self-defense, setting the doctrinal floor for later California litigation.", url: "https://www.law.cornell.edu/wex/district_of_columbia_v._heller_(2008)" },
            { title: "McDonald v. Chicago", type: "Court Ruling", status: "U.S. Supreme Court decision", topic: "Core Right", direction: "expanded", date: "2010-06-28", weight: 92, sourceName: "Legal Information Institute", region: "National doctrine applied to states", explanation: "McDonald incorporated the Second Amendment against the states through the Fourteenth Amendment, making California's firearm regulations constitutionally challengeable in federal court.", url: "https://www.law.cornell.edu/wex/mcdonald_v._city_of_chicago_(2010)" }
          ]
        },
        "public-carry": {
          summary: "Public-carry litigation is one of California's clearest challenge zones because licensing and location-based limits continue to face post-Bruen review.",
          hotspotCounty: "Los Angeles County",
          hotspotDistrict: "Central District of California / statewide carry enforcement",
          confidence: 0.77,
          monitoringNote: "California public-carry rules remain under constant doctrinal pressure after Bruen.",
          estimates: { limited: 68, expanded: 42, challenged: 83 },
          stats: [
            { label: "Public-carry doctrinal pressure", thenLabel: "Pre-Bruen baseline", thenValue: "Moderate", nowLabel: "Current seed view", nowValue: "High", note: "After Bruen, carry restrictions are being measured against a much tougher constitutional standard." }
          ],
          news: [
            { headline: "California carry restrictions still draw national attention after Bruen", angle: "News around permits and enforcement tends to center on whether the state is complying with the Supreme Court's carry-right ruling.", relevance: "This supports the clause's high challenge score because carry rules are still being actively tested.", url: "https://www.law.cornell.edu/wex/new_york_state_rifle_%26_pistol_association_inc._v._bruen_(2022)" }
          ],
          documents: [
            { title: "New York State Rifle & Pistol Association v. Bruen", type: "Court Ruling", status: "U.S. Supreme Court decision", topic: "Public Carry", direction: "expanded", date: "2022-06-23", weight: 95, sourceName: "Legal Information Institute", region: "National doctrine affecting California carry rules", explanation: "Bruen recognized a broad right to public carry for self-defense and sharply changed the constitutional test for public-carry regulations, intensifying California litigation.", url: "https://www.law.cornell.edu/wex/new_york_state_rifle_%26_pistol_association_inc._v._bruen_(2022)" },
            { title: "Senate Bill 2", type: "Legislation", status: "Chaptered", topic: "Sensitive places and carry limits", direction: "limited", date: "2023-09-26", weight: 81, sourceName: "California Legislative Information", region: "Statewide", explanation: "SB 2 tightened public-carry restrictions and expanded sensitive-place rules, creating a major limiting signal and a predictable new wave of constitutional challenge.", url: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240SB2" }
          ]
        },
        "sensitive-places": {
          summary: "California's sensitive-places doctrine is under intense challenge because the state has tried to define public spaces broadly after Bruen.",
          hotspotCounty: "Statewide",
          hotspotDistrict: "Statewide / district-court injunction battles",
          confidence: 0.75,
          monitoringNote: "Sensitive-place definitions may be one of the fastest-moving California Second Amendment issues.",
          estimates: { limited: 79, expanded: 28, challenged: 81 },
          stats: [
            { label: "Sensitive-place restriction breadth", thenLabel: "Older carry regime", thenValue: "Narrower", nowLabel: "Current seed view", nowValue: "Much broader", note: "The state has attempted to regulate a much wider set of public places than before." }
          ],
          news: [
            { headline: "Sensitive-place lawsuits keep California at the center of Second Amendment conflict", angle: "Current reporting often centers on injunction battles over where firearms may be banned.", relevance: "This is a direct challenge signal because the disputes concern the reach of new restrictions, not settled doctrine.", url: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240SB2" }
          ],
          documents: [
            { title: "Senate Bill 2", type: "Legislation", status: "Chaptered", topic: "Sensitive Places", direction: "limited", date: "2023-09-26", weight: 83, sourceName: "California Legislative Information", region: "Statewide", explanation: "California's SB 2 greatly expanded the state's sensitive-place restrictions, making it one of the clearest limiting signals in the current Second Amendment seed.", url: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240SB2" }
          ]
        },
        "eligibility": {
          summary: "California eligibility rules remain active, but the sharpest constitutional friction currently sits with public-carry and location restrictions.",
          hotspotCounty: "Statewide",
          hotspotDistrict: "Dealer licensing and possession restrictions",
          confidence: 0.63,
          monitoringNote: "Eligibility disputes matter, but they are not the lead California issue in this seed.",
          estimates: { limited: 66, expanded: 25, challenged: 58 },
          stats: [
            { label: "Eligibility-related regulation pressure", thenLabel: "Older baseline", thenValue: "High", nowLabel: "Current seed view", nowValue: "High", note: "California continues to use layered access rules, though they are not the only litigation focus anymore." }
          ],
          news: [
            { headline: "California access restrictions still matter even when carry dominates the headlines", angle: "Eligibility and purchasing rules remain a background constitutional pressure point.", relevance: "This supports a moderate challenge score rather than a top-line doctrinal shift.", url: "https://www.law.cornell.edu/wex/second_amendment" }
          ],
          documents: []
        }
      }
    },
    {
      id: "tx",
      name: "Texas",
      clauseData: {
        "core-right": {
          summary: "Texas generally trends expansion-oriented on core Second Amendment access, but that expansion also invites new disputes over limits and preemption.",
          hotspotCounty: "Statewide",
          hotspotDistrict: "Statewide constitutional and legislative context",
          confidence: 0.7,
          monitoringNote: "Texas often acts as an expansion signal source rather than a restriction source.",
          estimates: { limited: 24, expanded: 74, challenged: 57 },
          stats: [
            { label: "Legislative expansion pressure", thenLabel: "Earlier baseline", thenValue: "Moderate", nowLabel: "Current seed view", nowValue: "High", note: "Texas continues to serve as a strong expansion signal in the current gun-rights environment." }
          ],
          news: [
            { headline: "Texas remains one of the most expansion-oriented Second Amendment jurisdictions", angle: "Coverage often treats Texas as a model for broad firearm-access rules rather than narrow licensing systems.", relevance: "This supports the state's high expansion score on the core-right dimension.", url: "https://guides.sll.texas.gov/firearms" }
          ],
          documents: [
            { title: "Permitless Carry (HB 1927)", type: "Legislation", status: "Enacted", topic: "Core Right / Public Carry", direction: "expanded", date: "2021-06-16", weight: 85, sourceName: "Texas State Law Library", region: "Statewide", explanation: "Texas moved to permitless carry for many adults, making the state one of the clearest legislative expansion signals in the dashboard.", url: "https://guides.sll.texas.gov/firearms" }
          ]
        },
        "public-carry": {
          summary: "Texas public-carry rules trend heavily expansion-oriented, though the practical effects still trigger challenges over local enforcement and overlapping restrictions.",
          hotspotCounty: "Travis County",
          hotspotDistrict: "Statewide carry policy / Austin enforcement context",
          confidence: 0.74,
          monitoringNote: "Texas carry law is broad, but the practical edge cases still generate conflict.",
          estimates: { limited: 19, expanded: 81, challenged: 48 },
          stats: [
            { label: "Carry access baseline", thenLabel: "Earlier regime", thenValue: "License-dependent", nowLabel: "Current seed view", nowValue: "Broader permitless access", note: "Texas has materially reduced formal barriers to public carry." }
          ],
          news: [
            { headline: "Texas carry law still shapes national debates over how far states can go in expanding firearm access", angle: "Current coverage often compares Texas's broad carry regime with more restrictive states.", relevance: "This is a strong expansion signal with moderate downstream legal friction.", url: "https://guides.sll.texas.gov/firearms" }
          ],
          documents: [
            { title: "Permitless Carry (HB 1927)", type: "Legislation", status: "Enacted", topic: "Public Carry", direction: "expanded", date: "2021-06-16", weight: 87, sourceName: "Texas State Law Library", region: "Statewide", explanation: "Texas reduced formal licensing barriers to carry, which sharply expanded public-carry access and changed the state's constitutional baseline.", url: "https://guides.sll.texas.gov/firearms" }
          ]
        },
        "sensitive-places": {
          summary: "Texas sensitive-place disputes exist, but they are usually framed as carve-outs within an otherwise expansion-heavy legal environment.",
          hotspotCounty: "Statewide",
          hotspotDistrict: "Schools, polling places, and government buildings",
          confidence: 0.58,
          monitoringNote: "Sensitive-place fights matter, but they are not the dominant Texas Second Amendment storyline in this seed.",
          estimates: { limited: 46, expanded: 35, challenged: 44 },
          stats: [
            { label: "Sensitive-place conflict level", thenLabel: "Earlier baseline", thenValue: "Moderate", nowLabel: "Current seed view", nowValue: "Moderate", note: "Texas still recognizes restricted places even within a permissive carry environment." }
          ],
          news: [
            { headline: "Even in Texas, sensitive places remain a practical line on gun rights", angle: "Coverage often focuses on the specific places where the state still draws hard restrictions.", relevance: "This keeps the clause active without making it the top risk category in Texas.", url: "https://guides.sll.texas.gov/firearms" }
          ],
          documents: []
        },
        "eligibility": {
          summary: "Eligibility and access rules remain contested in Texas, especially where broad gun-rights politics meets disqualification or enforcement rules.",
          hotspotCounty: "Statewide",
          hotspotDistrict: "Background restrictions and possession disqualifiers",
          confidence: 0.6,
          monitoringNote: "This issue is real, but less visible than Texas carry expansion in the current seed.",
          estimates: { limited: 38, expanded: 43, challenged: 51 },
          stats: [
            { label: "Eligibility litigation pressure", thenLabel: "Earlier baseline", thenValue: "Low to moderate", nowLabel: "Current seed view", nowValue: "Moderate", note: "Texas still produces access fights where broad rights claims meet public-safety exceptions." }
          ],
          news: [
            { headline: "Texas debates over who can possess firearms continue beneath the bigger carry story", angle: "Current events often turn on whether restrictions tied to status or prior conduct remain constitutional.", relevance: "This supports a moderate challenge score rather than a clear expansion or limitation trend.", url: "https://guides.sll.texas.gov/firearms" }
          ],
          documents: []
        }
      }
    },
    {
      id: "ny",
      name: "New York",
      clauseData: {
        "core-right": {
          summary: "New York's core-right environment remains challenge-heavy because the state is a national focal point for firearm regulation after Bruen.",
          hotspotCounty: "New York County",
          hotspotDistrict: "Southern District of New York / statewide enforcement",
          confidence: 0.78,
          monitoringNote: "New York is one of the clearest examples of a state trying to preserve strict firearm regulation after Bruen.",
          estimates: { limited: 73, expanded: 32, challenged: 84 },
          stats: [
            { label: "National attention on state firearm regulation", thenLabel: "Earlier baseline", thenValue: "High", nowLabel: "Current seed view", nowValue: "Very high", note: "New York remains one of the most watched states in modern Second Amendment doctrine." }
          ],
          news: [
            { headline: "New York stays at the center of national gun-rights litigation", angle: "Even after Bruen, reporting still treats New York as a leading test case for how states respond to expanded Second Amendment doctrine.", relevance: "This is a strong challenge signal because doctrinal pressure is still unfolding in real time.", url: "https://www.law.cornell.edu/wex/new_york_state_rifle_%26_pistol_association_inc._v._bruen_(2022)" }
          ],
          documents: [
            { title: "New York State Rifle & Pistol Association v. Bruen", type: "Court Ruling", status: "U.S. Supreme Court decision", topic: "Core Right / Public Carry", direction: "expanded", date: "2022-06-23", weight: 96, sourceName: "Legal Information Institute", region: "Statewide and national impact", explanation: "Bruen invalidated New York's discretionary carry licensing regime and reshaped Second Amendment review nationwide, making New York central to the amendment's modern expansion story.", url: "https://www.law.cornell.edu/wex/new_york_state_rifle_%26_pistol_association_inc._v._bruen_(2022)" }
          ]
        },
        "public-carry": {
          summary: "Public carry is the defining Second Amendment issue in New York because post-Bruen state responses remain under heavy constitutional attack.",
          hotspotCounty: "Albany County",
          hotspotDistrict: "Statewide legislative and federal-court review",
          confidence: 0.82,
          monitoringNote: "New York's carry framework still generates some of the clearest post-Bruen litigation signals in the country.",
          estimates: { limited: 77, expanded: 38, challenged: 87 },
          stats: [
            { label: "Carry-rule instability", thenLabel: "Pre-Bruen baseline", thenValue: "Structured but stable", nowLabel: "Current seed view", nowValue: "Highly contested", note: "The legal status of New York's carry restrictions has become far more unstable since Bruen." }
          ],
          news: [
            { headline: "New York carry litigation remains a national proxy battle over Bruen's reach", angle: "Coverage focuses on whether the state is narrowing public carry through new procedural and location-based restrictions.", relevance: "This strongly supports the clause's challenge score because the state and federal courts are still sorting out what compliance looks like.", url: "https://www.nysenate.gov/legislation/bills/2021/S51001" }
          ],
          documents: [
            { title: "Concealed Carry Improvement Act (CCIA)", type: "Legislation", status: "Enacted", topic: "Public Carry", direction: "limited", date: "2022-07-01", weight: 84, sourceName: "New York State Senate", region: "Statewide", explanation: "New York enacted a wide-ranging response to Bruen that added new licensing requirements and carry restrictions, creating both a limiting signal and immediate new constitutional challenge.", url: "https://www.nysenate.gov/legislation/bills/2021/S51001" },
            { title: "New York State Rifle & Pistol Association v. Bruen", type: "Court Ruling", status: "U.S. Supreme Court decision", topic: "Public Carry", direction: "expanded", date: "2022-06-23", weight: 96, sourceName: "Legal Information Institute", region: "Statewide and national impact", explanation: "Bruen expanded public-carry rights and sharply constrained how New York and other states justify carry restrictions.", url: "https://www.law.cornell.edu/wex/new_york_state_rifle_%26_pistol_association_inc._v._bruen_(2022)" }
          ]
        },
        "sensitive-places": {
          summary: "Sensitive-place restrictions are one of New York's sharpest post-Bruen conflict zones because the state tried to maintain broad no-carry areas.",
          hotspotCounty: "Statewide",
          hotspotDistrict: "Statewide sensitive-place enforcement",
          confidence: 0.79,
          monitoringNote: "This is one of the most active and legally volatile New York Second Amendment questions.",
          estimates: { limited: 81, expanded: 27, challenged: 86 },
          stats: [
            { label: "Sensitive-place breadth", thenLabel: "Older baseline", thenValue: "Narrower", nowLabel: "Current seed view", nowValue: "Much broader and more contested", note: "New York's response to Bruen increased the scope and visibility of location-specific restrictions." }
          ],
          news: [
            { headline: "New York's sensitive-place restrictions remain under close constitutional scrutiny", angle: "Current reporting often turns on whether the state can define broad public spaces as off-limits for carry.", relevance: "This directly supports the state's strong challenge score on the sensitive-places question.", url: "https://www.nysenate.gov/legislation/bills/2021/S51001" }
          ],
          documents: [
            { title: "Concealed Carry Improvement Act (CCIA)", type: "Legislation", status: "Enacted", topic: "Sensitive Places", direction: "limited", date: "2022-07-01", weight: 85, sourceName: "New York State Senate", region: "Statewide", explanation: "The CCIA expanded the list of locations treated as sensitive places, making New York one of the clearest sensitive-place test cases after Bruen.", url: "https://www.nysenate.gov/legislation/bills/2021/S51001" }
          ]
        },
        "eligibility": {
          summary: "Eligibility and access rules remain important in New York, but carry and sensitive-place conflicts are still more visible in this seed set.",
          hotspotCounty: "Statewide",
          hotspotDistrict: "Licensing review and disqualification rules",
          confidence: 0.61,
          monitoringNote: "Eligibility rules matter, but the broader carry architecture currently dominates.",
          estimates: { limited: 64, expanded: 29, challenged: 62 },
          stats: [
            { label: "Licensing and eligibility pressure", thenLabel: "Earlier baseline", thenValue: "High", nowLabel: "Current seed view", nowValue: "High", note: "New York still uses dense licensing and qualification rules even after Bruen." }
          ],
          news: [
            { headline: "New York still tests the limits of who may lawfully carry or possess firearms", angle: "Recent coverage often links firearm eligibility to the state's larger post-Bruen licensing fight.", relevance: "This supports a combined limited-and-challenged profile.", url: "https://www.nysenate.gov/legislation/bills/2021/S51001" }
          ],
          documents: []
        }
      }
    },
    {
      id: "mn",
      name: "Minnesota",
      clauseData: {
        "core-right": {
          summary: "Minnesota's core-right environment is less sweeping than New York's or California's, but age-based access and licensing rules still create meaningful constitutional pressure.",
          hotspotCounty: "Hennepin County",
          hotspotDistrict: "District of Minnesota / Eighth Circuit review",
          confidence: 0.69,
          monitoringNote: "Minnesota is a strong watch state for age-based Second Amendment disputes.",
          estimates: { limited: 38, expanded: 57, challenged: 66 },
          stats: [
            { label: "High-visibility access disputes", thenLabel: "Earlier baseline", thenValue: "Low", nowLabel: "Current seed view", nowValue: "Moderate", note: "Minnesota's Second Amendment profile is increasingly shaped by who may exercise the right rather than by sweeping carry bans." }
          ],
          news: [
            { headline: "Minnesota gun-rights fights increasingly center on access and eligibility", angle: "Coverage often focuses on age limits and whether younger adults must be treated as full rights-holders.", relevance: "This supports the state's moderate expansion and challenge scores.", url: "https://www.ca8.uscourts.gov/opndir/23/08/221430P.pdf" }
          ],
          documents: [
            { title: "Worth v. Harrington", type: "Court Ruling", status: "Eighth Circuit decision", topic: "Eligibility and Access", direction: "expanded", date: "2023-08-21", weight: 84, sourceName: "U.S. Court of Appeals for the Eighth Circuit", region: "District of Minnesota / statewide effect", explanation: "The Eighth Circuit held Minnesota's age-based restriction on permits to carry likely unconstitutional as applied to adults aged 18 to 20, making Minnesota a notable expansion signal.", url: "https://www.ca8.uscourts.gov/opndir/23/08/221430P.pdf" }
          ]
        },
        "public-carry": {
          summary: "Public-carry doctrine in Minnesota is most visible through age-based access rather than broad statewide hostility to carry itself.",
          hotspotCounty: "Ramsey County",
          hotspotDistrict: "District of Minnesota / statewide permit administration",
          confidence: 0.7,
          monitoringNote: "The leading carry issue is who may carry, not whether carry exists at all.",
          estimates: { limited: 34, expanded: 61, challenged: 63 },
          stats: [
            { label: "Carry-access pressure for younger adults", thenLabel: "Earlier baseline", thenValue: "Restricted", nowLabel: "Current seed view", nowValue: "Expanding under litigation pressure", note: "Recent litigation focuses on whether 18-to-20-year-olds must be given access to permits." }
          ],
          news: [
            { headline: "Minnesota carry disputes often hinge on age rather than blanket denial", angle: "Current coverage frames public carry as an eligibility-and-equality issue for younger adults.", relevance: "This supports the state's moderate expansion and challenge posture on carry.", url: "https://www.ca8.uscourts.gov/opndir/23/08/221430P.pdf" }
          ],
          documents: [
            { title: "Worth v. Harrington", type: "Court Ruling", status: "Eighth Circuit decision", topic: "Public Carry", direction: "expanded", date: "2023-08-21", weight: 83, sourceName: "U.S. Court of Appeals for the Eighth Circuit", region: "District of Minnesota / statewide effect", explanation: "The ruling expanded carry access for 18-to-20-year-olds and made Minnesota a visible Second Amendment expansion signal on public-carry eligibility.", url: "https://www.ca8.uscourts.gov/opndir/23/08/221430P.pdf" }
          ]
        },
        "sensitive-places": {
          summary: "Sensitive-place disputes exist in Minnesota, but they are not the lead Second Amendment storyline in this seed.",
          hotspotCounty: "Statewide",
          hotspotDistrict: "Schools and public buildings",
          confidence: 0.49,
          monitoringNote: "This is a secondary Minnesota issue compared with age-based access litigation.",
          estimates: { limited: 41, expanded: 24, challenged: 39 },
          stats: [
            { label: "Sensitive-place visibility", thenLabel: "Earlier baseline", thenValue: "Low", nowLabel: "Current seed view", nowValue: "Low to moderate", note: "The issue remains present but not dominant in Minnesota's current seed profile." }
          ],
          news: [
            { headline: "Minnesota's Second Amendment attention is still more about access than location bans", angle: "Location-specific rules matter, but they are not the most visible conflict in this state sample.", relevance: "This supports a lower challenge score than the carry and eligibility categories.", url: "https://www.law.cornell.edu/wex/second_amendment" }
          ],
          documents: []
        },
        "eligibility": {
          summary: "Eligibility is Minnesota's clearest Second Amendment pressure point because age-based restrictions are producing expansion-oriented appellate rulings.",
          hotspotCounty: "Hennepin County",
          hotspotDistrict: "District of Minnesota / Eighth Circuit",
          confidence: 0.78,
          monitoringNote: "Minnesota is one of the stronger access-based expansion signals in the current Second Amendment seed.",
          estimates: { limited: 29, expanded: 69, challenged: 67 },
          stats: [
            { label: "Eligibility-rule instability", thenLabel: "Earlier baseline", thenValue: "Stable adult-age threshold", nowLabel: "Current seed view", nowValue: "Legally destabilized", note: "Age-based restrictions are now under direct constitutional pressure." }
          ],
          news: [
            { headline: "Minnesota's strongest Second Amendment fight is about who qualifies to exercise the right", angle: "The current conversation often centers on whether younger adults can be categorically excluded from carry access.", relevance: "This aligns with Minnesota's strong expansion signal in eligibility and access.", url: "https://www.ca8.uscourts.gov/opndir/23/08/221430P.pdf" }
          ],
          documents: [
            { title: "Worth v. Harrington", type: "Court Ruling", status: "Eighth Circuit decision", topic: "Eligibility and Access", direction: "expanded", date: "2023-08-21", weight: 86, sourceName: "U.S. Court of Appeals for the Eighth Circuit", region: "District of Minnesota / statewide effect", explanation: "This case is one of the clearest access-expansion signals in the entire state set because it directly questioned Minnesota's age-based permit restriction.", url: "https://www.ca8.uscourts.gov/opndir/23/08/221430P.pdf" }
          ]
        }
      }
    },
    {
      id: "pa",
      name: "Pennsylvania",
      clauseData: {
        "core-right": {
          summary: "Pennsylvania sits between expansion-heavy and regulation-heavy states, with notable litigation over youth access and public-carry treatment.",
          hotspotCounty: "Philadelphia County",
          hotspotDistrict: "Commonwealth Court / statewide firearms administration",
          confidence: 0.67,
          monitoringNote: "Pennsylvania often produces narrower but still significant Second Amendment access disputes.",
          estimates: { limited: 33, expanded: 58, challenged: 61 },
          stats: [
            { label: "Access and status litigation pressure", thenLabel: "Earlier baseline", thenValue: "Low", nowLabel: "Current seed view", nowValue: "Moderate", note: "Pennsylvania's Second Amendment profile is increasingly shaped by status-based and carry-related review." }
          ],
          news: [
            { headline: "Pennsylvania remains a quieter but meaningful Second Amendment watch state", angle: "Current attention often turns on young-adult rights and local enforcement issues rather than sweeping statewide overhauls.", relevance: "This supports a moderate expansion and challenge profile.", url: "https://www.pacourts.us/assets/opinions/Commonwealth/out/J-35A-2023mop.pdf" }
          ],
          documents: [
            { title: "Lara v. Commissioner Pennsylvania State Police", type: "Court Ruling", status: "Pennsylvania Supreme Court decision", topic: "Eligibility and Access", direction: "expanded", date: "2024-01-18", weight: 82, sourceName: "Unified Judicial System of Pennsylvania", region: "Statewide", explanation: "The Pennsylvania Supreme Court held that 18-to-20-year-olds could not be categorically denied a license to carry firearms, making Pennsylvania an expansion signal on access and eligibility.", url: "https://www.pacourts.us/assets/opinions/Commonwealth/out/J-35A-2023mop.pdf" }
          ]
        },
        "public-carry": {
          summary: "Public-carry doctrine in Pennsylvania is closely tied to who may lawfully receive a carry license, especially for younger adults.",
          hotspotCounty: "Dauphin County",
          hotspotDistrict: "Pennsylvania Supreme Court / statewide licensing policy",
          confidence: 0.72,
          monitoringNote: "The leading Pennsylvania carry issue is licensing access rather than blanket carry denial.",
          estimates: { limited: 27, expanded: 66, challenged: 59 },
          stats: [
            { label: "Carry-license access for younger adults", thenLabel: "Earlier baseline", thenValue: "Restricted", nowLabel: "Current seed view", nowValue: "Expanded by court ruling", note: "Pennsylvania's most visible carry signal is a judicial expansion of who may obtain a license." }
          ],
          news: [
            { headline: "Pennsylvania carry fights increasingly focus on equal access to licensing", angle: "Coverage often turns on whether younger adults must be treated like older adults for carry licensing purposes.", relevance: "This supports a strong expansion profile on carry access.", url: "https://www.pacourts.us/assets/opinions/Commonwealth/out/J-35A-2023mop.pdf" }
          ],
          documents: [
            { title: "Lara v. Commissioner Pennsylvania State Police", type: "Court Ruling", status: "Pennsylvania Supreme Court decision", topic: "Public Carry", direction: "expanded", date: "2024-01-18", weight: 84, sourceName: "Unified Judicial System of Pennsylvania", region: "Statewide", explanation: "By invalidating the age cutoff for carry licenses, the court expanded practical carry access for a class of adult Pennsylvanians.", url: "https://www.pacourts.us/assets/opinions/Commonwealth/out/J-35A-2023mop.pdf" }
          ]
        },
        "sensitive-places": {
          summary: "Sensitive-place conflicts exist in Pennsylvania, but they are not the main driver of the state's current Second Amendment profile in this seed.",
          hotspotCounty: "Statewide",
          hotspotDistrict: "Schools and government-property restrictions",
          confidence: 0.47,
          monitoringNote: "This remains a secondary Pennsylvania issue compared with licensing access.",
          estimates: { limited: 37, expanded: 22, challenged: 35 },
          stats: [
            { label: "Sensitive-place issue visibility", thenLabel: "Earlier baseline", thenValue: "Low", nowLabel: "Current seed view", nowValue: "Low", note: "The state sample is not currently driven by location-based restriction litigation." }
          ],
          news: [
            { headline: "Pennsylvania's current Second Amendment attention still leans toward who can carry rather than where", angle: "Location-based restrictions matter, but they are not the state's most visible current constitutional fight in this seed.", relevance: "This supports a lower challenge score for sensitive places than for carry and eligibility.", url: "https://www.law.cornell.edu/wex/second_amendment" }
          ],
          documents: []
        },
        "eligibility": {
          summary: "Eligibility and access are the strongest Pennsylvania Second Amendment issue in this seed because of the young-adult licensing decision.",
          hotspotCounty: "Dauphin County",
          hotspotDistrict: "Pennsylvania Supreme Court / statewide licensing access",
          confidence: 0.76,
          monitoringNote: "Pennsylvania is one of the cleaner access-based expansion stories in the current state set.",
          estimates: { limited: 26, expanded: 71, challenged: 60 },
          stats: [
            { label: "Eligibility-rule change pressure", thenLabel: "Earlier baseline", thenValue: "Stable age bar", nowLabel: "Current seed view", nowValue: "Expanded access after ruling", note: "The state now has a strong appellate signal favoring broader licensing access for adults under 21." }
          ],
          news: [
            { headline: "Pennsylvania's biggest gun-rights story is who counts as fully eligible to carry", angle: "Current coverage often uses young-adult rights as the leading lens on Pennsylvania's Second Amendment law.", relevance: "This strongly supports the expansion score for eligibility and access.", url: "https://www.pacourts.us/assets/opinions/Commonwealth/out/J-35A-2023mop.pdf" }
          ],
          documents: [
            { title: "Lara v. Commissioner Pennsylvania State Police", type: "Court Ruling", status: "Pennsylvania Supreme Court decision", topic: "Eligibility and Access", direction: "expanded", date: "2024-01-18", weight: 86, sourceName: "Unified Judicial System of Pennsylvania", region: "Statewide", explanation: "This decision expanded who may seek a carry license and made Pennsylvania a notable eligibility-access expansion signal.", url: "https://www.pacourts.us/assets/opinions/Commonwealth/out/J-35A-2023mop.pdf" }
          ]
        }
      }
    }
  ]
};
