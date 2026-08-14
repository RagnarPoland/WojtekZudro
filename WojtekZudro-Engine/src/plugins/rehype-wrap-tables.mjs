import { visit } from "unist-util-visit";

/** Owija każdą <table> w <div class="table-scroll"> — scroll bez psucia kolumn. */
export function rehypeWrapTables() {
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName !== "table" || !parent || typeof index !== "number") {
        return;
      }

      parent.children[index] = {
        type: "element",
        tagName: "div",
        properties: { className: ["table-scroll"] },
        children: [node],
      };
    });
  };
}
