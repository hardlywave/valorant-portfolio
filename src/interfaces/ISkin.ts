export interface ISkin {
  displayName: string;
  displayIcon: string;
  levels: [ISkinLevel];
}

export interface ISkinLevel {
  displayIcon: string;
}
