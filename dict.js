// published at drongo-words-recording.surge.sh

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
	const wordList = [];
wordList.push(new DictWord(0, 0, 0, 3, `nice`, `すてきな`, `great`, [`I bought a nice bag yesterday.`], [`昨日素敵なかばんを買いました。`], ));
wordList.push(new DictWord(1, 1, 0, 2, `meet`, `会（あ）う`, ``, [`I meet Nicholas every day.`], [`私は毎日ニコラスに会います。`], ));
wordList.push(new DictWord(2, 2, 0, 8, `you`, `あなたは、あなたが、あなたを、あなたに`, ``, [`You are very cool.`], [`あなたはとてもかっこいいです。`], ));
wordList.push(new DictWord(3, 3, 0, 3, `good`, `よい`, `great`, [`This soup is good.`], [`このスープはよいです。`], ));
wordList.push(new DictWord(4, 4, 0, 1, `morning`, `朝（あさ）、午（ご）前（ぜん）`, ``, [`I wake up at 7am every morning.`], [`毎朝の午前７で起きます。`], ));
wordList.push(new DictWord(5, 5, 0, 8, `I`, `私（わたし）は、私（わたし）が`, ``, [`I am very happy.`], [`私はとても嬉しいです。`], ));
wordList.push(new DictWord(6, 6, 0, 7, `hi`, `やあ、こんにちは`, `hello、hey`, [], [], ));
wordList.push(new DictWord(7, 7, 0, 8, `my`, `私（わたし）の`, ``, [`My father is very strong.`], [`私の父はとても強いです。`], ));
wordList.push(new DictWord(8, 8, 0, 1, `name`, `名（な）前（まえ）`, ``, [`His name is Hiro.`], [`彼の名前はひろです。`], ));
wordList.push(new DictWord(9, 9, 0, 7, `hello`, `こんにちは`, `hi、hey`, [`Hello, how are you?`], [`こんにちは、お元気ですか？`], ));
wordList.push(new DictWord(10, 10, 0, 2, `do`, `する`, ``, [], [], ));
wordList.push(new DictWord(11, 11, 0, 2, `like`, `好（す）き`, ``, [`I like curry rice.`], [`カレーライスが好きです。`], ));
wordList.push(new DictWord(12, 12, 0, 1, `tennis`, `テニス`, ``, [`I am good at tennis.`], [`私はテニスのが得意です。`], ));
wordList.push(new DictWord(13, 13, 0, 4, `yes`, `はい`, ``, [`Yes, I can do it!`], [`はい、できます！`], ));
wordList.push(new DictWord(14, 14, 0, 1, `fan`, `扇（せん）風（ぷう）機（き）、うちわ、扇（おうぎ）、ファン`, ``, [`That fan is broken.`], [`あのファンが壊れてます。`], ));
wordList.push(new DictWord(15, 15, 0, 1, `pen`, `ペン`, ``, [`This is a pen.`], [`これはペンです。`], ));
wordList.push(new DictWord(16, 16, 0, 10, `ten`, `十（じゅう）、１０`, ``, [`I am 10 years old.`], [`私は十歳です。`], ));
wordList.push(new DictWord(17, 17, 0, 1, `sun`, `太（たい）陽（よう）、日（ひ）`, ``, [`The sun is shining.`], [`太陽は光ってます。`], ));
wordList.push(new DictWord(18, 18, 0, 2, `run`, `走（はし）る`, ``, [`I can run fast.`], [`私は早く走ることができます。`], ));
wordList.push(new DictWord(19, 19, 0, 1, `hat`, `帽（ぼう）子（し）`, ``, [`This hat is blue.`], [`この帽子は青い色です。`], ));
wordList.push(new DictWord(20, 20, 0, 3, `hot`, `熱（あつ）い、暑（あつ）い`, ``, [`Today is my birthday.`], [`今日は私の誕生日です。`], ));
wordList.push(new DictWord(21, 21, 0, 1, `cup`, `カップ`, ``, [`Be careful! That cup is very hot.`], [`注意してください！あのカップはとても暑いです。`], ));
wordList.push(new DictWord(22, 22, 0, 1, `cap`, `キャップ`, ``, [`Can I wear my cap?`], [`私のキャップを被ってもいいですか？`], ));
wordList.push(new DictWord(23, 23, 0, 1, `map`, `地（ち）図（ず）`, ``, [`Do you have a map?`], [`地図を持ってますか？`], ));
wordList.push(new DictWord(24, 24, 0, 1, `mop`, `モップ`, ``, [`Please use a mop.`], [`モップを使ってください。`], ));
wordList.push(new DictWord(25, 25, 0, 2, `cut`, `切（き）る`, ``, [`Please cut this line.`], [`この線を切ってください。`], ));
wordList.push(new DictWord(26, 26, 0, 1, `TV`, `テレビ`, ``, [`I watch TV every night.`], [`毎晩はテレビを見ます。`], ));
wordList.push(new DictWord(27, 27, 0, 1, `milk`, `牛（ぎゅう）乳（にゅう）、ミルク`, ``, [`Do you drink milk?`], [`牛乳を飲めますか？`], ));
wordList.push(new DictWord(28, 28, 0, 1, `box`, `箱（はこ）`, ``, [`There are so many boxes in your room.`], [`あなたの部屋には箱が多いです。`], ));
wordList.push(new DictWord(29, 29, 0, 1, `bag`, `かばん、バッグ、ふくろ`, ``, [`I like your bag.`], [`あなたのかばんが好きです。`], ));
wordList.push(new DictWord(30, 30, 0, 1, `desk`, `机（つくえ）`, ``, [`This desk is heavy.`], [`この机は重いです。`], ));
wordList.push(new DictWord(31, 31, 0, 1, `bed`, `ベッド`, ``, [`My bed is very big.`], [`私のベッドはとても大きいです。`], ));
wordList.push(new DictWord(32, 32, 0, 10, `one`, `一（いち）、１`, ``, [], [], ));
wordList.push(new DictWord(33, 33, 0, 10, `two`, `ニ（に）、２`, ``, [], [], ));
wordList.push(new DictWord(34, 34, 0, 10, `three`, `三（さん）、３`, ``, [], [], ));
wordList.push(new DictWord(35, 35, 0, 10, `zero`, `ゼロ、０`, ``, [], [], ));
wordList.push(new DictWord(36, 36, 1, 1, `apple`, `リンゴ`, ``, [], [], ));
wordList.push(new DictWord(37, 37, 1, 1, `bat`, `バット`, ``, [], [], ));
wordList.push(new DictWord(38, 38, 1, 1, `cat`, `猫（ねこ）`, ``, [], [], ));
wordList.push(new DictWord(39, 39, 1, 1, `dog`, `犬（いぬ）`, ``, [], [], ));
wordList.push(new DictWord(40, 40, 1, 1, `egg`, `卵（たまご）`, ``, [], [], ));
wordList.push(new DictWord(41, 41, 1, 1, `flower`, `花（はな）`, ``, [], [], ));
wordList.push(new DictWord(42, 42, 1, 1, `gorilla`, `ゴリラ`, ``, [], [], ));
wordList.push(new DictWord(43, 43, 1, 1, `horse`, `馬（うま）`, ``, [], [], ));
wordList.push(new DictWord(44, 44, 1, 1, `ink`, `インク`, ``, [], [], ));
wordList.push(new DictWord(45, 45, 1, 2, `jump`, `飛（と）ぶ`, ``, [], [], ));
wordList.push(new DictWord(46, 46, 1, 1, `koala`, `コアラ`, ``, [], [], ));
wordList.push(new DictWord(47, 47, 1, 1, `monkey`, `サル`, ``, [], [], ));
wordList.push(new DictWord(48, 48, 1, 1, `octopus`, `タコ`, ``, [], [], ));
wordList.push(new DictWord(49, 49, 1, 1, `queen`, `女（じょ）王（おう）`, ``, [], [], ));
wordList.push(new DictWord(50, 50, 1, 1, `rabbit`, `ウサギ`, ``, [], [], ));
wordList.push(new DictWord(51, 51, 1, 1, `snake`, `蛇（へび）`, ``, [], [], ));
wordList.push(new DictWord(52, 52, 1, 1, `tree`, `木（き）`, ``, [], [], ));
wordList.push(new DictWord(53, 53, 1, 1, `umbrella`, `傘（かさ）`, ``, [], [], ));
wordList.push(new DictWord(54, 54, 1, 1, `wolf`, `狼（おおかみ）`, ``, [], [], ));
wordList.push(new DictWord(55, 55, 1, 1, `fox`, `狐（きつね）`, ``, [], [], ));
wordList.push(new DictWord(56, 56, 1, 1, `evening`, `夕（ゆう）方（がた）、晩（ばん）`, `night`, [], [], ));
wordList.push(new DictWord(57, 57, 1, 1, `ice`, `氷（こおり）`, ``, [], [], ));
wordList.push(new DictWord(58, 58, 1, 1, `ocean`, `海（うみ）`, `sea`, [], [], ));
wordList.push(new DictWord(59, 59, 1, 3, `red`, `赤（あか）い`, ``, [`Hiro's hat is red.`], [`ひろの帽子は赤色です。`], ));
wordList.push(new DictWord(60, 60, 1, 1, `P.E.`, `体（たい）育（いく）`, ``, [`My favorite subject is P.E.`], [`私の好きな教科は体育です。`], ));
wordList.push(new DictWord(61, 61, 1, 2, `play`, `やる、遊（あそ）ぶ`, ``, [`Shall we play?`], [`遊びましょうか？`], ));
wordList.push(new DictWord(62, 62, 1, 1, `soccer`, `サッカー`, ``, [`I do not like soccer.`], [`私はサッカーが好きではないです。`], ));
wordList.push(new DictWord(63, 63, 1, 2, `have`, `持（も）つ、ある`, ``, [`Do you have a pen?`], [`ペンを持ってますか？`], ));
wordList.push(new DictWord(64, 64, 1, 2, `want`, `ほしい、～したい`, ``, [`I want to eat pizza.`], [`ピザを食べたいです。`], ));
wordList.push(new DictWord(65, 65, 1, 10, `four`, `四（よん）、４`, ``, [], [], ));
wordList.push(new DictWord(66, 66, 1, 10, `five`, `五（ご）、５`, ``, [], [], ));
wordList.push(new DictWord(67, 67, 1, 10, `six`, `六（ろく）、６`, ``, [], [], ));
wordList.push(new DictWord(68, 68, 2, 3, `tired`, `疲（つか）れた`, ``, [], [], ));
wordList.push(new DictWord(69, 69, 2, 3, `sleepy`, `眠（ねむ）い`, ``, [], [], ));
wordList.push(new DictWord(70, 70, 2, 3, `hungry`, `空（くう）腹（ふく）`, ``, [], [], ));
wordList.push(new DictWord(71, 71, 2, 3, `thirsty`, `喉（のど）の渇（かわ）いた`, ``, [], [], ));
wordList.push(new DictWord(72, 72, 2, 2, `call`, `呼（よ）ぶ、名（な）づける`, ``, [`Please call me Hiro.`], [`ひろっと呼んでください。`], ));
wordList.push(new DictWord(73, 73, 2, 1, `South Africa`, `南（みなみ）アフリカ`, ``, [`He is from South Africa.`], [`彼は南アフリカから出身です。`], ));
wordList.push(new DictWord(74, 74, 2, 2, `love`, `愛（あい）する`, ``, [`I love sushi.`], [`私は寿司が大好きです。`], ));
wordList.push(new DictWord(75, 75, 2, 8, `everyone`, `みなさん、みんな`, ``, [`Good morning everyone!`], [`みんなさん、おはようございます！`], ));
wordList.push(new DictWord(76, 76, 2, 8, `me`, `私（わたし）を、私（わたし）に`, ``, [`Me?`], [`私？`], ));
wordList.push(new DictWord(77, 77, 2, 7, `from`, `から`, ``, [`I got this jacket from my friend.`], [`このジャケットは私の友達からもらいました。`], ));
wordList.push(new DictWord(78, 78, 2, 3, `Japanese`, `日（に）本（ほん）の、日（に）本（ほん）語（ご）`, ``, [`Japanese food is delicious.`], [`日本の食べ物は美味しいです。`], ));
wordList.push(new DictWord(79, 79, 2, 1, `sweet`, `甘（あま）い菓（か）子（し）、キャンディー`, ``, [`This cake is really sweet!`], [`このケーキはとても甘い！`], ));
wordList.push(new DictWord(80, 80, 2, 2, `join`, `参（さん）加（か）する、加（くわ）わる`, ``, [`I will join the culture club in junior high school.`], [`中学校で文化部に参加します。`], ));
wordList.push(new DictWord(81, 81, 2, 1, `club`, `クラブ、部（ぶ）`, ``, [`I am a member of the chorus club.`], [`コラス部のメンバーです。`], ));
wordList.push(new DictWord(82, 82, 2, 1, `number`, `数（かず）、数（すう）字（じ）`, ``, [], [], ));
wordList.push(new DictWord(83, 83, 2, 4, `often`, `よく、しばしば`, ``, [`I often wake up at 6 a.m.`], [`よく午前6時に起きます。`], ));
wordList.push(new DictWord(84, 84, 2, 6, `with`, `いっしょに`, ``, [`I will eat dinner with my friends.`], [`友達と一緒に夜ご飯を食べます。`], ));
wordList.push(new DictWord(85, 85, 2, 9, `but`, `しかし、けれでも`, ``, [], [], ));
wordList.push(new DictWord(86, 86, 2, 1, `rugby`, `ラグビー`, ``, [`Do you like rugby?`], [`ラグビーが好きですか？`], ));
wordList.push(new DictWord(87, 87, 2, 2, `watch`, `見（み）る`, ``, [`I watch the sunrise every morning.`], [`毎朝の朝日を見ます。`], ));
wordList.push(new DictWord(88, 88, 2, 1, `friend`, `友（とも）達（だち）`, ``, [`My friend is really cool.`], [`私の友達はとてもかっこいいです。`], ));
wordList.push(new DictWord(89, 89, 2, 3, `great`, `すごい`, `good、nice`, [`Today's school lunch was great!`], [`今日の給食はすごいでした！`], ));
wordList.push(new DictWord(90, 90, 2, 4, `no`, `いいえ`, ``, [`No, that's wrong.`], [`いいえ、違います。`], ));
wordList.push(new DictWord(91, 91, 2, 7, `oh`, `あら、ああ、まあ、おや`, ``, [`Oh, it's time to go home.`], [`あら、帰る時間です。`], ));
wordList.push(new DictWord(92, 92, 2, 2, `draw`, `描（えが）く、書（か）く`, ``, [`Do you like to draw?`], [`あなたは書くのが好きですか？`], ));
wordList.push(new DictWord(93, 93, 2, 1, `anime`, `アニメ`, ``, [`I love anime.`], [`アニメが大好きです。`], ));
wordList.push(new DictWord(94, 94, 2, 9, `so`, `だから、それで、では`, ``, [`So, shall we finish class?`], [`では、授業を終えましょうか？`], ));
wordList.push(new DictWord(95, 95, 2, 6, `about`, `について`, ``, [], [], ));
wordList.push(new DictWord(96, 96, 2, 1, `lesson`, `授（じゅ）業（ぎょう）、レッスン`, ``, [`What time is today's lesson?`], [`今日のレッスンは何時ですか？`], ));
wordList.push(new DictWord(97, 97, 2, 1, `comic`, `まんが`, ``, [`Do you read comics?`], [`漫画を読みますか？`], ));
wordList.push(new DictWord(98, 98, 2, 7, `wow`, `うわあ、わあ`, ``, [`Wow, the sunset is beautiful!`], [`うわあ、夕焼けは美しいですね！`], ));
wordList.push(new DictWord(99, 99, 2, 6, `in`, `中（なか）`, ``, [`The teacher is in the classroom.`], [`先生は教室の中にいます。`], ));
wordList.push(new DictWord(100, 100, 2, 1, `art`, `美（び）術（じゅつ）、芸（げい）術（じゅつ）`, ``, [`I went to an art museum with my family.`], [`家族と美術館へ行きました。`], ));
wordList.push(new DictWord(101, 101, 2, 4, `how`, `どうやって`, ``, [`How do you make makizushi?`], [`どうやって巻き寿司を作りますか？`], ));
wordList.push(new DictWord(102, 102, 2, 1, `school`, `学（がっ）校（こう）`, ``, [`I will go to school this Saturday.`], [`今度の土曜日に学校へ行く予定です。`], ));
wordList.push(new DictWord(103, 103, 2, 4, `now`, `今（いま）`, ``, [`Are you free now?`], [`今は暇ですか？`], ));
wordList.push(new DictWord(104, 104, 2, 2, `take`, `取（と）る、撮（と）る、利（り）用（よう）する、受（う）ける`, ``, [`Can you take my picture?`, `She takes swimming lessons.`], [`私の写真を撮ってくれませんか？`, `彼女は水泳レッスンを取ってます。`], ));
wordList.push(new DictWord(105, 105, 2, 1, `swimming`, `水（すい）泳（えい）`, ``, [`I swim at the beach in summer vacation.`], [`夏休みにビーチで水泳をします。`], ));
wordList.push(new DictWord(106, 106, 2, 10, `seven`, `七（なな）、７`, ``, [], [], ));
wordList.push(new DictWord(107, 107, 2, 10, `eight`, `八（はち）、８`, ``, [], [], ));
wordList.push(new DictWord(108, 108, 2, 10, `nine`, `九（きゅう）、９`, ``, [], [], ));
wordList.push(new DictWord(109, 109, 3, 1, `fish`, `魚（さかな）`, ``, [`My favorite fish is salmon.`], [`私の一番好きな魚はサーモンです。`], ));
wordList.push(new DictWord(110, 110, 3, 1, `lunch`, `昼（ちゅう）食（しょく）`, ``, [`I eat lunch at 12 p.m.`], [`私は午後12時に昼食を食べます。`], ));
wordList.push(new DictWord(111, 111, 3, 1, `king`, `王（おう）`, ``, [`Jonah is the king of Fukue Junior High School.`], [`ジョナは福江中学校の王様です。`], ));
wordList.push(new DictWord(112, 112, 3, 1, `math`, `数（すう）学（がく）`, ``, [`Math is very difficult.`], [`数学はとても難しいです。`], ));
wordList.push(new DictWord(113, 113, 3, 1, `English`, `英（えい）語（ご）`, ``, [`Can you speak English?`], [`英語は話せますか？`], ));
wordList.push(new DictWord(114, 114, 3, 3, `strong`, `強（つよ）い`, ``, [`He is very strong.`], [`彼はとても強いです。`], ));
wordList.push(new DictWord(115, 115, 3, 1, `bath`, `お風（ふ）呂（ろ）、入（にゅう）浴（よく）`, ``, [`Can I use the bath?`], [`お風呂を使ってもいいですか？`], ));
wordList.push(new DictWord(116, 116, 3, 1, `clock`, `時（と）計（けい）`, ``, [`I can't see the clock.`], [`時計は見えません。`], ));
wordList.push(new DictWord(117, 117, 3, 1, `lake`, `湖（みずうみ）、湖（こ）水（すい）`, ``, [`Let's go fishing at the lake!`], [`湖で釣りに行きましょう！`], ));
wordList.push(new DictWord(118, 118, 3, 1, `bike`, `自（じ）転（てん）車（しゃ）`, ``, [`I go to school by bike.`], [`私は自転車で学校に行きます。`], ));
wordList.push(new DictWord(119, 119, 3, 1, `game`, `ゲーム、遊（あそ）び、試（し）合（あい）、競（きょう）技（ぎ）`, ``, [], [], ));
wordList.push(new DictWord(120, 120, 3, 1, `shrine`, `神（じん）社（じゃ）`, ``, [`Hiro went to a shrine last week.`], [`ひろは先週で神社へ行きました。`], ));
wordList.push(new DictWord(121, 121, 3, 1, `nose`, `鼻（はな）`, ``, [`My nose is itchy.`], [`私の鼻はかゆいです。`], ));
wordList.push(new DictWord(122, 122, 3, 1, `shop`, `店（みせ）`, ``, [], [], ));
wordList.push(new DictWord(123, 123, 3, 1, `cherry`, `さくらんぼ`, ``, [], [], ));
wordList.push(new DictWord(124, 124, 3, 2, `think`, `考（かんが）える、思（おも）う`, ``, [], [], ));
wordList.push(new DictWord(125, 125, 3, 8, `this`, `これ、この`, ``, [], [], ));
wordList.push(new DictWord(126, 126, 3, 3, `white`, `白（しろ）い`, ``, [], [], ));
wordList.push(new DictWord(127, 127, 3, 1, `photo`, `写（しゃ）真（しん）`, ``, [], [], ));
wordList.push(new DictWord(128, 128, 3, 2, `sing`, `歌（うた）う`, ``, [], [], ));
wordList.push(new DictWord(129, 129, 3, 3, `black`, `黒（くろ）い`, ``, [], [], ));
wordList.push(new DictWord(130, 130, 3, 1, `cake`, `ケーキ`, ``, [], [], ));
wordList.push(new DictWord(131, 131, 3, 8, `we`, `私（わたし）たちは、私（わたし）たちが`, ``, [], [], ));
wordList.push(new DictWord(132, 132, 3, 1, `rice`, `米（こめ）`, ``, [], [], ));
wordList.push(new DictWord(133, 133, 3, 1, `home`, `家（いえ）`, ``, [], [], ));
wordList.push(new DictWord(134, 134, 3, 3, `cute`, `かわいい`, ``, [], [], ));
wordList.push(new DictWord(135, 135, 3, 10, `eleven`, `十（じゅう）一（いち）、１１`, ``, [], [], ));
wordList.push(new DictWord(136, 136, 3, 10, `twelve`, `十（じゅう）ニ（に）、１２`, ``, [], [], ));
wordList.push(new DictWord(137, 137, 3, 10, `thirteen`, `十（じゅう）三（さん）、１３`, ``, [], [], ));
wordList.push(new DictWord(138, 138, 3, 1, `badminton`, `バドミントン`, ``, [], [], ));
wordList.push(new DictWord(139, 139, 3, 1, `chocolate`, `チョコレート`, ``, [], [], ));
wordList.push(new DictWord(140, 140, 3, 2, `dance`, `踊（おど）る`, ``, [], [], ));
wordList.push(new DictWord(141, 141, 3, 1, `ice cream`, `アイスクリーム`, ``, [], [], ));
wordList.push(new DictWord(142, 142, 3, 1, `lemon`, `レモン`, ``, [], [], ));
wordList.push(new DictWord(143, 143, 3, 1, `melon`, `メロン`, ``, [], [], ));
wordList.push(new DictWord(144, 144, 3, 1, `pencil`, `鉛（えん）筆（ぴつ）`, ``, [], [], ));
wordList.push(new DictWord(145, 145, 3, 3, `short`, `短（みじか）い`, ``, [], [], ));
wordList.push(new DictWord(146, 146, 3, 1, `tiger`, `トラ`, ``, [], [], ));
wordList.push(new DictWord(147, 147, 3, 1, `volleyball`, `バレーボール`, ``, [], [], ));
wordList.push(new DictWord(148, 148, 3, 1, `watermelon`, `スイカ`, ``, [], [], ));
wordList.push(new DictWord(149, 149, 4, 1, `class`, `学（がっ）級（きゅう）、組（くみ）、クラス、授（じゅ）業（ぎょう）`, ``, [`I am not in class 1-B.`], [`私は一年B組ではありません。`], ));
wordList.push(new DictWord(150, 150, 4, 8, `our`, `私（わたし）たちの`, ``, [`She is our English teacher.`], [`彼女は私たちの英語の先生です。`], ));
wordList.push(new DictWord(151, 151, 4, 1, `Canada`, `カナダ`, ``, [`She is from Canada.`], [`彼女はカナダ出身です。`], ));
wordList.push(new DictWord(152, 152, 4, 1, `America`, `アメリカ`, ``, [`I am not from America.`], [`私はアメリカ出身ではありません。`], ));
wordList.push(new DictWord(153, 153, 4, 8, `he`, `彼（かれ）は、彼（かれ）が`, ``, [`He is my grandfather.`], [`彼は私のじいさんです。`], ));
wordList.push(new DictWord(154, 154, 4, 8, `she`, `彼（かの）女（じょ）は、彼（かの）女（じょ）が`, ``, [`She is Japanese.`], [`彼女は日本人です。`], ));
wordList.push(new DictWord(155, 155, 4, 1, `teacher`, `先（せん）生（せい）、教（きょう）師（し）`, ``, [`I want to be a teacher.`], [`私は先生になりたいです。`], ));
wordList.push(new DictWord(156, 156, 4, 1, `team`, `チーム、組（くみ）`, ``, [`I am on the soccer team.`], [`私はサッカーチームの一員です。`], ));
wordList.push(new DictWord(157, 157, 4, 3, `cool`, `かっこいい`, ``, [`My brother is cool.`], [`私の兄はかっこいいです。`], ));
wordList.push(new DictWord(158, 158, 4, 3, `Chinese`, `中（ちゅう）国（ごく）の`, ``, [`Do you like Chinese food?`], [`あなたは中国の料理がすきですか？`], ));
wordList.push(new DictWord(159, 159, 4, 5, `cannot`, `できない`, ``, [`Yoshi cannot eat soba.`], [`彼はそばを食べられません。`], ));
wordList.push(new DictWord(160, 160, 4, 3, `some`, `いくつかの、いくらかの、少（すこ）しの`, ``, [`I have some potatoes in my bag.`], [`私のカバンにいくつかのじゃがいもがあります。`], ));
wordList.push(new DictWord(161, 161, 4, 1, `parent`, `親（おや）`, ``, [`My parent is strong.`], [`私の親は強いです。`], ));
wordList.push(new DictWord(162, 162, 4, 1, `China`, `中（ちゅう）国（ごく）`, ``, [`I went to China last summer.`], [`私は去年の夏に中国に行きました。`], ));
wordList.push(new DictWord(163, 163, 4, 1, `food`, `食（た）べ物（もの）`, ``, [`My favorite food is sushi.`], [`私のお気に入りの食べ物はすしです。`], ));
wordList.push(new DictWord(164, 164, 4, 1, `father`, `父（ちち）、お父（とう）さん`, `dad`, [`My father is kind.`], [`私のお父さんはやさしいです。`], ));
wordList.push(new DictWord(165, 165, 4, 5, `can`, `できる`, ``, [`He can make curry and rice.`], [`彼はカレーライスを作ることができます。`], ));
wordList.push(new DictWord(166, 166, 4, 2, `make`, `作（つく）る`, ``, [`She can make cookies.`], [`彼女はクッキーを作ることができます。`], ));
wordList.push(new DictWord(167, 167, 4, 4, `very`, `とても`, ``, [`Today is very cool.`], [`今日はとても涼しいです。`], ));
wordList.push(new DictWord(168, 168, 4, 4, `well`, `じょうずに、うまく、よく`, ``, [`She can sing well.`], [`彼女は上手く歌えます。`], ));
wordList.push(new DictWord(169, 169, 4, 8, `that`, `それ、あれ、その、あの`, ``, [`Is that your cat?`], [`それはあなたのねこですか？`], ));
wordList.push(new DictWord(170, 170, 4, 2, `read`, `読（よ）む`, ``, [`I read a book every week.`], [`私は毎週一冊の本を読みます。`], ));
wordList.push(new DictWord(171, 171, 4, 4, `really`, `本（ほん）当（とう）ですか、へえ、そうなんだ`, ``, [`Really?`], [`本当に？`], ));
wordList.push(new DictWord(172, 172, 4, 2, `see`, `わかる、見（み）る、会（あ）う`, `look`, [`You can see the gym from our classroom.`, `I see.`], [`教室から体育館を見ることができます。`, `分かった。（なるほど）。`], ));
wordList.push(new DictWord(173, 173, 4, 0, `excuse me`, `すみません`, ``, [`Excuse me, where is the station?`], [`すみません、駅はどこですか？`], ));
wordList.push(new DictWord(174, 174, 4, 7, `oops`, `おっと、うわっ、しまった`, ``, [`Oops!`], [`しまった！`], ));
wordList.push(new DictWord(175, 175, 4, 1, `here`, `ここ`, ``, [`Come here.`], [`ここに来て。`], ));
wordList.push(new DictWord(176, 176, 4, 0, `Here you are`, `はい、どうぞ。`, ``, [`Here you are.`], [`はい、どうぞ。`], ));
wordList.push(new DictWord(177, 177, 4, 7, `welcome`, `ようこそ`, ``, [`Welcome to our class!`], [`私たちのクラスにようこそ。`], ));
wordList.push(new DictWord(178, 178, 4, 0, `You're welcome`, `どういたしまして`, ``, [`You're welcome.`], [`どういたしまして。`], ));
wordList.push(new DictWord(179, 179, 4, 8, `your`, `あなたの、あなたたちの`, ``, [`What's your name?`], [`あなたの名前は何ですか？`], ));
wordList.push(new DictWord(180, 180, 4, 0, `thank you`, `ありがとう`, ``, [`Thank you for the birthday gift.`], [`誕生日プレゼントをありがとう。`], ));
wordList.push(new DictWord(181, 181, 4, 8, `it`, `それ`, ``, [`It is delicious.`], [`それはおいしい。`], ));
wordList.push(new DictWord(182, 182, 4, 1, `bird`, `鳥（とり）`, ``, [`That is a big bird.`], [`あれは大きい鳥ですね。`], ));
wordList.push(new DictWord(183, 183, 4, 3, `orange`, `オレンジ`, ``, [`My favorite color is orange.`], [`私の一番好きな色はオレンジです。`], ));
wordList.push(new DictWord(184, 184, 4, 3, `yellow`, `黄（き）色（いろ）い`, ``, [`That bird is yellow.`], [`その鳥は黄色です。`], ));
wordList.push(new DictWord(185, 185, 4, 3, `pink`, `ピンク`, ``, [`Her shirt is pink.`], [`彼女のシャツはピンク色です。`], ));
wordList.push(new DictWord(186, 186, 4, 3, `purple`, `紫（むらさき）`, ``, [`His pants are purple.`], [`彼のズボンは紫色です。`], ));
wordList.push(new DictWord(187, 187, 4, 10, `fourteen`, `十（じゅう）四（よん）、１４`, ``, [`I have fourteen cats.`], [`私は十四匹の猫を飼っています。`], ));
wordList.push(new DictWord(188, 188, 4, 10, `fifteen`, `十（じゅう）五（ご）、１５`, ``, [`I ate fifteen chicken nuggets.`], [`私は１５のチキンナゲットを食べました。`], ));
wordList.push(new DictWord(189, 189, 4, 10, `sixteen`, `十（じゅう）六（ろく）、１６`, ``, [`I am sixteen years old.`], [`私は十六歳です。`], ));
wordList.push(new DictWord(190, 190, 5, 1, `e-mail`, `イーメール、Ｅメール`, ``, [`What is your e-mail?`], [`あなたのイーメールは何ですか。`], ));
wordList.push(new DictWord(191, 191, 5, 1, `May`, `５月`, ``, [`My birthday is in May.`], [`私の誕生日は五月にあります。`], ));
wordList.push(new DictWord(192, 192, 5, 3, `green`, `緑（みどり）`, ``, [`The bag is green.`], [`そのかばんは緑です。`], ));
wordList.push(new DictWord(193, 193, 5, 1, `tea`, `茶（ちゃ）`, ``, [`Do you like green tea?`], [`あなたは緑茶がすきですか？`], ));
wordList.push(new DictWord(194, 194, 5, 3, `blue`, `青（あお）い`, ``, [`Do you have a blue pen?`], [`あなたは青いペンを持っていますか。`], ));
wordList.push(new DictWord(195, 195, 5, 1, `juice`, `ジュース`, ``, [`I do not like apple juice.`], [`私はリンゴジュースがすきではありません。`], ));
wordList.push(new DictWord(196, 196, 5, 1, `zoo`, `動（どう）物（ぶつ）園（えん）`, ``, [`You can see lions in the zoo.`], [`動物園にライオンが見れます。`], ));
wordList.push(new DictWord(197, 197, 5, 1, `book`, `本（ほん）`, ``, [`That is my book.`], [`それは私の本です。`], ));
wordList.push(new DictWord(198, 198, 5, 1, `train`, `電（でん）車（しゃ）、列（れっ）車（しゃ）`, ``, [`I go to school by train.`], [`私は電車で学校に行きます。`], ));
wordList.push(new DictWord(199, 199, 5, 1, `rain`, `雨（あめ）`, ``, [`Do you like the rain?`], [`あなたは雨がすきですか？`], ));
wordList.push(new DictWord(200, 200, 5, 1, `glue`, `のり、接（せっ）着（ちゃく）剤（ざい）`, ``, [`My glue is blue.`], [`私ののりは青いです。`], ));
wordList.push(new DictWord(201, 201, 5, 1, `fruit`, `果（くだ）物（もの）`, ``, [`What fruit is this?`], [`これは何の果物ですか？`], ));
wordList.push(new DictWord(202, 202, 5, 1, `beef`, `牛（ぎゅう）肉（にく）`, ``, [`Can you make beef stew?`], [`あなたは牛肉のシチューを作ることができますか？`], ));
wordList.push(new DictWord(203, 203, 5, 1, `sea`, `海（うみ）、海（かい）洋（よう）`, `ocean`, [`I enjoy swimming in the sea.`], [`私は海に泳ぐことを楽しめます。`], ));
wordList.push(new DictWord(204, 204, 5, 1, `season`, `季（き）節（せつ）`, ``, [`Summer is my favorite season.`], [`夏は私の一番好きな季節。`], ));
wordList.push(new DictWord(205, 205, 5, 1, `peach`, `モモ`, ``, [`This peach is from Okayama.`], [`このモモは岡山からのです。`], ));
wordList.push(new DictWord(206, 206, 5, 1, `day`, `日（ひ）`, ``, [`It is a hot day.`], [`暑い日です。`], ));
wordList.push(new DictWord(207, 207, 5, 1, `beach`, `浜（はま）、ビーチ`, ``, [`I go to the beach every day in summer.`], [`私は夏に毎日ビーチに行きます。`], ));
wordList.push(new DictWord(208, 208, 5, 2, `speak`, `話（はな）す`, ``, [`I speak English and Chinese.`], [`私は英語と中国を話します。`], ));
wordList.push(new DictWord(209, 209, 5, 3, `rainy`, `雨（あめ）の`, ``, [`I play video games on rainy days.`], [`私は雨の日にゲームをします。`], ));
wordList.push(new DictWord(210, 210, 5, 1, `cheese`, `チーズ`, ``, [`I often eat rice with cheese.`], [`私はよくご飯をチーズと食べます。`], ));
wordList.push(new DictWord(211, 211, 5, 1, `room`, `部（へ）屋（や）`, ``, [`This is my room.`], [`こちらは私の部屋です。`], ));
wordList.push(new DictWord(212, 212, 5, 1, `classroom`, `教（きょう）室（しつ）`, ``, [`Let's clean the classroom.`], [`教室を掃除しましょう。`], ));
wordList.push(new DictWord(213, 213, 5, 1, `swimming pool`, `プール`, ``, [`Let's go to the pool.`], [`プールへ行きましょう。`], ));
wordList.push(new DictWord(214, 214, 5, 2, `cook`, `料（りょう）理（り）する`, ``, [`Jonah can cook mapo tofu.`], [`ジョナは麻婆豆腐を料理することができます。`], ));
wordList.push(new DictWord(215, 215, 5, 1, `cooking`, `料（りょう）理（り）`, ``, [`I love my grandmother's cooking.`], [`私はおばあさんの料理が大好きです。`], ));
wordList.push(new DictWord(216, 216, 5, 1, `textbook`, `教（きょう）科（か）書（しょ）`, ``, [`Open your textbook to page 6.`], [`教科書の6ページを開きましょう。`], ));
wordList.push(new DictWord(217, 217, 5, 1, `notebook`, `ノート`, ``, [`That is my new notebook`], [`あれは私の新しいノートです。`], ));
wordList.push(new DictWord(218, 218, 5, 1, `today`, `今日（きょう）`, ``, [`It is really sunny today.`], [`今日はとても晴れやかです。`], ));
wordList.push(new DictWord(219, 219, 5, 3, `usually`, `たいてい、ふつう`, ``, [`I usually get up at 7:00 a.m.`], [`私はたいてい朝の七時に起きます。`], ));
wordList.push(new DictWord(220, 220, 5, 10, `seventeen`, `十（じゅう）七（なな）、１７`, ``, [`My older sister is seventeen years old.`], [`私のお姉さんは十七歳です。`], ));
wordList.push(new DictWord(221, 221, 5, 10, `eighteen`, `十（じゅう）八（はち）、１８`, ``, [`I have eighteen erasers.`], [`私は十八個の消しゴムを持っています。`], ));
wordList.push(new DictWord(222, 222, 5, 10, `nineteen`, `十（じゅう）九（きゅう）、１９`, ``, [`I have nineteen books.`], [`私は十九冊の本を持っています。`], ));
wordList.push(new DictWord(223, 223, 5, 1, `bread`, `パン`, ``, [`Do you like chocolate bread?`], [`あなたはチョコパンがすきですか？`], ));
wordList.push(new DictWord(224, 224, 5, 3, `cloudy`, `曇（くも）り`, ``, [`It is cloudy today.`], [`今日は曇りです。`], ));
wordList.push(new DictWord(225, 225, 5, 2, `drink`, `飲（の）む`, ``, [`I drink coffee in the morning.`], [`私は朝にコーヒーを飲みます。`], ));
wordList.push(new DictWord(226, 226, 5, 1, `lion`, `ライオン`, ``, [`Can you draw a lion?`], [`あなたはライオンを描くことができますか？`], ));
wordList.push(new DictWord(227, 227, 5, 1, `piano`, `ピアノ`, ``, [`Can you play the piano?`], [`あなたはピアノを弾くことができますか？`], ));
wordList.push(new DictWord(228, 228, 5, 1, `bus`, `バス`, ``, [`Is that a bus stop?`], [`それはバス停ですか？`], ));
wordList.push(new DictWord(229, 229, 5, 3, `cold`, `寒（さむ）い`, ``, [`It is cold today.`], [`今日は寒いですね。`], ));
wordList.push(new DictWord(230, 230, 5, 1, `pizza`, `ピザ`, ``, [`We eat pizza on Fridays.`], [`金曜日にいつもピザを食べます。`], ));
wordList.push(new DictWord(231, 231, 5, 3, `slow`, `遅（おそ）い`, ``, [`I am a slow eater`], [`私は食べるのが遅い。`], ));
wordList.push(new DictWord(232, 232, 5, 1, `tomato`, `トマト`, ``, [`Is tomato a fruit?`], [`トマトは果物ですか？`], ));
wordList.push(new DictWord(233, 233, 6, 1, `symbol`, `シンボル、象（しょう）徴（ちょう）、記（き）号（ごう）`, ``, [`What does this symbol mean?`], [`このシンボルはどういう意味ですか？`], ));
wordList.push(new DictWord(234, 234, 6, 3, `interesting`, `おもしろい、興（きょう）味（み）深（ぶか）い`, ``, [`His book is very interesting.`], [`彼の本はとても面白いです。`], ));
wordList.push(new DictWord(235, 235, 6, 3, `favorite`, `いちばん好（す）きな、お気（き）に入（い）りの`, ``, [`What is your favorite sports drink?`], [`あなたは一番好きなスポーツドリンクは？`], ));
wordList.push(new DictWord(236, 236, 6, 1, `character`, `キャラクター、登（とう）場（じょう）人（じん）物（ぶつ）`, ``, [`My favorite character is Doraemon.`], [`私の一番好きなキャラクターはどらえもんです。`], ));
wordList.push(new DictWord(237, 237, 6, 4, `also`, `もまた、そのうえ`, ``, [`My favorite Japanese food is ramen. I also like oden.`], [`私が一番好きな日本料理はラーメン。おでんも好きです。`], ));
wordList.push(new DictWord(238, 238, 6, 8, `what`, `何（なに）`, ``, [`What time do you wake up every morning?`], [`あなたは毎朝何時から起きますか？`], ));
wordList.push(new DictWord(239, 239, 6, 1, `family`, `家（か）族（ぞく）`, ``, [`My family will go to Tokyo this weekend.`], [`私の家族は今週末から東京に行く予定です。`], ));
wordList.push(new DictWord(240, 240, 6, 8, `who`, `だれ`, ``, [`Who is that person?`], [`あの人は誰ですか？`], ));
wordList.push(new DictWord(241, 241, 6, 4, `why`, `なぜ、どうして`, ``, [`Why do you study English?`], [`あなたはどうして英語を勉強してますか。`], ));
wordList.push(new DictWord(242, 242, 6, 3, `brave`, `勇（ゆう）かんな、勇（いさ）ましい`, ``, [`Hiro is very brave.`], [`ひろは勇敢な人です。`], ));
wordList.push(new DictWord(243, 243, 6, 3, `kind`, `親（しん）切（せつ）な、やさしい`, ``, [`Your older sister is very kind.`], [`あなたのお姉さんはとても優しいです。`], ));
wordList.push(new DictWord(244, 244, 6, 6, `around`, `近（ちか）くに、まわりをに`, ``, [`I live around this area.`], [`私はこの辺の近くに住んでます。`], ));
wordList.push(new DictWord(245, 245, 6, 6, `after`, `後（あと）で`, ``, [`I will go home after lunch.`], [`私は昼ごはんの後に家に帰ります。`], ));
wordList.push(new DictWord(246, 246, 6, 3, `online`, `オンライン`, ``, [`You can buy the ticket online.`], [`あなたはオンラインで切符を買うことができます。`], ));
wordList.push(new DictWord(247, 247, 6, 2, `live`, `住（す）む、住（す）んでいる、生（い）きる`, ``, [`They live in America.`], [`彼らはアメリカに住んでます。`], ));
wordList.push(new DictWord(248, 248, 6, 2, `come`, `来（く）る`, ``, [`Please come here.`], [`ここに来てください。`], ));
wordList.push(new DictWord(249, 249, 6, 6, `by`, `よって、そばに`, ``, [`The post office is by the school.`], [`郵便局は学校のそばにあります。`], ));
wordList.push(new DictWord(250, 250, 6, 2, `walk`, `歩（ある）く`, ``, [`I walk to school every Friday.`], [`毎日の金曜日に私は学校に歩きます。`], ));
wordList.push(new DictWord(251, 251, 6, 4, `when`, `いつ`, ``, [`When is the next festival?`], [`次の祭りはいつですか？`], ));
wordList.push(new DictWord(252, 252, 6, 2, `study`, `勉（べん）強（きょう）する`, ``, [`I will study French in high school.`], [`高校で私はフランス語を勉強します。`], ));
wordList.push(new DictWord(253, 253, 6, 0, `after school`, `放（ほう）課（か）後（ご）`, ``, [`She has volleyball club after school.`], [`彼女は放課後からバレー部があります。`], ));
wordList.push(new DictWord(254, 254, 6, 1, `January`, `１月（がつ）`, ``, [`My favorite month is January.`], [`私の一番好きな月は1月です。`], ));
wordList.push(new DictWord(255, 255, 6, 1, `February`, `２月（がつ）`, ``, [`Hiro's birthday is February 2nd.`], [`ひろの誕生日は2月2日です。`], ));
wordList.push(new DictWord(256, 256, 6, 1, `March`, `３月（がつ）`, ``, [`My older sister will go to Hawaii this March.`], [`私の姉さんは3月にハワイへ行く予定です。`], ));
wordList.push(new DictWord(257, 257, 6, 1, `April`, `４月（がつ）`, ``, [`I was born on April 19th.`], [`私は4月19日で生まれました。`], ));
wordList.push(new DictWord(258, 258, 6, 1, `June`, `６月（がつ）`, ``, [`June is very humid.`], [`6月はとても蒸し暑いです。`], ));
wordList.push(new DictWord(259, 259, 6, 1, `July`, `７月（がつ）`, ``, [`The beach is very hot in July.`], [`7月にビーチはとても暑いです。`], ));
wordList.push(new DictWord(260, 260, 6, 1, `August`, `８月（がつ）`, ``, [], [], ));
wordList.push(new DictWord(261, 261, 6, 1, `September`, `９月（がつ）`, ``, [`Do you want to go to karaoke together in September?`], [`9月にあなたは一緒にカラオケへ行きませんか？`], ));
wordList.push(new DictWord(262, 262, 6, 1, `October`, `１０月（がつ）`, ``, [`I want to enjoy Halloween this October.`], [`私は今年の10月にハローウィンを楽しみたいです。`], ));
wordList.push(new DictWord(263, 263, 6, 1, `November`, `１１月（がつ）`, ``, [], [], ));
wordList.push(new DictWord(264, 264, 6, 1, `December`, `１２月（がつ）`, ``, [`In December, there is a snow festival.`], [`12月には雪祭りがあります。`], ));
wordList.push(new DictWord(265, 265, 6, 1, `hallway`, `ろうか`, ``, [`Please do not run in the hallway.`], [`ろうかに走らないでください。`], ));
wordList.push(new DictWord(266, 266, 6, 2, `win`, `勝（か）つ`, ``, [`I want to win the soccer game this weekend.`], [`私は今週末のサッカー試合を勝ちたいです。`], ));
wordList.push(new DictWord(267, 267, 6, 3, `next`, `次（つぎ）`, ``, [`Who is next?`], [`次は誰ですか？`], ));
wordList.push(new DictWord(268, 268, 6, 1, `luck`, `運（うん）`, ``, [`Your luck is amazing!`], [`あなたの運が素晴らしいです！`], ));
wordList.push(new DictWord(269, 269, 6, 6, `near`, `近（ちか）くに`, ``, [`Her house is near the train station.`], [`彼女の家は駅の近くにあります。`], ));
wordList.push(new DictWord(270, 270, 6, 4, `where`, `どこ`, ``, [`Where is the post office?`], [`郵便局はどこですか。`], ));
wordList.push(new DictWord(271, 271, 6, 2, `practice`, `練（れん）習（しゅう）する`, ``, [`I practice piano every Tuesday.`], [`毎週の火曜日に私はピアノを練習します。`], ));
wordList.push(new DictWord(272, 272, 6, 4, `hard`, `熱（ねっ）心（しん）に、難（むずか）しい`, ``, [`Speaking Japanese is difficult.`], [`日本語の話す事は難しいです。`], ));
wordList.push(new DictWord(273, 273, 6, 2, `go`, `行（い）く`, ``, [`My little sister will go to a concert.`], [`私の妹はコンサートに行きます。`], ));
wordList.push(new DictWord(274, 274, 6, 1, `park`, `公（こう）園（えん）`, ``, [`There is an event at the park this weekend.`], [`今週末から公園でエベントがあります。`], ));
wordList.push(new DictWord(275, 275, 6, 1, `station`, `駅（えき）`, ``, [`Do you know where the station is?`], [`あなたは駅はどこに分かりますか？`], ));
wordList.push(new DictWord(276, 276, 6, 6, `under`, `下（した）`, ``, [`The dog is under the table.`], [`犬はテーブルの下にいます。`], ));
wordList.push(new DictWord(277, 277, 6, 0, `good luck`, `がんばって`, ``, [`Please do your best!`], [`頑張ってください！`], ));
wordList.push(new DictWord(278, 278, 6, 10, `twenty`, `二（に）十（じゅう）、２０`, ``, [`I will turn 20 years old this December.`], [`私は今年の12月から20歳になります。`], ));
wordList.push(new DictWord(279, 279, 6, 10, `thirty`, `三（さん）十（じゅう）、３０`, ``, [`I ate 30 plates at conveyor belt sushi.`], [`回転寿司で30皿を食べました。`], ));
wordList.push(new DictWord(280, 280, 6, 10, `forty`, `四（よん）十（じゅう）、４０`, ``, [`My house is 40 kilometers from here.`], [`私の家はここから40キロです。`], ));
wordList.push(new DictWord(281, 281, 7, 1, `Monday`, `月（げつ）曜（よう）日（び）`, ``, [`I will go to Tokyo this Monday.`], [`私は今週の月曜日で東京へ行きます。`], ));
wordList.push(new DictWord(282, 282, 7, 1, `Tuesday`, `火（か）曜（よう）日（び）`, ``, [`Are you free this Tuesday?`], [`あなたは今度の火曜日は暇ですか？`], ));
wordList.push(new DictWord(283, 283, 7, 1, `Wednesday`, `水（すい）曜（よう）日（び）`, ``, [`I don't eat the school lunch on Wednesdays.`], [`私は水曜日の給食を食べません。`], ));
wordList.push(new DictWord(284, 284, 7, 1, `Thursday`, `木（もく）曜（よう）日（び）`, ``, [`Every Thursday, I go to the gym.`], [`毎週の木曜日に私はジムに行きます。`], ));
wordList.push(new DictWord(285, 285, 7, 1, `Friday`, `金（きん）曜（よう）日（び）`, ``, [`It's finally Friday!`], [`ついに金曜日だ！`], ));
wordList.push(new DictWord(286, 286, 7, 1, `Saturday`, `土（ど）曜（よう）日（び）`, ``, [`I like hiking on Saturdays.`], [`土曜日に私は登ることが好きです。`], ));
wordList.push(new DictWord(287, 287, 7, 1, `Sunday`, `日（にち）曜（よう）日（び）`, ``, [`It's already Sunday!`], [`もう日曜日だ！`], ));
wordList.push(new DictWord(288, 288, 7, 1, `sister`, `姉（あね）、妹（いもうと）、姉（し）妹（まい）`, ``, [`Her sister is a professional tennis player.`], [`彼女のお姉さんはプロテニス選手です。`], ));
wordList.push(new DictWord(289, 289, 7, 1, `car`, `車（くるま）`, ``, [`That's a nice car!`], [`あれはいい車です！`], ));
wordList.push(new DictWord(290, 290, 7, 1, `girl`, `女（おんな）の子（こ）、少（しょう）女（じょ）`, ``, [`Who is that girl?`], [`あの女の子は誰ですか？`], ));
wordList.push(new DictWord(291, 291, 7, 3, `small`, `小（ちい）さい`, ``, [`Hiro's bed is a little small.`], [`ひろのベッドはちょっと小さいです。`], ));
wordList.push(new DictWord(292, 292, 7, 1, `boy`, `男（おとこ）の子（こ）、少（しょう）年（ねん）`, ``, [`That boy is good at speaking English.`], [`あの男の子は英語の話すことが得意です。`], ));
wordList.push(new DictWord(293, 293, 7, 1, `mouse`, `ネズミ`, ``, [`This mouse is very cute.`], [`このネズミはとても可愛いです。`], ));
wordList.push(new DictWord(294, 294, 7, 3, `brown`, `茶（ちゃ）色（いろ）`, ``, [`I like that brown table.`], [`私はあの茶色テーブルが好きです。`], ));
wordList.push(new DictWord(295, 295, 7, 1, `water`, `水（みず）`, ``, [`This water is cold.`], [`この水は冷たいです。`], ));
wordList.push(new DictWord(296, 296, 7, 1, `T-shirt`, `Tシャツ`, ``, [`That is a cool T-shirt!`], [`あのTシャツはカッコいいです！`], ));
wordList.push(new DictWord(297, 297, 7, 1, `star`, `星（ほし）`, ``, [`Can you see the stars tonight?`], [`今夜は星が見えますか？`], ));
wordList.push(new DictWord(298, 298, 7, 3, `round`, `丸（まる）い、球（きゅう）形（けい）`, ``, [`The earth is round.`], [`地球は丸いです。`], ));
wordList.push(new DictWord(299, 299, 7, 1, `baseball`, `野（や）球（きゅう）`, ``, [`My older brother likes baseball.`], [`私の兄さんは野球が好きです。`], ));
wordList.push(new DictWord(300, 300, 7, 1, `summer`, `夏（なつ）`, ``, [`I will go to Hawaii during summer vacation.`], [`私は夏休みの間にハワイへ行きます。`], ));
wordList.push(new DictWord(301, 301, 7, 1, `winter`, `冬（ふゆ）`, ``, [`Where do you want to go during winter vacation?`], [`冬休みにどこに行きったいですか？`], ));
wordList.push(new DictWord(302, 302, 7, 1, `house`, `家（いえ）、住（じゅう）宅（たく）`, ``, [`My house is near the library.`], [`私の家は図書館の近くにあります。`], ));
wordList.push(new DictWord(303, 303, 7, 1, `town`, `町（まち）`, ``, [`I love my town.`], [`私の街が大好きです。`], ));
wordList.push(new DictWord(304, 304, 7, 1, `sound`, `音（おと）`, ``, [`Do you hear that sound?`], [`あなたはあの音を聞こえますか？`], ));
wordList.push(new DictWord(305, 305, 7, 1, `mother`, `母（はは）、お母（かあ）さん`, `mom`, [`My mother is good at cooking.`], [`私の母は料理することが得意です。`], ));
wordList.push(new DictWord(306, 306, 7, 2, `enjoy`, `楽（たの）しむ`, ``, [`I'm looking forward to enjoying the summer festival.`], [`私は夏祭りを楽しみにしてます。`], ));
wordList.push(new DictWord(307, 307, 7, 1, `fall`, `秋（あき）`, `autumn`, [`My favorite season is fall.`], [`私の一番好きな季節は秋です。`], ));
wordList.push(new DictWord(308, 308, 7, 1, `party`, `パーティー`, ``, [`I will go to a party with my friends.`], [`私は友達とパティーに行きます。`], ));
wordList.push(new DictWord(309, 309, 7, 2, `bake`, `焼（や）く`, ``, [`My friend likes baking bread.`], [`私の友達がパンを焼くことが好きです。`], ));
wordList.push(new DictWord(310, 310, 7, 1, `ball`, `ボール、球（きゅう）`, ``, [`May I use the soccer ball today?`], [`今日はサッカーボールを使ってもいいですか？`], ));
wordList.push(new DictWord(311, 311, 7, 1, `birthday`, `誕（たん）生（じょう）日（び）`, ``, [`When is Hiro's birthday?`], [`ひろの誕生日はいつですか？`], ));
wordList.push(new DictWord(312, 312, 7, 10, `fifty`, `五（ご）十（じゅう）、５０`, ``, [`I bought my father a new watch for his 50th birthday.`], [`私はお父さんの50歳誕生日に新しい腕時計を買いました。`], ));
wordList.push(new DictWord(313, 313, 7, 10, `sixty`, `六（ろく）十（じゅう）、６０`, ``, [`When I turn 60, I want to go jet skiing.`], [`私は60歳になったらジェットスキーをしに行きたいです。`], ));
wordList.push(new DictWord(314, 314, 7, 10, `seventy`, `七（なな）十（じゅう）、７０`, ``, [`My grandfather went to Singapore 70 years ago.`], [`70年前、私の祖父はシンガポールに行きました。`], ));
wordList.push(new DictWord(315, 315, 7, 1, `first`, `一（いち）番（ばん）、一（いち）日（にち）、最（さい）初（しょ）`, ``, [`My first car was a Honda City.`], [`私の最初の車はホンダシティでした。`], ));
wordList.push(new DictWord(316, 316, 7, 1, `second`, `二（に）番（ばん）、二（ふつ）日（か）`, ``, [], [], ));
wordList.push(new DictWord(317, 317, 7, 1, `third`, `三（さん）番（ばん）、三（みっ）日（か）`, ``, [], [], ));
wordList.push(new DictWord(318, 318, 7, 1, `color`, `色（いろ）`, ``, [`There are so many colors in this picture.`], [`この写真の中にはいろいろな色があります。`], ));
wordList.push(new DictWord(319, 319, 7, 1, `potato`, `ジャガイモ`, ``, [], [], ));
wordList.push(new DictWord(320, 320, 7, 3, `smart`, `利（り）口（こう）、頭（あたま）がいい`, ``, [`Her father is very smart.`], [`彼女のお父さんはとても頭がいいです。`], ));
wordList.push(new DictWord(321, 321, 7, 1, `computer`, `コンプーター`, ``, [`Do you know how to use this computer?`], [`あなたはこのコンピュータの使い方を知ってますか。`], ));
wordList.push(new DictWord(322, 322, 7, 1, `strawberry`, `イチゴ`, ``, [`My mother can make strawberry shortcake.`], [`私の母はイチゴショートケーキを作りことができます。`], ));
wordList.push(new DictWord(323, 323, 7, 3, `sunny`, `晴（は）れ`, ``, [`The weather is sunny today.`], [`今日の天気は晴れです。`], ));
wordList.push(new DictWord(324, 324, 7, 1, `arm`, `腕（うで）`, ``, [`My arm is itchy.`], [`私の腕は痒いです。`], ));
wordList.push(new DictWord(325, 325, 7, 1, `body`, `体（からだ）`, ``, [], [], ));
wordList.push(new DictWord(326, 326, 7, 2, `catch`, `捕（つか）まえる`, ``, [], [], ));
wordList.push(new DictWord(327, 327, 7, 3, `delicious`, `おいしい`, ``, [], [], ));
wordList.push(new DictWord(328, 328, 7, 1, `ear`, `耳（みみ）`, ``, [], [], ));
wordList.push(new DictWord(329, 329, 7, 1, `face`, `顔（かお）`, ``, [], [], ));
wordList.push(new DictWord(330, 330, 8, 1, `New Zealand`, `ニュージーランド`, ``, [`I want to ski in New Zealand.`], [`私はニュージーランドでスキーをしたい。`], ));
wordList.push(new DictWord(331, 331, 8, 1, `puppy`, `子（こ）犬（いぬ）`, ``, [], [], ));
wordList.push(new DictWord(332, 332, 8, 4, `someday`, `いつか`, ``, [], [], ));
wordList.push(new DictWord(333, 333, 8, 1, `lot`, `たくさん`, `many、a lot of`, [], [], ));
wordList.push(new DictWord(334, 334, 8, 8, `they`, `彼（かれ）らは、彼（かれ）らが、彼（かの）女（じょ）らは、彼（かの）女（じょ）らが、それらは、それらが`, ``, [], [], ));
wordList.push(new DictWord(335, 335, 8, 1, `animal`, `動（どう）物（ぶつ）`, ``, [], [], ));
wordList.push(new DictWord(336, 336, 8, 2, `visit`, `訪（おとず）れる`, ``, [], [], ));
wordList.push(new DictWord(337, 337, 8, 1, `Japan`, `日（に）本（ほん）`, ``, [], [], ));
wordList.push(new DictWord(338, 338, 8, 3, `many`, `たくさん、多（おお）く`, `lot、a lot of`, [`Many people like to watch anime.`], [`多くの人はアニメを見るのが好きです。`], ));
wordList.push(new DictWord(339, 339, 8, 0, `one of`, `の一（ひと）つ`, ``, [], [], ));
wordList.push(new DictWord(340, 340, 8, 0, `a lot of`, `たくさん、多（た）数（すう）`, `many、lot`, [], [], ));
wordList.push(new DictWord(341, 341, 8, 0, `How many`, `いくつの`, ``, [`How many prefectures does Japan have?`], [`日本の県はいくつですか。`], ));
wordList.push(new DictWord(342, 342, 8, 1, `noon`, `正（しょう）午（ご）`, ``, [`Let's have lunch at noon.`], [`正午に昼ごはんを食べましょう。`], ));
wordList.push(new DictWord(343, 343, 8, 3, `last`, `最（さい）後（ご）、最（さい）終（しゅう）`, ``, [], [], ));
wordList.push(new DictWord(344, 344, 8, 6, `like`, `らしい`, ``, [], [], ));
wordList.push(new DictWord(345, 345, 8, 0, `2 o'clock`, `２時（じ）`, ``, [], [], ));
wordList.push(new DictWord(346, 346, 8, 0, `10 o'clock`, `１０時（じ）`, ``, [`I usually go to bed at 10 o'clock.`], [`私は普通に10時に寝ます。`], ));
wordList.push(new DictWord(347, 347, 8, 1, `time`, `時（じ）間（かん）、時（じ）刻（こく）`, ``, [`What time is soccer practice?`], [`サッカー練習は何時ですか。`], ));
wordList.push(new DictWord(348, 348, 8, 1, `afternoon`, `午（ご）後（ご）`, ``, [], [], ));
wordList.push(new DictWord(349, 349, 8, 1, `sport`, `スポーツ`, ``, [], [], ));
wordList.push(new DictWord(350, 350, 8, 0, `6 a.m.`, `午（ご）前（ぜん）６時（じ）`, ``, [`I usually wake up at 6 a.m.`], [`私は普通に６時に起きます。`], ));
wordList.push(new DictWord(351, 351, 8, 0, `3 p.m.`, `午（ご）後（ご）３時（じ）`, ``, [], [], ));
wordList.push(new DictWord(352, 352, 8, 1, `basketball`, `バスケットボール`, ``, [`He plays basketball after school.`], [`彼は放課後にバスケをします。`], ));
wordList.push(new DictWord(353, 353, 8, 0, `Sounds interesting`, `面（おも）白（しろ）そう`, ``, [], [], ));
wordList.push(new DictWord(354, 354, 8, 1, `front`, `前（まえ）`, ``, [], [], ));
wordList.push(new DictWord(355, 355, 8, 2, `be`, `です`, ``, [], [], ));
wordList.push(new DictWord(356, 356, 8, 3, `nervous`, `緊（きん）張（ちょう）して`, ``, [], [], ));
wordList.push(new DictWord(357, 357, 8, 2, `worry`, `心（しん）配（ぱい）する`, ``, [], [], ));
wordList.push(new DictWord(358, 358, 8, 8, `yourself`, `あなた自（じ）身（しん）`, ``, [], [], ));
wordList.push(new DictWord(359, 359, 8, 1, `sheep`, `羊（ひつじ）`, ``, [`Sheep are very soft.`], [`羊は柔らかいです。`], ));
wordList.push(new DictWord(360, 360, 8, 1, `kiwi`, `キーウィ`, ``, [], [], ));
wordList.push(new DictWord(361, 361, 8, 1, `turn`, `順（じゅん）番（ばん）`, ``, [`It's your turn.`], [`あなたの番です。`], ));
wordList.push(new DictWord(362, 362, 8, 4, `please`, `ください`, ``, [], [], ));
wordList.push(new DictWord(363, 363, 8, 2, `look`, `見（み）る`, `see`, [], [], ));
wordList.push(new DictWord(364, 364, 8, 3, `fun`, `楽（たの）しい`, ``, [], [], ));
wordList.push(new DictWord(365, 365, 8, 3, `long`, `長（なが）い`, ``, [], [], ));
wordList.push(new DictWord(366, 366, 8, 1, `song`, `歌（うた）`, ``, [`This is my favorite song.`], [`これは私のお気に入り歌です。`], ));
wordList.push(new DictWord(367, 367, 8, 3, `fine`, `元（げん）気（き）`, ``, [], [], ));
wordList.push(new DictWord(368, 368, 8, 1, `pet`, `ペット`, ``, [], [], ));
wordList.push(new DictWord(369, 369, 8, 2, `stop`, `止（と）まる`, ``, [], [], ));
wordList.push(new DictWord(370, 370, 8, 2, `eat`, `食（た）べる`, ``, [], [], ));
wordList.push(new DictWord(371, 371, 8, 3, `sad`, `悲（かな）しい`, ``, [], [], ));
wordList.push(new DictWord(372, 372, 8, 1, `eel`, `ウナギ`, ``, [`Eel is very expensive.`], [`うなぎは高いです。`], ));
wordList.push(new DictWord(373, 373, 8, 1, `gift`, `贈（おく）り物（もの）`, ``, [], [], ));
wordList.push(new DictWord(374, 374, 8, 1, `man`, `男（おとこ）の人（ひと）、男（だん）性（せい）`, ``, [`Who is that man?`], [`あの男の人は誰ですか。`], ));
wordList.push(new DictWord(375, 375, 8, 1, `bench`, `ベンチ`, ``, [`Let's sit on the bench.`], [`ベンチに座りましょう。`], ));
wordList.push(new DictWord(376, 376, 8, 1, `picture`, `写（しゃ）真（しん）、絵（え）`, ``, [], [], ));
wordList.push(new DictWord(377, 377, 8, 1, `basket`, `かご、ざる、バスケット`, ``, [], [], ));
wordList.push(new DictWord(378, 378, 8, 1, `kitchen`, `台（だい）所（どころ）、キッチン`, ``, [], [], ));
wordList.push(new DictWord(379, 379, 8, 1, `table`, `テーブル`, ``, [], [], ));
wordList.push(new DictWord(380, 380, 8, 3, `all`, `全（ぜん）部（ぶ）、全（すべ）て`, ``, [], [], ));
wordList.push(new DictWord(381, 381, 8, 1, `poster`, `ポスター`, ``, [`This movie poster is cool.`], [`kおの映画のポスターはかっこいいです。`], ));
wordList.push(new DictWord(382, 382, 8, 1, `age`, `年（ねん）齢（れい）`, ``, [], [], ));
wordList.push(new DictWord(383, 383, 8, 1, `movie`, `映（えい）画（が）`, ``, [], [], ));
wordList.push(new DictWord(384, 384, 8, 1, `student`, `学（がく）生（せい）、生（せい）徒（と）`, ``, [], [], ));
wordList.push(new DictWord(385, 385, 8, 4, `much`, `おおい`, ``, [], [], ));
wordList.push(new DictWord(386, 386, 8, 1, `starter`, `先（せん）発（ぱつ）メンバー`, ``, [], [], ));
wordList.push(new DictWord(387, 387, 8, 3, `famous`, `有（ゆう）名（めい）`, ``, [`She is very famous in Japan.`], [`彼女は日本で有名です。`], ));
wordList.push(new DictWord(388, 388, 8, 2, `tell`, `伝（つた）える`, ``, [], [], ));
wordList.push(new DictWord(389, 389, 8, 1, `elementary school`, `小（しょう）学（がっ）校（こう）`, ``, [], [], ));
wordList.push(new DictWord(390, 390, 8, 1, `subject`, `教（きょう）科（か）、科（か）目（もく）`, ``, [], [], ));
wordList.push(new DictWord(391, 391, 8, 1, `junior high school`, `中（ちゅう）学（がっ）校（こう）`, ``, [], [], ));
wordList.push(new DictWord(392, 392, 8, 3, `every`, `毎（まい）`, ``, [], [], ));
wordList.push(new DictWord(393, 393, 8, 3, `big`, `大（おお）きい`, `large`, [], [], ));
wordList.push(new DictWord(394, 394, 8, 1, `player`, `選（せん）手（しゅ）`, ``, [], [], ));
wordList.push(new DictWord(395, 395, 8, 1, `every day`, `毎（まい）日（にち）`, ``, [`I play tennis every day.`], [`毎日テニスをしています。`], ));
wordList.push(new DictWord(396, 396, 9, 1, `tour`, `ツアー、見（けん）学（がく）`, ``, [`We went on a tour of the island.`], [`島のツアーに行きました。`], ));
wordList.push(new DictWord(397, 397, 9, 1, `guide`, `ガイド、案（あん）内（ない）人（にん）`, ``, [`I will guide you.`], [`私が案内します。`], ));
wordList.push(new DictWord(398, 398, 9, 2, `write`, `書（か）く`, ``, [`I want to write a blog.`], [`ブログを書きたいです。`], ));
wordList.push(new DictWord(399, 399, 9, 1, `blog`, `ブログ`, ``, [`I have a blog about my favourite foods!`], [`私の好きな食べ物についてのブログがあります！`], ));
wordList.push(new DictWord(400, 400, 9, 3, `local`, `地（じ）元（もと）、地（ち）方（ほう）`, ``, [`What local foods do you like?`], [`好きな地元の食べ物は？`], ));
wordList.push(new DictWord(401, 401, 9, 3, `beautiful`, `美（うつく）しい`, ``, [`This beach is very beautiful.`], [`このビーチはとても美しいです。`], ));
wordList.push(new DictWord(402, 402, 9, 1, `spot`, `地（ち）点（てん）、場（ば）所（しょ）`, ``, [`There are many great spots to visit .`], [`素晴らしい場所がたくさんあります。`], ));
wordList.push(new DictWord(403, 403, 9, 8, `his`, `彼（かれ）の、彼（かれ）のもの`, ``, [`Is that his car?`], [`彼の車ですか？`], ));
wordList.push(new DictWord(404, 404, 9, 1, `brother`, `兄（あに）、弟（おとうと）、兄（きょう）弟（だい）`, ``, [`My brother lives in America.`], [`兄はアメリカに住んでいます。`], ));
wordList.push(new DictWord(405, 405, 9, 1, `year`, `年（とし）`, ``, [`This year, I want to go to Hawaii.`], [`今年はハワイに行きたいです。`], ));
wordList.push(new DictWord(406, 406, 9, 3, `old`, `古（ふる）い`, ``, [`Our house is a little old.`], [`私たちの家は少し古いです。`], ));
wordList.push(new DictWord(407, 407, 9, 2, `work`, `働（はたら）く`, ``, [`I work at a restauraunt in the summer.`], [`私は夏にレストランで働いています。`], ));
wordList.push(new DictWord(408, 408, 9, 1, `nature`, `自（し）然（ぜん）`, ``, [`Goto has a lot of beautiful nature.`], [`五島は美しい自然をたくさんあります。`], ));
wordList.push(new DictWord(409, 409, 9, 0, `12 years old`, `１２歳（さい）`, ``, [], [], ));
wordList.push(new DictWord(410, 410, 9, 0, `26 years old`, `２６歳（さい）`, ``, [`She is 26 years old.`], [`彼女は26歳です。`], ));
wordList.push(new DictWord(411, 411, 9, 3, `any`, `何（なん）から`, ``, [`Is there any food left?`], [`食べ物は残っていますか？`], ));
wordList.push(new DictWord(412, 412, 9, 4, `there`, `そこ、あそこ`, ``, [`Where is my pen?　It's over there.`], [`ペンはどこですか？あそこです。`], ));
wordList.push(new DictWord(413, 413, 9, 2, `surf`, `サーフィンをする`, ``, [`We surf every Saturday!`], [`毎週土曜日にサーフィンをします！`], ));
wordList.push(new DictWord(414, 414, 9, 1, `life`, `生（せい）活（かつ）`, ``, [`Life in Hawaii is great!`], [`ハワイでの生活は最高です！`], ));
wordList.push(new DictWord(415, 415, 9, 1, `question`, `質（しつ）問（もん）、疑（ぎ）問（もん）`, ``, [`Do you have any questions?`], [`何か質問はありますか？？`], ));
wordList.push(new DictWord(416, 416, 9, 1, `weekend`, `週（しゅう）末（まつ）`, ``, [`I want to go to the beach this weekend.`], [`今週末私はビーチに行きたいです。`], ));
wordList.push(new DictWord(417, 417, 9, 2, `swim`, `泳（およ）ぐ`, ``, [`Can you swim?`], [`泳ぐことはできますか？`], ));
wordList.push(new DictWord(418, 418, 9, 4, `sometimes`, `時（とき）々（どき）`, ``, [`Sometimes I go to the library to study.`], [`時々図書館に行って勉強します。`], ));
wordList.push(new DictWord(419, 419, 9, 1, `dolphin`, `イルカ`, ``, [`We saw a dolphin at the aquarium!`], [`水族館でイルカを見ました！`], ));
wordList.push(new DictWord(420, 420, 9, 1, `cafe`, `カフェ`, ``, [`Let's go to a cafe for lunch!`], [`ランチにカフェに行こう！`], ));
wordList.push(new DictWord(421, 421, 9, 1, `website`, `ウェブサイト`, ``, [`The cafe has a cool website.`], [`カフェのホームページがかっこいい。`], ));
wordList.push(new DictWord(422, 422, 9, 3, `popular`, `人（にん）気（き）`, ``, [`It is a popular cafe.`], [`それは人気のカフェですよ。`], ));
wordList.push(new DictWord(423, 423, 9, 1, `owner`, `所（しょ）有（ゆう）者（しゃ）、持（も）ち主（ぬし）`, ``, [`Maria is the cafe's owner.`], [`マリアはカフェのオーナーです。`], ));
wordList.push(new DictWord(424, 424, 9, 2, `know`, `知（し）っている`, ``, [`I know her. She is very nice.`], [`私は彼女を知っています。とてもいい人です。`], ));
wordList.push(new DictWord(425, 425, 9, 1, `patty`, `パティ`, ``, [`"Have you eaten a Jamacian patty? They're delicious!"""`], [`ジャマシアン・パティ食べたことある？おいしいわよ」。`], ));
wordList.push(new DictWord(426, 426, 9, 3, `fried`, `フライド`, ``, [`Fried chicken is a popular food in America.`], [`フライドチキンはアメリカでは人気な食べ物です。`], ));
wordList.push(new DictWord(427, 427, 9, 1, `top`, `上（じょう）部（ぶ）、上（うえ）`, ``, [`You can walk to the top of the hill. `], [`丘の上まで歩いて行けますよ。`], ));
wordList.push(new DictWord(428, 428, 9, 3, `wonderful`, `すばらしい`, ``, [`The view from the top of the mountain is wonderful.`], [`山の上からの眺めは素晴らしい。`], ));
wordList.push(new DictWord(429, 429, 9, 1, `restaurant`, `レストラン`, ``, [`That is a great restaurant.`], [`それは素晴らしいレストランですね。`], ));
wordList.push(new DictWord(430, 430, 9, 3, `friendly`, `親（しん）切（せつ）`, ``, [`Local people are very friendly.`], [`地元の人はとても親切です。`], ));
wordList.push(new DictWord(431, 431, 9, 1, `dish`, `料（りょう）理（り）、皿（さら）`, ``, [`Gyudon is my favourite dish.`], [`牛丼は私の好物です。`], ));
wordList.push(new DictWord(432, 432, 9, 10, `eighty`, `八（はち）十（じゅう）、８０`, ``, [], [], ));
wordList.push(new DictWord(433, 433, 9, 10, `ninety`, `九（きゅう）十（じゅう）、９０`, ``, [], [], ));
wordList.push(new DictWord(434, 434, 9, 10, `hundred`, `百（ひゃく）、１００`, ``, [], [], ));
wordList.push(new DictWord(435, 435, 9, 1, `glass`, `コップ、グラス`, ``, [], [], ));
wordList.push(new DictWord(436, 436, 9, 1, `hamburger`, `ハンバーガー`, ``, [], [], ));
wordList.push(new DictWord(437, 437, 9, 1, `leg`, `脚（きゃく）`, ``, [], [], ));
wordList.push(new DictWord(438, 438, 9, 1, `newspaper`, `新（しん）聞（ぶん）`, ``, [], [], ));
wordList.push(new DictWord(439, 439, 9, 1, `pork`, `豚（ぶた）肉（にく）`, ``, [], [], ));
wordList.push(new DictWord(440, 440, 9, 2, `ride`, `乗（の）る`, ``, [], [], ));
wordList.push(new DictWord(441, 441, 9, 1, `science`, `理（り）科（か）、科（か）学（がく）`, ``, [], [], ));
wordList.push(new DictWord(442, 442, 9, 1, `vegetable`, `野（や）菜（さい）`, ``, [], [], ));
wordList.push(new DictWord(443, 443, 9, 3, `warm`, `あたたかい`, ``, [], [], ));
wordList.push(new DictWord(444, 444, 9, 1, `autumn`, `秋（あき）`, `fall`, [], [], ));
wordList.push(new DictWord(445, 445, 9, 1, `breakfast`, `朝（あさ）食（しょく）、朝（あさ）ごはん`, ``, [], [], ));
wordList.push(new DictWord(446, 446, 10, 8, `him`, `彼（かれ）を、彼（かれ）に`, ``, [`Do you know him?`], [`あなたは彼を知っていますか？`], ));
wordList.push(new DictWord(447, 447, 10, 2, `say`, `言（い）う`, ``, [`Let's say hi to Tom.`, `"How do you say ""food"" in Japanese?"`], [`トムにあいさつを言おう。`, `"""food""とは日本語でなんて言うのですか？"`], ));
wordList.push(new DictWord(448, 448, 10, 8, `everything`, `何（なん）でも、全（すべ）てのもの`, ``, [`He wants everything.`], [`彼は何でも欲しいです。`], ));
wordList.push(new DictWord(449, 449, 10, 1, `show`, `ショー`, ``, [`This is a poster for a rakugo show.`], [`これは落語ショーのポスターです。`], ));
wordList.push(new DictWord(450, 450, 10, 8, `her`, `彼（かの）女（じょ）を、彼（かの）女（じょ）に`, ``, [`I often see her on TV.`], [`私はよく彼女をテレビでみます。`], ));
wordList.push(new DictWord(451, 451, 10, 1, `performer`, `演（えん）技（ぎ）者（しゃ）`, ``, [`She is a rakugo performer from the U.K.`], [`彼女はイギリス出身の落語家です。`], ));
wordList.push(new DictWord(452, 452, 10, 1, `the U.K.`, `英（えい）国（こく）`, ``, [`My English teacher is from the U.K.`], [`私の英語の先生は英国出身です。`], ));
wordList.push(new DictWord(453, 453, 10, 4, `together`, `いっしょに`, ``, [`Let's go to the show together.`], [`いっしょにそのショーに行こう。`], ));
wordList.push(new DictWord(454, 454, 10, 1, `minute`, `分（ぶん）`, ``, [`Lunch time is 20 minutes.`], [`給食は20分。`], ));
wordList.push(new DictWord(455, 455, 10, 2, `wait`, `待（ま）つ`, ``, [`Don't wait for me.`], [`私を待たないで。`], ));
wordList.push(new DictWord(456, 456, 10, 8, `whose`, `だれの、だれのもの`, ``, [`Whose shoes are these?`], [`これらはだれのくつですか？`], ));
wordList.push(new DictWord(457, 457, 10, 8, `yours`, `あなたのもの`, ``, [`They are yours.`], [`それはあなたのものです。`], ));
wordList.push(new DictWord(458, 458, 10, 8, `mine`, `私（わたし）のもの`, ``, [`That sandwhich is mine.`], [`あのサンドイッチはわたしのものです。`], ));
wordList.push(new DictWord(459, 459, 10, 4, `maybe`, `多（た）分（ぶん）`, ``, [`Maybe that is Riko's sister.`], [`たぶんそちらはりこの妹。`], ));
wordList.push(new DictWord(460, 460, 10, 3, `careful`, `注（ちゅう）意（い）深（ぶかい）い`, ``, [`Be careful with the hot tea.`, `She is careful driver.`], [`熱いお茶に気を付けよう。`, `彼女は注意深い運転手です。`], ));
wordList.push(new DictWord(461, 461, 10, 3, `crowded`, `満（まん）員（いん）`, ``, [`The train is always crowded in the morning.`], [`電車は朝にいつも満員です。`], ));
wordList.push(new DictWord(462, 462, 10, 1, `history`, `歴（れき）史（し）`, ``, [`Rakugo has a long history.`], [`落語は長い歴史がありま。`], ));
wordList.push(new DictWord(463, 463, 10, 4, `still`, `まだ、今（いま）まで`, ``, [`He still works as a tour guide.`], [`彼はまだツアーガイドとして働いています。`], ));
wordList.push(new DictWord(464, 464, 10, 6, `over`, `より多（おお）く`, ``, [`I have over 100 books.`], [`私は百冊より多くの本を持っています。`], ));
wordList.push(new DictWord(465, 465, 10, 2, `start`, `始（はじ）まる`, ``, [`The concert starts in 10 minutes.`], [`コンサートはあと10分で始まります。`], ));
wordList.push(new DictWord(466, 466, 10, 1, `ticket`, `切（きっ）符（ぷ）、チケット`, ``, [`The ticket is 500 yen.`], [`切符は５００円です。`], ));
wordList.push(new DictWord(467, 467, 10, 1, `cushion`, `クッション、ざぶとん`, ``, [`The performer sits on a cushion.`], [`演技者は座布団の上に座ります。`], ));
wordList.push(new DictWord(468, 468, 10, 3, `different`, `いろいろ`, ``, [`You can see different animals in the zoo.`], [`動物園にいろいろな動物が見えます。`], ));
wordList.push(new DictWord(469, 469, 10, 1, `role`, `役（やく）`, ``, [`What role does he play?`], [`彼は何の役をしますか？`], ));
wordList.push(new DictWord(470, 470, 10, 2, `use`, `使（つか）う`, ``, [`Can you use a computer?`], [`あなたはパソコンを使うことができますか？`], ));
wordList.push(new DictWord(471, 471, 10, 4, `only`, `だけ`, `just`, [`I only speak English.`], [`私は英語だけ話します。`], ));
wordList.push(new DictWord(472, 472, 10, 1, `prop`, `小（こ）道（どう）具（ぐ）`, ``, [`The performer only uses 2 props.`], [`演技者は二つの小道具だけを使います。`], ));
wordList.push(new DictWord(473, 473, 10, 8, `which`, `どちら、どれ`, ``, [`Which car is yours?`], [`どちらの車があなたのですか？`], ));
wordList.push(new DictWord(474, 474, 10, 9, `or`, `または`, ``, [`Which do you want, orange juice or coffee?`], [`あなたはどれがほしいですか、オレンジジュースかまたはコーヒーか？`], ));
wordList.push(new DictWord(475, 475, 10, 3, `casual`, `カジュアル`, ``, [`I usually wear casual clothes.`], [`私はたいていカジュアルな服を着ます。`], ));
wordList.push(new DictWord(476, 476, 10, 3, `large`, `大（おお）きい`, `big`, [`He has a large dog.`], [`彼は大きい犬を飼っている。`], ));
wordList.push(new DictWord(477, 477, 10, 1, `collection`, `コレクション`, ``, [`Look at my cup collection.`], [`私のコップコレクションを見て。`], ));
wordList.push(new DictWord(478, 478, 10, 1, `hand`, `手（て）`, ``, [`I write with my left hand.`], [`私は左手で書きます。`], ));
wordList.push(new DictWord(479, 479, 10, 1, `towel`, `タオル`, ``, [`This is my new towel.`], [`これは私の新しいタオルです。`], ));
wordList.push(new DictWord(480, 480, 10, 2, `wear`, `着る`, ``, [`He always wears a jacket.`], [`彼はいつもジャケットを着る。`], ));
wordList.push(new DictWord(481, 481, 10, 1, `clothes`, `服（ふく）`, ``, [`She buys new clothes every day.`], [`彼女は毎日新しい服を買います。`], ));
wordList.push(new DictWord(482, 482, 10, 2, `open`, `開（ひら）く、開（あ）ける`, ``, [`Can I open the door?`], [`ドアを開けてもいいですか？`], ));
wordList.push(new DictWord(483, 483, 10, 2, `close`, `閉（し）める`, ``, [`I close the window in the afternoon.`], [`私は午後に窓を閉めます。`], ));
wordList.push(new DictWord(484, 484, 10, 1, `window`, `窓（まど）`, ``, [`We clean the windows every week.`], [`私たちは毎週窓を掃除します。`], ));
wordList.push(new DictWord(485, 485, 10, 4, `sure`, `いいとも`, `of course`, [`Sure, you can buy an ice cream.`], [`いいとも、アイスを買ってもいいですよ。`], ));
wordList.push(new DictWord(486, 486, 10, 1, `problem`, `問（もん）題（だい）`, ``, [`We have a problem.`], [`私たちは問題があります。`], ));
wordList.push(new DictWord(487, 487, 10, 4, `a little`, `少し`, ``, [`I am a little hungry.`], [`私は少しお腹が空いた。`], ));
wordList.push(new DictWord(488, 488, 10, 3, `dark`, `暗（くら）い`, ``, [`This room is very dark.`], [`この部屋はとても暗いです。`], ));
wordList.push(new DictWord(489, 489, 10, 1, `light`, `明（あ）かり、電（でん）灯（とう）`, ``, [`Can I turn on the light?`], [`電灯をつけてもいいですか？`], ));
wordList.push(new DictWord(490, 490, 10, 4, `just`, `だけ`, `only`, [`Just one please.`], [`一つだけお願いします。`], ));
wordList.push(new DictWord(491, 491, 10, 1, `moment`, `瞬（しゅん）間（かん）、ちょっとの間（あいだ）`, ``, [`Let's enjoy this moment.`], [`この瞬間を楽しもう。`], ));
wordList.push(new DictWord(492, 492, 10, 4, `off`, `オフ、切（き）れって`, ``, [`The light is off.`], [`電灯は切れっている。`], ));
wordList.push(new DictWord(493, 493, 10, 2, `borrow`, `借（か）りる`, ``, [`Can I borrow your bicycle today?`], [`私は今日あなたの自転車を借りてもいいですか？`], ));
wordList.push(new DictWord(494, 494, 10, 2, `help`, `助（たす）ける、手（て）伝（つた）う`, ``, [`I can help you.`], [`私はあなたを手伝うことができます。`], ));
wordList.push(new DictWord(495, 495, 10, 1, `homework`, `宿（しゅく）題（だい）`, ``, [`I have English homework.`], [`私は英語の宿題があります。`], ));
wordList.push(new DictWord(496, 496, 10, 0, `All right`, `よろしい、いいよ`, ``, [`All right. Let's go.`], [`いいよ。行こう。`], ));
wordList.push(new DictWord(497, 497, 10, 0, `Just a moment`, `ちょっと待（ま）って`, ``, [`Please wait just a moment.`], [`ちょっと待ってください。`], ));
wordList.push(new DictWord(498, 498, 10, 8, `hers`, `彼（かの）女（じょ）のもの`, ``, [`This umbrella is hers.`], [`この傘は彼女のものです。`], ));
wordList.push(new DictWord(499, 499, 10, 8, `its`, `それの`, ``, [`The dog plays with its toys.`], [`犬はそれのおもちゃと遊びます。`], ));
wordList.push(new DictWord(500, 500, 10, 8, `us`, `私（わたし）達（たち）を、私（わたし）達（たち）に`, ``, [`Please help us.`], [`私たちを手伝ってください。`], ));
wordList.push(new DictWord(501, 501, 10, 8, `ours`, `私（わたし）達（たち）のもの`, ``, [`This car is ours.`], [`この車は私たちのものです。`], ));
wordList.push(new DictWord(502, 502, 10, 8, `their`, `彼（かれ）らの、彼（かの）女（じょ）らの、それらの`, ``, [`That is their house.`], [`それは彼女らの家です。`], ));
wordList.push(new DictWord(503, 503, 10, 8, `them`, `彼（かれ）らを、彼（かれ）らに、彼（かの）女（じょ）らを、彼（かの）女（じょ）らに、それらを、それらに`, ``, [`Can you see them?`], [`あなたは彼らを見えますか？`], ));
wordList.push(new DictWord(504, 504, 10, 8, `theirs`, `彼（かれ）らのもの、彼（かの）女（じょ）らのもの、それらのもの`, ``, [`The cat is theirs.`], [`そのねこは彼らのものです。`], ));
wordList.push(new DictWord(505, 505, 11, 1, `tomorrow`, `明日（あした）`, ``, [`Tomorrow is my birthday.`], [`明日はあたしの誕生日です。`], ));
wordList.push(new DictWord(506, 506, 11, 1, `plan`, `計（けい）画（かく）、予（よ）定（てい）`, ``, [`Do you have any plans tomorrow?`], [`あなたは明日予定ありますか？`], ));
wordList.push(new DictWord(507, 507, 11, 3, `free`, `暇（ひま）`, ``, [`I'm free tomorrow.`], [`私は明日暇です。`], ));
wordList.push(new DictWord(508, 508, 11, 2, `mean`, `意（い）味（み）する`, ``, [`What do you mean?`], [`どういう意味ですか？`], ));
wordList.push(new DictWord(509, 509, 11, 2, `look forward to`, `楽（たの）しみに待（ま）つ`, ``, [`I look forward to going to Australia.`], [`私はオーストラリアに行くことを楽しみにしてます。`], ));
wordList.push(new DictWord(510, 510, 11, 3, `busy`, `忙（いそが）しい`, ``, [`She is always busy.`], [`彼女はいつも忙しいです。`], ));
wordList.push(new DictWord(511, 511, 11, 2, `talk`, `しゃべる`, ``, [`We talk often.`], [`私たちはよくしゃべります。`], ));
wordList.push(new DictWord(512, 512, 11, 4, `up`, `上（うえ）`, ``, [], [], ));
wordList.push(new DictWord(513, 513, 11, 1, `market`, `市（し）場（じょう）`, ``, [`You can buy fresh fruits at the market.`], [`市場で新鮮な果物が買えます。`], ));
wordList.push(new DictWord(514, 514, 11, 1, `souvenir`, `記（き）念（ねん）品（ひん）、お土産（みやげ）`, ``, [`I am buying souvenirs now.`], [`私は今お土産を買っています。`], ));
wordList.push(new DictWord(515, 515, 11, 1, `place`, `場（ば）所（しょ）、所（ところ）`, ``, [`What is your favorite place in town?`], [`この街で一番好きな場所は何ですか？`], ));
wordList.push(new DictWord(516, 516, 11, 2, `appear`, `現（あらわ）れる`, ``, [], [], ));
wordList.push(new DictWord(517, 517, 11, 3, `those`, `あれらの、それらの`, ``, [`Those cats are cute.`], [`それらの猫はかわいい。`], ));
wordList.push(new DictWord(518, 518, 11, 2, `buy`, `買（か）う`, ``, [], [], ));
wordList.push(new DictWord(519, 519, 11, 1, `people`, `人（ひと）々（びと）`, ``, [`What are those people doing?`], [`あれらの人々は何をしていますか？`], ));
wordList.push(new DictWord(520, 520, 11, 1, `mom`, `お母（かあ）さん`, `mother`, [`This is my mom.`], [`こちらは私のお母さんです。`], ));
wordList.push(new DictWord(521, 521, 11, 1, `dad`, `お父（とう）さん`, `father`, [`My dad is funny.`], [`私のお父さんは面白いです。`], ));
wordList.push(new DictWord(522, 522, 11, 2, `travel`, `旅（りょ）行（こう）する`, ``, [`Does he travel often?`, `I am traveling in Taiwan.`], [`彼はよく旅行をしますか？`, `私は台湾で旅行をしている。`], ));
wordList.push(new DictWord(523, 523, 11, 3, `angry`, `怒（おこ）った`, ``, [`My dad is angry.`], [`私のお父さんは怒った。`], ));
wordList.push(new DictWord(524, 524, 11, 1, `palace`, `宮（きゅう）殿（でん）`, ``, [`What beautiful palace!`], [`なんて美しい宮殿だろう！`], ));
wordList.push(new DictWord(525, 525, 11, 3, `exciting`, `興（こう）奮（ふん）させるような、わくわくさせるような`, ``, [`This is an exciting book.`], [`これはわくわくさせるような本です。`], ));
wordList.push(new DictWord(526, 526, 11, 3, `late`, `遅（おそ）い、おくれた`, ``, [`You are late.`], [`あなたはおくれたよ。`], ));
wordList.push(new DictWord(527, 527, 11, 1, `excuse`, `言（い）い訳（わけ）、口（こう）実（じつ）、弁（べん）解（かい）`, ``, [`What a funny excuse!`], [`なんて面白い言い訳だろう！`], ));
wordList.push(new DictWord(528, 528, 11, 0, `sorry`, `ごめんなさい`, ``, [], [], ));
wordList.push(new DictWord(529, 529, 11, 3, `funny`, `おかしな`, ``, [], [], ));
wordList.push(new DictWord(530, 530, 11, 7, `OK`, `よろしい、わかった、大（だい）丈（じょう）夫（ぶ）`, ``, [], [], ));
wordList.push(new DictWord(531, 531, 11, 0, `pardon me`, `何（なん）とおっしゃいましたか`, ``, [], [], ));
wordList.push(new DictWord(532, 532, 11, 6, `along`, `沿（そ）って`, ``, [], [], ));
wordList.push(new DictWord(533, 533, 11, 1, `street`, `通（とお）り、道（みち）`, ``, [], [], ));
wordList.push(new DictWord(534, 534, 11, 1, `traffic light`, `交（こう）通（つう）信（しん）号（ごう）`, ``, [], [], ));
wordList.push(new DictWord(535, 535, 11, 4, `straight`, `まっすぐ`, ``, [], [], ));
wordList.push(new DictWord(536, 536, 11, 1, `factory`, `工（こう）場（じょう）`, ``, [], [], ));
wordList.push(new DictWord(537, 537, 11, 1, `building`, `建（たて）物（もの）、ビル`, ``, [], [], ));
wordList.push(new DictWord(538, 538, 11, 2, `turn`, `向（む）く、曲（ま）がる`, ``, [], [], ));
wordList.push(new DictWord(539, 539, 11, 1, `woman`, `女（じょ）性（せい）、女（おんな）の人（ひと）`, ``, [], [], ));
wordList.push(new DictWord(540, 540, 11, 1, `hospital`, `病（びょう）院（いん）`, ``, [], [], ));
wordList.push(new DictWord(541, 541, 11, 4, `left`, `左（ひだり）`, ``, [], [], ));
wordList.push(new DictWord(542, 542, 11, 4, `right`, `右（みぎ）`, ``, [], [], ));
wordList.push(new DictWord(543, 543, 11, 1, `museum`, `博（はく）物（ぶつ）館（かん）`, ``, [], [], ));
wordList.push(new DictWord(544, 544, 11, 1, `post office`, `郵（ゆう）便（びん）局（きょく）`, ``, [], [], ));
wordList.push(new DictWord(545, 545, 11, 1, `library`, `図（と）書（しょ）館（かん）`, ``, [], [], ));
wordList.push(new DictWord(546, 546, 11, 1, `chair`, `いす`, ``, [], [], ));
wordList.push(new DictWord(547, 547, 11, 1, `dinner`, `夕（ゆう）食（しょく）`, ``, [], [], ));
wordList.push(new DictWord(548, 548, 11, 1, `elephant`, `象（ぞう）`, ``, [], [], ));
wordList.push(new DictWord(549, 549, 11, 1, `festival`, `祭（まつ）り`, ``, [], [], ));
wordList.push(new DictWord(550, 550, 11, 1, `grape`, `ブドウ`, ``, [], [], ));
wordList.push(new DictWord(551, 551, 11, 1, `head`, `頭（あたま）`, ``, [], [], ));
wordList.push(new DictWord(552, 552, 11, 3, `low`, `低（ひく）い`, ``, [], [], ));
wordList.push(new DictWord(553, 553, 11, 1, `shape`, `形（かたち）`, ``, [], [], ));
wordList.push(new DictWord(554, 554, 11, 2, `wash`, `洗（あら）う`, ``, [], [], ));
wordList.push(new DictWord(555, 555, 11, 1, `coffee`, `コーヒー`, ``, [], [], ));
wordList.push(new DictWord(556, 556, 11, 1, `eraser`, `消（け）しゴム`, ``, [], [], ));
wordList.push(new DictWord(557, 557, 11, 1, `firework`, `花（はな）火（び）`, ``, [`Let's go to a fireworks festival.`], [`花火大会に行きましょう。`], ));
wordList.push(new DictWord(558, 558, 12, 3, `ethnic`, `民（みん）族（ぞく）`, ``, [], [], ));
wordList.push(new DictWord(559, 559, 12, 1, `Africa`, `アフリカ`, ``, [], [], ));
wordList.push(new DictWord(560, 560, 12, 1, `Kenya`, `ケニア`, ``, [], [], ));
wordList.push(new DictWord(561, 561, 12, 1, `volunteer`, `ボランティア`, ``, [], [], ));
wordList.push(new DictWord(562, 562, 12, 2, `need`, `いる`, ``, [], [], ));
wordList.push(new DictWord(563, 563, 12, 1, `need`, `必（ひつ）要（よう）`, ``, [], [], ));
wordList.push(new DictWord(564, 564, 12, 2, `teach`, `教（おし）える`, ``, [], [], ));
wordList.push(new DictWord(565, 565, 12, 2, `try`, `試（ため）す`, ``, [], [], ));
wordList.push(new DictWord(566, 566, 12, 2, `do my best`, `頑（がん）張（ば）る`, ``, [], [], ));
wordList.push(new DictWord(567, 567, 12, 2, `respect`, `尊（そん）敬（けい）する`, ``, [], [], ));
wordList.push(new DictWord(568, 568, 12, 2, `become`, `なる`, ``, [], [], ));
wordList.push(new DictWord(569, 569, 12, 1, `cousin`, `いとこ`, ``, [], [], ));
wordList.push(new DictWord(570, 570, 12, 1, `child`, `子（こ）供（ども）`, ``, [], [], ));
wordList.push(new DictWord(571, 571, 12, 1, `children`, `子（こ）供（ども）たち`, ``, [], [], ));
wordList.push(new DictWord(572, 572, 12, 1, `country`, `国（くに）`, ``, [], [], ));
wordList.push(new DictWord(573, 573, 12, 4, `always`, `いつも`, ``, [], [], ));
wordList.push(new DictWord(574, 574, 12, 3, `African`, `アフリカ人（じん）、アフリカの`, ``, [], [], ));
wordList.push(new DictWord(575, 575, 12, 2, `reduce`, `減（へ）らす、縮（しゅく）小（しょう）する`, ``, [], [], ));
wordList.push(new DictWord(576, 576, 12, 1, `waste`, `ごみ`, ``, [], [], ));
wordList.push(new DictWord(577, 577, 12, 1, `plastic`, `プラスチック`, ``, [], [], ));
wordList.push(new DictWord(578, 578, 12, 1, `paper`, `紙（かみ）`, ``, [], [], ));
wordList.push(new DictWord(579, 579, 12, 1, `straw`, `ストロー`, ``, [], [], ));
wordList.push(new DictWord(580, 580, 12, 3, `original`, `独（どく）自（じ）、独（どく）創（そう）的（てき）`, ``, [], [], ));
wordList.push(new DictWord(581, 581, 12, 3, `reusable`, `再（さい）利（り）用（よう）できる`, ``, [], [], ));
wordList.push(new DictWord(582, 582, 12, 0, `of course`, `もちろん`, `sure`, [], [], ));
wordList.push(new DictWord(583, 583, 12, 1, `meat`, `肉（にく）`, ``, [], [], ));
wordList.push(new DictWord(584, 584, 12, 1, `pie`, `パイ`, ``, [], [], ));
wordList.push(new DictWord(585, 585, 12, 1, `bean`, `豆（まめ）`, ``, [], [], ));
wordList.push(new DictWord(586, 586, 12, 1, `soup`, `スープ`, ``, [], [], ));
wordList.push(new DictWord(587, 587, 12, 1, `chicken`, `鳥（とり）肉（にく）、チキン`, ``, [], [], ));
wordList.push(new DictWord(588, 588, 12, 1, `curry`, `カレー`, ``, [], [], ));
wordList.push(new DictWord(589, 589, 12, 1, `well`, `井（い）戸（ど）`, ``, [], [], ));
wordList.push(new DictWord(590, 590, 12, 3, `other`, `他（ほか）`, `another`, [], [], ));
wordList.push(new DictWord(591, 591, 12, 0, `on the other hand`, `他（た）方（ほう）`, ``, [], [], ));
wordList.push(new DictWord(592, 592, 12, 1, `village`, `村（むら）`, ``, [], [], ));
wordList.push(new DictWord(593, 593, 12, 2, `collect`, `集（あつ）める`, ``, [], [], ));
wordList.push(new DictWord(594, 594, 12, 3, `far`, `遠（とお）い`, ``, [], [], ));
wordList.push(new DictWord(595, 595, 12, 1, `group`, `グループ、団（だん）体（たい）`, ``, [], [], ));
wordList.push(new DictWord(596, 596, 12, 2, `build`, `建（た）てる`, `set up`, [], [], ));
wordList.push(new DictWord(597, 597, 12, 8, `these`, `これら、これら人（ひと）たち`, ``, [], [], ));
wordList.push(new DictWord(598, 598, 12, 1, `money`, `金（かね）`, ``, [], [], ));
wordList.push(new DictWord(599, 599, 12, 2, `get`, `得（え）る、受（う）け取（と）る`, `receive`, [], [], ));
wordList.push(new DictWord(600, 600, 12, 3, `clean`, `きれい`, ``, [], [], ));
wordList.push(new DictWord(601, 601, 12, 3, `happy`, `うれしい`, ``, [], [], ));
wordList.push(new DictWord(602, 602, 12, 1, `river`, `川（かわ）`, ``, [], [], ));
wordList.push(new DictWord(603, 603, 13, 4, `back`, `戻（もど）って、返（かえ）して`, ``, [], [], ));
wordList.push(new DictWord(604, 604, 13, 6, `during`, `間（あいだ）中（ちゅう）`, ``, [], [], ));
wordList.push(new DictWord(605, 605, 13, 2, `stay`, `滞（たい）在（ざい）する、泊（と）まる`, ``, [], [], ));
wordList.push(new DictWord(606, 606, 13, 1, `snowboard`, `スノーボード`, ``, [], [], ));
wordList.push(new DictWord(607, 607, 13, 1, `Christmas`, `クリスマス`, ``, [], [], ));
wordList.push(new DictWord(608, 608, 13, 2, `relax`, `くつろぐ`, ``, [], [], ));
wordList.push(new DictWord(609, 609, 13, 1, `ice hockey`, `アイスホッケー`, ``, [], [], ));
wordList.push(new DictWord(610, 610, 13, 1, `vacation`, `休（きゅう）暇（か）、休（やす）み`, ``, [], [], ));
wordList.push(new DictWord(611, 611, 13, 1, `mountain`, `山（やま）`, ``, [], [], ));
wordList.push(new DictWord(612, 612, 13, 3, `traditional`, `伝（でん）統（とう）的（てき）`, ``, [], [], ));
wordList.push(new DictWord(613, 613, 13, 2, `clean`, `掃（そう）除（じ）する`, ``, [], [], ));
wordList.push(new DictWord(614, 614, 13, 3, `special`, `特（とく）別（べつ）`, ``, [], [], ));
wordList.push(new DictWord(615, 615, 13, 1, `grandparent`, `祖（そ）父（ふ）、祖（そ）母（ぼ）`, ``, [], [], ));
wordList.push(new DictWord(616, 616, 13, 1, `New Year`, `新（しん）年（ねん）`, ``, [], [], ));
wordList.push(new DictWord(617, 617, 13, 1, `New Year's Eve`, `大（おお）晦日（みそか）`, ``, [], [], ));
wordList.push(new DictWord(618, 618, 13, 1, `card`, `カード、はがき`, ``, [], [], ));
wordList.push(new DictWord(619, 619, 13, 2, `spend`, `過（す）ごす`, ``, [], [], ));
wordList.push(new DictWord(620, 620, 13, 1, `fortune slip`, `おみくじ`, ``, [], [], ));
wordList.push(new DictWord(621, 621, 13, 1, `charm`, `お守（まも）り`, ``, [], [], ));
wordList.push(new DictWord(622, 622, 13, 3, `wooden`, `木（もく）製（せい）`, ``, [], [], ));
wordList.push(new DictWord(623, 623, 13, 1, `wish`, `願（ねが）い`, ``, [], [], ));
wordList.push(new DictWord(624, 624, 13, 1, `board game`, `ボードゲーム`, ``, [], [], ));
wordList.push(new DictWord(625, 625, 13, 1, `New Year's Day`, `元（がん）日（じつ）`, ``, [], [], ));
wordList.push(new DictWord(626, 626, 13, 1, `future`, `未（み）来（らい）、将（しょう）来（らい）`, ``, [], [], ));
wordList.push(new DictWord(627, 627, 13, 3, `bad`, `よくない、ひどい`, ``, [], [], ));
wordList.push(new DictWord(628, 628, 13, 1, `tablet`, `板（ばん）状（じょう）の小（しょう）片（へん）`, ``, [], [], ));
wordList.push(new DictWord(629, 629, 13, 0, `Dear Tom`, `親（しん）愛（あい）なるトムへ`, ``, [], [], ));
wordList.push(new DictWord(630, 630, 13, 1, `grandma`, `おばあちゃん`, `grandmother`, [], [], ));
wordList.push(new DictWord(631, 631, 13, 1, `grandpa`, `おじいちゃん`, `grandfather`, [], [], ));
wordList.push(new DictWord(632, 632, 13, 2, `ski`, `スキーをする`, ``, [], [], ));
wordList.push(new DictWord(633, 633, 13, 2, `fall`, `落ちる`, ``, [], [], ));
wordList.push(new DictWord(634, 634, 13, 1, `Mt. Fuji`, `富（ふ）士（じ）山（さん）`, ``, [], [], ));
wordList.push(new DictWord(635, 635, 13, 1, `snow`, `雪（ゆき）`, ``, [], [], ));
wordList.push(new DictWord(636, 636, 13, 4, `outside`, `外（そと）`, `out`, [], [], ));
wordList.push(new DictWord(637, 637, 13, 0, `I miss you`, `君（きみ）がいなくて寂（さび）しい`, ``, [], [], ));
wordList.push(new DictWord(638, 638, 13, 1, `care`, `世（せ）話（わ）`, ``, [], [], ));
wordList.push(new DictWord(639, 639, 13, 4, `down`, `下（した）`, ``, [], [], ));
wordList.push(new DictWord(640, 640, 13, 1, `hotel`, `ホテル`, ``, [], [], ));
wordList.push(new DictWord(641, 641, 13, 0, `for the first time`, `はじめて`, ``, [], [], ));
wordList.push(new DictWord(642, 642, 13, 3, `high`, `高（たか）い`, ``, [], [], ));
wordList.push(new DictWord(643, 643, 13, 1, `shaved ice`, `かき氷（ごおり）`, ``, [], [], ));
wordList.push(new DictWord(644, 644, 13, 1, `whale`, `クジラ`, ``, [], [], ));
wordList.push(new DictWord(645, 645, 13, 1, `eye`, `目（め）`, ``, [], [], ));
wordList.push(new DictWord(646, 646, 13, 1, `fishing`, `つり`, ``, [], [], ));
wordList.push(new DictWord(647, 647, 13, 1, `shirt`, `シャツ`, ``, [], [], ));
wordList.push(new DictWord(648, 648, 13, 2, `fly`, `飛（と）ぶ`, ``, [], [], ));
wordList.push(new DictWord(649, 649, 13, 1, `shoe`, `くつ`, ``, [], [], ));
wordList.push(new DictWord(650, 650, 13, 1, `forest`, `森（もり）`, ``, [], [], ));
wordList.push(new DictWord(651, 651, 13, 1, `shopping`, `買（か）い物（もの）`, ``, [], [], ));
wordList.push(new DictWord(652, 652, 13, 1, `frog`, `カエル`, ``, [], [], ));
wordList.push(new DictWord(653, 653, 13, 3, `sour`, `酸（す）っぱい`, ``, [], [], ));
wordList.push(new DictWord(654, 654, 14, 2, `remember`, `覚（おぼ）える`, ``, [], [], ));
wordList.push(new DictWord(655, 655, 14, 3, `bored`, `退（たい）屈（くつ）`, ``, [], [], ));
wordList.push(new DictWord(656, 656, 14, 2, `realize`, `気（き）づく`, ``, [], [], ));
wordList.push(new DictWord(657, 657, 14, 1, `mistake`, `誤（あやま）り、まちがい`, ``, [], [], ));
wordList.push(new DictWord(658, 658, 14, 8, `anyone`, `だれでも`, ``, [], [], ));
wordList.push(new DictWord(659, 659, 14, 4, `anyway`, `とにかく、それでも`, ``, [], [], ));
wordList.push(new DictWord(660, 660, 14, 1, `chorus`, `合（がっ）唱（しょう）`, ``, [], [], ));
wordList.push(new DictWord(661, 661, 14, 1, `contest`, `コンテスト、コンクール`, ``, [], [], ));
wordList.push(new DictWord(662, 662, 14, 1, `memory`, `思（おも）い出（で）`, ``, [], [], ));
wordList.push(new DictWord(663, 663, 14, 7, `hey`, `やあ、おい、ちょっと、こんにちは`, `hi、hello`, [], [], ));
wordList.push(new DictWord(664, 664, 14, 1, `break`, `休（きゅう）憩（けい）`, ``, [], [], ));
wordList.push(new DictWord(665, 665, 14, 4, `then`, `そのとき`, ``, [], [], ));
wordList.push(new DictWord(666, 666, 14, 2, `bring`, `持（も）ってくる`, ``, [], [], ));
wordList.push(new DictWord(667, 667, 14, 1, `heart`, `心（こころ）`, ``, [], [], ));
wordList.push(new DictWord(668, 668, 14, 2, `beat`, `どきどきする`, ``, [], [], ));
wordList.push(new DictWord(669, 669, 14, 1, `way`, `道（みち）、道（みち）筋（すじ）`, ``, [], [], ));
wordList.push(new DictWord(670, 670, 14, 3, `each`, `それぞれ、各（かく）自（じ）`, ``, [], [], ));
wordList.push(new DictWord(671, 671, 14, 2, `show`, `見（み）せる`, ``, [], [], ));
wordList.push(new DictWord(672, 672, 14, 1, `album`, `アルバム`, ``, [], [], ));
wordList.push(new DictWord(673, 673, 14, 1, `yesterday`, `昨日（きのう）`, ``, [], [], ));
wordList.push(new DictWord(674, 674, 14, 3, `fast`, `早（はや）い`, ``, [], [], ));
wordList.push(new DictWord(675, 675, 14, 1, `trip`, `旅（りょ）行（こう）`, ``, [], [], ));
wordList.push(new DictWord(676, 676, 14, 1, `campground`, `キャンプ場（じょう）`, ``, [], [], ));
wordList.push(new DictWord(677, 677, 14, 1, `hot spring`, `温（おん）泉（せん）`, ``, [], [], ));
wordList.push(new DictWord(678, 678, 14, 2, `set up`, `建（た）てる`, `build`, [], [], ));
wordList.push(new DictWord(679, 679, 14, 1, `tent`, `テント`, ``, [], [], ));
wordList.push(new DictWord(680, 680, 14, 3, `main`, `主（おも）、主（しゅ）要（よう）`, ``, [], [], ));
wordList.push(new DictWord(681, 681, 14, 1, `campfire`, `キャンプファイヤ`, ``, [], [], ));
wordList.push(new DictWord(682, 682, 14, 2, `camp`, `キャンプ`, ``, [], [], ));
wordList.push(new DictWord(683, 683, 14, 1, `night`, `夜（よる）、晩（ばん）`, `evening`, [], [], ));
wordList.push(new DictWord(684, 684, 14, 1, `event`, `エベント、出（で）来（き）事（ごと）、行（ぎょう）事（じ）`, ``, [], [], ));
wordList.push(new DictWord(685, 685, 14, 3, `wrong`, `ぐあいが悪（わる）い`, ``, [], [], ));
wordList.push(new DictWord(686, 686, 14, 1, `stomachache`, `胃（い）痛（つう）、腹（ふく）痛（つう）`, ``, [], [], ));
wordList.push(new DictWord(687, 687, 14, 7, `before`, `前（まえ）`, ``, [], [], ));
wordList.push(new DictWord(688, 688, 14, 3, `mild`, `穏（おだ）やか、強（つよ）くない、軽（かる）い`, ``, [], [], ));
wordList.push(new DictWord(689, 689, 14, 1, `medicine`, `薬（くすり）`, ``, [], [], ));
wordList.push(new DictWord(690, 690, 14, 1, `rest`, `休（やす）み、休（きゅう）息（そく）`, ``, [], [], ));
wordList.push(new DictWord(691, 691, 14, 1, `headache`, `頭（ず）痛（つう）`, ``, [], [], ));
wordList.push(new DictWord(692, 692, 14, 1, `fever`, `熱（ねつ）`, ``, [], [], ));
wordList.push(new DictWord(693, 693, 14, 1, `toothache`, `歯（し）痛（つう）`, ``, [], [], ));
wordList.push(new DictWord(694, 694, 14, 1, `doctor`, `医（い）者（しゃ）`, ``, [], [], ));
wordList.push(new DictWord(695, 695, 14, 2, `spell`, `つづる`, ``, [], [], ));
wordList.push(new DictWord(696, 696, 14, 1, `aunt`, `おばさん`, ``, [], [], ));
wordList.push(new DictWord(697, 697, 14, 1, `dictionary`, `辞（じ）書（しょ）`, ``, [], [], ));
wordList.push(new DictWord(698, 698, 14, 1, `grandfather`, `おじいちゃん`, `grandpa`, [], [], ));
wordList.push(new DictWord(699, 699, 14, 1, `grandmother`, `おばあちゃん`, `grandma`, [], [], ));
wordList.push(new DictWord(700, 700, 14, 1, `home economics`, `家（か）庭（てい）科（か）`, ``, [], [], ));
wordList.push(new DictWord(701, 701, 14, 1, `knee`, `ひざ`, ``, [], [], ));
wordList.push(new DictWord(702, 702, 14, 1, `lettuce`, `レタス`, ``, [], [], ));
wordList.push(new DictWord(703, 703, 14, 1, `mouth`, `口（くち）`, ``, [], [], ));
wordList.push(new DictWord(704, 704, 14, 1, `neck`, `首（くび）`, ``, [], [], ));
wordList.push(new DictWord(705, 705, 14, 1, `office`, `事（じ）務（む）所（しょ）、役（やく）所（しょ）`, ``, [], [], ));
wordList.push(new DictWord(706, 706, 14, 1, `pencil case`, `筆（ふで）箱（ばこ）`, ``, [], [], ));
wordList.push(new DictWord(707, 707, 15, 1, `relay`, `リレー競（きょう）走（そう）`, ``, [], [], ));
wordList.push(new DictWord(708, 708, 15, 3, `another`, `他（ほか）、別（べつ）`, `other`, [], [], ));
wordList.push(new DictWord(709, 709, 15, 1, `runner`, `走（そう）者（しゃ）`, ``, [], [], ));
wordList.push(new DictWord(710, 710, 15, 7, `behind`, `後（うし）ろ`, ``, [], [], ));
wordList.push(new DictWord(711, 711, 15, 1, `sports day`, `運（うん）動（どう）会（かい）`, ``, [], [], ));
wordList.push(new DictWord(712, 712, 15, 3, `naughty`, `わんぱく`, ``, [], [], ));
wordList.push(new DictWord(713, 713, 15, 1, `trick`, `いたずら`, ``, [], [], ));
wordList.push(new DictWord(714, 714, 15, 2, `creep`, `這（は）う`, ``, [], [], ));
wordList.push(new DictWord(715, 715, 15, 2, `let`, `させる`, ``, [], [], ));
wordList.push(new DictWord(716, 716, 15, 2, `shout`, `叫（さけ）ぶ`, ``, [], [], ));
wordList.push(new DictWord(717, 717, 15, 2, `escape`, `逃（に）げる`, ``, [], [], ));
wordList.push(new DictWord(718, 718, 15, 4, `later`, `後（あと）で`, ``, [], [], ));
wordList.push(new DictWord(719, 719, 15, 2, `die`, `死（し）ぬ`, ``, [], [], ));
wordList.push(new DictWord(720, 720, 15, 3, `alone`, `一人（ひとり）だけ`, ``, [], [], ));
wordList.push(new DictWord(721, 721, 15, 4, `out`, `外（そと）`, `outside`, [], [], ));
wordList.push(new DictWord(722, 722, 15, 0, `one day`, `ある日（ひ）`, ``, [], [], ));
wordList.push(new DictWord(723, 723, 15, 1, `vendor`, `行（ぎょう）商（しょう）人（にん）`, ``, [], [], ));
wordList.push(new DictWord(724, 724, 15, 1, `cart`, `カート`, ``, [], [], ));
wordList.push(new DictWord(725, 725, 15, 2, `leave`, `置（お）く`, ``, [], [], ));
wordList.push(new DictWord(726, 726, 15, 1, `chestnut`, `マロン`, ``, [], [], ));
wordList.push(new DictWord(727, 727, 15, 2, `hear`, `聞（き）く`, ``, [], [], ));
wordList.push(new DictWord(728, 728, 15, 8, `something`, `何（なに）か`, ``, [], [], ));
wordList.push(new DictWord(729, 729, 15, 8, `himself`, `彼（かれ）自（じ）身（しん）`, ``, [], [], ));
wordList.push(new DictWord(730, 730, 15, 1, `neighbor`, `隣（りん）人（じん）、近（きん）所（じょ）の人（ひと）`, ``, [], [], ));
wordList.push(new DictWord(731, 731, 15, 2, `receive`, `受（う）け取（と）る`, `get`, [], [], ));
wordList.push(new DictWord(732, 732, 15, 8, `someone`, `誰（だれ）か`, ``, [], [], ));
wordList.push(new DictWord(733, 733, 15, 1, `thing`, `物（もの）、事（こと）`, ``, [], [], ));
wordList.push(new DictWord(734, 734, 15, 1, `god`, `神（かみ）`, ``, [], [], ));
wordList.push(new DictWord(735, 735, 15, 6, `through`, `通（とお）し抜（ぬ）けて`, ``, [], [], ));
wordList.push(new DictWord(736, 736, 15, 1, `door`, `ドア、戸（と）`, ``, [], [], ));
wordList.push(new DictWord(737, 737, 15, 6, `into`, `中（なか）へ`, ``, [], [], ));
wordList.push(new DictWord(738, 738, 15, 2, `pick up`, `拾（ひ）い上（あ）げる`, ``, [], [], ));
wordList.push(new DictWord(739, 739, 15, 1, `gun`, `銃（じゅう）`, ``, [], [], ));
wordList.push(new DictWord(740, 740, 15, 1, `ground`, `土（と）地（ち）`, ``, [], [], ));
wordList.push(new DictWord(741, 741, 15, 3, `fresh`, `新（しん）鮮（せん）、生（なま）`, ``, [], [], ));
wordList.push(new DictWord(742, 742, 15, 1, `floor`, `床（ゆか）`, ``, [], [], ));
wordList.push(new DictWord(743, 743, 15, 2, `nod`, `うなずく`, ``, [], [], ));
wordList.push(new DictWord(744, 744, 15, 4, `weakly`, `強（つよ）く、弱（よわ）々（よわ）しく`, ``, [], [], ));
wordList.push(new DictWord(745, 745, 15, 2, `drop`, `落（お）とす`, ``, [], [], ));
wordList.push(new DictWord(746, 746, 15, 1, `smoke`, `煙（けむり）`, ``, [], [], ));
wordList.push(new DictWord(747, 747, 15, 2, `rise`, `上（あ）がる`, ``, [], [], ));
wordList.push(new DictWord(748, 748, 15, 3, `spicy`, `辛（から）い`, ``, [], [], ));
wordList.push(new DictWord(749, 749, 15, 1, `temple`, `寺（てら）`, ``, [], [], ));
wordList.push(new DictWord(750, 750, 15, 1, `uncle`, `おじさん`, ``, [], [], ));
wordList.push(new DictWord(751, 751, 15, 1, `weather`, `天（てん）気（き）`, ``, [], [], ));
wordList.push(new DictWord(752, 752, 15, 1, `guitar`, `ギター`, ``, [], [], ));
wordList.push(new DictWord(753, 753, 15, 2, `listen`, `聞（き）く`, ``, [], [], ));
wordList.push(new DictWord(754, 754, 15, 1, `nurse`, `看（かん）護（ご）師（し）`, ``, [], [], ));
wordList.push(new DictWord(755, 755, 15, 1, `onion`, `玉（たま）ねぎ`, ``, [], [], ));
wordList.push(new DictWord(756, 756, 15, 1, `spider`, `蜘（く）蛛（も）`, ``, [], [], ));
wordList.push(new DictWord(757, 757, 15, 1, `toe`, `足（あし）の指（ゆび）`, ``, [], [], ));
wordList.push(new DictWord(758, 758, 15, 3, `quiet`, `静（しず）か`, ``, [], [], ));
wordList.push(new DictWord(759, 759, 15, 1, `spring`, `春（はる）`, ``, [], [], ));
wordList.push(new DictWord(760, 760, 15, 1, `tooth`, `歯（は）`, ``, [], [], ));
wordList.push(new DictWord(761, 761, 15, 1, `hair`, `髪（かみ）`, ``, [], [], ));
wordList.push(new DictWord(762, 762, 15, 1, `social studies`, `社（しゃ）会（かい）科（か）`, ``, [], [], ));
wordList.push(new DictWord(763, 763, 15, 1, `track and field`, `陸（りく）上（じょう）競（きょう）技（ぎ）`, ``, [], [], ));
wordList.push(new DictWord(764, 764, 15, 1, `supermarket`, `スーパーマーケット`, ``, [], [], ));
wordList.push(new DictWord(765, 765, 15, 3, `sweet`, `甘（あま）い`, ``, [], [], ));


	wordList.sort((a, b) => {return a.order-b.order});
	return wordList;
}

