/* ==========================================================================
   PRISM DATA REPOSITORY (Scenarios, Personality Pools, and Battery)
   ========================================================================== */

const DEPT_CONTEXT_CLASS = {
 "Production":"operational", "Maintenance":"operational", "Engineering":"professional",
 "Quality":"operational", "Warehouse":"operational", "Planning":"professional",
 "Supply Chain":"professional", "Procurement":"professional", "Utilities":"operational",
 "HR":"professional", "Finance":"professional", "IT":"professional",
 "Commercial":"professional", "Administration":"operational",
 "U&M":"operational", "CPP Metalizer":"operational", "Recycling":"operational", 
 "Powerhouse":"operational", "Tape Line":"operational", "Electrical":"operational", 
 "CPP Line":"operational", "Primary Slitter-05":"operational", "OPP Slitter":"operational",
 "Film Line 03":"operational", "Primary Slitter-03":"operational", "Film Line 04":"operational",
 "CPP Slitter":"operational", "Film Line 05":"operational", "OPP Silos":"operational",
 "Manufacturing BOPP":"operational", "CPP Silos":"operational", "Stores":"operational",
 "Fork Lifter":"operational", "Dispatch & Logistics":"operational",
 "Quality Control":"operational", "Quality Assurance":"operational",
 "Business Controller":"professional", "Regional Sales Office North":"professional",
 "Regional Sales Office Center":"professional", "Regional Sales Office South":"professional",
 "Administration PQ":"operational", "Administration Lhr":"operational", "Security":"operational",
 "Accounts":"professional", "Credit Administration":"professional", "Sales Support":"professional",
 "Procurement-Raw Material":"professional", "Procurement-Indirect":"professional", "Procurement-MRO":"professional"
};

const ANCHOR_BANK = {
  // CORE LEADERSHIP
  "LS1": { 
    "Production": { "E1": [{ id: "ITM", esg: 1, text: "A newly assigned machine operator is repeatedly feeding packaging material backwards, causing minor jams." }], "M4": [{ id: "ITM", esg: 1, text: "A newly acquired manufacturing facility is refusing to adopt Tripack's safety standards, threatening a walkout." }] },
    "Maintenance": { "E1": [{ id: "ITM", esg: 1, text: "You are dispatched to repair a conveyor belt. The supervisor demands you bypass a safety interlock to finish 10 minutes faster." }], "M4": [{ id: "ITM", esg: 1, text: "Capex budgets have been slashed by 20%. You must mandate a transition to predictive maintenance despite severe resistance." }] },
    "Engineering": { "E1": [{ id: "ITM", esg: 1, text: "A junior draftsman has submitted a CAD drawing with obvious tolerance errors just hours before fabrication." }], "M4": [{ id: "ITM", esg: 1, text: "A multi-million dollar plant expansion is stalled because engineering leads refuse to agree on the structural strategy." }] },
    "Quality": { "E1": [{ id: "ITM", esg: 1, text: "A floor manager is pressuring you to sign off on a batch of film that is marginally out of optical clarity spec, arguing the customer 'won't notice'." }], "M4": [{ id: "ITM", esg: 1, text: "A critical flaw in a major product line has been discovered after distribution. You must initiate and command a nationwide product recall, overriding commercial objections." }] },
    "Warehouse": { "E1": [{ id: "ITM", esg: 1, text: "A forklift driver is moving pallets in an unapproved zone to save time, creating a blind-spot hazard for pedestrians." }], "M4": [{ id: "ITM", esg: 1, text: "A severe supply chain bottleneck has led to warehouse overcapacity. You must dictate a total embargo on inbound non-critical raw materials, overriding procurement's contracts." }] },
    "Planning": { "E1": [{ id: "ITM", esg: 1, text: "A production supervisor wants you to change the shift schedule mid-day because they prefer to run a different product first, which will delay a client order." }], "M4": [{ id: "ITM", esg: 1, text: "Executive leadership wants a 40% increase in output for a new product launch, but current capacity models show this is impossible without burning out the workforce and violating maintenance schedules." }] },
    "Supply Chain": { "E1": [{ id: "ITM", esg: 1, text: "A logistics driver has arrived two hours late and is demanding to be loaded immediately, blocking the loading bay for scheduled trucks." }], "M4": [{ id: "ITM", esg: 1, text: "Geopolitical instability has severed your primary supply route for core resins. You must direct the immediate restructuring of the global supply network at a massive premium." }] },
    "Procurement": { "E1": [{ id: "ITM", esg: 1, text: "An internal stakeholder has purchased equipment on their personal credit card and expects you to force a retroactive PO through the system." }], "M4": [{ id: "ITM", esg: 1, text: "You discover that a strategic supplier, responsible for 60% of your materials, is facing imminent insolvency. You must dictate emergency sourcing protocols across the enterprise." }] },
    "Utilities": { "E1": [{ id: "ITM", esg: 1, text: "A contractor is attempting to perform hot-work near the boiler room without the proper signed permits." }], "M4": [{ id: "ITM", esg: 1, text: "A catastrophic failure in the primary power grid threatens the entire manufacturing complex. You must take command of the emergency load-shedding protocol, deciding which lines suffer total loss." }] },
    "HR": { "E1": [{ id: "ITM", esg: 1, text: "A candidate at the reception desk is demanding immediate feedback on an interview they had yesterday." }], "M4": [{ id: "ITM", esg: 1, text: "The board has mandated an immediate 15% headcount reduction. You must direct the HR leadership team to execute this." }] },
    "Finance": { "E1": [{ id: "ITM", esg: 1, text: "A sales executive has submitted an expense report with missing receipts and is demanding you approve it." }], "M4": [{ id: "ITM", esg: 1, text: "The company is facing a sudden liquidity crisis. You must immediately halt all non-essential capex across every department." }] },
    "IT": { "E1": [{ id: "ITM", esg: 1, text: "A user is insisting you give them local administrator rights to install an unapproved software tool, claiming their manager authorized it." }], "M4": [{ id: "ITM", esg: 1, text: "A ransomware attack has breached the perimeter. You must make the immediate call to sever the core ERP system from the network, halting all commercial and production operations globally." }] },
    "Commercial": { "E1": [{ id: "ITM", esg: 1, text: "A client is demanding a 5% discount on an order that has already been invoiced, threatening to cancel future orders if you don't adjust the system." }], "M4": [{ id: "ITM", esg: 1, text: "Your largest competitor has just dropped prices by 30% to buy market share. You must direct the national sales force on how to respond without triggering a race to the bottom." }] },
    "Administration": { "E1": [{ id: "ITM", esg: 1, text: "Two employees are arguing loudly in the cafeteria over seating arrangements, disrupting other staff." }], "M4": [{ id: "ITM", esg: 1, text: "A severe security breach has occurred at corporate headquarters. You must direct an immediate site lockdown and coordinate with external law enforcement." }] }
  },
  "LS2": { 
    "Production": { "E1": [{ id: "ITM", esg: 1, text: "Your shift is behind target. A colleague suggests skipping the mandatory 15-minute machine cleaning cycle to catch up." }], "M4": [{ id: "ITM", esg: 1, text: "To secure a massive contract, the executive team suggests fast-tracking a product without completing standard testing." }] },
    "Maintenance": { "E1": [{ id: "ITM", esg: 1, text: "You need a replacement valve immediately, but the storekeeper is demanding a signed requisition form first." }], "M4": [{ id: "ITM", esg: 1, text: "An internal audit reveals that regional plants have been quietly bypassing Lockout-Tagout procedures." }] },
    "Engineering": { "E1": [{ id: "ITM", esg: 1, text: "A vendor has delivered a component that doesn't exactly match the approved blueprint, but the installation contractor says it will work just fine." }], "M4": [{ id: "ITM", esg: 1, text: "A multi-million dollar automated line is ready to launch, but the final safety validation signatures from external regulators are delayed by three weeks." }] },
    "Quality": { "E1": [{ id: "ITM", esg: 1, text: "A floor manager is pressuring you to sign off on a batch of film that is marginally out of optical clarity spec, arguing the customer 'won't notice'." }], "M4": [{ id: "ITM", esg: 1, text: "The CEO wants you to suppress a negative quality audit finding that would jeopardize a critical upcoming merger and acquisition deal." }] },
    "Warehouse": { "E1": [{ id: "ITM", esg: 1, text: "A truck driver is in a rush and wants you to load his vehicle before he has provided the required transport manifest." }], "M4": [{ id: "ITM", esg: 1, text: "You discover widespread, systemic inventory discrepancies across all national distribution centers. You must freeze all outgoing dispatches to force a hard reconciliation." }] },
    "Planning": { "E1": [{ id: "ITM", esg: 1, text: "A sales rep asks you to squeeze in an urgent 'favor' order without logging it through the formal demand planning system." }], "M4": [{ id: "ITM", esg: 1, text: "You must enforce strict Sales & Operations Planning (S&OP) rigor across five factory directors who prefer to run their plants as independent, undocumented fiefdoms." }] },
    "Supply Chain": { "E1": [{ id: "ITM", esg: 1, text: "A courier has arrived to pick up a parcel but does not have the correct booking reference number required by security." }], "M4": [{ id: "ITM", esg: 1, text: "A global customs compliance audit failure has put the company at risk of heavy fines. You must halt all cross-border shipments until every route is recertified." }] },
    "Procurement": { "E1": [{ id: "ITM", esg: 1, text: "An internal stakeholder has purchased equipment on their personal credit card and expects you to force a retroactive PO through the system." }], "M4": [{ id: "ITM", esg: 1, text: "You must mandate strict vendor onboarding compliance across $500M of spend, freezing accounts of historically favored vendors who refuse to submit anti-bribery paperwork." }] },
    "Utilities": { "E1": [{ id: "ITM", esg: 1, text: "A contractor is attempting to perform hot-work welding near the boiler room without the proper signed safety permits." }], "M4": [{ id: "ITM", esg: 1, text: "To meet new sustainability regulations, you must mandate ISO 50001 energy compliance, forcing every department to document and justify their power usage." }] },
    "HR": { "E1": [{ id: "ITM", esg: 1, text: "A department head wants to urgently onboard a new contractor tomorrow, but their background check hasn't cleared." }], "M4": [{ id: "ITM", esg: 1, text: "The CEO wants to terminate a toxic executive immediately, bypassing the legally mandated PIP process entirely." }] },
    "Finance": { "E1": [{ id: "ITM", esg: 1, text: "A senior manager has submitted an expense report with missing receipts and is aggressively demanding you approve it before the payroll cutoff." }], "M4": [{ id: "ITM", esg: 1, text: "You discover severe compliance failures in a subsidiary's revenue recognition. You must force a public restatement of earnings, severely impacting share price." }] },
    "IT": { "E1": [{ id: "ITM", esg: 1, text: "A developer wants to bypass the formal Change Control process to push a 'quick fix' to the live production server." }], "M4": [{ id: "ITM", esg: 1, text: "You must enforce a Zero-Trust cybersecurity architecture globally, stripping local admin rights from executive leadership who view the policy as an insult." }] },
    "Commercial": { "E1": [{ id: "ITM", esg: 1, text: "A sales rep has verbally promised a client a non-standard rebate that violates the company's approved pricing matrix." }], "M4": [{ id: "ITM", esg: 1, text: "You are restructuring the entire national distributor contract framework to align with new anti-trust laws, invalidating dozens of lucrative handshake agreements." }] },
    "Administration": { "E1": [{ id: "ITM", esg: 1, text: "An employee asks you to unlock the server room for them to fetch a box, but they are not on the authorized access list." }], "M4": [{ id: "ITM", esg: 1, text: "You must overhaul corporate physical security protocols across all sites, introducing mandatory bag searches and badge sweeps that the workforce is protesting." }] }
  },
  "LS3": { // Developmental Mentoring (Fully Graded)
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "A new team member asks you to clear a machine fault for the third time today because they keep forgetting the sequence." }],
      "E2": [{ id: "ITM", esg: 1, text: "A junior operator is struggling to meet their hourly quota. It would be faster for you to just take over their station." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift is heavily reliant on one veteran operator. You need to convince them to spend time training the newer staff." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your shift supervisors are excellent at firefighting but lack the skills to proactively analyse root causes. You need to upskill them." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must build a formal talent pipeline across multiple plants because your current factory managers are hoarding their best talent." }],
      "M4": [{ id: "ITM", esg: 1, text: "Your plant managers are consistently hitting output targets but failing to groom successors, creating a critical leadership vacuum if any of them leave." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "A junior technician is struggling to align a motor correctly and is asking you to just do it for them so they can go to break." }],
      "E2": [{ id: "ITM", esg: 1, text: "An apprentice makes a minor mistake on a pump rebuild. You have to decide whether to fix it silently or make them redo it." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your team relies on external contractors for PLC troubleshooting because your internal technicians lack the confidence to learn the software." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your maintenance planners are acting like dispatchers rather than engineers. You need to elevate their diagnostic capabilities." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional leads are resisting a new cross-training initiative because they don't want to spare their technicians for classroom hours." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must upskill an aging, traditional mechanical workforce to handle a completely new generation of computerized, robotic manufacturing equipment." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "A new draftsman is struggling with a feature in the updated CAD software and is reverting to slower, outdated methods." }],
      "E2": [{ id: "ITM", esg: 1, text: "A junior engineer brings you a flawed design calculation. It would take 5 minutes to fix it yourself, or an hour to walk them through the math." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your project team is excellent at execution but terrible at documentation, and they are resisting your efforts to teach them proper archiving." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your senior engineers are highly technical but lack the soft skills required to successfully manage the contractors on site." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must implement a formalized mentorship program across the national engineering division to prevent a massive loss of institutional knowledge." }],
      "M4": [{ id: "ITM", esg: 1, text: "You need to transition a team of traditional, waterfall-style engineers into an Agile project management mindset to cut time-to-market in half." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "A lab analyst keeps asking you to verify their titration calculations because they lack confidence in their own math." }],
      "E2": [{ id: "ITM", esg: 1, text: "A new inspector is too timid to confront production about a bad batch. You need to build their assertiveness." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift QA leads are good at spotting defects but don't know how to teach the production operators how to prevent them." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your QA managers are functioning strictly as auditors. You need to develop them into proactive quality consultants for the plant." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors are pushing back on a centralized training matrix, claiming their local training methods are sufficient." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must evolve the quality department from acting as 'police' who catch errors, into mentors who teach the production teams how to own quality at the source." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "A new forklift operator keeps getting lost and picking from the wrong aisles despite having the zone map." }],
      "E2": [{ id: "ITM", esg: 1, text: "A junior dispatcher is struggling to balance the load weights correctly. You must decide how best to correct their technique." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift leaders are ignoring the new digital scanners and letting their teams use paper because they don't want to spend time training them." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your warehouse managers are excellent at moving boxes but lack the analytical skills to optimize inventory flow." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must build a leadership development pipeline for the national logistics network, which currently has zero succession planning." }],
      "M4": [{ id: "ITM", esg: 1, text: "You are implementing a highly complex Warehouse Management System (WMS) and must develop floor supervisors into data-driven logistics managers." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "A planning clerk is manually typing data into Excel because they don't know how to run the automated ERP report." }],
      "E2": [{ id: "ITM", esg: 1, text: "A junior scheduler keeps making the same minor routing error. You need to address the root cause of their misunderstanding." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your team is highly dependent on you to resolve disputes with Sales. You need to coach them to handle these negotiations themselves." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your planning managers are struggling to transition from purely tactical weekly scheduling to strategic, long-term capacity modelling." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional planning heads are resisting advanced analytics training because they prefer to rely on their historical 'gut feeling'." }],
      "M4": [{ id: "ITM", esg: 1, text: "You need to build predictive analytics capabilities within a traditional scheduling team that relies heavily on historical habits." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "A logistics coordinator is confused by a new set of international customs forms and keeps asking you to fill them out." }],
      "E2": [{ id: "ITM", esg: 1, text: "A junior analyst is struggling to interpret a freight-cost variance report and is asking for the answer rather than the method." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift coordinators are escalating every minor vendor dispute to you rather than negotiating a resolution themselves." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your supply chain managers excel at expediting emergencies but lack the strategic foresight to design resilient routing networks." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must establish a global supply chain academy to standardize the highly fragmented skillsets across your regional teams." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must develop strategic resilience thinking within a team of tactical supply chain staff who only know how to expedite urgent, day-to-day crises." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "A junior buyer is intimidated by an aggressive vendor and asks you to take over the negotiation call." }],
      "E2": [{ id: "ITM", esg: 1, text: "An assistant is struggling to properly evaluate a multi-tiered vendor bid and keeps focusing only on the lowest bottom-line price." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your buyers are good at executing POs but lack the confidence to challenge internal stakeholders on their costly specifications." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your category managers are struggling to build strategic vendor partnerships, preferring instead to simply beat suppliers down on price." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must drag a decentralized, highly tactical regional purchasing network into adopting advanced, global strategic sourcing methodologies." }],
      "M4": [{ id: "ITM", esg: 1, text: "You are shifting the entire procurement function from transactional, price-based buying to establishing strategic, long-term vendor innovation partnerships." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "An operator is unsure how to properly log the daily boiler efficiency metrics and is leaving the logbook blank." }],
      "E2": [{ id: "ITM", esg: 1, text: "A new technician is nervous about initiating the chiller startup sequence and wants you to do it while they watch." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift leads are excellent at maintaining pressure but completely ignore energy-efficiency protocols because they don't understand the math." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your plant utility managers are highly reactive and need to be coached on how to design and execute long-term sustainability projects." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors are resisting corporate sustainability training programs, claiming they take too much time away from the plant floor." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must transform a team of traditional utility operators into a Center of Excellence for sustainable energy engineering to meet corporate carbon targets." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "A junior HR coordinator has written an offer letter with incorrect salary banding. It is quicker for you to just fix it before sending." }],
      "E2": [{ id: "ITM", esg: 1, text: "A recruitment assistant is struggling to push back on a hiring manager who is making unreasonable demands." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your HR admins are escalating every minor employee relations query to you rather than consulting the policy manual themselves." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your HR Business Partners are acting like administrative order-takers rather than strategic advisors to their department heads." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional HR leaders are struggling to adapt to a new, highly analytical talent management framework, preferring intuition-based hiring." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must transform a purely administrative HR department into strategic Business Partners, requiring a massive capability shift across 40 senior staff members." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "An accounts payable clerk repeatedly miscodes invoices to the wrong cost center, creating extra work for you at month-end." }],
      "E2": [{ id: "ITM", esg: 1, text: "A junior analyst is struggling to use pivot tables efficiently, causing their daily reports to always be an hour late." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your team of clerks relies entirely on you to resolve vendor disputes, refusing to pick up the phone themselves." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your finance managers are great at generating month-end reports, but terrible at explaining the 'why' behind the numbers to operations." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional controllers are highly resistant to learning the new predictive analytics software, clinging to their legacy Excel models." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must develop deep commercial and operational acumen in a Financial Planning & Analysis (FP&A) team that currently only knows how to report historical numbers." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "A helpdesk technician keeps escalating basic Active Directory password resets to you because they are afraid of making a mistake." }],
      "E2": [{ id: "ITM", esg: 1, text: "A junior developer has written sloppy code. It would be infinitely faster for you to rewrite it than to explain the architecture flaws to them." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your infrastructure team is highly technically skilled but lacks the soft skills to communicate effectively with frustrated users." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your IT managers are functioning as reactive firefighters rather than proactive technology strategists for their assigned business units." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional IT directors are struggling to transition their teams from managing on-premise hardware to supporting cloud-based ecosystems." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must mentor your siloed IT infrastructure leads into becoming cross-functional Digital Transformation Directors." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "A junior sales rep is struggling to close a hesitant client and asks you to step in and finalize the deal for them." }],
      "E2": [{ id: "ITM", esg: 1, text: "A sales assistant is terrified of cold-calling and is spending all their time 'researching' leads instead of picking up the phone." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your account executives are great at maintaining relationships but lack the negotiation skills to successfully push through an annual price increase." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your sales managers are micromanaging their reps' daily activities instead of coaching them on long-term pipeline strategy." }],
      "M2": [{ id: "ITM", esg: 1, text: "National directors are struggling to adopt a data-driven CRM culture, preferring to manage their territories through personal relationships and intuition." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must upskill a national salesforce of traditional 'order-takers' into consultative solution-sellers to defend market share against a new premium competitor." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "A receptionist is overwhelmed by a new visitor management system and keeps using the old paper logbook." }],
      "E2": [{ id: "ITM", esg: 1, text: "A junior admin assistant is struggling to format executive board packs correctly, causing embarrassing typos in the final printouts." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your facilities team is highly reactive, waiting for things to break before fixing them. You need to teach them preventative facility management." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your administration managers lack the vendor-negotiation skills required to push back on escalating facility-management contracts." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional office heads are resisting a centralized procurement system for office supplies, insisting their local, inefficient methods are better." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must elevate the Facilities Management team to execute a complex Corporate Real Estate strategy, requiring them to manage multi-million dollar property portfolios." }] 
    }
  },

  "LS4": { // Participative Engagement (Fully Graded)
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "You need to finalize the lunch break schedule for your packing line to ensure the machines never stop running." }],
      "E2": [{ id: "ITM", esg: 1, text: "You are tasked with redesigning the 5S tool-shadow board at your station and want to ensure the other operators actually use it." }],
      "E3": [{ id: "ITM", esg: 1, text: "You need to select a new shift-handover protocol that will affect how the morning and night crews communicate." }],
      "M1": [{ id: "ITM", esg: 1, text: "You are drafting a new overtime allocation policy and know the shift supervisors will rebel if they aren't consulted." }],
      "M2": [{ id: "ITM", esg: 1, text: "You are selecting a new automated packaging vendor, which will drastically alter the workflows of three different production departments." }],
      "M4": [{ id: "ITM", esg: 1, text: "You are redesigning the entire factory floor layout. This will fundamentally change how 500 operators and 5 departments interact daily." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "You need to select which brand of hand tools to order for the shop floor's shared tool shadow-board." }],
      "E2": [{ id: "ITM", esg: 1, text: "You are organizing the spare parts cage and want to make sure the layout makes sense to the mechanics who use it daily." }],
      "E3": [{ id: "ITM", esg: 1, text: "You need to finalize the holiday on-call roster for the maintenance team without causing resentment among the senior techs." }],
      "M1": [{ id: "ITM", esg: 1, text: "You are restructuring the preventative maintenance (PM) schedule, which will require production managers to surrender more machine time." }],
      "M2": [{ id: "ITM", esg: 1, text: "You are selecting a new global Computerized Maintenance Management System (CMMS) that every regional plant will be forced to use." }],
      "M4": [{ id: "ITM", esg: 1, text: "You are shifting the company from a decentralized, plant-by-plant maintenance model to a highly centralized shared-services structure." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "You are choosing the layout and ergonomic setup for a new CAD workstation area in the engineering office." }],
      "E2": [{ id: "ITM", esg: 1, text: "You need to establish a new file-naming convention for the drafting team to prevent version-control errors." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are selecting a new 3D rendering software that the entire design team will have to learn and use daily." }],
      "M1": [{ id: "ITM", esg: 1, text: "You are designing the workflow for how Engineering hands off blueprints to the Fabrication department to reduce errors." }],
      "M2": [{ id: "ITM", esg: 1, text: "You are creating a standardized capital-expenditure (CapEx) approval matrix that will affect how every regional director requests engineering funds." }],
      "M4": [{ id: "ITM", esg: 1, text: "You are selecting the core automation and robotics technology that will define Tripack's manufacturing capability for the next 15 years." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "You are updating the daily housekeeping and cleaning checklist for the Quality Control laboratory." }],
      "E2": [{ id: "ITM", esg: 1, text: "You need to design a new color-coding system for quarantined pallets that both the lab and the forklift drivers can easily understand." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are implementing a new digital tablet system for floor inspections, replacing the paper clipboards the operators love." }],
      "M1": [{ id: "ITM", esg: 1, text: "You are overhauling the root-cause analysis (RCA) reporting process, which will require significant extra effort from production supervisors." }],
      "M2": [{ id: "ITM", esg: 1, text: "You are standardizing the supplier quality audit framework across five different business units who all currently use their own methods." }],
      "M4": [{ id: "ITM", esg: 1, text: "You are completely overhauling the company's Quality Management System (QMS), which will introduce strict new reporting requirements for every plant manager." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "You want to rearrange the outbound staging area to make forklift movement slightly more efficient." }],
      "E2": [{ id: "ITM", esg: 1, text: "You need to assign new battery-charging protocols for the electric pallet jacks to ensure they don't die mid-shift." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are redesigning the shift-handover process between the morning pickers and the evening loading crew to prevent missed shipments." }],
      "M1": [{ id: "ITM", esg: 1, text: "You are altering the cut-off times for final dispatch, which will require Sales to change how they promise deliveries to clients." }],
      "M2": [{ id: "ITM", esg: 1, text: "You are centralizing the inventory control function, removing local cycle-count autonomy from the regional warehouse managers." }],
      "M4": [{ id: "ITM", esg: 1, text: "You are implementing a fully automated AS/RS warehousing system that will radically change job roles and render manual picking obsolete." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "You need to adjust the upcoming weekend overtime roster to cover a sudden spike in a single product's demand." }],
      "E2": [{ id: "ITM", esg: 1, text: "You are updating the Excel template that the sales reps use to submit their weekly volume forecasts." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are proposing a change to the minimum-order-quantity (MOQ) rules, which will directly impact how Production schedules their runs." }],
      "M1": [{ id: "ITM", esg: 1, text: "You are redesigning the monthly S&OP meeting agenda to force Commercial and Operations to actually agree on a unified number." }],
      "M2": [{ id: "ITM", esg: 1, text: "You are standardizing the global demand-planning software, forcing regional directors to abandon their customized local spreadsheets." }],
      "M4": [{ id: "ITM", esg: 1, text: "You are moving the enterprise from monthly to weekly S&OP cycles, requiring sweeping behavioral changes from Sales, Finance, and Production." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "You need to choose between two local courier services for routine daily document and parcel deliveries." }],
      "E2": [{ id: "ITM", esg: 1, text: "You are drafting a new protocol for how the logistics desk communicates container tracking numbers to the customer service team." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are establishing a new penalty framework for carriers who repeatedly miss their delivery windows at the dock." }],
      "M1": [{ id: "ITM", esg: 1, text: "You are overhauling the national freight-forwarding strategy, requiring deep alignment between Procurement and the warehouse directors." }],
      "M2": [{ id: "ITM", esg: 1, text: "You are selecting a new global 3PL partner, a decision that will deeply impact the daily operations of every regional logistics manager." }],
      "M4": [{ id: "ITM", esg: 1, text: "You are redesigning the global distribution footprint, which involves closing two regional hubs and heavily impacting local jobs and logistics routes." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "You are updating the standard list of approved office stationary and supplies that employees can order." }],
      "E2": [{ id: "ITM", esg: 1, text: "You are redesigning the internal Purchase Requisition (PR) form to capture more data from the engineering team." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are selecting a new primary supplier for safety PPE (gloves, goggles), which the entire factory floor will have to wear daily." }],
      "M1": [{ id: "ITM", esg: 1, text: "You are rewriting the corporate travel and expense policy, significantly tightening what managers are allowed to claim." }],
      "M2": [{ id: "ITM", esg: 1, text: "You are implementing a strict new e-procurement portal that will strip regional directors of their ability to use local, off-contract vendors." }],
      "M4": [{ id: "ITM", esg: 1, text: "You are consolidating 20 local packaging suppliers into a single, global vendor contract to save costs, deeply affecting local plant autonomy." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "You are adjusting the shift handover documentation protocol for the boiler room operators." }],
      "E2": [{ id: "ITM", esg: 1, text: "You are selecting a new brand of water-testing chemicals that the technicians will use multiple times a shift." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are designing a new load-shedding sequence that will determine which production lines get cut first during a power dip." }],
      "M1": [{ id: "ITM", esg: 1, text: "You are drafting a new, strict energy-conservation policy that will force production managers to alter their machine startup routines." }],
      "M2": [{ id: "ITM", esg: 1, text: "You are standardizing the environmental effluent reporting metrics across all sites, overriding the disparate methods currently used by plant heads." }],
      "M4": [{ id: "ITM", esg: 1, text: "You are deciding whether Tripack should build a $50M captive power plant or sign a 20-year commitment with the national energy grid." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "You are planning the agenda and location for the department's annual offsite team-building day." }],
      "E2": [{ id: "ITM", esg: 1, text: "You are redesigning the onboarding checklist that hiring managers must complete for new employees on their first day." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are selecting the new healthcare and benefits provider for the upcoming open-enrollment period." }],
      "M1": [{ id: "ITM", esg: 1, text: "You are drafting a new, highly restrictive remote-work and attendance policy that will affect every department head." }],
      "M2": [{ id: "ITM", esg: 1, text: "You are implementing a new global Applicant Tracking System (ATS) that will fundamentally change how regional directors hire staff." }],
      "M4": [{ id: "ITM", esg: 1, text: "You are redesigning the company-wide performance appraisal system and the executive bonus structure that ties to it." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "You are creating a new, standardized Excel template for employees to submit their monthly petty cash claims." }],
      "E2": [{ id: "ITM", esg: 1, text: "You are updating the month-end reconciliation checklist that the accounts payable team must follow." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are designing a new, stricter credit-check protocol that the Commercial team must use before onboarding new clients." }],
      "M1": [{ id: "ITM", esg: 1, text: "You are overhauling the departmental budgeting process, requiring operational managers to provide significantly more justification for CapEx." }],
      "M2": [{ id: "ITM", esg: 1, text: "You are selecting the new global ERP system that will replace the beloved legacy software currently used by all regional controllers." }],
      "M4": [{ id: "ITM", esg: 1, text: "You are implementing Zero-Based Budgeting (ZBB) across all divisions, requiring every Director to justify every dollar of spend from scratch." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "You are selecting the new standard monitor size and brand to issue to all incoming office staff." }],
      "E2": [{ id: "ITM", esg: 1, text: "You are redesigning the IT helpdesk ticketing portal to force users to categorize their own problems before submitting." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are drafting a new mobile-device security policy that will require all managers to install tracking software on their personal phones." }],
      "M1": [{ id: "ITM", esg: 1, text: "You are selecting a new corporate intranet platform that the Communications and HR teams will be forced to use daily." }],
      "M2": [{ id: "ITM", esg: 1, text: "You are revoking local administrative rights across the enterprise, a move that is highly unpopular with the regional engineering directors." }],
      "M4": [{ id: "ITM", esg: 1, text: "You are migrating the company's core infrastructure to a cloud-based model, fundamentally altering how data security and workflows operate." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "You are designing the layout and messaging for a new promotional flyer intended for local trade shows." }],
      "E2": [{ id: "ITM", esg: 1, text: "You are creating a new mandatory call-logging template that the junior sales reps must fill out after every client visit." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are designing a new pricing-discount matrix that will dictate exactly how much leeway account executives have during negotiations." }],
      "M1": [{ id: "ITM", esg: 1, text: "You are redrawing the regional sales territories, a move that will shift highly lucrative accounts between several frustrated managers." }],
      "M2": [{ id: "ITM", esg: 1, text: "You are selecting a new global CRM system that will force national directors to abandon their customized, localized tracking methods." }],
      "M4": [{ id: "ITM", esg: 1, text: "You are restructuring the national sales commission scheme, shifting incentives from pure volume to margin-based targets, which will heavily impact rep take-home pay." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "You need to choose a new catering vendor for the corporate headquarters' employee cafeteria." }],
      "E2": [{ id: "ITM", esg: 1, text: "You are redesigning the mail-sorting room layout to make it easier for the admin assistants to process inbound packages." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are drafting a new, strict clean-desk policy for the open-plan office that will frustrate employees accustomed to clutter." }],
      "M1": [{ id: "ITM", esg: 1, text: "You are selecting the contractor for a major office renovation, a decision that will displace three departments for six months." }],
      "M2": [{ id: "ITM", esg: 1, text: "You are standardizing facility management contracts nationally, firing several local vendors that regional directors have used for years." }],
      "M4": [{ id: "ITM", esg: 1, text: "You are managing the relocation of the corporate headquarters to a new city, affecting commutes, lifestyles, and retention for 400 employees." }] 
    }
  },

  "LS5": { // Delegative Autonomy (Fully Graded)
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "You assign a junior operator to monitor the packaging feed while you step away. They nervously ask you to stay and watch them." }],
      "E2": [{ id: "ITM", esg: 1, text: "You task an experienced operator with training a new hire. You must decide whether to hover nearby or leave them to it." }],
      "E3": [{ id: "ITM", esg: 1, text: "You put a shift lead in charge of a complex changeover. They want you to verify their machine settings before they hit start." }],
      "M1": [{ id: "ITM", esg: 1, text: "You assign a production supervisor to resolve a minor quality dispute with QA, but they keep cc'ing you on every email." }],
      "M2": [{ id: "ITM", esg: 1, text: "You give a plant manager the goal of reducing scrap by 5%. They ask you to design the exact step-by-step process they should use." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must empower plant directors to manage their own multi-million dollar operational budgets without corporate micromanagement." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "You send an apprentice to lubricate the line. They want you to walk with them and verify every single grease point." }],
      "E2": [{ id: "ITM", esg: 1, text: "You ask a mechanic to diagnose a strange vibration in a motor. You must decide whether to let them tear it down alone." }],
      "E3": [{ id: "ITM", esg: 1, text: "You assign a senior technician to lead a weekend shutdown repair. They ask you to drop in on Saturday just to oversee the work." }],
      "M1": [{ id: "ITM", esg: 1, text: "You task a maintenance planner with optimizing the PM schedule, but they want you to review every single work order they generate." }],
      "M2": [{ id: "ITM", esg: 1, text: "You give regional leads the budget to upgrade their tooling, but they are terrified of making the wrong choice and demand you select the vendor." }],
      "M4": [{ id: "ITM", esg: 1, text: "You shift to decentralized maintenance budgets, trusting regional engineering leads to manage their own spare-parts inventory levels." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "You assign a junior engineer to detail a simple bracket drawing. They want you to review every single dimension before they save the file." }],
      "E2": [{ id: "ITM", esg: 1, text: "You task a draftsman with updating the 'as-built' blueprints. They ask you to walk the floor with them to point out the changes." }],
      "E3": [{ id: "ITM", esg: 1, text: "You put a project engineer in charge of a minor equipment installation, but they keep escalating simple contractor disputes to your desk." }],
      "M1": [{ id: "ITM", esg: 1, text: "You assign a team lead to design a new conveyor layout. They bring you three options and ask you to pick the winner for them." }],
      "M2": [{ id: "ITM", esg: 1, text: "You give regional engineering heads the mandate to reduce energy consumption, but they refuse to act without a prescriptive corporate playbook." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must allow lead engineers to select their own preferred software stacks for a major project, stepping away from centralized corporate mandates." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "A lab technician is doing routine swab tests. They ask you to stand beside them and confirm the color change on every single strip." }],
      "E2": [{ id: "ITM", esg: 1, text: "You ask an inspector to calibrate the testing equipment. They want you to double-check the baseline readings before they proceed." }],
      "E3": [{ id: "ITM", esg: 1, text: "You assign a shift QA lead to write a deviation report. They send you four rough drafts asking if the tone is correct." }],
      "M1": [{ id: "ITM", esg: 1, text: "You task a quality manager with leading a customer audit, but they panic and ask you to sit in the room to answer the hard questions." }],
      "M2": [{ id: "ITM", esg: 1, text: "You give site QA directors the goal of reducing customer complaints by 10%, but they demand you provide the exact methodology." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must empower site QA heads with the ultimate authority to halt production globally without needing your sign-off, even if it costs millions." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "You ask a picker to check inventory levels in aisle four. They want you to double-check their tally sheet before they submit it." }],
      "E2": [{ id: "ITM", esg: 1, text: "You assign a forklift driver to reorganize the empty pallets. They ask you to draw them a map of exactly where to put them." }],
      "E3": [{ id: "ITM", esg: 1, text: "You put a dispatch lead in charge of the loading dock during the night shift. They call you at 2 AM to ask if they can load a truck 10 minutes early." }],
      "M1": [{ id: "ITM", esg: 1, text: "You task a warehouse supervisor with clearing a massive staging backlog, but they refuse to reassign staff without your explicit permission." }],
      "M2": [{ id: "ITM", esg: 1, text: "You give regional hub managers a budget to optimize their layouts, but they insist on routing every minor shelving purchase through you." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must give regional logistics managers total authority to negotiate and sign multi-million dollar 3PL contracts without corporate review." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "You assign a clerk to run the morning MRP report. They want you to verify the parameters before they click 'generate'." }],
      "E2": [{ id: "ITM", esg: 1, text: "You ask a scheduler to update the holiday roster. They want you to approve every single time-off request before they publish it." }],
      "E3": [{ id: "ITM", esg: 1, text: "You put a senior planner in charge of resolving a minor capacity clash with Production, but they cc you on the email hoping you'll step in." }],
      "M1": [{ id: "ITM", esg: 1, text: "You task your planning managers with building the Q3 forecast. They refuse to finalize the numbers until you sign off on their assumptions." }],
      "M2": [{ id: "ITM", esg: 1, text: "You grant regional demand heads the authority to adjust safety stock levels, but they keep escalating the decision back to corporate to avoid risk." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must allow regional demand managers to override corporate forecasts based on local market intelligence, trusting their judgment completely." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "A coordinator is booking a standard freight run. They want you to review the routing email before they send it to the vendor." }],
      "E2": [{ id: "ITM", esg: 1, text: "You assign an analyst to track a delayed shipment. They ask you to call the courier because they are afraid of being too aggressive." }],
      "E3": [{ id: "ITM", esg: 1, text: "You put a shift lead in charge of customs clearance documentation. They want you to double-check the tariff codes before submission." }],
      "M1": [{ id: "ITM", esg: 1, text: "You task a logistics manager with selecting a new local carrier. They bring you three quotes and refuse to make the final choice themselves." }],
      "M2": [{ id: "ITM", esg: 1, text: "You give regional directors the goal of reducing freight spend by 5%. They demand you provide a corporate-approved list of cost-cutting measures." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must empower logistics heads to bypass standard shipping routes and authorize expensive air-freight instantly during a crisis without your approval." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "A buyer is ordering standard PPE. They want you to double-check the purchase order quantities before they issue it." }],
      "E2": [{ id: "ITM", esg: 1, text: "You assign an assistant to gather quotes for office supplies. They ask you to draft the email they should send to the vendors." }],
      "E3": [{ id: "ITM", esg: 1, text: "You put a senior buyer in charge of a routine contract renewal. They pause the negotiation because they want you to approve a trivial 1% price variance." }],
      "M1": [{ id: "ITM", esg: 1, text: "You task a category manager with resolving a supplier quality dispute, but they keep trying to drag you into the meetings as the 'bad guy'." }],
      "M2": [{ id: "ITM", esg: 1, text: "You give regional procurement heads the authority to drop underperforming local vendors, but they refuse to act without a corporate mandate to hide behind." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must allow category managers to negotiate and finalize $10M+ raw material contracts entirely unreviewed by the executive team." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "An operator is performing routine water testing. They want you to physically witness the chemical dosing before they close the valve." }],
      "E2": [{ id: "ITM", esg: 1, text: "You assign a technician to clean the chiller filters. They ask you to inspect the filters halfway through to make sure they are doing it right." }],
      "E3": [{ id: "ITM", esg: 1, text: "You put a shift lead in charge of the weekend boiler rotation. They call you on Saturday morning to ask if they should run pump A or pump B." }],
      "M1": [{ id: "ITM", esg: 1, text: "You task a utility manager with optimizing the compressed air usage, but they want you to approve their exact diagnostic methodology first." }],
      "M2": [{ id: "ITM", esg: 1, text: "You give plant energy directors the goal of reducing carbon emissions, but they insist on waiting for corporate engineering to design the solutions for them." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must give site leads total autonomy over their energy trading and purchasing strategies, trusting them to hedge millions of dollars correctly." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "You ask a coordinator to run a standard induction session. They ask you to sit in the back 'just in case' they make a mistake." }],
      "E2": [{ id: "ITM", esg: 1, text: "You assign an assistant to screen junior CVs. They want you to review their 'Reject' pile just to make sure they didn't miss anyone good." }],
      "E3": [{ id: "ITM", esg: 1, text: "You put a senior recruiter in charge of a hiring manager briefing. They ask you to join the call to lend them 'authority'." }],
      "M1": [{ id: "ITM", esg: 1, text: "You task an HR Business Partner with handling a minor disciplinary meeting, but they insist you review their talking points word-for-word." }],
      "M2": [{ id: "ITM", esg: 1, text: "You give regional HR directors the budget to design their own local employee engagement initiatives, but they demand a corporate template." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must authorize regional HR Business Partners to approve final union settlement agreements independently, removing yourself as the bottleneck." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "You assign a clerk to reconcile the daily petty cash. They want you to double-check every single receipt before they post the journal." }],
      "E2": [{ id: "ITM", esg: 1, text: "You ask an analyst to draft a variance report. They bring you the raw data and ask you to highlight which variances actually matter." }],
      "E3": [{ id: "ITM", esg: 1, text: "You put a senior accountant in charge of resolving a vendor payment dispute. They draft an email but refuse to send it until you approve the wording." }],
      "M1": [{ id: "ITM", esg: 1, text: "You task a finance manager with building the departmental budget. They refuse to finalize it until you tell them exactly what the 'acceptable' numbers are." }],
      "M2": [{ id: "ITM", esg: 1, text: "You give divisional controllers the authority to write off minor bad debts, but they continue escalating every single write-off to corporate." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must decentralize CapEx approval authority to divisional CFOs, trusting them to align with corporate strategy without your direct signature." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "You ask a technician to map a network printer. They want you to watch them input the IP address to ensure it's correct." }],
      "E2": [{ id: "ITM", esg: 1, text: "You assign a junior developer to write a simple script. They want you to review their code after every three lines they write." }],
      "E3": [{ id: "ITM", esg: 1, text: "You put a senior admin in charge of a routine server patch. They ask you to stay online at 2 AM with them 'just in case' something breaks." }],
      "M1": [{ id: "ITM", esg: 1, text: "You task an IT manager with selecting a new vendor for laptops. They gather the specs but refuse to make the final recommendation themselves." }],
      "M2": [{ id: "ITM", esg: 1, text: "You give regional IT heads the budget to upgrade their local infrastructure, but they insist corporate architecture design it for them." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must empower regional CIOs to design and manage their own local cloud infrastructure without waiting for global IT steering committee approval." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "A sales rep is drafting a standard quote for a legacy client. They want you to review the PDF formatting before they email it." }],
      "E2": [{ id: "ITM", esg: 1, text: "You assign a junior rep to cold-call a list of leads. They ask you to provide an exact, word-for-word script they can read from." }],
      "E3": [{ id: "ITM", esg: 1, text: "You put a senior account executive in charge of an annual renewal. They pause the meeting to call you and ask permission to grant a standard 2% discount." }],
      "M1": [{ id: "ITM", esg: 1, text: "You task a sales manager with resolving a client complaint, but they keep trying to escalate the client to you to 'smooth things over'." }],
      "M2": [{ id: "ITM", esg: 1, text: "You give national directors the autonomy to design their own local marketing campaigns, but they refuse to launch without corporate marketing's blessing." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must give sales directors absolute authority to offer massive pricing discounts to capture enterprise accounts without running it up the flagpole." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "You assign an assistant to manage the stationary inventory. They want you to sign off on their list of pens and paper before ordering." }],
      "E2": [{ id: "ITM", esg: 1, text: "You ask a receptionist to reorganize the mailroom. They ask you to draw a diagram of exactly where each bin should go." }],
      "E3": [{ id: "ITM", esg: 1, text: "You put a facilities coordinator in charge of supervising a painting crew. They text you photos every hour asking if the color looks right." }],
      "M1": [{ id: "ITM", esg: 1, text: "You task an admin manager with resolving a dispute with the cleaning vendor. They refuse to have the tough conversation and ask you to do it." }],
      "M2": [{ id: "ITM", esg: 1, text: "You give regional office heads the budget to upgrade their breakrooms, but they insist corporate facilities choose the furniture for them." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must give site facility managers full, unreviewed control over their operational budgets, trusting them to manage vendor relations directly." }] 
    }
  },
  "LS6": { // Performance Drive (Fully Graded)
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "Your shift is performing comfortably, but you notice a way to safely increase output by 5% if the team pushes slightly harder." }],
      "E2": [{ id: "ITM", esg: 1, text: "A changeover usually takes 40 minutes. You challenge your crew to complete it in 30 minutes to gain extra runtime." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift has missed its weekly target twice. You must push the operators to beat the site record this week to make up the deficit." }],
      "M1": [{ id: "ITM", esg: 1, text: "You mandate a 15% reduction in scrap waste across all shifts, forcing your supervisors to hold their teams to a much higher standard." }],
      "M2": [{ id: "ITM", esg: 1, text: "You set highly demanding KPIs for your plant directors, driving them to hit numbers they previously claimed were mechanically impossible." }],
      "M4": [{ id: "ITM", esg: 1, text: "The board has demanded a 20% year-on-year increase in overall equipment effectiveness (OEE) across all sites, which site directors claim is impossible." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "A routine overhaul usually takes 8 hours. You challenge your crew to complete it safely in 7 hours to maximize line uptime." }],
      "E2": [{ id: "ITM", esg: 1, text: "You push your technicians to complete their preventative maintenance checks faster to free them up for a backlog of minor repairs." }],
      "E3": [{ id: "ITM", esg: 1, text: "You challenge your shift to achieve a 'zero rework' week, demanding perfection on every single repair job." }],
      "M1": [{ id: "ITM", esg: 1, text: "You drive your maintenance planners to increase Mean Time Between Failures (MTBF) by 25% using existing resources." }],
      "M2": [{ id: "ITM", esg: 1, text: "You demand that regional leads cut their overtime budgets by 30% while maintaining the exact same machine uptime metrics." }],
      "M4": [{ id: "ITM", esg: 1, text: "You set a relentless, zero-breakdown target for the fiscal year, demanding predictive maintenance excellence from all factory teams." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "Your drafting team is on schedule, but you push them to finish the CAD drawings a day early to give fabrication a head start." }],
      "E2": [{ id: "ITM", esg: 1, text: "You challenge a contractor to complete the stress-testing phase in half the scheduled time so the line can open sooner." }],
      "E3": [{ id: "ITM", esg: 1, text: "You push your design team to work late to finalize a proposal, ensuring your department beats a competitor to the pitch." }],
      "M1": [{ id: "ITM", esg: 1, text: "You drive your project managers to deliver a complex installation under budget and two weeks ahead of schedule." }],
      "M2": [{ id: "ITM", esg: 1, text: "You set aggressive, demanding timelines for the R&D directors, forcing them to accelerate the new product portfolio." }],
      "M4": [{ id: "ITM", esg: 1, text: "You mandate that a multi-year, highly complex CAPEX expansion be accelerated and completed 6 months ahead of the original baseline." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "You challenge the lab technicians to process their quality samples 10% faster without sacrificing a single point of accuracy." }],
      "E2": [{ id: "ITM", esg: 1, text: "You push a junior inspector to handle double their usual volume of floor checks during a massive production surge." }],
      "E3": [{ id: "ITM", esg: 1, text: "You drive your shift to completely eliminate the backlog of quarantine-release paperwork before the weekend." }],
      "M1": [{ id: "ITM", esg: 1, text: "You mandate that QA managers reduce average batch-release times from 48 hours to 24 hours." }],
      "M2": [{ id: "ITM", esg: 1, text: "You set highly demanding targets for regional directors to drop their customer defect rates to zero within six months." }],
      "M4": [{ id: "ITM", esg: 1, text: "You commit the global QA function to cutting batch-release times in half across the enterprise to drastically improve working capital." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "The staging area is clear, but you push the forklift drivers to load three extra outbound trucks before the shift ends." }],
      "E2": [{ id: "ITM", esg: 1, text: "You challenge the picking crew to beat their daily line-pick rate by 15% during a major holiday rush." }],
      "E3": [{ id: "ITM", esg: 1, text: "You drive your loading dock team to beat the site record for fastest truck turnaround time." }],
      "M1": [{ id: "ITM", esg: 1, text: "You mandate a 20% reduction in truck waiting times, forcing warehouse managers to radically optimize their shifts." }],
      "M2": [{ id: "ITM", esg: 1, text: "You set highly demanding targets for national hub directors to reduce their inventory shrink rates to virtually zero." }],
      "M4": [{ id: "ITM", esg: 1, text: "You mandate a 99.9% inventory accuracy target across all national distribution centers, refusing to accept historical shrinkage rates." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "You challenge the scheduling team to tighten the changeover windows just enough to squeeze one more production run into the week." }],
      "E2": [{ id: "ITM", esg: 1, text: "You push a clerk to optimize a complex raw-material schedule perfectly, refusing to accept any material wastage." }],
      "E3": [{ id: "ITM", esg: 1, text: "You drive your team to resolve a massive backlog of unconfirmed sales orders by the end of the day." }],
      "M1": [{ id: "ITM", esg: 1, text: "You mandate that your planning managers reduce standard lead times by three days, forcing them to squeeze the factories." }],
      "M2": [{ id: "ITM", esg: 1, text: "You set aggressive KPIs for regional directors to improve forecast accuracy from 70% to 95% within one quarter." }],
      "M4": [{ id: "ITM", esg: 1, text: "You drive a relentless initiative to compress the global Sales & Operations Planning (S&OP) cycle from 30 days down to just 7 days." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "You aggressively push a logistics vendor to shave a full day off their standard transit time for a critical delivery." }],
      "E2": [{ id: "ITM", esg: 1, text: "You challenge your loading coordinators to cut the staging time in half for a fleet of urgent export containers." }],
      "E3": [{ id: "ITM", esg: 1, text: "You push your shift to clear a massive customs paperwork backlog in record time to avoid demurrage fees." }],
      "M1": [{ id: "ITM", esg: 1, text: "You mandate a 10% reduction in spot-freight usage, driving your managers to negotiate far better standard rates." }],
      "M2": [{ id: "ITM", esg: 1, text: "You set highly demanding targets for regional directors to achieve 98% On-Time-In-Full (OTIF) deliveries despite carrier shortages." }],
      "M4": [{ id: "ITM", esg: 1, text: "You mandate a 15% reduction in global freight spend while simultaneously requiring a massive improvement in On-Time-In-Full (OTIF) deliveries." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "You push a supplier to give you an extra 5% discount on a standard MRO order, even though their initial quote was already within budget." }],
      "E2": [{ id: "ITM", esg: 1, text: "You challenge a junior buyer to close out three complex vendor negotiations before the end of the week." }],
      "E3": [{ id: "ITM", esg: 1, text: "You drive your team of buyers to hit their entire quarterly cost-savings quota a month early." }],
      "M1": [{ id: "ITM", esg: 1, text: "You mandate that category managers reduce overall spend in their portfolios by 8% without compromising quality." }],
      "M2": [{ id: "ITM", esg: 1, text: "You set aggressive KPIs for divisional directors to consolidate 30% of their localized vendor base into national contracts." }],
      "M4": [{ id: "ITM", esg: 1, text: "You commit to the board that Procurement will deliver $50M in hard cost savings this year across all enterprise spend categories." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "You challenge the boiler operators to optimize the mix and save 2% on fuel consumption during this specific shift." }],
      "E2": [{ id: "ITM", esg: 1, text: "You push a technician to finish a cooling-tower maintenance routine an hour faster so the main plant can throttle up." }],
      "E3": [{ id: "ITM", esg: 1, text: "You drive your shift to achieve a completely flawless, zero-waste energy profile for the week." }],
      "M1": [{ id: "ITM", esg: 1, text: "You mandate a 10% reduction in water usage across the facility, forcing managers to hunt down every minor inefficiency." }],
      "M2": [{ id: "ITM", esg: 1, text: "You set highly demanding sustainability targets for regional directors, demanding rapid cuts to carbon emissions." }],
      "M4": [{ id: "ITM", esg: 1, text: "You drive a corporate-wide mandate to reach Net Zero emissions five years ahead of the industry standard, forcing radical infrastructure upgrades." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "Your team processes 10 hires a week. You see an opportunity to process 12 by tightening up the interview scheduling workflow." }],
      "E2": [{ id: "ITM", esg: 1, text: "You challenge an admin assistant to complete the onboarding paperwork for 50 new hires in a single afternoon." }],
      "E3": [{ id: "ITM", esg: 1, text: "You drive your recruitment team to beat the company record for the fastest time-to-fill on a tough technical role." }],
      "M1": [{ id: "ITM", esg: 1, text: "You mandate that HR Business Partners close out all employee grievances within 7 days, a highly aggressive timeline." }],
      "M2": [{ id: "ITM", esg: 1, text: "You set demanding KPIs for regional HR directors to slash their voluntary turnover rates by 15% this year." }],
      "M4": [{ id: "ITM", esg: 1, text: "You commit the HR function to slashing time-to-hire by 40% globally, requiring a radical, high-pressure overhaul of talent acquisition." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "The month-end close usually takes 5 days. You realize that by reorganizing the checklist, your team could finish it in 4 days." }],
      "E2": [{ id: "ITM", esg: 1, text: "You challenge a junior clerk to process double their usual volume of expense reports before the holiday weekend." }],
      "E3": [{ id: "ITM", esg: 1, text: "You drive your team to achieve a 'zero error' week on all accounts payable processing." }],
      "M1": [{ id: "ITM", esg: 1, text: "You mandate that credit managers reduce Outstanding Days Sales (DSO) by 10 days, forcing aggressive collections." }],
      "M2": [{ id: "ITM", esg: 1, text: "You set highly demanding targets for regional CFOs to slash their working capital requirements by 20%." }],
      "M4": [{ id: "ITM", esg: 1, text: "You mandate a globally aggressive working-capital reduction target, forcing regional CFOs to stretch vendor payment terms to the absolute limit." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "You challenge the helpdesk technicians to close 20% more routine tickets today to clear the backlog before the weekend." }],
      "E2": [{ id: "ITM", esg: 1, text: "You push a junior developer to finish writing a script in half the originally estimated time." }],
      "E3": [{ id: "ITM", esg: 1, text: "You drive your shift to achieve 100% server uptime for the month, demanding absolute vigilance." }],
      "M1": [{ id: "ITM", esg: 1, text: "You mandate that IT managers cut their software deployment timelines in half, forcing them to adopt faster testing protocols." }],
      "M2": [{ id: "ITM", esg: 1, text: "You set aggressive KPIs for regional CIOs to migrate all remaining physical servers to the cloud within six months." }],
      "M4": [{ id: "ITM", esg: 1, text: "You mandate that the global rollout of the new ERP system be accelerated and go live 6 months ahead of schedule." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "A client is ready to sign, but you push your sales rep to aggressively upsell and increase the total order volume by 10%." }],
      "E2": [{ id: "ITM", esg: 1, text: "You challenge a junior account executive to double their cold-call conversion rate this week." }],
      "E3": [{ id: "ITM", esg: 1, text: "You drive your sales team to break the regional revenue record for the month, pushing them to work late." }],
      "M1": [{ id: "ITM", esg: 1, text: "You mandate a 15% increase in profit margins across all accounts, forcing sales managers to have difficult pricing conversations." }],
      "M2": [{ id: "ITM", esg: 1, text: "You set highly demanding targets for national directors to capture 30% of a competitor's market share this year." }],
      "M4": [{ id: "ITM", esg: 1, text: "You mandate double-digit market share growth in a saturated, highly competitive region, driving the sales directors to their absolute limits." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "You challenge the facilities staff to turn around all standard maintenance requests in under 1 hour today." }],
      "E2": [{ id: "ITM", esg: 1, text: "You push a receptionist to process a massive influx of 200 visitors in half the usual time during a conference." }],
      "E3": [{ id: "ITM", esg: 1, text: "You drive your admin team to achieve zero complaints on event setups for the entire quarter." }],
      "M1": [{ id: "ITM", esg: 1, text: "You mandate a 10% cut in overhead spending, forcing admin managers to relentlessly optimize vendor contracts." }],
      "M2": [{ id: "ITM", esg: 1, text: "You set aggressive targets for regional office heads to reduce their total facility footprint by 15%." }],
      "M4": [{ id: "ITM", esg: 1, text: "You commit to cutting corporate real estate and facility overhead costs by 30% across the enterprise without impacting operational capacity." }] 
    }
  },
  "LS7": { // Service-Oriented Leadership (Fully Graded)
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "Your operators are complaining that the new raw material is too stiff and is slowing them down. You must decide how to support them." }],
      "E2": [{ id: "ITM", esg: 1, text: "The industrial fans on the floor are broken, and the crew is exhausted from the heat. You must find a way to relieve them." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift is fatigued from a brutal overtime schedule. You need to shield them from additional demands from the Planning team." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your production supervisors are drowning in daily reporting paperwork. You must find a way to eliminate this administrative burden." }],
      "M2": [{ id: "ITM", esg: 1, text: "Plant managers are telling you they don't have the budget to fix critical safety hazards. You must secure the funding for them." }],
      "M4": [{ id: "ITM", esg: 1, text: "Factory morale is plummeting due to under-resourcing. You must fight the executive board for capital to upgrade breakrooms and climate control." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "Your technicians are frustrated because they have to walk 15 minutes across the plant just to sign out specialized tools." }],
      "E2": [{ id: "ITM", esg: 1, text: "A mechanic is struggling to diagnose a fault because they lack the expensive diagnostic software. You must secure it for them." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your team is burned out from continuous weekend on-call duties. You need to push back against Production to give them a break." }],
      "M1": [{ id: "ITM", esg: 1, text: "Maintenance planners complain that the CMMS system is too slow. You must fight IT to get them a faster, dedicated server." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional leads are failing their KPIs because they lack CapEx for modern tools. You must champion their budget requests." }],
      "M4": [{ id: "ITM", esg: 1, text: "Regional maintenance leads report that a lack of CAPEX is making their jobs impossible. You must champion their cause to the steering committee." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "A junior draftsman is struggling to render a model because their workstation PC is outdated and freezing." }],
      "E2": [{ id: "ITM", esg: 1, text: "Your engineers are frustrated because they lack the physical testing equipment needed to validate a design." }],
      "E3": [{ id: "ITM", esg: 1, text: "The drafting team is overwhelmed by constant, last-minute change requests from Sales. You must intervene to protect their time." }],
      "M1": [{ id: "ITM", esg: 1, text: "Project managers are spending 40% of their time on admin work. You must fight for budget to hire project coordinators for them." }],
      "M2": [{ id: "ITM", esg: 1, text: "The R&D division is completely stalled because Procurement is taking too long to source prototype parts. You must clear the roadblock." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must fiercely shield the R&D engineering teams from aggressive Commercial directors who want to release half-baked, untested product designs." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "A lab technician mentions they are getting headaches because the overhead lighting at the inspection station is too dim." }],
      "E2": [{ id: "ITM", esg: 1, text: "Inspectors are complaining that their safety gloves make it impossible to feel product defects. You must source better PPE." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your lab techs are buried in manual data entry. You must push IT to automate their test-result uploads." }],
      "M1": [{ id: "ITM", esg: 1, text: "QA managers are constantly fighting with Production over release times. You must step in to shield your team from the operational hostility." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional QA directors lack the high-tech testing equipment needed to hit their accuracy KPIs. You must secure the budget." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must battle the CFO to secure funding for an automated LIMS software that will relieve your QA managers from crushing manual paperwork." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "The picking team is exhausted because three of the electric pallet jacks have been broken for a week." }],
      "E2": [{ id: "ITM", esg: 1, text: "Your forklift drivers are freezing in the loading bay during winter. You must find a way to get them proper thermal gear." }],
      "E3": [{ id: "ITM", esg: 1, text: "Shift leads are frustrated because the batteries on the barcode scanners keep dying mid-shift. You must resolve the equipment issue." }],
      "M1": [{ id: "ITM", esg: 1, text: "Warehouse managers are drowning in HR paperwork for temporary laborers. You must fight to get them administrative support." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors cannot hit their safety KPIs because they lack the budget to repair damaged racking. You must fight for the capital." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must advocate to the executive board for hazard pay and significantly better working conditions for the overnight logistics crews." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "A planner is working late every night because they have to manually copy data between two disconnected spreadsheets." }],
      "E2": [{ id: "ITM", esg: 1, text: "Your scheduling clerks are complaining about eye strain. You must fight to get them dual-monitor setups." }],
      "E3": [{ id: "ITM", esg: 1, text: "The planning team is burned out because Commercial keeps promising impossible delivery dates. You must intervene and protect your team." }],
      "M1": [{ id: "ITM", esg: 1, text: "Planning managers lack the proper ERP access rights to do their jobs efficiently. You must battle IT security to get them access." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional planning directors are failing because they don't have enough analyst headcount. You must fight Finance for the budget." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must aggressively shield the global planning teams from Sales directors who constantly force unrealistic, highly disruptive last-minute schedule changes." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "A logistics coordinator is highly stressed because the external vendor portal they are forced to use crashes constantly." }],
      "E2": [{ id: "ITM", esg: 1, text: "Your dispatchers are getting neck pain from cradling phones all day. You must secure budget for wireless headsets." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift team is constantly fighting with the security gate over truck access. You must step in and clear the bureaucratic roadblock." }],
      "M1": [{ id: "ITM", esg: 1, text: "Logistics managers are buried in customs audit paperwork. You must fight to hire a dedicated compliance officer to relieve them." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors are failing their cost KPIs because they lack the budget for freight-optimization software. You must champion their request." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must fight the executive committee to approve emergency headcount to relieve a dangerously overworked regional supply chain team." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "A buyer is frustrated that their urgent purchase orders are constantly getting stuck in a slow legal review queue." }],
      "E2": [{ id: "ITM", esg: 1, text: "Your buyers lack access to premium market-intelligence data, putting them at a disadvantage during negotiations. You must buy the licenses." }],
      "E3": [{ id: "ITM", esg: 1, text: "Senior buyers are overwhelmed by processing trivial, low-value POs. You must find a way to automate or delegate that work." }],
      "M1": [{ id: "ITM", esg: 1, text: "Category managers are constantly fighting with Finance over payment terms. You must step in and align the departments to protect your team." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional procurement directors lack dedicated legal support and are drowning in contract reviews. You must fight to get them dedicated counsel." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must redesign the entire procurement operating model to strip away administrative burdens, allowing your category managers to actually focus on strategy." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "A boiler operator mentions they feel unsafe doing hot-work because their protective gear (PPE) is worn out." }],
      "E2": [{ id: "ITM", esg: 1, text: "Your technicians are frustrated that they don't have two-way radios and have to run up and down stairs to communicate." }],
      "E3": [{ id: "ITM", esg: 1, text: "The shift team is exhausted from covering for a long-term vacancy. You must push HR to expedite the hiring process." }],
      "M1": [{ id: "ITM", esg: 1, text: "Utility managers are failing their efficiency targets because they lack basic monitoring software. You must fight for the IT budget." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional energy directors are begging for capital to replace failing, inefficient compressors. You must champion their CapEx requests." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must battle the board for emergency funding to automate dangerous utility controls, prioritizing operator safety over short-term financial metrics." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "A recruiter is falling behind because their laptop keeps crashing. IT says it will take a week to replace it." }],
      "E2": [{ id: "ITM", esg: 1, text: "Your talent acquisition team is frustrated that they don't have enough premium LinkedIn recruiter seats. You must secure the licenses." }],
      "E3": [{ id: "ITM", esg: 1, text: "HR coordinators are overwhelmed answering basic payroll questions. You must push Finance to create a self-service FAQ." }],
      "M1": [{ id: "ITM", esg: 1, text: "HR Business Partners are drowning in administrative grievance paperwork. You must fight for budget to hire ER specialists to support them." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional HR directors are failing to hit engagement targets because they lack budget for wellbeing initiatives. You must secure the funds." }],
      "M4": [{ id: "ITM", esg: 1, text: "Your HR Business Partners are overwhelmed by administrative burdens, preventing them from doing strategic work. You must restructure the operating model to relieve them." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "An accounts clerk is struggling to process invoices because the scanning software keeps freezing." }],
      "E2": [{ id: "ITM", esg: 1, text: "Your analysts are getting back pain from poor desk setups. You must fight facilities to get them ergonomic chairs." }],
      "E3": [{ id: "ITM", esg: 1, text: "The reconciliation team is buried in manual data entry because the bank feeds are broken. You must force IT to fix the API." }],
      "M1": [{ id: "ITM", esg: 1, text: "Finance managers are constantly fighting with IT over access to reporting databases. You must step in and clear the roadblock." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional CFOs are failing to produce timely reports because they lack analyst headcount. You must fight the board for the hiring budget." }],
      "M4": [{ id: "ITM", esg: 1, text: "The FP&A team is suffering extreme burnout from continuous executive data requests. You must intervene and shield them from ad-hoc board demands." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "A helpdesk technician is highly stressed after being verbally abused by an angry manager over a locked account." }],
      "E2": [{ id: "ITM", esg: 1, text: "Your network techs are frustrated because they lack the expensive diagnostic cables needed to do their jobs properly." }],
      "E3": [{ id: "ITM", esg: 1, text: "The sysadmin team is burned out from working every single weekend on server patches. You must find a way to automate or rotate the load." }],
      "M1": [{ id: "ITM", esg: 1, text: "IT managers are failing their SLAs because they lack premium vendor support contracts. You must fight Finance for the budget." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional CIOs are begging for capital to replace failing, ancient servers. You must fiercely champion their infrastructure requests." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must fight the CFO for budget to upgrade critical but 'invisible' legacy server infrastructure to prevent massive future burnout for your sysadmins." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "A sales rep is failing to hit targets because the CRM software is incredibly slow and difficult to use on mobile." }],
      "E2": [{ id: "ITM", esg: 1, text: "Your field reps are complaining that their travel budget is too tight to properly entertain key clients. You must secure more funds." }],
      "E3": [{ id: "ITM", esg: 1, text: "Account executives are buried in proposal drafting. You must fight to hire a dedicated bid-writer to free up their selling time." }],
      "M1": [{ id: "ITM", esg: 1, text: "Sales managers are frustrated by a lack of marketing collateral. You must forcefully demand better support from the Marketing division." }],
      "M2": [{ id: "ITM", esg: 1, text: "National directors are failing their KPIs because they lack dedicated Sales Operations headcount. You must secure the budget." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must overhaul corporate policy to remove massive administrative reporting burdens so your national salesforce can actually focus on selling." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "The front desk receptionist is miserable because the air conditioning in the lobby has been broken for three days." }],
      "E2": [{ id: "ITM", esg: 1, text: "Your security guards are frustrated because their two-way radios have terrible static. You must source new equipment." }],
      "E3": [{ id: "ITM", esg: 1, text: "The facilities crew is exhausted from constantly setting up chairs for massive town halls. You must push to hire a dedicated events contractor." }],
      "M1": [{ id: "ITM", esg: 1, text: "Admin managers are constantly fighting with Procurement over delayed vendor payments. You must step in and clear the roadblock." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional office heads are begging for budget to fix their dilapidated restrooms. You must champion their CapEx requests." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must strongly advocate to the CEO for remote-work flexibility and better corporate amenities to improve overall staff wellbeing and retention." }] 
    }
  },
  "LS8": { // Vision-Casting Leadership (Fully Graded)
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "You are introducing a new daily shift-huddle format to a team of operators who think it's just a waste of time." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must convince your shift to embrace a new 5S (organization) system, painting a picture of how it will make their jobs easier." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are launching a 'zero-defect' initiative on the floor. You need to inspire the operators to care about quality, not just speed." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must rally your production supervisors behind a massive Lean Manufacturing rollout that will disrupt their comfortable routines." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate a clear, 3-year strategic vision for how the regional plants will transition from legacy products to high-tech polymers." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must convince a deeply skeptical workforce that the shift toward AI and automation will elevate their roles rather than replace them." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "You are asking technicians to fill out detailed fault logs, which they view as unnecessary paperwork taking them away from 'real work'." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must convince your mechanics to adopt a new physical tagging system, explaining how it will eventually prevent catastrophic failures." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are launching a 'safety-first' culture initiative. You must inspire veteran technicians who think safety rules are for amateurs." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must rally your maintenance planners behind a transition to Total Productive Maintenance (TPM), changing the entire department's philosophy." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate a compelling vision for unifying all regional maintenance practices under a single, highly disciplined global standard." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must align thousands of traditional engineers behind a bold, futuristic vision of fully digitized, IoT-driven 'smart factories'." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must explain to a team of draftsmen why standardizing their CAD layers will prevent massive headaches for fabrication downstream." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must convince junior engineers to adopt a rigorous new testing protocol, painting a picture of how it elevates the department's reputation." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are introducing a new 'peer review' design culture to engineers who are highly protective of their individual work." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must rally your project managers to embrace a complex new Product Lifecycle Management (PLM) software that will revolutionize their workflow." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate a clear vision for integrating three disparate regional engineering teams into a single, cohesive global design hub." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must rally the R&D division around a radical vision to move to 100% sustainable, biodegradable product designs within 5 years." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "You are introducing a strict new hygiene swab rule to lab techs who feel their current process is already clean enough." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must convince floor inspectors to adopt a new statistical sampling method, explaining how it is vastly superior to random checks." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are launching a 'quality-at-the-source' culture change, inspiring production operators to view themselves as the first line of QA." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must rally your QA managers to embrace a painful transition to a fully digital, paperless Quality Management System (QMS)." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate a compelling vision for unifying all regional quality labs under a single, rigorous global ISO standard." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must cast a vision to transform QA from a hated 'internal police force' into a globally respected partner in manufacturing excellence." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must explain to forklift drivers why you are completely remapping the warehouse aisles, which will slow them down in the short term." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must convince the picking crew to embrace new wearable barcode scanners, painting a picture of how it will eliminate physical clipboards." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are launching a new 'pedestrian-first' safety culture on the dock, inspiring drivers who hate slowing down for crosswalks." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must rally your warehouse managers to enthusiastically support the chaotic, multi-month rollout of a new WMS." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate a strategic vision for integrating disparate regional hubs into a single, flawlessly synchronized national network." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must articulate a compelling future state for a fully autonomous 'dark warehouse' to a board concerned about the massive upfront capital cost." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "You are teaching clerks a new scheduling software. They complain that the old spreadsheet was faster." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must convince junior planners to adopt a new forecasting template, explaining how it prevents massive headaches at month-end." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are driving a culture change to make planners more collaborative with Sales, painting a picture of a unified, friction-free process." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must rally your planning managers behind the painful implementation of a new ERP module that will revolutionize capacity modelling." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate a clear vision for integrating all regional demand plans into a single, global master schedule." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must convince a siloed global planning organization to embrace a vision of fully integrated, predictive AI-driven demand forecasting." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must explain to a skeptical dispatch team why logging every truck into a new tracking app will ultimately reduce their overtime." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must convince coordinators to embrace a new dynamic routing software that frequently overrides their traditional, preferred routes." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are launching a new '100% compliance' culture for customs documentation, inspiring a shift that traditionally hates paperwork." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must rally your logistics managers to enthusiastically champion the rollout of a complex new Transportation Management System (TMS)." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate a strategic 3-year vision for optimizing the entire regional distribution network to drastically cut carbon emissions." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must rally external vendors and internal logistics around a bold vision to build the industry's most agile, shock-resistant global supply network." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must explain to a junior buyer why enforcing a new, tedious PO approval process protects the company from audit failures." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must convince your team to embrace a new vendor-portal system, painting a picture of how it will eventually eliminate their manual emails." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are launching a new 'ethical sourcing' culture, inspiring buyers to care about sustainability just as much as bottom-line price." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must rally your category managers behind the difficult transition to a fully automated, AI-assisted e-procurement platform." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate a clear vision for consolidating hundreds of regional suppliers into a few massive, strategic global partnerships." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must inspire category managers to abandon pure cost-cutting and embrace a vision of driving strategic innovation through vendor partnerships." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "You are asking operators to perform a new daily walk-around to spot air leaks. They feel they are already too busy." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must convince technicians to embrace a new digital logging software, explaining how it will eventually automate their reporting." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are launching a relentless 'energy-saving' culture, inspiring operators to care about minor inefficiencies that they usually ignore." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must rally your utility managers behind the implementation of a complex new SCADA monitoring system." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate a compelling vision for integrating all regional plant power grids into a single, centrally managed smart-grid." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must articulate a 10-year roadmap to transform the company's energy infrastructure to be 100% carbon neutral to skeptical shareholders." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must explain to the recruitment team why a new, slightly slower candidate screening process will ultimately yield better hires." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must convince HR coordinators to enthusiastically adopt a new Applicant Tracking System (ATS) that is completely unfamiliar to them." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are launching a 'continuous feedback' culture, inspiring managers to abandon annual reviews in favor of weekly check-ins." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must rally your HR Business Partners behind a massive, highly disruptive rollout of a new global HRIS platform (like Workday)." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate a clear, 3-year vision for integrating the disparate talent-management philosophies of five different regional divisions." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must articulate a compelling vision for a total culture overhaul following a controversial merger that has left employees fearful for their jobs." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "You need to convince the payroll clerks why transitioning to a new, unfamiliar software dashboard will make their lives easier next year." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must convince analysts to adopt a new expense-management tool, painting a picture of how it will eliminate manual receipt tracking." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are driving a 'business partnering' culture, inspiring accountants to see themselves as strategic advisors rather than just number-crunchers." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must rally your finance managers behind the painful, high-stakes implementation of a new global ERP financial module." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate a compelling vision for unifying all regional accounting practices under a single, highly disciplined global standard." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must rally the global finance organization around a vision to become predictive business partners rather than historical scorekeepers." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "You are migrating the helpdesk to a new ticketing system. The technicians hate it because the interface is unfamiliar." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must convince sysadmins to enthusiastically adopt a new security protocol that makes their daily logins much more tedious." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are launching an 'Agile' culture change, inspiring traditional developers to embrace daily standups and two-week sprints." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must rally your IT managers behind a massive, highly disruptive rollout of a new global IT Service Management (ITSM) platform." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate a clear, 3-year strategic vision for how regional infrastructure teams will transition fully into the cloud." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must lead the enterprise through a vision of total digital transformation, convincing business units to abandon their beloved legacy software." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must explain to junior reps why meticulously logging their calls in the CRM will eventually generate warmer leads for them." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must convince account executives to adopt a new quoting software that removes their ability to freestyle discounts." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are driving a 'solution-selling' culture, inspiring reps who are used to simply pushing product features to fundamentally change their pitch." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must rally your sales managers behind a highly disruptive, mandatory rollout of a new enterprise CRM system." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate a compelling vision for aligning the vastly different sales strategies of the North, South, and Central regional teams." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must inspire a national salesforce to transition from pushing volume discounts to selling high-margin, premium consultative solutions." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "You are introducing a new visitor badge system that requires staff to pre-register guests, which they find annoying." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must convince admins to enthusiastically adopt a new centralized room-booking software, painting a picture of a conflict-free schedule." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are launching a strict 'clean-desk' culture, inspiring employees who have spent years personalizing their workspaces to embrace minimalism." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must rally your facilities managers behind the implementation of a complex new Computer-Aided Facility Management (CAFM) system." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate a clear vision for standardizing the vastly different office layouts and amenities across all regional sites." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must outline a bold, post-pandemic vision for a hybrid corporate headquarters that radically changes how employees use physical office space." }] 
    }
  },
  
  "LS9": { // Inspirational Influence (Fully Graded)
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "Your line has just suffered its third breakdown of the shift. The operators are visibly demoralized and complaining." }],
      "E2": [{ id: "ITM", esg: 1, text: "The crew is exhausted after three days of forced overtime. You need to rally them to push through one final, critical shift." }],
      "E3": [{ id: "ITM", esg: 1, text: "A popular shift supervisor just resigned, leaving the team feeling abandoned and unmotivated. You must lift their spirits." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your production supervisors are burnt out from constant supply chain shortages. You must re-energize them to keep fighting fires." }],
      "M2": [{ id: "ITM", esg: 1, text: "Plant directors are highly cynical about a newly mandated corporate efficiency program. You must inspire them to champion the change." }],
      "M4": [{ id: "ITM", esg: 1, text: "Following a painful corporate merger, factory morale is at an all-time low. You must rally the entire manufacturing division to embrace the new company culture." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "Your technicians are exhausted after being called in on a holiday weekend to fix a critical pump." }],
      "E2": [{ id: "ITM", esg: 1, text: "The team is deeply frustrated because they are being forced to keep ancient, failing machines running without spare parts." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift feels unappreciated by Production, who only ever complain about downtime. You need to restore your team's pride." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your maintenance planners are drowning in a seemingly endless backlog of work orders. You must rally them to keep chipping away." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional leads are cynical and defeated after their CapEx requests were universally denied. You must keep them motivated." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must inspire a cynical, aging mechanical workforce to passionately embrace learning advanced robotics and PLC programming." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "A junior engineer is crushed after a prototype they spent weeks designing failed completely in the first field test." }],
      "E2": [{ id: "ITM", esg: 1, text: "Your drafting team is bored and losing focus while updating thousands of tedious, legacy CAD files." }],
      "E3": [{ id: "ITM", esg: 1, text: "A project team is demoralized after the client radically changed the scope for the third time. You must get them back on track." }],
      "M1": [{ id: "ITM", esg: 1, text: "Senior engineers are highly cynical about transitioning to Agile methodology. You must inspire them to give it a genuine try." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional engineering heads feel alienated by a new, highly centralized corporate design strategy. You must rebuild their enthusiasm." }],
      "M4": [{ id: "ITM", esg: 1, text: "Following severe budget cuts, you must re-energize the R&D division and convince them they can still deliver industry-leading innovation." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "Your lab team is drained and losing focus after processing hundreds of repetitive, tedious samples during a massive validation run." }],
      "E2": [{ id: "ITM", esg: 1, text: "Floor inspectors are demoralized because Production keeps aggressively pushing back on their defect findings." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift leads are burnt out from back-to-back external customer audits. You must rally them for one last inspection." }],
      "M1": [{ id: "ITM", esg: 1, text: "QA managers are deeply cynical about yet another new set of corporate compliance regulations. You must inspire their buy-in." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional QA directors are exhausted by constant, chaotic regulatory changes in their local markets. You must restore their resilience." }],
      "M4": [{ id: "ITM", esg: 1, text: "After a highly publicized, embarrassing product recall, you must rebuild the pride, confidence, and credibility of the global QA organization." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "The picking team is exhausted and angry halfway through a brutal, record-breaking end-of-month dispatch surge." }],
      "E2": [{ id: "ITM", esg: 1, text: "Your forklift drivers are highly frustrated because half the fleet is broken, making their jobs twice as hard. You must keep them moving." }],
      "E3": [{ id: "ITM", esg: 1, text: "Shift leads are demoralized by constant mandatory overtime requirements. You must rally them to support the business." }],
      "M1": [{ id: "ITM", esg: 1, text: "Warehouse managers are deeply cynical about a new, highly complex WMS software rollout that keeps crashing. You must keep them engaged." }],
      "M2": [{ id: "ITM", esg: 1, text: "National hub directors are uninspired and resistant to a new corporate centralization mandate. You must win their hearts and minds." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must motivate and retain the loyalty of the national logistics division immediately after announcing the closure of two major regional hubs." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "A planner is visibly defeated after Commercial bypassed their carefully built schedule for the fourth time this week." }],
      "E2": [{ id: "ITM", esg: 1, text: "Your scheduling clerks are bored and disengaging from the highly repetitive, manual data-entry aspects of their roles." }],
      "E3": [{ id: "ITM", esg: 1, text: "The team is demoralized because their forecasts have been wildly inaccurate for three months due to market chaos. You must rebuild their confidence." }],
      "M1": [{ id: "ITM", esg: 1, text: "Planning managers are burnt out from constantly fighting supply chain shortages. You must re-energize them to keep solving problems." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors are deeply cynical about transitioning to an AI-driven forecasting model, fearing it will replace them." }],
      "M4": [{ id: "ITM", esg: 1, text: "During a catastrophic global ERP failure, you must inspire the planning organization to manually manage the supply chain without losing hope." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "A logistics coordinator is close to tears after a critical shipment was blocked at customs due to a paperwork technicality." }],
      "E2": [{ id: "ITM", esg: 1, text: "Your dispatch team is exhausted and frustrated dealing with a severe, national truck-driver shortage. You must rally them." }],
      "E3": [{ id: "ITM", esg: 1, text: "Shift leads are highly demoralized after a massive port strike destroyed their carefully planned delivery metrics. You must lift their spirits." }],
      "M1": [{ id: "ITM", esg: 1, text: "Logistics managers are deeply cynical about yet another aggressive corporate cost-cutting mandate. You must inspire their compliance." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional heads are uninspired by a massive restructuring that strips them of local vendor control. You must win their enthusiasm." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must serve as the calm, inspiring anchor for the global supply chain team as they navigate an unprecedented global shipping crisis." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "A junior buyer is demotivated after being aggressively shut down by a monopolistic vendor during a negotiation." }],
      "E2": [{ id: "ITM", esg: 1, text: "Your purchasing assistants are exhausted by a massive backlog of unapproved, urgent requisitions. You must rally them to push through." }],
      "E3": [{ id: "ITM", esg: 1, text: "Senior buyers are demoralized by new, highly rigid corporate compliance rules that slow down their deals. You must rebuild their buy-in." }],
      "M1": [{ id: "ITM", esg: 1, text: "Category managers are highly cynical about their new, seemingly impossible cost-savings targets. You must inspire them to find creative solutions." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors are exhausted and defeated by continuous, uncontrollable raw-material inflation. You must restore their fighting spirit." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must rally the procurement organization to find creative, collaborative solutions during a period of severe, unavoidable hyperinflation." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "An operator is complaining about the dirty, unglamorous nature of cleaning the boiler tubes during a night shift. You must motivate them." }],
      "E2": [{ id: "ITM", esg: 1, text: "Your technicians are exhausted after spending three straight nights fixing steam leaks across the plant." }],
      "E3": [{ id: "ITM", esg: 1, text: "Shift leads are demoralized because they feel their critical background work is invisible until something breaks. You must restore their pride." }],
      "M1": [{ id: "ITM", esg: 1, text: "Utility managers are deeply cynical about aggressive new corporate ESG (Environmental) targets that they feel are unrealistic." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional heads are uninspired by a mandate to centralize grid control, feeling it removes their autonomy. You must win them over." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must inspire a team of traditional utility engineers to passionately lead the company's aggressive, high-profile green energy transition." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "A junior recruiter is crushed after their top candidate backed out at the last minute. They are losing confidence in their ability to hire." }],
      "E2": [{ id: "ITM", esg: 1, text: "Your coordinators are exhausted by the endless, repetitive administrative burden of a massive 100-person onboarding wave." }],
      "E3": [{ id: "ITM", esg: 1, text: "HR Business Partners are demoralized after dealing with three highly toxic, draining employee grievance cases in one week." }],
      "M1": [{ id: "ITM", esg: 1, text: "HR managers are deeply cynical about the rollout of a new, complex Applicant Tracking System. You must inspire their adoption." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors are exhausted and emotionally drained after executing a massive round of layoffs. You must re-energize the leadership team." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must inspire a deeply cynical executive board to enthusiastically champion a radical new diversity and talent development initiative." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "An accounts payable clerk is highly stressed and feeling incompetent after making a batch of coding errors during month-end." }],
      "E2": [{ id: "ITM", esg: 1, text: "Your analysts are bored and disengaging from the highly repetitive, manual reconciliation tasks required every Friday." }],
      "E3": [{ id: "ITM", esg: 1, text: "Senior accountants are demoralized after the board rejected their request for much-needed software upgrades. You must keep them focused." }],
      "M1": [{ id: "ITM", esg: 1, text: "Finance managers are highly cynical about the transition to Zero-Based Budgeting, viewing it as corporate punishment. You must win their buy-in." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional CFOs are exhausted and defensive after a brutal series of internal compliance audits. You must restore their collaborative spirit." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must rally the entire finance function to stay focused, accurate, and motivated through a brutal, hostile external forensic audit." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "A helpdesk agent is visibly upset and ready to quit after being verbally abused by a senior manager over a locked account." }],
      "E2": [{ id: "ITM", esg: 1, text: "Your sysadmins are exhausted and frustrated after giving up their third consecutive weekend to apply emergency server patches." }],
      "E3": [{ id: "ITM", esg: 1, text: "A development team is deeply demotivated because they are forced to maintain terrible legacy code instead of building new features." }],
      "M1": [{ id: "ITM", esg: 1, text: "IT managers are highly cynical about a mandated migration to the cloud, fearing it will make their roles obsolete. You must inspire them." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional CIOs are exhausted and paranoid following a near-miss cybersecurity breach. You must rebuild their confidence and posture." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must keep the global IT infrastructure team motivated and focused during a grueling, 72-hour weekend ransomware recovery effort." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "A young sales rep is demoralized after losing a major pitch they had worked on for three months to a cheaper competitor." }],
      "E2": [{ id: "ITM", esg: 1, text: "Your account executives are burned out and tired of the endless, grinding rejection of cold-calling. You must rally them." }],
      "E3": [{ id: "ITM", esg: 1, text: "Senior reps are demotivated and angry after corporate implemented a mandatory 10% price hike across their portfolios." }],
      "M1": [{ id: "ITM", esg: 1, text: "Sales managers are deeply cynical about a new, highly restrictive CRM compliance policy. You must inspire their enthusiastic adoption." }],
      "M2": [{ id: "ITM", esg: 1, text: "National directors are exhausted and defensive after being handed seemingly impossible growth targets by the board. You must build their belief." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must inspire a battered national salesforce to go back on the offensive after losing market dominance to an aggressive new disruptor." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "An admin assistant is drained and feeling unappreciated after dealing with constant complaints about the office coffee machine." }],
      "E2": [{ id: "ITM", esg: 1, text: "Your reception team is exhausted after managing a chaotic, 500-person multi-day corporate conference." }],
      "E3": [{ id: "ITM", esg: 1, text: "Facilities coordinators are demoralized because their hard work behind the scenes is entirely ignored by the executive team." }],
      "M1": [{ id: "ITM", esg: 1, text: "Admin managers are deeply cynical about severe new overhead budget cuts. You must inspire them to find creative, positive solutions." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional office heads are exhausted and resistant to a massive corporate relocation project. You must win their enthusiastic support." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must keep the facilities and admin teams motivated and energized while executing a chaotic, highly stressful corporate headquarters relocation." }] 
    }
  },
  "LS10": { // Contingent Exchange (Fully Graded)
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "You need your packing team to stay two hours late on a Friday to finish a critical customer order." }],
      "E2": [{ id: "ITM", esg: 1, text: "You need your operators to hit a record-breaking volume target this shift, and want to offer them an early release if they achieve it." }],
      "E3": [{ id: "ITM", esg: 1, text: "You need shift leads to volunteer for unpopular weekend cover, promising them their choice of shifts next month in return." }],
      "M1": [{ id: "ITM", esg: 1, text: "You structure the quarterly bonuses for your production supervisors so they only pay out if scrap waste is reduced by 5%." }],
      "M2": [{ id: "ITM", esg: 1, text: "You explicitly link your plant directors' annual performance ratings to their adherence to strict new safety KPIs." }],
      "M4": [{ id: "ITM", esg: 1, text: "You are redesigning the annual performance bonus structure for all plant managers to directly tie their payouts to strict energy reduction targets." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "You need a technician to volunteer for weekend cover, and you want to offer them premium time-off-in-lieu (TOIL) in exchange." }],
      "E2": [{ id: "ITM", esg: 1, text: "You need your mechanics to finish an overhaul incredibly fast, offering them the premium day-shift next week if they succeed." }],
      "E3": [{ id: "ITM", esg: 1, text: "You need shift leads to handle a massive breakdown safely, promising to approve their requested training budgets in return." }],
      "M1": [{ id: "ITM", esg: 1, text: "You tie your maintenance planners' quarterly bonuses directly to verifiable improvements in Mean Time Between Failures (MTBF)." }],
      "M2": [{ id: "ITM", esg: 1, text: "You link the regional engineering leads' annual payouts explicitly to their efficiency in managing CapEx budgets." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must restructure the maintenance director compensation packages to penalize them financially for unplanned critical line downtime." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "You need a draftsman to rush a drawing overnight, and you promise to assign them to a highly desirable upcoming project if they deliver." }],
      "E2": [{ id: "ITM", esg: 1, text: "You need your engineers to skip lunch to finish a prototype, offering them a half-day off on Friday as a reward." }],
      "E3": [{ id: "ITM", esg: 1, text: "You need your project leads to hit a nearly impossible deadline, promising them tickets to a premier industry conference if they succeed." }],
      "M1": [{ id: "ITM", esg: 1, text: "You tie your project managers' performance bonuses directly to their strict adherence to the capital budget." }],
      "M2": [{ id: "ITM", esg: 1, text: "You link the regional engineering directors' annual payouts explicitly to their adoption of sustainable, green-design practices." }],
      "M4": [{ id: "ITM", esg: 1, text: "You are designing an R&D incentive scheme that directly ties executive equity payouts to the number of successful patents filed." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "You need an inspector to cover a sick colleague's shift, ensuring they clearly understand the overtime rate they will receive." }],
      "E2": [{ id: "ITM", esg: 1, text: "You need your lab techs to process a massive backlog of samples, offering a team lunch if the queue is cleared by 5 PM." }],
      "E3": [{ id: "ITM", esg: 1, text: "You need your shift leads to execute a flawless weekend audit, promising them their choice of holiday schedules in return." }],
      "M1": [{ id: "ITM", esg: 1, text: "You tie your QA managers' quarterly bonuses directly to verifiable reductions in external customer defect rates." }],
      "M2": [{ id: "ITM", esg: 1, text: "You link the regional quality directors' annual payouts explicitly to their facility's ISO audit scores." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must negotiate a bonus structure for regional QA directors that completely zeroes out their payout if a major compliance breach occurs." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "You offer your picking team the option to leave an hour early on Friday if they manage to clear the entire dispatch backlog by lunch." }],
      "E2": [{ id: "ITM", esg: 1, text: "You need your forklift drivers to work through a public holiday, making sure they fully understand the premium pay structure." }],
      "E3": [{ id: "ITM", esg: 1, text: "You need shift leads to run a brutal night-shift physical inventory count, promising them exclusively day-shifts next month." }],
      "M1": [{ id: "ITM", esg: 1, text: "You tie your warehouse managers' quarterly bonuses directly to their site's verifiable inventory accuracy percentages." }],
      "M2": [{ id: "ITM", esg: 1, text: "You link the national hub directors' annual payouts explicitly to their truck-turnaround times and dock efficiency." }],
      "M4": [{ id: "ITM", esg: 1, text: "You tie the logistics directors' annual bonuses explicitly to inventory accuracy rates and reduction of damaged goods during transit." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "You need a clerk to do tedious manual data entry, offering them the preferred desk by the window if they finish it without errors." }],
      "E2": [{ id: "ITM", esg: 1, text: "You need your schedulers to completely rework the weekly plan overnight, offering them a remote work-from-home day as a reward." }],
      "E3": [{ id: "ITM", esg: 1, text: "You need your shift leads to resolve a massive, high-stress capacity crisis, promising them upgraded dual-monitors if they succeed." }],
      "M1": [{ id: "ITM", esg: 1, text: "You tie your planning managers' quarterly bonuses directly to their 30-day forecast accuracy metrics." }],
      "M2": [{ id: "ITM", esg: 1, text: "You link the regional planning directors' annual payouts explicitly to their strict compliance with the global S&OP process." }],
      "M4": [{ id: "ITM", esg: 1, text: "You restructure the planning executives' compensation so that 40% of their bonus is tied exclusively to working capital and inventory optimization." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "You need a coordinator to monitor a critical shipment over the weekend, offering them an extra day off next week in return." }],
      "E2": [{ id: "ITM", esg: 1, text: "You need your dispatchers to manually track down 50 lost trucks, offering them premium TOIL (time off in lieu) for the effort." }],
      "E3": [{ id: "ITM", esg: 1, text: "You need your shift leads to handle a brutal, stressful port strike, promising to fund a massive team dinner once it's resolved." }],
      "M1": [{ id: "ITM", esg: 1, text: "You tie your logistics managers' quarterly bonuses directly to hard, verifiable reductions in spot-freight usage." }],
      "M2": [{ id: "ITM", esg: 1, text: "You link the regional supply chain directors' annual payouts explicitly to their On-Time-In-Full (OTIF) delivery metrics." }],
      "M4": [{ id: "ITM", esg: 1, text: "You implement a stringent vendor contract model where suppliers receive lucrative volume bonuses only if they hit 99% On-Time-In-Full (OTIF)." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "You need a buyer to expedite a messy PO, promising to highlight their effort in the monthly departmental newsletter if successful." }],
      "E2": [{ id: "ITM", esg: 1, text: "You need your purchasing assistants to run 50 tedious RFQs today, offering them a remote-work Friday if the queue is cleared." }],
      "E3": [{ id: "ITM", esg: 1, text: "You need your senior buyers to handle a deeply unpleasant, hostile vendor, promising to send them to a premier industry conference in return." }],
      "M1": [{ id: "ITM", esg: 1, text: "You tie your category managers' quarterly bonuses directly to hard, audited cost savings in their portfolios." }],
      "M2": [{ id: "ITM", esg: 1, text: "You link the divisional procurement directors' annual payouts explicitly to their success in consolidating local vendors into national contracts." }],
      "M4": [{ id: "ITM", esg: 1, text: "You tie category manager bonuses directly to hard, audited cost savings, ensuring they only get paid if the company's bottom line improves." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "You need an operator to perform a deep-clean of the cooling towers, offering them their choice of shifts next month as a reward." }],
      "E2": [{ id: "ITM", esg: 1, text: "You need your technicians to manually check 500 steam traps, offering them premium overtime rates for the tedious work." }],
      "E3": [{ id: "ITM", esg: 1, text: "You need your shift leads to execute a highly stressful blackout-recovery drill, promising them new, upgraded two-way radios in return." }],
      "M1": [{ id: "ITM", esg: 1, text: "You tie your utility managers' quarterly bonuses directly to verifiable reductions in plant water consumption." }],
      "M2": [{ id: "ITM", esg: 1, text: "You link the regional energy directors' annual payouts explicitly to their success in improving overall energy efficiency per ton produced." }],
      "M4": [{ id: "ITM", esg: 1, text: "You explicitly link the plant managers' annual payouts to achieving specific, audited reductions in carbon emissions and water usage." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "You need a recruiter to screen 50 extra CVs tonight, offering to nominate them for the 'Employee of the Month' award in exchange." }],
      "E2": [{ id: "ITM", esg: 1, text: "You need your coordinators to run a massive weekend induction session, offering them premium time-off-in-lieu (TOIL) for giving up their Saturday." }],
      "E3": [{ id: "ITM", esg: 1, text: "You need your HR Business Partners to handle a highly unpleasant round of layoffs, promising them high-visibility executive exposure on the next project." }],
      "M1": [{ id: "ITM", esg: 1, text: "You tie your HR managers' quarterly bonuses directly to strict reductions in average 'time-to-hire' metrics." }],
      "M2": [{ id: "ITM", esg: 1, text: "You link the regional HR directors' annual payouts explicitly to verifiable improvements in their divisional retention and engagement scores." }],
      "M4": [{ id: "ITM", esg: 1, text: "You mandate that 30% of the C-Suite's annual bonus be tied directly to achieving measurable diversity, equity, and retention metrics." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "You need a payroll clerk to manually audit 500 lines of data over the weekend due to a software glitch, ensuring they understand the double-time pay." }],
      "E2": [{ id: "ITM", esg: 1, text: "You need your analysts to build a massive slide deck overnight, offering them the entire day off on Friday as a reward." }],
      "E3": [{ id: "ITM", esg: 1, text: "You need your senior accountants to close the month-end books a day early, promising to fund a lavish team lunch if they succeed." }],
      "M1": [{ id: "ITM", esg: 1, text: "You tie your credit managers' quarterly bonuses directly to hard reductions in Outstanding Days Sales (DSO)." }],
      "M2": [{ id: "ITM", esg: 1, text: "You link the regional CFOs' annual payouts explicitly to their success in reducing overall working capital requirements." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must negotiate a complex executive compensation package that claws back equity if long-term financial compliance metrics are missed." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "You need a sysadmin to stay until 2 AM to patch servers, ensuring they know they will get paid double-time for the effort." }],
      "E2": [{ id: "ITM", esg: 1, text: "You need your developers to crunch code all weekend to meet a deadline, offering them tickets to a premier tech hackathon as a reward." }],
      "E3": [{ id: "ITM", esg: 1, text: "You need your senior infrastructure team to execute a highly stressful cloud migration, promising them brand new, high-end laptops in return." }],
      "M1": [{ id: "ITM", esg: 1, text: "You tie your IT managers' quarterly bonuses directly to strict adherence to helpdesk ticket-resolution SLAs." }],
      "M2": [{ id: "ITM", esg: 1, text: "You link the regional CIOs' annual payouts explicitly to the speed and success of their legacy-to-cloud infrastructure migrations." }],
      "M4": [{ id: "ITM", esg: 1, text: "You design a compensation model for the CIO and IT directors that heavily penalizes their bonuses for any unplanned critical system downtime." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "You offer a junior rep a chance to move to a higher commission tier if they successfully cold-call 100 new leads this week." }],
      "E2": [{ id: "ITM", esg: 1, text: "You need your field reps to travel extensively over a holiday weekend, offering them premium corporate expense accounts for the trip." }],
      "E3": [{ id: "ITM", esg: 1, text: "You need your senior account executives to aggressively close a massive deal, promising them guaranteed entry into the 'President's Club' if they win it." }],
      "M1": [{ id: "ITM", esg: 1, text: "You tie your sales managers' quarterly bonuses directly to profit margin percentage rather than raw revenue volume." }],
      "M2": [{ id: "ITM", esg: 1, text: "You link the national sales directors' annual payouts explicitly to their success in stealing targeted market share from a specific competitor." }],
      "M4": [{ id: "ITM", esg: 1, text: "You restructure the national sales directors' bonuses to pay out based on profit margin rather than pure gross revenue volume." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "You need an assistant to help set up 200 chairs for a town hall, promising them public recognition during the event." }],
      "E2": [{ id: "ITM", esg: 1, text: "You need your receptionists to cover an unpopular, late-night corporate event, making sure they clearly understand the premium overtime pay." }],
      "E3": [{ id: "ITM", esg: 1, text: "You need your facilities coordinators to execute a highly stressful office move, promising them first pick of the new ergonomic chairs." }],
      "M1": [{ id: "ITM", esg: 1, text: "You tie your admin managers' quarterly bonuses directly to verifiable reductions in external vendor and facility overhead costs." }],
      "M2": [{ id: "ITM", esg: 1, text: "You link the regional office heads' annual payouts explicitly to their success in improving space utilization and reducing their physical footprint." }],
      "M4": [{ id: "ITM", esg: 1, text: "You draft external facility management contracts that heavily dock the vendor's monthly payout if they miss strict Service Level Agreements (SLAs)." }] 
    }
  },

  "LS-S1": { // Flexibility in Approach (Fully Graded)
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must adapt your training style because a new operator learns visually, while a veteran technician prefers written manuals." }],
      "E2": [{ id: "ITM", esg: 1, text: "You have two operators learning a new machine. One needs constant hands-on reassurance, while the other wants to figure it out alone. You must adapt to both." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are dealing with a stubborn, highly experienced veteran operator and an eager but clumsy new hire. You must flex your leadership style for each." }],
      "M1": [{ id: "ITM", esg: 1, text: "You manage two shift supervisors: one needs tight, daily micromanagement, while the other needs total autonomy. You must adapt your approach." }],
      "M2": [{ id: "ITM", esg: 1, text: "You are managing three regional plants. One has a rigid, hierarchical culture, while another is highly informal. You must flex your style to succeed in both." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must completely adapt your rigid corporate leadership style to successfully integrate a newly acquired, highly informal startup." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "You need to explain a repair differently to an experienced fitter compared to a brand new apprentice." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must quickly shift your leadership style from collaborative problem-solving to highly directive command during an urgent, dangerous breakdown." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are dealing with a highly aggressive production manager and a deeply passive, cooperative one. You must adapt your negotiation style for each." }],
      "M1": [{ id: "ITM", esg: 1, text: "You manage a highly theoretical, data-driven maintenance planner and a highly practical, hands-on shift lead. You must adapt how you communicate with both." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must flex your leadership approach when demanding budget from the rigid corporate finance team versus selling the strategy to your rugged plant heads." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must merge two regional plants with completely opposite maintenance philosophies without alienating either leadership team." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "You are managing two draftsmen: one needs highly detailed instructions, while the other needs open-ended creative freedom." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must adapt your communication style when explaining a design to a highly visual creative designer versus a deeply mathematical stress-analyst." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are dealing with a panicked, highly stressed installation contractor and a laid-back, slow-moving equipment vendor. You must manage both effectively." }],
      "M1": [{ id: "ITM", esg: 1, text: "You manage a highly creative, chaotic R&D team and a rigid, rules-obsessed compliance engineering team. You must flex your leadership style daily." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must adapt your engineering leadership norms when collaborating with strict European design standards versus highly flexible Asian manufacturing realities." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must lead a joint venture where your traditional engineering directors must collaborate with fast-paced, agile software developers." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must adjust your tone when rejecting a batch: one line manager is defensive, while another is highly cooperative." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must explain a defect differently to an angry, stressed production supervisor compared to a calm, analytical lab manager." }],
      "E3": [{ id: "ITM", esg: 1, text: "You must flex your auditing style. When inspecting a notoriously messy plant, you are rigid; when inspecting a pristine one, you are collaborative." }],
      "M1": [{ id: "ITM", esg: 1, text: "You manage a strict, unforgiving compliance officer and a highly pragmatic, business-focused lab manager. You must adapt how you lead both." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must adapt your global QA strategy rollout to account for the vastly different maturity levels and cultures of your regional facilities." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must align a rigid, highly bureaucratic QA division with a fast-moving R&D division without compromising compliance." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "You are dealing with two forklift drivers: one is fast but careless, the other is slow but highly accurate. Both need different coaching." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must adjust your leadership style. You are highly collaborative during slow periods, but strictly directive during the chaotic end-of-month rush." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are managing a veteran picker who hates new technology and a young recruit who loves it. You must adapt how you train them on the new scanners." }],
      "M1": [{ id: "ITM", esg: 1, text: "You manage a deeply traditional, intuition-based shift lead and a highly analytical, data-driven inventory manager. You must flex your approach." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must adapt your leadership style when managing a highly militant, unionized logistics hub versus a non-unionized, flexible regional depot." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must adapt the global logistics strategy to accommodate both highly automated mega-hubs and entirely manual regional depots." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must change your communication style when dealing with a panicked sales rep versus a highly analytical production supervisor." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must adapt your tone when demanding data from a notoriously stubborn factory manager versus a highly cooperative one." }],
      "E3": [{ id: "ITM", esg: 1, text: "You must flex your scheduling style. When forecasting a highly volatile new product, you are agile; when scheduling a stable legacy product, you are rigid." }],
      "M1": [{ id: "ITM", esg: 1, text: "You manage a highly data-driven, introverted analyst and a highly intuitive, extroverted scheduler. You must adapt how you lead them." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must adapt your global S&OP rollout approach depending on whether the regional market is highly mature and predictable or emerging and chaotic." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must lead a global S&OP transition by adapting your approach for highly resistant regional directors versus enthusiastic early adopters." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must handle a deeply confused international driver differently than you would a rude, aggressive local courier." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must adapt your tone when escalating a delay to a highly sympathetic client versus a notoriously hostile, unforgiving client." }],
      "E3": [{ id: "ITM", esg: 1, text: "You must flex your leadership style from highly collaborative during normal operations to ruthlessly directive during a catastrophic port strike." }],
      "M1": [{ id: "ITM", esg: 1, text: "You manage a highly strategic, big-picture procurement lead and a deeply tactical, detail-obsessed logistics manager. You must adapt to both." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must adapt your global supply chain strategy to account for the vastly different regulatory and cultural environments across your regional hubs." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must pivot your negotiation strategy entirely when dealing with a monopolistic global shipping line versus a struggling local partner." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must adapt your negotiation tactics mid-meeting when a vendor unexpectedly shifts from cooperative to highly defensive." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must change your approach when negotiating with a massive, inflexible global monopoly versus a small, hungry local supplier." }],
      "E3": [{ id: "ITM", esg: 1, text: "You must flex your purchasing style. When buying raw commodities, you are ruthlessly transactional; when buying complex engineering parts, you are collaborative." }],
      "M1": [{ id: "ITM", esg: 1, text: "You manage a highly relationship-focused, empathetic buyer and a ruthlessly analytical, cold negotiator. You must adapt how you coach them." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must flawlessly flex your negotiation tactics and professional etiquette when moving between high-stakes deals in Asian, European, and US markets." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must successfully navigate radically different cultural business norms while negotiating massive contracts in Asia, Europe, and the US." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must issue instructions differently during a sudden power-loss panic compared to a routine maintenance shutdown." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must adapt your explanation of a steam-trap failure depending on whether you are talking to a highly technical engineer or a non-technical manager." }],
      "E3": [{ id: "ITM", esg: 1, text: "During a blackout, you must manage a frantic, yelling production manager very differently than you manage a calm, methodical control-room operator." }],
      "M1": [{ id: "ITM", esg: 1, text: "You manage a deeply traditional, 'keep-it-running' boiler operator and a modern, data-obsessed green-energy engineer. You must flex your style." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must adapt your sustainability pitches. For cost-obsessed regional directors, you highlight savings; for ESG-focused directors, you highlight carbon reduction." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must adapt your strategic messaging when pitching green-energy investments to cost-obsessed shareholders versus environmental regulators." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "You are mediating a grievance between a highly emotional employee and a highly analytical, detached manager." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must adapt your interview style drastically when interviewing a nervous, entry-level warehouse worker versus a highly confident senior director." }],
      "E3": [{ id: "ITM", esg: 1, text: "You are delivering performance feedback. One employee is deeply insecure and needs praise; the other is arrogant and needs hard, blunt data. You adapt to both." }],
      "M1": [{ id: "ITM", esg: 1, text: "You manage a highly empathetic, employee-focused HRBP and a strict, rigid, compliance-focused ER specialist. You must flex your leadership approach." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must adapt your regional HR strategy to succeed in heavily unionized, militant European markets versus highly flexible, 'at-will' US markets." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must completely adapt your global HR strategy to account for starkly different labor laws and cultural norms in European and Asian markets." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must adjust your feedback approach when correcting a defensive senior clerk versus an apologetic junior clerk." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must adapt your communication style when explaining a complex budget variance to a technical engineer versus a creative marketing director." }],
      "E3": [{ id: "ITM", esg: 1, text: "You must pivot your tone when dealing with a vendor who is genuinely struggling to pay versus a vendor who is deliberately withholding payment." }],
      "M1": [{ id: "ITM", esg: 1, text: "You manage a deeply risk-averse, rigid internal auditor and a highly aggressive, growth-focused FP&A manager. You must adapt how you lead both." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must flex your financial controls strategy. A mature, cash-cow division requires rigid cost-control, while a fast-growing startup unit requires agile funding." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must alter your financial leadership approach when dealing with risk-averse internal auditors versus aggressive, growth-focused board members." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must change your troubleshooting tone when supporting a highly tech-illiterate user compared to an arrogant power-user." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must adapt your explanation of a server outage depending on whether you are updating the highly technical CIO or the non-technical Head of Sales." }],
      "E3": [{ id: "ITM", esg: 1, text: "You must shift your leadership style from highly collaborative during a routine software design sprint to ruthlessly dictatorial during a critical server crash." }],
      "M1": [{ id: "ITM", esg: 1, text: "You manage a highly rigid, paranoid cybersecurity specialist and a deeply creative, fast-moving software developer. You must adapt your approach for each." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must flex your IT governance strategy, applying incredibly strict controls in heavily regulated regions while allowing more sandbox freedom in others." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must adapt your leadership style to manage traditional, waterfall-based infrastructure teams alongside highly agile, modern cloud developers." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must pivot your sales pitch mid-meeting when the client brings in a highly technical engineer to interrogate your proposal." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must adapt your negotiation style drastically when dealing with a warm, relationship-focused client versus a cold, ruthlessly analytical procurement officer." }],
      "E3": [{ id: "ITM", esg: 1, text: "You must change your approach when warmly renegotiating a renewal with a legacy client versus aggressively cold-calling a hostile new lead." }],
      "M1": [{ id: "ITM", esg: 1, text: "You manage a highly collaborative, team-oriented account manager and a ruthless, lone-wolf star performer. You must adapt your leadership style for both." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must flex your sales strategy entirely, driving high-margin consultative selling in mature regions while pushing aggressive volume discounting in emerging markets." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must manage aggressive, transactional direct-sales directors very differently from your long-term, relationship-focused enterprise account managers." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must adapt your tone when enforcing building rules with a VIP corporate visitor compared to a daily delivery courier." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must change your approach when explaining a facility delay to a highly understanding manager versus a notoriously demanding executive." }],
      "E3": [{ id: "ITM", esg: 1, text: "You must flex your style. When organizing a chaotic company party you are highly agile, but when organizing a board meeting you are rigidly structured." }],
      "M1": [{ id: "ITM", esg: 1, text: "You manage a detail-obsessed, highly rigid facility coordinator and a big-picture, chaotic event manager. You must adapt your leadership approach." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must flex your corporate real estate policies, enforcing strict density rules in expensive urban high-rises while allowing relaxed layouts in rural sites." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must design corporate policies that flex to accommodate both fully remote knowledge workers and highly essential, on-site factory staff." }] 
    }
  },
  "LS-S2": { // Future Direction Communication (Fully Graded)
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must explain to your line operators exactly how their hourly output targets connect to the factory's monthly goals." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must explain to the shift why a new tool layout will ultimately make next week's changeovers much easier for them." }],
      "E3": [{ id: "ITM", esg: 1, text: "You must translate the Plant Manager's complex monthly KPI dashboard into simple, daily shift targets that your operators actually care about." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must sell your highly skeptical shift supervisors on a painful 6-month Lean Manufacturing rollout, convincing them it's worth the disruption." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate a clear, 2-year capacity expansion roadmap to regional plant heads who are currently drowning in daily production backlogs." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must articulate a clear, compelling 5-year roadmap for full factory automation to a board concerned about immediate ROI." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must communicate to the shift technicians how the new digital logging system will eventually reduce their weekend callouts." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must explain to your mechanics exactly how meticulously logging their parts usage today will prevent future stock-outs." }],
      "E3": [{ id: "ITM", esg: 1, text: "You must translate a highly complex annual preventative maintenance strategy into daily tasks that skeptical shift technicians will actually follow." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must sell your traditional maintenance planners on a painful transition from a reactive 'firefighting' culture to a disciplined, preventive one." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate a multi-year CMMS digitization strategy to regional directors who fiercely prefer their localized, paper-based systems." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must present a unified vision of predictive, AI-driven maintenance to regional directors who are fiercely attached to reactive repairs." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "You need to explain to the drafting team how a small change in their CAD workflow will support next year's major product launch." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must explain to a team of draftsmen exactly how standardizing their drawing layers today will prevent massive fabrication errors downstream." }],
      "E3": [{ id: "ITM", esg: 1, text: "You must translate a client's highly abstract, 5-year product roadmap into immediate, concrete design priorities for your engineering team." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must sell your veteran project managers on a painful, highly disruptive transition from 2D drafting to full 3D BIM modeling." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate the strategic, long-term value of standardizing all global plants on a single equipment platform to regional directors who want local autonomy." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must articulate the strategic necessity of transitioning the entire enterprise to biodegradable materials to skeptical commercial executives." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must explain to floor inspectors why the new, stricter testing parameters are critical for a new premium client." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must explain to your lab techs exactly how their daily titration logs feed into the company's critical annual ISO certification." }],
      "E3": [{ id: "ITM", esg: 1, text: "You must translate corporate's highly abstract 'Zero Defect' vision into practical, daily quality behaviors that the floor operators can actually understand." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must sell your QA managers on a highly painful, disruptive migration from paper records to a fully digital, paperless Quality Management System (QMS)." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate a multi-year supplier quality roadmap to regional QA heads who are currently overwhelmed by daily vendor defects." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must rally the global executive team around a vision of 'Zero Defects', convincing them it is a revenue driver, not a cost center." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must explain to the picking team how rearranging the aisles today will make the upcoming peak season much easier for them." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must explain to the forklift drivers exactly how scanning every single barcode connects to the site's overall dispatch success rate." }],
      "E3": [{ id: "ITM", esg: 1, text: "You must translate the Logistics Director's abstract inventory-reduction goals into concrete, daily staging tasks for the shift leads." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must sell your veteran warehouse managers on a highly disruptive, chaotic WMS software implementation, convincing them it's worth the pain." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate a 3-year national network optimization strategy to regional hub managers who are terrified of losing their headcount." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must cast a vision for a fully integrated, national logistics network to regional managers who fear losing their local autonomy." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must communicate to the scheduling clerks how migrating to a new software dashboard will prevent future weekend overtime." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must explain to your clerks exactly why meticulously filling out a new forecast template today prevents massive scheduling headaches at month-end." }],
      "E3": [{ id: "ITM", esg: 1, text: "You must translate the grand vision of the S&OP process to highly skeptical, tactical production supervisors who just want to run their machines." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must sell your planning managers on a highly stressful transition from weekly batch scheduling to daily, agile dynamic scheduling." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate the multi-year roadmap for AI-driven demand forecasting to regional commercial heads who deeply distrust algorithms." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must articulate a compelling vision for algorithmic demand forecasting to a traditional executive team that relies entirely on sales intuition." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must explain to a frustrated coordinator how a new, complex customs protocol will ultimately safeguard their shipments." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must explain to your dispatchers exactly how logging correct trailer numbers today prevents massive demurrage fees downstream." }],
      "E3": [{ id: "ITM", esg: 1, text: "You must translate the Supply Chain Director's abstract cost-saving vision into actionable daily routines for the chaotic dispatch desk." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must sell your logistics managers on a highly disruptive major carrier consolidation strategy, convincing them it's worth breaking old vendor ties." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate a 5-year 'green logistics' and carbon-reduction roadmap to regional directors who are solely focused on cutting freight costs." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must communicate a 10-year strategic roadmap for global supply chain resilience to shareholders demanding short-term cost cuts." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must explain to junior buyers how meticulous vendor scorecarding will eventually make their negotiations much easier." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must explain to your assistants exactly why the tedious, seemingly pointless new PO approval process protects the company from audit failures." }],
      "E3": [{ id: "ITM", esg: 1, text: "You must translate the CPO's highly abstract 'Strategic Sourcing' vision into concrete, daily negotiation tactics for your transactional buyers." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must sell your category managers on a highly disruptive transition to a fully automated e-procurement platform that changes how they work." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate a multi-year vendor consolidation roadmap to regional directors who are fiercely protective of their local, unapproved suppliers." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must rally the enterprise around a vision of sustainable, ethical sourcing, even though it will initially increase raw material costs." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must communicate to the boiler operators how their daily efficiency logs roll up into the company's annual sustainability report." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must explain to your technicians exactly how taking an extra 5 minutes to calibrate a sensor today prevents a massive shutdown tomorrow." }],
      "E3": [{ id: "ITM", esg: 1, text: "You must translate the plant's abstract 10% energy reduction goals into practical, daily operational tweaks for the boiler operators." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must sell your utility managers on a highly disruptive, massive smart-metering installation that will require significant downtime." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate the 5-year renewable energy transition roadmap to regional plant heads who are currently struggling just to keep the lights on." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must articulate a compelling vision for achieving Net Zero emissions to a board that is highly skeptical of green-energy investments." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must explain to recruiters how a new, tedious data-entry requirement will ultimately give them better talent analytics next quarter." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must explain to your coordinators exactly why the new, slightly slower candidate screening process will ultimately yield better hires and less turnover." }],
      "E3": [{ id: "ITM", esg: 1, text: "You must translate the CHRO's abstract 'Culture of Feedback' vision into concrete, practical steps for highly skeptical frontline manufacturing supervisors." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must sell your HR Business Partners on a highly disruptive, painful migration to a new global HRIS platform that will temporarily double their workload." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate a multi-year talent and succession roadmap to regional VPs who only care about filling immediate, urgent vacancies." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must articulate a clear, inspiring vision for the company's culture and identity following a highly disruptive, chaotic corporate merger." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must explain to the accounts payable team how a new invoice-scanning tool fits into the department's goal of going paperless." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must explain to your clerks exactly why transitioning to a new, unfamiliar software dashboard today will make month-end much easier next year." }],
      "E3": [{ id: "ITM", esg: 1, text: "You must translate the CFO's highly abstract working-capital and cash-flow vision into simple, daily priorities for the accounts payable team." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must sell your finance managers on a highly stressful transition from static annual budgets to dynamic, rolling monthly forecasts." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate the multi-year financial digitization roadmap to regional controllers who are deeply attached to their legacy Excel models." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must cast a vision to transform the global finance function from historical scorekeepers into predictive, strategic business partners." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must communicate to the helpdesk how classifying tickets differently today will lead to a new self-service portal next year." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must explain to your technicians exactly how strictly enforcing a tedious naming convention today will save them hours during the next server migration." }],
      "E3": [{ id: "ITM", esg: 1, text: "You must translate the CIO's highly technical, abstract cybersecurity vision into practical, understandable behaviors for frustrated end-users." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must sell your IT managers on a highly painful, politically explosive migration from beloved on-premise servers to the cloud." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate the 3-year enterprise architecture roadmap to regional IT heads who only care about fixing today's broken laptops." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must rally the entire C-suite around a multi-year digital transformation vision, convincing them to abandon their legacy systems." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must explain to the sales reps how capturing more CRM data now will feed an AI tool that gives them better leads next month." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must explain to your junior reps exactly how meticulously logging their cold calls today feeds the pipeline for their bonuses next quarter." }],
      "E3": [{ id: "ITM", esg: 1, text: "You must translate the Sales Director's highly strategic margin-protection goals into concrete daily behaviors for volume-focused, discount-happy reps." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must sell your sales managers on a highly restrictive new pricing and discount matrix, convincing them it's worth losing some low-margin deals." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate the multi-year strategic shift from transactional product sales to premium solution-selling to heavily entrenched regional directors." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must articulate a strategic pivot from high-volume discounting to premium, consultative selling to a deeply entrenched national salesforce." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "You must explain to the facilities team how a new visitor management protocol is the first step in a broader site-security upgrade." }],
      "E2": [{ id: "ITM", esg: 1, text: "You must explain to your receptionists exactly how the annoying new visitor badge system is step one of a critical, site-wide security upgrade." }],
      "E3": [{ id: "ITM", esg: 1, text: "You must translate the CEO's abstract 'Return to Office' vision into a highly practical, welcoming reality for hesitant, grumbling employees." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must sell your admin managers on a highly disruptive new centralized facility management system that removes their ability to use local contractors." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must articulate the 3-year corporate real estate optimization strategy to regional heads who are terrified of losing their private offices." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must communicate a bold vision for the future of corporate workspace and remote work to an executive board resistant to change." }] 
    }
  },


  "LS-S3": { // Authority Distribution (Fully Graded)
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "You allow your most experienced operator to decide the order of the day's batch runs without needing your approval." }],
      "E2": [{ id: "ITM", esg: 1, text: "You delegate the entire line-setup process to a trusted technician, stepping back completely to let them lead." }],
      "E3": [{ id: "ITM", esg: 1, text: "You give your shift leads the authority to approve minor overtime requests without having to escalate them to you." }],
      "M1": [{ id: "ITM", esg: 1, text: "You empower your production supervisors to halt the line for quality reasons without needing your managerial sign-off." }],
      "M2": [{ id: "ITM", esg: 1, text: "You give plant managers full autonomy to select their own local equipment vendors, removing yourself from the approval loop." }],
      "M4": [{ id: "ITM", esg: 1, text: "You restructure the manufacturing division to push P&L accountability entirely down to the local plant directors." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "You give a senior technician the authority to order emergency replacement parts up to a certain value without your signature." }],
      "E2": [{ id: "ITM", esg: 1, text: "You put a mechanic in charge of a complex gearbox rebuild, explicitly telling them not to check in until it's finished." }],
      "E3": [{ id: "ITM", esg: 1, text: "You allow your shift leads to decide whether a broken machine requires a temporary fix or a full, immediate overhaul." }],
      "M1": [{ id: "ITM", esg: 1, text: "You empower maintenance planners to rewrite the PM schedule independently, trusting their judgment on machine wear." }],
      "M2": [{ id: "ITM", esg: 1, text: "You give regional engineering leads full authority to hire and fire specialized contractors without corporate oversight." }],
      "M4": [{ id: "ITM", esg: 1, text: "You decentralize the global maintenance strategy, giving regional heads absolute authority to choose their own CMMS software." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "You empower a junior engineer to sign off on minor drawing revisions without routing them through the senior design queue." }],
      "E2": [{ id: "ITM", esg: 1, text: "You allow a draftsman to independently choose the layout format for a new project, trusting their creative judgment." }],
      "E3": [{ id: "ITM", esg: 1, text: "You give a project engineer the authority to approve minor contractor change-orders on site without your review." }],
      "M1": [{ id: "ITM", esg: 1, text: "You empower engineering team leads to finalize machinery specifications directly with the vendor, bypassing your desk." }],
      "M2": [{ id: "ITM", esg: 1, text: "You grant regional directors the authority to deviate from the corporate engineering playbook if local conditions demand it." }],
      "M4": [{ id: "ITM", esg: 1, text: "You grant lead engineers total autonomy over their R&D budgets, removing the central steering committee from the approval process." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "You authorize floor inspectors to instantly quarantine suspicious pallets without waiting for a manager's confirmation." }],
      "E2": [{ id: "ITM", esg: 1, text: "You give a lab technician the authority to calibrate the spectrometers independently, removing the dual-signoff rule." }],
      "E3": [{ id: "ITM", esg: 1, text: "You empower your shift leads to officially close out minor deviation reports without escalating them for your signature." }],
      "M1": [{ id: "ITM", esg: 1, text: "You grant QA managers the authority to release held batches once they are satisfied, without requiring operational consensus." }],
      "M2": [{ id: "ITM", esg: 1, text: "You give regional quality heads the power to unilaterally ban underperforming suppliers from the corporate approved list." }],
      "M4": [{ id: "ITM", esg: 1, text: "You empower regional QA directors with the unilateral authority to halt production or block dispatches globally, regardless of commercial pressure." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "You allow the dispatch shift-lead to independently reallocate forklift drivers based on real-time dock congestion." }],
      "E2": [{ id: "ITM", esg: 1, text: "You give a trusted picker the authority to correct minor inventory discrepancies in the scanner without managerial override." }],
      "E3": [{ id: "ITM", esg: 1, text: "You empower your loading dock leads to reject unsafe trucks instantly without needing your physical inspection." }],
      "M1": [{ id: "ITM", esg: 1, text: "You grant warehouse managers the autonomy to redesign their own facility layouts without central supply chain approval." }],
      "M2": [{ id: "ITM", esg: 1, text: "You allow national hub directors to independently set their own peak-season staffing and overtime budgets." }],
      "M4": [{ id: "ITM", esg: 1, text: "You decentralize logistics operations, giving national hub managers full authority to negotiate their own final-mile courier contracts." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "You empower a scheduling clerk to automatically approve routine deadline extension requests from Production without your review." }],
      "E2": [{ id: "ITM", esg: 1, text: "You allow a planner to independently re-sequence a day's production run to optimize for raw material availability." }],
      "E3": [{ id: "ITM", esg: 1, text: "You give a senior scheduler the authority to push back directly on Commercial regarding impossible delivery dates." }],
      "M1": [{ id: "ITM", esg: 1, text: "You empower planning managers to finalize the monthly demand forecast without requiring your final sign-off." }],
      "M2": [{ id: "ITM", esg: 1, text: "You grant regional directors the autonomy to independently set their own safety stock levels based on local market risk." }],
      "M4": [{ id: "ITM", esg: 1, text: "You dismantle the central S&OP committee, pushing total demand-planning authority down to the regional commercial heads." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "You give a logistics coordinator the authority to upgrade delayed shipments to air-freight instantly, within a set budget." }],
      "E2": [{ id: "ITM", esg: 1, text: "You empower a dispatch analyst to independently select the daily carrier routing without your review." }],
      "E3": [{ id: "ITM", esg: 1, text: "You allow your shift leads to directly negotiate minor demurrage fee waivers with port authorities." }],
      "M1": [{ id: "ITM", esg: 1, text: "You grant logistics managers the autonomy to switch primary carriers mid-month if service levels drop." }],
      "M2": [{ id: "ITM", esg: 1, text: "You empower regional supply chain heads to establish their own localized, secondary distribution networks." }],
      "M4": [{ id: "ITM", esg: 1, text: "You grant regional supply chain directors the autonomy to bypass global strategic vendors and source locally during crises." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "You allow junior buyers to independently approve minor price variances on MRO items to prevent delivery delays." }],
      "E2": [{ id: "ITM", esg: 1, text: "You give an assistant the authority to finalize standard office-supply contracts without your signature." }],
      "E3": [{ id: "ITM", esg: 1, text: "You empower a senior buyer to independently reject non-compliant purchase requisitions from senior department heads." }],
      "M1": [{ id: "ITM", esg: 1, text: "You grant category managers the autonomy to lead and close mid-tier vendor negotiations entirely on their own." }],
      "M2": [{ id: "ITM", esg: 1, text: "You allow regional procurement directors to independently terminate underperforming suppliers without corporate review." }],
      "M4": [{ id: "ITM", esg: 1, text: "You empower category managers to execute multi-million dollar vendor contracts without requiring a final signature from the executive board." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "You authorize the night-shift boiler operator to initiate emergency shutdown protocols instantly if they detect an anomaly." }],
      "E2": [{ id: "ITM", esg: 1, text: "You empower a technician to independently adjust the chemical dosing in the water plant based on their own readings." }],
      "E3": [{ id: "ITM", esg: 1, text: "You give your shift leads the authority to order critical facility repairs on weekends without calling you." }],
      "M1": [{ id: "ITM", esg: 1, text: "You grant utility managers the autonomy to independently schedule preventative plant shutdowns with Operations." }],
      "M2": [{ id: "ITM", esg: 1, text: "You allow regional directors to independently select and fund their own site-specific green energy initiatives." }],
      "M4": [{ id: "ITM", esg: 1, text: "You grant site-level utilities managers full authority to trade their excess power back to the grid without corporate oversight." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "You allow a senior recruiter to independently make final salary offers to candidates within the approved banding." }],
      "E2": [{ id: "ITM", esg: 1, text: "You empower a coordinator to independently resolve minor payroll discrepancies with Finance without escalating." }],
      "E3": [{ id: "ITM", esg: 1, text: "You give an HR Business Partner the authority to officially issue a first written warning without your review." }],
      "M1": [{ id: "ITM", esg: 1, text: "You grant HR managers the autonomy to independently design and launch their own departmental training programs." }],
      "M2": [{ id: "ITM", esg: 1, text: "You empower regional HR directors to customize their own localized performance-review frameworks." }],
      "M4": [{ id: "ITM", esg: 1, text: "You distribute authority so that regional HR Business Partners can independently approve final union settlement agreements." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "You empower an accounts payable clerk to automatically clear minor invoice discrepancies under $50 without escalating." }],
      "E2": [{ id: "ITM", esg: 1, text: "You allow a junior analyst to publish the daily sales flash report directly to the executives without your review." }],
      "E3": [{ id: "ITM", esg: 1, text: "You give a senior accountant the authority to formally push back on invalid expense claims from company directors." }],
      "M1": [{ id: "ITM", esg: 1, text: "You grant finance managers the autonomy to independently approve mid-tier unbudgeted spend requests." }],
      "M2": [{ id: "ITM", esg: 1, text: "You allow divisional controllers to independently execute their own bad-debt write-offs without corporate approval." }],
      "M4": [{ id: "ITM", esg: 1, text: "You decentralize CapEx approval authority entirely, trusting divisional CFOs to align with corporate strategy without your signature." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "You give a trusted Level 1 helpdesk agent the authority to reset multi-factor authentication tokens without a manager's override." }],
      "E2": [{ id: "ITM", esg: 1, text: "You empower a junior developer to push non-critical bug fixes directly to the live environment." }],
      "E3": [{ id: "ITM", esg: 1, text: "You allow your senior sysadmin to independently schedule server downtime windows with the business units." }],
      "M1": [{ id: "ITM", esg: 1, text: "You grant IT managers the autonomy to directly purchase and deploy software tools under a specific budget threshold." }],
      "M2": [{ id: "ITM", esg: 1, text: "You empower regional CIOs to design and enforce their own localized data-retention policies." }],
      "M4": [{ id: "ITM", esg: 1, text: "You empower regional CIOs to design and manage their own local cloud infrastructure without waiting for global IT steering committee approval." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "You give a sales rep the authority to offer up to a 5% discretionary discount on the spot to close a hesitant client." }],
      "E2": [{ id: "ITM", esg: 1, text: "You empower a junior account executive to independently negotiate standard renewal terms without manager review." }],
      "E3": [{ id: "ITM", esg: 1, text: "You allow your senior reps to independently authorize rush-delivery exceptions with Supply Chain." }],
      "M1": [{ id: "ITM", esg: 1, text: "You grant sales managers the autonomy to directly handle and resolve high-value client escalations." }],
      "M2": [{ id: "ITM", esg: 1, text: "You empower national directors to independently design and fund their own regional marketing campaigns." }],
      "M4": [{ id: "ITM", esg: 1, text: "You grant regional sales directors absolute authority to restructure their local commission and rebate schemes without corporate review." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "You authorize the front desk receptionist to independently book emergency courier services when documents are delayed." }],
      "E2": [{ id: "ITM", esg: 1, text: "You empower an admin assistant to independently manage the corporate catering budget for weekly meetings." }],
      "E3": [{ id: "ITM", esg: 1, text: "You give your facilities coordinator the authority to instantly dismiss underperforming cleaning contractors on site." }],
      "M1": [{ id: "ITM", esg: 1, text: "You grant admin managers the autonomy to independently negotiate and sign mid-tier facility maintenance contracts." }],
      "M2": [{ id: "ITM", esg: 1, text: "You allow regional office heads to independently manage their own office-renovation capital budgets." }],
      "M4": [{ id: "ITM", esg: 1, text: "You give site facility managers full, unreviewed control over their operational budgets, trusting them to manage vendor relations directly." }] 
    }
  },
  "LS-S4": { // Decisiveness Under Pressure (Fully Graded)
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "A machine starts making an unusual noise. Without waiting for a mechanic, you confidently hit the emergency stop to prevent damage." }],
      "E2": [{ id: "ITM", esg: 1, text: "The primary packaging film runs out. You instantly decide to switch to the backup supplier's film without waiting for QA approval." }],
      "E3": [{ id: "ITM", esg: 1, text: "A sudden power dip causes a massive jam. With the supervisor away, you instantly coordinate the crew to manually clear it." }],
      "M1": [{ id: "ITM", esg: 1, text: "A key raw material is delayed. You instantly decide to change the entire shift's production schedule to keep the lines running." }],
      "M2": [{ id: "ITM", esg: 1, text: "A major mechanical failure threatens the month's output. You instantly authorize a risky, highly expensive expedited repair." }],
      "M4": [{ id: "ITM", esg: 1, text: "A highly profitable product line is showing sudden, unexplained safety anomalies. You must instantly decide whether to halt production globally." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "A critical valve bursts. You must instantly choose between rigging a risky temporary fix or shutting the line down for hours." }],
      "E2": [{ id: "ITM", esg: 1, text: "A motor is smoking. You instantly pull the fuse to kill the power, ignoring the production manager screaming at you to keep it running." }],
      "E3": [{ id: "ITM", esg: 1, text: "The only forklift breaks down. You instantly authorize a rapid, unapproved hydraulic patch so dispatch can meet the truck." }],
      "M1": [{ id: "ITM", esg: 1, text: "A critical spare part is missing. You instantly decide to cannibalize a less important machine to get the main line running." }],
      "M2": [{ id: "ITM", esg: 1, text: "A severe structural fault is found in a silo. You instantly command a complete site evacuation without waiting for structural engineers." }],
      "M4": [{ id: "ITM", esg: 1, text: "A catastrophic equipment failure occurs just as the supplier goes bankrupt. You must instantly authorize a wildly expensive, unproven retrofit." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "During installation, a blueprint mismatch is found. You must confidently authorize an on-the-fly modification so the contractor can proceed." }],
      "E2": [{ id: "ITM", esg: 1, text: "A critical CAD file is corrupted hours before the deadline. You instantly decide to rebuild the model from scratch rather than trying to salvage it." }],
      "E3": [{ id: "ITM", esg: 1, text: "A contractor hits an undocumented pipe. You instantly authorize a complete reroute of the trench to prevent project delays." }],
      "M1": [{ id: "ITM", esg: 1, text: "A major design flaw is found right before fabrication. You instantly scrap the drawings and force the team into a weekend redesign." }],
      "M2": [{ id: "ITM", esg: 1, text: "A supplier fails a fatal quality check on a custom part. You instantly pull the plug on the vendor, accepting a multi-month project delay." }],
      "M4": [{ id: "ITM", esg: 1, text: "A major competitor launches a disruptive technology. You must instantly decide whether to scrap a $20M R&D project to pivot your strategy." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "An automated sensor flags a potential defect, but visual inspection is clear. You must confidently decide whether to scrap the batch immediately." }],
      "E2": [{ id: "ITM", esg: 1, text: "A titration result comes back borderline. Without waiting for the lab manager, you instantly quarantine the entire production run." }],
      "E3": [{ id: "ITM", esg: 1, text: "You discover a minor documentation error on a shipped pallet. You instantly halt the truck at the gate before it leaves the yard." }],
      "M1": [{ id: "ITM", esg: 1, text: "A critical raw material fails inbound inspection. You instantly reject the massive delivery, knowing it will halt the factory for days." }],
      "M2": [{ id: "ITM", esg: 1, text: "An external auditor hints at a major compliance violation. You instantly shut down the affected department before the final report is written." }],
      "M4": [{ id: "ITM", esg: 1, text: "Social media rumors claim your product caused an illness, but lab data is inconclusive. You must instantly decide whether to issue a global recall." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "A forklift crashes into a racking upright. You must instantly clear the area and make a confident call on whether the rack is structurally compromised." }],
      "E2": [{ id: "ITM", esg: 1, text: "A pallet tips, spilling hazardous liquid. You instantly trigger the hazmat protocol and lock down the dock without waiting for a supervisor." }],
      "E3": [{ id: "ITM", esg: 1, text: "Three trucks arrive simultaneously and gridlock the yard. You instantly seize control of traffic and dictate who docks first." }],
      "M1": [{ id: "ITM", esg: 1, text: "The WMS software crashes during peak dispatch. You instantly pivot the entire warehouse to manual paper picking to keep trucks moving." }],
      "M2": [{ id: "ITM", esg: 1, text: "A severe winter storm threatens to strand your fleet. You instantly authorize massive overtime to load and dispatch every truck 12 hours early." }],
      "M4": [{ id: "ITM", esg: 1, text: "A massive fire destroys a critical regional distribution hub. You must instantly dictate how to reroute millions in inventory while the crisis is active." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "Two urgent orders clash for the same machine time. With the sales reps yelling, you confidently lock in the schedule and refuse to change it." }],
      "E2": [{ id: "ITM", esg: 1, text: "A key raw material is delayed by three days. You instantly rewrite the entire week's schedule to keep the plant busy with other products." }],
      "E3": [{ id: "ITM", esg: 1, text: "A machine breakdown halves capacity. You instantly decide which top-tier clients will receive short shipments without waiting for Sales to agree." }],
      "M1": [{ id: "ITM", esg: 1, text: "A massive demand spike hits unexpectedly. You instantly authorize the factory to run continuous weekend overtime to capture the volume." }],
      "M2": [{ id: "ITM", esg: 1, text: "A major supplier goes bankrupt. You instantly slash the national sales forecast by 30% and force the business to allocate remaining stock." }],
      "M4": [{ id: "ITM", esg: 1, text: "A global pandemic shatters all demand forecasts. You must instantly dictate a radical new S&OP strategy based on entirely speculative data." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "A critical shipment misses the cut-off. You instantly authorize a highly expensive direct-courier without waiting for your manager's approval." }],
      "E2": [{ id: "ITM", esg: 1, text: "A container is held at customs due to an error. You instantly authorize the payment of a heavy demurrage penalty to release it immediately." }],
      "E3": [{ id: "ITM", esg: 1, text: "A delivery route is flooded. You instantly reroute the trucks over a much longer, more expensive toll route to ensure they arrive." }],
      "M1": [{ id: "ITM", esg: 1, text: "A major port strikes. You instantly sign a premium contract to divert all incoming sea-freight to air-freight to protect production." }],
      "M2": [{ id: "ITM", esg: 1, text: "A 3PL provider suffers a catastrophic cyberattack. You instantly terminate their connection and divert all logistics to a secondary partner." }],
      "M4": [{ id: "ITM", esg: 1, text: "A geopolitical crisis instantly closes a major shipping canal. You must confidently commit millions in air-freight premiums before competitors secure the capacity." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "A supplier calls to say stock is running out globally. You instantly issue a massive PO to secure their remaining inventory without asking Finance." }],
      "E2": [{ id: "ITM", esg: 1, text: "A vendor tries to push an unapproved price hike on an urgent order. You instantly reject it and threaten to buy from their competitor." }],
      "E3": [{ id: "ITM", esg: 1, text: "A vital component goes obsolete. You instantly authorize the purchase of an expensive, alternative component to keep engineering moving." }],
      "M1": [{ id: "ITM", esg: 1, text: "A strategic supplier fails a major quality audit. You instantly freeze their account and trigger expensive emergency spot-buying protocols." }],
      "M2": [{ id: "ITM", esg: 1, text: "A tariff war slaps a 25% tax on your primary sourcing region. You instantly authorize the massive cost to shift supply chains to a new country." }],
      "M4": [{ id: "ITM", esg: 1, text: "Your primary raw material vendor suffers a catastrophic factory fire. You must instantly lock into 5-year contracts with unproven alternatives at massive premiums." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "The main compressor pressure drops rapidly. You must instantly decide whether to trip the entire system or try to isolate the fault under pressure." }],
      "E2": [{ id: "ITM", esg: 1, text: "A strange chemical smell emanates from the water plant. You instantly hit the emergency stop and evacuate the room." }],
      "E3": [{ id: "ITM", esg: 1, text: "The grid signals a massive power dip. You instantly shed non-critical loads across the factory, shutting down lines to save the main boiler." }],
      "M1": [{ id: "ITM", esg: 1, text: "A toxic leak is detected in the effluent discharge. You instantly seal the drain and report the breach to the environmental regulator." }],
      "M2": [{ id: "ITM", esg: 1, text: "A severe storm threatens the regional power grid. You instantly authorize the massive fuel expenditure to run the plant on diesel generators." }],
      "M4": [{ id: "ITM", esg: 1, text: "A massive cyberattack hits the national energy grid. You must instantly authorize a multi-million dollar switch to emergency localized power generation." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "An explosive argument breaks out between two employees. You instantly step in, separate them, and mandate they leave the floor." }],
      "E2": [{ id: "ITM", esg: 1, text: "A candidate shows up intoxicated for an interview. You instantly cancel the interview and arrange a taxi to send them home." }],
      "E3": [{ id: "ITM", esg: 1, text: "An employee reports a severe harassment incident. You instantly suspend the accused party pending investigation, despite their manager's protests." }],
      "M1": [{ id: "ITM", esg: 1, text: "A highly aggressive union rep threatens an illegal wildcat strike. You instantly dictate a firm legal warning without waiting for external counsel." }],
      "M2": [{ id: "ITM", esg: 1, text: "A devastating workplace accident occurs. You instantly take control of the crisis communications, locking down the site and managing the press." }],
      "M4": [{ id: "ITM", esg: 1, text: "A viral scandal erupts involving a senior executive. You must instantly advise the board on termination before the legal investigation is even complete." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "The payroll system crashes hours before processing. You instantly authorize manual, estimated payments to ensure staff are paid on time." }],
      "E2": [{ id: "ITM", esg: 1, text: "You spot a fraudulent expense claim from a senior manager. You instantly reject it and freeze their corporate card." }],
      "E3": [{ id: "ITM", esg: 1, text: "A key vendor threatens to stop supply due to a late payment. You instantly force an emergency wire transfer through, bypassing the standard run." }],
      "M1": [{ id: "ITM", esg: 1, text: "A critical client files for bankruptcy. You instantly freeze all their pending shipments and initiate aggressive debt recovery." }],
      "M2": [{ id: "ITM", esg: 1, text: "An internal audit uncovers massive financial irregularities in a regional office. You instantly suspend the regional controllers and seize their data." }],
      "M4": [{ id: "ITM", esg: 1, text: "A sudden, massive currency devaluation hits a key market. You must instantly execute highly aggressive financial hedges with incomplete risk data." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "You detect a suspicious script running on a server. You instantly pull the server offline, disrupting production, rather than waiting to analyze it." }],
      "E2": [{ id: "ITM", esg: 1, text: "A critical router fails during a sales presentation. You instantly bypass it and route traffic through an unsecured backup connection to save the pitch." }],
      "E3": [{ id: "ITM", esg: 1, text: "A frantic executive claims their laptop was stolen. You instantly trigger a remote data wipe without waiting to verify the theft." }],
      "M1": [{ id: "ITM", esg: 1, text: "A minor ransomware infection is detected on a local machine. You instantly isolate the entire sub-network, halting work for 50 people." }],
      "M2": [{ id: "ITM", esg: 1, text: "A devastating power surge destroys the primary data center. You instantly trigger the global disaster recovery failover protocol." }],
      "M4": [{ id: "ITM", esg: 1, text: "You detect a sophisticated zero-day breach. You must instantly decide to sever the company from the internet, accepting millions in lost revenue." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "A key client threatens to walk out of a negotiation. You instantly make a confident, unapproved counter-offer to save the deal." }],
      "E2": [{ id: "ITM", esg: 1, text: "A competitor slashes their price during your pitch. You instantly pivot your presentation to attack their quality, defending your premium margin." }],
      "E3": [{ id: "ITM", esg: 1, text: "A massive enterprise client demands a 10% rebate for a minor delivery delay. You instantly refuse, calling their bluff." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your biggest distributor threatens to delist your product. You instantly freeze their marketing funds and threaten to pull supply entirely." }],
      "M2": [{ id: "ITM", esg: 1, text: "A PR disaster hits your flagship product. You instantly pull the product from shelves nationally to protect the long-term brand equity." }],
      "M4": [{ id: "ITM", esg: 1, text: "A competitor launches a devastating price war. You must instantly decide whether to bleed margins to match them or hold firm and lose market share." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "A suspicious package arrives at the front desk. You instantly trigger an evacuation protocol without waiting for security to confirm the threat." }],
      "E2": [{ id: "ITM", esg: 1, text: "The fire alarm goes off during a massive VIP event. You instantly grab a megaphone and forcefully direct the evacuation." }],
      "E3": [{ id: "ITM", esg: 1, text: "A burst pipe is flooding the IT server room. You instantly break the glass to shut off the main water valve for the entire building." }],
      "M1": [{ id: "ITM", esg: 1, text: "A hostile ex-employee attempts to enter the building. You instantly order a hard lockdown of the facility." }],
      "M2": [{ id: "ITM", esg: 1, text: "A severe earthquake compromises the structural integrity of a regional office. You instantly sign a massive lease for emergency backup space." }],
      "M4": [{ id: "ITM", esg: 1, text: "A violent protest erupts outside the corporate headquarters. You must instantly execute emergency lockdown and evacuation procedures with no clear data." }] 
    }
  },
  "LS-S5": { // Responsibility Ownership (Fully Graded)
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "You accidentally load the wrong packaging reel, causing 20 minutes of downtime. You immediately tell your supervisor it was your fault." }],
      "E2": [{ id: "ITM", esg: 1, text: "You misread a batch record and add the wrong ingredient. You stop the line and own the mistake before it ruins the entire run." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift misses its production target entirely because of a scheduling call you made. You take the blame in the morning meeting." }],
      "M1": [{ id: "ITM", esg: 1, text: "A massive safety incident occurs under your watch due to a procedural gap. You stand before the safety committee and take full accountability." }],
      "M2": [{ id: "ITM", esg: 1, text: "A new Lean initiative you forced onto the regional plants causes a severe drop in output. You face the COO and own the failure entirely." }],
      "M4": [{ id: "ITM", esg: 1, text: "A strategic bet on a new manufacturing technology fails, costing millions. You stand before the board and take absolute personal accountability." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "You forget to tighten a fitting, causing a minor leak on startup. You instantly admit the error and go back to fix it." }],
      "E2": [{ id: "ITM", esg: 1, text: "You misdiagnose a fault, causing the line to be down for two extra hours. You take the heat from Production without making excuses." }],
      "E3": [{ id: "ITM", esg: 1, text: "You sign off on a repair that immediately fails again. You accept full responsibility for the oversight and fix it on your own time." }],
      "M1": [{ id: "ITM", esg: 1, text: "A critical spare part is out of stock because you forgot to adjust the reorder point. You own the error and absorb the commercial anger." }],
      "M2": [{ id: "ITM", esg: 1, text: "A new CMMS software rollout you championed is a disastrous, unusable failure. You take total ownership of the wasted CapEx." }],
      "M4": [{ id: "ITM", esg: 1, text: "A systemic failure in the maintenance strategy you designed causes a catastrophic plant shutdown. You refuse to blame the local plant directors." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "You make a calculation error that results in a fabricated part not fitting. You own the mistake entirely rather than blaming the fabricator." }],
      "E2": [{ id: "ITM", esg: 1, text: "You forget to update a blueprint revision, causing a contractor to build something wrong. You admit the oversight immediately." }],
      "E3": [{ id: "ITM", esg: 1, text: "A minor equipment installation fails due to your poor design spec. You take the blame and work the weekend to redesign it." }],
      "M1": [{ id: "ITM", esg: 1, text: "A massive new automation line fails to hit the promised speed due to your flawed assumptions. You own the failure to the executive team." }],
      "M2": [{ id: "ITM", esg: 1, text: "A highly expensive engineering software migration you forced through completely paralyzes the drafting team. You take full responsibility." }],
      "M4": [{ id: "ITM", esg: 1, text: "A major plant expansion goes wildly over budget due to flaws in your initial design assumptions. You take the heat from the executive committee." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "You accidentally sign off on a visually defective batch. When it is caught downstream, you immediately step forward and own the oversight." }],
      "E2": [{ id: "ITM", esg: 1, text: "You misread a titration result, causing a good batch to be quarantined for days. You admit the error to the furious production manager." }],
      "E3": [{ id: "ITM", esg: 1, text: "You fail to train an inspector properly, resulting in a customer complaint. You take the blame for the gap in their knowledge." }],
      "M1": [{ id: "ITM", esg: 1, text: "An external audit fails because of a systemic documentation gap you were supposed to fix. You stand before the site director and own it." }],
      "M2": [{ id: "ITM", esg: 1, text: "A new global Quality Management System you deployed is causing massive, unnecessary delays. You accept total accountability for the bad design." }],
      "M4": [{ id: "ITM", esg: 1, text: "The FDA issues a massive compliance fine due to gaps in the QMS system you implemented. You take full responsibility without deflecting to the site teams." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "You misread a pick-ticket and load the wrong pallets onto a truck. You immediately flag the error and own the resulting delay." }],
      "E2": [{ id: "ITM", esg: 1, text: "You accidentally crash a forklift into a rack, causing minor damage. You instantly report it to safety rather than driving away." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift misses the outbound dispatch deadline due to poor planning on your part. You face the angry Commercial team and take the blame." }],
      "M1": [{ id: "ITM", esg: 1, text: "A cycle count reveals massive inventory shrinkage under your watch. You own the operational failure without blaming your floor staff." }],
      "M2": [{ id: "ITM", esg: 1, text: "A decision to change the national racking layout causes chaos and a huge spike in picking errors. You take full responsibility for the disruption." }],
      "M4": [{ id: "ITM", esg: 1, text: "A poorly planned rollout of a new WMS causes gridlock across all national hubs. You face the commercial team and take total ownership of the failure." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "You input a typo into the scheduling system, causing a machine to sit idle for an hour. You immediately admit the keystroke error." }],
      "E2": [{ id: "ITM", esg: 1, text: "You forget to account for a maintenance window, forcing a schedule to be ripped up. You own the mistake to the frustrated shift leads." }],
      "E3": [{ id: "ITM", esg: 1, text: "You promise a client delivery date that you later realize is mathematically impossible. You call the sales rep and take the blame directly." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your demand forecast is wildly inaccurate, leading to a massive raw-material stockout. You stand before the S&OP committee and own it." }],
      "M2": [{ id: "ITM", esg: 1, text: "A new scheduling algorithm you championed causes total chaos across regional plants. You take full accountability for the software failure." }],
      "M4": [{ id: "ITM", esg: 1, text: "Your algorithmic forecasting model completely misreads the market, resulting in massive excess inventory. You own the failure without blaming the software." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "You forget to email the customs documentation, delaying a shipment. You immediately call the client and admit it was your oversight." }],
      "E2": [{ id: "ITM", esg: 1, text: "You accidentally book a standard truck instead of a refrigerated one, ruining a batch. You take full responsibility for the massive loss." }],
      "E3": [{ id: "ITM", esg: 1, text: "You give a carrier the wrong delivery address, causing a day of delay. You own the mistake rather than blaming the driver." }],
      "M1": [{ id: "ITM", esg: 1, text: "A new routing strategy you designed results in a huge spike in freight costs. You face the CFO and take total accountability for the overrun." }],
      "M2": [{ id: "ITM", esg: 1, text: "You force the enterprise to switch to a cheaper 3PL provider who then fails catastrophically. You own the disastrous vendor selection." }],
      "M4": [{ id: "ITM", esg: 1, text: "A strategic decision to consolidate logistics vendors results in a catastrophic drop in delivery performance. You take full accountability before the board." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "You order the wrong specification of safety gloves. When they arrive, you own the mistake and arrange the return without making excuses." }],
      "E2": [{ id: "ITM", esg: 1, text: "You forget to process a critical PO, causing a vendor to halt supply. You admit the oversight to the furious engineering team." }],
      "E3": [{ id: "ITM", esg: 1, text: "You negotiate a price that turns out to be tied to a brutal, hidden penalty clause. You take the blame for not reading the fine print." }],
      "M1": [{ id: "ITM", esg: 1, text: "A supplier you aggressively championed goes bankrupt, leaving the company stranded. You take total ownership of the poor risk assessment." }],
      "M2": [{ id: "ITM", esg: 1, text: "A massive, global raw material contract you signed ends up costing millions more due to currency fluctuations you failed to hedge." }],
      "M4": [{ id: "ITM", esg: 1, text: "A massive, long-term vendor contract you championed ends up costing the company millions in hidden fees. You take the blame entirely." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "You misread a gauge and accidentally trip a minor breaker. You instantly report the error to the control room so they can reset it." }],
      "E2": [{ id: "ITM", esg: 1, text: "You forget to close a drain valve, causing a minor but messy chemical spill. You own the mistake and clean it up immediately." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift accidentally drops the air pressure, halting a production line. You face the plant manager and take the blame for your crew." }],
      "M1": [{ id: "ITM", esg: 1, text: "An expensive energy-saving project you implemented actually increases power consumption. You own the engineering failure." }],
      "M2": [{ id: "ITM", esg: 1, text: "A decision you made to defer maintenance on a transformer results in a massive, costly blackout. You take full responsibility." }],
      "M4": [{ id: "ITM", esg: 1, text: "A deeply flawed energy-hedging strategy you approved costs the company a fortune during a winter freeze. You face the CFO and own the outcome." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "You send a candidate the wrong interview time, causing them to miss the panel. You immediately take the blame and apologize to both parties." }],
      "E2": [{ id: "ITM", esg: 1, text: "You accidentally enter the wrong tax code for a new hire, messing up their first paycheck. You own the error and rush an emergency manual payment." }],
      "E3": [{ id: "ITM", esg: 1, text: "You give a manager incorrect advice on a disciplinary process, forcing them to retract a warning. You take the heat and admit the policy error." }],
      "M1": [{ id: "ITM", esg: 1, text: "A high-profile recruitment campaign you designed fails to attract any viable candidates. You face the hiring directors and own the strategic failure." }],
      "M2": [{ id: "ITM", esg: 1, text: "A new, rigid attendance policy you forced through causes a massive drop in employee morale. You take full accountability for misjudging the culture." }],
      "M4": [{ id: "ITM", esg: 1, text: "A new performance appraisal system you championed leads to a massive spike in high-performer attrition. You take total accountability for the misstep." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "You accidentally double-pay a vendor invoice. You immediately alert your manager and own the error rather than blaming the software." }],
      "E2": [{ id: "ITM", esg: 1, text: "You input a typo into a major spreadsheet, making a department's budget look overspent. You own the mistake and resend the corrected file." }],
      "E3": [{ id: "ITM", esg: 1, text: "You give incorrect tax advice to the Commercial team, causing a minor compliance hiccup. You step forward and take the blame." }],
      "M1": [{ id: "ITM", esg: 1, text: "A financial forecast you aggressively defended turns out to be wildly optimistic, causing cash flow panic. You own the bad analysis." }],
      "M2": [{ id: "ITM", esg: 1, text: "A new expense-management software you forced the company to buy is deeply flawed and universally hated. You take full responsibility." }],
      "M4": [{ id: "ITM", esg: 1, text: "A tax structuring strategy you implemented results in heavy penalties from regulatory authorities. You refuse to throw your tax advisors under the bus." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "You accidentally delete a user's important folder during a routine migration. You immediately admit the error and work to restore the backup." }],
      "E2": [{ id: "ITM", esg: 1, text: "You push a minor code update that breaks a live tool. You instantly own the mistake and roll the system back." }],
      "E3": [{ id: "ITM", esg: 1, text: "You misconfigure a firewall rule, accidentally blocking the CEO's access for an hour. You take the blame directly." }],
      "M1": [{ id: "ITM", esg: 1, text: "A massive, expensive server migration you planned results in 12 hours of unplanned downtime. You face the business and own the failure." }],
      "M2": [{ id: "ITM", esg: 1, text: "A new global intranet portal you launched is a buggy, unusable disaster. You take total accountability for the poor execution." }],
      "M4": [{ id: "ITM", esg: 1, text: "A cybersecurity breach occurs through a vulnerability you chose not to patch due to budget constraints. You take full responsibility before the board." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "You forget to follow up with a key lead, and they sign with a competitor. You admit to your sales director that you dropped the ball." }],
      "E2": [{ id: "ITM", esg: 1, text: "You accidentally send a proposal with the wrong pricing attached. You immediately call the client to own the mistake and retract it." }],
      "E3": [{ id: "ITM", esg: 1, text: "You make a promise to a client that Supply Chain physically cannot fulfill. You take the heat from both departments and own the over-promise." }],
      "M1": [{ id: "ITM", esg: 1, text: "A major marketing campaign you designed completely fails to generate ROI. You stand before the Commercial Director and own the strategic flop." }],
      "M2": [{ id: "ITM", esg: 1, text: "A decision you made to aggressively hike prices results in a massive 20% loss of market share. You take full accountability for misjudging the market." }],
      "M4": [{ id: "ITM", esg: 1, text: "A massive product launch you spearheaded fails spectacularly in the market. You stand before the CEO and take absolute ownership of the failure." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "You forget to book the catering for a major executive lunch. You instantly own the mistake and scramble to find a rapid solution." }],
      "E2": [{ id: "ITM", esg: 1, text: "You accidentally print 500 copies of the wrong meeting agenda. You own the error and immediately reprint the correct version." }],
      "E3": [{ id: "ITM", esg: 1, text: "You fail to renew the cleaning contract in time, resulting in a dirty office for two days. You take the blame and fix it." }],
      "M1": [{ id: "ITM", esg: 1, text: "A minor office renovation you managed goes way over budget due to your poor planning. You own the financial overrun." }],
      "M2": [{ id: "ITM", esg: 1, text: "You implement a deeply unpopular hot-desking policy that destroys office morale. You take full responsibility for misreading the culture." }],
      "M4": [{ id: "ITM", esg: 1, text: "A corporate relocation project you managed runs disastrously over budget and alienates the staff. You take full accountability for the poor execution." }] 
    }
  },
  "LS-S6": { // Emotional Intelligence (Fully Graded)
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "An operator is yelling at you because their machine keeps jamming. You keep your own frustration hidden and calmly validate their stress." }],
      "E2": [{ id: "ITM", esg: 1, text: "A stressed quality inspector is being highly passive-aggressive about your batch. You ignore the tone and respond with professional warmth." }],
      "E3": [{ id: "ITM", esg: 1, text: "Two shift leads are in a screaming match over an unfinished handover. You expertly step in, calm them down, and defuse the anger." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your production supervisors are deeply demoralized after failing an audit. You carefully manage your own disappointment and rebuild their confidence." }],
      "M2": [{ id: "ITM", esg: 1, text: "During a highly charged union negotiation over line speeds, you project an aura of absolute calm and measured empathy." }],
      "M4": [{ id: "ITM", esg: 1, text: "During a hostile town hall about shift changes, you accurately read the deep anxiety of the workforce and adjust your messaging on the fly." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "A production supervisor aggressively blames your team for a breakdown. You suppress your anger and calmly de-escalate the situation." }],
      "E2": [{ id: "ITM", esg: 1, text: "An exhausted mechanic is snapping at everyone. You recognize they are burnt out, not angry, and quietly pull them aside for a break." }],
      "E3": [{ id: "ITM", esg: 1, text: "The engineering team is furiously blaming your shift for a failed installation. You absorb the heat and keep the conversation focused on solutions." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your maintenance planners are panicked over a massive budget cut. You project steady, reassuring control to calm the department." }],
      "M2": [{ id: "ITM", esg: 1, text: "In a deeply tense board meeting where executives are panicked over downtime, you project an aura of absolute calm and measured control." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must navigate the intense, unspoken friction between two rival regional engineering directors during a highly charged strategy realignment." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "A contractor rudely dismisses your drawing as 'stupid'. You manage your ego, ignore the insult, and ask them to clarify their technical concern." }],
      "E2": [{ id: "ITM", esg: 1, text: "A senior designer is throwing a tantrum over a software glitch. You patiently de-escalate their frustration without patronizing them." }],
      "E3": [{ id: "ITM", esg: 1, text: "The Commercial team is furious about a missed launch date. You absorb their anger calmly and expertly guide them through the revised timeline." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your project managers are deeply defensive after a catastrophic trial failure. You create a psychological safe space to conduct a blameless post-mortem." }],
      "M2": [{ id: "ITM", esg: 1, text: "You sense that the Commercial director is deeply insecure about a new product's technical specs, and you carefully tailor your presentation to reassure them." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must navigate the massive egos of three rival national technical directors, expertly stroking their pride to get them to agree to a unified strategy." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "A floor worker rolls their eyes and sighs loudly while you explain a new hygiene rule. You maintain a warm, professional demeanor regardless." }],
      "E2": [{ id: "ITM", esg: 1, text: "A lab analyst is in tears after ruining a critical sample. You instantly shift from boss to mentor, calming them down and focusing on the fix." }],
      "E3": [{ id: "ITM", esg: 1, text: "Production is aggressively screaming that your quality hold is bankrupting the company. You remain an absolute pillar of unflappable calm." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your QA managers are terrified of an impending FDA audit. You manage their anxiety by projecting total, unshakeable confidence in their preparation." }],
      "M2": [{ id: "ITM", esg: 1, text: "You are delivering a devastating audit report to a proud, defensive plant director. You carefully manage their ego to ensure they accept the findings." }],
      "M4": [{ id: "ITM", esg: 1, text: "During a massive product-recall crisis, the entire executive team is in a state of blind panic. You serve as the calm, emotionally grounded anchor in the war room." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "A truck driver screams at you because they have been waiting two hours. You ignore the disrespect and calmly focus on getting them loaded." }],
      "E2": [{ id: "ITM", esg: 1, text: "A picker is visibly furious after being reprimanded. You give them space to cool off before approaching them with a supportive tone." }],
      "E3": [{ id: "ITM", esg: 1, text: "Two shift supervisors are engaged in a bitter, personal feud. You expertly navigate their egos to force a functional working relationship." }],
      "M1": [{ id: "ITM", esg: 1, text: "The logistics team is panicking over a massive backlog. You project steady, reassuring control, instantly dropping the temperature in the room." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must navigate the intense, unspoken friction between two rival regional logistics directors during a highly charged strategy realignment." }],
      "M4": [{ id: "ITM", esg: 1, text: "During a devastating national supply chain collapse, you must expertly manage the terror and exhaustion of your entire logistics workforce." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "A sales rep angrily accuses you of ruining their client relationship. You manage your defensiveness and calmly explain the capacity limits." }],
      "E2": [{ id: "ITM", esg: 1, text: "A scheduler is paralyzed by anxiety over a complex matrix. You calmly sit beside them and methodically talk them down." }],
      "E3": [{ id: "ITM", esg: 1, text: "Production and Sales are locked in a shouting match over priority. You step in and expertly de-escalate the room before finding a solution." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your planning managers are deeply cynical and defeated by constant forecast errors. You successfully rebuild their hope and engagement." }],
      "M2": [{ id: "ITM", esg: 1, text: "During an S&OP meeting that devolves into shouting between Sales and Operations, you expertly read the room and defuse the underlying hostilities." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must lead a massive, highly unpopular restructuring of the S&OP process, perfectly reading and managing the emotional resistance of the executive board." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "A customs agent is being deliberately uncooperative and rude. You swallow your pride and use extreme politeness to get the paperwork cleared." }],
      "E2": [{ id: "ITM", esg: 1, text: "A logistics coordinator is hyperventilating over a lost container. You project absolute calm, which instantly settles their panic." }],
      "E3": [{ id: "ITM", esg: 1, text: "A vendor aggressively threatens to hold a shipment hostage. You completely ignore their hostility and calmly negotiate the release." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your supply chain managers are exhausted and defensive after a brutal peak season. You expertly manage their burnout and restore their morale." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must negotiate with a deeply arrogant, difficult global vendor CEO, carefully managing your own reactions to secure a critical concession." }],
      "M4": [{ id: "ITM", esg: 1, text: "During a catastrophic global freight collapse, the executive board is panicked. You serve as the unflappable, emotionally intelligent anchor for the C-Suite." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "An internal stakeholder throws a tantrum because you rejected their unapproved purchase. You remain completely unflappable and empathetic." }],
      "E2": [{ id: "ITM", esg: 1, text: "A junior buyer is crying after a brutal negotiation loss. You instantly switch to a highly empathetic, supportive coaching mode." }],
      "E3": [{ id: "ITM", esg: 1, text: "A vendor tries to use aggressive, bullying tactics in a meeting. You expertly disarm their aggression with cold, polite professionalism." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your category managers are highly stressed by aggressive new savings targets. You project a calm, structured confidence that settles their nerves." }],
      "M2": [{ id: "ITM", esg: 1, text: "In a high-stakes, multi-million dollar negotiation, you expertly read the subtle anxiety of the vendor's team and leverage it without appearing aggressive." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must navigate the intense political egos of the executive board when forcing them to abandon their preferred, legacy suppliers." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "During a blackout, operators are panicking and shouting. You project an aura of total, quiet control that instantly calms the room down." }],
      "E2": [{ id: "ITM", esg: 1, text: "A frustrated technician throws a wrench in anger. You de-escalate the situation calmly without triggering a further outburst." }],
      "E3": [{ id: "ITM", esg: 1, text: "The Plant Manager is screaming about the cost of a steam leak. You absorb the fury completely and calmly present the repair timeline." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your utility managers are deeply defensive about their poor efficiency scores. You expertly frame the feedback to inspire rather than crush them." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must present a highly expensive sustainability initiative to a board that is openly hostile to the idea, carefully managing their emotional resistance." }],
      "M4": [{ id: "ITM", esg: 1, text: "During a catastrophic, highly publicized environmental spill, you must expertly manage the terror and panic of both the public and the executive team." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "An employee bursts into tears during a routine meeting. You immediately shift your tone, abandon your agenda, and focus entirely on their wellbeing." }],
      "E2": [{ id: "ITM", esg: 1, text: "A candidate is visibly shaking with nerves. You expertly use warm, empathetic body language and tone to completely put them at ease." }],
      "E3": [{ id: "ITM", esg: 1, text: "A line manager aggressively accuses HR of being useless. You entirely suppress your defensiveness and calmly explore their underlying frustration." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your HRBPs are experiencing severe secondary trauma from handling endless grievance cases. You expertly manage their emotional recovery." }],
      "M2": [{ id: "ITM", esg: 1, text: "You are tasked with terminating a deeply beloved, long-serving executive. You handle the interaction with profound empathy, dignity, and ironclad control." }],
      "M4": [{ id: "ITM", esg: 1, text: "Following a tragic workplace fatality, you must serve as the emotional anchor for the entire grieving enterprise, projecting immense empathy and strength." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "A manager aggressively accuses your team of shortchanging their budget. You ignore the attack and calmly walk them through the spreadsheet." }],
      "E2": [{ id: "ITM", esg: 1, text: "A junior clerk is paralyzed by anxiety over a minor typo they made. You expertly de-escalate their fear and turn it into a calm learning moment." }],
      "E3": [{ id: "ITM", esg: 1, text: "The Commercial team is furious that you blocked a payment. You absorb the heat with total professionalism and refuse to match their anger." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your finance managers are deeply cynical and burnt out from endless audits. You expertly rebuild their morale and sense of purpose." }],
      "M2": [{ id: "ITM", esg: 1, text: "During an earnings call, analysts are aggressively attacking the company's performance. You project absolute confidence, steadying the CEO's nerves." }],
      "M4": [{ id: "ITM", esg: 1, text: "The company is facing imminent bankruptcy. You must navigate the sheer terror of the executive board, keeping them focused on logical survival steps." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "A user is screaming on the phone because they lost a document. You absorb their panic without taking it personally, and calmly walk them through recovery." }],
      "E2": [{ id: "ITM", esg: 1, text: "A developer is deeply defensive about a bug they wrote. You expertly frame the correction so they don't feel attacked." }],
      "E3": [{ id: "ITM", esg: 1, text: "During a major server crash, the CIO is frantic. You project an aura of total, quiet competence that instantly settles their nerves." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your IT managers are exhausted and bitter after a brutal weekend migration. You expertly validate their pain and restore their commitment." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must navigate the intense, unspoken friction between two rival regional IT directors during a highly charged cloud strategy realignment." }],
      "M4": [{ id: "ITM", esg: 1, text: "During a massive data breach, the entire executive team is in a state of blind panic. You serve as the calm, emotionally grounded anchor in the war room." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "A client is irrationally angry over a minor shipping delay. You validate their frustration perfectly, turning their anger into appreciation." }],
      "E2": [{ id: "ITM", esg: 1, text: "A junior sales rep is crying after a brutal rejection. You instantly switch to a highly empathetic, supportive coaching mode to rebuild their confidence." }],
      "E3": [{ id: "ITM", esg: 1, text: "A major client uses aggressive, insulting tactics during a negotiation. You completely ignore the insult and expertly disarm their aggression." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your sales managers are highly stressed by new, impossible targets. You project a calm, structured confidence that settles their nerves." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must navigate the massive egos of three rival national sales directors, expertly stroking their pride to get them to agree to a unified strategy." }],
      "M4": [{ id: "ITM", esg: 1, text: "A devastating PR scandal ruins your brand's reputation overnight. You must serve as the unflappable, emotionally intelligent anchor for the panicked C-Suite." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "An executive yells at you because the catering was wrong. You maintain absolute professional warmth and fix the issue without showing resentment." }],
      "E2": [{ id: "ITM", esg: 1, text: "A stressed facilities coordinator is being highly passive-aggressive. You ignore the tone and respond with warm, direct professionalism." }],
      "E3": [{ id: "ITM", esg: 1, text: "Two departments are in a screaming match over office space. You expertly step in, calm them down, and defuse the territorial anger." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your admin managers are deeply demoralized after failing a safety audit. You carefully manage your own disappointment and rebuild their confidence." }],
      "M2": [{ id: "ITM", esg: 1, text: "You are managing a highly unpopular corporate relocation. You accurately read the deep emotional grief of the staff and design a strategy to address it." }],
      "M4": [{ id: "ITM", esg: 1, text: "During a chaotic, highly stressful hostile takeover of the company, you must expertly manage the terror and exhaustion of the entire administrative workforce." }] 
    }
  },
  "LS-S7": { // Interpersonal Boundaries (Fully Graded)
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "A machine operator you are good friends with asks you to cover up a minor quality mistake they made. You firmly, but kindly, refuse." }],
      "E2": [{ id: "ITM", esg: 1, text: "A colleague you often carpool with asks to take an unauthorized extra 10 minutes on their break. You uphold the boundary." }],
      "E3": [{ id: "ITM", esg: 1, text: "A veteran shift lead tries to use their seniority to intimidate you into skipping a safety check. You politely but firmly hold your ground." }],
      "M1": [{ id: "ITM", esg: 1, text: "A production supervisor you mentor asks you to intervene in a dispute they should handle themselves. You push it back to them, enforcing the boundary of their role." }],
      "M2": [{ id: "ITM", esg: 1, text: "A regional director tries to bypass your authority and give direct orders to your shift supervisors. You instantly re-establish the chain of command." }],
      "M4": [{ id: "ITM", esg: 1, text: "The CEO, who is a close personal friend, asks you to quietly ignore a safety violation to hit a target. You maintain an absolute ethical boundary." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "A supervisor who usually buys you coffee asks you to sign off on a repair that isn't quite finished. You refuse to compromise your standard." }],
      "E2": [{ id: "ITM", esg: 1, text: "A friendly operator asks you to fix their personal radio using company tools. You maintain the boundary and politely decline." }],
      "E3": [{ id: "ITM", esg: 1, text: "The Production Manager attempts to bully you into rushing a critical diagnostic test. You establish a firm professional wall and refuse." }],
      "M1": [{ id: "ITM", esg: 1, text: "A maintenance planner keeps trying to dump their administrative paperwork on your desk. You firmly push it back, defending your time." }],
      "M2": [{ id: "ITM", esg: 1, text: "A major equipment vendor offers you highly lavish, inappropriate gifts to secure a contract renewal. You politely but firmly establish the boundary." }],
      "M4": [{ id: "ITM", esg: 1, text: "The COO attempts to use their rank to force you to approve a wildly unsafe, non-compliant facility design. You maintain absolute professional integrity." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "A contractor you have worked with for years asks you to look the other way on a minor specification miss. You uphold the boundary." }],
      "E2": [{ id: "ITM", esg: 1, text: "A draftsman you are friends with asks you to cover for them because they are hungover. You enforce a strict professional boundary." }],
      "E3": [{ id: "ITM", esg: 1, text: "The Commercial team tries to pressure you into validating a design you know is flawed. You firmly establish the boundary of engineering integrity." }],
      "M1": [{ id: "ITM", esg: 1, text: "A project manager keeps trying to bypass the formal design-review queue by catching you in the hallway. You force them to use the proper channel." }],
      "M2": [{ id: "ITM", esg: 1, text: "A regional director attempts to leverage your friendship to secure emergency CapEx funding for their pet project. You maintain a strict professional wall." }],
      "M4": [{ id: "ITM", esg: 1, text: "A board member asks you to quietly tweak the R&D data to make a failing project look successful. You enforce a rigid boundary of professional integrity." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "A production lead you often carpool with begs you to pass a borderline batch so they don't lose their bonus. You enforce the quality standard." }],
      "E2": [{ id: "ITM", esg: 1, text: "A friendly lab tech asks you to log their samples for them because they want to leave early. You politely decline and uphold the rule." }],
      "E3": [{ id: "ITM", esg: 1, text: "The Plant Manager attempts to use their rank to intimidate you into releasing a quarantined pallet. You establish a firm, unyielding boundary." }],
      "M1": [{ id: "ITM", esg: 1, text: "QA managers keep escalating minor disputes to you that they should be resolving themselves. You push back and force them to own their roles." }],
      "M2": [{ id: "ITM", esg: 1, text: "The Commercial Director tries to leverage your long-standing friendship to get you to release a quarantined product. You maintain a strict professional wall." }],
      "M4": [{ id: "ITM", esg: 1, text: "The CEO orders you to suppress a failing audit report that would derail a major acquisition. You fiercely assert your ethical boundary." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "A friendly truck driver asks you to load them ahead of the queue because they are running late. You stick to the established FIFO protocol." }],
      "E2": [{ id: "ITM", esg: 1, text: "A picker you are friends with asks you to ignore the fact that they aren't wearing safety boots today. You enforce the boundary." }],
      "E3": [{ id: "ITM", esg: 1, text: "The Sales team tries to bully you into rushing an order at 4:55 PM. You firmly establish the cut-off boundary and refuse." }],
      "M1": [{ id: "ITM", esg: 1, text: "A shift supervisor keeps asking you to approve minor cycle-count adjustments that they should own. You push the responsibility back to them." }],
      "M2": [{ id: "ITM", esg: 1, text: "A 3PL executive you have known for a decade asks for an improper 'heads-up' on a competitor's bid. You enforce absolute professional distance." }],
      "M4": [{ id: "ITM", esg: 1, text: "A powerful board member asks you to use company logistics to ship their personal items globally. You maintain an absolute, unyielding ethical boundary." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "A sales rep you are friends with asks you to secretly bump their client's order up the schedule. You firmly decline the request." }],
      "E2": [{ id: "ITM", esg: 1, text: "A friendly clerk asks you to finish their data entry so they can go to a long lunch. You maintain the boundary and refuse." }],
      "E3": [{ id: "ITM", esg: 1, text: "The Production Manager tries to use their seniority to force you to alter a locked schedule. You establish a firm professional wall." }],
      "M1": [{ id: "ITM", esg: 1, text: "Planning managers keep trying to dump their difficult capacity negotiations on your desk. You firmly push it back, defending your time." }],
      "M2": [{ id: "ITM", esg: 1, text: "The Head of Sales attempts to use their senior rank to bully you into manipulating the capacity forecast. You firmly uphold the boundary of your role." }],
      "M4": [{ id: "ITM", esg: 1, text: "The CEO asks you to artificially inflate the demand forecast to make the quarterly projections look better to investors. You maintain a rigid ethical boundary." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "A logistics coordinator you mentor asks you to approve an unauthorized overtime claim. You separate the relationship from the rules and refuse." }],
      "E2": [{ id: "ITM", esg: 1, text: "A friendly courier asks you to sign for a package without inspecting it first. You uphold the boundary and insist on checking it." }],
      "E3": [{ id: "ITM", esg: 1, text: "The Commercial team tries to bully you into authorizing an incredibly expensive, unapproved air-freight shipment. You stand your ground." }],
      "M1": [{ id: "ITM", esg: 1, text: "A logistics manager keeps trying to bypass the formal routing-approval queue by catching you in the hallway. You force them to use the proper channel." }],
      "M2": [{ id: "ITM", esg: 1, text: "A powerful regional director attempts to bypass your global shipping protocols. You establish a firm, unyielding boundary asserting your departmental authority." }],
      "M4": [{ id: "ITM", esg: 1, text: "A major shipping vendor offers you highly lavish, inappropriate gifts to secure a contract renewal. You politely but firmly establish the boundary." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "A supplier you have a great relationship with asks for a 'favor' regarding an upcoming tender. You instantly re-establish a strict professional line." }],
      "E2": [{ id: "ITM", esg: 1, text: "An internal stakeholder you are friends with asks you to quickly push through an unapproved PO. You enforce the boundary." }],
      "E3": [{ id: "ITM", esg: 1, text: "A senior manager attempts to use their rank to bully you into selecting their preferred, non-compliant vendor. You hold a firm professional wall." }],
      "M1": [{ id: "ITM", esg: 1, text: "Category managers keep trying to dump their difficult vendor disputes on your desk. You firmly push the responsibility back to them." }],
      "M2": [{ id: "ITM", esg: 1, text: "A regional director attempts to leverage your friendship to secure emergency funding for an unapproved supplier. You maintain a strict professional wall." }],
      "M4": [{ id: "ITM", esg: 1, text: "An executive board member asks you to award a massive contract to a company owned by their relative. You maintain absolute, unyielding ethical boundaries." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "A colleague asks you to falsify a minor water-testing log so they don't get in trouble for missing it. You refuse to cross that line." }],
      "E2": [{ id: "ITM", esg: 1, text: "A friendly contractor asks to borrow your security badge for 'just five minutes'. You strictly enforce the security boundary." }],
      "E3": [{ id: "ITM", esg: 1, text: "The Production Manager tries to bully you into keeping a failing boiler online. You firmly establish the boundary of safety and authority." }],
      "M1": [{ id: "ITM", esg: 1, text: "Utility managers keep escalating minor compliance reporting to you that they should own. You push it back to them, enforcing the boundary of their role." }],
      "M2": [{ id: "ITM", esg: 1, text: "Local environmental regulators hint at a 'quiet arrangement' to ignore minor emissions breaches. You maintain an absolute wall of legal compliance." }],
      "M4": [{ id: "ITM", esg: 1, text: "The COO attempts to use their rank to force you to approve a wildly unsafe, non-compliant facility energy design. You maintain absolute professional integrity." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "An employee you are friends with asks you to tell them what their manager wrote in their confidential appraisal. You enforce the boundary of confidentiality." }],
      "E2": [{ id: "ITM", esg: 1, text: "A friendly candidate asks you for 'insider tips' on what the interview panel wants to hear. You maintain a strict professional boundary." }],
      "E3": [{ id: "ITM", esg: 1, text: "A line manager attempts to bully you into firing an employee without following the PIP process. You establish a firm, unyielding wall." }],
      "M1": [{ id: "ITM", esg: 1, text: "HR Business Partners keep trying to dump their difficult grievance meetings on your desk. You firmly push the responsibility back to them." }],
      "M2": [{ id: "ITM", esg: 1, text: "A regional VP tries to leverage your long-standing friendship to get you to approve an off-cycle, unapproved bonus for their team. You maintain a strict professional wall." }],
      "M4": [{ id: "ITM", esg: 1, text: "The CEO asks you to sweep a serious harassment allegation against a top-performing executive under the rug. You enforce a rigid, uncompromising ethical boundary." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "A friendly manager asks you to approve an expense claim that violates policy 'just this once'. You firmly uphold the financial control boundary." }],
      "E2": [{ id: "ITM", esg: 1, text: "A colleague you often carpool with asks you to rush their personal payroll query ahead of the queue. You enforce the boundary." }],
      "E3": [{ id: "ITM", esg: 1, text: "The Sales Director attempts to use their seniority to force you to approve a non-compliant client rebate. You hold a firm professional wall." }],
      "M1": [{ id: "ITM", esg: 1, text: "Finance managers keep trying to bypass the formal reporting queue by catching you in the hallway. You force them to use the proper channel." }],
      "M2": [{ id: "ITM", esg: 1, text: "A regional director attempts to leverage your friendship to hide a major budget overrun from corporate. You maintain a strict professional wall." }],
      "M4": [{ id: "ITM", esg: 1, text: "The board pressures you to recognize revenue prematurely to hit Q4 targets. You maintain an absolute, unyielding boundary of fiduciary responsibility." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "A colleague you often have lunch with asks you to secretly grant them access to a restricted folder. You maintain a strict professional boundary." }],
      "E2": [{ id: "ITM", esg: 1, text: "A friendly developer asks you to bypass the code-review process 'just this once' to save time. You uphold the boundary." }],
      "E3": [{ id: "ITM", esg: 1, text: "A senior manager attempts to bully you into giving them local admin rights on their laptop. You firmly establish the boundary of security." }],
      "M1": [{ id: "ITM", esg: 1, text: "IT managers keep escalating minor disputes to you that they should be resolving themselves. You push back and force them to own their roles." }],
      "M2": [{ id: "ITM", esg: 1, text: "The Head of Sales demands you bypass cybersecurity protocols so they can use an unapproved app. You fiercely defend the boundary of enterprise security." }],
      "M4": [{ id: "ITM", esg: 1, text: "A powerful board member demands you give them direct, unmonitored access to the core employee database. You maintain an absolute, unyielding ethical boundary." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "A client you have a great relationship with asks for a kickback that violates corporate policy. You re-establish a strict professional boundary." }],
      "E2": [{ id: "ITM", esg: 1, text: "A friendly sales rep asks you to log a call for them because they want to leave early. You politely decline and uphold the rule." }],
      "E3": [{ id: "ITM", esg: 1, text: "A massive enterprise client attempts to bully you into accepting a totally unreasonable delivery timeline. You establish a firm professional wall." }],
      "M1": [{ id: "ITM", esg: 1, text: "Sales managers keep trying to dump their difficult client escalations on your desk. You firmly push the responsibility back to them." }],
      "M2": [{ id: "ITM", esg: 1, text: "A major distributor implies that lavish, inappropriate entertainment is required to win their business. You maintain absolute professional integrity." }],
      "M4": [{ id: "ITM", esg: 1, text: "The CEO asks you to aggressively misrepresent a product's capabilities to win a massive government tender. You maintain a rigid ethical boundary." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "A senior manager demands you bypass the visitor security check for their personal guest. You firmly enforce the building security boundary." }],
      "E2": [{ id: "ITM", esg: 1, text: "A friendly contractor asks to borrow your security badge for 'just five minutes'. You strictly enforce the security boundary." }],
      "E3": [{ id: "ITM", esg: 1, text: "An executive tries to use their rank to force you to bump their trivial maintenance request to the top of the queue. You establish a firm wall." }],
      "M1": [{ id: "ITM", esg: 1, text: "Admin managers keep trying to bypass the formal vendor-approval queue by catching you in the hallway. You force them to use the proper channel." }],
      "M2": [{ id: "ITM", esg: 1, text: "An executive asks you to use corporate facility funds to upgrade their personal home office. You maintain a rigid wall of administrative compliance." }],
      "M4": [{ id: "ITM", esg: 1, text: "A powerful board member demands you hire their preferred, unvetted catering company for a massive corporate event. You maintain an absolute, unyielding ethical boundary." }] 
    }
  },
  "LS-S8": { // Innovation Facilitation (Fully Graded)
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "A line worker has a crazy idea for a new tool holder. You actively encourage them to build a cardboard prototype to test it." }],
      "E2": [{ id: "ITM", esg: 1, text: "A new operator suggests a completely unconventional way to load the machine. You give them the safety to try it on a slow run." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift comes up with a wild idea to slash changeover times. You actively champion their idea to the skeptical Plant Manager." }],
      "M1": [{ id: "ITM", esg: 1, text: "You deliberately carve out 2 hours a week for your supervisors to experiment with radical, unproven process improvements without fear of failure." }],
      "M2": [{ id: "ITM", esg: 1, text: "You create a culture where regional plant directors are publicly celebrated, not punished, when a highly innovative experiment fails." }],
      "M4": [{ id: "ITM", esg: 1, text: "You deliberately carve out 10% of the massive manufacturing budget strictly for funding wild, unproven, high-risk pilot projects." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "An apprentice suggests a bizarre way to lubricate a bearing. Instead of shooting it down, you supervise them while they safely test it." }],
      "E2": [{ id: "ITM", esg: 1, text: "A mechanic wants to try 3D-printing a replacement part instead of buying it. You encourage the creativity and give them time to test it." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift suggests a radical change to the PM schedule. You actively protect them from criticism while they run a 30-day trial." }],
      "M1": [{ id: "ITM", esg: 1, text: "You actively dismantle the rigid, fear-based culture of the maintenance department, replacing it with an ethos of continuous, experimental improvement." }],
      "M2": [{ id: "ITM", esg: 1, text: "You implement a national 'innovation incubator' for maintenance, funding radical ideas from the floor level to completely disrupt traditional repairs." }],
      "M4": [{ id: "ITM", esg: 1, text: "You restructure the maintenance division to completely remove the fear of failure, actively rewarding teams that push the boundaries of mechanical engineering." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "A junior draftsman proposes a completely unconventional design approach. You give them 4 hours of off-book time to explore it." }],
      "E2": [{ id: "ITM", esg: 1, text: "An engineer wants to use a weird, unproven material for a prototype. You encourage them to build it and test the limits." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your project team suggests a radical new workflow that breaks all the old rules. You champion their idea to the engineering directors." }],
      "M1": [{ id: "ITM", esg: 1, text: "You force a deeply traditional engineering organization to experiment with unproven AI design models, absorbing the risk of failure yourself." }],
      "M2": [{ id: "ITM", esg: 1, text: "You actively shield your global R&D innovators from the CFO's cost-cutting, ensuring they have the safety to test radical new product concepts." }],
      "M4": [{ id: "ITM", esg: 1, text: "You completely overhaul the R&D KPIs, shifting the focus from 'safe' incremental updates to actively funding highly disruptive, innovative leaps." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "A lab tech suggests a radical new way to organize samples. You create a safe space for them to trial the idea on a single shift." }],
      "E2": [{ id: "ITM", esg: 1, text: "An inspector wants to use a smartphone app they built to log defects. You encourage their initiative and test it alongside the paper logs." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift proposes a wild new testing protocol that cuts time in half. You actively champion their idea to the skeptical QA Manager." }],
      "M1": [{ id: "ITM", esg: 1, text: "You deliberately carve out 10% of the lab's budget strictly for funding wild, unproven, high-risk quality-assurance pilot projects." }],
      "M2": [{ id: "ITM", esg: 1, text: "You create a culture where regional QA directors are publicly celebrated, not punished, when a highly innovative testing experiment fails." }],
      "M4": [{ id: "ITM", esg: 1, text: "You actively dismantle the rigid, fear-based culture of the QA department, replacing it with an ethos of continuous, experimental process improvement." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "A forklift driver has an unconventional idea for loading trucks faster. You allow them to test it safely on the least busy dock." }],
      "E2": [{ id: "ITM", esg: 1, text: "A picker suggests a bizarre way to reorganize the bins. Instead of shooting it down, you give them an hour to test it on one aisle." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift comes up with a wild idea to slash loading times. You actively champion their idea to the skeptical Logistics Manager." }],
      "M1": [{ id: "ITM", esg: 1, text: "You actively dismantle the rigid, fear-based culture of the warehouse, replacing it with an ethos of continuous, experimental process improvement." }],
      "M2": [{ id: "ITM", esg: 1, text: "You implement a national 'innovation incubator' for logistics, funding radical ideas from the floor level to completely disrupt traditional warehousing." }],
      "M4": [{ id: "ITM", esg: 1, text: "You restructure the logistics division to completely remove the fear of failure, actively rewarding teams that push the boundaries of supply chain science." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "A clerk builds a messy, unapproved macro that actually saves time. You praise their initiative and help them refine the code." }],
      "E2": [{ id: "ITM", esg: 1, text: "A scheduler suggests a completely unconventional way to sequence the machines. You give them the safety to model it out in a sandbox." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your team suggests a radical new workflow that breaks all the old S&OP rules. You champion their idea to the planning directors." }],
      "M1": [{ id: "ITM", esg: 1, text: "You force a deeply traditional planning organization to experiment with unproven AI forecasting models, absorbing the risk of failure yourself." }],
      "M2": [{ id: "ITM", esg: 1, text: "You actively shield your regional planning innovators from the CFO's cost-cutting, ensuring they have the safety to test radical new algorithms." }],
      "M4": [{ id: "ITM", esg: 1, text: "You completely overhaul the Planning KPIs, shifting the focus from 'safe' incremental updates to actively funding highly disruptive, innovative leaps." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "A coordinator suggests a strange new route for a delivery. You encourage them to model it out and present the data." }],
      "E2": [{ id: "ITM", esg: 1, text: "A dispatcher wants to use a smartphone app they built to log trucks. You encourage their initiative and test it alongside the standard system." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift comes up with a wild idea to slash customs clearance times. You actively champion their idea to the skeptical Logistics Manager." }],
      "M1": [{ id: "ITM", esg: 1, text: "You deliberately carve out 10% of the logistics budget strictly for funding wild, unproven, high-risk pilot projects." }],
      "M2": [{ id: "ITM", esg: 1, text: "You create a culture where regional supply chain directors are publicly celebrated, not punished, when a highly innovative routing experiment fails." }],
      "M4": [{ id: "ITM", esg: 1, text: "You actively shield your global supply chain innovators from the CFO's cost-cutting, ensuring they have the safety to test radical new distribution networks." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "A junior buyer suggests sourcing from a completely unknown, unconventional vendor. You encourage them to run a small, low-risk trial." }],
      "E2": [{ id: "ITM", esg: 1, text: "An assistant builds a messy, unapproved macro that actually saves time. You praise their initiative and help them refine the code." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your team suggests a radical new workflow that breaks all the old RFQ rules. You champion their idea to the procurement directors." }],
      "M1": [{ id: "ITM", esg: 1, text: "You actively dismantle the rigid, fear-based culture of the procurement department, replacing it with an ethos of continuous, experimental process improvement." }],
      "M2": [{ id: "ITM", esg: 1, text: "You implement a national 'innovation incubator' for sourcing, funding radical ideas from the junior buyers to completely disrupt traditional purchasing." }],
      "M4": [{ id: "ITM", esg: 1, text: "You completely overhaul the procurement KPIs, shifting the focus from 'safe' cost-cutting to actively funding highly disruptive, innovative supplier partnerships." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "An operator suggests a bizarre tweak to the cooling tower airflow. You encourage them to safely test the theory and record the data." }],
      "E2": [{ id: "ITM", esg: 1, text: "A technician wants to try 3D-printing a replacement valve instead of buying it. You encourage the creativity and give them time to test it." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift suggests a radical change to the power-down schedule. You actively protect them from criticism while they run a 30-day trial." }],
      "M1": [{ id: "ITM", esg: 1, text: "You force a deeply traditional utilities organization to experiment with unproven green-energy models, absorbing the risk of failure yourself." }],
      "M2": [{ id: "ITM", esg: 1, text: "You actively shield your regional energy innovators from the CFO's cost-cutting, ensuring they have the safety to test radical new infrastructure." }],
      "M4": [{ id: "ITM", esg: 1, text: "You champion a culture where utility engineers are heavily incentivized to propose radical, high-risk green energy technologies to the board." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "A recruiter wants to try a completely unconventional sourcing strategy on social media. You give them full permission to experiment." }],
      "E2": [{ id: "ITM", esg: 1, text: "A coordinator builds a messy, unapproved macro that actually saves time on payroll. You praise their initiative and help them refine the code." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your team suggests a radical new workflow that breaks all the old onboarding rules. You champion their idea to the HR directors." }],
      "M1": [{ id: "ITM", esg: 1, text: "You deliberately carve out 10% of the HR budget strictly for funding wild, unproven, high-risk talent acquisition pilot projects." }],
      "M2": [{ id: "ITM", esg: 1, text: "You create a culture where regional HR directors are publicly celebrated, not punished, when a highly innovative engagement experiment fails." }],
      "M4": [{ id: "ITM", esg: 1, text: "You actively dismantle corporate bureaucracy, creating an HR culture where 'failing fast' with new talent initiatives is celebrated rather than punished." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "A clerk suggests automating a process using a tool you don't understand. You give them the time and safety to build a proof-of-concept." }],
      "E2": [{ id: "ITM", esg: 1, text: "An analyst wants to use a weird, unproven statistical model for a forecast. You encourage them to build it and test the limits against the standard." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your team suggests a radical new workflow that breaks all the old month-end rules. You champion their idea to the finance directors." }],
      "M1": [{ id: "ITM", esg: 1, text: "You actively dismantle the rigid, fear-based culture of the finance department, replacing it with an ethos of continuous, experimental process improvement." }],
      "M2": [{ id: "ITM", esg: 1, text: "You implement a national 'innovation incubator' for accounting, funding radical ideas from the junior analysts to completely disrupt traditional reporting." }],
      "M4": [{ id: "ITM", esg: 1, text: "You push a deeply conservative finance organization to experiment with radical new blockchain and predictive-analytics accounting models." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "A helpdesk tech suggests a radical workaround for a recurring bug. You provide a sandbox environment for them to test the fix safely." }],
      "E2": [{ id: "ITM", esg: 1, text: "A junior developer proposes a completely unconventional coding approach. You give them 4 hours of off-book time to explore it." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift suggests a radical change to the server-patching schedule. You actively protect them from criticism while they run a 30-day trial." }],
      "M1": [{ id: "ITM", esg: 1, text: "You force a deeply traditional IT organization to experiment with unproven AI network models, absorbing the risk of failure yourself." }],
      "M2": [{ id: "ITM", esg: 1, text: "You actively shield your regional IT innovators from the CFO's cost-cutting, ensuring they have the safety to test radical new infrastructure." }],
      "M4": [{ id: "ITM", esg: 1, text: "You implement a 'hackathon' culture across the global IT enterprise, creating total psychological safety for developers to build disruptive corporate tools." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "A sales rep wants to try a completely unconventional pitch on a key client. You encourage their creativity and offer to review the deck." }],
      "E2": [{ id: "ITM", esg: 1, text: "A junior rep suggests sourcing leads from a completely unknown, unconventional social platform. You encourage them to run a small, low-risk trial." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your team comes up with a wild idea to slash the sales cycle time. You actively champion their idea to the skeptical Sales Director." }],
      "M1": [{ id: "ITM", esg: 1, text: "You deliberately carve out 10% of the marketing budget strictly for funding wild, unproven, high-risk pilot campaigns." }],
      "M2": [{ id: "ITM", esg: 1, text: "You create a culture where national sales directors are publicly celebrated, not punished, when a highly innovative go-to-market experiment fails." }],
      "M4": [{ id: "ITM", esg: 1, text: "You restructure the Commercial division to actively fund and protect radical, high-risk go-to-market strategies, absorbing any resulting revenue hits yourself." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "A receptionist suggests a bizarre but interesting way to organize mail. You encourage them to try it for a week without fear of criticism." }],
      "E2": [{ id: "ITM", esg: 1, text: "An assistant builds a messy, unapproved macro that actually saves time on meeting scheduling. You praise their initiative and help them refine the code." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your team suggests a radical new workflow that breaks all the old facilities rules. You champion their idea to the admin directors." }],
      "M1": [{ id: "ITM", esg: 1, text: "You actively dismantle the rigid, fear-based culture of the administration department, replacing it with an ethos of continuous, experimental process improvement." }],
      "M2": [{ id: "ITM", esg: 1, text: "You implement a national 'innovation incubator' for facilities, funding radical ideas from the junior staff to completely disrupt traditional office management." }],
      "M4": [{ id: "ITM", esg: 1, text: "You create a corporate mandate that 5% of all facilities budgets must be spent on testing radical, highly experimental office-design and wellbeing concepts." }] 
    }
  },
  
  // CONFLICT RESOLUTION
  "CR1": { // Competitive Assertion (Fully Graded)
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "A maintenance tech wants to delay a quick fix until tomorrow, but you know your line needs to run tonight. You must push back." }],
      "E2": [{ id: "ITM", esg: 1, text: "A QA inspector attempts to quarantine a batch for a cosmetic flaw you know is within tolerance. You firmly dispute their finding." }],
      "E3": [{ id: "ITM", esg: 1, text: "The previous shift lead left a massive mess but claims it isn't their problem. You aggressively hold them to account before taking over." }],
      "M1": [{ id: "ITM", esg: 1, text: "Warehouse is demanding you shrink your staging footprint, which will bottleneck the floor. You fiercely defend your operational space." }],
      "M2": [{ id: "ITM", esg: 1, text: "Commercial is trying to force a major, unapproved schedule change that will wreck your OEE metrics. You establish a hard, unyielding wall." }],
      "M4": [{ id: "ITM", esg: 1, text: "The Commercial director is demanding an impossible production run that will break your machinery. You must fiercely defend your operational limits." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "A production lead is demanding you sign off a repair as 'safe' when you know it does not meet Tripack standards." }],
      "E2": [{ id: "ITM", esg: 1, text: "An operator complains your repair took too long. You firmly assert that following the mandatory LOTO safety protocol is non-negotiable." }],
      "E3": [{ id: "ITM", esg: 1, text: "Production wants to skip a scheduled 4-hour PM window. You aggressively insist that the maintenance must happen now to prevent a catastrophic failure." }],
      "M1": [{ id: "ITM", esg: 1, text: "Procurement wants you to switch to a cheaper, inferior spare parts vendor. You fiercely defend the engineering standards required for uptime." }],
      "M2": [{ id: "ITM", esg: 1, text: "Plant Directors are trying to slash the training budget for your technicians. You aggressively fight to protect the long-term capability of your team." }],
      "M4": [{ id: "ITM", esg: 1, text: "The COO is publicly pressuring you to drastically reduce maintenance budgets, which you know will cause catastrophic line failures." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "A contractor insists on using a cheaper material than what is specified in the blueprint. You must firmly refuse." }],
      "E2": [{ id: "ITM", esg: 1, text: "A production supervisor demands you alter a machine guard to make loading faster. You assertively refuse the unsafe modification." }],
      "E3": [{ id: "ITM", esg: 1, text: "A vendor attempts to charge for a change-order that was clearly their own design flaw. You fiercely push back on the invoice." }],
      "M1": [{ id: "ITM", esg: 1, text: "Commercial wants to launch a product before the final engineering stress tests are complete. You firmly block the release." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors are demanding custom machinery for their plants. You aggressively enforce the corporate standardization mandate." }],
      "M4": [{ id: "ITM", esg: 1, text: "The board wants to slash the R&D budget by 50% to hit short-term targets. You must aggressively assert the long-term danger of this move." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "A shift supervisor is screaming at you to release a quarantined batch. You must stand your ground and enforce the quality standard." }],
      "E2": [{ id: "ITM", esg: 1, text: "A production operator tries to hide a minor defect to hit their quota. You firmly step in and force them to log it properly." }],
      "E3": [{ id: "ITM", esg: 1, text: "The shift manager insists your testing equipment is faulty because they don't like the result. You fiercely defend your lab's accuracy." }],
      "M1": [{ id: "ITM", esg: 1, text: "The plant director pressures your team to 'interpret' a specification loosely to save a massive order. You refuse to compromise the integrity." }],
      "M2": [{ id: "ITM", esg: 1, text: "Sales directors are complaining that your strict QA rules are losing them clients. You aggressively defend the brand's long-term reputation." }],
      "M4": [{ id: "ITM", esg: 1, text: "The CEO orders you to suppress a failing audit report that would derail a major acquisition. You must fiercely assert your ethical obligation." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "A driver refuses to wear their high-vis jacket on the dock. You must firmly enforce the safety rule, even if they threaten to leave." }],
      "E2": [{ id: "ITM", esg: 1, text: "A picker tries to skip scanning a pallet to save time. You assertively force them to follow the inventory control process." }],
      "E3": [{ id: "ITM", esg: 1, text: "The production shift lead dumps unlabelled pallets in your receiving zone. You aggressively demand they remove them immediately." }],
      "M1": [{ id: "ITM", esg: 1, text: "Transport managers are demanding faster loading times, but your team is maxed out. You fiercely defend your safety limits." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional commercial heads are dumping massive excess stock into your hubs. You aggressively push back to prevent capacity gridlock." }],
      "M4": [{ id: "ITM", esg: 1, text: "Sales is demanding that you bypass safety capacity limits to store excess inventory. You must aggressively assert the physical limits of the facility." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "A sales rep is bullying you to bump their order to the top of the schedule. You must firmly assert the existing priority rules." }],
      "E2": [{ id: "ITM", esg: 1, text: "Production wants to ignore the schedule and run the easiest products first. You assertively force them to stick to the agreed plan." }],
      "E3": [{ id: "ITM", esg: 1, text: "A senior account manager attempts to verbally override a locked production run. You fiercely demand they use the formal change-request process." }],
      "M1": [{ id: "ITM", esg: 1, text: "Factory managers are quietly manipulating their capacity data to lower expectations. You aggressively call out the discrepancy in a meeting." }],
      "M2": [{ id: "ITM", esg: 1, text: "The Commercial division is submitting wildly inflated forecasts to secure inventory. You forcefully reject the forecast and demand real data." }],
      "M4": [{ id: "ITM", esg: 1, text: "The executive team is demanding a supply plan that is mathematically impossible. You must assert the reality of the capacity constraints." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "A vendor is refusing to unload their truck because they claim they arrived on time. You have the log proving they were late." }],
      "E2": [{ id: "ITM", esg: 1, text: "A courier attempts to charge a massive wait-time fee that was their own fault. You firmly dispute the charge." }],
      "E3": [{ id: "ITM", esg: 1, text: "The Warehouse team blames Logistics for a missed dispatch, but the staging area was blocked. You aggressively defend your team's performance." }],
      "M1": [{ id: "ITM", esg: 1, text: "A major carrier threatens to drop your account unless you accept a 15% rate hike. You call their bluff and assert your contracted terms." }],
      "M2": [{ id: "ITM", esg: 1, text: "Sales directors are unilaterally promising clients impossible delivery dates. You fiercely push back, refusing to absorb the air-freight costs." }],
      "M4": [{ id: "ITM", esg: 1, text: "A critical 3PL partner is unilaterally rewriting your contract terms mid-year. You must aggressively assert your legal position." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "A stakeholder demands you use their preferred vendor, who is 20% more expensive than the contracted supplier. You must push back." }],
      "E2": [{ id: "ITM", esg: 1, text: "A supplier attempts to slip a hidden handling fee into a routine invoice. You assertively reject the invoice and demand a correction." }],
      "E3": [{ id: "ITM", esg: 1, text: "The Engineering team bypasses Procurement entirely and signs a verbal agreement. You aggressively force them to cancel it and run an RFQ." }],
      "M1": [{ id: "ITM", esg: 1, text: "A legacy vendor leverages their relationship with the CEO to refuse a cost-down initiative. You fiercely challenge the vendor's monopoly." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional plant directors are actively sabotaging your global vendor consolidation strategy. You forcefully escalate their non-compliance to the board." }],
      "M4": [{ id: "ITM", esg: 1, text: "The CFO wants to unilaterally break a major vendor contract to save cash. You must aggressively assert the legal and relationship risks." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "Production demands you keep the boiler running despite a pressure warning. You must firmly assert your authority and shut it down." }],
      "E2": [{ id: "ITM", esg: 1, text: "A contractor attempts to bypass a critical environmental check to speed up their work. You assertively halt their access to the site." }],
      "E3": [{ id: "ITM", esg: 1, text: "The shift manager complains that your load-shedding protocol cost them their bonus. You fiercely defend the necessity of the grid protection." }],
      "M1": [{ id: "ITM", esg: 1, text: "Factory directors are ignoring your corporate energy-reduction mandates. You aggressively push back, threatening to escalate their overruns to the CEO." }],
      "M2": [{ id: "ITM", esg: 1, text: "Finance attempts to slash the CapEx budget for critical effluent-treatment upgrades. You fiercely assert the regulatory risk of cutting the funds." }],
      "M4": [{ id: "ITM", esg: 1, text: "The board wants to cancel a critical environmental upgrade to save money. You must aggressively assert the regulatory risks of inaction." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "A line manager is pressuring you to approve a candidate who failed the basic screening test. You must stand your ground." }],
      "E2": [{ id: "ITM", esg: 1, text: "An employee angrily demands you alter their timesheet to cover for a late arrival. You firmly refuse the policy violation." }],
      "E3": [{ id: "ITM", esg: 1, text: "A senior manager attempts to bully you into skipping a formal disciplinary hearing and jumping straight to termination. You fiercely push back." }],
      "M1": [{ id: "ITM", esg: 1, text: "Department heads are refusing to complete their mandatory diversity and inclusion training. You aggressively enforce compliance across the leadership team." }],
      "M2": [{ id: "ITM", esg: 1, text: "The Operations Director demands you suppress a toxic-culture survey result to avoid embarrassing the plant managers. You forcefully refuse." }],
      "M4": [{ id: "ITM", esg: 1, text: "The executive board wants to cut employee healthcare benefits to boost quarterly profits. You must fiercely advocate for the workforce." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "A senior manager is demanding you process a payment without the mandatory secondary approval signature." }],
      "E2": [{ id: "ITM", esg: 1, text: "A sales rep aggressively argues that their unapproved client dinner should be reimbursed. You firmly stand by the T&E policy." }],
      "E3": [{ id: "ITM", esg: 1, text: "The Procurement team tries to pressure you into paying a vendor whose invoice doesn't match the PO. You fiercely reject the payment run." }],
      "M1": [{ id: "ITM", esg: 1, text: "Marketing attempts to hide a massive budget overrun by reclassifying expenses. You aggressively call out the accounting manipulation." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors are refusing to implement strict new credit-control policies because they fear losing clients. You fiercely mandate the change." }],
      "M4": [{ id: "ITM", esg: 1, text: "The CEO wants to use aggressive, borderline-unethical accounting tactics to mask a bad quarter. You must firmly refuse." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "A senior manager demands you give them an unapproved USB drive to transfer files. You must firmly enforce the security policy." }],
      "E2": [{ id: "ITM", esg: 1, text: "A developer throws a tantrum because you won't grant them unrestricted admin rights to the live server. You firmly maintain the protocol." }],
      "E3": [{ id: "ITM", esg: 1, text: "The Commercial team bypasses IT to buy an unsecure cloud application. You aggressively shut off network access to the app until it is vetted." }],
      "M1": [{ id: "ITM", esg: 1, text: "Department heads are fighting your mandate to force Multi-Factor Authentication (MFA) on all devices. You fiercely refuse to compromise on security." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional CIOs attempt to ignore the global infrastructure standardization plan to keep their legacy systems. You aggressively assert central authority." }],
      "M4": [{ id: "ITM", esg: 1, text: "The executive committee refuses to fund a critical cybersecurity upgrade. You must aggressively assert the catastrophic risk to the enterprise." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "A small client demands a discount that violates your pricing guidelines. You firmly decline." }],
      "E2": [{ id: "ITM", esg: 1, text: "A competitor's rep attempts to poach your client by spreading false rumors about your quality. You aggressively confront the rep's claims." }],
      "E3": [{ id: "ITM", esg: 1, text: "Supply Chain tells you they are cutting your client's allocation by 50% to favor another region. You fiercely fight for your client's volume." }],
      "M1": [{ id: "ITM", esg: 1, text: "Marketing wants to pivot the brand strategy in a way that will destroy your current sales pipeline. You aggressively challenge the campaign." }],
      "M2": [{ id: "ITM", esg: 1, text: "The CFO demands an across-the-board 15% price hike that you know will annihilate your market share. You fiercely push back on the strategy." }],
      "M4": [{ id: "ITM", esg: 1, text: "A massive enterprise client threatens to walk unless you agree to ruinous, loss-making contract terms." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "An executive demands you allow their unvetted guest to bypass security. You must firmly assert the building access protocols." }],
      "E2": [{ id: "ITM", esg: 1, text: "A manager complains aggressively that you won't authorize premium catering for their internal meeting. You firmly point to the budget policy." }],
      "E3": [{ id: "ITM", esg: 1, text: "A powerful department head tries to unilaterally claim an extra block of office space for their team. You fiercely defend the centralized seating plan." }],
      "M1": [{ id: "ITM", esg: 1, text: "Facility contractors attempt to bill you for hours they clearly didn't work. You aggressively challenge the invoice and demand a meeting." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors attempt to completely ignore the new corporate travel policy to maintain their luxury perks. You forcefully assert the mandate." }],
      "M4": [{ id: "ITM", esg: 1, text: "The board wants to slash the facilities budget to unsafe levels. You must aggressively assert the compliance and safety risks to the workforce." }] 
    }
  },
  "CR2": { // Collaborative Problem-Solving (Fully Graded)
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "Maintenance and Production are arguing over the best time to service your equipment." }],
      "E2": [{ id: "ITM", esg: 1, text: "A draftsman and a fabricator disagree on how to interpret a tolerance. You bring them to the workbench to solve it together." }],
      "E3": [{ id: "ITM", esg: 1, text: "The installation contractor and the safety officer clash over site access. You facilitate a joint meeting to design a safe workflow." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your project team and Procurement are fighting over vendor selection. You build a joint scorecard matrix they both agree on." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional engineering leads are clashing over the design of a shared platform. You host a summit to build a consensus architecture." }],
      "M4": [{ id: "ITM", esg: 1, text: "R&D and Commercial are deadlocked over a product launch that fails to meet either department's core criteria." }] 
    },
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "Your shift and the maintenance team are arguing over the best time to safely service a failing extruder." }],
      "E2": [{ id: "ITM", esg: 1, text: "Two operators are clashing over who should clean the mixer. You bring them together and design a shared rotation they both accept." }],
      "E3": [{ id: "ITM", esg: 1, text: "The inbound shift is complaining about how you leave the station. You sit down with the other shift lead to standardize the handover." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your supervisors are fighting with the Planning department over impossible schedules. You facilitate a joint capacity-modelling workshop." }],
      "M2": [{ id: "ITM", esg: 1, text: "Two regional plants are fighting over the allocation of a highly profitable new product line. You design a shared production strategy." }],
      "M4": [{ id: "ITM", esg: 1, text: "Production and Quality are completely deadlocked over the acceptable tolerance limits for a massive new enterprise client." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "Two supervisors are clashing over how to divide up the holiday vacation schedule for their shared team." }],
      "E2": [{ id: "ITM", esg: 1, text: "A hiring manager and a recruiter are frustrated with the slow interview process. You bring them together to jointly redesign the workflow." }],
      "E3": [{ id: "ITM", esg: 1, text: "Two employees in a dispute refuse to speak. You facilitate a structured mediation session to uncover their underlying issues." }],
      "M1": [{ id: "ITM", esg: 1, text: "Operations and Finance are fighting over the annual bonus structure. You facilitate a workshop to build a framework both sides support." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional HR directors are clashing over the new global mobility policy. You bring them together to co-create the localized guidelines." }],
      "M4": [{ id: "ITM", esg: 1, text: "The union is threatening a strike over shift premiums, while Finance claims there is zero budget for increases. You must design a mutual solution." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "A department head is frustrated that their expense claims keep getting rejected by your team due to complex formatting rules." }],
      "E2": [{ id: "ITM", esg: 1, text: "A vendor is angry about a delayed payment, and Procurement blames Finance. You set up a joint call to fix the underlying PO mismatch." }],
      "E3": [{ id: "ITM", esg: 1, text: "The Sales team is furious that you blocked credit for a new client. You work with them to find alternative security so the deal can proceed." }],
      "M1": [{ id: "ITM", esg: 1, text: "Marketing and Operations are locked in a battle over the CapEx budget. You facilitate a joint ROI-mapping session to align their priorities." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional controllers are fighting corporate over the timeline for month-end close. You co-design a new schedule that relieves the pressure." }],
      "M4": [{ id: "ITM", esg: 1, text: "Sales wants to offer 90-day payment terms to win a deal, but Treasury requires 30-day terms to maintain liquidity. You must bridge the gap." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "Warehouse and Dispatch are fighting over who is responsible for the staging area being cluttered at end-of-shift." }],
      "E2": [{ id: "ITM", esg: 1, text: "A transport vendor and a dock supervisor are constantly arguing about wait times. You pull them into a room to design a better loading schedule." }],
      "E3": [{ id: "ITM", esg: 1, text: "Customs clearance is delaying imports, and Procurement is furious. You map the document flow together to find where the bottleneck is." }],
      "M1": [{ id: "ITM", esg: 1, text: "Sales is overpromising delivery dates that Logistics cannot meet. You build a joint SLA dashboard that both departments agree to use." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional hubs are fighting over priority access to the primary national freight carrier. You co-create a dynamic allocation matrix." }],
      "M4": [{ id: "ITM", esg: 1, text: "A major raw material supplier is failing quality audits, but Procurement says they are the only vendor who can meet the volume demands." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "Production wants a machine back online immediately, but you need more time to test it safely. You must find a collaborative solution." }],
      "E2": [{ id: "ITM", esg: 1, text: "A mechanic and an electrician are arguing over the root cause of a fault. You bring them to the machine to troubleshoot it jointly." }],
      "E3": [{ id: "ITM", esg: 1, text: "The shift lead is furious that your team didn't fix a minor issue during the PM window. You co-design a better pre-PM communication checklist." }],
      "M1": [{ id: "ITM", esg: 1, text: "Engineering wants to install new tech that your maintenance planners say is impossible to service. You facilitate a joint design review." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional plant heads are fighting over the allocation of the national mobile repair team. You build a priority matrix they all agree on." }],
      "M4": [{ id: "ITM", esg: 1, text: "Finance wants to slash the spare parts budget, while Operations is screaming about downtime. You must design a mutually acceptable inventory strategy." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "Production is furious that your lab is taking too long to release batches. You must work with them to find a faster, compliant workflow." }],
      "E2": [{ id: "ITM", esg: 1, text: "An operator disagrees with an inspector's visual defect assessment. You bring them both to the lightbox to calibrate their standards together." }],
      "E3": [{ id: "ITM", esg: 1, text: "The warehouse team is frustrated by how QA labels quarantined stock. You work with the warehouse lead to design a clearer tagging system." }],
      "M1": [{ id: "ITM", esg: 1, text: "Procurement is angry that QA is rejecting a new, cheaper raw material. You co-design a supplier development plan to improve the material." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional plants are resisting a new global audit framework. You form a joint committee with the plant directors to co-create the audit criteria." }],
      "M4": [{ id: "ITM", esg: 1, text: "Commercial is furious that strict QA rules are blocking a product launch. You must collaborate to find a compliant path to market." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "The packing line keeps sending pallets that are too tall for your racks. You must work with the shift lead to solve the physical constraints." }],
      "E2": [{ id: "ITM", esg: 1, text: "Two forklift drivers are arguing over the safest way to load a specific fragile product. You bring them together to test and agree on a method." }],
      "E3": [{ id: "ITM", esg: 1, text: "Quality is complaining that pickers are damaging stock during retrieval. You collaborate with the QA lead to redesign the picking protocol." }],
      "M1": [{ id: "ITM", esg: 1, text: "Supply Chain is demanding faster turnaround times that your shift managers say are unsafe. You facilitate a joint process-mapping session." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional hubs are fiercely debating the best layout for the new racking systems. You build a consensus model that takes the best of all ideas." }],
      "M4": [{ id: "ITM", esg: 1, text: "Sales wants to store massive seasonal inventory, but Logistics says the hubs are full. You must design a collaborative overflow strategy." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "Sales promised a client a rush order, but Production says the machine is booked. You must bring them together to find a creative scheduling solution." }],
      "E2": [{ id: "ITM", esg: 1, text: "A scheduler and a raw material buyer are clashing over constantly changing delivery dates. You sit them down to align their Excel sheets." }],
      "E3": [{ id: "ITM", esg: 1, text: "Maintenance is furious that you keep scheduling runs during their PM windows. You co-design a locked calendar that respects both needs." }],
      "M1": [{ id: "ITM", esg: 1, text: "Marketing wants to launch three promos at once, but Operations says it will break the factory. You facilitate a phased launch plan." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional commercial heads are fighting over priority allocation of a highly constrained product. You build a shared allocation matrix." }],
      "M4": [{ id: "ITM", esg: 1, text: "The board wants massive inventory reductions, but Commercial demands 100% stock availability. You must design a collaborative S&OP compromise." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "Engineering wants a premium, expensive part, but your budget only allows for the standard version. You must find a solution that works for both." }],
      "E2": [{ id: "ITM", esg: 1, text: "A supplier and your accounts payable clerk are locked in a bitter dispute over an invoice format. You host a quick call to resolve the clash." }],
      "E3": [{ id: "ITM", esg: 1, text: "Production is furious that the new safety gloves you bought are uncomfortable. You bring them to the table to co-select a better alternative." }],
      "M1": [{ id: "ITM", esg: 1, text: "Legal is blocking a major software purchase because of liability clauses. You bring IT, Legal, and the vendor together to rewrite the terms." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional plant directors are violently opposed to your national vendor consolidation plan. You co-design a carve-out for critical local suppliers." }],
      "M4": [{ id: "ITM", esg: 1, text: "Sustainability demands green materials, but Finance refuses to increase the raw material budget. You must design a vendor solution that satisfies both." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "Production needs max chilling capacity, but Maintenance needs to shut down a cooling tower. You must work out a safe operating window." }],
      "E2": [{ id: "ITM", esg: 1, text: "A boiler operator and an electrician are arguing over the safe start-up sequence after a blackout. You bring them together to agree on the steps." }],
      "E3": [{ id: "ITM", esg: 1, text: "The Quality team is complaining that steam pressure drops are affecting sterilization. You work with them to map the peak demand times." }],
      "M1": [{ id: "ITM", esg: 1, text: "Factory managers are fighting over the allocation of compressed air during peak shifts. You facilitate a joint usage-reduction workshop." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional heads are resisting corporate mandates to install costly new effluent meters. You co-design a phased, budget-friendly installation plan." }],
      "M4": [{ id: "ITM", esg: 1, text: "The board wants aggressive energy cuts, but Operations refuses to slow down line speeds. You must design a collaborative efficiency strategy." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "A user is furious because their critical software keeps crashing, but your standard fix isn't working. You must troubleshoot with them." }],
      "E2": [{ id: "ITM", esg: 1, text: "A developer and a sysadmin are arguing over why a deployment failed. You bring them to a whiteboard to map the architecture together." }],
      "E3": [{ id: "ITM", esg: 1, text: "The HR team is frustrated by the new onboarding portal you built. You sit with them to co-design a more intuitive user interface." }],
      "M1": [{ id: "ITM", esg: 1, text: "Finance is demanding customized reporting that your data team says is impossible. You facilitate a workshop to find a technical middle ground." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional CIOs are fiercely debating whether to use AWS or Azure. You lead a joint task force to evaluate and agree on a unified cloud strategy." }],
      "M4": [{ id: "ITM", esg: 1, text: "Security demands strict firewalls, but Commercial demands seamless client portals. You must design an architecture that satisfies both mandates." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "A client wants a custom delivery schedule that Supply Chain says is impossible. You must bring them together to find a workable logistical solution." }],
      "E2": [{ id: "ITM", esg: 1, text: "A junior sales rep and a marketing coordinator are clashing over the messaging on a pitch deck. You help them blend their ideas." }],
      "E3": [{ id: "ITM", esg: 1, text: "The client is demanding a specific product feature that R&D says is too expensive. You facilitate a call to find a cheaper alternative they will accept." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your national sales directors are fiercely territorial over key enterprise accounts. You build a collaborative, cross-region account management team." }],
      "M2": [{ id: "ITM", esg: 1, text: "Operations is furious that Sales is selling highly complex, customized SKUs that ruin factory efficiency. You co-design a streamlined product catalog." }],
      "M4": [{ id: "ITM", esg: 1, text: "Finance wants to raise prices to protect margins, but Sales warns this will cause massive client churn. You must design a collaborative pricing model." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "Two departments are fighting over the allocation of desk space in a newly renovated office. You must design a fair seating plan." }],
      "E2": [{ id: "ITM", esg: 1, text: "The reception team and security guards are arguing over the visitor sign-in process. You bring them together to map a smoother workflow." }],
      "E3": [{ id: "ITM", esg: 1, text: "Employees are complaining about the new catering vendor, but Procurement says they are the cheapest. You find a menu compromise." }],
      "M1": [{ id: "ITM", esg: 1, text: "IT and Facilities are clashing over the timeline for rewiring the server room. You facilitate a joint project plan that respects both their constraints." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional office heads are fighting over the capital budget for office renovations. You co-create a priority scorecard to allocate funds fairly." }],
      "M4": [{ id: "ITM", esg: 1, text: "HR wants a massive office expansion to boost morale, while Finance demands real-estate footprint reductions. You must design a hybrid workspace solution." }] 
    }
  },
  "CR3": { // Compromise Negotiation (Fully Graded)
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "Two teams want to book the only large conference room at the exact same time. You negotiate to split the time." }],
      "E2": [{ id: "ITM", esg: 1, text: "A manager wants premium coffee in the breakroom, but the budget only covers standard. You negotiate a mix of both." }],
      "E3": [{ id: "ITM", esg: 1, text: "IT wants to shut down the network for 4 hours, but the night shift needs to work. You negotiate a 2-hour window." }],
      "M1": [{ id: "ITM", esg: 1, text: "Facilities wants a 5-year cleaning contract for a better rate, but Finance only wants 1 year. You negotiate a 3-year term." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional heads want massive private offices, but corporate policy mandates open plan. You negotiate a hybrid layout." }],
      "M4": [{ id: "ITM", esg: 1, text: "Two critical plant expansions require immediate funding, but the board has only approved enough CapEx to fully fund one." }] 
    },
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "You need the forklift for a full hour, but the adjacent line also needs it immediately to prevent a stoppage. You negotiate to share it." }],
      "E2": [{ id: "ITM", esg: 1, text: "Maintenance wants to take your machine down for a 2-hour repair, but you need to hit quota. You negotiate a 45-minute patch." }],
      "E3": [{ id: "ITM", esg: 1, text: "QA wants to quarantine an entire shift's production. You negotiate to quarantine only the suspect batches while releasing the rest." }],
      "M1": [{ id: "ITM", esg: 1, text: "Sales wants to squeeze in three rush orders this week. You negotiate to accept one rush order if they push back a legacy delivery." }],
      "M2": [{ id: "ITM", esg: 1, text: "Corporate wants a 15% headcount reduction in your plants, but you need staff for a new line. You negotiate a 5% cut via natural attrition." }],
      "M4": [{ id: "ITM", esg: 1, text: "Two different mega-projects require the immediate allocation of your best engineering talent, but you only have enough staff to partially support both." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "A manager wants to send their entire team to a training seminar, which would leave their department completely unstaffed for the day." }],
      "E2": [{ id: "ITM", esg: 1, text: "An employee demands a 20% raise, but the banding only allows 5%. You negotiate a 5% raise with an early performance review." }],
      "E3": [{ id: "ITM", esg: 1, text: "A hiring manager wants an incredibly expensive recruitment agency. You negotiate using them for one role while keeping the rest internal." }],
      "M1": [{ id: "ITM", esg: 1, text: "The union demands an extra 10 days of paid leave. You negotiate a compromise of 3 days plus a minor shift premium." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors refuse to adopt the new performance system entirely. You negotiate letting them keep their local scales if they use your software." }],
      "M4": [{ id: "ITM", esg: 1, text: "The business wants a 10% pay cut across the board, but the workforce will only accept 2%. You must find the middle ground." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "An employee wants a cash advance for urgent travel, but corporate policy dictates it takes three days to process." }],
      "E2": [{ id: "ITM", esg: 1, text: "A vendor demands payment in 14 days, but your policy is 60 days. You negotiate a 30-day settlement." }],
      "E3": [{ id: "ITM", esg: 1, text: "Commercial wants a massive, unbudgeted client entertainment expense approved. You negotiate approving half the amount." }],
      "M1": [{ id: "ITM", esg: 1, text: "IT wants a $500k infrastructure upgrade immediately. You negotiate splitting the CapEx across two fiscal years." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional CFOs want to retain their massive local cash reserves, but Corporate wants it all repatriated. You negotiate a cash-sweep percentage." }],
      "M4": [{ id: "ITM", esg: 1, text: "Marketing wants a massive budget increase, while Operations desperately needs capital for machine upgrades. The remaining budget cannot cover both." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "A driver wants to take their legally mandated break, but the loading bay needs them to move their truck immediately to clear a backlog." }],
      "E2": [{ id: "ITM", esg: 1, text: "A client demands delivery by Friday, but the carrier can only guarantee Monday. You negotiate a weekend delivery split." }],
      "E3": [{ id: "ITM", esg: 1, text: "Warehouse wants to close receiving at 4 PM, but Procurement has trucks arriving until 6 PM. You negotiate a 5 PM cut-off." }],
      "M1": [{ id: "ITM", esg: 1, text: "Sales wants to promise 24-hour shipping globally, but Logistics says it will destroy margins. You negotiate a 48-hour SLA." }],
      "M2": [{ id: "ITM", esg: 1, text: "Corporate wants to consolidate all regional freight to one massive vendor, but local directors resist. You negotiate an 80/20 split." }],
      "M4": [{ id: "ITM", esg: 1, text: "A client demands overnight air-freight at your expense for a delayed order, but your margins on the deal are already negative." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "You need to shut down a machine for 4 hours of maintenance, but Production can only afford 2 hours of downtime." }],
      "E2": [{ id: "ITM", esg: 1, text: "A technician wants a $5,000 specialized tool, but your budget is $2,000. You negotiate buying a refurbished version." }],
      "E3": [{ id: "ITM", esg: 1, text: "Production wants you to fix five minor issues during a 30-minute window. You negotiate fixing the two most critical ones." }],
      "M1": [{ id: "ITM", esg: 1, text: "The engineering team wants to overhaul a line completely, but you need the parts budget elsewhere. You negotiate a phased overhaul." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors want massive teams of dedicated mechanics. You negotiate a leaner core team supported by a 'flying squad' of experts." }],
      "M4": [{ id: "ITM", esg: 1, text: "You want to standardize all global plants on a premium software system, but regional directors want cheaper local options. You must find a middle ground." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "You want to design a part using stainless steel, but Procurement insists on cheaper aluminum. You must find a workable middle spec." }],
      "E2": [{ id: "ITM", esg: 1, text: "A contractor says a specific installation will take 3 weeks. You need it in 1 week. You negotiate a 2-week timeline with overtime." }],
      "E3": [{ id: "ITM", esg: 1, text: "Production wants a new conveyor system to run at 500 units/min, but safety limits are 300. You negotiate a design for 400 with extra guards." }],
      "M1": [{ id: "ITM", esg: 1, text: "Commercial wants ten new features added to the product prototype. You negotiate including the top three to meet the launch date." }],
      "M2": [{ id: "ITM", esg: 1, text: "Corporate wants a uniform global factory design, but local regulations vary wildly. You negotiate a core blueprint with flexible local modules." }],
      "M4": [{ id: "ITM", esg: 1, text: "R&D wants a 5-year timeline for perfection, but Commercial needs a product to market in 12 months. You must negotiate a phased release schedule." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "You want to hold a batch for 24 hours of testing, but dispatch needs it in 12 hours to make the truck. You must find a safe testing compromise." }],
      "E2": [{ id: "ITM", esg: 1, text: "A supplier rejects your claim that their material is defective. You negotiate sending the sample to a neutral third-party lab." }],
      "E3": [{ id: "ITM", esg: 1, text: "Production is furious about your strict 10% sampling rule because it slows them down. You negotiate a dynamic 5% rule if their baseline improves." }],
      "M1": [{ id: "ITM", esg: 1, text: "Sales wants to drastically loosen aesthetic defect criteria to clear inventory. You negotiate a minor relaxation for a specific lower-tier market." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors refuse to fund a massive new digital QMS. You negotiate a pilot program in just two plants to prove the ROI." }],
      "M4": [{ id: "ITM", esg: 1, text: "Regulators want a massive overhaul of your quality systems, but the CEO says it will bankrupt the company. You must negotiate a phased compliance plan." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "You want to completely reorganize a busy aisle, but the pickers complain it will slow them down today. You must negotiate a phased reorganization." }],
      "E2": [{ id: "ITM", esg: 1, text: "A driver demands you load 20 extra pallets that aren't on the manifest. You negotiate loading 5 critical ones and leaving the rest." }],
      "E3": [{ id: "ITM", esg: 1, text: "Production wants to run continuously through the weekend, but you don't have the storage space. You negotiate them running a smaller batch." }],
      "M1": [{ id: "ITM", esg: 1, text: "Commercial is furious about high warehouse storage fees. You negotiate a deal where they get lower fees if they improve their forecast accuracy." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional hubs want their own dedicated transport fleets, but corporate wants 100% 3PL outsourcing. You negotiate a hybrid model." }],
      "M4": [{ id: "ITM", esg: 1, text: "The board wants to close 5 regional hubs to save money, but Sales insists they need local stock. You must negotiate a hub-and-spoke compromise." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "Sales wants an order delivered by Tuesday. Production says Thursday is the earliest. You must negotiate a Wednesday compromise." }],
      "E2": [{ id: "ITM", esg: 1, text: "Procurement needs 6 weeks lead time for a material, but you only have 4 weeks of safety stock. You negotiate a split-shipment with the vendor." }],
      "E3": [{ id: "ITM", esg: 1, text: "Production refuses to run a batch smaller than 10,000 units, but Sales only needs 2,000. You negotiate a 5,000 unit run with extended storage." }],
      "M1": [{ id: "ITM", esg: 1, text: "Marketing wants to launch a new product in May, but Supply Chain says August. You negotiate a limited regional soft-launch in June." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors demand massive buffers of safety stock, while Finance demands lean inventory. You negotiate a dynamic buffer based on seasonality." }],
      "M4": [{ id: "ITM", esg: 1, text: "Finance wants zero inventory to free up cash, but Commercial wants maximum inventory to prevent stockouts. You must negotiate the target stock levels." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "A vendor wants a 10% price increase. You want a 0% increase. You must negotiate a middle ground that keeps them supplying." }],
      "E2": [{ id: "ITM", esg: 1, text: "Internal IT wants a premium laptop brand, but your budget only covers standard. You negotiate buying premium for developers and standard for admin." }],
      "E3": [{ id: "ITM", esg: 1, text: "A critical supplier refuses to accept your standard 90-day payment terms, demanding 30 days. You negotiate a 60-day compromise." }],
      "M1": [{ id: "ITM", esg: 1, text: "Engineering wants to single-source a massive contract to their favorite vendor. You negotiate a 70/30 split to maintain competitive tension." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors refuse to drop their local packaging suppliers. You negotiate a deal where they use the global contract for 80% of their volume." }],
      "M4": [{ id: "ITM", esg: 1, text: "A strategic supplier is demanding exclusivity, but your risk policy requires dual-sourcing. You must negotiate a percentage-split compromise." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "You want to run the chillers at minimum power to save energy, but Production says the machines are overheating. You must find a thermal compromise." }],
      "E2": [{ id: "ITM", esg: 1, text: "A contractor wants to work on the electrical panel during the day shift. You negotiate a weekend window with a slight premium." }],
      "E3": [{ id: "ITM", esg: 1, text: "Maintenance wants to shut down the main boiler for a week. You negotiate a 3-day rapid overhaul using external contractors." }],
      "M1": [{ id: "ITM", esg: 1, text: "Corporate mandates a 20% cut in water usage, but plant managers say it will halt production. You negotiate a 10% cut this year and 10% next year." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional heads refuse to fund solar panel installations on their roofs. You negotiate a Power Purchase Agreement (PPA) where a third party absorbs the CapEx." }],
      "M4": [{ id: "ITM", esg: 1, text: "Sustainability advocates want 100% green energy immediately, but Finance says the premium is too high. You must negotiate a multi-year transition curve." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "You want to enforce a 15-character password rule. Users complain it is too long to remember. You must negotiate a secure but usable compromise." }],
      "E2": [{ id: "ITM", esg: 1, text: "A developer wants full admin rights on their laptop, which violates policy. You negotiate granting them a sandboxed virtual machine." }],
      "E3": [{ id: "ITM", esg: 1, text: "Commercial wants a new CRM deployed next week, but testing takes a month. You negotiate a phased rollout, starting with a small pilot team." }],
      "M1": [{ id: "ITM", esg: 1, text: "HR wants a massive, expensive new HRIS suite. Finance refuses the budget. You negotiate buying the core module now and adding features later." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional CIOs refuse to migrate to the central cloud. You negotiate a hybrid model where critical data moves to the cloud but edge computing remains local." }],
      "M4": [{ id: "ITM", esg: 1, text: "The board wants a total global ERP migration in 6 months. You know it takes 18. You must negotiate a phased rollout compromise." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "A client wants a 30-day delivery guarantee. Your supply chain can only guarantee 45 days. You must negotiate a middle ground." }],
      "E2": [{ id: "ITM", esg: 1, text: "A customer demands a 10% discount to renew. You negotiate a 5% discount tied to a longer 3-year contract term." }],
      "E3": [{ id: "ITM", esg: 1, text: "Marketing wants to spend $100k on a lavish event. You only have $50k in the budget. You negotiate a high-impact digital campaign instead." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your sales directors are furious about their new, higher quotas. You negotiate keeping the quotas but lowering the threshold to trigger bonus accelerators." }],
      "M2": [{ id: "ITM", esg: 1, text: "National account heads want total pricing autonomy, but corporate wants strict global price bands. You negotiate a 10% discretionary variance corridor." }],
      "M4": [{ id: "ITM", esg: 1, text: "The CEO wants 20% margin growth, but key accounts will walk if prices rise more than 5%. You must negotiate a complex pricing and rebate compromise." }] 
    }
  },
  "CR4": { // Conflict Avoidance (Fully Graded)
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "Two technicians are bickering over a trivial sports disagreement in the control room." }],
      "E2": [{ id: "ITM", esg: 1, text: "An operator makes a passive-aggressive comment about the night shift. You ignore it rather than starting an argument over shift-rivalry." }],
      "E3": [{ id: "ITM", esg: 1, text: "Two shift leads are in a tense standoff over a minor logbook error. You step away and let them resolve it themselves." }],
      "M1": [{ id: "ITM", esg: 1, text: "A toxic argument erupts between Production and Maintenance over a utility shutoff. You keep your team out of the crossfire." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors are feuding over the allocation of green-energy credits. You focus purely on the technical rollout, ignoring the politics." }],
      "M4": [{ id: "ITM", esg: 1, text: "Two senior executives are engaged in a toxic, personal power struggle that does not directly impact your current deliverables." }] 
    },
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "An operator from the previous shift left a minor mess at your station. You decide it's faster to just clean it up rather than starting an argument." }],
      "E2": [{ id: "ITM", esg: 1, text: "A stressed QA inspector snaps at you over a minor spec deviation. You bite your tongue and fix it rather than snapping back." }],
      "E3": [{ id: "ITM", esg: 1, text: "The warehouse shift lead sends a rude email complaining about your pallet stacking. You delete the email and quietly improve the stacking." }],
      "M1": [{ id: "ITM", esg: 1, text: "Two shift supervisors are engaged in a bitter, personal feud. You strictly manage them via metrics, refusing to engage in their drama." }],
      "M2": [{ id: "ITM", esg: 1, text: "A highly political turf war breaks out between the Engineering and Maintenance directors. You keep the production division strictly neutral." }],
      "M4": [{ id: "ITM", esg: 1, text: "Two rival plant managers are engaged in a bitter, highly political feud over prestige. You carefully steer your department clear of the crossfire." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "A stressed production supervisor makes a slightly passive-aggressive comment about a repair taking too long. You ignore the tone and finish the job." }],
      "E2": [{ id: "ITM", esg: 1, text: "A mechanic from another crew borrows your tools without asking. You retrieve them silently rather than picking a fight." }],
      "E3": [{ id: "ITM", esg: 1, text: "The storekeeper is notoriously grumpy and difficult to deal with. You structure your requests via email to avoid interacting with them." }],
      "M1": [{ id: "ITM", esg: 1, text: "A massive, toxic blame-game erupts between Production and Quality over a ruined batch. You keep the maintenance team out of the debate." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors are viciously fighting over the CapEx budget allocation. You quietly withdraw your requests until the political dust settles." }],
      "M4": [{ id: "ITM", esg: 1, text: "The engineering and operations directors are publicly clashing over a strategy failure. You tactically withdraw your team from the conflict zone." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "A draftsman insists on using a slightly annoying but harmless naming convention for their files. You decide it isn't worth fighting over." }],
      "E2": [{ id: "ITM", esg: 1, text: "A contractor makes a condescending remark about your blueprint. You ignore the insult and focus strictly on the installation." }],
      "E3": [{ id: "ITM", esg: 1, text: "Two senior engineers are locked in a bitter feud over a theoretical design choice. You excuse yourself from the meeting room." }],
      "M1": [{ id: "ITM", esg: 1, text: "Commercial and Operations are in a screaming match over a product launch date. You keep your engineering team strictly out of the crossfire." }],
      "M2": [{ id: "ITM", esg: 1, text: "A toxic political battle erupts between regional heads over vendor selection. You maintain total neutrality and focus only on the specs." }],
      "M4": [{ id: "ITM", esg: 1, text: "The board is fractured into two warring factions over a potential merger. You keep your R&D division entirely focused on the technical roadmap, ignoring the politics." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "A floor worker grumbles under their breath while complying with a hygiene rule. You choose to ignore the grumbling as long as they comply." }],
      "E2": [{ id: "ITM", esg: 1, text: "A production shift lead sends a highly defensive email about an audit finding. You choose not to reply, letting the formal report speak for itself." }],
      "E3": [{ id: "ITM", esg: 1, text: "Two lab technicians are bickering over who should clean the equipment. You step out of the lab and let them sort it out." }],
      "M1": [{ id: "ITM", esg: 1, text: "A bitter feud breaks out between Engineering and Production over machine tolerances. You keep the QA department strictly focused on the data, avoiding the drama." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors are viciously fighting over the interpretation of a new global standard. You withdraw from the debate until Corporate issues a mandate." }],
      "M4": [{ id: "ITM", esg: 1, text: "The Commercial and Finance teams are locked in a vicious blame-game over lost margins. You keep the QA department strictly out of the debate." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "Two pickers are arguing over who gets to use the newer pallet jack. You step back and let them resolve it themselves." }],
      "E2": [{ id: "ITM", esg: 1, text: "A driver is cursing loudly about the weather while unloading. You ignore their foul mood and focus entirely on the paperwork." }],
      "E3": [{ id: "ITM", esg: 1, text: "The morning shift lead left the staging area messy again. You decide to just clean it up with your crew rather than having another fight about it." }],
      "M1": [{ id: "ITM", esg: 1, text: "Sales and Production are having a massive, toxic argument over inventory levels. You keep your warehouse team strictly out of the crossfire." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional hub managers are locked in a bitter political dispute over the new WMS software. You quietly continue your pilot program, ignoring the noise." }],
      "M4": [{ id: "ITM", esg: 1, text: "A toxic political battle is erupting between regional logistics heads over territory. You refuse to take sides and focus purely on your own metrics." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "A sales rep sends a slightly rude email demanding a status update. You ignore the rudeness and simply reply with the requested data." }],
      "E2": [{ id: "ITM", esg: 1, text: "A production supervisor makes a sarcastic comment about your forecast accuracy. You bite your tongue and move on to the next agenda item." }],
      "E3": [{ id: "ITM", esg: 1, text: "Two planners are engaged in a tense standoff over desk space. You put on your headphones and focus on your work, letting them sort it out." }],
      "M1": [{ id: "ITM", esg: 1, text: "A massive, toxic blame-game erupts between Commercial and Supply Chain over a missed quarter. You keep your planning team strictly neutral and data-focused." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors are viciously fighting over the allocation of a constrained product. You refuse to arbitrate the dispute, forcing them to agree before you schedule it." }],
      "M4": [{ id: "ITM", esg: 1, text: "The executive team is deadlocked in a bitter feud over corporate strategy. You keep the planning function completely neutral and data-focused." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "A dispatcher makes a sarcastic comment about a routing change. You decide not to engage with the sarcasm and just hand over the manifest." }],
      "E2": [{ id: "ITM", esg: 1, text: "A customs agent is being deliberately slow and difficult. You swallow your pride, ignore the power-trip, and wait patiently for the stamp." }],
      "E3": [{ id: "ITM", esg: 1, text: "Two shift coordinators are bickering over who should handle a difficult vendor call. You step away and let them negotiate it themselves." }],
      "M1": [{ id: "ITM", esg: 1, text: "Warehouse and Production are in a screaming match over a missed dock-time. You keep your logistics team entirely out of the argument." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional heads are engaged in a toxic political battle over carrier selection. You quietly implement your own strategy, ignoring the corporate noise." }],
      "M4": [{ id: "ITM", esg: 1, text: "A massive turf war breaks out between Procurement and Manufacturing over supplier selection. You tactically avoid the crossfire and focus on logistics." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "An internal stakeholder complains about the bureaucracy of the PO system. You choose not to argue and simply process their request." }],
      "E2": [{ id: "ITM", esg: 1, text: "A vendor makes a slightly patronizing comment during a negotiation. You ignore the insult and stick strictly to the contract terms." }],
      "E3": [{ id: "ITM", esg: 1, text: "Two junior buyers are in a tense standoff over who gets the better desk. You ignore the drama and let them figure it out." }],
      "M1": [{ id: "ITM", esg: 1, text: "A bitter, highly toxic feud erupts between Engineering and Finance over CapEx. You keep your category managers entirely out of the debate." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors are viciously fighting over the national vendor consolidation plan. You quietly pause the rollout until the politics settle." }],
      "M4": [{ id: "ITM", esg: 1, text: "The C-Suite is deeply divided over whether to acquire a competitor. You keep the procurement function strictly focused on vendor management, avoiding the drama." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "Two employees are having a minor, low-stakes disagreement about the office temperature. You decide not to intervene in such a trivial issue." }],
      "E2": [{ id: "ITM", esg: 1, text: "A candidate is slightly rude to you during an interview scheduling call. You ignore the rudeness and book the slot professionally." }],
      "E3": [{ id: "ITM", esg: 1, text: "Two recruiters are bickering over who gets the credit for a high-profile hire. You step out of the room and let them resolve it." }],
      "M1": [{ id: "ITM", esg: 1, text: "A massive, toxic turf war erupts between two department heads. You keep your HR Business Partners strictly neutral, refusing to take sides." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional VPs are engaged in a bitter political battle over headcount allocation. You tactically withdraw HR from the dispute, forcing them to resolve it." }],
      "M4": [{ id: "ITM", esg: 1, text: "Two highly toxic executive board members are actively trying to recruit you to their side of a political war. You expertly maintain total, aloof neutrality." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "A manager complains loudly about the strictness of the expense policy while handing you their receipts. You process the receipts without engaging the complaint." }],
      "E2": [{ id: "ITM", esg: 1, text: "A clerk from another department sends a highly defensive, passive-aggressive email. You ignore the tone and reply only with the facts." }],
      "E3": [{ id: "ITM", esg: 1, text: "Two senior accountants are locked in a tense standoff over a theoretical accounting treatment. You excuse yourself from the debate." }],
      "M1": [{ id: "ITM", esg: 1, text: "Commercial and Operations are in a screaming match over profitability. You keep your finance managers strictly focused on the numbers, avoiding the crossfire." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors are viciously fighting over the budget allocations. You refuse to arbitrate the dispute, forcing them to agree before you release the funds." }],
      "M4": [{ id: "ITM", esg: 1, text: "The CEO and COO are engaged in a brutal power struggle over company direction. You keep the finance department hyper-focused on reporting, avoiding the blast radius." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "A user is venting frustration about a slow laptop while you fix it. You ignore the venting and focus purely on resolving the technical issue." }],
      "E2": [{ id: "ITM", esg: 1, text: "A developer makes a condescending remark about your code. You bite your tongue and focus entirely on the deployment rather than arguing." }],
      "E3": [{ id: "ITM", esg: 1, text: "Two sysadmins are engaged in a bitter feud over the best way to configure a server. You step back and let them hash it out." }],
      "M1": [{ id: "ITM", esg: 1, text: "A toxic, massive blame-game erupts between HR and Finance over a botched software rollout. You keep the IT team strictly out of the debate." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional CIOs are locked in a bitter political dispute over cloud strategy. You quietly continue your pilot program, ignoring the corporate noise." }],
      "M4": [{ id: "ITM", esg: 1, text: "A bitter feud erupts between Marketing and Sales over CRM ownership. You refuse to arbitrate the dispute, forcing them to resolve it before you build the system." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "A client makes a slightly condescending remark during a successful negotiation. You swallow your pride, ignore the remark, and sign the deal." }],
      "E2": [{ id: "ITM", esg: 1, text: "A competitor's rep attempts to bait you into an argument at a trade show. You politely excuse yourself and walk away." }],
      "E3": [{ id: "ITM", esg: 1, text: "Two account executives are bickering over lead attribution. You refuse to intervene and tell them to figure it out themselves." }],
      "M1": [{ id: "ITM", esg: 1, text: "A massive, toxic turf war erupts between Supply Chain and Production. You keep your sales managers entirely focused on clients, avoiding the internal drama." }],
      "M2": [{ id: "ITM", esg: 1, text: "National directors are engaged in a bitter political battle over commission structures. You quietly maintain your regional strategy, ignoring the noise." }],
      "M4": [{ id: "ITM", esg: 1, text: "The product and engineering divisions are at war over a delayed launch. You keep the commercial team focused entirely on the market, completely ignoring the internal friction." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "An employee complains that the new brand of coffee in the breakroom is terrible. You decide this is not a conflict worth your time to address." }],
      "E2": [{ id: "ITM", esg: 1, text: "A VIP guest is incredibly rude to you at the reception desk. You swallow your pride, smile professionally, and process their badge." }],
      "E3": [{ id: "ITM", esg: 1, text: "Two departments are engaged in a tense standoff over a minor seating arrangement. You step back and let their managers resolve it." }],
      "M1": [{ id: "ITM", esg: 1, text: "A toxic blame-game erupts between IT and HR over a failed town hall event. You keep the facilities team strictly out of the crossfire." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional office heads are viciously fighting over the CapEx renovation budget. You quietly withdraw your proposals until the political dust settles." }],
      "M4": [{ id: "ITM", esg: 1, text: "A toxic rift develops between the regional office heads over resource allocation. You keep the central admin function strictly impartial and out of the debate." }] 
    }
  },
  "CR5": { // Accommodating Conciliation (Fully Graded)
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "A trusted, highly reliable supplier makes a minor, one-off invoicing error that is easily fixed." }],
      "E2": [{ id: "ITM", esg: 1, text: "An internal stakeholder desperately needs a PO pushed through today. You drop your other tasks to accommodate them." }],
      "E3": [{ id: "ITM", esg: 1, text: "A key vendor asks for a slight extension on a delivery deadline due to a genuine crisis. You agree to adjust the schedule." }],
      "M1": [{ id: "ITM", esg: 1, text: "Engineering strongly prefers a specific vendor that is slightly more expensive. You yield to their preference to maintain cross-functional harmony." }],
      "M2": [{ id: "ITM", esg: 1, text: "A regional director is furious about a new global contract. You agree to carve out an exception for their plant to preserve the relationship." }],
      "M4": [{ id: "ITM", esg: 1, text: "A critical, irreplaceable strategic vendor requires you to temporarily absorb a massive cost spike to prevent their bankruptcy." }] 
    },
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "A highly respected veteran operator asks to leave 30 minutes early for a family emergency, leaving you slightly short-staffed. You agree to cover for them." }],
      "E2": [{ id: "ITM", esg: 1, text: "Maintenance begs you for an extra hour to finish a critical repair. You agree to absorb the downtime hit on your shift's metrics to support them." }],
      "E3": [{ id: "ITM", esg: 1, text: "The next shift lead asks you to run a difficult product sequence so their crew has an easier night. You agree to take the harder run." }],
      "M1": [{ id: "ITM", esg: 1, text: "Sales desperately needs a rush order that will ruin your weekly OEE metrics. You agree to run it to protect the client relationship." }],
      "M2": [{ id: "ITM", esg: 1, text: "A regional director begs you to share your critical raw material allocation to save their plant from shutting down. You agree to take the hit." }],
      "M4": [{ id: "ITM", esg: 1, text: "A key strategic client demands a highly disruptive, custom production run. To preserve this massive relationship, you absorb the severe operational headache." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "A production lead begs you to fix a minor issue on their machine out of sequence because they are stressed. You agree to help them out to keep the peace." }],
      "E2": [{ id: "ITM", esg: 1, text: "A technician makes a mistake and is terrified of being fired. You cover for them, fixing the error yourself and giving them a quiet warning." }],
      "E3": [{ id: "ITM", esg: 1, text: "Operations asks you to delay a critical PM window because they are behind schedule. You agree to absorb the risk and reschedule the work." }],
      "M1": [{ id: "ITM", esg: 1, text: "Engineering is pushing a highly complex new machine installation that your team hates. You agree to support the install to maintain inter-departmental harmony." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional plants are refusing to adopt a new global CMMS system. You agree to delay the rollout by a year to preserve your relationship with the directors." }],
      "M4": [{ id: "ITM", esg: 1, text: "The CEO desperately wants a cosmetic upgrade to the factory floor before a major investor visit. You sacrifice your critical maintenance schedule to make it happen." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "A draftsman is struggling with a personal issue and asks to hand off a tedious drawing to you. You agree to take the hit to support your colleague." }],
      "E2": [{ id: "ITM", esg: 1, text: "A contractor makes a minor, harmless mistake during installation and begs you not to report it. You agree to let it slide to preserve the working relationship." }],
      "E3": [{ id: "ITM", esg: 1, text: "Production hates the ergonomic layout of a new machine you designed. You swallow your pride and agree to completely redesign it to their preference." }],
      "M1": [{ id: "ITM", esg: 1, text: "Commercial strongly objects to a technical feature you believe is necessary. You agree to strip the feature out to maintain cross-functional alignment." }],
      "M2": [{ id: "ITM", esg: 1, text: "A powerful regional director demands you use their preferred, slightly inferior local engineering firm. You yield to their demand to keep the peace." }],
      "M4": [{ id: "ITM", esg: 1, text: "A massive client hates a technical feature of your new product that your team spent months building. You agree to scrap the feature entirely to save the account." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "A stressed operator accidentally skips a minor, non-critical paperwork step. You calmly fill in the blank for them rather than writing them up." }],
      "E2": [{ id: "ITM", esg: 1, text: "A lab tech is overwhelmed and asks you to process their samples. You agree to absorb their workload to help them through a tough day." }],
      "E3": [{ id: "ITM", esg: 1, text: "Production begs you to release a quarantined batch that is perfectly safe but lacks one signature. You agree to process the release to save their shift." }],
      "M1": [{ id: "ITM", esg: 1, text: "Operations is furious about a strict new QA testing protocol. You agree to significantly relax the testing frequency to maintain departmental harmony." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors complain that your new QMS software is too hard to use. You agree to pause the rollout and stick to paper records for another year." }],
      "M4": [{ id: "ITM", esg: 1, text: "A powerful regional director is furious about a strict new QA policy. You agree to significantly soften the rollout timeline to preserve the leadership relationship." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "A driver arrives late due to terrible traffic and is desperate to be loaded. You agree to stay 20 minutes past your shift to help them out." }],
      "E2": [{ id: "ITM", esg: 1, text: "A picker makes a minor mistake and is terrified of getting a warning. You quietly fix the inventory error in the system for them." }],
      "E3": [{ id: "ITM", esg: 1, text: "Production dumps a massive load of unsorted pallets on your dock and begs for forgiveness. You agree to have your team sort it out to maintain the peace." }],
      "M1": [{ id: "ITM", esg: 1, text: "Sales demands you hold excess inventory that is clogging up your warehouse. You agree to absorb the efficiency hit to support their commercial strategy." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional hubs refuse to adopt a new barcode system because they don't like the scanners. You agree to let them keep using their old manual process." }],
      "M4": [{ id: "ITM", esg: 1, text: "A major retail partner demands you completely restructure your palletizing format to match their unique system. You absorb the massive cost to keep their business." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "A panicked sales rep made a mistake and forgot to submit an order. You agree to completely rework your schedule to save them from getting in trouble." }],
      "E2": [{ id: "ITM", esg: 1, text: "A clerk is struggling with a new forecasting tool and asks you to just do it for them. You agree to take on the work to relieve their stress." }],
      "E3": [{ id: "ITM", esg: 1, text: "Production begs you to cancel a complex changeover because they are short-staffed. You agree to rewrite the plan, absorbing the angry calls from Sales." }],
      "M1": [{ id: "ITM", esg: 1, text: "Commercial strongly disagrees with your demand forecast, insisting they will sell more. You yield to their numbers to maintain cross-functional harmony." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors complain that your new S&OP process is too rigid. You agree to let them bypass the formal meetings and submit data loosely." }],
      "M4": [{ id: "ITM", esg: 1, text: "The executive board makes a wildly unrealistic demand for inventory reduction. You choose not to fight the mandate, absorbing the immense stress of making it work." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "A local courier accidentally damages a minor parcel and is terrified of losing their job. You agree not to report it formally and handle it internally." }],
      "E2": [{ id: "ITM", esg: 1, text: "A dispatcher makes a routing error. You agree to take the blame when speaking to the frustrated client to protect your junior team member." }],
      "E3": [{ id: "ITM", esg: 1, text: "Warehouse begs you to delay a truck arrival because they are totally backed up. You agree to hold the truck, absorbing the carrier's angry phone calls." }],
      "M1": [{ id: "ITM", esg: 1, text: "Sales demands you use a highly expensive, inefficient air-freight route to satisfy a VIP client. You agree to take the hit on your cost metrics." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors refuse to use the new global carrier matrix, preferring their local friends. You agree to grant them a massive exception to keep the peace." }],
      "M4": [{ id: "ITM", esg: 1, text: "A critical enterprise client demands you switch to a highly inefficient logistics route just to satisfy their internal metrics. You absorb the efficiency hit to keep them happy." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "A production shift is running behind and begs you to delay a scheduled power-down by an hour. You agree to stay late and monitor the systems to help them." }],
      "E2": [{ id: "ITM", esg: 1, text: "A technician makes a minor mistake on a water-testing log and asks you to fix it. You agree to handle the correction for them." }],
      "E3": [{ id: "ITM", esg: 1, text: "Operations demands you run the chillers at maximum capacity, destroying your energy metrics. You agree to do it to ensure their batch is perfect." }],
      "M1": [{ id: "ITM", esg: 1, text: "Factory managers complain that your new energy-saving mandate is too disruptive. You agree to completely roll back the initiative to keep them happy." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors refuse to fund the installation of mandatory environmental sensors. You agree to quietly delay the corporate reporting requirement for a year." }],
      "M4": [{ id: "ITM", esg: 1, text: "The local community is complaining about noise from your cooling towers. You agree to spend massive capital on silencers simply to maintain good public relations." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "An employee misses the deadline to submit their benefits enrollment due to a family crisis. You spend an hour on the phone with the provider to manually force it through." }],
      "E2": [{ id: "ITM", esg: 1, text: "A hiring manager forgot to submit an approval form and is panicking. You agree to manually push the requisition through the system to save them." }],
      "E3": [{ id: "ITM", esg: 1, text: "An employee is terrified of a disciplinary hearing. You agree to significantly soften the formal warning to a 'friendly chat' to preserve their morale." }],
      "M1": [{ id: "ITM", esg: 1, text: "Department heads are furious about a new, strict performance-appraisal matrix. You agree to completely water down the requirements to maintain their buy-in." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional VPs refuse to adopt the new global compensation bands, arguing they know their local markets better. You agree to let them keep their old pay scales." }],
      "M4": [{ id: "ITM", esg: 1, text: "The union is fiercely opposing a minor policy change that technically benefits the company. You agree to drop the initiative entirely to preserve a fragile labor peace." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "A manager loses a receipt for a $20 taxi ride and is highly stressed. You agree to personally guide an exception-approval through the system for them." }],
      "E2": [{ id: "ITM", esg: 1, text: "A clerk makes a major data-entry error and is terrified. You agree to quietly fix the spreadsheet yourself and show them how to avoid it next time." }],
      "E3": [{ id: "ITM", esg: 1, text: "The Commercial team begs you to approve a risky credit-limit increase for a key client. You agree to absorb the financial risk to support their sales target." }],
      "M1": [{ id: "ITM", esg: 1, text: "Operations is furious about your new, strict CapEx justification rules. You agree to significantly relax the ROI requirements to maintain cross-functional peace." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional CFOs complain that the new global reporting template is too complex. You agree to let them continue using their local, fragmented spreadsheets." }],
      "M4": [{ id: "ITM", esg: 1, text: "A major, strategic client is struggling with cash flow and asks for a massive extension on their payment terms. You agree to take the working-capital hit to support them." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "A senior executive absolutely refuses to use the new ticketing system and demands you help them over the phone. You agree to bypass the process to keep them happy." }],
      "E2": [{ id: "ITM", esg: 1, text: "A user accidentally deletes a massive folder and is panicking. You drop all your other tickets to spend three hours restoring their data." }],
      "E3": [{ id: "ITM", esg: 1, text: "The Sales team hates the new, highly secure VPN and demands to use a less secure, faster alternative. You agree to quietly open a firewall exception for them." }],
      "M1": [{ id: "ITM", esg: 1, text: "Department heads are furious about a mandatory transition to a new software suite. You agree to delay the rollout indefinitely to maintain their goodwill." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional CIOs refuse to hand over control of their local servers to the global cloud team. You agree to let them maintain their 'shadow IT' infrastructure." }],
      "M4": [{ id: "ITM", esg: 1, text: "A newly acquired company refuses to migrate off their beloved, outdated legacy software. You agree to maintain both systems indefinitely to avoid a cultural clash." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "A long-time client makes a minor, unreasonable demand for free shipping on a small order. You agree to eat the cost to keep the relationship sweet." }],
      "E2": [{ id: "ITM", esg: 1, text: "A junior sales rep accidentally quotes the wrong price. You agree to take the hit on your own team's margin to save the rep from embarrassment." }],
      "E3": [{ id: "ITM", esg: 1, text: "A key client demands a massive, unapproved discount. You agree to sacrifice almost all the profit margin on the deal just to keep them from walking." }],
      "M1": [{ id: "ITM", esg: 1, text: "Operations is furious about the highly complex, custom SKUs your team is selling. You agree to stop selling them and only push standard products." }],
      "M2": [{ id: "ITM", esg: 1, text: "National sales directors complain that the new CRM is slowing them down. You agree to let them stop using it, completely destroying your pipeline visibility." }],
      "M4": [{ id: "ITM", esg: 1, text: "A massive, global client demands you surrender your intellectual property rights to a co-developed product. You agree to the painful concession to secure a 10-year contract." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "An executive forgot to book catering for a meeting and is panicking. You drop your own work and scramble to manually arrange a solution to save them." }],
      "E2": [{ id: "ITM", esg: 1, text: "An employee complains that their assigned desk is too close to the printer. You agree to undertake a massive seating reshuffle just to make them happy." }],
      "E3": [{ id: "ITM", esg: 1, text: "A powerful department head demands you hire an incredibly expensive cleaning crew instead of the standard vendor. You agree to absorb the budget hit." }],
      "M1": [{ id: "ITM", esg: 1, text: "Staff are furiously protesting a new 'clean desk' policy. You agree to completely scrap the initiative to preserve office morale." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional office heads refuse to adopt the corporate standard for office furniture, demanding luxury brands. You agree to fund their expensive requests." }],
      "M4": [{ id: "ITM", esg: 1, text: "The CEO hates the color of the newly renovated corporate lobby and demands it be repainted. You agree to scrap the work and absorb the budget hit without arguing." }] 
    }
  },

  "CR-S1": { // Conflict Anticipation (Fully Graded)
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "You notice two operators getting unusually quiet and tense while sharing a tool. You step in before an argument starts." }],
      "E2": [{ id: "ITM", esg: 1, text: "You overhear grumbling about the new break schedule. You immediately call a quick huddle to address the friction before it ruins the shift." }],
      "E3": [{ id: "ITM", esg: 1, text: "You see the upcoming production plan heavily favors one shift over another. You proactively meet with the other shift lead to smooth things over." }],
      "M1": [{ id: "ITM", esg: 1, text: "You anticipate that a new safety mandate will infuriate your supervisors. You design a rollout plan specifically to defuse their resistance early." }],
      "M2": [{ id: "ITM", esg: 1, text: "You spot early warning signs of a bitter turf war between two regional plant directors over a new product line. You intervene to establish clear boundaries." }],
      "M4": [{ id: "ITM", esg: 1, text: "You proactively address structural tensions between the union and management before they escalate into a catastrophic national strike." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "You notice a mechanic getting increasingly frustrated with a stuck bolt. You offer to take over for a minute before they lose their temper." }],
      "E2": [{ id: "ITM", esg: 1, text: "You foresee that a parts delay is going to anger Production. You proactively walk over to warn them and offer a workaround before they find out." }],
      "E3": [{ id: "ITM", esg: 1, text: "You realize the weekend PM schedule is going to ruin your team's holiday plans. You proactively negotiate a rotation to prevent a mutiny." }],
      "M1": [{ id: "ITM", esg: 1, text: "You anticipate that cutting the spare parts budget will cause massive friction with Engineering. You build a data case to prevent the clash." }],
      "M2": [{ id: "ITM", esg: 1, text: "You sense brewing resentment from regional directors over centralizing the maintenance software. You launch a listening tour to defuse it." }],
      "M4": [{ id: "ITM", esg: 1, text: "You spot the early signs of a massive, litigious dispute with a global equipment vendor. You initiate executive-level mediation before lawyers are called." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "A draftsman is starting to get defensive about feedback. You change your tone immediately to prevent a blow-up." }],
      "E2": [{ id: "ITM", esg: 1, text: "You realize a minor design flaw is going to cause a massive headache for the fabricator tomorrow. You proactively fix it and warn them." }],
      "E3": [{ id: "ITM", esg: 1, text: "You anticipate that scope creep on a project is going to cause a fight with the client. You proactively schedule a boundary-setting meeting." }],
      "M1": [{ id: "ITM", esg: 1, text: "You foresee that an upcoming automation rollout will terrify the production supervisors. You proactively design an inclusion strategy." }],
      "M2": [{ id: "ITM", esg: 1, text: "You notice two regional engineering heads passively-aggressively undermining each other's projects. You intervene to force alignment." }],
      "M4": [{ id: "ITM", esg: 1, text: "You anticipate that a proposed joint venture will result in a catastrophic intellectual property dispute. You preemptively structure airtight operational firewalls." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "You notice an operator getting frustrated by a new quality check. You step in to help them before they decide to skip it." }],
      "E2": [{ id: "ITM", esg: 1, text: "You foresee that quarantining a massive batch is going to infuriate the shift lead. You proactively gather watertight data before breaking the news." }],
      "E3": [{ id: "ITM", esg: 1, text: "You sense that your lab team is becoming deeply resentful of the Production team's attitude. You initiate a cross-team calibration session." }],
      "M1": [{ id: "ITM", esg: 1, text: "You anticipate that a new, highly strict global compliance standard will cause open revolt from plant managers. You design a phased, collaborative rollout." }],
      "M2": [{ id: "ITM", esg: 1, text: "You spot the early signs of regional QA directors hiding defect data from corporate to protect their bonuses. You proactively restructure the reporting metrics." }],
      "M4": [{ id: "ITM", esg: 1, text: "You proactively identify that a pending regulatory shift will cause massive friction with your largest clients, and you initiate executive damage control." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "You notice two pickers consistently avoiding each other. You intervene and reassign their zones before it affects their work." }],
      "E2": [{ id: "ITM", esg: 1, text: "You foresee that a late truck is going to ruin the dispatch crew's shift. You proactively buy them coffee and warn them early." }],
      "E3": [{ id: "ITM", esg: 1, text: "You anticipate a massive fight with Sales over a constrained inventory allocation. You proactively lock down the data to defend your position." }],
      "M1": [{ id: "ITM", esg: 1, text: "You notice rising tension between the day and night shift supervisors over staging messes. You proactively mandate a joint handover protocol." }],
      "M2": [{ id: "ITM", esg: 1, text: "You foresee that closing a regional hub will cause a bitter political war between the remaining directors. You proactively design a fair volume-distribution model." }],
      "M4": [{ id: "ITM", esg: 1, text: "You proactively address deep structural tensions between the national logistics network and the Commercial division before it impacts Q4 revenue." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "You notice a sales rep repeatedly questioning your schedule. You proactively walk them through the logic before they complain to their manager." }],
      "E2": [{ id: "ITM", esg: 1, text: "You foresee that an incoming rush order will wreck Production's OEE. You proactively warn the shift lead and offer a compromise." }],
      "E3": [{ id: "ITM", esg: 1, text: "You anticipate that changing a delivery date will infuriate a key account manager. You proactively build a recovery timeline before making the call." }],
      "M1": [{ id: "ITM", esg: 1, text: "You notice rising hostility between the demand analysts and the supply planners. You proactively merge their daily huddles to force alignment." }],
      "M2": [{ id: "ITM", esg: 1, text: "You foresee that a new S&OP software will cause a massive turf war with the regional commercial heads. You proactively involve them in the pilot." }],
      "M4": [{ id: "ITM", esg: 1, text: "You spot the early signs of a systemic breakdown in trust between the global supply and demand organizations. You proactively overhaul the executive governance structure." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "You notice a driver getting visibly angry about a delay. You proactively offer them water and explain the situation to calm them down." }],
      "E2": [{ id: "ITM", esg: 1, text: "You foresee that a customs hold-up will delay a critical client shipment. You proactively alert the account manager before the client notices." }],
      "E3": [{ id: "ITM", esg: 1, text: "You anticipate a major fight with the warehouse over an impossible loading schedule. You proactively adjust the carrier arrival times to prevent it." }],
      "M1": [{ id: "ITM", esg: 1, text: "You notice rising tension between your logistics coordinators and a highly aggressive carrier. You proactively intervene and set boundaries with the vendor." }],
      "M2": [{ id: "ITM", esg: 1, text: "You foresee that consolidating freight vendors will infuriate the regional plant directors. You proactively build a savings-sharing model to buy their support." }],
      "M4": [{ id: "ITM", esg: 1, text: "You proactively address an impending, catastrophic geopolitical dispute with a state-owned shipping monopoly before it paralyses the global supply chain." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "You notice a vendor getting defensive during a routine call. You immediately soften your tone to prevent the relationship from souring." }],
      "E2": [{ id: "ITM", esg: 1, text: "You foresee that rejecting an internal PO will anger a senior engineer. You proactively call them to explain the compliance issue before rejecting it." }],
      "E3": [{ id: "ITM", esg: 1, text: "You anticipate a bitter fight with Finance over payment terms for a critical supplier. You proactively build a risk-matrix to justify the exception." }],
      "M1": [{ id: "ITM", esg: 1, text: "You notice a category manager becoming deeply hostile toward a legacy vendor. You proactively intervene and reassign the account before the contract is lost." }],
      "M2": [{ id: "ITM", esg: 1, text: "You foresee that forcing regional directors to abandon their local suppliers will cause a mutiny. You proactively design a phased, localized transition plan." }],
      "M4": [{ id: "ITM", esg: 1, text: "You spot early indicators of a massive, litigious breach-of-contract dispute with a global raw-material monopoly. You proactively initiate executive backdoor diplomacy." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "You notice an operator getting frustrated with a tricky valve. You step in to help them turn it before they force it and break it." }],
      "E2": [{ id: "ITM", esg: 1, text: "You foresee that a scheduled power dip will anger the production shift. You proactively warn them 3 hours in advance so they can prepare." }],
      "E3": [{ id: "ITM", esg: 1, text: "You anticipate a massive fight with Maintenance over who has to clean the cooling towers. You proactively draft a shared-duty roster." }],
      "M1": [{ id: "ITM", esg: 1, text: "You notice rising hostility between the sustainability team and the plant managers. You proactively schedule a summit to align their KPIs." }],
      "M2": [{ id: "ITM", esg: 1, text: "You foresee that an expensive new effluent-treatment mandate will cause a revolt from regional directors. You proactively secure corporate subsidies for them." }],
      "M4": [{ id: "ITM", esg: 1, text: "You proactively address an impending public-relations disaster with local environmental regulators by initiating total transparency before a minor breach is discovered." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "You notice a new hire looking isolated in the breakroom. You proactively introduce them to a friendly group before they feel alienated." }],
      "E2": [{ id: "ITM", esg: 1, text: "You foresee that a payroll error is going to infuriate an employee. You proactively call them, explain the fix, and apologize before they notice." }],
      "E3": [{ id: "ITM", esg: 1, text: "You anticipate that a low performance rating will cause a highly toxic reaction from an employee. You proactively coach the manager on de-escalation." }],
      "M1": [{ id: "ITM", esg: 1, text: "You notice rising tension between two department heads over shared headcount. You proactively facilitate a mediation session before it impacts the staff." }],
      "M2": [{ id: "ITM", esg: 1, text: "You foresee that a new, strict remote-work policy will cause a massive spike in resignations. You proactively design a highly flexible transition period." }],
      "M4": [{ id: "ITM", esg: 1, text: "You proactively spot the early signs of a toxic, highly public boardroom power struggle. You initiate immediate, confidential executive coaching to neutralize the threat." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "You notice an employee getting frustrated with an expense form. You proactively offer to help them before they complain to their boss." }],
      "E2": [{ id: "ITM", esg: 1, text: "You foresee that rejecting a department's catering invoice will cause a fight. You proactively call the admin to explain the policy gently." }],
      "E3": [{ id: "ITM", esg: 1, text: "You anticipate a massive argument with Commercial over a blocked credit limit. You proactively prepare a risk-mitigation alternative to offer them." }],
      "M1": [{ id: "ITM", esg: 1, text: "You notice rising hostility between the FP&A team and the operational directors over budget cuts. You proactively alter the reporting format to be less accusatory." }],
      "M2": [{ id: "ITM", esg: 1, text: "You foresee that a new global accounting standard will infuriate regional CFOs. You proactively involve them in designing the localized rollout." }],
      "M4": [{ id: "ITM", esg: 1, text: "You proactively address a brewing, catastrophic legal dispute with external tax authorities by initiating full, immediate transparency and remediation." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "You notice a user sighing heavily while their PC updates. You proactively strike up a friendly conversation to keep them calm." }],
      "E2": [{ id: "ITM", esg: 1, text: "You foresee that a mandatory password reset will annoy the sales team. You proactively send a highly apologetic, easy-to-follow guide." }],
      "E3": [{ id: "ITM", esg: 1, text: "You anticipate a massive fight with Marketing over blocking their favorite cloud app. You proactively research a secure, approved alternative to offer them." }],
      "M1": [{ id: "ITM", esg: 1, text: "You notice a toxic blame-game brewing between the network and development teams over a bug. You proactively force them into a joint diagnostic room." }],
      "M2": [{ id: "ITM", esg: 1, text: "You foresee that stripping local admin rights will cause a revolt from regional directors. You proactively design a VIP 'white-glove' support tier to appease them." }],
      "M4": [{ id: "ITM", esg: 1, text: "You proactively spot the early signs of a massive, enterprise-killing dispute between the CIO and the CEO over cloud strategy. You initiate an executive alignment summit." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "You notice a client's tone getting clipped in an email. You proactively pick up the phone to smooth things over before it escalates." }],
      "E2": [{ id: "ITM", esg: 1, text: "You foresee that a minor shipping delay is going to anger a key account. You proactively call them with a solution before the shipment misses the deadline." }],
      "E3": [{ id: "ITM", esg: 1, text: "You anticipate a bitter fight with Supply Chain over a rush order. You proactively negotiate a compromise with the client to give Supply Chain more time." }],
      "M1": [{ id: "ITM", esg: 1, text: "You notice your top two sales reps quietly stealing leads from each other. You proactively restructure their territories to eliminate the overlap." }],
      "M2": [{ id: "ITM", esg: 1, text: "You foresee that a new national pricing matrix will cause a mutiny among regional sales directors. You proactively design a generous grandfathering clause." }],
      "M4": [{ id: "ITM", esg: 1, text: "You proactively address a brewing, highly destructive price war with your primary competitor by signaling a strategic pivot to premium, non-competing categories." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "You notice a visitor getting annoyed waiting in the lobby. You proactively offer them coffee and apologize for the delay." }],
      "E2": [{ id: "ITM", esg: 1, text: "You foresee that the new cafeteria menu will anger the factory staff. You proactively organize a tasting panel to get their buy-in early." }],
      "E3": [{ id: "ITM", esg: 1, text: "You anticipate a massive fight between two executives over who gets the corner office. You proactively redesign the floor plan to make both offices equal." }],
      "M1": [{ id: "ITM", esg: 1, text: "You notice rising tension between the facilities crew and a highly demanding department head. You proactively assign a dedicated liaison to manage the executive." }],
      "M2": [{ id: "ITM", esg: 1, text: "You foresee that standardizing the regional vehicle fleets will infuriate the local directors. You proactively offer them a high-end allowance option." }],
      "M4": [{ id: "ITM", esg: 1, text: "You proactively address deep structural tensions between the corporate headquarters and the regional offices regarding resource allocation before it fractures the company culture." }] 
    }
  },
  "CR-S2": { // Tension De-escalation (Fully Graded)
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "An operator throws a tool in frustration. You calmly ask them to step away for a five-minute breather while you clear the jam." }],
      "E2": [{ id: "ITM", esg: 1, text: "A QA inspector and a shift worker are screaming at each other. You physically step between them, lower your voice, and separate them." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift is furious about a mandated weekend run. You listen to their anger without defending the company, simply letting them vent." }],
      "M1": [{ id: "ITM", esg: 1, text: "A production supervisor aggressively blames your maintenance team for a breakdown. You suppress your anger and calmly de-escalate the situation." }],
      "M2": [{ id: "ITM", esg: 1, text: "During a highly charged union negotiation over line speeds, you project an aura of absolute calm and measured empathy." }],
      "M4": [{ id: "ITM", esg: 1, text: "During a hostile town hall about shift changes, you accurately read the deep anxiety of the workforce and adjust your messaging on the fly." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "A mechanic is cursing at a broken pump. You calmly hand them a rag, tell them to wipe their hands, and offer a fresh perspective." }],
      "E2": [{ id: "ITM", esg: 1, text: "The Production Manager is screaming at your team for a slow repair. You absorb the fury completely and calmly present the repair timeline." }],
      "E3": [{ id: "ITM", esg: 1, text: "Two technicians are in a heated argument over a diagnostic error. You calmly order them both to step back and review the manual together." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your maintenance planners are panicked over a massive budget cut. You project steady, reassuring control to calm the department." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors are furious about centralized spare parts. You calmly validate their anger before presenting the logistical data." }],
      "M4": [{ id: "ITM", esg: 1, text: "In a deeply tense board meeting where executives are panicked over downtime, you project an aura of absolute calm and measured control." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "A draftsman is panicking over a deleted file. You speak in a low, soothing voice and calmly walk them through the recovery process." }],
      "E2": [{ id: "ITM", esg: 1, text: "A contractor rudely dismisses your drawing as 'stupid'. You manage your ego, ignore the insult, and ask them to clarify their technical concern." }],
      "E3": [{ id: "ITM", esg: 1, text: "The Commercial team is furious about a missed launch date. You absorb their anger calmly and expertly guide them through the revised timeline." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your project managers are deeply defensive after a catastrophic trial failure. You create a psychological safe space to conduct a blameless post-mortem." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional heads are violently opposing a new design standard. You let them exhaust their anger before methodically addressing their concerns." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must navigate the massive egos of three rival national technical directors, expertly stroking their pride to get them to agree to a unified strategy." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "An operator is highly defensive about a defect you found. You soften your tone and frame it as a machine issue, not a personal failure." }],
      "E2": [{ id: "ITM", esg: 1, text: "A lab analyst is in tears after ruining a critical sample. You instantly shift from boss to mentor, calming them down and focusing on the fix." }],
      "E3": [{ id: "ITM", esg: 1, text: "Production is aggressively screaming that your quality hold is bankrupting the company. You remain an absolute pillar of unflappable calm." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your QA managers are terrified of an impending FDA audit. You manage their anxiety by projecting total, unshakeable confidence in their preparation." }],
      "M2": [{ id: "ITM", esg: 1, text: "You are delivering a devastating audit report to a proud, defensive plant director. You carefully manage their ego to ensure they accept the findings." }],
      "M4": [{ id: "ITM", esg: 1, text: "During a massive product-recall crisis, the entire executive team is in a state of blind panic. You serve as the calm, emotionally grounded anchor in the war room." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "A truck driver screams at you because they have been waiting two hours. You ignore the disrespect and calmly focus on getting them loaded." }],
      "E2": [{ id: "ITM", esg: 1, text: "A picker is visibly furious after being reprimanded. You give them space to cool off before approaching them with a supportive tone." }],
      "E3": [{ id: "ITM", esg: 1, text: "Two shift supervisors are engaged in a bitter, personal feud. You expertly navigate their egos to force a functional working relationship." }],
      "M1": [{ id: "ITM", esg: 1, text: "The logistics team is panicking over a massive backlog. You project steady, reassuring control, instantly dropping the temperature in the room." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors are screaming at each other over allocation shortages. You calmly force a timeout and redirect the meeting to data analysis." }],
      "M4": [{ id: "ITM", esg: 1, text: "During a devastating national supply chain collapse, you must expertly manage the terror and exhaustion of your entire logistics workforce." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "A sales rep angrily accuses you of ruining their client relationship. You manage your defensiveness and calmly explain the capacity limits." }],
      "E2": [{ id: "ITM", esg: 1, text: "A scheduler is paralyzed by anxiety over a complex matrix. You calmly sit beside them and methodically talk them down." }],
      "E3": [{ id: "ITM", esg: 1, text: "Production and Sales are locked in a shouting match over priority. You step in and expertly de-escalate the room before finding a solution." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your planning managers are deeply cynical and defeated by constant forecast errors. You successfully rebuild their hope and engagement." }],
      "M2": [{ id: "ITM", esg: 1, text: "During an S&OP meeting that devolves into shouting between Sales and Operations, you expertly read the room and defuse the underlying hostilities." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must lead a massive, highly unpopular restructuring of the S&OP process, perfectly reading and managing the emotional resistance of the executive board." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "A customs agent is being deliberately uncooperative and rude. You swallow your pride and use extreme politeness to get the paperwork cleared." }],
      "E2": [{ id: "ITM", esg: 1, text: "A logistics coordinator is hyperventilating over a lost container. You project absolute calm, which instantly settles their panic." }],
      "E3": [{ id: "ITM", esg: 1, text: "A vendor aggressively threatens to hold a shipment hostage. You completely ignore their hostility and calmly negotiate the release." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your supply chain managers are exhausted and defensive after a brutal peak season. You expertly manage their burnout and restore their morale." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must negotiate with a deeply arrogant, difficult global vendor CEO, carefully managing your own reactions to secure a critical concession." }],
      "M4": [{ id: "ITM", esg: 1, text: "During a catastrophic global freight collapse, the executive board is panicked. You serve as the unflappable, emotionally intelligent anchor for the C-Suite." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "An internal stakeholder throws a tantrum because you rejected their unapproved purchase. You remain completely unflappable and empathetic." }],
      "E2": [{ id: "ITM", esg: 1, text: "A junior buyer is crying after a brutal negotiation loss. You instantly switch to a highly empathetic, supportive coaching mode." }],
      "E3": [{ id: "ITM", esg: 1, text: "A vendor tries to use aggressive, bullying tactics in a meeting. You expertly disarm their aggression with cold, polite professionalism." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your category managers are highly stressed by aggressive new savings targets. You project a calm, structured confidence that settles their nerves." }],
      "M2": [{ id: "ITM", esg: 1, text: "In a high-stakes, multi-million dollar negotiation, you expertly read the subtle anxiety of the vendor's team and leverage it without appearing aggressive." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must navigate the intense political egos of the executive board when forcing them to abandon their preferred, legacy suppliers." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "During a blackout, operators are panicking and shouting. You project an aura of total, quiet control that instantly calms the room down." }],
      "E2": [{ id: "ITM", esg: 1, text: "A frustrated technician throws a wrench in anger. You de-escalate the situation calmly without triggering a further outburst." }],
      "E3": [{ id: "ITM", esg: 1, text: "The Plant Manager is screaming about the cost of a steam leak. You absorb the fury completely and calmly present the repair timeline." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your utility managers are deeply defensive about their poor efficiency scores. You expertly frame the feedback to inspire rather than crush them." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must present a highly expensive sustainability initiative to a board that is openly hostile to the idea, carefully managing their emotional resistance." }],
      "M4": [{ id: "ITM", esg: 1, text: "During a catastrophic, highly publicized environmental spill, you must expertly manage the terror and panic of both the public and the executive team." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "An employee bursts into tears during a routine meeting. You immediately shift your tone, abandon your agenda, and focus entirely on their wellbeing." }],
      "E2": [{ id: "ITM", esg: 1, text: "A candidate is visibly shaking with nerves. You expertly use warm, empathetic body language and tone to completely put them at ease." }],
      "E3": [{ id: "ITM", esg: 1, text: "A line manager aggressively accuses HR of being useless. You entirely suppress your defensiveness and calmly explore their underlying frustration." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your HRBPs are experiencing severe secondary trauma from handling endless grievance cases. You expertly manage their emotional recovery." }],
      "M2": [{ id: "ITM", esg: 1, text: "You are tasked with terminating a deeply beloved, long-serving executive. You handle the interaction with profound empathy, dignity, and ironclad control." }],
      "M4": [{ id: "ITM", esg: 1, text: "Following a tragic workplace fatality, you must serve as the emotional anchor for the entire grieving enterprise, projecting immense empathy and strength." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "A manager aggressively accuses your team of shortchanging their budget. You ignore the attack and calmly walk them through the spreadsheet." }],
      "E2": [{ id: "ITM", esg: 1, text: "A junior clerk is paralyzed by anxiety over a minor typo they made. You expertly de-escalate their fear and turn it into a calm learning moment." }],
      "E3": [{ id: "ITM", esg: 1, text: "The Commercial team is furious that you blocked a payment. You absorb the heat with total professionalism and refuse to match their anger." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your finance managers are deeply cynical and burnt out from endless audits. You expertly rebuild their morale and sense of purpose." }],
      "M2": [{ id: "ITM", esg: 1, text: "During an earnings call, analysts are aggressively attacking the company's performance. You project absolute confidence, steadying the CEO's nerves." }],
      "M4": [{ id: "ITM", esg: 1, text: "The company is facing imminent bankruptcy. You must navigate the sheer terror of the executive board, keeping them focused on logical survival steps." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "A user is screaming on the phone because they lost a document. You absorb their panic without taking it personally, and calmly walk them through recovery." }],
      "E2": [{ id: "ITM", esg: 1, text: "A developer is deeply defensive about a bug they wrote. You expertly frame the correction so they don't feel attacked." }],
      "E3": [{ id: "ITM", esg: 1, text: "During a major server crash, the CIO is frantic. You project an aura of total, quiet competence that instantly settles their nerves." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your IT managers are exhausted and bitter after a brutal weekend migration. You expertly validate their pain and restore their commitment." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must navigate the intense, unspoken friction between two rival regional IT directors during a highly charged cloud strategy realignment." }],
      "M4": [{ id: "ITM", esg: 1, text: "During a massive data breach, the entire executive team is in a state of blind panic. You serve as the calm, emotionally grounded anchor in the war room." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "A client is irrationally angry over a minor shipping delay. You validate their frustration perfectly, turning their anger into appreciation." }],
      "E2": [{ id: "ITM", esg: 1, text: "A junior sales rep is crying after a brutal rejection. You instantly switch to a highly empathetic, supportive coaching mode to rebuild their confidence." }],
      "E3": [{ id: "ITM", esg: 1, text: "A major client uses aggressive, insulting tactics during a negotiation. You completely ignore the insult and expertly disarm their aggression." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your sales managers are highly stressed by new, impossible targets. You project a calm, structured confidence that settles their nerves." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must navigate the massive egos of three rival national sales directors, expertly stroking their pride to get them to agree to a unified strategy." }],
      "M4": [{ id: "ITM", esg: 1, text: "A devastating PR scandal ruins your brand's reputation overnight. You must serve as the unflappable, emotionally intelligent anchor for the panicked C-Suite." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "An executive yells at you because the catering was wrong. You maintain absolute professional warmth and fix the issue without showing resentment." }],
      "E2": [{ id: "ITM", esg: 1, text: "A stressed facilities coordinator is being highly passive-aggressive. You ignore the tone and respond with warm, direct professionalism." }],
      "E3": [{ id: "ITM", esg: 1, text: "Two departments are in a screaming match over office space. You expertly step in, calm them down, and defuse the territorial anger." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your admin managers are deeply demoralized after failing a safety audit. You carefully manage your own disappointment and rebuild their confidence." }],
      "M2": [{ id: "ITM", esg: 1, text: "You are managing a highly unpopular corporate relocation. You accurately read the deep emotional grief of the staff and design a strategy to address it." }],
      "M4": [{ id: "ITM", esg: 1, text: "During a chaotic, highly stressful hostile takeover of the company, you must expertly manage the terror and exhaustion of the entire administrative workforce." }] 
    }
  },
  "CR-S3": { // Interest-Based Dialogue (Fully Graded)
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "A shift supervisor demands you run a machine faster. You ask why they are stressed, uncovering a hidden quota pressure they were hiding." }],
      "E2": [{ id: "ITM", esg: 1, text: "Maintenance refuses to service your line. You dig into their reasoning and discover they simply lack the right scaffolding for that specific area." }],
      "E3": [{ id: "ITM", esg: 1, text: "QA repeatedly rejects your batches. Instead of arguing, you sit with them to understand the exact visual defect they are being penalized for missing." }],
      "M1": [{ id: "ITM", esg: 1, text: "Planning demands you skip a changeover. You explore their motivation and find they are trying to cover a massive, unannounced sales promotion." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors refuse to adopt a new SOP. You bypass their arguments and discover their real fear is losing headcount efficiency bonuses." }],
      "M4": [{ id: "ITM", esg: 1, text: "The board demands an immediate factory closure. You expertly uncover that their true underlying interest is simply freeing up short-term cash flow, allowing you to propose alternatives." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "An operator refuses to let you repair a machine. You ask enough questions to realize they are afraid of losing their hourly piece-rate bonus." }],
      "E2": [{ id: "ITM", esg: 1, text: "A vendor refuses to ship a part. You ignore their stated policy and discover they are actually just worried about your company's credit limit." }],
      "E3": [{ id: "ITM", esg: 1, text: "Production demands an unsafe temporary fix. You dig into their panic and realize they just need to finish one specific VIP order before shutting down." }],
      "M1": [{ id: "ITM", esg: 1, text: "Finance rejects your CapEx request for new tools. You discover their real concern is Q3 liquidity, allowing you to negotiate a Q4 purchase." }],
      "M2": [{ id: "ITM", esg: 1, text: "Plant managers violently oppose your new CMMS system. You realize their underlying fear is that corporate will use the downtime data to fire them." }],
      "M4": [{ id: "ITM", esg: 1, text: "The CEO demands you slash the maintenance budget by 30%. You expertly uncover that the true goal is funding an acquisition, and offer alternative savings." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "A fabricator refuses to build your design. You ask enough questions to realize they simply don't have the right drill-bit size." }],
      "E2": [{ id: "ITM", esg: 1, text: "A junior draftsman refuses to use a new software feature. You discover they are actually just embarrassed that they don't understand how it works." }],
      "E3": [{ id: "ITM", esg: 1, text: "Commercial demands an absurd product feature. You ignore the ridiculous request and dig into what the client is actually trying to achieve." }],
      "M1": [{ id: "ITM", esg: 1, text: "Production rejects your new automation layout. You discover their real objection is that it blocks their fastest route to the cafeteria." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional heads reject a standardized blueprint. You uncover that their true motivation is protecting relationships with local suppliers." }],
      "M4": [{ id: "ITM", esg: 1, text: "A strategic partner threatens to pull out of a joint venture. You expertly navigate past their legal threats to uncover their true financial insecurities." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "An operator refuses to fill out a quality log. You ask why and discover their gloves are too thick to hold the pen." }],
      "E2": [{ id: "ITM", esg: 1, text: "Production demands you release a pallet immediately. You dig into their panic and realize they just need to load three boxes to fill a truck." }],
      "E3": [{ id: "ITM", esg: 1, text: "A supplier aggressively denies a defect claim. You ignore their shouting and discover they are actually just terrified of a contractual penalty clause." }],
      "M1": [{ id: "ITM", esg: 1, text: "Commercial is furious about your strict audit rules. You discover their real fear is losing a specific, highly demanding enterprise account." }],
      "M2": [{ id: "ITM", esg: 1, text: "Plant directors refuse to buy new testing equipment. You uncover that their true objection is the cost of training, not the cost of the machines." }],
      "M4": [{ id: "ITM", esg: 1, text: "Regulatory bodies threaten to shut down a facility over a minor breach. You expertly navigate past the threats to understand their political pressure to look tough." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "A driver refuses to park in bay 4. You ask why and discover that bay 4 has a massive pothole they are afraid will damage their suspension." }],
      "E2": [{ id: "ITM", esg: 1, text: "Pickers are ignoring a new aisle layout. You dig in and realize the new layout places heavy items on the top shelf, causing them back pain." }],
      "E3": [{ id: "ITM", esg: 1, text: "Production demands you store 50 extra pallets. You ignore their yelling and realize they just need 24 hours of buffer space while a truck is delayed." }],
      "M1": [{ id: "ITM", esg: 1, text: "Sales demands you hold massive safety stock. You discover their true fear is a recurring logistics failure that lost them a client last year." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional hubs refuse to share inventory data. You uncover that their real motivation is hoarding stock to ensure they hit their local dispatch KPIs." }],
      "M4": [{ id: "ITM", esg: 1, text: "The board demands you immediately close three warehouses. You expertly uncover that their true goal is purely optics for an upcoming earnings call." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "A sales rep demands you schedule an order for Tuesday. You ask why and discover the client actually just needs confirmation it will ship by Friday." }],
      "E2": [{ id: "ITM", esg: 1, text: "Production refuses to run a specific product sequence. You dig in and realize that sequence requires a 4-hour, highly complex machine washdown." }],
      "E3": [{ id: "ITM", esg: 1, text: "Procurement says they cannot deliver raw materials on time. You explore the bottleneck and realize they just need you to authorize a small rush-fee." }],
      "M1": [{ id: "ITM", esg: 1, text: "Commercial directors demand impossible lead times. You discover their true motivation is fear of losing commissions to a faster competitor." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional plant heads refuse to accept your master schedule. You uncover that their real fear is the schedule will break their local union agreements." }],
      "M4": [{ id: "ITM", esg: 1, text: "The CEO demands you slash all inventory to zero. You expertly uncover that the true panic is driven by a looming, unannounced debt covenant breach." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "A customs agent refuses to stamp a document. You ask polite questions and realize they just want you to use blue ink instead of black." }],
      "E2": [{ id: "ITM", esg: 1, text: "A carrier refuses a load because it is 'too heavy'. You dig in and discover their truck actually has a broken axle they are hiding." }],
      "E3": [{ id: "ITM", esg: 1, text: "Warehouse refuses to load a truck at 4 PM. You explore their reasoning and realize they are simply short-staffed due to a sudden sickness." }],
      "M1": [{ id: "ITM", esg: 1, text: "Sales demands you use highly expensive air-freight. You discover the client doesn't actually need the product, they just need the tracking number to release funds." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors violently oppose a new global shipping contract. You uncover their true fear is losing the VIP service they get from local couriers." }],
      "M4": [{ id: "ITM", esg: 1, text: "A global logistics partner threatens to terminate your contract. You expertly navigate past their legal posturing to uncover a hidden cash-flow crisis on their end." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "A vendor refuses to lower their price by 5%. You ask why and discover they would rather give you free shipping, which saves you 8%." }],
      "E2": [{ id: "ITM", esg: 1, text: "An engineer demands you buy a specific, expensive brand of motor. You dig in and realize they just want the 24/7 technical support that comes with it." }],
      "E3": [{ id: "ITM", esg: 1, text: "Finance refuses to approve a PO. You ignore the formal rejection and discover they just need you to split the cost across two different budget codes." }],
      "M1": [{ id: "ITM", esg: 1, text: "Operations refuses to use a cheaper raw material. You uncover that their real fear is the new material will increase their machine setup times." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional heads refuse to abandon local suppliers. You discover their true motivation is that the local suppliers offer them extremely generous payment terms." }],
      "M4": [{ id: "ITM", esg: 1, text: "A monopoly supplier threatens to cut off your entire enterprise. You expertly uncover that they are actually terrified you are developing a patented alternative." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "An operator refuses to throttle down a boiler. You ask why and discover they don't actually know how to restart it if it stalls." }],
      "E2": [{ id: "ITM", esg: 1, text: "Production demands maximum chiller capacity all day. You dig in and realize they only actually need the cooling during a 30-minute peak phase." }],
      "E3": [{ id: "ITM", esg: 1, text: "Maintenance refuses to service the water plant on Sunday. You uncover that they just don't want to miss a major local football match." }],
      "M1": [{ id: "ITM", esg: 1, text: "Plant managers refuse to install new smart meters. You discover their real fear is that Corporate will use the data to cut their utility budgets." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors violently oppose a solar-panel initiative. You uncover that their true objection is the aesthetic impact on the factory facade." }],
      "M4": [{ id: "ITM", esg: 1, text: "The board demands you cancel a massive green-energy project. You expertly uncover that their true fear is the upfront CapEx, allowing you to propose third-party financing." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "A candidate refuses a job offer over a $2,000 salary gap. You ask why and discover they actually just want an extra week of vacation time." }],
      "E2": [{ id: "ITM", esg: 1, text: "A manager demands you fire an employee immediately. You dig into the anger and realize the manager is actually just terrified of missing a project deadline." }],
      "E3": [{ id: "ITM", esg: 1, text: "An employee files a formal grievance over 'tone'. You explore the issue and discover they are actually deeply stressed about a hidden personal issue." }],
      "M1": [{ id: "ITM", esg: 1, text: "Department heads refuse to use a new performance matrix. You uncover their true fear is that the matrix will force them to fire their friends." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional VPs violently oppose a new remote-work policy. You discover their real motivation is a fear of losing control and visibility over their staff." }],
      "M4": [{ id: "ITM", esg: 1, text: "The union threatens a catastrophic national strike over a minor policy wording. You expertly uncover that the union leadership just needs a 'public win' before an election." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "A manager screams at you for rejecting an expense. You ask why they are so angry and discover they maxed out their personal credit card to pay for it." }],
      "E2": [{ id: "ITM", esg: 1, text: "A client refuses to pay an invoice. You dig past the excuses and discover they simply lost the original PO and are too embarrassed to admit it." }],
      "E3": [{ id: "ITM", esg: 1, text: "Procurement demands you authorize a payment immediately. You explore the panic and realize a vendor is threatening to halt a critical delivery." }],
      "M1": [{ id: "ITM", esg: 1, text: "Marketing furiously defends a massive, wasteful budget. You uncover their true fear is that unspent funds will be permanently slashed next year." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional CFOs refuse to repatriate cash to corporate. You discover their real motivation is keeping the cash locally to earn high-yield interest." }],
      "M4": [{ id: "ITM", esg: 1, text: "The CEO demands you use aggressive, borderline accounting tactics. You expertly uncover their true, hidden panic over a looming debt covenant." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "A user refuses to surrender their old, broken laptop. You ask why and discover they have years of unsaved family photos on the hard drive." }],
      "E2": [{ id: "ITM", esg: 1, text: "A developer throws a tantrum over a blocked port. You dig into the anger and realize they are 12 hours behind on a critical software deployment." }],
      "E3": [{ id: "ITM", esg: 1, text: "Sales refuses to use the new VPN. You ignore their complaints about 'security' and discover the VPN is actually blocking their favorite music streaming app." }],
      "M1": [{ id: "ITM", esg: 1, text: "Department heads violently oppose a transition to the cloud. You uncover their true fear is that IT will use the cloud to monitor their employees' productivity." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional CIOs refuse to standardize their hardware. You discover their real motivation is protecting kickbacks from local hardware vendors." }],
      "M4": [{ id: "ITM", esg: 1, text: "The board demands you halt a critical, multi-million dollar cybersecurity upgrade. You expertly uncover their true fear is the associated operational downtime." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "A client demands a 15% discount. You ask enough questions to realize they don't care about the price; they just need extended payment terms." }],
      "E2": [{ id: "ITM", esg: 1, text: "A prospect aggressively insults your product's quality. You dig past the insults and discover they are actually just locked into a contract with a rival." }],
      "E3": [{ id: "ITM", esg: 1, text: "Supply chain refuses to authorize a delivery. You explore the rejection and realize they just need you to cover a $500 expediting fee." }],
      "M1": [{ id: "ITM", esg: 1, text: "Sales managers fiercely resist selling a highly profitable new product. You uncover their true fear is that the product is too complex for them to explain." }],
      "M2": [{ id: "ITM", esg: 1, text: "National directors refuse to drop unprofitable legacy clients. You discover their real motivation is that those clients provide highly prestigious networking opportunities." }],
      "M4": [{ id: "ITM", esg: 1, text: "A massive retail partner threatens to delist your entire portfolio. You expertly navigate past their aggression to uncover they are actually facing a severe liquidity crisis." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "An employee furiously complains about the new desk chairs. You ask why and discover the real issue is that the chairs don't fit under the desks properly." }],
      "E2": [{ id: "ITM", esg: 1, text: "A manager demands you fire the cleaning crew immediately. You dig into the anger and realize the crew accidentally threw away a critical document." }],
      "E3": [{ id: "ITM", esg: 1, text: "Two departments are fighting a vicious turf war over a corner office. You uncover that the real issue is a dispute over prestige and visibility." }],
      "M1": [{ id: "ITM", esg: 1, text: "Facility managers violently oppose a new security protocol. You discover their true fear is that the protocol will force them to work weekend shifts." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional heads refuse to adopt the corporate travel policy. You uncover their real motivation is retaining their platinum status with a specific airline." }],
      "M4": [{ id: "ITM", esg: 1, text: "The CEO demands you cancel a multi-million dollar office renovation. You expertly uncover their true, unspoken anxiety regarding the company's Q3 cash flow." }] 
    }
  },
  "CR-S4": { // Relationship Restoration (Fully Graded)
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "You had a heated argument with a maintenance tech. After the shift, you find them in the breakroom and offer to buy them a coffee to clear the air." }],
      "E2": [{ id: "ITM", esg: 1, text: "You snapped at an operator during a breakdown. Later, you publicly apologize to them in front of the crew to restore their dignity." }],
      "E3": [{ id: "ITM", esg: 1, text: "You had a bitter fight with the QA lead over a batch. You drop by their office the next morning to explicitly rebuild the working relationship." }],
      "M1": [{ id: "ITM", esg: 1, text: "After ruthlessly tearing apart a supervisor's schedule in a meeting, you take them to lunch to mentor them and restore their confidence." }],
      "M2": [{ id: "ITM", esg: 1, text: "You engaged in a brutal political war with a regional director. You fly to their site to shake hands and formally reset the professional boundary." }],
      "M4": [{ id: "ITM", esg: 1, text: "After executing a highly hostile corporate takeover, you systematically meet with the acquired leadership to rebuild trust and operational unity." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "You lost your temper with a storekeeper over a missing part. You go back later, apologize for the outburst, and thank them for their help." }],
      "E2": [{ id: "ITM", esg: 1, text: "You strongly criticized an apprentice's work. Before they go home, you make a point to praise something else they did well to rebuild their morale." }],
      "E3": [{ id: "ITM", esg: 1, text: "You had a screaming match with a production shift lead. You swallow your pride and send them a respectful email acknowledging their stress." }],
      "M1": [{ id: "ITM", esg: 1, text: "After forcing a highly unpopular PM schedule on the planners, you organize a team dinner to show your appreciation for their hard work." }],
      "M2": [{ id: "ITM", esg: 1, text: "You aggressively shut down a regional director's CapEx request. You call them privately afterward to explain the math and preserve the relationship." }],
      "M4": [{ id: "ITM", esg: 1, text: "After firing a massively popular but underperforming engineering firm, you must carefully rebuild trust with the internal teams who loved working with them." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "You rudely rejected a draftsman's drawing. You walk over to their desk later to calmly explain the technical reason and apologize for your tone." }],
      "E2": [{ id: "ITM", esg: 1, text: "You had a tense standoff with a contractor on site. You make sure to shake their hand and thank them for their effort before they leave." }],
      "E3": [{ id: "ITM", esg: 1, text: "You clashed bitterly with Procurement over a vendor choice. You drop by their desk to acknowledge their budget concerns and reset the dynamic." }],
      "M1": [{ id: "ITM", esg: 1, text: "After a disastrous project post-mortem where you heavily criticized your managers, you hold a one-on-one with each to rebuild their confidence." }],
      "M2": [{ id: "ITM", esg: 1, text: "You aggressively vetoed a regional director's pet project. You make sure to publicly praise their other initiatives to protect their status." }],
      "M4": [{ id: "ITM", esg: 1, text: "After a brutal, highly public intellectual property dispute with a joint-venture partner, you orchestrate a strategic reconciliation summit." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "You sharply reprimanded an operator for a hygiene breach. Later, you find them and explain that your reaction was about safety, not personal anger." }],
      "E2": [{ id: "ITM", esg: 1, text: "You had a severe disagreement with a lab tech over a result. You invite them to co-author the final deviation report to restore their agency." }],
      "E3": [{ id: "ITM", esg: 1, text: "You fought aggressively with a production manager to quarantine a batch. Once the data proves you right, you avoid gloating and thank them for complying." }],
      "M1": [{ id: "ITM", esg: 1, text: "After forcing a painful audit failure onto a plant manager, you dedicate your own resources to help them fix the issues, rebuilding the partnership." }],
      "M2": [{ id: "ITM", esg: 1, text: "You humiliated a regional director in a global compliance meeting. You call them privately to apologize for the public setting and reset the relationship." }],
      "M4": [{ id: "ITM", esg: 1, text: "After leading a highly combative, hostile regulatory investigation into a subsidiary, you must carefully rebuild their shattered leadership culture." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "You yelled at a forklift driver for speeding. Before they clock out, you pull them aside, apologize for yelling, but reiterate the safety rule." }],
      "E2": [{ id: "ITM", esg: 1, text: "You had a bitter argument with a dispatcher over a loading dock. You bring them a coffee the next morning to signal the conflict is over." }],
      "E3": [{ id: "ITM", esg: 1, text: "You aggressively pushed back on Sales for a rush order. You send the sales rep a polite email confirming the dispatch to repair the friction." }],
      "M1": [{ id: "ITM", esg: 1, text: "After severely penalizing your shift supervisors for inventory shrink, you actively champion their request for better scanners to show your support." }],
      "M2": [{ id: "ITM", esg: 1, text: "You forcibly stripped autonomy from your regional hub managers. You launch a listening tour to rebuild their trust and validate their remaining authority." }],
      "M4": [{ id: "ITM", esg: 1, text: "After firing a major national 3PL partner in a highly litigious dispute, you must actively rebuild the morale and trust of your internal logistics network." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "You snapped at a sales rep on the phone. You call them back five minutes later to apologize and calmly explain the scheduling constraint." }],
      "E2": [{ id: "ITM", esg: 1, text: "You heavily criticized a clerk's Excel model. You spend an hour sitting with them to teach them the correct formulas, restoring their confidence." }],
      "E3": [{ id: "ITM", esg: 1, text: "You had a screaming match with Production over a changeover. You walk down to the floor the next day to shake hands with the shift lead." }],
      "M1": [{ id: "ITM", esg: 1, text: "After rejecting every single demand forecast from Commercial, you host a joint workshop to rebuild trust and align on the math." }],
      "M2": [{ id: "ITM", esg: 1, text: "You aggressively overruled a regional director in an S&OP meeting. You privately authorize a minor concession to them later to repair their dignity." }],
      "M4": [{ id: "ITM", esg: 1, text: "After a brutal boardroom battle where you exposed massive flaws in the Sales strategy, you must carefully rebuild your relationship with the Chief Commercial Officer." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "You were extremely rude to a customs agent. You return the next day with apologies and extreme politeness to ensure future shipments aren't blocked." }],
      "E2": [{ id: "ITM", esg: 1, text: "You fiercely reprimanded a coordinator for a routing error. You make sure to publicly praise their next success to restore their standing in the team." }],
      "E3": [{ id: "ITM", esg: 1, text: "You fought bitterly with the Warehouse over a missed truck. You drop by the loading dock to explicitly clear the air and reset the dynamic." }],
      "M1": [{ id: "ITM", esg: 1, text: "After firing a long-standing logistics vendor, you must carefully rebuild trust with the internal managers who relied heavily on that relationship." }],
      "M2": [{ id: "ITM", esg: 1, text: "You forcefully stripped a regional director of their local shipping contracts. You fly to their site to personally explain the corporate necessity and rebuild the bridge." }],
      "M4": [{ id: "ITM", esg: 1, text: "After surviving a devastating, highly litigious dispute with a global shipping monopoly, you must systematically repair the operational bridges to maintain supply." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "You aggressively shut down an internal stakeholder's request. You call them later to calmly explain the compliance rules and offer a legal alternative." }],
      "E2": [{ id: "ITM", esg: 1, text: "You were ruthless with a vendor during a negotiation. After the contract is signed, you invite them to lunch to shift from adversaries back to partners." }],
      "E3": [{ id: "ITM", esg: 1, text: "You clashed heavily with Engineering over a spec. You drop by their desk to acknowledge their technical expertise and repair the friction." }],
      "M1": [{ id: "ITM", esg: 1, text: "After heavily penalizing a category manager for poor savings, you actively mentor them on the next massive deal to rebuild their confidence." }],
      "M2": [{ id: "ITM", esg: 1, text: "You forcibly vetoed a regional director's favorite supplier. You ensure their new supplier is given VIP onboarding to smooth over the political damage." }],
      "M4": [{ id: "ITM", esg: 1, text: "After a brutal boardroom battle to terminate a corrupt legacy vendor, you must actively rebuild trust with the deeply alienated executive stakeholders." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "You shouted at an operator during a blackout panic. Once the power is back, you immediately apologize for your tone to the entire crew." }],
      "E2": [{ id: "ITM", esg: 1, text: "You heavily criticized a technician's pipe-fitting. You make sure to assign them to a high-profile repair next week to show you still trust them." }],
      "E3": [{ id: "ITM", esg: 1, text: "You had a bitter fight with Production over load-shedding. You send a respectful email outlining how your actions saved the plant to clear the air." }],
      "M1": [{ id: "ITM", esg: 1, text: "After forcing a highly unpopular energy-saving mandate onto the plant managers, you publicly credit them for the resulting financial savings." }],
      "M2": [{ id: "ITM", esg: 1, text: "You aggressively shut down a regional director's pet sustainability project. You privately help them secure funding for a different initiative to repair their pride." }],
      "M4": [{ id: "ITM", esg: 1, text: "After a highly combative, public dispute with environmental regulators, you must systematically rebuild the company's political and community relationships." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "You lost your temper with a difficult candidate. You send a highly professional, polite follow-up email to ensure the company's brand isn't damaged." }],
      "E2": [{ id: "ITM", esg: 1, text: "You heavily criticized a coordinator's payroll error. You take them for a coffee to reassure them their job is safe and rebuild their confidence." }],
      "E3": [{ id: "ITM", esg: 1, text: "You had a screaming match with a line manager over a PIP. You walk to their office the next day to formally reset the professional boundary." }],
      "M1": [{ id: "ITM", esg: 1, text: "After ruthlessly shutting down an HRBP's proposal in a team meeting, you actively champion their next idea to restore their standing." }],
      "M2": [{ id: "ITM", esg: 1, text: "You engaged in a brutal political war with a regional VP over headcount. You initiate a strategic peace-summit to ensure future operational alignment." }],
      "M4": [{ id: "ITM", esg: 1, text: "After executing a massive, deeply unpopular corporate restructuring, you must design a strategic campaign to rebuild the shattered trust of the surviving workforce." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "You aggressively rejected an employee's expense claim. You call them later to calmly walk them through the policy so they aren't embarrassed next time." }],
      "E2": [{ id: "ITM", esg: 1, text: "You snapped at a junior clerk during month-end close. Once the books are shut, you explicitly praise their hard work to the team to repair the damage." }],
      "E3": [{ id: "ITM", esg: 1, text: "You had a bitter standoff with Procurement over a blocked payment. You invite their lead to a coffee to smooth over the inter-departmental friction." }],
      "M1": [{ id: "ITM", esg: 1, text: "After tearing apart a manager's budget proposal in front of the directors, you privately mentor them on financial modeling to rebuild their confidence." }],
      "M2": [{ id: "ITM", esg: 1, text: "You aggressively forced a regional CFO to restate their earnings. You actively defend their reputation to the board to preserve their career." }],
      "M4": [{ id: "ITM", esg: 1, text: "After a brutal boardroom fight where you blocked the CEO's pet acquisition, you must carefully rebuild the executive relationship to maintain your influence." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "You were extremely rude to a user who clicked a phishing link. You call them back to apologize and gently walk them through the security training." }],
      "E2": [{ id: "ITM", esg: 1, text: "You heavily criticized a developer's code. You make a point of publicly praising their next successful deployment to restore their morale." }],
      "E3": [{ id: "ITM", esg: 1, text: "You had a massive argument with Commercial over blocking an app. You proactively build a secure alternative for them to repair the relationship." }],
      "M1": [{ id: "ITM", esg: 1, text: "After severely reprimanding your IT managers for an outage, you order pizza for the team and explicitly thank them for the recovery effort." }],
      "M2": [{ id: "ITM", esg: 1, text: "You aggressively stripped a regional CIO of their local admin rights. You give them a high-profile seat on the global steering committee to restore their pride." }],
      "M4": [{ id: "ITM", esg: 1, text: "After a devastating, highly public cybersecurity breach, you must systematically rebuild the shattered trust of the board, the clients, and your own department." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "You had a tense, aggressive negotiation with a client. After the contract is signed, you send them a premium gift to reset the dynamic to a partnership." }],
      "E2": [{ id: "ITM", esg: 1, text: "You harshly berated a junior sales rep for losing a deal. You take them on your next major pitch to rebuild their confidence and mentor them." }],
      "E3": [{ id: "ITM", esg: 1, text: "You clashed bitterly with Supply Chain over a missed delivery. You drop by the logistics desk to acknowledge their hard work and clear the air." }],
      "M1": [{ id: "ITM", esg: 1, text: "After ruthlessly stripping a lucrative territory from a sales manager, you actively champion their promotion to a different role to preserve their loyalty." }],
      "M2": [{ id: "ITM", esg: 1, text: "You engaged in a brutal political war with a national director over pricing. You fly to their site to shake hands and formally reset the professional alignment." }],
      "M4": [{ id: "ITM", esg: 1, text: "After surviving a vicious, highly public price-war with your primary competitor, you must initiate back-channel diplomacy to restore industry stability." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "You snapped at a courier who delivered a package to the wrong floor. You apologize the next day to ensure they don't boycott your building." }],
      "E2": [{ id: "ITM", esg: 1, text: "You heavily criticized a receptionist for a visitor error. You make sure to publicly praise their handling of a VIP guest the next week to restore their confidence." }],
      "E3": [{ id: "ITM", esg: 1, text: "You had a screaming match with an executive over office space. You send a highly professional, polite follow-up email to ensure the bridge isn't burned." }],
      "M1": [{ id: "ITM", esg: 1, text: "After firing a terrible facility vendor, you must carefully rebuild trust with the internal managers who had a cozy relationship with that vendor." }],
      "M2": [{ id: "ITM", esg: 1, text: "You aggressively forced a regional director to surrender their private office. You quietly approve a minor perk for their team to smooth over the political damage." }],
      "M4": [{ id: "ITM", esg: 1, text: "After executing a chaotic, highly unpopular corporate headquarters relocation, you must design a strategic campaign to rebuild the shattered morale of the workforce." }] 
    }
  },
  "CR-S5": { // Cultural Sensitivity (Fully Graded)
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "A veteran operator from a highly traditional background refuses to take orders from a young, female shift lead. You must navigate this tension carefully." }],
      "E2": [{ id: "ITM", esg: 1, text: "You notice a foreign-born technician is silently accepting blame for a fault out of cultural deference to authority. You intervene to uncover the real root cause." }],
      "E3": [{ id: "ITM", esg: 1, text: "Two crews from different ethnic backgrounds are clashing over the volume of music on the factory floor. You must mediate a respectful compromise." }],
      "M1": [{ id: "ITM", esg: 1, text: "A new corporate communication style is deeply offending your blue-collar workforce. You must translate the messaging to respect their working-class culture." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must resolve a bitter dispute between a rigid, process-driven German plant and a highly flexible, relationship-driven Italian plant." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must navigate a massive, high-stakes union negotiation where the labor representatives have vastly different cultural communication norms than the executive board." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "An older mechanic feels disrespected when a younger engineer addresses them by their first name. You must navigate the generational friction." }],
      "E2": [{ id: "ITM", esg: 1, text: "An international contractor uses highly direct, blunt language that offends your local technicians. You must bridge the communication gap." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift is frustrated because a foreign equipment vendor refuses to admit a flaw, out of a cultural need to 'save face'. You must find a delicate solution." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must design a safety training program that resonates with a highly diverse, multilingual workforce that distrusts corporate authority." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors in Asia are ignoring your emails because you haven't built the necessary personal relationships first. You must adapt your approach." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must successfully merge the maintenance operations of an acquired Japanese firm without violating their deeply entrenched corporate culture." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "A draftsman from a highly hierarchical culture is terrified to point out a flaw in a senior engineer's design. You must coax the feedback out of them safely." }],
      "E2": [{ id: "ITM", esg: 1, text: "An international vendor is highly evasive about a missed deadline. You must adapt your questioning to uncover the truth without causing them to lose face." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your highly analytical engineering team is clashing with a highly emotional, intuitive marketing team. You must act as the cultural translator between them." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must manage a joint project where the American team values aggressive speed, and the Swiss team demands flawless, slow precision." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors in the Middle East are offended by your blunt, transactional emails. You must radically alter your communication style to rebuild trust." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must navigate the intense cultural politics of leading a massive joint venture between a Western conglomerate and a Chinese state-owned enterprise." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "An immigrant floor worker nods 'yes' to your instructions, but you realize their culture views saying 'no' as disrespectful, and they don't actually understand." }],
      "E2": [{ id: "ITM", esg: 1, text: "A foreign supplier is deeply insulted when you issue a formal, written defect notice. You must explain the corporate requirement while repairing their pride." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your QA team's blunt, aggressive auditing style is causing massive resentment in a highly polite, relationship-driven department. You must soften their approach." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must design a global quality training program that works for both highly educated European lab techs and entry-level Asian factory workers." }],
      "M2": [{ id: "ITM", esg: 1, text: "A regional plant in South America is failing audits because their culture views strict compliance as a 'suggestion'. You must enforce the standard delicately." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must navigate a catastrophic product recall across 15 different countries, tailoring the apology and remediation strategy to 15 vastly different cultural expectations." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "Two forklift drivers from different cultural backgrounds are clashing over the definition of 'personal space' in the breakroom. You must mediate." }],
      "E2": [{ id: "ITM", esg: 1, text: "An international truck driver is highly agitated and doesn't speak your language. You must use extreme patience and non-verbal cues to de-escalate the situation." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift has formed culturally segregated cliques that refuse to collaborate. You must design team exercises to break down the walls." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must enforce a strict new safety protocol on a workforce that culturally views the required PPE as unmanly or unnecessary." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional hubs in different countries are violently clashing over inventory allocation. You must navigate the geopolitical biases to force a compromise." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must standardize global logistics operations without destroying the deeply embedded, highly effective local operating cultures of your international hubs." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "A sales rep from a highly aggressive culture is bullying a quiet, polite scheduling clerk. You must intervene and establish communication boundaries." }],
      "E2": [{ id: "ITM", esg: 1, text: "An international supplier says 'we will try' to meet a deadline, which your culture interprets as 'yes', but theirs means 'no'. You must clarify the ambiguity." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your highly rigid, data-driven planning team is deeply frustrated by the chaotic, relationship-driven Commercial team. You must bridge the gap." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must align a master schedule between a plant that values strict 9-to-5 boundaries and a plant that expects 24/7 availability." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional commercial directors in Asia are insulted by your blunt, automated demand-forecast rejections. You must soften the software's communication style." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must lead a global S&OP transition, perfectly navigating the intense cultural friction between American speed, German precision, and Asian relationship-building." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "A foreign customs agent is demanding a 'gift' to process paperwork, which violates your corporate ethics. You must navigate the local custom safely." }],
      "E2": [{ id: "ITM", esg: 1, text: "An international carrier is deeply offended by your blunt email demanding a status update. You must call them to repair the cultural faux pas." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift is furious that an overseas hub is not answering emails on their local holiday. You must teach your team cultural empathy." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must negotiate a delay with a Middle Eastern client who views the missed deadline as a profound personal insult, not just a business error." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors are clashing over the allocation of shipping containers due to deep-seated nationalistic biases. You must force a neutral, data-driven compromise." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must negotiate a massive, global logistics contract, perfectly adapting your tactics for the radically different boardroom cultures of Tokyo, London, and New York." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "An international vendor refuses to discuss pricing until you have spent an hour making personal small talk. You must suppress your impatience and play along." }],
      "E2": [{ id: "ITM", esg: 1, text: "A supplier from a highly hierarchical culture refuses to negotiate with your junior buyer because of their age. You must step in to lend authority." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your engineering team's blunt, aggressive specifications are deeply offending a highly polite Japanese supplier. You must intercept and rewrite the communications." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must enforce strict Western anti-bribery policies on suppliers in regions where corporate gifting is deeply embedded in the business culture." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors in Latin America are ignoring your global contracts because they prefer doing business with local friends. You must delicately address the cultural norm." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must successfully navigate radically different cultural business norms while negotiating massive, high-stakes raw-material contracts in Asia, Europe, and the US." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "An older operator feels disrespected when a younger engineer corrects their boiler settings. You must navigate the generational friction." }],
      "E2": [{ id: "ITM", esg: 1, text: "A foreign contractor uses highly direct, blunt language that offends your local technicians. You must bridge the communication gap." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your shift is frustrated because an international vendor refuses to admit a flaw, out of a cultural need to 'save face'. You must find a delicate solution." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must design a safety training program that resonates with a highly diverse, multilingual workforce that distrusts corporate authority." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors in Asia are ignoring your emails because you haven't built the necessary personal relationships first. You must adapt your approach." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must present a highly expensive, Western-driven sustainability initiative to a regional board that culturally prioritizes immediate profit over environmental optics." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "A candidate from a deferential culture refuses to highlight their own achievements in an interview. You must adapt your questioning to draw them out." }],
      "E2": [{ id: "ITM", esg: 1, text: "A manager from a blunt, aggressive culture is terrified their highly sensitive employee is going to file a grievance. You must coach them on delivery." }],
      "E3": [{ id: "ITM", esg: 1, text: "You must mediate a bitter dispute between a deeply traditional, hierarchical supervisor and a young, highly informal employee who demands 'flat' leadership." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must redesign the corporate performance appraisal form so it works equally well in highly direct Western cultures and highly indirect Eastern cultures." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors in Europe are fiercely protesting a new US-centric 'at-will' employment policy. You must navigate the massive cultural clash." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must completely adapt your global HR strategy to account for starkly different labor laws, ethical norms, and cultural expectations in 15 different countries." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "An international vendor is deeply insulted when you ask them to fill out a standard compliance form. You must explain the requirement without causing them to lose face." }],
      "E2": [{ id: "ITM", esg: 1, text: "A colleague from a highly relationship-driven culture is offended by your short, transactional emails. You must adapt your communication style." }],
      "E3": [{ id: "ITM", esg: 1, text: "The highly aggressive, risk-taking Commercial team is clashing violently with the deeply conservative, risk-averse Credit team. You must bridge the gap." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must enforce strict Western accounting audits on a subsidiary in a region where creative accounting and tax avoidance are considered standard business practices." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional CFOs in Asia are ignoring your demands for data because you haven't taken the time to build personal relationships with them. You must pivot your approach." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must navigate the intense cultural politics of leading a massive financial integration between a deeply transparent Western firm and a highly secretive Asian conglomerate." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "A user from a deferential culture is terrified to admit they broke their laptop. You must use extreme empathy to coax the truth out of them so you can fix it." }],
      "E2": [{ id: "ITM", esg: 1, text: "An offshore development team is saying 'yes' to deadlines they cannot meet, out of a cultural need to please you. You must design a system to uncover the real timelines." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your highly analytical, introverted sysadmin team is deeply frustrated by the loud, chaotic, extroverted Sales team. You must act as the cultural translator." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must manage a joint project where the American IT team values aggressive speed, and the German IT team demands flawless, slow precision." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional CIOs in the Middle East are offended by your blunt, transactional emails. You must radically alter your communication style to rebuild trust." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must implement a rigid, global cybersecurity framework across vastly different regional cultures, navigating deep local resentments toward 'Western corporate imperialism'." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "An international client refuses to discuss business until you have spent hours making personal small talk. You must suppress your impatience and respect the ritual." }],
      "E2": [{ id: "ITM", esg: 1, text: "A client from a highly hierarchical culture refuses to negotiate with your junior rep because of their age. You must step in to lend authority without undermining your rep." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your engineering team's blunt, aggressive specifications are deeply offending a highly polite Japanese client. You must intercept and rewrite the communications." }],
      "M1": [{ id: "ITM", esg: 1, text: "You must negotiate a delay with a Middle Eastern client who views the missed deadline as a profound personal insult, not just a business error." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors in Latin America are ignoring your global sales playbooks because they prefer doing business with local friends. You must delicately address the cultural norm." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must successfully navigate radically different cultural business norms while negotiating massive, high-stakes contracts in Asia, Europe, and the US." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "A foreign VIP visitor expects an extreme level of formal deference that your casual, modern office is not used to providing. You must brief the reception team." }],
      "E2": [{ id: "ITM", esg: 1, text: "Two teams from different ethnic backgrounds are clashing over the types of food being served in the corporate cafeteria. You must mediate a respectful compromise." }],
      "E3": [{ id: "ITM", esg: 1, text: "An executive from a highly hierarchical culture is furious that a junior employee spoke to them informally in the elevator. You must navigate the generational friction." }],
      "M1": [{ id: "ITM", esg: 1, text: "A new corporate open-plan office design is deeply offending a regional workforce that culturally equates private offices with personal dignity. You must adapt the rollout." }],
      "M2": [{ id: "ITM", esg: 1, text: "You must resolve a bitter dispute between a rigid, process-driven German administrative hub and a highly flexible, relationship-driven Italian office." }],
      "M4": [{ id: "ITM", esg: 1, text: "You must standardize global administrative operations without destroying the deeply embedded, highly effective local operating cultures of your international offices." }] 
    }
  },
  "CR-S6": { // Systemic Conflict Prevention (Fully Graded)
    "Production": { 
      "E1": [{ id: "ITM", esg: 1, text: "Two operators constantly fight over a shared tool. You permanently end the conflict by simply ordering a second tool." }],
      "E2": [{ id: "ITM", esg: 1, text: "The day shift and night shift argue daily about the cleanliness of the station. You design a mandatory, 5-minute signed handover checklist to eliminate the ambiguity." }],
      "E3": [{ id: "ITM", esg: 1, text: "QA and Production clash endlessly over visual defects. You build a standardized 'golden sample' display board so there is zero debate on what passes." }],
      "M1": [{ id: "ITM", esg: 1, text: "Maintenance and Production are in a perpetual war over downtime. You institute a joint weekly planning meeting to force structural alignment." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional plants are constantly stealing each other's raw materials. You design a rigid, automated allocation algorithm to remove human emotion from the process." }],
      "M4": [{ id: "ITM", esg: 1, text: "You identify that the matrix structure is fundamentally flawed, causing endless turf wars between regional and global directors. You redesign the entire organizational chart." }] 
    },
    "Maintenance": { 
      "E1": [{ id: "ITM", esg: 1, text: "Mechanics are constantly fighting over the only diagnostic tablet. You permanently end the conflict by securing budget for three more tablets." }],
      "E2": [{ id: "ITM", esg: 1, text: "Technicians keep arguing with stores over missing parts. You design a digital sign-out sheet that removes all ambiguity about who took what." }],
      "E3": [{ id: "ITM", esg: 1, text: "Production constantly complains that repairs take too long. You implement a live digital dashboard showing repair status to eliminate the constant phone calls." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your planners and shift leads are in a perpetual war over the PM schedule. You rewrite the workflow so planners must physically walk the floor before finalizing the schedule." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors are constantly fighting corporate engineering over CapEx. You design a transparent, math-based ROI scorecard to remove the politics from funding." }],
      "M4": [{ id: "ITM", esg: 1, text: "You identify that the incentive structure actively rewards Production for breaking machines and Maintenance for hoarding parts. You completely redesign the executive compensation model." }] 
    },
    "Engineering": { 
      "E1": [{ id: "ITM", esg: 1, text: "Draftsmen are constantly fighting over who overwrote whose file. You permanently end the conflict by implementing a strict version-control software." }],
      "E2": [{ id: "ITM", esg: 1, text: "Engineers and fabricators argue daily about tolerances. You mandate a new protocol where the fabricator must sign off on the drawing before it is finalized." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your team is constantly arguing with Procurement over cheap parts. You create a pre-approved, locked vendor catalog to eliminate the debate entirely." }],
      "M1": [{ id: "ITM", esg: 1, text: "R&D and Commercial are in a perpetual war over product launch dates. You institute a joint 'stage-gate' approval process to force structural alignment." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional engineering heads are constantly stealing each other's specialized talent. You create a centralized, neutral resource-allocation committee." }],
      "M4": [{ id: "ITM", esg: 1, text: "You identify that the matrix structure is fundamentally flawed, causing endless turf wars between R&D and Manufacturing. You redesign the entire organizational chart." }] 
    },
    "Quality": { 
      "E1": [{ id: "ITM", esg: 1, text: "Inspectors are constantly fighting over the only working spectrometer. You permanently end the conflict by securing budget for a second machine." }],
      "E2": [{ id: "ITM", esg: 1, text: "Lab techs and floor workers argue daily about sampling times. You design a strict, automated alarm system that removes the human element from the timing." }],
      "E3": [{ id: "ITM", esg: 1, text: "QA and Production clash endlessly over visual defects. You build a standardized 'golden sample' display board so there is zero debate on what passes." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your QA managers and the Commercial team are in a perpetual war over releasing borderline batches. You write a rigid, black-and-white policy to remove their discretion." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional plants are constantly fighting corporate QA over audit scores. You design a transparent, automated dashboard to remove all subjectivity from the scoring." }],
      "M4": [{ id: "ITM", esg: 1, text: "You identify that the incentive structure actively rewards Production for hiding defects and QA for halting lines. You completely redesign the executive compensation model." }] 
    },
    "Warehouse": { 
      "E1": [{ id: "ITM", esg: 1, text: "Forklift drivers are constantly fighting over the fastest pallets. You permanently end the conflict by having the software auto-assign the tasks." }],
      "E2": [{ id: "ITM", esg: 1, text: "The day shift and night shift argue daily about battery charging. You design a mandatory, physical tag system to eliminate the ambiguity." }],
      "E3": [{ id: "ITM", esg: 1, text: "Warehouse and Dispatch clash endlessly over staging space. You paint hard, physical boundary lines on the floor so there is zero debate on whose territory is whose." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your shift leads are in a perpetual war with Sales over rush orders. You institute a rigid '48-hour freeze' rule to force structural alignment." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional hubs are constantly stealing each other's transport capacity. You design a centralized, automated allocation algorithm to remove human emotion from the process." }],
      "M4": [{ id: "ITM", esg: 1, text: "You identify that the matrix structure is fundamentally flawed, causing endless turf wars between Logistics and Commercial. You redesign the entire organizational chart." }] 
    },
    "Planning": { 
      "E1": [{ id: "ITM", esg: 1, text: "Two clerks are constantly fighting over who has to update the master spreadsheet. You permanently end the conflict by automating the data feed." }],
      "E2": [{ id: "ITM", esg: 1, text: "Sales reps and planners argue daily about order status. You build a live, read-only dashboard for Sales to eliminate the constant phone calls." }],
      "E3": [{ id: "ITM", esg: 1, text: "Planning and Production clash endlessly over changeover times. You build a hard-coded matrix into the ERP so there is zero debate on the timeline." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your planning managers and the Commercial team are in a perpetual war over the forecast. You institute a joint S&OP sign-off mandate to force structural alignment." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors are constantly fighting over priority allocation. You design a rigid, math-based allocation algorithm to remove all subjectivity from the process." }],
      "M4": [{ id: "ITM", esg: 1, text: "You identify that the incentive structure actively rewards Sales for over-forecasting and Production for over-producing. You completely redesign the executive compensation model." }] 
    },
    "Supply Chain": { 
      "E1": [{ id: "ITM", esg: 1, text: "Coordinators are constantly fighting over the best carriers. You permanently end the conflict by having the software auto-assign the freight." }],
      "E2": [{ id: "ITM", esg: 1, text: "Dispatchers and drivers argue daily about wait times. You implement a digital queuing app that removes all human ambiguity from the process." }],
      "E3": [{ id: "ITM", esg: 1, text: "Supply Chain and Procurement clash endlessly over carrier rates. You build a joint scorecard matrix so there is zero debate on which vendor to use." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your logistics managers and the Commercial team are in a perpetual war over air-freight costs. You write a rigid, black-and-white policy to remove their discretion." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional hubs are constantly stealing each other's shipping containers. You design a centralized, neutral resource-allocation committee." }],
      "M4": [{ id: "ITM", esg: 1, text: "You identify that the matrix structure is fundamentally flawed, causing endless turf wars between global and regional supply chain heads. You redesign the entire organizational chart." }] 
    },
    "Procurement": { 
      "E1": [{ id: "ITM", esg: 1, text: "Buyers are constantly fighting over who gets to process the easiest POs. You permanently end the conflict by automating the distribution queue." }],
      "E2": [{ id: "ITM", esg: 1, text: "Procurement and Accounts Payable argue daily about mismatched invoices. You implement a mandatory 3-way digital match to eliminate the human error." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your team and Engineering clash endlessly over technical specs. You mandate a new protocol where Engineering must sign off on the RFQ before it is sent." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your category managers and the Operations team are in a perpetual war over vendor quality. You institute a joint weekly vendor-review meeting to force structural alignment." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors are constantly fighting corporate over local suppliers. You design a transparent, math-based ROI scorecard to remove the politics from sourcing." }],
      "M4": [{ id: "ITM", esg: 1, text: "You identify that the incentive structure actively rewards Procurement for buying cheap garbage and Operations for demanding gold-plated luxury. You completely redesign the executive compensation model." }] 
    },
    "Utilities": { 
      "E1": [{ id: "ITM", esg: 1, text: "Operators are constantly fighting over the only working gas meter. You permanently end the conflict by securing budget for a second meter." }],
      "E2": [{ id: "ITM", esg: 1, text: "The day shift and night shift argue daily about the boiler settings. You design a mandatory, digital lock-out system to eliminate the ambiguity." }],
      "E3": [{ id: "ITM", esg: 1, text: "Utilities and Production clash endlessly over power drops. You build a live digital dashboard showing capacity so there is zero debate on the limits." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your utility managers and the Sustainability team are in a perpetual war over emissions. You institute a joint KPI matrix to force structural alignment." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional plants are constantly fighting corporate engineering over CapEx for upgrades. You design a transparent, math-based ROI scorecard to remove the politics." }],
      "M4": [{ id: "ITM", esg: 1, text: "You identify that the matrix structure is fundamentally flawed, causing endless turf wars between the Energy division and Manufacturing. You redesign the entire organizational chart." }] 
    },
    "HR": { 
      "E1": [{ id: "ITM", esg: 1, text: "Recruiters are constantly fighting over the best candidates. You permanently end the conflict by having the ATS software round-robin the leads." }],
      "E2": [{ id: "ITM", esg: 1, text: "HR and Payroll argue daily about missing timesheets. You implement a hard, automated cut-off system that removes all human discretion from the process." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your team and line managers clash endlessly over interview schedules. You mandate a digital calendar integration so there is zero debate on availability." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your HRBPs and the Legal team are in a perpetual war over termination risks. You institute a joint weekly case-review meeting to force structural alignment." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional directors are constantly fighting corporate over headcount allocation. You design a rigid, math-based revenue-to-staff ratio to remove the politics." }],
      "M4": [{ id: "ITM", esg: 1, text: "You identify that the incentive structure actively rewards Talent Acquisition for speed and Operations for perfection. You completely redesign the executive compensation model." }] 
    },
    "Finance": { 
      "E1": [{ id: "ITM", esg: 1, text: "Clerks are constantly fighting over who has to process the messy expense reports. You permanently end the conflict by automating the distribution queue." }],
      "E2": [{ id: "ITM", esg: 1, text: "Finance and Sales argue daily about credit limits. You build a hard-coded matrix into the ERP so there is zero debate on who gets approved." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your team and Procurement clash endlessly over payment terms. You institute a joint sign-off mandate to force structural alignment." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your finance managers and the Commercial team are in a perpetual war over the budget. You write a rigid, black-and-white policy to remove their discretion." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional CFOs are constantly fighting corporate over capital allocation. You design a transparent, math-based ROI scorecard to remove the politics from funding." }],
      "M4": [{ id: "ITM", esg: 1, text: "You identify that the matrix structure is fundamentally flawed, causing endless turf wars between regional controllers and global FP&A. You redesign the entire organizational chart." }] 
    },
    "IT": { 
      "E1": [{ id: "ITM", esg: 1, text: "Technicians are constantly fighting over the easiest helpdesk tickets. You permanently end the conflict by having the software auto-assign the tasks." }],
      "E2": [{ id: "ITM", esg: 1, text: "Developers and Sysadmins argue daily about server deployments. You design a mandatory, automated CI/CD pipeline to eliminate the human friction." }],
      "E3": [{ id: "ITM", esg: 1, text: "IT and HR clash endlessly over onboarding delays. You build an automated provisioning script so there is zero debate on when access is granted." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your IT managers and the Security team are in a perpetual war over access rights. You institute a rigid, black-and-white policy to remove their discretion." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional CIOs are constantly fighting corporate over software standards. You design a centralized, neutral architecture-review board to remove the politics." }],
      "M4": [{ id: "ITM", esg: 1, text: "You identify that the incentive structure actively rewards Development for speed and Infrastructure for stability. You completely redesign the executive compensation model." }] 
    },
    "Commercial": { 
      "E1": [{ id: "ITM", esg: 1, text: "Sales reps are constantly fighting over unassigned inbound leads. You permanently end the conflict by having the CRM auto-assign them." }],
      "E2": [{ id: "ITM", esg: 1, text: "Sales and Marketing argue daily about lead quality. You design a mandatory, math-based lead-scoring system to eliminate the subjectivity." }],
      "E3": [{ id: "ITM", esg: 1, text: "Your team and Supply Chain clash endlessly over delivery dates. You build a live digital dashboard showing capacity so there is zero debate on what is possible." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your sales managers and the Finance team are in a perpetual war over pricing discounts. You institute a rigid, black-and-white matrix to remove their discretion." }],
      "M2": [{ id: "ITM", esg: 1, text: "National directors are constantly fighting over the allocation of marketing funds. You design a transparent, math-based ROI scorecard to remove the politics." }],
      "M4": [{ id: "ITM", esg: 1, text: "You identify that the matrix structure is fundamentally flawed, causing endless turf wars between the Product division and Sales. You redesign the entire organizational chart." }] 
    },
    "Administration": { 
      "E1": [{ id: "ITM", esg: 1, text: "Assistants are constantly fighting over who has to cover the reception desk. You permanently end the conflict by publishing a rigid, non-negotiable rotation schedule." }],
      "E2": [{ id: "ITM", esg: 1, text: "Departments argue daily about conference room bookings. You implement a digital system that automatically cancels ghost-meetings to eliminate the friction." }],
      "E3": [{ id: "ITM", esg: 1, text: "Facilities and IT clash endlessly over desk setups. You build a joint, mandatory checklist so there is zero debate on whose job is whose." }],
      "M1": [{ id: "ITM", esg: 1, text: "Your admin managers and the Executive team are in a perpetual war over catering budgets. You write a rigid, black-and-white policy to remove their discretion." }],
      "M2": [{ id: "ITM", esg: 1, text: "Regional office heads are constantly fighting corporate over lease renewals. You design a transparent, math-based space-utilization scorecard to remove the politics." }],
      "M4": [{ id: "ITM", esg: 1, text: "You identify that the incentive structure actively rewards Facilities for cutting costs and HR for demanding luxury perks. You completely redesign the executive compensation model." }] 
    }
  }
};

const WPI_POOLS = {
  // LEADERSHIP
  "LS1": { "operational": [{ text: "When a process goes wrong, I step in and tell people exactly what to do." }], "professional": [{ text: "In a stalled meeting, I take control and assign clear action items." }] },
  "LS2": { "operational": [{ text: "I stop the line if I see a colleague skipping a mandatory check." }], "professional": [{ text: "I refuse to sign off on a request that bypasses standard workflows." }] },
  "LS3": { "operational": [{ text: "Instead of fixing a fault myself, I walk the operator through how to diagnose it." }], "professional": [{ text: "I dedicate time to coaching junior team members so they can handle complex tasks." }] },
  "LS4": { "operational": [{ text: "I ask the floor team for their input before deciding how to organise the shift rota." }], "professional": [{ text: "I gather opinions from all key stakeholders before finalising a strategy." }] },
  "LS5": { "operational": [{ text: "I trust my operators to run the line without constantly checking over their shoulders." }], "professional": [{ text: "I give my team a goal and let them figure out the workflow." }] },
  "LS6": { "operational": [{ text: "I constantly push my shift to beat our previous production records." }], "professional": [{ text: "I set highly demanding KPIs for my team and relentlessly drive them." }] },
  "LS7": { "operational": [{ text: "If my crew doesn't have the right tools, I make it my mission to get them." }], "professional": [{ text: "I view my primary role as clearing administrative roadblocks for my team." }] },
  "LS8": { "operational": [{ text: "I explain to the floor staff exactly why a new safety rule is being introduced." }], "professional": [{ text: "I make sure everyone understands how our tasks connect to Tripack's strategic goals." }] },
  "LS9": { "operational": [{ text: "If the shift is struggling, I know exactly what to say to rally the team." }], "professional": [{ text: "I can energise a discouraged project team and rebuild their confidence." }] },
  "LS10": { "operational": [{ text: "I make sure my operators know exactly what reward they will get for hitting targets." }], "professional": [{ text: "I explicitly link team effort to formal rewards and ensure commitments are honoured." }] },
  "LS-S1": { "operational": [{ text: "I change my approach when dealing with a new operator versus a veteran technician." }], "professional": [{ text: "I seamlessly adapt my leadership style depending on the seniority of the stakeholder." }] },
  "LS-S2": { "operational": [{ text: "I make sure my shift understands why hitting today's target matters for tomorrow." }], "professional": [{ text: "I paint a clear picture of our strategic direction to ensure cross-functional alignment." }] },
  "LS-S3": { "operational": [{ text: "I let my experienced operators make the call on routine machine adjustments." }], "professional": [{ text: "I delegate true decision-making authority to my subject matter experts." }] },
  "LS-S4": { "operational": [{ text: "If a machine faults out, I make a quick call to keep the shift moving." }], "professional": [{ text: "I make confident strategic decisions quickly, even when the data is incomplete." }] },
  "LS-S5": { "operational": [{ text: "If my line misses target, I take the heat rather than blaming the crew." }], "professional": [{ text: "I take full accountability for my department's failures without pointing fingers." }] },
  "LS-S6": { "operational": [{ text: "If tensions run high on the floor, I am good at keeping my own frustration hidden." }], "professional": [{ text: "During heated corporate meetings, I carefully regulate my own emotional tone." }] },
  "LS-S7": { "operational": [{ text: "I keep things strictly professional, even with operators I have known for years." }], "professional": [{ text: "I maintain clear professional boundaries while remaining fair and approachable." }] },
  "LS-S8": { "operational": [{ text: "I encourage my team to try new ways to speed up changeovers." }], "professional": [{ text: "I create psychological safety for my team to propose unconventional business solutions." }] },
  
  // CONFLICT
  "CR1": { "operational": [{ text: "If a safety standard is challenged, I stand my ground firmly and refuse to back down." }], "professional": [{ text: "I assert my position strongly and push for the outcome I believe is right." }] },
  "CR2": { "operational": [{ text: "When two shifts disagree, I pull them together to find a solution that works for both." }], "professional": [{ text: "During cross-functional disputes, I focus on collaborative problem-solving." }] },
  "CR3": { "operational": [{ text: "I am usually the one who suggests a compromise to keep the factory floor moving." }], "professional": [{ text: "I actively look for a workable middle ground that allows both parties to walk away satisfied." }] },
  "CR4": { "operational": [{ text: "If tempers flare on the line, I prefer to walk away and let things cool down." }], "professional": [{ text: "I often prefer to sidestep a tense interpersonal conflict rather than confronting it directly." }] },
  "CR5": { "operational": [{ text: "I will often give way in an argument just to preserve a good working relationship." }], "professional": [{ text: "I am willing to yield my own strategic position if it protects the long-term goodwill of a stakeholder." }] },
  "CR-S1": { "operational": [{ text: "I step in to calm things down before an argument starts on the floor." }], "professional": [{ text: "I proactively address structural tensions before they escalate into departmental conflicts." }] },
  "CR-S2": { "operational": [{ text: "When tempers flare over overtime, I know how to bring the temperature down." }], "professional": [{ text: "I actively de-escalate heated board meetings to keep the focus on solutions." }] },
  "CR-S3": { "operational": [{ text: "Instead of arguing, I ask the maintenance guy exactly what he needs to fix the issue." }], "professional": [{ text: "I look past stated negotiating positions to uncover the underlying business interests." }] },
  "CR-S4": { "operational": [{ text: "After a tough shift, I always make sure to clear the air with my team." }], "professional": [{ text: "I actively rebuild trust and repair working relationships after severe strategic disagreements." }] },
  "CR-S5": { "operational": [{ text: "I adapt how I communicate based on the background of the operators I am talking to." }], "professional": [{ text: "I navigate cross-cultural communication nuances effectively when resolving global disputes." }] },
  "CR-S6": { "operational": [{ text: "If two shifts keep arguing about the same tool, I buy a second tool to fix the root cause." }], "professional": [{ text: "I identify and eliminate the structural bottlenecks that generate recurring departmental friction." }] },

  // EXPANDED PERSONALITY POOLS (3 STATEMENTS PER TRAIT)
  "P1": { 
    "operational": [
      { text: "I prefer working on a busy, noisy line with a large crew rather than at a quiet, isolated station." },
      { text: "During breaks, I naturally gravitate toward sitting with groups of colleagues rather than resting alone." },
      { text: "I speak up quickly during toolbox talks rather than listening silently." }
    ], 
    "professional": [
      { text: "I feel much more energized after a day of cross-functional meetings than after a day of working alone at my desk." },
      { text: "I prefer to bounce ideas off my colleagues out loud rather than thinking through a problem entirely in my head." },
      { text: "I actively look forward to large corporate networking events and town halls." }
    ] 
  },
  "P2": { 
    "operational": [
      { text: "When a new contractor or operator joins our shift, I am always the first person to walk over and introduce myself." },
      { text: "If I need something from another shift, I will walk over and talk to them instead of waiting for them to come to me." },
      { text: "I make the first friendly move when external vendors visit the plant floor." }
    ], 
    "professional": [
      { text: "In a corporate meeting full of people from other departments, I am usually the one to break the ice and start the conversation." },
      { text: "I make a point of introducing myself to senior stakeholders I haven't met before." },
      { text: "I regularly check in on colleagues in other departments even when I don't need anything from them." }
    ] 
  },
  "P3": { 
    "operational": [
      { text: "When explaining a machine fault to maintenance, I get straight to the point without using unnecessary jargon." },
      { text: "I make sure to listen fully to a colleague's explanation before jumping in with my own opinion." },
      { text: "I adjust how I explain a task depending on whether the person is a veteran or a brand new apprentice." }
    ], 
    "professional": [
      { text: "When writing reports or emails, I focus on delivering a concise, structured executive summary rather than overwhelming people with details." },
      { text: "I deliberately strip out departmental acronyms when presenting to an audience outside of my function." },
      { text: "I carefully adapt my presentation tone depending on whether I am speaking to my team or the executive board." }
    ] 
  },
  "P4": { 
    "operational": [
      { text: "If a supervisor gives an instruction that I know will cause a defect, I will firmly push back and say no." },
      { text: "I am comfortable defending my shift's work if we are unfairly criticized by the next crew." },
      { text: "I give a clear, direct opinion on the floor rather than sitting on the fence." }
    ], 
    "professional": [
      { text: "I am entirely comfortable voicing a dissenting opinion to executive leadership if I believe the strategic direction is flawed." },
      { text: "I will firmly hold my ground and defend a well-reasoned business proposal even when the room is against me." },
      { text: "I easily decline requests from other departments when they try to push their workload onto my team." }
    ] 
  },
  "P5": { 
    "operational": [
      { text: "When a sudden breakdown ruins our shift targets, I focus on recovering quickly rather than complaining about it." },
      { text: "I try to keep the mood light and positive, even when we are doing tedious, repetitive line work." },
      { text: "I expect a mechanical problem to be solvable, even when it looks really bad at first glance." }
    ], 
    "professional": [
      { text: "When corporate announces a difficult restructuring, I proactively try to highlight the long-term opportunities to my team." },
      { text: "I naturally bring a high level of visible energy into the room when kicking off a new project." },
      { text: "I make a specific point to celebrate team milestones rather than just moving straight to the next task." }
    ] 
  },
  "P6": { 
    "operational": [
      { text: "I figure out how to troubleshoot minor equipment issues myself before calling over the shift lead." },
      { text: "I prefer to organize my own approach to a physical task rather than being told exactly how to do it." },
      { text: "I hold myself to a strict safety standard even when nobody is around to watch me." }
    ], 
    "professional": [
      { text: "I am highly comfortable making judgment calls on ambiguous projects without constantly seeking approval from my director." },
      { text: "I form my own distinct view on business strategy before asking what my peers think." },
      { text: "I prefer to own a complex task end-to-end entirely by myself without needing a committee." }
    ] 
  },
  "P7": { 
    "operational": [
      { text: "If a standard operating procedure (SOP) is outdated and slowing us down, I will actively challenge it to find a better way." },
      { text: "I often suggest completely new ways to handle changeovers that break away from how we've traditionally done it." },
      { text: "I am willing to try an unconventional fix to keep the line running if the standard method fails." }
    ], 
    "professional": [
      { text: "I actively push back against 'we’ve always done it this way' mentalities when designing new corporate workflows." },
      { text: "I consistently generate ideas that differ radically from the standard industry approach." },
      { text: "I am perfectly comfortable voicing a highly unconventional opinion, even if it sets me apart from the rest of the board." }
    ] 
  },
  "P8": { 
    "operational": [
      { text: "If a specific tool is missing, I am very good at safely improvising with what I have on hand to keep the line moving." },
      { text: "I will exhaust all my own ideas to fix a fault before I ask Maintenance for help." },
      { text: "If I don't know how to use a new piece of equipment, I will teach myself rather than waiting for a training session." }
    ], 
    "professional": [
      { text: "If I lack information for a report, I will exhaust every possible data source myself before escalating the issue." },
      { text: "I prefer to cope with heavy workloads using my own resources before asking colleagues for help." },
      { text: "I quickly learn new, complex software systems by exploring them independently rather than waiting for IT training." }
    ] 
  },
  "P9": { 
    "operational": [
      { text: "I always double-check my own work before signing off the shift logbook." },
      { text: "If I make a mistake that causes a minor delay, I own up to it immediately rather than trying to hide it." },
      { text: "I make sure I finish the task I committed to, even if it means staying a few minutes past my shift." }
    ], 
    "professional": [
      { text: "I ensure strict, end-to-end accountability for every project milestone under my remit." },
      { text: "If a strategic initiative I championed fails, I accept the consequences publicly rather than blaming the market." },
      { text: "I treat a business commitment as an absolute binding contract once I have given my word." }
    ] 
  },
  "P10": { 
    "operational": [
      { text: "I look closely at the machine data and gauges before guessing what went wrong." },
      { text: "When a complex fault happens, I break it down into smaller, logical steps to find the root cause." },
      { text: "I rely on hard evidence from the control panel rather than a 'gut feeling' about how the machine is running." }
    ], 
    "professional": [
      { text: "I rigorously decompose complex data sets before forming a strategic opinion." },
      { text: "I systematically trace recurring business errors back to their structural root cause rather than treating the symptoms." },
      { text: "I carefully weigh conflicting financial or market evidence before making a recommendation." }
    ] 
  },
  "P11": { 
    "operational": [
      { text: "I like to understand how the whole production process works from start to finish, not just my specific machine." },
      { text: "I think about how an adjustment I make on my machine will impact the next shift hours from now." },
      { text: "I grasp the underlying mechanical concepts of how the plant runs, not just the button sequences." }
    ], 
    "professional": [
      { text: "I naturally grasp the underlying theoretical concepts behind complex business models." },
      { text: "I constantly evaluate how a small policy change in my department will create ripple effects across the entire enterprise." },
      { text: "I prefer to frame daily problems in terms of where the industry will be in three to five years." }
    ] 
  },
  "P12": { 
    "operational": [
      { text: "I am always coming up with new tricks to make the shift run smoother." },
      { text: "When brainstorming in a team huddle, I throw out ideas freely without worrying if they are perfect." },
      { text: "I like to find ways around physical constraints on the floor using out-of-the-box thinking." }
    ], 
    "professional": [
      { text: "I consistently generate novel, unconventional solutions to deeply entrenched corporate problems." },
      { text: "I enjoy taking frameworks from completely different industries and applying them to our business challenges." },
      { text: "I tend to redefine the corporate problem entirely when the obvious framing isn't generating good answers." }
    ] 
  },
  "P13": { 
    "operational": [
      { text: "I will roll up my sleeves and rig a temporary fix to keep the line moving safely." },
      { text: "I rely on practical, hands-on experience rather than manuals to get things working." },
      { text: "I prioritize putting an immediate remedy in place rather than waiting for the perfect part to arrive." }
    ], 
    "professional": [
      { text: "I prioritize workable, practical solutions over perfect theoretical frameworks." },
      { text: "I check that a strategic initiative can actually be executed with our current resources before recommending it." },
      { text: "I prefer to implement a fast, 80%-perfect solution today rather than a 100%-perfect solution next quarter." }
    ] 
  },
  "P14": { 
    "operational": [
      { text: "I bite my tongue and stay calm when someone complains unfairly about my work on the floor." },
      { text: "I resist the urge to react immediately when a colleague does something that irritates me." },
      { text: "I stay highly patient when explaining a physical task to a slow learner for the third time." }
    ], 
    "professional": [
      { text: "I maintain strict emotional restraint when provoked during high-stakes negotiations." },
      { text: "I carefully separate how I feel internally from how I act professionally during heated meetings." },
      { text: "I deliberately sleep on a difficult or anger-inducing email before typing out a response." }
    ] 
  },
  "P15": { 
    "operational": [
      { text: "I follow the exact step-by-step procedure for every machine changeover without skipping anything." },
      { text: "I keep my tools, workbench, and materials meticulously organized at all times." },
      { text: "I mentally plan out the exact sequence of my physical tasks before I start my shift." }
    ], 
    "professional": [
      { text: "I approach highly complex project management with rigid, step-by-step systematic discipline." },
      { text: "I document corporate processes so meticulously that anyone could follow my exact steps." },
      { text: "I lay out exactly what I will do, and in what order, before beginning any strategic initiative." }
    ] 
  },
  "P16": { 
    "operational": [
      { text: "I don't let the pressure get to me, even when three alarms are ringing at once on the line." },
      { text: "I maintain my standard of work even when the physical workload during a shift becomes extremely heavy." },
      { text: "I bounce back to full effectiveness very quickly after a stressful incident on the floor." }
    ], 
    "professional": [
      { text: "I maintain high cognitive performance and composure during severe organizational crises." },
      { text: "I do not let a looming, high-stakes executive deadline rattle my concentration." },
      { text: "I sustain a very high level of professional output through long, gruelling periods of corporate pressure." }
    ] 
  }
};



function getGradeAnchor(tier, construct, dept) {
  // Map Tripack tiers (1-8) to exact scenario grades
  const targetMap = {1:"E1", 2:"E2", 3:"E3", 4:"M1", 5:"M1", 6:"M2", 7:"M4", 8:"M4"};
  let target = targetMap[tier] || "E1";
  
  // If we haven't written the intermediate grade yet, safely fallback to the E1/M4 anchors!
  const bank = ANCHOR_BANK[construct];
  if (bank && bank[dept] && !bank[dept][target]) {
    return tier <= 3 ? "E1" : "M4"; 
  }
  return target;
}

function getGradeClause(tier) {
  if (tier === 1 || tier === 8) return ""; 
  if (tier === 2 || tier === 3) return " You need to resolve this swiftly on your shift.";
  if (tier === 4 || tier === 5) return " Multiple people rely on your managerial guidance here.";
  if (tier === 6 || tier === 7) return " This requires careful cross-functional alignment and sets a precedent.";
  return "";
}

function composeFullScenario(item, construct, dept) { return composeStem(item, dept, 4, construct); }
function composeFullOptions(item, construct, dept) { 
  let cleanedOptions = item.options.map(opt => {
    return { k: opt.k, t: opt.t.replace(/> /g, "").replace(/ >/g, "").replace(/>/g, "").trim() };
  });

  if (item.type === "SJT" && construct.startsWith("P")) {
     cleanedOptions = [
       { k: "A", t: "Act according to my natural preference and leverage my strengths." },
       { k: "B", t: "Adapt my behaviour slightly, but rely mostly on my standard approach." },
       { k: "C", t: "Suppress my natural style entirely to match what others are doing." },
       { k: "D", t: "Avoid the situation because it does not fit my preferred working style." }
     ];
  }
  if (item.type === "RNK" && construct.startsWith("P")) {
     cleanedOptions = [
       { k: "A", t: "Ensure my natural strengths are fully utilized in the process." },
       { k: "B", t: "Find a middle ground between my personal style and the team's needs." },
       { k: "C", t: "Change my approach entirely to make others more comfortable." },
       { k: "D", t: "Step back and let others handle the aspects I dislike." }
     ];
  }
  return cleanedOptions; 
}

function composeStem(item, dept, gradeTier, construct) {
  const ctxClass = DEPT_CONTEXT_CLASS[dept] || "professional";
  const anchor = getGradeAnchor(gradeTier, construct, dept); // UPGRADED TO SMART ROUTING
  let clause = getGradeClause(gradeTier);

  if (item.type === "SJT" || item.type === "RNK") {
    const bank = ANCHOR_BANK[construct];
    if (bank && bank[dept] && bank[dept][anchor]) {
      // If an exact intermediate grade exists, we drop the generic clause to make it pure!
      if (["E2", "E3", "M1", "M2"].includes(anchor)) clause = ""; 
      return bank[dept][anchor][0].text + clause;
    }
    if (construct.startsWith("P")) {
       return `You are working in the ${dept} department. A complex situation arises that challenges your natural working style.` + clause;
    }
    let cleanedOldStem = item.stem.replace(/^You are working in[^.]+\.\s*/i, "");
    return `You are working in the ${dept} department. ` + cleanedOldStem.replace(/> /g, "").replace(/>/g, "") + clause; 
  }
  
  if (item.type === "IFC" || item.type === "RCL" || item.type === "BFS") {
     const wpiBank = WPI_POOLS[construct];
     if(wpiBank && wpiBank[ctxClass] && wpiBank[ctxClass].length > 0) {
        const statement = wpiBank[ctxClass][0].text;
        if (item.type === "IFC") return `Which is MOST and LEAST like you? "${statement}"`;
        if (item.type === "RCL") return `To what extent do you agree? "${statement}"`;
        if (item.type === "BFS") return `How often do you do this? "${statement}"`;
     }
  }
  return item.stem.replace(/> /g, "").replace(/>/g, "");
}


/* =========================================================================================
   NOTE FOR ADMIN: YOU MUST PASTE YOUR MASSIVE 'BATTERY' ARRAY DIRECTLY BELOW THIS LINE!!
   ========================================================================================= */
const BATTERY = [{"code": "LS1", "name": "Directive Command", "altName": "", "sci": "Tannenbaum & Schmidt continuum ---", "behaviour": "Willingness to assert clear", "competencies": "Leading People", "items": [{"id": "LS1-001", "type": "SJT", "stem": "You are working in the procurement and sourcing function. A colleague openly favours a supplier with whom they have a personal connection. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound directive command.", "options": [{"k": "A", "t": "Give clear, unambiguous direction and take charge of the > situation, then confirm that everyone involved understands the plan > and their part in it"}, {"k": "B", "t": "Delay any action until more information arrives, even though > time is critical"}, {"k": "C", "t": "Focus on identifying who is to blame rather than resolving the > situation"}, {"k": "D", "t": "Quietly compromise the relevant standard to protect the > immediate deadline"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour under Pressure", "defaulted": false}, {"id": "LS1-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I give clear direction and take charge when a situation needs > decisive leadership"}, {"k": "B", "t": "I like learning new skills even when not required"}, {"k": "C", "t": "I value harmony and avoid unnecessary disagreement"}, {"k": "D", "t": "I take pride in producing accurate, error-free work"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour under Pressure", "defaulted": false}, {"id": "LS1-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour under Pressure", "defaulted": false}, {"id": "LS1-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I give clear, unambiguous direction and take charge of the situation when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour under Pressure", "defaulted": false}, {"id": "LS1-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour under Pressure", "defaulted": false}]}, {"code": "LS2", "name": "Procedural Governance", "altName": "", "sci": "Weber\\'s bureaucratic authority;", "behaviour": "Enforcement of standards, process", "competencies": "Driving Results", "items": [{"id": "LS2-001", "type": "SJT", "stem": "You are working in the human resources function. A mandatory training programme is being poorly attended despite reminders. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound procedural governance.", "options": [{"k": "A", "t": "Insist that the correct process and standard is followed before > anything proceeds, then confirm that everyone involved understands the > plan and their part in it"}, {"k": "B", "t": "Focus on identifying who is to blame rather than resolving the > situation"}, {"k": "C", "t": "Quietly compromise the relevant standard to protect the > immediate deadline"}, {"k": "D", "t": "Do the minimum required and leave the underlying cause > unaddressed"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS2-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I make sure the correct procedure is followed before anything > proceeds"}, {"k": "B", "t": "I am comfortable adapting when priorities change"}, {"k": "C", "t": "I make sure commitments I give are always honoured"}, {"k": "D", "t": "I enjoy helping colleagues work through their problems"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS2-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS2-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I insist that the correct process and standard is followed before anything proceeds when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS2-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}]}, {"code": "LS3", "name": "Developmental Mentoring", "altName": "", "sci": "Transformational leadership ---", "behaviour": "Coaching and developing the", "competencies": "Building Capability", "items": [{"id": "LS3-001", "type": "SJT", "stem": "You are working in the information technology function. Two integrated systems hold conflicting records for the same transaction. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound developmental mentoring.", "options": [{"k": "A", "t": "Coach the individual and build their capability rather than > simply correcting the error, then confirm that everyone involved > understands the plan and their part in it"}, {"k": "B", "t": "Quietly compromise the relevant standard to protect the > immediate deadline"}, {"k": "C", "t": "Do the minimum required and leave the underlying cause > unaddressed"}, {"k": "D", "t": "Wait for explicit instructions rather than exercising judgement"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}, {"id": "LS3-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I invest time coaching people so they can handle the task > themselves next time"}, {"k": "B", "t": "I make sure commitments I give are always honoured"}, {"k": "C", "t": "I enjoy helping colleagues work through their problems"}, {"k": "D", "t": "I prefer to plan my work carefully well in advance"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}, {"id": "LS3-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": true, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}, {"id": "LS3-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I coach the individual and build their capability rather than simply correcting the error when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}, {"id": "LS3-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}]}, {"code": "LS4", "name": "Participative Engagement", "altName": "", "sci": "Participative / democratic", "behaviour": "Involving the people affected in", "competencies": "Collaboration", "items": [{"id": "LS4-001", "type": "SJT", "stem": "You are working in the administration and facilities function. A cross-departmental meeting requires careful agenda and minute control. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound participative engagement.", "options": [{"k": "A", "t": "Actively involve the affected people in shaping the decision, > then confirm that everyone involved understands the plan and their > part in it"}, {"k": "B", "t": "Do the minimum required and leave the underlying cause > unaddressed"}, {"k": "C", "t": "Wait for explicit instructions rather than exercising judgement"}, {"k": "D", "t": "Avoid the issue and hope it resolves itself before it escalates"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}, {"id": "LS4-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I involve the people affected before I make a decision"}, {"k": "B", "t": "I enjoy helping colleagues work through their problems"}, {"k": "C", "t": "I prefer to plan my work carefully well in advance"}, {"k": "D", "t": "I stay composed when things around me go wrong"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}, {"id": "LS4-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": true, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}, {"id": "LS4-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I actively involve the affected people in shaping the decision when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}, {"id": "LS4-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}]}, {"code": "LS5", "name": "Delegative Autonomy", "altName": "", "sci": "Laissez-faire and empowerment", "behaviour": "Granting autonomy and trusting", "competencies": "Leading People", "items": [{"id": "LS5-001", "type": "SJT", "stem": "You are working in the plant maintenance function. Rising energy losses suggest a passing steam trap that is proving hard to isolate. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound delegative autonomy.", "options": [{"k": "A", "t": "Delegate the task fully and trust the person to deliver without > interference, then confirm that everyone involved understands the plan > and their part in it"}, {"k": "B", "t": "Wait for explicit instructions rather than exercising judgement"}, {"k": "C", "t": "Avoid the issue and hope it resolves itself before it escalates"}, {"k": "D", "t": "Escalate immediately to senior management without first > attempting to resolve it"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS5-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I delegate fully and trust people to deliver in their own way"}, {"k": "B", "t": "I prefer to plan my work carefully well in advance"}, {"k": "C", "t": "I stay composed when things around me go wrong"}, {"k": "D", "t": "I like learning new skills even when not required"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS5-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": true, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS5-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I delegate the task fully and trust the person to deliver without interference when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS5-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}]}, {"code": "LS6", "name": "Performance Drive", "altName": "", "sci": "Goal-setting theory (Locke &", "behaviour": "Setting and pursuing demanding but", "competencies": "Driving Results", "items": [{"id": "LS6-001", "type": "SJT", "stem": "You are working in the utilities and plant services function. An energy-saving initiative depends on behavioural change from busy operators. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound performance drive.", "options": [{"k": "A", "t": "Set a demanding but achievable target and drive the team toward > it, then confirm that everyone involved understands the plan and their > part in it"}, {"k": "B", "t": "Take complete personal control and exclude the people closest to > the work"}, {"k": "C", "t": "Delay any action until more information arrives, even though > time is critical"}, {"k": "D", "t": "Focus on identifying who is to blame rather than resolving the > situation"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS6-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I set stretching targets and push hard to achieve them"}, {"k": "B", "t": "I stay composed when things around me go wrong"}, {"k": "C", "t": "I like learning new skills even when not required"}, {"k": "D", "t": "I value harmony and avoid unnecessary disagreement"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS6-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": true, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS6-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I set a demanding but achievable target and drive the team toward it when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS6-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}]}, {"code": "LS7", "name": "Service-Oriented Leadership", "altName": "", "sci": "Servant leadership (Greenleaf)", "behaviour": "Prioritising the team\\'s needs and", "competencies": "Service Orientation", "items": [{"id": "LS7-001", "type": "SJT", "stem": "You are working in the finance and accounts function. A junior accountant posts an entry that distorts a key management report. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound service-oriented leadership.", "options": [{"k": "A", "t": "Put the team\\'s needs first and remove the obstacles in their > way, then confirm that everyone involved understands the plan and > their part in it"}, {"k": "B", "t": "Delay any action until more information arrives, even though > time is critical"}, {"k": "C", "t": "Focus on identifying who is to blame rather than resolving the > situation"}, {"k": "D", "t": "Quietly compromise the relevant standard to protect the > immediate deadline"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": false}, {"id": "LS7-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I see my role as removing obstacles so my team can succeed"}, {"k": "B", "t": "I take pride in producing accurate, error-free work"}, {"k": "C", "t": "I am comfortable adapting when priorities change"}, {"k": "D", "t": "I make sure commitments I give are always honoured"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": false}, {"id": "LS7-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": true, "weight": 0.2, "perspective": "Attitude", "defaulted": false}, {"id": "LS7-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I put the team\\'s needs first and remove the obstacles in their way when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": false}, {"id": "LS7-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": false}]}, {"code": "LS8", "name": "Vision-Casting Leadership", "altName": "", "sci": "Transformational --- idealised", "behaviour": "Articulating a clear and compelling", "competencies": "Strategic Thinking", "items": [{"id": "LS8-001", "type": "SJT", "stem": "You are working in the commercial and sales function. A new market opportunity requires a rapid but rigorous commercial assessment. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound vision-casting leadership.", "options": [{"k": "A", "t": "Articulate a clear and compelling picture of where the work is > heading, then confirm that everyone involved understands the plan and > their part in it"}, {"k": "B", "t": "Focus on identifying who is to blame rather than resolving the > situation"}, {"k": "C", "t": "Quietly compromise the relevant standard to protect the > immediate deadline"}, {"k": "D", "t": "Do the minimum required and leave the underlying cause > unaddressed"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}, {"id": "LS8-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I paint a clear and compelling picture of where we are heading"}, {"k": "B", "t": "I am comfortable adapting when priorities change"}, {"k": "C", "t": "I make sure commitments I give are always honoured"}, {"k": "D", "t": "I enjoy helping colleagues work through their problems"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}, {"id": "LS8-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}, {"id": "LS8-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I articulate a clear and compelling picture of where the work is heading when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}, {"id": "LS8-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}]}, {"code": "LS9", "name": "Inspirational Influence", "altName": "", "sci": "Transformational --- inspirational", "behaviour": "Energising and motivating others,", "competencies": "Influence", "items": [{"id": "LS9-001", "type": "SJT", "stem": "You are working in a high-speed manufacturing line. A shift handover reveals that the previous crew left a machine running out of specification. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound inspirational influence.", "options": [{"k": "A", "t": "Energise the group and rebuild their confidence and commitment, > then confirm that everyone involved understands the plan and their > part in it"}, {"k": "B", "t": "Quietly compromise the relevant standard to protect the > immediate deadline"}, {"k": "C", "t": "Do the minimum required and leave the underlying cause > unaddressed"}, {"k": "D", "t": "Wait for explicit instructions rather than exercising judgement"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS9-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I can lift a discouraged team and rebuild their energy"}, {"k": "B", "t": "I make sure commitments I give are always honoured"}, {"k": "C", "t": "I enjoy helping colleagues work through their problems"}, {"k": "D", "t": "I prefer to plan my work carefully well in advance"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS9-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS9-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I energise the group and rebuild their confidence and commitment when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS9-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}]}, {"code": "LS10", "name": "Contingent Exchange", "altName": "", "sci": "Transactional leadership ---", "behaviour": "Making the link between effort and", "competencies": "Driving Results", "items": [{"id": "LS10-001", "type": "SJT", "stem": "You are working in the process engineering team. Two viable technical solutions divide the project team down the middle. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound contingent exchange.", "options": [{"k": "A", "t": "Make the link between effort and reward explicit and honour it, > then confirm that everyone involved understands the plan and their > part in it"}, {"k": "B", "t": "Do the minimum required and leave the underlying cause > unaddressed"}, {"k": "C", "t": "Wait for explicit instructions rather than exercising judgement"}, {"k": "D", "t": "Avoid the issue and hope it resolves itself before it escalates"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS10-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I make sure good performance is recognised and rewarded"}, {"k": "B", "t": "I enjoy helping colleagues work through their problems"}, {"k": "C", "t": "I prefer to plan my work carefully well in advance"}, {"k": "D", "t": "I stay composed when things around me go wrong"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS10-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS10-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I make the link between effort and reward explicit and honour it when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS10-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}]}, {"code": "LS-S1", "name": "Flexibility in Approach", "altName": "", "sci": "Situational leadership (Hersey &", "behaviour": "Adapting leadership style to the", "competencies": "Adaptability", "items": [{"id": "LS-S1-001", "type": "SJT", "stem": "You are working in the human resources function. An appraisal conversation must address a pattern of persistent underperformance. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound flexibility in approach.", "options": [{"k": "A", "t": "Adjust your approach to suit the person and the demands of the > situation, then confirm that everyone involved understands the plan > and their part in it"}, {"k": "B", "t": "Escalate immediately to senior management without first > attempting to resolve it"}, {"k": "C", "t": "Take complete personal control and exclude the people closest to > the work"}, {"k": "D", "t": "Delay any action until more information arrives, even though > time is critical"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS-S1-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I change my leadership style to suit the person and the > situation"}, {"k": "B", "t": "I prefer to plan my work carefully well in advance"}, {"k": "C", "t": "I stay composed when things around me go wrong"}, {"k": "D", "t": "I like learning new skills even when not required"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS-S1-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS-S1-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I adjust your approach to suit the person and the demands of the situation when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS-S1-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}]}, {"code": "LS-S2", "name": "Future Direction Communication", "altName": "", "sci": "Strategic leadership; vision", "behaviour": "Explaining where the work is", "competencies": "Strategic Thinking", "items": [{"id": "LS-S2-001", "type": "SJT", "stem": "You are working in the information technology function. A recurring support ticket points to a deeper system design flaw. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound future direction communication.", "options": [{"k": "A", "t": "Explain the future direction in terms each person can relate to, > then confirm that everyone involved understands the plan and their > part in it"}, {"k": "B", "t": "Take complete personal control and exclude the people closest to > the work"}, {"k": "C", "t": "Delay any action until more information arrives, even though > time is critical"}, {"k": "D", "t": "Focus on identifying who is to blame rather than resolving the > situation"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS-S2-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I make sure everyone understands where we are going and why"}, {"k": "B", "t": "I value harmony and avoid unnecessary disagreement"}, {"k": "C", "t": "I take pride in producing accurate, error-free work"}, {"k": "D", "t": "I am comfortable adapting when priorities change"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS-S2-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS-S2-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I explain the future direction in terms each person can relate to when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS-S2-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}]}, {"code": "LS-S3", "name": "Authority Distribution", "altName": "", "sci": "Empowerment; distributed leadership", "behaviour": "Sharing authority and decision", "competencies": "Leading People", "items": [{"id": "LS-S3-001", "type": "SJT", "stem": "You are working in the administration and facilities function. A travel and logistics arrangement must be reorganised at very short notice. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound authority distribution.", "options": [{"k": "A", "t": "Share authority and decision rights with the people best placed > to act, then confirm that everyone involved understands the plan and > their part in it"}, {"k": "B", "t": "Delay any action until more information arrives, even though > time is critical"}, {"k": "C", "t": "Focus on identifying who is to blame rather than resolving the > situation"}, {"k": "D", "t": "Quietly compromise the relevant standard to protect the > immediate deadline"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS-S3-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I give people real authority over decisions in their area"}, {"k": "B", "t": "I take pride in producing accurate, error-free work"}, {"k": "C", "t": "I am comfortable adapting when priorities change"}, {"k": "D", "t": "I make sure commitments I give are always honoured"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS-S3-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": true, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS-S3-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I share authority and decision rights with the people best placed to act when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS-S3-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}]}, {"code": "LS-S4", "name": "Decisiveness Under Pressure", "altName": "", "sci": "Decision-making under uncertainty;", "behaviour": "Making a timely, confident decision", "competencies": "Decision Making", "items": [{"id": "LS-S4-001", "type": "SJT", "stem": "You are working in the plant maintenance function. Spare parts for an ageing compressor are on a long and uncertain lead time. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound decisiveness under pressure.", "options": [{"k": "A", "t": "Make a timely, confident decision even when information is > incomplete, then confirm that everyone involved understands the plan > and their part in it"}, {"k": "B", "t": "Focus on identifying who is to blame rather than resolving the > situation"}, {"k": "C", "t": "Quietly compromise the relevant standard to protect the > immediate deadline"}, {"k": "D", "t": "Do the minimum required and leave the underlying cause > unaddressed"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour under Pressure", "defaulted": false}, {"id": "LS-S4-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I make confident decisions quickly even when information is > incomplete"}, {"k": "B", "t": "I am comfortable adapting when priorities change"}, {"k": "C", "t": "I make sure commitments I give are always honoured"}, {"k": "D", "t": "I enjoy helping colleagues work through their problems"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour under Pressure", "defaulted": false}, {"id": "LS-S4-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": true, "weight": 0.2, "perspective": "Behaviour under Pressure", "defaulted": false}, {"id": "LS-S4-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I make a timely, confident decision even when information is incomplete when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour under Pressure", "defaulted": false}, {"id": "LS-S4-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour under Pressure", "defaulted": false}]}, {"code": "LS-S5", "name": "Responsibility Ownership", "altName": "", "sci": "Accountability; internal locus of", "behaviour": "Owning outcomes fully without", "competencies": "Accountability", "items": [{"id": "LS-S5-001", "type": "SJT", "stem": "You are working in the quality assurance laboratory and floor. A non-conformance is found but production is pressing to ship against a deadline. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound responsibility ownership.", "options": [{"k": "A", "t": "Own the outcome fully without deflecting blame onto others or > circumstances, then confirm that everyone involved understands the > plan and their part in it"}, {"k": "B", "t": "Quietly compromise the relevant standard to protect the > immediate deadline"}, {"k": "C", "t": "Do the minimum required and leave the underlying cause > unaddressed"}, {"k": "D", "t": "Wait for explicit instructions rather than exercising judgement"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": false}, {"id": "LS-S5-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I own the outcome fully even when things go wrong"}, {"k": "B", "t": "I make sure commitments I give are always honoured"}, {"k": "C", "t": "I enjoy helping colleagues work through their problems"}, {"k": "D", "t": "I prefer to plan my work carefully well in advance"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": false}, {"id": "LS-S5-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": true, "weight": 0.2, "perspective": "Attitude", "defaulted": false}, {"id": "LS-S5-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I own the outcome fully without deflecting blame onto others or circumstances when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": false}, {"id": "LS-S5-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": false}]}, {"code": "LS-S6", "name": "Emotional Intelligence", "altName": "", "sci": "Emotional intelligence (Salovey &", "behaviour": "Recognising and managing emotions", "competencies": "Leading People", "items": [{"id": "LS-S6-001", "type": "SJT", "stem": "You are working in the finance and accounts function. A capital expenditure request needs rigorous scrutiny before it can be approved. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound emotional intelligence.", "options": [{"k": "A", "t": "Read the emotional state of those involved and manage your own > response, then confirm that everyone involved understands the plan and > their part in it"}, {"k": "B", "t": "Avoid the issue and hope it resolves itself before it escalates"}, {"k": "C", "t": "Escalate immediately to senior management without first > attempting to resolve it"}, {"k": "D", "t": "Take complete personal control and exclude the people closest to > the work"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Self-Regulation", "defaulted": false}, {"id": "LS-S6-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I notice how people are feeling and adjust how I respond to them"}, {"k": "B", "t": "I enjoy helping colleagues work through their problems"}, {"k": "C", "t": "I prefer to plan my work carefully well in advance"}, {"k": "D", "t": "I stay composed when things around me go wrong"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Self-Regulation", "defaulted": false}, {"id": "LS-S6-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": true, "weight": 0.2, "perspective": "Self-Regulation", "defaulted": false}, {"id": "LS-S6-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I read the emotional state of those involved and manage your own response when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Self-Regulation", "defaulted": false}, {"id": "LS-S6-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Self-Regulation", "defaulted": false}]}, {"code": "LS-S7", "name": "Interpersonal Boundaries", "altName": "", "sci": "Role clarity; assertiveness;", "behaviour": "Maintaining a clear professional", "competencies": "Integrity", "items": [{"id": "LS-S7-001", "type": "SJT", "stem": "You are working in the commercial and sales function. A customer is demanding a concession that falls outside the agreed contract. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound interpersonal boundaries.", "options": [{"k": "A", "t": "Maintain a clear professional boundary while remaining fair and > approachable, then confirm that everyone involved understands the plan > and their part in it"}, {"k": "B", "t": "Escalate immediately to senior management without first > attempting to resolve it"}, {"k": "C", "t": "Take complete personal control and exclude the people closest to > the work"}, {"k": "D", "t": "Delay any action until more information arrives, even though > time is critical"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}, {"id": "LS-S7-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I keep a clear professional boundary while staying fair and > approachable"}, {"k": "B", "t": "I like learning new skills even when not required"}, {"k": "C", "t": "I value harmony and avoid unnecessary disagreement"}, {"k": "D", "t": "I take pride in producing accurate, error-free work"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}, {"id": "LS-S7-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": true, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}, {"id": "LS-S7-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I maintain a clear professional boundary while remaining fair and approachable when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}, {"id": "LS-S7-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}]}, {"code": "LS-S8", "name": "Innovation Facilitation", "altName": "", "sci": "Innovative leadership;", "behaviour": "Creating the safety and", "competencies": "Innovation", "items": [{"id": "LS-S8-001", "type": "SJT", "stem": "You are working in a high-speed manufacturing line. A recurring micro-stoppage on filler three is quietly eroding output across the shift. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound innovation facilitation.", "options": [{"k": "A", "t": "Create the safety and encouragement for others to try new ideas, > then confirm that everyone involved understands the plan and their > part in it"}, {"k": "B", "t": "Take complete personal control and exclude the people closest to > the work"}, {"k": "C", "t": "Delay any action until more information arrives, even though > time is critical"}, {"k": "D", "t": "Focus on identifying who is to blame rather than resolving the > situation"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS-S8-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I encourage people to try new ideas even if they might fail"}, {"k": "B", "t": "I value harmony and avoid unnecessary disagreement"}, {"k": "C", "t": "I take pride in producing accurate, error-free work"}, {"k": "D", "t": "I am comfortable adapting when priorities change"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS-S8-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS-S8-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I create the safety and encouragement for others to try new ideas when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "LS-S8-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}]}, {"code": "CR1", "name": "Competitive Assertion", "altName": "", "sci": "Thomas--Kilmann --- competing /", "behaviour": "Asserting your position firmly to", "competencies": "Influence", "items": [{"id": "CR1-001", "type": "SJT", "stem": "You are working in the process engineering team. A late specification change from the customer forces a redesign mid-project. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound competitive assertion.", "options": [{"k": "A", "t": "Assert your position firmly and push for the outcome you believe > is right, then confirm that everyone involved understands the plan and > their part in it"}, {"k": "B", "t": "Delay any action until more information arrives, even though > time is critical"}, {"k": "C", "t": "Focus on identifying who is to blame rather than resolving the > situation"}, {"k": "D", "t": "Quietly compromise the relevant standard to protect the > immediate deadline"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour under Pressure", "defaulted": false}, {"id": "CR1-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I stand my ground firmly when I believe I am right"}, {"k": "B", "t": "I take pride in producing accurate, error-free work"}, {"k": "C", "t": "I am comfortable adapting when priorities change"}, {"k": "D", "t": "I make sure commitments I give are always honoured"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour under Pressure", "defaulted": false}, {"id": "CR1-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour under Pressure", "defaulted": false}, {"id": "CR1-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I assert your position firmly and push for the outcome you believe is right when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour under Pressure", "defaulted": false}, {"id": "CR1-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour under Pressure", "defaulted": false}]}, {"code": "CR2", "name": "Collaborative Problem-Solving", "altName": "", "sci": "Thomas--Kilmann --- collaborating;", "behaviour": "Working jointly toward a solution", "competencies": "Collaboration", "items": [{"id": "CR2-001", "type": "SJT", "stem": "You are working in the warehouse and dispatch operation. A forklift driver notices damaged pallets that others are prepared to ship anyway. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound collaborative problem-solving.", "options": [{"k": "A", "t": "Work with the other party to find a solution that genuinely > meets both sides\\' needs, then confirm that everyone involved > understands the plan and their part in it"}, {"k": "B", "t": "Focus on identifying who is to blame rather than resolving the > situation"}, {"k": "C", "t": "Quietly compromise the relevant standard to protect the > immediate deadline"}, {"k": "D", "t": "Do the minimum required and leave the underlying cause > unaddressed"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}, {"id": "CR2-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I work to find a solution that genuinely satisfies everyone > involved"}, {"k": "B", "t": "I am comfortable adapting when priorities change"}, {"k": "C", "t": "I make sure commitments I give are always honoured"}, {"k": "D", "t": "I enjoy helping colleagues work through their problems"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}, {"id": "CR2-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}, {"id": "CR2-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I work with the other party to find a solution that genuinely meets both sides\\' needs when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}, {"id": "CR2-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}]}, {"code": "CR3", "name": "Compromise Negotiation", "altName": "", "sci": "Thomas--Kilmann --- compromising", "behaviour": "Finding a workable middle ground", "competencies": "Collaboration", "items": [{"id": "CR3-001", "type": "SJT", "stem": "You are working in the information technology function. A cybersecurity alert suggests a possible phishing breach inside the network. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound compromise negotiation.", "options": [{"k": "A", "t": "Find a workable middle ground that both sides can accept, then > confirm that everyone involved understands the plan and their part in > it"}, {"k": "B", "t": "Wait for explicit instructions rather than exercising judgement"}, {"k": "C", "t": "Avoid the issue and hope it resolves itself before it escalates"}, {"k": "D", "t": "Escalate immediately to senior management without first > attempting to resolve it"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}, {"id": "CR3-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I look for a middle ground both sides can live with"}, {"k": "B", "t": "I make sure commitments I give are always honoured"}, {"k": "C", "t": "I enjoy helping colleagues work through their problems"}, {"k": "D", "t": "I prefer to plan my work carefully well in advance"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}, {"id": "CR3-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}, {"id": "CR3-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I find a workable middle ground that both sides can accept when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}, {"id": "CR3-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}]}, {"code": "CR4", "name": "Conflict Avoidance", "altName": "", "sci": "Thomas--Kilmann --- avoiding", "behaviour": "Withdrawing from or sidestepping", "competencies": "Self-Management", "items": [{"id": "CR4-001", "type": "SJT", "stem": "You are working in the administration and facilities function. A facilities failure is disrupting several departments at the same time. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound conflict avoidance.", "options": [{"k": "A", "t": "Step back from a disagreement to let tempers cool or because the > issue is not worth pursuing, then confirm that everyone involved > understands the plan and their part in it"}, {"k": "B", "t": "Avoid the issue and hope it resolves itself before it escalates"}, {"k": "C", "t": "Escalate immediately to senior management without first > attempting to resolve it"}, {"k": "D", "t": "Take complete personal control and exclude the people closest to > the work"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "CR4-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I often prefer to sidestep a disagreement rather than confront > it"}, {"k": "B", "t": "I stay composed when things around me go wrong"}, {"k": "C", "t": "I like learning new skills even when not required"}, {"k": "D", "t": "I value harmony and avoid unnecessary disagreement"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "CR4-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "CR4-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I step back from a disagreement to let tempers cool or because the issue is not worth pursuing when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "CR4-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}]}, {"code": "CR5", "name": "Accommodating Conciliation", "altName": "", "sci": "Thomas--Kilmann --- accommodating /", "behaviour": "Yielding your own position to", "competencies": "Collaboration", "items": [{"id": "CR5-001", "type": "SJT", "stem": "You are working in the plant maintenance function. The preventive maintenance schedule is slipping because of repeated breakdown callouts. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound accommodating conciliation.", "options": [{"k": "A", "t": "Yield your own position to preserve the relationship and > goodwill, then confirm that everyone involved understands the plan and > their part in it"}, {"k": "B", "t": "Escalate immediately to senior management without first > attempting to resolve it"}, {"k": "C", "t": "Take complete personal control and exclude the people closest to > the work"}, {"k": "D", "t": "Delay any action until more information arrives, even though > time is critical"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}, {"id": "CR5-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I will often give way to preserve a good working relationship"}, {"k": "B", "t": "I like learning new skills even when not required"}, {"k": "C", "t": "I value harmony and avoid unnecessary disagreement"}, {"k": "D", "t": "I take pride in producing accurate, error-free work"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}, {"id": "CR5-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": true, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}, {"id": "CR5-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I yield your own position to preserve the relationship and goodwill when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}, {"id": "CR5-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}]}, {"code": "CR-S1", "name": "Conflict Anticipation", "altName": "", "sci": "Proactive conflict management;", "behaviour": "Spotting and addressing conflict", "competencies": "Collaboration", "items": [{"id": "CR-S1-001", "type": "SJT", "stem": "You are working in the quality assurance laboratory and floor. A customer complaint alleges a defect that internal records do not confirm. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound conflict anticipation.", "options": [{"k": "A", "t": "Spot the early signs of conflict and address them before they > escalate, then confirm that everyone involved understands the plan and > their part in it"}, {"k": "B", "t": "Take complete personal control and exclude the people closest to > the work"}, {"k": "C", "t": "Delay any action until more information arrives, even though > time is critical"}, {"k": "D", "t": "Focus on identifying who is to blame rather than resolving the > situation"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "CR-S1-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I notice tension early and deal with it before it blows up"}, {"k": "B", "t": "I value harmony and avoid unnecessary disagreement"}, {"k": "C", "t": "I take pride in producing accurate, error-free work"}, {"k": "D", "t": "I am comfortable adapting when priorities change"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "CR-S1-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": true, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "CR-S1-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I spot the early signs of conflict and address them before they escalate when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "CR-S1-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}]}, {"code": "CR-S2", "name": "Tension De-escalation", "altName": "", "sci": "Emotional regulation; de-escalation", "behaviour": "Lowering the emotional temperature", "competencies": "Self-Management", "items": [{"id": "CR-S2-001", "type": "SJT", "stem": "You are working in the production planning office. A material shortage threatens the next day\\'s production plan. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound tension de-escalation.", "options": [{"k": "A", "t": "Lower the emotional temperature and steady the people involved, > then confirm that everyone involved understands the plan and their > part in it"}, {"k": "B", "t": "Delay any action until more information arrives, even though > time is critical"}, {"k": "C", "t": "Focus on identifying who is to blame rather than resolving the > situation"}, {"k": "D", "t": "Quietly compromise the relevant standard to protect the > immediate deadline"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Self-Regulation", "defaulted": false}, {"id": "CR-S2-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I can calm a heated situation and steady the people involved"}, {"k": "B", "t": "I take pride in producing accurate, error-free work"}, {"k": "C", "t": "I am comfortable adapting when priorities change"}, {"k": "D", "t": "I make sure commitments I give are always honoured"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Self-Regulation", "defaulted": false}, {"id": "CR-S2-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": true, "weight": 0.2, "perspective": "Self-Regulation", "defaulted": false}, {"id": "CR-S2-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I lower the emotional temperature and steady the people involved when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Self-Regulation", "defaulted": false}, {"id": "CR-S2-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Self-Regulation", "defaulted": false}]}, {"code": "CR-S3", "name": "Interest-Based Dialogue", "altName": "", "sci": "Principled negotiation (Fisher &", "behaviour": "Exploring the underlying interests", "competencies": "Influence", "items": [{"id": "CR-S3-001", "type": "SJT", "stem": "You are working in the commercial and sales function. A key customer is openly threatening to move their business to a competitor. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound interest-based dialogue.", "options": [{"k": "A", "t": "Explore the underlying interests behind each side\\'s stated > position, then confirm that everyone involved understands the plan and > their part in it"}, {"k": "B", "t": "Do the minimum required and leave the underlying cause > unaddressed"}, {"k": "C", "t": "Wait for explicit instructions rather than exercising judgement"}, {"k": "D", "t": "Avoid the issue and hope it resolves itself before it escalates"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}, {"id": "CR-S3-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I ask what each side really needs beneath their stated position"}, {"k": "B", "t": "I am comfortable adapting when priorities change"}, {"k": "C", "t": "I make sure commitments I give are always honoured"}, {"k": "D", "t": "I enjoy helping colleagues work through their problems"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}, {"id": "CR-S3-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": true, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}, {"id": "CR-S3-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I explore the underlying interests behind each side\\'s stated position when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}, {"id": "CR-S3-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}]}, {"code": "CR-S4", "name": "Relationship Restoration", "altName": "", "sci": "Trust repair; reconciliation", "behaviour": "Rebuilding trust and repairing the", "competencies": "Collaboration", "items": [{"id": "CR-S4-001", "type": "SJT", "stem": "You are working in a high-speed manufacturing line. A packing line is running 15% behind the shift target with the dispatch cut-off two hours away. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound relationship restoration.", "options": [{"k": "A", "t": "Rebuild trust and restore the working relationship after the > disagreement, then confirm that everyone involved understands the plan > and their part in it"}, {"k": "B", "t": "Wait for explicit instructions rather than exercising judgement"}, {"k": "C", "t": "Avoid the issue and hope it resolves itself before it escalates"}, {"k": "D", "t": "Escalate immediately to senior management without first > attempting to resolve it"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "CR-S4-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I make a point of repairing the relationship after a > disagreement"}, {"k": "B", "t": "I prefer to plan my work carefully well in advance"}, {"k": "C", "t": "I stay composed when things around me go wrong"}, {"k": "D", "t": "I like learning new skills even when not required"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "CR-S4-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": true, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "CR-S4-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I rebuild trust and restore the working relationship after the disagreement when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "CR-S4-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}]}, {"code": "CR-S5", "name": "Cultural Sensitivity", "altName": "", "sci": "Cross-cultural competence", "behaviour": "Adapting how conflict is handled to", "competencies": "Collaboration", "items": [{"id": "CR-S5-001", "type": "SJT", "stem": "You are working in the process engineering team. A capital project trial is producing inconsistent results against the design intent. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound cultural sensitivity.", "options": [{"k": "A", "t": "Adapt how you handle the disagreement to respect cultural > differences, then confirm that everyone involved understands the plan > and their part in it"}, {"k": "B", "t": "Avoid the issue and hope it resolves itself before it escalates"}, {"k": "C", "t": "Escalate immediately to senior management without first > attempting to resolve it"}, {"k": "D", "t": "Take complete personal control and exclude the people closest to > the work"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}, {"id": "CR-S5-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I adapt how I handle disagreement to respect cultural > differences"}, {"k": "B", "t": "I stay composed when things around me go wrong"}, {"k": "C", "t": "I like learning new skills even when not required"}, {"k": "D", "t": "I value harmony and avoid unnecessary disagreement"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}, {"id": "CR-S5-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}, {"id": "CR-S5-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I adapt how you handle the disagreement to respect cultural differences when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}, {"id": "CR-S5-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": false}]}, {"code": "CR-S6", "name": "Systemic Conflict Prevention", "altName": "", "sci": "Systems thinking; structural", "behaviour": "Identifying and removing the", "competencies": "Strategic Thinking", "items": [{"id": "CR-S6-001", "type": "SJT", "stem": "You are working in the warehouse and dispatch operation. A cycle count reveals a significant stock discrepancy against the system. As the person accountable for the outcome, you must decide how to respond in a way that reflects sound systemic conflict prevention.", "options": [{"k": "A", "t": "Identify and remove the structural cause that keeps producing > conflict, then confirm that everyone involved understands the plan and > their part in it"}, {"k": "B", "t": "Escalate immediately to senior management without first > attempting to resolve it"}, {"k": "C", "t": "Take complete personal control and exclude the people closest to > the work"}, {"k": "D", "t": "Delay any action until more information arrives, even though > time is critical"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}, {"id": "CR-S6-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I look for the structural cause that keeps producing the same > conflict"}, {"k": "B", "t": "I like learning new skills even when not required"}, {"k": "C", "t": "I value harmony and avoid unnecessary disagreement"}, {"k": "D", "t": "I take pride in producing accurate, error-free work"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}, {"id": "CR-S6-003", "type": "RCL", "stem": "Indicate how much you agree. (1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree)", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}, {"id": "CR-S6-004", "type": "BFS", "stem": "How often does the following describe you? \\\"I identify and remove the structural cause that keeps producing conflict when the situation calls for it.\\\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}, {"id": "CR-S6-005", "type": "RNK", "stem": "Rank the following priorities from 1 (highest) to 4 (lowest) for this situation.", "options": [{"k": "A", "t": "Restore the immediate operational target"}, {"k": "B", "t": "> Protect quality and compliance standards"}, {"k": "C", "t": "> Preserve team relationships and morale"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": false}]}, {"code": "P1", "name": "Extraversion", "altName": "", "sci": "Big Five Extraversion; Cattell 16PF", "behaviour": "The tendency to seek, enjoy and", "competencies": "", "items": [{"id": "P1-001", "type": "SJT", "stem": "A situation at work where i gravitate toward colleagues during breaks rather than sitting alone. Which response is MOST effective?", "options": [{"k": "A", "t": "The tendency to seek, enjoy and, then confirm everyone understands"}, {"k": "B", "t": "Delay action until more information arrives"}, {"k": "C", "t": "Focus on blame rather than resolving the situation"}, {"k": "D", "t": "Compromise the standard to protect the deadline"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": true}, {"id": "P1-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I feel more energised after a busy collaborative day than a quiet one"}, {"k": "B", "t": "I like learning new skills even when not required"}, {"k": "C", "t": "I value harmony and avoid unnecessary disagreement"}, {"k": "D", "t": "I take pride in producing accurate, error-free work"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": true}, {"id": "P1-003", "type": "RCL", "stem": "I start conversations with people I have not worked with before", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P1-004", "type": "BFS", "stem": "How often does the following describe you: \"I feel at ease walking into a room full of unfamiliar people\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P1-005", "type": "RNK", "stem": "Rank the following behaviours from MOST like you (1) to LEAST like you (4).", "options": [{"k": "A", "t": "I gravitate toward colleagues during breaks rather than sitting alone"}, {"k": "B", "t": "I feel more energised after a busy collaborative day than a quiet one"}, {"k": "C", "t": "I join group discussions rather than Participation listening silently"}, {"k": "D", "t": "I think out loud when working through a Engagement problem"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": true}]}, {"code": "P2", "name": "Social Initiative", "altName": "", "sci": "Big Five Extraversion", "behaviour": "The tendency to take the first step", "competencies": "", "items": [{"id": "P2-001", "type": "SJT", "stem": "A situation at work where i am usually the one who says hello first contact. Which response is MOST effective?", "options": [{"k": "A", "t": "The tendency to take the first step, then confirm everyone understands"}, {"k": "B", "t": "Delay action until more information arrives"}, {"k": "C", "t": "Focus on blame rather than resolving the situation"}, {"k": "D", "t": "Compromise the standard to protect the deadline"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": true}, {"id": "P2-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I open meetings by getting people talking Conversations"}, {"k": "B", "t": "I like learning new skills even when not required"}, {"k": "C", "t": "I value harmony and avoid unnecessary disagreement"}, {"k": "D", "t": "I take pride in producing accurate, error-free work"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": true}, {"id": "P2-003", "type": "RCL", "stem": "I approach a new starter before they have to Contact approach me", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P2-004", "type": "BFS", "stem": "How often does the following describe you: \"I make the first call when a matter needs Contact discussing\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P2-005", "type": "RNK", "stem": "Rank the following behaviours from MOST like you (1) to LEAST like you (4).", "options": [{"k": "A", "t": "I am usually the one who says hello first Contact"}, {"k": "B", "t": "I open meetings by getting people talking Conversations"}, {"k": "C", "t": "I find a way to put a nervous new colleague Ice at ease"}, {"k": "D", "t": "I check in on a colleague before they have Outreach to ask for help"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": true}]}, {"code": "P3", "name": "Communication Style", "altName": "", "sci": "Communication competence theory;", "behaviour": "The tendency to express ideas", "competencies": "", "items": [{"id": "P3-001", "type": "SJT", "stem": "A situation at work where i explain technical points so a non-specialist can follow them. Which response is MOST effective?", "options": [{"k": "A", "t": "The tendency to express ideas, then confirm everyone understands"}, {"k": "B", "t": "Delay action until more information arrives"}, {"k": "C", "t": "Focus on blame rather than resolving the situation"}, {"k": "D", "t": "Compromise the standard to protect the deadline"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": true}, {"id": "P3-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I let people finish before I respond Listening"}, {"k": "B", "t": "I like learning new skills even when not required"}, {"k": "C", "t": "I value harmony and avoid unnecessary disagreement"}, {"k": "D", "t": "I take pride in producing accurate, error-free work"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": true}, {"id": "P3-003", "type": "RCL", "stem": "I get my meaning across without needing to repeat myself", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P3-004", "type": "BFS", "stem": "How often does the following describe you: \"I strip jargon out when the listener would not know it\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P3-005", "type": "RNK", "stem": "Rank the following behaviours from MOST like you (1) to LEAST like you (4).", "options": [{"k": "A", "t": "I explain technical points so a non-specialist can follow them"}, {"k": "B", "t": "I let people finish before I respond Listening"}, {"k": "C", "t": "I present the same idea differently to an Adaptation operator and a manager"}, {"k": "D", "t": "I make my point without unnecessary detail"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": true}]}, {"code": "P4", "name": "Assertiveness", "altName": "", "sci": "Big Five assertiveness; Cattell", "behaviour": "The tendency to state one\\'s view", "competencies": "", "items": [{"id": "P4-001", "type": "SJT", "stem": "A situation at work where i say what i think even when it is not the popular view. Which response is MOST effective?", "options": [{"k": "A", "t": "The tendency to state one\\'s view, then confirm everyone understands"}, {"k": "B", "t": "Delay action until more information arrives"}, {"k": "C", "t": "Focus on blame rather than resolving the situation"}, {"k": "D", "t": "Compromise the standard to protect the deadline"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": true}, {"id": "P4-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I stand by a well-reasoned position when it is challenged"}, {"k": "B", "t": "I like learning new skills even when not required"}, {"k": "C", "t": "I value harmony and avoid unnecessary disagreement"}, {"k": "D", "t": "I take pride in producing accurate, error-free work"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": true}, {"id": "P4-003", "type": "RCL", "stem": "I give a clear opinion rather than sitting on the fence", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P4-004", "type": "BFS", "stem": "How often does the following describe you: \"I put forward my recommendation with reasons\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P4-005", "type": "RNK", "stem": "Rank the following behaviours from MOST like you (1) to LEAST like you (4).", "options": [{"k": "A", "t": "I say what I think even when it is not the popular view"}, {"k": "B", "t": "I stand by a well-reasoned position when it is challenged"}, {"k": "C", "t": "I decline a request I cannot properly fulfil rather than over-committing"}, {"k": "D", "t": "I question a senior decision I believe is Upward wrong"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": true}]}, {"code": "P5", "name": "Enthusiasm", "altName": "", "sci": "Big Five positive emotionality;", "behaviour": "The tendency to bring visible", "competencies": "", "items": [{"id": "P5-001", "type": "SJT", "stem": "A situation at work where draining it. Which response is MOST effective?", "options": [{"k": "A", "t": "The tendency to bring visible, then confirm everyone understands"}, {"k": "B", "t": "Delay action until more information arrives"}, {"k": "C", "t": "Focus on blame rather than resolving the situation"}, {"k": "D", "t": "Compromise the standard to protect the deadline"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": true}, {"id": "P5-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I treat a setback as temporary rather than permanent"}, {"k": "B", "t": "I like learning new skills even when not required"}, {"k": "C", "t": "I value harmony and avoid unnecessary disagreement"}, {"k": "D", "t": "I take pride in producing accurate, error-free work"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": true}, {"id": "P5-003", "type": "RCL", "stem": "only what can go wrong", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P5-004", "type": "BFS", "stem": "How often does the following describe you: \"than reluctance\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P5-005", "type": "RNK", "stem": "Rank the following behaviours from MOST like you (1) to LEAST like you (4).", "options": [{"k": "A", "t": "draining it"}, {"k": "B", "t": "only what can go wrong"}, {"k": "C", "t": "than reluctance"}, {"k": "D", "t": "I expect a problem to be solvable even when it looks difficult"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": true}]}, {"code": "P6", "name": "Independence", "altName": "", "sci": "Autonomy research; Cattell 16PF", "behaviour": "The tendency to form and act on", "competencies": "", "items": [{"id": "P6-001", "type": "SJT", "stem": "A situation at work where i work out what needs doing without waiting to be told. Which response is MOST effective?", "options": [{"k": "A", "t": "The tendency to form and act on, then confirm everyone understands"}, {"k": "B", "t": "Delay action until more information arrives"}, {"k": "C", "t": "Focus on blame rather than resolving the situation"}, {"k": "D", "t": "Compromise the standard to protect the deadline"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": true}, {"id": "P6-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I form my own view before asking what others Judgement think"}, {"k": "B", "t": "I like learning new skills even when not required"}, {"k": "C", "t": "I value harmony and avoid unnecessary disagreement"}, {"k": "D", "t": "I take pride in producing accurate, error-free work"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": true}, {"id": "P6-003", "type": "RCL", "stem": "I set my own priorities for the day within my remit", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P6-004", "type": "BFS", "stem": "How often does the following describe you: \"I organise my own approach to a task rather than asking how\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P6-005", "type": "RNK", "stem": "Rank the following behaviours from MOST like you (1) to LEAST like you (4).", "options": [{"k": "A", "t": "I work out what needs doing without waiting to be told"}, {"k": "B", "t": "I form my own view before asking what others Judgement think"}, {"k": "C", "t": "I am content working on my own for long Alone stretches"}, {"k": "D", "t": "I hold myself to a standard regardless of who is watching"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": true}]}, {"code": "P7", "name": "Non-Conformity", "altName": "", "sci": "Big Five Openness", "behaviour": "The tendency to question the", "competencies": "", "items": [{"id": "P7-001", "type": "SJT", "stem": "A situation at work where i ask why we do it this way rather than convention simply accepting it. Which response is MOST effective?", "options": [{"k": "A", "t": "The tendency to question the, then confirm everyone understands"}, {"k": "B", "t": "Delay action until more information arrives"}, {"k": "C", "t": "Focus on blame rather than resolving the situation"}, {"k": "D", "t": "Compromise the standard to protect the deadline"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": true}, {"id": "P7-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I come up with ideas that differ from the Thinking standard approach"}, {"k": "B", "t": "I like learning new skills even when not required"}, {"k": "C", "t": "I value harmony and avoid unnecessary disagreement"}, {"k": "D", "t": "I take pride in producing accurate, error-free work"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": true}, {"id": "P7-003", "type": "RCL", "stem": "I question a long-standing practice that no Convention longer makes sense", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P7-004", "type": "BFS", "stem": "How often does the following describe you: \"I challenge the assumption that the usual Convention method is the best one\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P7-005", "type": "RNK", "stem": "Rank the following behaviours from MOST like you (1) to LEAST like you (4).", "options": [{"k": "A", "t": "I ask why we do it this way rather than Convention simply accepting it"}, {"k": "B", "t": "I come up with ideas that differ from the Thinking standard approach"}, {"k": "C", "t": "out of habit"}, {"k": "D", "t": "with tradition"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": true}]}, {"code": "P8", "name": "Self-Sufficiency", "altName": "", "sci": "Self-reliance research; Cattell", "behaviour": "The tendency to work through", "competencies": "", "items": [{"id": "P8-001", "type": "SJT", "stem": "A situation at work where i try to work a problem out myself before asking for help. Which response is MOST effective?", "options": [{"k": "A", "t": "The tendency to work through, then confirm everyone understands"}, {"k": "B", "t": "Delay action until more information arrives"}, {"k": "C", "t": "Focus on blame rather than resolving the situation"}, {"k": "D", "t": "Compromise the standard to protect the deadline"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": true}, {"id": "P8-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I find a way with the tools and materials available"}, {"k": "B", "t": "I like learning new skills even when not required"}, {"k": "C", "t": "I value harmony and avoid unnecessary disagreement"}, {"k": "D", "t": "I take pride in producing accurate, error-free work"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": true}, {"id": "P8-003", "type": "RCL", "stem": "I exhaust my own ideas before escalating an issue", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P8-004", "type": "BFS", "stem": "How often does the following describe you: \"I figure out a fault on my own when I can\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P8-005", "type": "RNK", "stem": "Rank the following behaviours from MOST like you (1) to LEAST like you (4).", "options": [{"k": "A", "t": "I try to work a problem out myself before asking for help"}, {"k": "B", "t": "I find a way with the tools and materials available"}, {"k": "C", "t": "I rely on my own skills rather than leaning on others"}, {"k": "D", "t": "I get on with my work without needing to be Supervision Need checked on"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": true}]}, {"code": "P9", "name": "Accountability", "altName": "", "sci": "Big Five Conscientiousness", "behaviour": "The tendency to follow through on", "competencies": "", "items": [{"id": "P9-001", "type": "SJT", "stem": "A situation at work where i finish what i commit to even when it becomes tedious. Which response is MOST effective?", "options": [{"k": "A", "t": "The tendency to follow through on, then confirm everyone understands"}, {"k": "B", "t": "Delay action until more information arrives"}, {"k": "C", "t": "Focus on blame rather than resolving the situation"}, {"k": "D", "t": "Compromise the standard to protect the deadline"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": true}, {"id": "P9-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I own up to a mistake rather than covering it over"}, {"k": "B", "t": "I like learning new skills even when not required"}, {"k": "C", "t": "I value harmony and avoid unnecessary disagreement"}, {"k": "D", "t": "I take pride in producing accurate, error-free work"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": true}, {"id": "P9-003", "type": "RCL", "stem": "I see a task through to the end rather than leaving it half done", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P9-004", "type": "BFS", "stem": "How often does the following describe you: \"I close out the loose ends of a job before moving on\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P9-005", "type": "RNK", "stem": "Rank the following behaviours from MOST like you (1) to LEAST like you (4).", "options": [{"k": "A", "t": "I finish what I commit to even when it becomes tedious"}, {"k": "B", "t": "I own up to a mistake rather than covering it over"}, {"k": "C", "t": "I treat a commitment as binding once I have Commitments given it"}, {"k": "D", "t": "I accept the consequences of a decision I Consequences made"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": true}]}, {"code": "P10", "name": "Analytical Thinking", "altName": "", "sci": "Big Five Intellect (analytical", "behaviour": "The tendency to break problems", "competencies": "", "items": [{"id": "P10-001", "type": "SJT", "stem": "A situation at work where i look at the data before forming a view examination. Which response is MOST effective?", "options": [{"k": "A", "t": "The tendency to break problems, then confirm everyone understands"}, {"k": "B", "t": "Delay action until more information arrives"}, {"k": "C", "t": "Focus on blame rather than resolving the situation"}, {"k": "D", "t": "Compromise the standard to protect the deadline"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": true}, {"id": "P10-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I break a complex problem into smaller, Decomposition manageable parts"}, {"k": "B", "t": "I like learning new skills even when not required"}, {"k": "C", "t": "I value harmony and avoid unnecessary disagreement"}, {"k": "D", "t": "I take pride in producing accurate, error-free work"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": true}, {"id": "P10-003", "type": "RCL", "stem": "I check the figures rather than relying on Examination impression", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P10-004", "type": "BFS", "stem": "How often does the following describe you: \"I review the records to understand what is Examination really happening\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P10-005", "type": "RNK", "stem": "Rank the following behaviours from MOST like you (1) to LEAST like you (4).", "options": [{"k": "A", "t": "I look at the data before forming a view Examination"}, {"k": "B", "t": "I break a complex problem into smaller, Decomposition manageable parts"}, {"k": "C", "t": "I keep asking why until I reach the Analysis underlying cause"}, {"k": "D", "t": "I weigh conflicting evidence before deciding Weighing"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": true}]}, {"code": "P11", "name": "Abstract Thinking", "altName": "", "sci": "Big Five Intellect (abstract", "behaviour": "The tendency to think beyond the", "competencies": "", "items": [{"id": "P11-001", "type": "SJT", "stem": "A situation at work where i grasp the underlying concept behind a set of facts. Which response is MOST effective?", "options": [{"k": "A", "t": "The tendency to think beyond the, then confirm everyone understands"}, {"k": "B", "t": "Delay action until more information arrives"}, {"k": "C", "t": "Focus on blame rather than resolving the situation"}, {"k": "D", "t": "Compromise the standard to protect the deadline"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": true}, {"id": "P11-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "the rest of the plant"}, {"k": "B", "t": "I like learning new skills even when not required"}, {"k": "C", "t": "I value harmony and avoid unnecessary disagreement"}, {"k": "D", "t": "I take pride in producing accurate, error-free work"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": true}, {"id": "P11-003", "type": "RCL", "stem": "I think in terms of principles rather than only instances", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P11-004", "type": "BFS", "stem": "How often does the following describe you: \"I can describe an idea in general terms, not just examples\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P11-005", "type": "RNK", "stem": "Rank the following behaviours from MOST like you (1) to LEAST like you (4).", "options": [{"k": "A", "t": "I grasp the underlying concept behind a set of facts"}, {"k": "B", "t": "the rest of the plant"}, {"k": "C", "t": "part of it"}, {"k": "D", "t": "connected processes"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": true}]}, {"code": "P12", "name": "Creative Thinking", "altName": "", "sci": "Big Five Openness", "behaviour": "The tendency to generate original", "competencies": "", "items": [{"id": "P12-001", "type": "SJT", "stem": "A situation at work where i come up with several ideas rather than stopping at the first. Which response is MOST effective?", "options": [{"k": "A", "t": "The tendency to generate original, then confirm everyone understands"}, {"k": "B", "t": "Delay action until more information arrives"}, {"k": "C", "t": "Focus on blame rather than resolving the situation"}, {"k": "D", "t": "Compromise the standard to protect the deadline"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": true}, {"id": "P12-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I suggest a solution no one has tried before"}, {"k": "B", "t": "I like learning new skills even when not required"}, {"k": "C", "t": "I value harmony and avoid unnecessary disagreement"}, {"k": "D", "t": "I take pride in producing accurate, error-free work"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": true}, {"id": "P12-003", "type": "RCL", "stem": "I generate options quickly when brainstorming", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P12-004", "type": "BFS", "stem": "How often does the following describe you: \"I produce a stream of suggestions when asked for ideas\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P12-005", "type": "RNK", "stem": "Rank the following behaviours from MOST like you (1) to LEAST like you (4).", "options": [{"k": "A", "t": "I come up with several ideas rather than stopping at the first"}, {"k": "B", "t": "I suggest a solution no one has tried before"}, {"k": "C", "t": "I connect an idea from one area to a problem Concepts in another"}, {"k": "D", "t": "I imagine how things could be rather than Problem-Solving only how they are"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": true}]}, {"code": "P13", "name": "Practical Problem-Solving", "altName": "", "sci": "Practical intelligence; Cattell", "behaviour": "The tendency to find workable,", "competencies": "", "items": [{"id": "P13-001", "type": "SJT", "stem": "A situation at work where i get hands-on to sort out a problem rather than just reporting it. Which response is MOST effective?", "options": [{"k": "A", "t": "The tendency to find workable,, then confirm everyone understands"}, {"k": "B", "t": "Delay action until more information arrives"}, {"k": "C", "t": "Focus on blame rather than resolving the situation"}, {"k": "D", "t": "Compromise the standard to protect the deadline"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": true}, {"id": "P13-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I favour a solution that works now over a Solutions perfect one later"}, {"k": "B", "t": "I like learning new skills even when not required"}, {"k": "C", "t": "I value harmony and avoid unnecessary disagreement"}, {"k": "D", "t": "I take pride in producing accurate, error-free work"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": true}, {"id": "P13-003", "type": "RCL", "stem": "I physically investigate a fault to find the cause", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P13-004", "type": "BFS", "stem": "How often does the following describe you: \"I roll up my sleeves and deal with the issue directly\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P13-005", "type": "RNK", "stem": "Rank the following behaviours from MOST like you (1) to LEAST like you (4).", "options": [{"k": "A", "t": "I get hands-on to sort out a problem rather than just reporting it"}, {"k": "B", "t": "I favour a solution that works now over a Solutions perfect one later"}, {"k": "C", "t": "I improvise a temporary fix to keep things Improvisation running"}, {"k": "D", "t": "I troubleshoot a stoppage quickly to restore Troubleshooting output"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": true}]}, {"code": "P14", "name": "Self-Control", "altName": "", "sci": "Big Five Emotional Stability &", "behaviour": "The tendency to manage impulses and", "competencies": "", "items": [{"id": "P14-001", "type": "SJT", "stem": "A situation at work where i stop and think before reacting to management something that irritates me. Which response is MOST effective?", "options": [{"k": "A", "t": "The tendency to manage impulses and, then confirm everyone understands"}, {"k": "B", "t": "Delay action until more information arrives"}, {"k": "C", "t": "Focus on blame rather than resolving the situation"}, {"k": "D", "t": "Compromise the standard to protect the deadline"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": true}, {"id": "P14-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I keep my emotions in check during a tense Restraint exchange"}, {"k": "B", "t": "I like learning new skills even when not required"}, {"k": "C", "t": "I value harmony and avoid unnecessary disagreement"}, {"k": "D", "t": "I take pride in producing accurate, error-free work"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": true}, {"id": "P14-003", "type": "RCL", "stem": "I resist acting on my first impulse when it Management might backfire", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P14-004", "type": "BFS", "stem": "How often does the following describe you: \"I pause before sending a sharp reply Management\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P14-005", "type": "RNK", "stem": "Rank the following behaviours from MOST like you (1) to LEAST like you (4).", "options": [{"k": "A", "t": "I stop and think before reacting to Management something that irritates me"}, {"k": "B", "t": "I keep my emotions in check during a tense Restraint exchange"}, {"k": "C", "t": "I stay patient when a task takes longer than expected"}, {"k": "D", "t": "Provocation"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": true}]}, {"code": "P15", "name": "Methodical Approach", "altName": "", "sci": "Big Five Conscientiousness", "behaviour": "The tendency to work in an", "competencies": "", "items": [{"id": "P15-001", "type": "SJT", "stem": "A situation at work where i keep my workspace and materials in order. Which response is MOST effective?", "options": [{"k": "A", "t": "The tendency to work in an, then confirm everyone understands"}, {"k": "B", "t": "Delay action until more information arrives"}, {"k": "C", "t": "Focus on blame rather than resolving the situation"}, {"k": "D", "t": "Compromise the standard to protect the deadline"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": true}, {"id": "P15-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I work through a task in a logical order Working"}, {"k": "B", "t": "I like learning new skills even when not required"}, {"k": "C", "t": "I value harmony and avoid unnecessary disagreement"}, {"k": "D", "t": "I take pride in producing accurate, error-free work"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": true}, {"id": "P15-003", "type": "RCL", "stem": "I put things back where they belong so they can be found", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P15-004", "type": "BFS", "stem": "How often does the following describe you: \"I keep my tools and documents organised\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P15-005", "type": "RNK", "stem": "Rank the following behaviours from MOST like you (1) to LEAST like you (4).", "options": [{"k": "A", "t": "I keep my workspace and materials in order"}, {"k": "B", "t": "I work through a task in a logical order Working"}, {"k": "C", "t": "I use a consistent method rather than Process improvising each time"}, {"k": "D", "t": "I keep accurate records of what I have done"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": true}]}, {"code": "P16", "name": "Stress Tolerance", "altName": "", "sci": "Big Five Emotional Stability;", "behaviour": "The tendency to stay calm, composed", "competencies": "", "items": [{"id": "P16-001", "type": "SJT", "stem": "A situation at work where i stay calm when everything is demanding pressure attention at once. Which response is MOST effective?", "options": [{"k": "A", "t": "The tendency to stay calm, composed, then confirm everyone understands"}, {"k": "B", "t": "Delay action until more information arrives"}, {"k": "C", "t": "Focus on blame rather than resolving the situation"}, {"k": "D", "t": "Compromise the standard to protect the deadline"}], "scoring": {"scores": {"A": 3, "B": 1, "C": 0, "D": 0}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Decision Making", "defaulted": true}, {"id": "P16-002", "type": "IFC", "stem": "Read each statement and select the one that is MOST like you and the one that is LEAST like you.", "options": [{"k": "A", "t": "I keep working effectively through a heavy Endurance workload"}, {"k": "B", "t": "I like learning new skills even when not required"}, {"k": "C", "t": "I value harmony and avoid unnecessary disagreement"}, {"k": "D", "t": "I take pride in producing accurate, error-free work"}], "scoring": {"most": "A", "most_val": 2, "least": "D", "least_val": -2}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Attitude", "defaulted": true}, {"id": "P16-003", "type": "RCL", "stem": "I keep a clear head when the pressure is on Pressure", "options": [], "scoring": {"scale": "5pt_agree"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P16-004", "type": "BFS", "stem": "How often does the following describe you: \"I do not panic when several things go wrong Pressure at once\"", "options": [], "scoring": {"scale": "5pt_freq"}, "minGrade": "E1", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Behaviour", "defaulted": false}, {"id": "P16-005", "type": "RNK", "stem": "Rank the following behaviours from MOST like you (1) to LEAST like you (4).", "options": [{"k": "A", "t": "I stay calm when everything is demanding Pressure attention at once"}, {"k": "B", "t": "I keep working effectively through a heavy Endurance workload"}, {"k": "C", "t": "I work calmly as a deadline approaches Composure rather than rushing"}, {"k": "D", "t": "I stay level-headed during an emergency on Stability the line"}], "scoring": {"rank_scores": {"A": 2, "B": 1}}, "minGrade": "E2", "depts": ["ALL"], "reverse": false, "weight": 0.2, "perspective": "Interpersonal Preference", "defaulted": true}]}];
