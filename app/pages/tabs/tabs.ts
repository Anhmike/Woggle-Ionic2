import {Page} from 'ionic-angular';
import {ToolsPage} from '../tools/tools';
import {Page2} from '../page2/page2';
import {Page3} from '../page3/page3';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  toolsRoot: any = ToolsPage;
  tab2Root: any = Page2;
  tab3Root: any = Page3;
}
