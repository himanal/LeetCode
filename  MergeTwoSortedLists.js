
class ListNode {
    constructor( val= null , next= null){
        this.val= val
        this.next=next
    }
}


var mergeTwoLists = function(list1, list2) {

let dummy =  new ListNode(-Infinity)
const prev = dummy

    while( list1 !==null && list2 !==null){
        if ( list1.val <= list2.val){
            dummy.next=list1;
        
            list1 = list1.next;
        }else{
            dummy.next=list2;
        
        list2=list2.next;
        }
        dummy = dummy.next
    }
    if(list1 !== null ){

        dummy.next=list1
    } else{
        dummy.next=list2
    }
    return prev.next
    
};


console.log(mergeTwoLists("[1,2,4,5]", "[3,8]"))