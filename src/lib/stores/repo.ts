import { readable } from 'svelte/store';

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
  CPP
}

export const contribution = readable([
  { url: 'https://github.com/helm/charts', name: 'helm', lang: Lang.HELM, merged: true },
  { url: 'https://github.com/sirupsen/logrus', name: 'logrus', lang: Lang.GO, merged: true },
  {
    url: 'https://github.com/NLKNguyen/pipe-mysql.vim',
    name: 'pipe-mysql.vim',
    lang: Lang.VIM_SCRIPT,
    merged: true
  },
  {
    url: 'https://github.com/vimwiki/vimwiki',
    name: 'vimwiki',
    lang: Lang.VIM_SCRIPT,
    merged: true
  },
  {
    url: 'https://github.com/nekipelov/redisclient',
    name: 'redisclient c++',
    lang: Lang.CPP,
    merged: false
  }
]);

export const ownCode = readable([
  {
    url: 'https://github.com/nolleh/caption_json_formatter',
    name: 'caption-json-formatter',
    lang: Lang.GO,
    merged: false
  },
  { url: 'https://github.com/nolleh/ctxlog', name: 'ctxlog', lang: Lang.GO, merged: false },
  {
    url: 'https://github.com/nolleh/serialize-interceptor',
    name: 'serialize-interceptor',
    lang: Lang.VIM_SCRIPT,
    merged: false
  },
  {
    url: 'https://github.com/nolleh/rsp',
    name: 'rsp',
    lang: Lang.CPP,
    merged: false
  },
  {
    url: 'https://github.com/nolleh/jest-badge-deploy-action',
    name: 'jest-badge-deploy-action',
    lang: Lang.VIM_SCRIPT,
    merged: false
  }
]);
