import { Milestone } from '../types';
import { APP_IMAGES } from './images';

export const MILESTONES: Milestone[] = [
  {
    year: '1930',
    title: 'The Allahabad Address',
    label: 'VISION',
    date: '29 December 1930',
    location: 'Allahabad, British India',
    description: 'Allama Muhammad Iqbal delivered his historic presidential address at the annual session of the All-India Muslim League, articulating for the very first time the political philosophy of an independent Muslim state in northwestern India.',
    significance: 'He famously declared: "I would like to see the Punjab, North-West Frontier Province, Sind and Baluchistan amalgamated into a single state... The formation of a consolidated North-West Indian Muslim State appears to me to be the final destiny of the Muslims."',
    imageUrl: APP_IMAGES.allahabad1930,
    quote: 'The units of Indian society are not territorial as in European countries. India is a continent of human groups belonging to different races, speaking different languages, and professing different religions.',
  },
  {
    year: '1940',
    title: 'The Lahore Resolution',
    label: 'LAHORE RESOLUTION',
    date: '23 March 1940',
    location: 'Minto Park, Lahore',
    description: 'Under the presidency of Quaid-e-Azam Muhammad Ali Jinnah, tens of thousands of delegates gathered at Minto Park (now Greater Iqbal Park). The landmark resolution moved by A.K. Fazlul Huq officially adopted the demand for separate independent states.',
    significance: 'Quaid-e-Azam declared: "The Hindus and Muslims belong to two different religious philosophies, social customs, literatures. They neither intermarry nor interdine together... To yoke together two such nations under a single state must lead to growing discontent and final destruction."',
    imageUrl: APP_IMAGES.lahore1940,
    quote: 'Musalmans are a nation according to any definition of a nation, and they must have their homelands, their territory and their state.',
  },
  {
    year: '1946',
    title: 'The Historic Mandate',
    label: 'THE MANDATE',
    date: 'Winter 1945–1946',
    location: 'Across the Subcontinent',
    description: 'In the decisive general elections of 1945-46, the All-India Muslim League fought on a single-point manifesto: Pakistan. The League swept 87% of the total Muslim seats across the provinces, proving unequivocally that the demand for Pakistan was backed by the entire nation.',
    significance: 'The overwhelming electoral victory decisively defeated alternative proposals like the Cabinet Mission plan, demonstrating that partition and an independent Pakistan was the irrevocable will of the people.',
    imageUrl: APP_IMAGES.jinnah,
    quote: 'We have won the battle for Pakistan on the constitutional field, with the ballot, through discipline and democratic unity.',
  },
  {
    year: '1947',
    title: 'Dawn of Independence',
    label: 'INDEPENDENCE',
    date: '14 August 1947 (27 Ramadan 1366 AH)',
    location: 'Karachi & Across Pakistan',
    description: 'At the stroke of midnight, as the British Indian Empire ceased to exist, Pakistan emerged as an independent sovereign nation on the map of the world. Radio Pakistan broadcasted: "Assalam-o-Alaikum, Pakistan Broadcasting Service. We welcome you to the independent state of Pakistan."',
    significance: 'Quaid-e-Azam Muhammad Ali Jinnah was sworn in as the first Governor-General in Karachi. In his address to the Constituent Assembly, he declared: "You are free; you are free to go to your temples, you are free to go to your mosques or to any other place of worship in this State of Pakistan."',
    imageUrl: APP_IMAGES.indep1947,
    quote: 'With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve. Pakistan Zindabad!',
  },
];
