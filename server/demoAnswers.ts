export type DemoAgent = "hermes" | "zeus" | "athena" | "hephaestus" | "chronos";

type DemoEntry = {
  question: string;
  aliases?: string[];
  answer: string;
};

const playbook: Record<DemoAgent, DemoEntry[]> = {
  hermes: [
    {
      question: "What is GUIDATHON?",
      aliases: ["Explain GUIDATHON", "What does GUIDATHON do"],
      answer: "GUIDATHON is an AI-assisted hackathon workspace that helps a team move from a challenge brief to a focused idea, a buildable technical plan, and a submission-ready demo. Its five specialist agents have distinct roles: Hermes handles knowledge and evidence, Zeus coordinates decisions and handoffs, Athena leads product strategy, Hephaestus handles engineering, and Chronos manages execution. Prepared answers can work without a live model connection; live research, external tools, and persistent services should only be claimed when their integrations are actually configured.",
    },
    {
      question: "What is RAG and how does Hermes use it?",
      aliases: ["Explain RAG", "What does retrieval augmented generation mean"],
      answer: "RAG means retrieval-augmented generation. The system retrieves relevant passages from a supplied knowledge collection and gives them to a model as context. Hermes uses retrieved project sources to ground answers and cite exact source chunks when available. Retrieval is not fact-checking: a passage can be relevant but still need verification. If the available sources do not answer a question, Hermes should say so rather than inventing evidence.",
    },
    {
      question: "What are common hackathon judging criteria?",
      aliases: ["How are hackathons judged", "What do hackathon judges look for"],
      answer: "A useful starting rubric includes problem relevance, user value, originality, technical execution, usability, demo clarity, feasibility, and evidence of impact. The organizer's published rubric is authoritative; never assume every event uses the same weights. A strong submission makes the problem clear, demonstrates a working solution, proves the core flow, and explains what is genuinely novel.",
    },
    {
      question: "How do I research a problem statement?",
      aliases: ["Research this challenge", "How should I research the challenge"],
      answer: "Break the brief into the target user, problem, current workaround, constraints, judging criteria, and unknowns. Separate claims in the brief from your assumptions. Search for primary sources first: official reports, government or institutional data, product documentation, and direct user evidence. Keep a source log with the claim each source supports, its date, and any limitations. Do not treat search-result snippets or a single anecdote as proof.",
    },
    {
      question: "How should we compare existing solutions?",
      aliases: ["Who are our competitors", "How do we do competitor research"],
      answer: "Compare alternatives against the exact user job, not just their feature lists. For each alternative, record its target user, core workflow, strengths, friction, pricing or access barriers, and evidence from credible sources or hands-on testing. Then identify the gap that matters to your chosen user. A competitor matrix is useful only when it leads to a testable differentiation claim.",
    },
    {
      question: "How do we cite sources and avoid fake evidence?",
      aliases: ["How should I cite research", "How do I avoid hallucinated citations"],
      answer: "Attach each factual claim to a source that directly supports it. Preserve the source title, publisher, URL or document location, publication date, and the relevant passage or page. Distinguish direct evidence from your interpretation. If a source is unavailable, inaccessible, outdated, or inconclusive, say so. Never invent quotations, page numbers, URLs, statistics, or citations.",
    },
  ],
  zeus: [
    {
      question: "What should our team do first?",
      aliases: ["Where do we start", "What is our first step"],
      answer: "Start by making the challenge concrete. Write down the target user, painful problem, event constraints, team skills, and judging criteria. Choose one demonstrable problem, list the riskiest assumption, and decide how to test it quickly. Do not split into unrelated features or choose a tech stack before agreeing on the user and the proof you need. Then route strategy to Athena, evidence to Hermes, implementation to Hephaestus, and milestones to Chronos.",
    },
    {
      question: "How do the five agents work together?",
      aliases: ["What are the agent roles", "Explain the five GUIDATHON agents"],
      answer: "Hermes gathers and explains evidence. Zeus keeps the shared goal, decisions, and handoffs coherent. Athena challenges the problem and selects a differentiated, testable product direction. Hephaestus turns that direction into an architecture and implementation plan. Chronos sequences the work, owners, checkpoints, and demo buffer. A practical loop is Hermes frames evidence → Athena validates the opportunity → Hephaestus defines the smallest working build → Chronos schedules delivery → Zeus checks alignment. A handoff is a recommendation, not proof that another agent or external tool has executed work.",
    },
    {
      question: "How do we know our submission is ready?",
      aliases: ["Are we ready to submit", "Give me a submission checklist"],
      answer: "Use a release check: the core user journey works from a clean start; the deployed URL loads; setup and environment variables are documented; secrets are not committed; the demo uses realistic data; errors and empty states are handled; the team can explain architecture and trade-offs; and the pitch states the user problem, solution, differentiation, and evidence. Test the exact build you will present and keep a backup recording. A green build alone does not prove live integrations work.",
    },
    {
      question: "How should Zeus delegate work?",
      aliases: ["Who should handle each task", "How do we assign tasks to agents"],
      answer: "Delegate by deliverable and decision boundary. Give Hermes a research question and require source-backed findings; give Athena a user/problem hypothesis and ask for a recommendation plus validation test; give Hephaestus an agreed MVP workflow and ask for an implementation plan; give Chronos the deadline, owners, and dependencies. Keep Zeus responsible for the shared objective, decision log, unresolved conflicts, and explicit handoffs. Do not assign two agents overlapping ownership without naming one final decision-maker.",
    },
    {
      question: "What should we do when the team disagrees?",
      aliases: ["How do we resolve team conflicts", "How should we make a team decision"],
      answer: "Bring the disagreement back to the user problem and the event constraints. State each option, its supporting evidence, assumptions, cost, and reversibility. If possible, run the smallest experiment that distinguishes the options. If time does not permit an experiment, choose the option with the strongest evidence and lowest delivery risk, record why, name the decision owner, and set a review point. Avoid resolving product disagreements by seniority or personal preference alone.",
    },
    {
      question: "How should we keep all agents aligned?",
      aliases: ["How do agents share context", "How do we maintain shared project context"],
      answer: "Maintain one concise project brief containing the challenge, target user, problem statement, chosen idea, MVP boundary, constraints, decisions, open risks, owners, and deadline. Update it when a decision changes and pass only relevant context into each specialist task. Mark facts, assumptions, and unverified claims separately. Zeus should surface stale or conflicting decisions before the team builds on them.",
    },
  ],
  athena: [
    {
      question: "How do we choose a strong hackathon idea?",
      aliases: ["Help us pick an idea", "What makes a hackathon idea strong"],
      answer: "Choose the idea that solves a specific, painful problem for a reachable user and can be proven in the time available. Compare candidates on problem severity, differentiation, feasibility, demo clarity, and evidence. Write one sentence of evidence or uncertainty beside every score so numbers do not create false precision. Prefer a narrow workflow with a visible before-and-after over a broad platform with many unfinished features. Define the smallest valuable MVP and the assumption most likely to invalidate it.",
    },
    {
      question: "How can we validate our idea in 48 hours?",
      aliases: ["Validate our idea quickly", "How do we test user demand"],
      answer: "Speak to three to five people who resemble the target user. Ask about their current workaround and the last time the problem occurred. Prototype the single riskiest workflow and ask users to complete a realistic task without coaching. Record task completion, confusion points, and whether the solution is meaningfully better than the workaround. Treat this as directional evidence, not statistically representative research. If real users are unavailable, label the limitation and test with a clearly stated proxy.",
    },
    {
      question: "How should we scale the idea after the MVP?",
      aliases: ["What comes after the MVP", "How can this product grow"],
      answer: "Scale only after the core workflow shows repeatable value. Measure activation, task completion, time saved, repeat usage, and failure rate. Improve reliability and onboarding, validate demand with a wider user group, and identify the next bottleneck from observed behavior. Expand one adjacent workflow at a time. Before scaling infrastructure, establish actual usage and load requirements. Separate what the MVP demonstrates today from what future versions could deliver.",
    },
    {
      question: "How do we make our idea different from competitors?",
      aliases: ["What is our unique selling point", "How do we find a differentiator"],
      answer: "Do not claim uniqueness just because the interface or technology is different. Identify the user's unsolved job, compare the strongest existing alternatives, and find a specific gap in outcome, access, workflow, trust, cost, or speed. Write the differentiator as: 'For [user], unlike [current alternative], we [specific capability] so they can [measurable outcome].' Then test whether users actually value that difference.",
    },
    {
      question: "How do we define the MVP scope?",
      aliases: ["What features should be in our MVP", "What should we build first"],
      answer: "Define one target user, one high-value task, and one end-to-end path that completes it. Include only the interface, data, and integrations essential to deliver that outcome. Put nice-to-have features, secondary personas, advanced analytics, and speculative automation outside the first release. Write acceptance criteria for the happy path and one failure case. If a feature does not help prove the core value, defer it.",
    },
    {
      question: "How should we prioritize ideas objectively?",
      aliases: ["Score our ideas", "Which idea should we choose"],
      answer: "Compare ideas using problem severity, frequency, reachability of users, differentiation, feasibility within the event, demo clarity, and evidence strength. Score each dimension from 1–5 and add a short justification plus confidence level. Treat the score as a conversation aid, not a scientific result. Reject ideas with a fatal feasibility or access constraint even if their total score is high. Choose the strongest evidence-backed idea the team can demonstrate end to end.",
    },
  ],
  hephaestus: [
    {
      question: "What tech stack should we use for a 48-hour hackathon?",
      aliases: ["Recommend a hackathon tech stack", "Which technologies should we use"],
      answer: "Use the stack the team can debug fastest. A practical default is React with TypeScript for the interface, one familiar backend such as Node/Express or FastAPI, a managed database only if persistence is essential, and a deployment platform the team already knows. Use external APIs only when they materially improve the core demo, and keep provider keys on the server. Avoid microservices, custom authentication, and complex infrastructure unless the challenge requires them.",
    },
    {
      question: "How should we structure the architecture?",
      aliases: ["Design our app architecture", "How should the backend and frontend connect"],
      answer: "Start with one end-to-end user journey and draw its data flow: interface → API boundary → business logic → storage or external service → response. Keep UI components separate from provider credentials and database access. Define request and response shapes, validate inputs at the API boundary, add timeouts and useful error states for external calls, and log failures without exposing secrets or personal data. Build one vertical slice first, test it, then extract modules when a real boundary appears.",
    },
    {
      question: "How do we integrate an API or MCP server safely?",
      aliases: ["Connect an MCP server", "How do I add an external API"],
      answer: "Keep integrations server-side. Store credentials in encrypted environment settings, validate inputs, use HTTPS, set timeouts, and handle rate limits and provider errors. For MCP, discover and display available tools, validate arguments against their schemas, and require explicit confirmation before actions that modify data or trigger external effects. Apply least-privilege credentials and redact tokens from logs. A configured URL alone does not prove discovery or a tool call succeeded.",
    },
    {
      question: "How should we debug a failing feature?",
      aliases: ["Debug our app", "What is the debugging process"],
      answer: "Reproduce the issue with the smallest input and capture the exact error. Trace the request from browser action to API, validation, business logic, provider or database, and response. Check the browser console and server logs, inspect status codes and payload shapes, and verify environment configuration without printing secret values. Change one thing at a time, add a regression test for the failure, and retest the full user journey.",
    },
    {
      question: "How do we manage API keys and environment variables?",
      aliases: ["Where should API keys go", "How do I configure secrets"],
      answer: "Keep API keys and database credentials out of source code, frontend bundles, screenshots, logs, and Git history. Use local ignored environment files for development and the hosting platform's encrypted environment settings for deployment. Provide a .env.example containing variable names and safe placeholders only. Validate required variables at server startup, rotate any key that was exposed, and never ask users to paste secrets into chat or commit them.",
    },
    {
      question: "What should we test before deploying?",
      aliases: ["Give me a deployment checklist", "How do we test the app"],
      answer: "Run type-checking, unit tests, and a production build. Then test the deployed app from a clean browser session: load the homepage, complete the primary user journey, verify authentication if used, exercise empty and error states, check responsive layouts, and confirm API/database connections. Inspect server logs for failures and verify that required environment variables exist without revealing their values. A successful build is necessary but not sufficient for release.",
    },
  ],
  chronos: [
    {
      question: "How should we plan a 48-hour hackathon?",
      aliases: ["Create a 48 hour schedule", "Plan our hackathon timeline"],
      answer: "A practical schedule is: hours 0–3, understand the challenge and choose one user problem; hours 3–6, validate the concept and define the MVP; hours 6–10, design the demo flow and architecture; hours 10–28, build the core vertical slice; hours 28–34, integrate and test; hours 34–40, fix critical failures and prepare the pitch; hours 40–44, rehearse and capture a backup demo; hours 44–48, protect the submission buffer and submit early. Adjust for the actual event timetable and freeze scope before the final third.",
    },
    {
      question: "What must be ready before the final demo?",
      aliases: ["Final demo checklist", "How do we prepare our presentation"],
      answer: "The final demo needs a stable deployed or locally runnable build, one rehearsed happy path, realistic sample data, working credentials and network access, a clear README, and a backup recording or screenshots. Prepare a 60–90 second explanation of the problem, user, solution, and differentiator, followed by a short live walkthrough. Assign one person to present and another to recover if the demo fails. Stop risky changes before the final rehearsal.",
    },
    {
      question: "What should we do if we fall behind schedule?",
      aliases: ["We are running late", "How do we recover lost time"],
      answer: "Freeze new features immediately. List remaining work as must-have, should-have, and cut. Protect one complete user journey and remove secondary screens, optional integrations, and polish that does not help judges understand the value. Assign one person to stabilize the build while another prepares the pitch and backup demo. Re-estimate using remaining time, include a testing buffer, and communicate the cut list. A small, reliable product is stronger than many broken features.",
    },
    {
      question: "How should we break work into milestones?",
      aliases: ["Create project milestones", "How do we split the project into tasks"],
      answer: "Use outcome-based milestones: challenge and scope locked; user/problem evidence collected; MVP flow and architecture agreed; core vertical slice working; integrations complete; test and deployment pass; pitch and submission ready. For each milestone, name one owner, a due time, dependencies, and a visible acceptance test. Keep tasks small enough to finish in a few hours and review progress at fixed checkpoints.",
    },
    {
      question: "How much time should we reserve for testing and the pitch?",
      aliases: ["How much buffer do we need", "When should we stop coding"],
      answer: "Reserve at least the final 20–25% of the event for integration, bug fixes, rehearsal, and submission. Stop adding features before that buffer begins. Within the buffer, prioritize a clean demo path, critical bug fixes, deployment verification, and a short pitch rehearsal. If the event is shorter or the deployment is risky, reserve more time rather than less.",
    },
    {
      question: "How do we prioritize tasks when time is limited?",
      aliases: ["What should we do next", "Prioritize our remaining tasks"],
      answer: "Rank tasks by whether they block the core user journey, reduce a major demo risk, satisfy a submission requirement, or improve clarity for judges. Do blockers first, then reliability and proof, then presentation polish. Defer optional integrations and secondary features. Every task should have one owner and a clear 'done' condition. Revisit priorities whenever the deadline or a dependency changes.",
    },
  ],
};

const normalize = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim().replace(/\s+/g, " ");

export function getDemoQuestions(agent: DemoAgent): string[] {
  return playbook[agent].map(entry => entry.question);
}

export function getDemoAnswer(agent: DemoAgent, question: string): string | null {
  const requested = normalize(question);
  const match = playbook[agent].find(entry =>
    [entry.question, ...(entry.aliases ?? [])].some(candidate => normalize(candidate) === requested),
  );
  return match?.answer ?? null;
}
