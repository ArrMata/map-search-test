import { sampleData } from "./sample-data";

// Trie/Prefix tree data structure. Used in order to facilitate auto complete functionality
// Creates and exports singleton of Trie with all names of locations inserted from sample data.

class TrieNode {
	constructor() {
		this.children = {};
		this.end = false;
	}
}

class Trie {
	constructor() {
		this.root = new TrieNode();
	}

	insert(word) {
		word = word.toLowerCase();
		let currentNode = this.root;
		for (let c of word) {
			if (!currentNode.children[c]) {
				currentNode.children[c] = new TrieNode();
			}
			currentNode = currentNode.children[c];
		}
		currentNode.end = true;
	}

	autoComplete(input) {
		if (!input) {
			return [];
		}
		input = input.toLowerCase();
		const results = [];
		let currentString = "";
		let currentNode = this.root;
		for (let c of input) {
			if (!currentNode.children[c]) {
				return results;
			}
			currentString += c;
			currentNode = currentNode.children[c];
		}
		this.autoCompleteHelper(currentNode, results, currentString);
		return results;
	}

	autoCompleteHelper(currentNode, results, currentString) {
		if (currentNode.end) {
			results.push(currentString);
		}
		for (let child in currentNode.children) {
			this.autoCompleteHelper(
				currentNode.children[child],
				results,
				currentString + child
			);
		}
	}
}

export const dataTrie = new Trie();
for (let location of sampleData) {
	dataTrie.insert(location.name);
}
