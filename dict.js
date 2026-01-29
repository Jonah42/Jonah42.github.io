// published at drongo-words-recording.surge.sh
import data from './data.json' with { type: 'json' };

class DictWord {
	constructor(id, order, level, type, english, japanese, same, examples=[], translations=[]) {
		this.id = id;
		this.order = order;
		this.level = level;
		this.type = type; // corresponds as defined below
		this.english = english;
		this.japanese = japanese; // list corresponding to type list
		this.same = same // any english words that share the same japanese translations. Words separated bby japanese commas
		this.examples = examples; // list
		this.translations = translations; // list
	}
}

// Next review time: (from WaniKani)
// Stage 1 → 4 hours → Stage 2
// Stage 2 → 8 hours → Stage 3
// Stage 3 → 1 day → Stage 4
// Stage 4 → 2 days → Stage 5
// Stage 5 → 1 week → Stage 6
// Stage 6 → 2 weeks → Stage 7
// Stage 7 → 1 month → Stage 8
// Stage 8 → 4 months → Burned


class DataWord {
	constructor(id, successes, mistakes, stage, nextReview, synonyms='') {
		this.id = id;
		this.successes = successes;
		this.mistakes = mistakes;
		this.stage = stage;
		this.nextReview = nextReview;
		this.synonyms = synonyms;
		this.dbValue = this.dbValue.bind(this);
	}

	dbValue() {
		const v = {};
		if (this.synonyms.length > 0) {
			v[`data.${this.id}`] = [
				this.successes,
				this.mistakes,
				this.stage,
				this.nextReview,
				this.synonyms
			];
		} else {
			v[`data.${this.id}`] = [
				this.successes,
				this.mistakes,
				this.stage,
				this.nextReview
			];
		}
		return v;
	}
}

// 0 expression
// 1 noun: 名
// 2 verb: 動
// 3 adjective: 形
// 4 adverb: 副
// 5 helper: 助
// 6 before: 前
// 7 interval: 間
// 8 pronoun: 代
// 9 join: 接
// 10 number: 数
function InitWords() {
  // const j = JSON.parse(data);
  let dict = [];
  const j = data;
  Object.entries(j).forEach(word => {
    const w = new DictWord(parseInt(word[0]), parseInt(word[1].order), parseInt(word[1].level), parseInt(word[1].type), word[1].english, word[1].japanese, word[1].same, word[1].examples, word[1].translations);
    dict.push(w);
  });
  dict.sort((a, b) => {return a.order-b.order});
  return dict;
}

const m = { // m is for map
	'Val': 0,
	'Josh': 1,
	'Harrison': 2,
	'Megan': 3,
	'Tzu-han': 4,
	'Arlenys': 5,
	'Claire': 6,
	'Nicholas': 7,
	'Caleb': 8,
	'Amelia': 9,
};

