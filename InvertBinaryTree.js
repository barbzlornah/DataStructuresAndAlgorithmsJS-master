const invertTree = root => {
    if(root == null) return null;
    let tempLeft = root.Left;
    let tempRight = root.right;

    root.left = tempRight;
    root.right = tempLeft;

    return root;
}