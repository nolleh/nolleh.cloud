export interface Repo {
  url: string;
  name: string;
  lang: Lang;
  merged: boolean;
}
export enum Lang {
  HELM,
  GO,
  VIM_SCRIPT,
  PYTHON,
  TYPE_SCRIPT,
  CPP,
}
