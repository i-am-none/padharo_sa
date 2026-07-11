import { Category } from "./menu.types";
import { CategoryExplorerClient } from "./CategoryExplorerClient";

interface CategoryExplorerProps {
  content: Category[];
}

export function CategoryExplorer({ content }: CategoryExplorerProps) {
  return <CategoryExplorerClient categories={content} />;
}
