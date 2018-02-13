import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  searchHero(heroName: string){
    element(by.id('search-box')).sendKeys(heroName);
    return element.all(by.css('.search-result'));
  }

  deleteHeroe(){
    this.getAllHeroes().first().element(by.css('.delete')).click();
  }

  updateHero(heroName: string, newHeroName: string){
    
    this.searchHero(heroName).first().click();
    
    element(by.tagName('input')).clear();
    element(by.tagName('input')).sendKeys(newHeroName);
    
    element.all(by.tagName('button')).last().click();
  }

  navigateToHeroFromDashboard(posicion: number){
    element.all(by.css('.module.hero')).all(by.tagName('h4')).get(posicion).click();
    return element(by.tagName('h2'));
  }
}
