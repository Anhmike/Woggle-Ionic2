import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the ToolsWotbPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/tools-wotb/tools-wotb.html',
})
export class ToolsWotbPage {
  bar: number;
  barWeights: Array<Object>;
  weightOnTheBar: number;

  constructor(public nav: NavController) {
    this.weightOnTheBar = 0;
    this.barWeights = new Array();
  }

  addBar = function (barSize: number) {
    let barVal = parseFloat(barSize.toString());
    this.bar = barVal;
    this.weightOnTheBar = this.weightOnTheBar + barVal;
  }

  addWeight = function (plateSize: number) {
    let plateVal = parseFloat(plateSize.toString());

    // Adding Weight - If there is already a plate of that weight increment count. 

    let foundWeight = this.barWeights.find(function (weight) {
      if (weight.size === plateVal) {
        weight.count = weight.count + 1;
        return true;
      } else {
        return false;
      }
    });

    if (foundWeight === undefined || foundWeight === null) {
      this.barWeights.push({ size: plateVal, count: 1 });
    }

    this.weightOnTheBar = this.weightOnTheBar + (plateVal * 2);
  }
  
  reset = function () {
    this.bar = 0;
    this.barWeights = new Array();
    this.weightOnTheBar = 0;    
  }
}
