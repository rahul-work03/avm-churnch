import * as migration_20260901_195618_init from './20260901_195618_init';

export const migrations = [
  {
    up: migration_20260901_195618_init.up,
    down: migration_20260901_195618_init.down,
    name: '20260901_195618_init'
  },
];
