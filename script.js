'use strict';

// ELEMENTS //////////////

const filter = document.querySelector('button');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close__button');
const buttons = document.querySelectorAll('.button__type');
const filterButton = document.querySelector('.button__filters');
const property = document.querySelector('.property__container');
const loader = document.querySelector('.loader');
const form = document.querySelector('form');
const inputCheckbox = document.querySelectorAll('.input__checkbox');
const apartmentCheckbox = document.querySelector('.apartment__checkbox');
const villaCheckbox = document.querySelector('.villa__checkbox');

// URL DATA ////////////////

let params = new URLSearchParams(location.search);
let destination = params.get('destination');
let apartments = params.get('apartments');
let villas = params.get('villas');
let arrivingDate = params.get('arriving');
let endDate = params.get('end');
let bedrooms = params.get('bedrooms');
let bathrooms = params.get('bathrooms');
let centerDistance = params.get('center');
let beachDistance = params.get('beach');
let pool = params.get('pool');
let pets = params.get('pets');
let parking = params.get('parking');
let internet = params.get('internet');
let grill = params.get('grill');
let sea = params.get('sea');
let sat = params.get('sat');
let dishwasher = params.get('dishwasher');
let airConditioning = params.get('air');
let baby = params.get('baby');
let searchProperty = params.get('search');
let amenities = [
  pool,
  pets,
  internet,
  grill,
  sea,
  airConditioning,
  sat,
  dishwasher,
  baby,
  parking,
];

// FORM STATE ////////////

// APARTMENT ///////////
const apartmentsLabel = document.querySelector('.button__type-apartments');

if (apartments !== null) apartmentsLabel.classList.add('active');
if (apartments === apartmentCheckbox.value) apartmentCheckbox.checked = true;

// VILLAS /////////////

const villasLabel = document.querySelector('.button__type-villas');

if (villas !== null) villasLabel.classList.add('active');
if (villas === villaCheckbox.value) villaCheckbox.checked = true;

// DESTINATIONS //////////

const destinationSelect = document.querySelector('.destination');
const destinationOptions = document.querySelectorAll('.options-destination');

destinationOptions.forEach(option => {
  if (option.value === destination) option.setAttribute('selected', 'selected');
});

// ARRIVING DATE /////////

const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const joined = [year, month, day].join('-');

const arrivingInput = document.querySelector('.arriving__date');
arrivingInput.setAttribute('value', joined);

if (arrivingDate !== null) arrivingInput.setAttribute('value', arrivingDate);

// ENDING DATE

const endingInput = document.querySelector('.departing__date');

if (endDate !== null) endingInput.setAttribute('value', endDate);

// BEDROOMS ////////////
const bedroomsSelect = document.querySelector('.bedrooms');
const bedroomsOptions = document.querySelectorAll('.bedroom__options');

bedroomsOptions.forEach(option => {
  if (option.value === bedrooms) option.setAttribute('selected', 'selected');
});

// BATHROOMS //////////
const bathroomsSelect = document.querySelector('.bathrooms');
const bathroomsOptions = document.querySelectorAll('.bathroom__options');

bathroomsOptions.forEach(option => {
  if (option.value === bathrooms) option.setAttribute('selected', 'selected');
});

// BEACH //////////////

const beachOptions = document.querySelectorAll('.beach__radio');

beachOptions.forEach(option => {
  if (option.value === beachDistance) option.setAttribute('checked', 'checked');
});

// CENTER

const centerOptions = document.querySelectorAll('.center__radio');

centerOptions.forEach(option => {
  if (option.value === centerDistance)
    option.setAttribute('checked', 'checked');
});

// AMENITIES /////////////

const amenitiesButtons = document.querySelectorAll('.amenities__label');

amenitiesButtons.forEach(button => {
  amenities.forEach(amenities => {
    const attribute = button.getAttribute('for', 'for');
    if (attribute === amenities) button.classList.add('active');
  });
});

inputCheckbox.forEach(input => {
  amenities.forEach(amenities => {
    if (input.value === amenities) input.checked = true;
  });
});

// SEARCH ///////////////

const searchInput = document.querySelector('.search__input');

if (searchProperty !== null) searchInput.setAttribute('value', searchProperty);

// STORAGE //////////////

let clicked = localStorage.getItem('clicked');

// EVENTS ///////////////

filter.addEventListener('click', () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
  });
});

filterButton.addEventListener('click', () => {
  clicked = true;
  localStorage.setItem('clicked', clicked);
});

// LOADER /////////////////////

if (clicked) {
  setTimeout(() => {
    property.classList.add('hidden');
    loader.classList.remove('hidden');
    localStorage.removeItem('clicked');
  }, '01');

  setTimeout(() => {
    loader.classList.add('hidden');
    property.classList.remove('hidden');
  }, '2000');
}
