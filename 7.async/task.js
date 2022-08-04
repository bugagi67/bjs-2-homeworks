"use strict";

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (id !== undefined) {
      if (this.alarmCollection.find((item) => item["id"] === id)) {
        console.error("Будильник с данным ID уже существует!");
        return;
      } else {
        const alarm = {
          time,
          callback,
          id,
        };
        this.alarmCollection.push(alarm);
      }
    } else {
      throw new Error("ID не задан");
    }
  }

  removeClock(id) {
    let now = this.alarmCollection.filter((element) => element["id"] !== id);
    this.alarmCollection = now;
  }

  getCurrentFormattedTime() {
    let time = new Date().toLocaleTimeString().slice(0, -3);
    return time;
  }

  start() {
    function checkClock(clock) {
      let now = new Date().toLocaleTimeString().slice(0, -3);
      if (now === clock.time) {
        clock.callback();
      }
    }
    if (this.timerId === null) {
      let timerId = setInterval(() => {
        this.alarmCollection.forEach((element) => checkClock(element));
      }, 5000);
      this.timerId = timerId;
    }
  }

  stop() {
    if (this.timerId !== undefined) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    console.log(
      `Печать всех будильников в количестве ${this.alarmCollection.length}`
    );
    this.alarmCollection.forEach((element) =>
      console.log(
        "Будильник №" + element["id"] + " заведён на " + element["time"]
      )
    );
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection.splice(0, this.alarmCollection.length);
  }
}
