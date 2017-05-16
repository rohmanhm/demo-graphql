export type valuePeopleObject = {
  username: String
  name?: String
  birthday?: String
  partner?: Array<String>
}

export type peopleObject = Array<valuePeopleObject>

export const people = [
  {
    username: 'rohmanhm',
    name: 'Rohman HM',
    position: 'Javascript Developer',
    birthday: '16-04-1928',
    partner: ['oknoorap']
  },
  {
    username: 'oknoorap',
    name: 'Ribharanus Pracutian',
    position: 'Javscript Developer',
    birthday: '13-03-1989',
    partner: ['rohmanhm', 'rico']
  },
  {
    username: 'rico',
    name: 'Mr. Rico',
    position: 'Wordpress Developer',
    birthday: '12-02-1990',
    partner: ['dasril', 'oknoorap', 'hendy']
  },
  {
    username: 'dasril',
    name: 'Mr. Dasril',
    position: 'Wordpress Developer',
    birthday: '23-07-1968',
    partner: ['rico']
  },
  {
    username: 'hendy',
    name: 'Mr. Hendy',
    position: 'Customer Support',
    birthday: '10-04-1976',
    partner: ['rico', 'dasril']
  }
]