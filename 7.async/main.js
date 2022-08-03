function testCase() {
  let phoneAlarm = new AlarmClock();

  setInterval(
    () =>
    phoneAlarm.addClock(
      phoneAlarm.getCurrentFormattedTime(),
      () => console.log("Пора вставать!"),
      1
    ), 2000
  );

  setTimeout(
    () =>
      phoneAlarm.addClock(
        phoneAlarm.getCurrentFormattedTime(),
        console.log("Давай, вставай уже!"),
        2
      )
  );
  setTimeout(
    () =>
      phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () =>
        console.log("Иди умываться!")
      )
  );
  setTimeout(
    () =>
      phoneAlarm.addClock(
        phoneAlarm.getCurrentFormattedTime(),
        () => {
          console.log("Вставай, а то проспишь!");
          phoneAlarm.clearAlarms();
          phoneAlarm.printAlarms();
        },
        3
      )
  );
  phoneAlarm.addClock(
    phoneAlarm.getCurrentFormattedTime(),
    () => console.log("Вставай, а то проспишь!"),
    1
  );
  phoneAlarm.printAlarms();
  phoneAlarm.start();
  phoneAlarm.stop();
}
