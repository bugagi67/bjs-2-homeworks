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
      this.alarmCollection.push({ time, callback, id }); // изначально так и написал, но  пробовал сделать вывод throw с использованием
    }                                                   // try {} catch{}. Реализовал, все работало, но тест не проходил. В итоге просто удалил
  }                                                    // try {} catch{} и оставил как было не форматируя. Почему try/catch не проходит тест?

  removeClock(id) {
    const alarmCollectionLength = this.alarmCollection.length;
    let now = this.alarmCollection.filter((element) => element["id"] !== id);
    this.alarmCollection = now;
    let result =
      alarmCollectionLength > this.alarmCollection.length ? true : false;
    return result; //про условия возврата true/false забыл, извините что потратили на это время.
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString().slice(0, -3);
  }

  start() {
    // исправил согласно комментарию
    let checkClock = (clock) => {
      let now = new Date().toLocaleTimeString().slice(0, -3);
      if (now === clock.time) {
        clock.callback();
      }
    };
    if (this.timerId) {
      // исправил согласно комментарию
      return;
    } else {
      this.timerId = setInterval(() => {
        // исправил согласно комментарию
        this.alarmCollection.forEach((element) => checkClock(element));
      }, 1000);
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
    this.alarmCollection = []; // исправил согласно комментарию
  }
}
