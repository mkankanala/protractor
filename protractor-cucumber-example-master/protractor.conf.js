//var cucumber = require('protractor-jasmine-cucumber');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
 //frameworkPath: require.resolve('serenity-js'), 
  specs: [
    'features/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome',    
    //'sharedTestFiles': true,
    'maxInstances': 2
    },
  cucumberOpts: {
    require: ['features/steps/*_steps.js',
    'Reports/hooks.js'],
    format: 'pretty'
  },
  resultJsonOutputFile: 'report.json',
//   scripts: {
//     "automation-test": "concurrently --raw --kill-others \"./node_modules/.bin/webdriver-manager start\" \"sleep 5 && ./node_modules/.bin/protractor configuration/protractor.config.js\"",
//     "automation:pending": "TAGS=@pending npm run automation-test"
// },
params: {
  login: {
    email: 'default',
    password: 'default'
  }
},
scripts: {
  prereport: "serenity update",
  report:  "serenity run",

  // other scripts ...
},
// plugins: [
//   {
//     package: "protractor-simple-cucumber-html-reporter-plugin",
//     options: {
//       // read the options part
//       automaticallyGenerateReport: true,
//       removeExistingJsonReportFile: true
//     }
//   }
// ]
}
