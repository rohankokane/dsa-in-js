function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  //base case
  if (!curr) return path;

  //pre
  // path.push(curr.value);
  //recurse
  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);

  //post
  // path.push(curr.value);

  return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
