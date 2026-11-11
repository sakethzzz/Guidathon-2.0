import { describe, expect, it } from "vitest";
import { getDemoAnswer, getDemoQuestions } from "./demoAnswers";

describe("GUIDATHON demo playbook", () => {
  it("provides six prepared questions and answers for every specialist", () => {
    const agents = ["hermes", "zeus", "athena", "hephaestus", "chronos"] as const;
    for (const agent of agents) {
      const questions = getDemoQuestions(agent);
      expect(questions).toHaveLength(6);
      for (const question of questions) {
        expect(getDemoAnswer(agent, question)).toBeTruthy();
      }
    }
  });

  it("matches case, punctuation, and defined natural-language aliases", () => {
    expect(getDemoAnswer("athena", "HOW DO WE CHOOSE A STRONG HACKATHON IDEA?")).toContain("five dimensions");
    expect(getDemoAnswer("hephaestus", "Where should API keys go?")).toContain("source code");
    expect(getDemoAnswer("chronos", "When should we stop coding")).toContain("20–25%");
    expect(getDemoAnswer("hermes", "Tell me a random fact about space")).toBeNull();
  });
});
