export interface Animal {
  species: string;
  kingdom: string;
  class: string;
}

export interface DoSound {
  name: string;
  doASound: () => string;
}

