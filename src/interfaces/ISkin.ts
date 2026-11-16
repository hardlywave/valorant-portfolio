export interface ISkin {
  uuid: string;
  displayName: string;
  displayIcon: string | null;
  levels: ISkinLevel[];
}

export interface ISkinLevel {
  displayIcon: string | null;
}
