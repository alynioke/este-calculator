export default {
  app: {
    links: {
      viewLoans: 'View loans',
      addLoan: 'New loan',
      todos: 'Todos'
    }
  },
  addLoan: {
    amount: 'Loan amount (EUR, maximum - 500)',
    days: 'Loan period (days, maximum - 60)',
    name: 'Full name',
    iban: 'IBAN',
    phone: 'Phone',
    apply: 'Apply',
    returnAmount: 'You need to return '
  },
  home: {
    // // TODO: Android text.
    // androidInfoText: ``,
    infoHtml: '<a href="https://github.com/este/este">Este.js</a> dev stack.',
    iosInfoText: `
      Este.js dev stack
      Press CMD+R to reload
      Press CMD+D for debug menu
    `,
    title: 'Este.js',
    toCheck: {
      andMuchMore: 'And much more :-)',
      h2: 'Things to Check',
      isomorphicPage: 'Isomorphic page',
      // This is example of localized ordered list.
      list: [
        {
          key: 'source',
          text: 'Server rendering'
        },
        {
          key: 'development',
          text: 'Hot reload for styles, components, etc.'
        },
        {
          key: 'production',
          text: 'Performance and size of production build (<code>gulp -p</code>)'
        }
      ]
    }
  },
  todos: {
    add100: 'Add 100 Todos',
    clearAll: 'Clear All',
    clearCompleted: 'Clear Completed',
    empty: `It's rather empty here...`,
    leftList: `{size, plural,
      =0 {Nothing, enjoy}
      one {You are almost done}
      other {You have {size} tasks to go}
    }`,
    newTodoPlaceholder: 'What needs to be done?',
    title: 'Todos'
  },
  profile: {
    title: 'Profile'
  },
  settings: {
    title: 'Settings'
  }
};
