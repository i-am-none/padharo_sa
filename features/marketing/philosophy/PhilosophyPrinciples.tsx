import type { PhilosophyPrinciple } from "./philosophy.types";

type PhilosophyPrinciplesProps = {
  principles: PhilosophyPrinciple[];
};

export function PhilosophyPrinciples({ principles }: PhilosophyPrinciplesProps) {
  return (
    <ul className="philosophy-principles" data-philosophy-principles>
      {principles.map((principle, index) => (
        <li key={index} className="philosophy-principle" data-philosophy-principle>
          <h3 className="philosophy-principle-title">{principle.title}</h3>
          <p className="philosophy-principle-description">{principle.description}</p>
        </li>
      ))}
    </ul>
  );
}
