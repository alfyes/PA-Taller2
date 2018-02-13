import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

});

describe('2.4.1 -Buscar heroes', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateTo();
  });

  it('debe buscar heroes que tengan Ma', () => {
    
    const result = page.searchHero('Ma');
    expect(result.count()).toBe(4);

  });

  it('debe buscar el heroe Bombasto', () => {
    
    const result = page.searchHero('Bombasto');
    expect(result.first().getText()).toBe('Bombasto');
    
  });

});

describe('2.4.2 -Eliminar un heroe', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('Eliminar el primer heroe de la lista', () => {
    const canHeroes = page.getAllHeroes().count();
    
    page.deleteHeroe();

    expect(page.getAllHeroes().count()).toBe(canHeroes.then(n => n - 1));
  });

});

describe('2.4.3 -Editar hero', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateTo();
  });

  it('Editar heroe Zero a One', () => {
    
    page.updateHero('Zero','One');
    const result = page.searchHero('One');
    expect(result.count()).toBe(1);
    expect(result.first().getText()).toEqual('One');
  });

});