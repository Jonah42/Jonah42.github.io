// published at drongo-words-recording.surge.sh

class DictWord {
	constructor(id, order, level, type, english, japanese, examples=[], translations=[], note=null) {
		this.id = id;
		this.order = order;
		this.level = level;
		this.type = type; // list of bitmasks - first bit = noun, second = verb, 3rd = adjective, etc.
		this.english = english;
		this.japanese = japanese; // list corresponding to type list
		this.examples = examples; // list
		this.translations = translations; // list
		this.note = note;
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
	const wordList = [];
wordList.push(new DictWord(0, 0, 0, 3, 'nice', 'すてきな', ['I bought a nice bag yesterday.'], ['昨日素敵なかばんを買いました。'], ''));
wordList.push(new DictWord(1, 1, 0, 2, 'meet', '会（あ）う', ['I meet Nicholas every day.'], ['私は毎日ニコラスに会います。'], ''));
wordList.push(new DictWord(2, 2, 0, 8, 'you', 'あなたは、あなたが、あなたを、あなたに', ['You are very cool.'], ['あなたはとてもかっこいいです。'], ''));
wordList.push(new DictWord(3, 3, 0, 3, 'good', 'よい', ['This soup is good.'], ['このスープはよいです。'], ''));
wordList.push(new DictWord(4, 4, 0, 1, 'morning', '朝（あさ）、午（ご）前（ぜん）', ['I wake up at 7am every morning.'], ['毎朝の午前７で起きます。'], ''));
wordList.push(new DictWord(5, 5, 0, 8, 'I', '私（わたし）は、私（わたし）が', ['I am very happy.'], ['私はとても嬉しいです。'], ''));
wordList.push(new DictWord(6, 6, 0, 8, 'my', '私（わたし）の', ['My father is very strong.'], ['私の父はとても強いです。'], ''));
wordList.push(new DictWord(7, 7, 0, 1, 'name', '名（な）前（まえ）', ['His name is Hiro.'], ['彼の名前はひろです。'], ''));
wordList.push(new DictWord(8, 8, 0, 7, 'hello', 'こんにちは', ['"Hello'], [' how are you?"'], 'こんにちは、お元気ですか？'));
wordList.push(new DictWord(9, 9, 0, 2, 'like', '好（す）き', ['I like curry rice.'], ['カレーライスが好きです。'], ''));
wordList.push(new DictWord(10, 10, 0, 1, 'tennis', 'テニス', ['I am good at tennis.'], ['私はテニスのが得意です。'], ''));
wordList.push(new DictWord(11, 11, 0, 4, 'yes', 'はい', ['"Yes'], [' I can do it!"'], 'はい、できます！'));
wordList.push(new DictWord(12, 12, 0, 1, 'fan', '扇（せん）風（ぷう）機（き）、うちわ、扇（おうぎ）、ファン', ['That fan is broken.'], ['あのファンが壊れてます。'], ''));
wordList.push(new DictWord(13, 13, 0, 1, 'pen', 'ペン', ['This is a pen.'], ['これはペンです。'], ''));
wordList.push(new DictWord(14, 14, 0, 10, 'ten', '10、１０', ['I am 10 years old.'], ['私は十歳です。'], ''));
wordList.push(new DictWord(15, 15, 0, 1, 'sun', '太（たい）陽（よう）、日（ひ）', ['The sun is shining.'], ['太陽は光ってます。'], ''));
wordList.push(new DictWord(16, 16, 0, 2, 'run', '走（はし）る', ['I can run fast.'], ['私は早く走ることができます。'], ''));
wordList.push(new DictWord(17, 17, 0, 1, 'hat', '帽（ぼう）子（し）', ['This hat is blue.'], ['この帽子は青い色です。'], ''));
wordList.push(new DictWord(18, 18, 0, 3, 'hot', '熱（あつ）い、暑（あつ）い', ['Today is my birthday.'], ['今日は私の誕生日です。'], ''));
wordList.push(new DictWord(19, 19, 0, 1, 'cup', 'カップ', ['Be careful! That cup is very hot.'], ['注意してください！あのカップはとても暑いです。'], ''));
wordList.push(new DictWord(20, 20, 0, 1, 'cap', 'キャップ', ['Can I wear my cap?'], ['私のキャップを被ってもいいですか？'], ''));
wordList.push(new DictWord(21, 21, 0, 1, 'map', '地（ち）図（ず）', ['Do you have a map?'], ['地図を持ってますか？'], ''));
wordList.push(new DictWord(22, 22, 0, 1, 'mop', 'モップ', ['Please use a mop.'], ['モップを使ってください。'], ''));
wordList.push(new DictWord(23, 23, 0, 2, 'cut', '切（き）る', ['Please cut this line.'], ['この線を切ってください。'], ''));
wordList.push(new DictWord(24, 24, 0, 1, 'TV', 'テレビ', ['I watch TV every night.'], ['毎晩はテレビを見ます。'], ''));
wordList.push(new DictWord(25, 25, 0, 1, 'milk', '牛（ぎゅう）乳（にゅう）、ミルク', ['Do you drink milk?'], ['牛乳を飲めますか？'], ''));
wordList.push(new DictWord(26, 26, 0, 1, 'box', '箱（はこ）', ['There are so many boxes in your room.'], ['あなたの部屋には箱が多いです。'], ''));
wordList.push(new DictWord(27, 27, 0, 1, 'bag', 'かばん、バッグ、ふくろ', ['I like your bag.'], ['あなたのかばんが好きです。'], ''));
wordList.push(new DictWord(28, 28, 0, 1, 'desk', '机（つくえ）', ['This desk is heavy.'], ['この机は重いです。'], ''));
wordList.push(new DictWord(29, 29, 0, 1, 'bed', 'ベッド', ['My bed is very big.'], ['私のベッドはとても大きいです。'], ''));
wordList.push(new DictWord(30, 30, 0, 3, 'red', '赤（あか）い', ['Hiro\'s hat is red.'], ['ひろの帽子は赤色です。'], ''));
wordList.push(new DictWord(31, 31, 0, 1, 'P.E.', '体（たい）育（いく）', ['My favorite subject is P.E.'], ['私の好きな教科は体育です。'], ''));
wordList.push(new DictWord(32, 32, 0, 2, 'play', 'やる、遊（あそ）ぶ', ['Shall we play?'], ['遊びましょうか？'], ''));
wordList.push(new DictWord(33, 33, 0, 1, 'soccer', 'サッカー', ['I do not like soccer.'], ['私はサッカーが好きではないです。'], ''));
wordList.push(new DictWord(34, 34, 0, 2, 'have', '持（も）つ、ある', ['Do you have a pen?'], ['ペンを持ってますか？'], ''));
wordList.push(new DictWord(35, 35, 0, 2, 'want', 'ほしい、～したい', ['I want to eat pizza.'], ['ピザを食べたいです。'], ''));
wordList.push(new DictWord(36, 36, 1, 2, 'call', '呼（よ）ぶ、名（な）づける', ['Please call me Hiro.'], ['ひろっと呼んでください。'], ''));
wordList.push(new DictWord(37, 37, 1, 1, 'South Africa', '南（みなみ）アフリカ', ['He is from South Africa.'], ['彼は南アフリカから出身です。'], ''));
wordList.push(new DictWord(38, 38, 1, 2, 'love', '愛（あい）する', ['I love sushi.'], ['私は寿司が大好きです。'], ''));
wordList.push(new DictWord(39, 39, 1, 8, 'everyone', 'みなさん、みんな', ['Good morning everyone!'], ['みんなさん、おはようございます！'], ''));
wordList.push(new DictWord(40, 40, 1, 8, 'me', '私（わたし）を、私（わたし）に', [], [], ''));
wordList.push(new DictWord(41, 41, 1, 7, 'from', 'から', ['I got this jacket from my friend.'], ['このジャケットは私の友達からもらいました。'], ''));
wordList.push(new DictWord(42, 42, 1, 3, 'Japanese', '日（に）本（ほん）の', ['Japanese food is delicious.'], ['日本の食べ物は美味しいです。'], ''));
wordList.push(new DictWord(43, 43, 1, 1, 'sweet', '甘（あま）い菓（か）子（し）、キャンディー', [], [], ''));
wordList.push(new DictWord(44, 44, 1, 2, 'join', '参（さん）加（か）する、加（くわ）わる', [], [], ''));
wordList.push(new DictWord(45, 45, 1, 1, 'club', 'クラブ、部（ぶ）', ['I will join the culture club in junior high school.'], ['中学校で文化部に参加します。'], ''));
wordList.push(new DictWord(46, 46, 1, 1, 'number', '数（かず）、数（すう）字（じ）', [], [], ''));
wordList.push(new DictWord(47, 47, 1, 4, 'often', 'よく、しばしば', ['I often wake up at 6 a.m.'], ['よく午前6時に起きます。'], ''));
wordList.push(new DictWord(48, 48, 1, 6, 'with', 'いっしょに', ['I will eat dinner with my friends.'], ['友達と一緒に夜ご飯を食べます。'], ''));
wordList.push(new DictWord(49, 49, 1, 9, 'but', 'しかし、けれでも', [], [], ''));
wordList.push(new DictWord(50, 50, 1, 1, 'rugby', 'ラグビー', [], [], ''));
wordList.push(new DictWord(51, 51, 1, 2, 'watch', '見（み）る', ['I watch the sunrise every morning.'], ['毎朝の朝日を見ます。'], ''));
wordList.push(new DictWord(52, 52, 1, 1, 'friend', '友（とも）達（だち）', [], [], ''));
wordList.push(new DictWord(53, 53, 1, 3, 'great', 'すばらしい', ['Today\'s school lunch was great!'], ['今日の給食は素晴らしいでした！'], ''));
wordList.push(new DictWord(54, 54, 1, 4, 'no', 'いいえ', ['No, that\'s wrong.'], 'いいえ、違います。'));
wordList.push(new DictWord(55, 55, 1, 7, 'oh', 'あら、ああ、まあ、おや', [], [], ''));
wordList.push(new DictWord(56, 56, 1, 2, 'draw', 'かく', ['Do you like to draw?'], ['あなたは書くことが好きですか？'], ''));
wordList.push(new DictWord(57, 57, 1, 1, 'anime', 'アニメ', ['I love anime.'], ['アニメが大好きです。'], ''));
wordList.push(new DictWord(58, 58, 1, 9, 'so', 'だから、それで、では', [], [], ''));
wordList.push(new DictWord(59, 59, 1, 6, 'about', 'について', [], [], ''));
wordList.push(new DictWord(60, 60, 1, 1, 'lesson', '授（じゅ）業（ぎょう）、レッスン', [], [], ''));
wordList.push(new DictWord(61, 61, 1, 1, 'comic', 'マンが', [], [], ''));
wordList.push(new DictWord(62, 62, 1, 7, 'wow', 'うわあ、わあ', ['Wow, the sunset is beautiful!'], 'うわあ、夕焼けは美しいですね！'));
wordList.push(new DictWord(63, 63, 1, 6, 'in', '中（なか）', ['The teacher is in the classroom.'], ['先生は教室の中にいます。'], ''));
wordList.push(new DictWord(64, 64, 1, 1, 'art', '美（び）術（じゅつ）、芸（げい）術（じゅつ）', [], [], ''));
wordList.push(new DictWord(65, 65, 1, 4, 'how', 'どうやって', ['How do you make makizushi?'], ['どうやって巻き寿司を作りますか？'], ''));
wordList.push(new DictWord(66, 66, 1, 1, 'school', '学（がっ）校（こう）', [], [], ''));
wordList.push(new DictWord(67, 67, 1, 4, 'now', '今（いま）', [], [], ''));
wordList.push(new DictWord(68, 68, 1, 2, 'take', '取（と）る、撮（と）る、利（り）用（よう）する、受（う）ける', ['Ex. 1 english'], ['Ex. 1 Jap'], ''));
wordList.push(new DictWord(69, 69, 1, 1, 'swimming', '水（すい）泳（えい）', [], [], ''));
wordList.push(new DictWord(70, 70, 1, 1, 'fish', '魚（さかな）', [], [], ''));
wordList.push(new DictWord(71, 71, 1, 1, 'lunch', '昼（ちゅう）食（しょく）', ['I eat lunch at 12 p.m.'], ['私は午後12時に昼食を食べます。'], ''));
wordList.push(new DictWord(72, 72, 1, 1, 'king', '王（おう）', [], [], ''));
wordList.push(new DictWord(73, 73, 1, 1, 'math', '数（すう）学（がく）', [], [], ''));
wordList.push(new DictWord(74, 74, 1, 1, 'English', '英（えい）語（ご）', [], [], ''));
wordList.push(new DictWord(75, 75, 1, 3, 'strong', '強（つよ）い', [], [], ''));
wordList.push(new DictWord(76, 76, 1, 1, 'bath', 'お風（ふ）呂（ろ）、入（にゅう）浴（よく）', [], [], ''));
wordList.push(new DictWord(77, 77, 1, 1, 'clock', '時（と）計（けい）', [], [], ''));
wordList.push(new DictWord(78, 78, 1, 1, 'lake', '湖（みずうみ）、湖（こ）水（すい）', [], [], ''));
wordList.push(new DictWord(79, 79, 1, 1, 'bike', '自（じ）転（てん）車（しゃ）', [], [], ''));
wordList.push(new DictWord(80, 80, 1, 1, 'game', 'ゲーム、遊（あそ）び、試（し）合（あい）、競（きょう）技（ぎ）', [], [], ''));
wordList.push(new DictWord(81, 81, 1, 1, 'shrine', '神（じん）社（じゃ）', [], [], ''));
wordList.push(new DictWord(82, 82, 1, 1, 'nose', '鼻（はな）', [], [], ''));
wordList.push(new DictWord(83, 83, 2, 1, 'class', '学（がっ）級（きゅう）、組（くみ）、クラス、授（じゅ）業（ぎょう）', [], [], ''));
wordList.push(new DictWord(84, 84, 2, 8, 'our', '私（わたし）たちの', [], [], ''));
wordList.push(new DictWord(85, 85, 2, 1, 'Canada', 'カナダ', [], [], ''));
wordList.push(new DictWord(86, 86, 2, 1, 'America', 'アメリカ', [], [], ''));
wordList.push(new DictWord(87, 87, 2, 8, 'he', '彼（かれ）は、彼（かれ）が', [], [], ''));
wordList.push(new DictWord(88, 88, 2, 8, 'she', '彼（かの）女（じょ）は、彼（かの）女（じょ）が', [], [], ''));
wordList.push(new DictWord(89, 89, 2, 1, 'teacher', '先（せん）生（せい）、教（きょう）師（し）', [], [], ''));
wordList.push(new DictWord(90, 90, 2, 1, 'team', 'チーム、組（くみ）', [], [], ''));
wordList.push(new DictWord(91, 91, 2, 3, 'cool', 'かっこいい', [], [], ''));
wordList.push(new DictWord(92, 92, 2, 3, 'Chinese', '中（ちゅう）国（ごく）の', [], [], ''));
wordList.push(new DictWord(93, 93, 2, 5, 'cannot', 'できない', [], [], ''));
wordList.push(new DictWord(94, 94, 2, 3, 'some', 'いくつかの、いくらかの、少（すこ）しの', [], [], ''));
wordList.push(new DictWord(95, 95, 2, 1, 'parent', '親（おや）', [], [], ''));
wordList.push(new DictWord(96, 96, 2, 1, 'China', '中（ちゅう）国（ごく）', [], [], ''));
wordList.push(new DictWord(97, 97, 2, 1, 'food', '食（た）べ物（もの）', [], [], ''));
wordList.push(new DictWord(98, 98, 2, 1, 'father', '父（ちち）、お父（とう）さん', [], [], ''));
wordList.push(new DictWord(99, 99, 2, 5, 'can', 'できる', [], [], ''));
wordList.push(new DictWord(100, 100, 2, 2, 'make', '作（つく）る', [], [], ''));
wordList.push(new DictWord(101, 101, 2, 4, 'very', 'とても', [], [], ''));
wordList.push(new DictWord(102, 102, 2, 4, 'well', 'じょうずに、うまく、よく', [], [], ''));
wordList.push(new DictWord(103, 103, 2, 8, 'that', 'それ、あれ、その、あの', [], [], ''));
wordList.push(new DictWord(104, 104, 2, 2, 'read', '読（よ）む', [], [], ''));
wordList.push(new DictWord(105, 105, 2, 4, 'really', '本（ほん）当（とう）ですか、へえ、そうなんだ', [], [], ''));
wordList.push(new DictWord(106, 106, 2, 2, 'see', 'わかる、見（み）る、会（あ）う', [], [], ''));
wordList.push(new DictWord(107, 107, 2, 0, 'excuse me', 'すみません', [], [], ''));
wordList.push(new DictWord(108, 108, 2, 7, 'oops', 'おっと、うわっ、しまった', [], [], ''));
wordList.push(new DictWord(109, 109, 2, 1, 'here', 'ここ', [], [], ''));
wordList.push(new DictWord(110, 110, 2, 0, 'Here you are', 'はい、どうぞ。', [], [], ''));
wordList.push(new DictWord(111, 111, 2, 7, 'welcome', 'ようこそ', [], [], ''));
wordList.push(new DictWord(112, 112, 2, 0, 'You\'re welcome', 'どういたしまして', [], [], ''));
wordList.push(new DictWord(113, 113, 2, 8, 'your', 'あなたの、あなたたちの', [], [], ''));
wordList.push(new DictWord(114, 114, 2, 0, 'thank you', 'ありがとう', [], [], ''));
wordList.push(new DictWord(115, 115, 2, 8, 'it', 'それ', [], [], ''));
wordList.push(new DictWord(116, 116, 2, 1, 'bird', '鳥（とり）', [], [], ''));
wordList.push(new DictWord(117, 117, 2, 1, 'train', '電（でん）車（しゃ）、列（れっ）車（しゃ）', [], [], ''));
wordList.push(new DictWord(118, 118, 2, 1, 'rain', '雨（あめ）', [], [], ''));
wordList.push(new DictWord(119, 119, 2, 1, 'glue', 'のり、接（せっ）着（ちゃく）剤（ざい）', [], [], ''));
wordList.push(new DictWord(120, 120, 2, 1, 'fruit', '果（くだ）物（もの）', [], [], ''));
wordList.push(new DictWord(121, 121, 2, 1, 'beef', '牛（ぎゅう）肉（にく）', [], [], ''));
wordList.push(new DictWord(122, 122, 2, 1, 'sea', '海（うみ）、海（かい）洋（よう）', [], [], ''));
wordList.push(new DictWord(123, 123, 2, 1, 'season', '季（き）節（せつ）', [], [], ''));
wordList.push(new DictWord(124, 124, 2, 1, 'peach', 'モモ', [], [], ''));
wordList.push(new DictWord(125, 125, 2, 1, 'day', '日（ひ）', [], [], ''));
wordList.push(new DictWord(126, 126, 2, 1, 'beach', '浜（はま）、ビーチ', [], [], ''));
wordList.push(new DictWord(127, 127, 2, 2, 'speak', '話（はな）す', [], [], ''));
wordList.push(new DictWord(128, 128, 2, 3, 'rainy', '雨（あめ）の', [], [], ''));
wordList.push(new DictWord(129, 129, 2, 1, 'cheese', 'チーズ', [], [], ''));
wordList.push(new DictWord(130, 130, 2, 1, 'room', '部（へ）屋（や）', [], [], ''));
wordList.push(new DictWord(131, 131, 2, 1, 'classroom', '教（きょう）室（しつ）', [], [], ''));
wordList.push(new DictWord(132, 132, 2, 1, 'swimming pool', 'プール', [], [], ''));
wordList.push(new DictWord(133, 133, 2, 2, 'cook', '料（りょう）理（り）する', [], [], ''));
wordList.push(new DictWord(134, 134, 2, 1, 'cooking', '料（りょう）理（り）', [], [], ''));
wordList.push(new DictWord(135, 135, 2, 1, 'textbook', '教（きょう）科（か）書（しょ）', [], [], ''));
wordList.push(new DictWord(136, 136, 2, 1, 'notebook', 'ノート', [], [], ''));
wordList.push(new DictWord(137, 137, 2, 1, 'today', '今日（きょう）', [], [], ''));
wordList.push(new DictWord(138, 138, 2, 3, 'usually', 'たいてい、ふつう', [], [], ''));

	wordList.sort((a, b) => {return a.order-b.order});
	return wordList;
}

const m = { // m is for map
	'Jonah': 0,
	'Sean': 1,
	'Harrison': 2,
	'Megan': 3,
	'Tzu-han': 4
};

const d = InitWords();
// Create the allocations array
const a = [4, 2, 1, 1, 3, 3, 4, 3, 0, 2, 2, 3, 3, 0, 1, 0, 1, 0, 2, 0, 4, 4, 1, 1, 4, 0, 1, 1, 1, 4, 3, 3, 4, 0, 4, 3, 3, 2, 0, 1, 0, 3, 1, 1, 0, 2, 3, 2, 4, 4, 1, 2, 0, 2, 0, 1, 0, 3, 2, 0, 2, 0, 3, 2, 3, 3, 0, 1, 1, 1, 3, 1, 1, 4, 3, 1, 4, 2, 4, 1, 0, 3, 0, 1, 2, 2, 3, 3, 3, 4, 0, 0, 4, 4, 0, 4, 2, 1, 1, 1, 3, 1, 3, 4, 2, 2, 3, 4, 2, 2, 0, 2, 4, 0, 2, 3, 2, 2, 0, 2, 2, 0, 3, 4, 2, 1, 4, 4, 0, 4, 4, 4, 3, 3, 2, 0, 4, 1, 0];
// Grab all indexes from the dictionary
let ids = [];
d.forEach(w => {ids.push(w.id);});
// Sort them into ascending order
ids.sort();
// Create an array of ids per person
const allocs = [];
Object.keys(m).forEach(k => {allocs.push([]);});
for (let i = 0; i < a.length; i++) {
	allocs[a[i]].push(d[i]);
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