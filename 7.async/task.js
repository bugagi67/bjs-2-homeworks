"use strict";

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (id === undefined) {
      throw new Error("ID не задан");
    } else if (this.alarmCollection.find((item) => item["id"] === id)) {
      console.error("Будильник с данным ID уже существует!");
      return;
    } else {
      this.alarmCollection.push({ time, callback, id });
    }
  }

  removeClock(id) {
    const alarmCollectionLength = this.alarmCollection.length;
    let now = this.alarmCollection.filter((element) => element["id"] !== id);
    this.alarmCollection = now;
    let result =
      alarmCollectionLength > this.alarmCollection.length ? true : false;
    return result;
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString().slice(0, -3);
  }

  start() {
    let checkClock = (clock) => {
      if (this.getCurrentFormattedTime() === clock.time) {
        clock.callback();
      }
    };
    if (this.timerId) {
      return;
    }
    this.timerId = setInterval(() => {
      this.alarmCollection.forEach((element) => checkClock(element));
    }, 1000);
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
    this.alarmCollection = [];
  }
}
