
window.monitorData = {
  scope: {
    amendment: "14th Amendment",
    states: ["California", "Texas", "New York", "Minnesota", "Pennsylvania"],
    seededAt: "2026-04-08",
    note: "Direction labels, estimates, and trend statistics are interpretive seed judgments based on linked source materials and are not legal advice.",
    amendmentBrief: {
      summary: "The 14th Amendment is one of the most important limits on state power because it shapes citizenship, fair process, and equal treatment under the law.",
      history: "Ratified in 1868 after the Civil War, the amendment was meant to secure citizenship and civil rights, especially against discriminatory state action.",
      averagePerson: "For the average person, the amendment matters when schools, police, courts, licensing systems, or other state institutions decide who gets protection, how fair procedures must be, and whether people are treated equally."
    },
    clauses: [
      { id: "citizenship", title: "Citizenship Clause", definition: "Defines national and state citizenship and anchors birthright citizenship debates." },
      { id: "due-process", title: "Due Process Clause", definition: "States cannot deprive people of life, liberty, or property without fair procedures and, in some settings, without respecting core liberty interests." },
      { id: "equal-protection", title: "Equal Protection Clause", definition: "States must not deny any person equal protection of the laws, making this clause central to discrimination and classification disputes." },
      { id: "privileges-immunities", title: "Privileges or Immunities / Enforcement", definition: "Tracks debates over national rights and Congress's enforcement power, though it appears less often than due process or equal protection in modern litigation." }
    ]
  },
  states: [
    {
      id: "ny",
      name: "New York",
      clauseData: {
        citizenship: {
          summary: "New York has limited visible pressure in this seed set on the Citizenship Clause itself.",
          hotspotCounty: "Statewide",
          hotspotDistrict: "Statewide constitutional context",
          confidence: 0.55,
          monitoringNote: "This clause is not the main New York pressure point in the current seed.",
          estimates: { limited: 14, expanded: 26, challenged: 22 },
          stats: [
            { label: "Tracked citizenship-specific records", thenLabel: "Earlier seed view", thenValue: "0", nowLabel: "Current seed view", nowValue: "0", note: "Citizenship-specific pressure is currently low in this narrow dataset." }
          ],
          news: [
            { headline: "Birthright citizenship debates elsewhere may still influence New York legal attention", angle: "Even without a major New York record in this seed, national citizenship disputes can shape state legal monitoring priorities.", relevance: "This is more contextual than state-specific at the moment.", url: "https://www.law.cornell.edu/constitution/amendmentxiv" }
          ],
          documents: []
        },
        "due-process": {
          summary: "Due process is present in New York's broader constitutional environment, but this seed set does not make it the leading clause there.",
          hotspotCounty: "Statewide",
          hotspotDistrict: "State administrative and court procedures",
          confidence: 0.58,
          monitoringNote: "New York's biggest visible movement in this seed still sits with equal protection rather than due process.",
          estimates: { limited: 21, expanded: 34, challenged: 31 },
          stats: [
            { label: "High-visibility due-process records", thenLabel: "Older baseline", thenValue: "Low", nowLabel: "Current seed view", nowValue: "Low to moderate", note: "The clause matters, but it is not the most active issue in this particular state sample." }
          ],
          news: [
            { headline: "Administrative fairness and judicial procedure remain a steady New York due-process theme", angle: "Process disputes often rise when state systems change who gets notice, hearings, or review.", relevance: "This is a background monitor rather than the top current clause risk.", url: "https://law.justia.com/cases/new-york/other-courts/2026/2026-ny-slip-op-26005.html" }
          ],
          documents: []
        },
        "equal-protection": {
          summary: "New York shows strong expansion momentum and active legal challenge around equal-protection doctrine because new constitutional language is already being tested in court.",
          hotspotCounty: "Madison County",
          hotspotDistrict: "New York Supreme Court, Madison County / statewide constitutional amendment coverage",
          confidence: 0.78,
          monitoringNote: "Watch how New York courts interpret the scope of the ERA in age and employment-related disputes.",
          estimates: { limited: 18, expanded: 64, challenged: 76 },
          stats: [
            { label: "Protected-class coverage in tracked equal-protection text", thenLabel: "Before ERA update", thenValue: "6 categories", nowLabel: "Current seed view", nowValue: "10+ categories", note: "The amendment text itself now covers more classifications than the older baseline framework." },
            { label: "High-visibility equal-protection records", thenLabel: "2018 seed-equivalent baseline", thenValue: "1 record", nowLabel: "2026 seeded dashboard", nowValue: "2 records", note: "The quantity is still small, but the legal significance is higher because one item is constitutional text and one is direct litigation over its meaning." }
          ],
          news: [
            { headline: "New York ERA implementation debates could reshape age and equality litigation", angle: "As courts test the new amendment language, coverage may focus on retirement rules, employment policies, and how far the expanded equal-rights text reaches.", relevance: "This correlates with the state's high challenge and expansion signals because the legal text has changed and courts are now deciding what it means in practice.", url: "https://www.nysenate.gov/legislation/bills/2023/S108" }
          ],
          documents: [
            { title: "Senate Bill S108A", type: "Legislation", status: "Passed Senate and delivered to secretary of state", topic: "Equal Protection", direction: "expanded", date: "2023-08-04", weight: 88, sourceName: "New York State Senate", region: "Statewide", explanation: "This constitutional amendment broadens New York's equal-protection language to cover age, disability, ethnicity, national origin, sex, pregnancy, reproductive healthcare autonomy, sexual orientation, gender identity, and gender expression.", url: "https://www.nysenate.gov/legislation/bills/2023/S108" },
            { title: "Saltarelli v. State of New York", type: "Court Ruling", status: "Supreme Court, Madison County opinion", topic: "Equal Protection", direction: "challenged", date: "2026-01-02", weight: 79, sourceName: "New York Official Reports via Justia", region: "Madison County", explanation: "The court treated age as a suspect class under the new ERA and struck down a judicial retirement rule as applied to certain city court judges, showing both expansion pressure and active litigation over the amendment's reach.", url: "https://law.justia.com/cases/new-york/other-courts/2026/2026-ny-slip-op-26005.html" }
          ]
        },
        "privileges-immunities": {
          summary: "Privileges or immunities is not the visible lead question in New York's current seed set.",
          hotspotCounty: "Statewide",
          hotspotDistrict: "Statewide constitutional context",
          confidence: 0.42,
          monitoringNote: "This clause remains important historically, but it is not the strongest current signal here.",
          estimates: { limited: 10, expanded: 15, challenged: 18 },
          stats: [
            { label: "Tracked privileges-or-immunities records", thenLabel: "Earlier seed view", thenValue: "0", nowLabel: "Current seed view", nowValue: "0", note: "This clause is mostly contextual in the current MVP." }
          ],
          news: [
            { headline: "Most current New York attention remains elsewhere within the 14th Amendment", angle: "In practice, equal protection and due process do more of the day-to-day work in modern state-level constitutional coverage.", relevance: "This keeps the clause visible without overstating its current role.", url: "https://www.law.cornell.edu/constitution/amendmentxiv" }
          ],
          documents: []
        }
      }
    },
    {
      id: "ca",
      name: "California",
      clauseData: {
        citizenship: {
          summary: "Citizenship-specific issues are not the main California signal in this narrow seed set.",
          hotspotCounty: "Statewide",
          hotspotDistrict: "Statewide constitutional context",
          confidence: 0.5,
          monitoringNote: "California's stronger visible signals sit with due process and equal protection.",
          estimates: { limited: 12, expanded: 24, challenged: 19 },
          stats: [
            { label: "Tracked citizenship-specific records", thenLabel: "Earlier seed view", thenValue: "0", nowLabel: "Current seed view", nowValue: "0", note: "No direct citizenship-clause record is seeded here." }
          ],
          news: [
            { headline: "California citizenship coverage is mostly shaped by national developments in this MVP", angle: "The state remains relevant to national debates even when the seed data does not contain a direct state-specific citizenship item.", relevance: "This is contextual rather than a lead signal.", url: "https://www.law.cornell.edu/constitution/amendmentxiv" }
          ],
          documents: []
        },
        "due-process": {
          summary: "California's strongest seeded clause signal sits with due process because reproductive autonomy and liberty-oriented protections have recently been made more explicit in the state constitution.",
          hotspotCounty: "Statewide",
          hotspotDistrict: "California constitutional interpretation and enforcement",
          confidence: 0.73,
          monitoringNote: "California's due-process story is stronger on expansion than on near-term restriction pressure.",
          estimates: { limited: 24, expanded: 71, challenged: 52 },
          stats: [
            { label: "Explicit constitutional protection for reproductive autonomy", thenLabel: "2010 baseline", thenValue: "No explicit text", nowLabel: "2026 seeded dashboard", nowValue: "Explicitly protected", note: "California's constitution now contains direct text strengthening this liberty-related protection." },
            { label: "Major due-process signal mix", thenLabel: "Legacy baseline", thenValue: "Implied liberty arguments", nowLabel: "Current mix", nowValue: "Explicit text + enforcement debate", note: "The state now has a firmer textual basis for liberty-oriented arguments than before." }
          ],
          news: [
            { headline: "California reproductive-rights enforcement remains a leading due-process storyline", angle: "Coverage may tie constitutional text to access, regulation, and how state institutions apply reproductive-freedom guarantees.", relevance: "This correlates with California's high expansion momentum on due process.", url: "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202120220SCA10" }
          ],
          documents: [
            { title: "SCA 10 Reproductive Freedom", type: "Legislation", status: "Chaptered and filed with Secretary of State", topic: "Substantive Due Process", direction: "expanded", date: "2022-06-29", weight: 86, sourceName: "California Legislative Information", region: "Statewide", explanation: "California added explicit reproductive-freedom language to its constitution and tied that provision to existing privacy and equal-protection guarantees, pushing the state's 14th-Amendment-adjacent protections in an expansive direction.", url: "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202120220SCA10" }
          ]
        },
        "equal-protection": {
          summary: "California's equal-protection signal is mixed: there is still meaningful rights-expansion energy overall, but older education precedent remains a limiting counterweight.",
          hotspotCounty: "Los Angeles County",
          hotspotDistrict: "California Court of Appeal / statewide constitutional interpretation",
          confidence: 0.68,
          monitoringNote: "California's equal-protection picture is less one-directional than its due-process picture.",
          estimates: { limited: 31, expanded: 46, challenged: 41 },
          stats: [
            { label: "Major statewide equal-protection signals in seed", thenLabel: "Legacy baseline", thenValue: "Education equality dispute dominates", nowLabel: "Current mix", nowValue: "Education + broader rights context", note: "The state still carries the legacy of education-equality litigation, but it now sits inside a wider rights environment." }
          ],
          news: [
            { headline: "California education equity disputes still matter for equal-protection monitoring", angle: "Even when newer state constitutional protections dominate headlines, education and institutional fairness remain an important equality story.", relevance: "This links to the state's older but still relevant equal-protection precedent.", url: "https://californiacourtofappealopinions.justia.com/2016/04/14/vergara-v-state-of-california/" }
          ],
          documents: [
            { title: "Vergara v. State of California", type: "Court Ruling", status: "California Court of Appeal summary", topic: "Equal Protection", direction: "limited", date: "2016-04-14", weight: 61, sourceName: "Justia California Court of Appeal summaries", region: "Los Angeles County / statewide impact", explanation: "The appellate court reversed a lower-court equal-protection win for students, concluding the challenged statutes themselves were not shown to cause unequal educational outcomes. That makes this a useful limiting counterweight in the California seed data.", url: "https://californiacourtofappealopinions.justia.com/2016/04/14/vergara-v-state-of-california/" }
          ]
        },
        "privileges-immunities": {
          summary: "Privileges or immunities is not the leading California clause in the current MVP.",
          hotspotCounty: "Statewide",
          hotspotDistrict: "Statewide constitutional context",
          confidence: 0.4,
          monitoringNote: "This clause remains useful for history and doctrine, but not as a current California lead indicator.",
          estimates: { limited: 9, expanded: 12, challenged: 15 },
          stats: [
            { label: "Tracked privileges-or-immunities records", thenLabel: "Earlier seed view", thenValue: "0", nowLabel: "Current seed view", nowValue: "0", note: "The clause is background context here." }
          ],
          news: [
            { headline: "California's 14th Amendment attention still centers elsewhere", angle: "Modern state-level coverage tends to flow through due process and equal protection rather than privileges or immunities.", relevance: "This keeps the clause visible without making it seem falsely active.", url: "https://www.law.cornell.edu/constitution/amendmentxiv" }
          ],
          documents: []
        }
      }
    },
    {
      id: "mn",
      name: "Minnesota",
      clauseData: {
        citizenship: {
          summary: "Citizenship is not the strongest standalone Minnesota clause in the current seed.",
          hotspotCounty: "Statewide",
          hotspotDistrict: "Statewide constitutional context",
          confidence: 0.48,
          monitoringNote: "Minnesota's more visible signals run through equality and enforcement disputes.",
          estimates: { limited: 16, expanded: 20, challenged: 24 },
          stats: [
            { label: "Citizenship-specific source records", thenLabel: "Earlier seed view", thenValue: "0", nowLabel: "Current seed view", nowValue: "0", note: "The clause is not directly represented by a seeded source document right now." }
          ],
          news: [
            { headline: "Minnesota citizenship-related issues are mostly shaped by broader national debates in this prototype", angle: "The state's current seeded records focus more on equality and enforcement than direct citizenship questions.", relevance: "This keeps the clause contextual without overstating activity.", url: "https://www.law.cornell.edu/constitution/amendmentxiv" }
          ],
          documents: []
        },
        "due-process": {
          summary: "Minnesota's due-process pressure is present but secondary to its equality and enforcement signals in this seed set.",
          hotspotCounty: "Hennepin County",
          hotspotDistrict: "District of Minnesota",
          confidence: 0.6,
          monitoringNote: "If additional agency-procedure disputes are added later, this clause could become more active.",
          estimates: { limited: 19, expanded: 28, challenged: 36 },
          stats: [
            { label: "Visible due-process pressure in seed records", thenLabel: "2019 equivalent view", thenValue: "Low", nowLabel: "2026 seeded dashboard", nowValue: "Moderate", note: "Current enforcement-oriented litigation can imply process concerns even when equal protection is the lead frame." }
          ],
          news: [
            { headline: "Minnesota enforcement controversies may also raise procedural-fairness questions", angle: "High-profile litigation often starts with equality claims but can grow into disputes about process and review.", relevance: "This is a secondary clause signal worth watching.", url: "https://www.aclu-mn.org/cases/hussen-v-noem/" }
          ],
          documents: []
        },
        "equal-protection": {
          summary: "Minnesota shows simultaneous expansion and challenge pressure on equal protection because equality-amendment efforts and active litigation are happening at the same time.",
          hotspotCounty: "Hennepin County",
          hotspotDistrict: "District of Minnesota / statewide constitutional amendment activity",
          confidence: 0.7,
          monitoringNote: "Minnesota is a good state to monitor for early movement because legislative expansion and constitutional challenge signals are arriving at the same time.",
          estimates: { limited: 22, expanded: 57, challenged: 72 },
          stats: [
            { label: "Tracked equality components actively in play", thenLabel: "Older baseline", thenValue: "1 primary component", nowLabel: "2026 seeded dashboard", nowValue: "2 active tracks", note: "Equal-protection litigation and broader equality-amendment efforts are both visible in Minnesota right now." },
            { label: "Visible challenge pressure in seed records", thenLabel: "2019 equivalent view", thenValue: "Low", nowLabel: "2026 seeded dashboard", nowValue: "Moderate to high", note: "The federal class action raises the state's challenge profile even without a final merits ruling." }
          ],
          news: [
            { headline: "Minnesota equality amendment and immigration-enforcement litigation could converge into a larger civil-rights conversation", angle: "News coverage may connect discrimination, profiling, and constitutional equality guarantees as the state weighs broader anti-discrimination language.", relevance: "This lines up with Minnesota's simultaneous expansion and challenge signals.", url: "https://www.aclu-mn.org/cases/hussen-v-noem/" }
          ],
          documents: [
            { title: "SF 473 Equal Rights Amendment Proposal", type: "Legislation", status: "Passed committee and re-referred to Rules and Administration", topic: "Equal Protection", direction: "expanded", date: "2026-02-26", weight: 75, sourceName: "Minnesota Legislature / Revisor", region: "Statewide", explanation: "This proposal would add explicit equality guarantees and anti-discrimination language to the Minnesota Constitution, increasing expansion momentum in the state's 14th-Amendment-adjacent rights landscape.", url: "https://www.revisor.mn.gov/bills/94/2025/0/SF/473/" },
            { title: "Hussen v. Noem et al.", type: "Court Filing", status: "Class action filed", topic: "Equal Protection", direction: "challenged", date: "2026-01-15", weight: 73, sourceName: "ACLU of Minnesota", region: "Hennepin County / District of Minnesota", explanation: "The complaint alleges racial profiling, unlawful seizures, and equal-protection violations against Minnesotans, making Minnesota one of the more active challenge environments in the current seed set.", url: "https://www.aclu-mn.org/cases/hussen-v-noem/" }
          ]
        },
        "privileges-immunities": {
          summary: "Privileges or immunities is not a top Minnesota driver in the current seed.",
          hotspotCounty: "Statewide",
          hotspotDistrict: "Statewide constitutional context",
          confidence: 0.39,
          monitoringNote: "This clause remains historically meaningful but not operationally central here.",
          estimates: { limited: 8, expanded: 12, challenged: 14 },
          stats: [
            { label: "Tracked privileges-or-immunities records", thenLabel: "Earlier seed view", thenValue: "0", nowLabel: "Current seed view", nowValue: "0", note: "The current Minnesota sample does not directly activate this clause." }
          ],
          news: [
            { headline: "Minnesota's visible 14th Amendment energy remains focused on equality", angle: "Modern state-level attention usually runs through equal protection and procedure rather than privileges or immunities.", relevance: "This is a contextual clause, not a lead one here.", url: "https://www.law.cornell.edu/constitution/amendmentxiv" }
          ],
          documents: []
        }
      }
    },
    {
      id: "pa",
      name: "Pennsylvania",
      clauseData: {
        citizenship: {
          summary: "Citizenship is not the lead Pennsylvania clause in this current seed.",
          hotspotCounty: "Statewide",
          hotspotDistrict: "Statewide constitutional context",
          confidence: 0.46,
          monitoringNote: "Pennsylvania's stronger visible movement is elsewhere in the amendment.",
          estimates: { limited: 13, expanded: 18, challenged: 22 },
          stats: [
            { label: "Citizenship-specific seeded records", thenLabel: "Earlier seed view", thenValue: "0", nowLabel: "Current seed view", nowValue: "0", note: "No direct Pennsylvania citizenship-clause item is seeded right now." }
          ],
          news: [
            { headline: "National citizenship debates still matter for state monitoring even when the state sample is quiet", angle: "The clause remains important constitutionally, even if this Pennsylvania seed set is not centered on it.", relevance: "This is contextual rather than a current state hotspot.", url: "https://www.law.cornell.edu/constitution/amendmentxiv" }
          ],
          documents: []
        },
        "due-process": {
          summary: "Due process appears in Pennsylvania as a supporting clause, but not as the top visible question in this seed.",
          hotspotCounty: "Philadelphia County",
          hotspotDistrict: "Pennsylvania courts and agency process context",
          confidence: 0.57,
          monitoringNote: "Additional agency and criminal-procedure cases could strengthen this clause later.",
          estimates: { limited: 20, expanded: 27, challenged: 35 },
          stats: [
            { label: "Tracked due-process dispute intensity", thenLabel: "Earlier snapshot", thenValue: "Low", nowLabel: "Current snapshot", nowValue: "Moderate", note: "Process issues are present, but equal protection is still the stronger public-facing signal in this seed." }
          ],
          news: [
            { headline: "Pennsylvania fairness and review disputes could deepen the due-process story later", angle: "As more administrative or criminal-procedure conflicts are added, due process may become more visible.", relevance: "This is a watch item rather than the lead clause today.", url: "https://law.justia.com/cases/pennsylvania/superior-court/2025/2271-eda-2023.html" }
          ],
          documents: []
        },
        "equal-protection": {
          summary: "Pennsylvania shows moderate equal-protection activity, driven by a recent firearms-related ruling and a pending equality amendment proposal.",
          hotspotCounty: "Philadelphia County",
          hotspotDistrict: "Pennsylvania Superior Court / statewide constitutional amendment debate",
          confidence: 0.68,
          monitoringNote: "Pennsylvania's score is more tentative because the current seed set is smaller and split between judicial and legislative signals.",
          estimates: { limited: 28, expanded: 49, challenged: 61 },
          stats: [
            { label: "Visible constitutional signal intensity", thenLabel: "2015 baseline", thenValue: "Low", nowLabel: "2026 seeded dashboard", nowValue: "Moderate", note: "The state now has both a meaningful court decision and an amendment proposal in the same general equality area." },
            { label: "Tracked dispute types", thenLabel: "Earlier snapshot", thenValue: "Primarily litigation", nowLabel: "Current snapshot", nowValue: "Litigation + amendment debate", note: "That mix makes Pennsylvania more dynamic than its raw score alone suggests." }
          ],
          news: [
            { headline: "Pennsylvania equality debates could span firearms access, sex-equality language, and state constitutional reform", angle: "Coverage may focus on whether courts and lawmakers are moving toward broader equality guarantees or more fragmented rights debates.", relevance: "This aligns with the state's moderate challenge profile and slower expansion momentum.", url: "https://www.legis.state.pa.us/cfdocs/billinfo/bill_history.cfm?bn=388&body=S&sind=0&syear=2025&type=B" }
          ],
          documents: [
            { title: "Commonwealth v. Sumpter", type: "Court Ruling", status: "Pennsylvania Superior Court opinion", topic: "Equal Protection", direction: "expanded", date: "2025-06-23", weight: 78, sourceName: "Justia Pennsylvania case law", region: "Philadelphia County", explanation: "The court held Philadelphia's licensing rule unconstitutional as applied under the Equal Protection Clause of the Fourteenth Amendment, making this one of the stronger expansion-oriented judicial signals in Pennsylvania.", url: "https://law.justia.com/cases/pennsylvania/superior-court/2025/2271-eda-2023.html" },
            { title: "Senate Bill 388", type: "Legislation", status: "Referred to State Government Committee", topic: "Equal Protection", direction: "challenged", date: "2025-03-06", weight: 56, sourceName: "Pennsylvania General Assembly", region: "Statewide", explanation: "This joint resolution would amend the Pennsylvania Constitution to strengthen sex-equality language. Because it has only been referred to committee, it currently functions more as a signal of active constitutional contest and potential expansion than as settled law.", url: "https://www.legis.state.pa.us/cfdocs/billinfo/bill_history.cfm?bn=388&body=S&sind=0&syear=2025&type=B" }
          ]
        },
        "privileges-immunities": {
          summary: "Privileges or immunities is not Pennsylvania's leading active clause in the current dataset.",
          hotspotCounty: "Statewide",
          hotspotDistrict: "Statewide constitutional context",
          confidence: 0.41,
          monitoringNote: "The clause stays mostly contextual in this MVP.",
          estimates: { limited: 9, expanded: 13, challenged: 16 },
          stats: [
            { label: "Tracked privileges-or-immunities records", thenLabel: "Earlier seed view", thenValue: "0", nowLabel: "Current seed view", nowValue: "0", note: "No seeded Pennsylvania document currently activates this clause directly." }
          ],
          news: [
            { headline: "Pennsylvania's practical 14th Amendment monitoring still runs through equality and process", angle: "Modern constitutional disputes at the state level more often use equal protection and due process frameworks.", relevance: "This keeps privileges or immunities in the picture without overstating activity.", url: "https://www.law.cornell.edu/constitution/amendmentxiv" }
          ],
          documents: []
        }
      }
    },
    {
      id: "tx",
      name: "Texas",
      clauseData: {
        citizenship: {
          summary: "Citizenship is not the lead visible Texas clause in this state sample, though national birthright debates can still shape attention.",
          hotspotCounty: "Statewide",
          hotspotDistrict: "Statewide constitutional context",
          confidence: 0.52,
          monitoringNote: "Citizenship matters structurally, but the strongest current Texas seed signal sits with equal protection.",
          estimates: { limited: 24, expanded: 19, challenged: 33 },
          stats: [
            { label: "Citizenship-specific seed intensity", thenLabel: "Historic baseline", thenValue: "Low", nowLabel: "Current seed view", nowValue: "Low", note: "Texas attention in this MVP is driven more by education access and classification disputes." }
          ],
          news: [
            { headline: "Birthright citizenship debates could still influence Texas constitutional coverage", angle: "Even if this seed set is focused elsewhere, the clause remains politically and legally salient in Texas conversations.", relevance: "This is a contextual clause rather than the lead one in the current state record.", url: "https://www.law.cornell.edu/constitution/amendmentxiv" }
          ],
          documents: []
        },
        "due-process": {
          summary: "Due process appears in Texas as a supporting clause but is overshadowed by stronger equal-protection pressures in this seed set.",
          hotspotCounty: "Harris County",
          hotspotDistrict: "Statewide procedural and classification disputes",
          confidence: 0.59,
          monitoringNote: "Future procedural-enforcement disputes could lift this clause higher.",
          estimates: { limited: 29, expanded: 22, challenged: 41 },
          stats: [
            { label: "Visible due-process friction", thenLabel: "Historic baseline", thenValue: "Moderate", nowLabel: "Current seed view", nowValue: "Moderate", note: "Texas process disputes are present, but equal protection remains the stronger interpretive frame in the current sample." }
          ],
          news: [
            { headline: "Texas enforcement and access disputes can also evolve into due-process fights", angle: "Questions about hearings, review, and procedural fairness often follow broader rights controversies.", relevance: "This makes due process an important secondary clause to watch.", url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/HB05135I.htm" }
          ],
          documents: []
        },
        "equal-protection": {
          summary: "Texas remains the highest-pressure equal-protection state in the current seed because foundational education precedent now sits beside modern legislative friction over classification and treatment.",
          hotspotCounty: "Harris County",
          hotspotDistrict: "Texas Legislature / statewide education and classification disputes",
          confidence: 0.81,
          monitoringNote: "Texas leads on challenge risk because its recent legislative signal points toward fresh equal-protection contests on top of a major historic precedent.",
          estimates: { limited: 52, expanded: 38, challenged: 86 },
          stats: [
            { label: "Public-school access for undocumented children in the tracked rights story", thenLabel: "Before Plyler", thenValue: "At risk of exclusion", nowLabel: "Post-Plyler baseline", nowValue: "Protected by precedent", note: "This is a qualitative trend marker showing how a single 14th Amendment ruling changed educational access." },
            { label: "Current visible pressure on equal-protection disputes", thenLabel: "Historic baseline", thenValue: "Precedent-focused", nowLabel: "2026 seeded dashboard", nowValue: "Precedent + new legislative friction", note: "Texas looks riskier today because the state has both foundational case law and fresh policy disputes that could test it." }
          ],
          news: [
            { headline: "Texas could see renewed equal-protection battles over education, discrimination policy, and state classification rules", angle: "Coverage may connect historic education-rights precedent with modern fights over diversity policy and access to public institutions.", relevance: "This matches Texas's top challenge-risk score in the dashboard.", url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/HB05135I.htm" }
          ],
          documents: [
            { title: "Plyler v. Doe", type: "Court Ruling", status: "U.S. Supreme Court decision", topic: "Equal Protection", direction: "expanded", date: "1982-06-15", weight: 82, sourceName: "Legal Information Institute", region: "Statewide Texas impact", explanation: "The Supreme Court invalidated a Texas law that denied public-education funding and access to undocumented schoolchildren, making this a foundational 14th Amendment expansion signal tied directly to Texas.", url: "https://www.law.cornell.edu/wex/plyler_v._doe" },
            { title: "HB 5135 Texas Antidiscrimination Act", type: "Legislation", status: "Introduced and referred to State Affairs", topic: "Equal Protection", direction: "challenged", date: "2025-04-07", weight: 77, sourceName: "Texas Legislature Online", region: "Statewide", explanation: "The bill frames itself as an antidiscrimination measure, but its restrictions on diversity and government decisionmaking are likely to generate substantial equal-protection disputes, keeping Texas at the top of the challenge-risk ranking.", url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/HB05135I.htm" }
          ]
        },
        "privileges-immunities": {
          summary: "Privileges or immunities is not a visible lead driver in the Texas seed data.",
          hotspotCounty: "Statewide",
          hotspotDistrict: "Statewide constitutional context",
          confidence: 0.43,
          monitoringNote: "The clause remains part of constitutional history more than a top Texas current-event tracker here.",
          estimates: { limited: 11, expanded: 14, challenged: 17 },
          stats: [
            { label: "Tracked privileges-or-immunities records", thenLabel: "Earlier seed view", thenValue: "0", nowLabel: "Current seed view", nowValue: "0", note: "No direct seeded record uses this clause as the lead frame." }
          ],
          news: [
            { headline: "Texas's current 14th Amendment pressure is still being expressed through equality disputes", angle: "Most visible current battles are not framed through privileges or immunities.", relevance: "This keeps the clause contextual but secondary.", url: "https://www.law.cornell.edu/constitution/amendmentxiv" }
          ],
          documents: []
        }
      }
    }
  ]
};
