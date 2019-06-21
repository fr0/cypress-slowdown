// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************


// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const wp = require('@cypress/webpack-preprocessor');

const times = [];

module.exports = (on) => {
  const options = {
    webpackOptions: require('./webpack.config.js'),
  };
  on('file:preprocessor', wp(options));
  on('task', {
    log (message) {
      console.log(message);
      return null;
    },
    timing(name) {
      const hrt = process.hrtime();
      const time = (hrt[0]*1000) + (hrt[1]/1000000);
      times.push({time, name});
      if (times.length >= 2) {
        const t0 = times[times.length-2].time;
        const t1 = times[times.length-1].time;
        const name = times[times.length-2].name;
        const str = name ? Math.floor(t1 - t0) + '\t' + name : Math.floor(t1 - t0);
        console.log(str);
      }
      return null;
    }
  });
};
