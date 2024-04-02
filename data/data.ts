import {ImageSourcePropType} from 'react-native';

export type Data = {
  name: string;
  location: string;
  image: ImageSourcePropType;
  about: string;
};

const data: Data[] = [
  {
    name: 'Kelingking Beach',
    location: 'Bali, Indonesia',
    image: { uri: 'https://imgs.search.brave.com/x3OgkyoF0cp_Aergh7woAPKl3x96HmWm58hf9JxB49o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMy8w/Mi8wMS8xOC8xNC91/cmwtNzcxNjlfNjQw/LmpwZw' },
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget. Nam magna ligula, consequat sit amet purus eu, eleifend maximus elit. Aliquam rhoncus fringilla venenatis. In pulvinar lacus quis urna suscipit, placerat commodo turpis molestie. Cras tristique suscipit nisl, eu porttitor ex.',
  },
  {
    name: 'Diamond Beach',
    location: 'Bali, Indonesia',
    image: { uri: 'https://imgs.search.brave.com/x3OgkyoF0cp_Aergh7woAPKl3x96HmWm58hf9JxB49o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMy8w/Mi8wMS8xOC8xNC91/cmwtNzcxNjlfNjQw/LmpwZw' },
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget. Nam magna ligula, consequat sit amet purus eu, eleifend maximus elit. Aliquam rhoncus fringilla venenatis. In pulvinar lacus quis urna suscipit, placerat commodo turpis molestie. Cras tristique suscipit nisl, eu porttitor ex.',
  },
  {
    name: 'Canggu Beach',
    location: 'Bali, Indonesia',
    image: { uri: 'https://imgs.search.brave.com/x3OgkyoF0cp_Aergh7woAPKl3x96HmWm58hf9JxB49o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMy8w/Mi8wMS8xOC8xNC91/cmwtNzcxNjlfNjQw/LmpwZw' },
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget. Nam magna ligula, consequat sit amet purus eu, eleifend maximus elit. Aliquam rhoncus fringilla venenatis. In pulvinar lacus quis urna suscipit, placerat commodo turpis molestie. Cras tristique suscipit nisl, eu porttitor ex.',
  },
  {
    name: 'Broken Beach',
    location: 'Bali, Indonesia',
    image: { uri: 'https://imgs.search.brave.com/x3OgkyoF0cp_Aergh7woAPKl3x96HmWm58hf9JxB49o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMy8w/Mi8wMS8xOC8xNC91/cmwtNzcxNjlfNjQw/LmpwZw' },
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget. Nam magna ligula, consequat sit amet purus eu, eleifend maximus elit. Aliquam rhoncus fringilla venenatis. In pulvinar lacus quis urna suscipit, placerat commodo turpis molestie. Cras tristique suscipit nisl, eu porttitor ex.',
  },
  {
    name: 'Broken Beach',
    location: 'Bali, Indonesia',
    image: { uri: 'https://imgs.search.brave.com/x3OgkyoF0cp_Aergh7woAPKl3x96HmWm58hf9JxB49o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMy8w/Mi8wMS8xOC8xNC91/cmwtNzcxNjlfNjQw/LmpwZw' },
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget. Nam magna ligula, consequat sit amet purus eu, eleifend maximus elit. Aliquam rhoncus fringilla venenatis. In pulvinar lacus quis urna suscipit, placerat commodo turpis molestie. Cras tristique suscipit nisl, eu porttitor ex.',
  },
];

export default data;