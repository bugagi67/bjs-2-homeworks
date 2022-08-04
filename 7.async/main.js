"use strict";
function testCase() {
  let phoneAlarm = new AlarmClock();
  phoneAlarm.addClock(
    phoneAlarm.getCurrentFormattedTime(),
    () => console.log("Просыпайся"),
    1
  );

  phoneAlarm.addClock(
    new Date(new Date().getTime() + 60000).toLocaleTimeString().slice(0, -3),
    () => {
      console.log("Вставай уже!");
      phoneAlarm.removeClock(2);
    },
    2
  );

  phoneAlarm.addClock(
    new Date(new Date().getTime() + 120000).toLocaleTimeString().slice(0, -3),
    () => {
      console.log("Иди умывайся!");
      phoneAlarm.clearAlarms();
      phoneAlarm.printAlarms();
    },
    3
  );

  phoneAlarm.addClock(
    phoneAlarm.getCurrentFormattedTime(),
    () => console.log("Вставай уже!"),
    3
  );

  phoneAlarm.printAlarms();
  phoneAlarm.start();
  phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () =>
    console.log("Вставай уже!")
  );

  phoneAlarm.stop();
}
