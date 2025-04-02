import { HomePage } from "../pages/home";

export class MainView {
  homePage = new HomePage();

  showPage() {
    console.log(this.homePage.getTitle());
  }
}