const d = InitWords();
// Create the allocations array
// *OLD* NH1 (also note that Caleb didn't exist, and Josh was Sean) const a = [4, 7, 5, 4, 5, 5, 0, 1, 0, 6, 7, 0, 5, 5, 1, 6, 0, 1, 6, 3, 4, 6, 5, 0, 4, 7, 5, 6, 5, 2, 4, 3, 2, 0, 7, 3, 1, 1, 0, 0, 4, 7, 2, 4, 4, 6, 4, 0, 0, 7, 0, 2, 5, 1, 2, 2, 1, 3, 2, 6, 3, 1, 3, 3, 6, 2, 0, 5, 4, 7, 3, 6, 1, 5, 0, 4, 2, 1, 1, 1, 6, 2, 6, 0, 5, 3, 6, 2, 7, 2, 6, 6, 3, 0, 0, 7, 2, 3, 7, 6, 5, 2, 0, 7, 3, 6, 1, 7, 2, 1, 4, 3, 5, 6, 5, 5, 0, 6, 4, 3, 0, 0, 5, 3, 1, 2, 3, 6, 1, 5, 7, 1, 5, 4, 1, 4, 4, 5, 4, 3, 3, 5, 1, 7, 6, 1, 5, 0, 4, 0, 0, 7, 4, 3, 5, 4, 0, 4, 1, 7, 6, 6, 2, 3, 7, 6, 3, 0, 2, 4, 4, 4, 6, 6, 0, 4, 6, 4, 3, 1, 0, 1, 2, 7, 0, 7, 3, 3, 1, 6, 3, 2, 7, 5, 7, 4, 4, 7, 4, 1, 6, 2, 6, 6, 3, 5, 1, 5, 4, 3, 3, 6, 4, 0, 7, 1, 2, 6, 5, 1, 3, 5, 3, 1, 6, 0, 5, 6, 5, 0, 4, 4, 2, 7, 2, 4, 3, 1, 6, 6, 0, 2, 4, 7, 2, 7, 5, 6, 4, 4, 2, 3, 7, 2, 4, 6, 5, 5, 0, 5, 5, 1, 3, 3, 3, 3, 6, 0, 4, 3, 3, 6, 7, 5, 0, 4, 6, 7, 2, 2, 0, 0, 2, 2, 2, 4, 7, 6, 4, 4, 1, 4, 6, 6, 5, 6, 7, 2, 0, 7, 5, 7, 1, 6, 5, 0, 7, 0, 3, 2, 4, 1, 7, 1, 2, 2, 5, 7, 0, 3, 1, 6, 7, 3, 6, 5, 2, 2, 1, 6, 4, 7, 0, 4, 4, 0, 6, 6, 4, 1, 6, 7, 1, 0, 2, 4, 1, 1, 1, 5, 7, 7, 3, 6, 7, 7, 0, 3, 4, 1, 2, 1, 3, 0, 4, 3, 3, 7, 1, 2, 7, 0, 3, 7, 1, 6, 7, 7, 1, 7, 6, 7, 4, 2, 4, 2, 1, 1, 3, 6, 4, 2, 1, 1, 7, 5, 4, 4, 6, 6, 7, 4, 7, 6, 1, 0, 4, 0, 2, 0, 3, 7, 3, 5, 4, 2, 4, 3, 0, 5, 5, 6, 7, 1, 1, 1, 4, 6, 2, 2, 5, 5, 5, 4, 2, 4, 3, 6, 6, 3, 1, 4, 0, 0, 6, 0, 2, 6, 3, 1, 2, 5, 5, 2, 1, 7, 2, 7, 3, 0, 2, 1, 4, 5, 6, 2, 3, 4, 3, 2, 7, 3, 4, 7, 3, 1, 5, 5, 5, 6, 0, 6, 5, 4, 4, 4, 6, 5, 4, 6, 7, 2, 5, 1, 2, 1, 2, 0, 5, 7, 3, 7, 2, 1, 2, 6, 4, 1, 0, 0, 0, 5, 5, 2, 2, 3, 4, 0, 3, 1, 2, 0, 0, 2, 2, 1, 3, 0, 4, 1, 6, 4, 2, 5, 1, 2, 3, 7, 0, 2, 4, 7, 6, 1, 7, 5, 3, 5, 7, 5, 7, 6, 7, 5, 0, 5, 3, 0, 2, 7, 0, 5, 2, 4, 3, 5, 7, 3, 0, 1, 7, 7, 2, 0, 2, 6, 5, 7, 7, 7, 3, 3, 5, 3, 0, 2, 5, 3, 4, 3, 5, 2, 7, 5, 3, 2, 4, 2, 0, 5, 6, 4, 1, 3, 6, 1, 0, 1, 3, 1, 0, 3, 4, 1, 4, 3, 1, 2, 6, 0, 5, 5, 2, 4, 3, 3, 5, 3, 7, 0, 3, 0, 0, 2, 5, 2, 0, 5, 3, 5, 4, 7, 5, 7, 1, 7, 5, 7, 0, 6, 1, 0, 7, 5, 5, 4, 7, 7, 3, 6, 7, 3, 5, 4, 7, 6, 4, 0, 6, 3, 2, 6, 2, 3, 1, 7, 0, 0, 0, 5, 7, 1, 5, 0, 5, 3, 0, 1, 3, 6, 7, 2, 3, 3, 1, 4, 3, 0, 2, 2, 2, 6, 7, 2, 5, 1, 1, 2, 6, 0, 6, 7, 0, 6, 1, 1, 1, 0, 3, 5, 0, 2, 6, 1, 4, 7, 4, 5, 5, 3, 3, 7, 6, 4, 1, 3, 1, 6, 2, 7, 0, 0, 6, 4, 4, 6, 5, 1, 5, 0, 7, 2, 2, 2, 4, 1, 1, 4, 1, 1, 6, 6, 0, 2, 5, 1];
// *OLD* NH2 (also note that Amelia didn't exist, and Val was Jonah)const a = [1, 3, 7, 2, 3, 3, 8, 8, 5, 2, 0, 3, 8, 6, 2, 0, 6, 3, 4, 2, 3, 5, 3, 8, 7, 8, 7, 5, 2, 2, 2, 8, 7, 4, 3, 5, 1, 2, 8, 1, 4, 3, 6, 8, 8, 4, 1, 1, 0, 5, 7, 1, 4, 3, 7, 4, 1, 1, 7, 4, 3, 0, 7, 2, 3, 0, 2, 6, 2, 6, 5, 7, 4, 0, 8, 8, 2, 2, 7, 3, 0, 0, 4, 4, 3, 7, 7, 7, 5, 5, 6, 2, 3, 3, 5, 0, 5, 3, 8, 5, 1, 4, 1, 5, 2, 1, 5, 4, 1, 3, 2, 2, 2, 8, 3, 3, 7, 0, 4, 3, 4, 2, 3, 8, 0, 5, 2, 8, 0, 5, 8, 0, 8, 6, 1, 0, 1, 8, 2, 7, 2, 1, 3, 0, 2, 7, 8, 3, 7, 2, 6, 5, 5, 3, 3, 6, 2, 5, 4, 6, 2, 7, 7, 2, 4, 1, 5, 6, 0, 5, 3, 5, 0, 0, 8, 5, 3, 3, 6, 1, 7, 0, 5, 0, 6, 4, 2, 4, 7, 8, 7, 1, 4, 6, 0, 3, 5, 6, 4, 8, 6, 2, 7, 4, 7, 8, 4, 3, 0, 0, 3, 6, 5, 7, 0, 1, 1, 8, 0, 2, 0, 7, 6, 6, 0, 5, 6, 1, 4, 4, 5, 6, 7, 8, 5, 3, 4, 2, 0, 7, 8, 4, 7, 8, 4, 1, 7, 1, 5, 6, 8, 3, 4, 6, 1, 5, 4, 1, 6, 4, 7, 5, 1, 1, 3, 6, 3, 6, 7, 6, 8, 6, 7, 2, 0, 1, 5, 8, 4, 8, 2, 0, 8, 8, 7, 8, 0, 7, 8, 3, 2, 3, 2, 4, 7, 0, 6, 0, 1, 5, 0, 2, 1, 4, 7, 1, 8, 3, 3, 1, 5, 2, 6, 3, 4, 1, 0, 1, 6, 0, 5, 1, 3, 1, 6, 2, 1, 4, 4, 6, 2, 5, 3, 6, 2, 8, 1, 7, 1, 6, 7, 2, 2, 5, 7, 6, 1, 8, 8, 6, 0, 6, 0, 4, 5, 7, 6, 5, 8, 0, 7, 3, 5, 6, 2, 1, 5, 3, 0, 1, 5, 8, 4, 2, 4, 7, 4, 0, 2, 6, 1, 2, 1, 3, 8, 6, 6, 5, 4, 6, 5, 0, 1, 4, 4, 3, 7, 0, 5, 1, 5, 6, 1, 6, 8, 5, 6, 4, 0, 2, 0, 1, 8, 5, 4, 7, 3, 0, 0, 8, 5, 3, 4, 2, 0, 1, 4, 2, 7, 4, 3, 8, 0, 8, 6, 7, 8, 3, 4, 0, 7, 6, 7, 2, 7, 0, 4, 8, 1, 6, 1, 5, 8, 4, 2];
const a = [3, 0, 1, 0, 2, 4, 2, 1, 7, 3, 6, 3, 5, 4, 7, 5, 5, 7, 3, 6, 7, 4, 1, 5, 2, 9, 8, 4, 7, 9, 0, 5, 2, 3, 0, 2, 4, 1, 5, 5, 0, 4, 1, 4, 3, 9, 7, 1, 1, 1, 1, 6, 4, 0, 6, 7, 3, 2, 1, 6, 8, 7, 3, 9, 1, 2, 8, 7, 5, 4, 4, 8, 7, 9, 7, 6, 7, 0, 2, 0, 5, 6, 4, 7, 6, 8, 0, 9, 2, 7, 6, 2, 5, 0, 8, 0, 8, 5, 7, 3, 9, 9, 7, 1, 6, 8, 9, 9, 0, 2, 4, 8, 7, 4, 8, 5, 6, 3, 9, 9, 1, 3, 5, 0, 8, 2, 8, 6, 6, 4, 2, 6, 0, 5, 9, 6, 5, 4, 3, 7, 4, 9, 6, 3, 5, 2, 2, 5, 0, 3, 9, 5, 1, 0, 0, 8, 9, 7, 8, 4, 8, 7, 0, 2, 7, 5, 8, 3, 2, 8, 6, 7, 6, 0, 6, 6, 5, 5, 9, 8, 6, 2, 4, 8, 6, 5, 0, 7, 6, 4, 3, 0, 8, 9, 3, 0, 2, 2, 4, 5, 6, 5, 1, 1, 4, 1, 4, 2, 0, 3, 3, 8, 9, 8, 1, 5, 8, 8, 0, 0, 1, 3, 5, 9, 5, 6, 2, 9, 2, 6, 4, 7, 2, 0, 7, 8, 4, 1, 7, 9, 3, 3, 8, 6, 1, 1, 6, 3, 8, 2, 6, 2, 3, 0, 8, 0, 9, 5, 8, 7, 9, 5, 7, 9, 7, 3, 3, 4, 2, 3, 3, 1, 0, 6, 3, 0, 5, 1, 4, 9, 8, 6, 8, 7, 3, 8, 6, 9, 1, 3, 2, 7, 5, 0, 9, 1, 3, 7, 4, 5, 9, 6, 1, 9, 0, 1, 1, 2, 4, 4, 1, 3, 9, 9, 7, 5, 4, 8, 4, 3, 1, 4, 4, 2, 9, 1, 1, 2, 0, 7, 5, 0, 4, 8, 2, 3, 8, 9, 7, 1, 2, 1, 1, 3, 2, 2, 6, 9, 0, 0, 2, 4, 5, 6];
// Grab all indexes from the dictionary
let ids = [];
d.forEach(w => {if (w.id >= 1241) ids.push(w.id);});
// Sort them into ascending order
ids.sort();
// Create an array of ids per person
const allocs = [];
Object.keys(m).forEach(k => {allocs.push([]);});
for (let i = 0; i < a.length; i++) {
	allocs[a[i]].push(d[i+1241]);
}

