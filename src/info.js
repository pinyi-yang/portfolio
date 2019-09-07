export const projects = [
  {
    name: 'Fantasy Basketball Domina',
    intro: 'a Yahoo Fantasy Basketball tool prepares you for you next matchups.',
    app: 'https://fantasy-basketball-domina.herokuapp.com',
    git: 'https://github.com/shadownova65/Fantasy_Basketball_Domina',
    tech: ['Typescript, React (Hooks), GraphQL, Node/Express, MongoDB, Yahoo API (OAuth2), react-vis, CSS'],
    img: './img/projects/fbd.png',
    slides: [
      {img: './img/slides/p4_leagues.gif', note: 'See all your fantasy basketball scoreboard and matchups of leagues and teams at any week.'},
      {img: './img/slides/p4_rivals.gif', note: 'Add your rivals. Find how your team perform against them everyweek and get prepared before matchup with your rivals'},
    ],
    summary: 'Fantasy basketball Domina is a helper tool for yahoo fantasy gamers. It automatically synchronizes the status of all your yahoo fantasy leagues and teams. Moreover, it also provides extra features including rivals, result prediction and transaction recommendations.'
  },
  {
    name: 'My E&T',
    intro: 'a personal planner and task tracker with statistical summaries for time optimization',
    app: 'https://my-e-and-t.herokuapp.com/',
    git: 'https://github.com/shadownova65/MyEandT',
    tech: ['Beta (under development): Typescript, React (Hooks), Node/Express, MongoDB, react-vis, CSS',
      'Alpha: Javascript, Node/Express, ejs, Postgres/Sequeize, Google API (OAuth), HTML, CSS'
      ],
    img: './img/projects/myE&T.png',
    slides: [
      {img: './img/slides/p2_tasks.gif', note: 'View your weekly and daily tasks. Always have the overview in mind'},
      {img: './img/slides/p2_tracker.gif', note: 'Monitor your task with efficiency, drag and boost factors, and notes. You can always comeback for your future tasks'},
      {img: './img/slides/p2_summary.gif', note: 'Automatic summaries your tasks time usage and efficiency for a given time. You can rely it to make your work more efficient.'},
    ],
    summary: "My E&T (My Effort and Time) is designed to be an application integrated with personal planner, project tracker and effort and time summarizer. It will help users plan and track their short-term and long-term projects and goals, while tracking the outcome of users' time usage and effort to provide statistical insights. The insights could further help users optimize their time and effort and boost performance."
  },
  {
    name: 'Nutri Facts',
    intro: 'a personal diet tracker with food suggestions and nutrient status visualization',
    app: 'https://nutri-facts.herokuapp.com/',
    git: 'https://github.com/shadownova65/nutri_facts',
    tech: ['Javascript, React, Node/Express, JWT, NoSQL/MongoDB, Edamam API, react-vis, CSS'],
    img: './img/projects/nutri_facts.png',
    slides: [
      {img: './img/slides/p3_home.gif', note: 'Track your current nutrition intake versus your goal.'},
      {img: './img/slides/p3_search.gif', note: 'Recommend meals based on your criteria. See the nutrition data before eating.'},
      {img: './img/slides/p3_meal.gif', note: 'Show you the overall nutrition data for your pending meal. You can always change to a healthier choice.'},
    ],
    summary: 'Nutri Facts is a diet tracker with food suggestions and nutrient status visualization. It helps you track your overall intake versus the nutrient goal for the users. It also recommends meals for users when they have no idea what to eat based on their criteria.'
  },
  {
    name: 'Safe Street',
    intro: 'Safe Street is a mobile end app prototype to help house buyer, renter or visitor know a neighborhood in a fast and comprehensive way.',
    app: 'https://safe-street.herokuapp.com/',
    git: 'https://github.com/shadownova65/SafeStreet',
    tech: ['Javascript, React, React Map GL, Node/Express, JWT, MongoDB'],
    img: './img/projects/safe_street.png',
    slides: [
      {img: './img/slides/hack_search.gif', note: 'Allow user to search neighborhood by address.'},
      {img: './img/slides/hack_summary.gif', note: 'Get summary score for overall quality, security, disaster risk and air quality of neighborhood based the search.'},
      {img: './img/slides/hack_detail.gif', note: 'Detailed info for each category can be viewed for further information.'},
    ],
    summary: 'Safe Street is a mobile end app prototype to help home buyers, renters or visitors understand a neighborhood in a fast and comprehensive way. It provides info regarding air quality, security and disaster risk in the neighborhood searched by user.'
  },
  {
    name: 'Texas Holdem',
    intro: 'Texas Holdem is a web poker game with 1 player and 4 computers.',
    app: 'https://shadownova65.github.io/texas_holdem/',
    git: 'https://github.com/shadownova65/texas_holdem',
    tech: ['Javascript, HTML, CSS'],
    img: './img/projects/texas_holdem.png',
    slides: [
      {img: './img/slides/p1_start.gif', note: 'Start game'},
      {img: './img/slides/p1_bet.gif', note: 'Player bet'},
      {img: './img/slides/p1_end.gif', note: 'End the game. Get hands for each player and send result.'},
    ],
    summary: 'Texas Holdem is a web poker game with 1 player and 4 computers.'
  },
]