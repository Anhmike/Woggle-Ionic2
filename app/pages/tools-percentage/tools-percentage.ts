import {Input} from 'angular2/core';
import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the ToolsPercentagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/tools-percentage/tools-percentage.html',
})
export class ToolsPercentagePage {
  calculatedPercentage: number;
  calculatedPercentageValues: Array<Object>;
  possiblePercentageValues: Array<number>;
  increment: number;
  percentage: number;
  percentageIncrement;
  weight: number;

  constructor(public nav: NavController) {
    this.calculatedPercentageValues = [];
    this.increment = 2.5;
    this.percentageIncrement = 5;
    this.percentage = 70;
    this.weight = 100;
    this.calculatedPercentage = this.calculatePercentage(this.weight, this.percentage);

    this.possiblePercentageValues = [90, 80, 75, 70, 60, 50];
    this.calculatePercentages(this.weight);
  }

  // Weight functions
  increaseWeight = function () {
    this.weight = parseFloat(this.weight) + this.increment;
    this.calculatedPercentage = this.calculatePercentage(this.weight, this.percentage);
    this.calculatePercentages(this.weight);
  }
  decreaseWeight = function () {
    this.weight = parseFloat(this.weight) - this.increment;
    this.calculatedPercentage = this.calculatePercentage(this.weight, this.percentage);
    this.calculatePercentages(this.weight);
  }
  onWeightChange = function (val) {    
    this.calculatedPercentage = this.calculatePercentage(val, this.percentage);
    this.calculatePercentages(val);
  }

  // Percentage functions
  increasePercentage = function () {
    this.percentage = parseFloat(this.percentage) + this.percentageIncrement;
    this.calculatedPercentage = this.calculatePercentage(this.weight, this.percentage);
  }
  decreasePercentage = function () {
    this.percentage = parseFloat(this.percentage) - this.percentageIncrement;
    this.calculatedPercentage = this.calculatePercentage(this.weight, this.percentage);
  }
  onPercentageChange = function (val) {
    console.log('[Percentage Change]', val);
    this.calculatedPercentage = this.calculatePercentage(this.weight, val);
  }

  // Functions

  calculatePercentages = function (weight: number) {
    this.calculatedPercentageValues = [];
    if (weight === undefined || weight === null || isNaN(weight)) {
      weight = 0;
    }
    let weightvalue = parseFloat(weight.toString());

    for (var i = 0; i < this.possiblePercentageValues.length; i++) {
      let percentageValue = this.possiblePercentageValues[i];
      this.calculatedPercentageValues.push({ percentage: percentageValue, value: this.calculatePercentage(weightvalue, percentageValue) })
    }
  }

  calculatePercentage = function (value: number, percentage: number) {
    if (value === undefined || value === null || isNaN(value)) {
      value = 0;
    }
    if (percentage === undefined || percentage === null || isNaN(percentage)) {
      percentage = 0;
    }

    let weightvalue = parseFloat(value.toString());
    let perc = parseInt(percentage.toString());

    var calulatedValue = ((weightvalue / 100) * perc);
    if (!isNaN(calulatedValue)) {
      return calulatedValue;
    } else {
      return 0;
    }
  }
}
