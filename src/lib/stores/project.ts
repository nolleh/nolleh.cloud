import { readable } from 'svelte/store';

export interface Project {
  id: string;
  src: string;
  desc: string;
  gif?: string;
}

export const projects = readable([
  {
    id: 'newmatgo',
    src: 'projects/newmatgo.png',
    desc: 'pmang newmatgo mobile',
    gif: 'projects/newmatgo.gif'
  },
  {
    id: 'poker',
    src: 'projects/poker.png',
    desc: 'pmang poker',
    gif: 'projects/poker.gif'
  },
  {
    id: 'heybit',
    src: 'projects/heybit.webp',
    desc: 'heybit'
  },
  {
    id: 'bp',
    src: 'projects/bp.jpeg',
    desc: 'brown dust puzzle'
  },
  {
    id: 'bugs',
    src: 'projects/bugs.png',
    desc: 'music player bugs'
  }
]);
