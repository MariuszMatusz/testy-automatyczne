const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://www.automationpractice.pl/",
//baseUrl: "https://steamcommunity.com/profiles/76561199533094934/",
    redirectionLimit: 3, // limit przekierowań
    retries: {  //wprowadzamy, ile razy cypress będzie ponawiał dany test, jeśli wystąpi jakiś błąd, problem
      "runMode": 1, // włącza się przeglądarka, której nie widzimy, wszystko działa w tle
      "openMode": 1// tryb, w którym widzimy wszystkie logi, okna
    }, 
    watchForFileChanges: true, //jeśli mamy w tle uruchomiony test, który się wykonuje, i w między czasie zmienimy coś w tym teście, to po zapisaniu cypress automatycznie wykona test ponownie
    chromeWebSecurity: false, //niektóre strony sa niezabezpieczone, więc odpalamy również bez zabezpieczeń - false
    viewportWidth: 1920, //wielkośc okna przeglądarki an której wykonujemy testy
    viewportHeight: 1080,
    waitForAnimations: true, // jeśli pojawiają się animacje po jakiejś chwili, i cypress ma czekać na skończenie się animacji zanim rozpocznie akcje 
    testIsolation: false,  // parametr, który pozwala nam osiągnąć to, że w kolejnych testach za każdym razem będziemy mieli czyste okno, tak jakbyśmy 1 raz otworzyli stronę, więc wyczyszcza cookies
    theme: "dark"
    
  },
});