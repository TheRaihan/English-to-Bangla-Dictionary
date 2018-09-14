/* Trie Data Structure */


let Node = function () {
	this.keys = new Map();
	this.end = false;
	this.bn = "";

	this.setEnd = function (bnword) {
		this.end = true;
		this.bn = bnword;
	};
	this.isEnd = function () {
		return this.end;
	};
	this.getbn = function () {
		return this.bn;
	}
};

let Trie = function () {

	this.root = new Node();

	this.add = function (input, bn_word, node = this.root) {
		if (input.length == 0) {
			node.setEnd(bn_word);
			return;
		} else if (!node.keys.has(input[0])) {
			node.keys.set(input[0], new Node());
			return this.add(input.substr(1), bn_word, node.keys.get(input[0]));
		} else {  
			return this.add(input.substr(1), bn_word, node.keys.get(input[0]));
		};
	};

	this.isWord = function (word) {
		let node = this.root;
		while (word.length > 1) {
			if (!node.keys.has(word[0])) {
				return "404";
			}
			else {
				node = node.keys.get(word[0]);
				word = word.substr(1);
			};
		};
		if (node.keys.has(word) && node.keys.get(word).isEnd()) {
			return node.keys.get(word).getbn();
		}
		return "404";
	};

	this.print = function () {
		let words = new Array();
		let search = function (node, string) {
			if (node.keys.size != 0) {
				for (let letter of node.keys.keys()) {
					search(node.keys.get(letter), string.concat(letter));
				};
				if (node.isEnd()) {
					words.push(string);
				};
			} else {
				string.length > 0 ? words.push(string) : undefined;
				return;
			};
		};
		search(this.root, new String());
		return words.length > 0 ? words : mo;
	};

};


function show_word_list() {
	idk = document.getElementById("search").value;
	// document.getElementById("wordlist").innerHTML=idk;

	list = myTrie.print();
	s = list.length;

	if(idk!="") result = "<b>Suggestion:</b><div style=\"padding: 10px\"><ul>";
	else result = "<ul>"
	for (i = 0; i < list.length; i++) {
		flag=0;
		if (idk == "") result += "<li>" + list[i] + "</li>";

		else {
			for (j = 0; j < idk.length; j++) {
				if (list[i][j] != idk[j])
				{
					flag = 1;	
				}		
			}
			if(flag==0) result += "<li>" + list[i] + "</li>";

		}

	}

	result += "</ul></div>";
	document.getElementById("wordlist").innerHTML = result;

}


myTrie = new Trie()

function input() {
	myTrie.add('Aboard', "জাহাজের উপরে");
	myTrie.add('Astroid', "উপগ্রহ");
	myTrie.add('Amain', "দ্রুতবেগে");
	myTrie.add('Annulled', "নাকচ");
	myTrie.add('Broadcast', "সম্প্রচার করা");
	myTrie.add('Boy', "বালক, ছেলে");
	myTrie.add('Client', "ক্রেতা");
	myTrie.add('Climate', "আবহাওয়া");
	myTrie.add('Coffee', "চা জাতীয় একধরনের পানীয়");
	myTrie.add('Culture', "সংস্কৃতি");
	myTrie.add('Doll', "পুতুল");
	myTrie.add('Dog', "কুকুর");
	myTrie.add('Dominate', "শাসন করা");
	myTrie.add('Electrodynamics', "তড়িৎ গতিবিজ্ঞান");
	myTrie.add('Encourage', "উৎসাহ দেয়া");
	myTrie.add('Essayist', "প্রবন্ধকার");
	myTrie.add('Frustrate', "হতাশ");
	myTrie.add('Exiled', "নির্বাসিত");
	myTrie.add('Furnace', "অগ্নিকুণ্ড");
	myTrie.add('Greedy', "লোভী");
	myTrie.add('Ground', "মাঠ");
	myTrie.add('Human', "মানুষজাতি");
	myTrie.add('Habit', "অভ্যাস");
	myTrie.add('Impose', "চাপিয়ে দেয়া");
	myTrie.add('Liability', "দায়");
	myTrie.add('Pretentious', "দাম্ভিক");
	myTrie.add('Squrt', "দৌড়");
	myTrie.add('Send', "পাঠানো");
	myTrie.add('Work', "কাজ");
	myTrie.add('Wounded', "আহত");

}

input();

console.log(myTrie.isWord('bat'));
console.log(myTrie.isWord('ball'));
console.log(myTrie.isWord('dorf'));
console.log(myTrie.print());



function search() {
	word = document.getElementById("search").value;

	if (word == "") {
		alert("Invalid Input");
	}
	else {

		res = myTrie.isWord(word);
		if (res == "404") alert("Not Found");
		else {
			document.getElementById("word_eng").innerHTML="Engilsh: <span style=\"color: black;\">"+word+"</span>";
			document.getElementById("word_bang").innerHTML = "Meaning:  <span style=\"color: black;padding: 5px;\">"+res+"</span>";

		}
	}
	document.getElementById('search').value = '';
	show_word_list();

}

function add() {
	bn = document.getElementById("bn").value;
	en = document.getElementById("en").value;
	if (bn == "" || en == "") alert("Invalid Input");
	else {
		myTrie.add(en, bn);
		alert("Success");
	}
	document.getElementById('bn').value = '';
	document.getElementById('en').value = '';
	show_word_list();

	// alert(word);
}