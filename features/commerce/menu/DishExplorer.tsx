import { Dish } from "./menu.types";
import { DishExplorerClient } from "./DishExplorerClient";

interface DishExplorerProps {
  content: Dish[];
}

export function DishExplorer({ content }: DishExplorerProps) {
  return <DishExplorerClient dishes={content} />;
}
