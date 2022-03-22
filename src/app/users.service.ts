import { Injectable } from '@angular/core';

const users = [
  {
    id: 4038,
    name: 'Bela Pandey III',
    email: 'bela_pandey_iii@kshlerin-schaefer.net',
    gender: 'male',
    status: 'inactive',
  },
  {
    id: 4037,
    name: 'Rev. Chaitan Bhattathiri',
    email: 'rev_chaitan_bhattathiri@gerhold.net',
    gender: 'male',
    status: 'active',
  },
  {
    id: 4036,
    name: 'Abhaidev Panicker',
    email: 'panicker_abhaidev@gusikowski-wilkinson.co',
    gender: 'male',
    status: 'inactive',
  },
  {
    id: 4035,
    name: 'Ms. Kanak Dwivedi',
    email: 'dwivedi_ms_kanak@klocko-windler.net',
    gender: 'female',
    status: 'inactive',
  },
  {
    id: 4034,
    name: 'Ms. Bakula Achari',
    email: 'achari_ms_bakula@crist-pacocha.io',
    gender: 'female',
    status: 'inactive',
  },
  {
    id: 4032,
    name: 'Bhuvanesh Kaul',
    email: 'kaul_bhuvanesh@armstrong.info',
    gender: 'male',
    status: 'active',
  },
  {
    id: 4031,
    name: 'Msgr. Siddhi Reddy',
    email: 'siddhi_msgr_reddy@monahan.org',
    gender: 'male',
    status: 'active',
  },
  {
    id: 4030,
    name: 'Prasad Namboothiri CPA',
    email: 'prasad_namboothiri_cpa@dubuque.org',
    gender: 'male',
    status: 'inactive',
  },
  {
    id: 4029,
    name: 'Sudeva Asan VM',
    email: 'sudeva_asan_vm@cummings.biz',
    gender: 'male',
    status: 'inactive',
  },
  {
    id: 4028,
    name: 'Aalok Sharma',
    email: 'sharma_aalok@barrows.name',
    gender: 'male',
    status: 'inactive',
  },
];

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getUsers() {
    return users;
  }
}
