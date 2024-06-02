const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: 'm5814r',
  e2e: {
    setupNodeEvents(on, config) {
      // реализовать здесь обработчики событий Node
    },
  },

  // Chrome как браузер по умолчанию
  browser: 'chrome'
});
