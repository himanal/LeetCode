var middleNode = function(head) {
   
    slow = head ;
    fast = head;
    while (fast !== null) {
        fast = fast.next;
        if (fast == null) break;
        else fast = fast.next;
        
        slow = slow.next;
    }
    return slow;
};

console.log(middleNode([1,2,3,4,5]))