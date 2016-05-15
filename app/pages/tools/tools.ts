import {Page, NavController} from 'ionic-angular';
import {ToolsPercentagePage} from '../tools-percentage/tools-percentage'
import {ToolsWotbPage} from '../tools-wotb/tools-wotb'
/*
  Generated class for the ToolsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/tools/tools.html',
})
export class ToolsPage {
  constructor(public nav: NavController) {
     this.nav = nav;
  }
  goToOtherPage(){
     this.nav.push(ToolsPercentagePage);
  }
  goToWotb(){
     this.nav.push(ToolsWotbPage);
  }
}
