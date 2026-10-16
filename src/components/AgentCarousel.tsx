import { FlipCard } from "./FlipCard";
import { agents } from "../data";

export function AgentCarousel() {
  return (
    <div className="mx-auto mt-8 grid max-w-[960px] grid-cols-1 gap-4 px-4 pb-4 md:mt-12 md:grid-cols-2 md:gap-5">
        {agents.map((agent) => (
          <FlipCard key={agent.id} agent={agent} />
        ))}
    </div>
  );
}