const m = { // m is for map
	'Jonah': 0,
	'Sean': 1,
	'Harrison': 2,
	'Megan': 3,
	'Tzu-han': 4,
	'Arlenys': 5,
	'Claire': 6,
	'Nicholas': 7,
};

const d = InitWords();
// Create the allocations array
const a = [4, 7, 5, 4, 5, 5, 0, 1, 0, 6, 7, 0, 5, 5, 1, 6, 0, 1, 6, 3, 4, 6, 5, 0, 4, 7, 5, 6, 5, 2, 4, 3, 2, 0, 7, 3, 1, 1, 0, 0, 4, 7, 2, 4, 4, 6, 4, 0, 0, 7, 0, 2, 5, 1, 2, 2, 1, 3, 2, 6, 3, 1, 3, 3, 6, 2, 0, 5, 4, 7, 3, 6, 1, 5, 0, 4, 2, 1, 1, 1, 6, 2, 6, 0, 5, 3, 6, 2, 7, 2, 6, 6, 3, 0, 0, 7, 2, 3, 7, 6, 5, 2, 0, 7, 3, 6, 1, 7, 2, 1, 4, 3, 5, 6, 5, 5, 0, 6, 4, 3, 0, 0, 5, 3, 1, 2, 3, 6, 1, 5, 7, 1, 5, 4, 1, 4, 4, 5, 4, 3, 3, 5, 1, 7, 6, 1, 5, 0, 4, 0, 0, 7, 4, 3, 5, 4, 0, 4, 1, 7, 6, 6, 2, 3, 7, 6, 3, 0, 2, 4, 4, 4, 6, 6, 0, 4, 6, 4, 3, 1, 0, 1, 2, 7, 0, 7, 3, 3, 1, 6, 3, 2, 7, 5, 7, 4, 4, 7, 4, 1, 6, 2, 6, 6, 3, 5, 1, 5, 4, 3, 3, 6, 4, 0, 7, 1, 2, 6, 5, 1, 3, 5, 3, 1, 6, 0, 5, 6, 5, 0, 4, 4, 2, 7, 2, 4, 3, 1, 6, 6, 0, 2, 4, 7, 2, 7, 5, 6, 4, 4, 2, 3, 7, 2, 4, 6, 5, 5, 0, 5, 5, 1, 3, 3, 3, 3, 6, 0, 4, 3, 3, 6, 7, 5, 0, 4, 6, 7, 2, 2, 0, 0, 2, 2, 2, 4, 7, 6, 4, 4, 1, 4, 6, 6, 5, 6, 7, 2, 0, 7, 5, 7, 1, 6, 5, 0, 7, 0, 3, 2, 4, 1, 7, 1, 2, 2, 5, 7, 0, 3, 1, 6, 7, 3, 6, 5, 2, 2, 1, 6, 4, 7, 0, 4, 4, 0, 6, 6, 4, 1, 6, 7, 1, 0, 2, 4, 1, 1, 1, 5, 7, 7, 3, 6, 7, 7, 0, 3, 4, 1, 2, 1, 3, 0, 4, 3, 3, 7, 1, 2, 7, 0, 3, 7, 1, 6, 7, 7, 1, 7, 6, 7, 4, 2, 4, 2, 1, 1, 3, 6, 4, 2, 1, 1, 7, 5, 4, 4, 6, 6, 7, 4, 7, 6, 1, 0, 4, 0, 2, 0, 3, 7, 3, 5, 4, 2, 4, 3, 0, 5, 5, 6, 7, 1, 1, 1, 4, 6, 2, 2, 5, 5, 5, 4, 2, 4, 3, 6, 6, 3, 1, 4, 0, 0, 6, 0, 2, 6, 3, 1, 2, 5, 5, 2, 1, 7, 2, 7, 3, 0, 2, 1, 4, 5, 6, 2, 3, 4, 3, 2, 7, 3, 4, 7, 3, 1, 5, 5, 5, 6, 0, 6, 5, 4, 4, 4, 6, 5, 4, 6, 7, 2, 5, 1, 2, 1, 2, 0, 5, 7, 3, 7, 2, 1, 2, 6, 4, 1, 0, 0, 0, 5, 5, 2, 2, 3, 4, 0, 3, 1, 2, 0, 0, 2, 2, 1, 3, 0, 4, 1, 6, 4, 2, 5, 1, 2, 3, 7, 0, 2, 4, 7, 6, 1, 7, 5, 3, 5, 7, 5, 7, 6, 7, 5, 0, 5, 3, 0, 2, 7, 0, 5, 2, 4, 3, 5, 7, 3, 0, 1, 7, 7, 2, 0, 2, 6, 5, 7, 7, 7, 3, 3, 5, 3, 0, 2, 5, 3, 4, 3, 5, 2, 7, 5, 3, 2, 4, 2, 0, 5, 6, 4, 1, 3, 6, 1, 0, 1, 3, 1, 0, 3, 4, 1, 4, 3, 1, 2, 6, 0, 5, 5, 2, 4, 3, 3, 5, 3, 7, 0, 3, 0, 0, 2, 5, 2, 0, 5, 3, 5, 4, 7, 5, 7, 1, 7, 5, 7, 0, 6, 1, 0, 7, 5, 5, 4, 7, 7, 3, 6, 7, 3, 5, 4, 7, 6, 4, 0, 6, 3, 2, 6, 2, 3, 1, 7, 0, 0, 0, 5, 7, 1, 5, 0, 5, 3, 0, 1, 3, 6, 7, 2, 3, 3, 1, 4, 3, 0, 2, 2, 2, 6, 7, 2, 5, 1, 1, 2, 6, 0, 6, 7, 0, 6, 1, 1, 1, 0, 3, 5, 0, 2, 6, 1, 4, 7, 4, 5, 5, 3, 3, 7, 6, 4, 1, 3, 1, 6, 2, 7, 0, 0, 6, 4, 4, 6, 5, 1, 5, 0, 7, 2, 2, 2, 4, 1, 1, 4, 1, 1, 6, 6, 0, 2, 5, 1];
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