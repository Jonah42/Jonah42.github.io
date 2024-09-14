if (document.readyState === "complete") {
    CreateCells();
} else {
	window.addEventListener("load", () => {
        CreateCells();
    });
}

const descriptions = [
	'Nightcliff',
	'Mount Kosciuszko',
	'Wollongong Breakwater Lighthouse',
	'Dumbleyung Lake',
	'Lucky Bay',
	'Sydney',
	'Whitehaven Beach',
	'Elephant Rocks',
	'Wineglass Bay',
	'Devils Marbles',
	'Hutt Lagoon',
	'Lord Howe Island',
	'Cape Raoul',
	'Sea Cliff Bridge',
	'Heart Reef',
	'Three Sisters',
	'Princes Pier',
	'Springbrook National Park',
	'Pinnacles Lookout',
	'Cradle Mountain-Lake St Clair National Park',
	'Lake Eyre',
	'Twelve Apostles',
	'Simpson Desert',
	'Karijini National Park',
	'Gog and Magog',
	'Lake Hillier',
	'Natural Bridge',
	'Cape York',
	'Uluru',
	'The Nobbies',
	'Kings Canyon',
	'Glass House Mountains',
	'Greater Beedelup National Park',
	'Nature\'s Window',
	'Great Barrier Reef',
	'Berrys Bay Lookout',
	'Lady Elliot Island',
	'St Pauls Beach',
	'Dove Lake',
	'Barangaroo Reserve',
	'Mount Olga',
	'Canola Fields',
	'Murray River',
	'Marions Lookout',
	'Cape du Couedic Lighthouse',
	'Pilbara',
	'Tesselated Pavement',
	'Bunyeroo Valley',
	'Windjana Gorge',
	'The Bungle Bungles',
	'Bondi to Bronte Coastal Walk',
	'Melbourne Star Observation Wheel',
	'The University of Sydney',
	'Seafarers Bridge',
	'Melbourne',
	'Homebush Bay',
	'Lillies Bay',
	'Darwin',
	'Cape Hillsborough National Park',
	'Loch Ard Gorge',
	'Hallett Cove Boardwalk',
	'Cosy Corner',
	'The Blade',
	'Bare Island',
	'Hamersley Gorge',
	'Sydney Harbour Bridge',
	'Gantheaume Point',
	'The Basin',
	'Whyalla',
	'Clifton Springs Pier',
	'Rainbow Beach',
	'Rottnest Island',
	'Turimetta Beach',
	'Gordon Dam',
	'Cape Range National Park',
	'Bombo Headland'
	];

function ShowPic(e) {
	let imageContainer = document.getElementById('image-container');
	let image = document.getElementById('image');
	let imageText = document.getElementById('image-text');
	const index = parseInt(e.target.id.slice(5));
	imageText.textContent = descriptions[index];
	image.src = `img/${index+1}.jpg`;
	imageContainer.style.display = 'flex';
}

function HidePic(e) {
	let imageContainer = document.getElementById('image-container');
	imageContainer.style.display = 'none';
}

function CreateCells() {
	let inputContainer = document.getElementById('input-container');

	const NUM_CELLS = 76

	// First create the input buttons
	let rows = [];
	for (let i = 0; i*10 <= NUM_CELLS; i++) {
		let row = CreateElement('div', 'input-row');
		let cells = [];
		for (let j = 0; j < 10 && i*10+j < NUM_CELLS; j++) {
			const cellWrapper = CreateElement('div', 'input-cell-wrapper');
			cellWrapper.setAttribute('id', `cell-${i*10+j}`);
			cellWrapper.addEventListener('click', ShowPic);
			const cell = CreateElement('div', 'input-cell', `${i*10+j+1}`);
			AddChildren(cellWrapper, [cell]);
			cells.push(cellWrapper);
		}
		AddChildren(row, cells);
		rows.push(row);
	}
	AddChildren(inputContainer, rows);

	// let image = document.getElementById('image');
	// image.addEventListener('click', HidePic);

	let closeButton = document.getElementById('close-button');
	closeButton.addEventListener('click', HidePic);
}





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