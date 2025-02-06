class Node{
    constructor(data){
        this.data = data;
        this.nextNode = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    appendNode(newNode){
		if (newNode instanceof Node) {
			if (!this.head) {
				this.head = newNode;
			} else {
				let currentNode = this.head;
				while (currentNode.nextNode) {
					currentNode = currentNode.nextNode;
				}
				currentNode.nextNode = newNode;
			}
		} else {
			console.log('Cannot append non-node elements');
		}
    }

	prependNode(newNode){
		if (newNode instanceof Node) {
			if (!this.head) {
				this.head = newNode;
			} else {
				let oldHead = this.head;
				this.head = newNode;
				this.head.nextNode = oldHead;
			}
		} else {
			console.log('Cannot append non-node elements');
		}
	}

    printList(){
        if (!this.head) {
            console.log("List is empty");
        } else {
            let currentNode = this.head;
            while (currentNode.nextNode){
                console.log(`[ ${currentNode.data} ] => `);
                currentNode = currentNode.nextNode;
            }
            console.log(`[ ${currentNode.data} ]`);
        }
    }

	getHead(){
		if (!this.head) {
			return null;
		} else {
			return this.head;
		}
	}

	getTail(){
		if (!this.head) {
			return null;
		} else {
			let currentNode = this.head;
			while (currentNode.nextNode) {
				currentNode = currentNode.nextNode;
			}
			return currentNode;
		}
	}

	listSize(){
		if (!this.head) {
			return 0;
		} else {
			let listSize = 1;
			let currentNode = this.head;
			while (currentNode.nextNode) {
				listSize++;
				currentNode = currentNode.nextNode;
			}
			return listSize;
		}
	}

	nodeAt(index){
		if (!this.head) {
			return null;
		} else {
			let currentNode = this.head;
			let currentIndex = 1;
			while (currentIndex < index) {
				currentNode = currentNode.nextNode;
				currentIndex++;
			}
			return currentNode;
		}
	}

	pop(){
		if (!this.head) {
			console.log('List is empty. No node to pop');
		} else {
			let currentNode = this.head;
			while (currentNode.nextNode.nextNode) {
				currentNode = currentNode.nextNode;
			}
			currentNode.nextNode = null;
		}
	}

	contains(value){
		if (!this.head) {
			console.log('List is empty. No nodes to search');
		} else {
			let currentNode = this.head;
			if (currentNode.data === value) {
				return true;
			} else {
				currentNode = currentNode.nextNode;
				while (currentNode.nextNode) {
					if (currentNode.data === value) {
						return true;
					} else {
						currentNode = currentNode.nextNode;
					}
				}
				if (currentNode.data === value) {
					return true;
				} else {
					return false;
				}
			}
		}
	}

	find(value){
		if (!this.head) {
			console.log('List is empty. No nodes to search');
		} else {
			let currentNode = this.head;
			let currentIndex = 1;
			if (currentNode.data === value) {
				return currentIndex;
			} else {
				currentNode = currentNode.nextNode;
				currentIndex++;
				while (currentNode.nextNode) {
					if (currentNode.data === value) {
						return currentIndex;
					} else {
						currentNode = currentNode.nextNode;
						currentIndex++;
					}
				}
				if (currentNode.data === value) {
					return currentIndex;
				} else {
					return null;
				}
			}
		}
	}
}