function showWords(e) {
	// Remove content
	if (table !== undefined) {
		wordWrapper.removeChild(table);
		wordWrapper.removeChild(startButton);
		table = undefined;
	}
	// Add content if needed
	if (select.value.length > 0) {
		person = select.value;
		const words = allocs[m[person]];
		table = document.createElement('table');
		words.forEach(word => {
			const row = document.createElement('tr');
			const english = document.createElement('td');
			english.textContent = word.english;
			row.appendChild(english);
			table.appendChild(row);
		});
		startButton = CreateElement('button', 'start-button', 'Start!');
		startButton.addEventListener('click', play);
		wordWrapper.appendChild(startButton);
		wordWrapper.appendChild(table);
	}
}

function play() {
	wrapper.style.display = 'none';
	playWrapper.style.display = 'flex';
	current = 0;
	timestamps = [];
	startTime = Date.now();
	const word = allocs[m[person]][current];
	playEnglish.textContent = word.english;
}

function changeWord(e) {
	if (e.clientX < playWrapper.clientWidth/2) {
		if (current > 0) {
			current--;
			const word = allocs[m[person]][current];
			playEnglish.textContent = word.english;
			timestamps = timestamps.slice(0,-1);
		} else {
			playWrapper.style.display = 'none';
			wrapper.style.display = 'flex';
			current = 0;
			playEnglish.textContent = '';
		}
	} else {
		if (current < allocs[m[person]].length-1) {
			current++;
			const word = allocs[m[person]][current];
			playEnglish.textContent = word.english;
			timestamps.push(Date.now()-startTime);
		} else {
			playWrapper.style.display = 'none';
			wrapper.style.display = 'flex';
			current = 0;
			playEnglish.textContent = '';
			download(`${person}-timestamps.txt`, timestamps.toString());
		}
	}
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

let current = 0;
let person = undefined;
let timestamps = [];
let startTime = 0;
const wrapper = document.getElementById('wrapper');
const playWrapper = document.getElementById('play-wrapper');
const playEnglish = document.getElementById('play-english');
playWrapper.addEventListener('click', changeWord);
const select = document.getElementById('person-select');
select.addEventListener('change', showWords);
const wordWrapper = document.getElementById('word-wrapper');
let table = undefined;
let startButton = undefined;

// Set up the people
const options = [];
Object.keys(m).forEach(p => {
	const o = CreateElement('option', '', p);
	o.value = p;
	options.push(o);
});
AddChildren(document.getElementById('person-select'), options);

function CreateElement(type, classname, text=null) {
	const elem = document.createElement(type);
	elem.className = classname;
	if (text) elem.textContent = text;
	return elem;
}

function AddChildren(elem, children) {
	children.forEach((child) => {
		elem.appendChild(child);
	});
}

function shuffle(a, range=15) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
}