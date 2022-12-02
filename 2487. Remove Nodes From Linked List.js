var removeNodes = function (head) {
    const stack = [];
    while (head) {
      while (stack.length && head.val > stack[stack.length - 1]) {
        stack.pop();
      }
      stack.push(head.val);
      head = head.next;
    }
    while (stack.length) {
      head = new ListNode(stack.pop(), head);
    }
    return head;
  };