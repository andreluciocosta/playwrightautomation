import { test, expect } from '@playwright/test';
import { homePage } from '../locators/urlweb.json';
import { homePageComponents } from '../components/homePageComponents.json';

test('ir para home page da uniao tintas', async ({ page }) => {
    await page.goto(homePage);
    console.log('acesso a pagina com sucesso');
});


test('verificar se existe o componente de teledones', async ({page}) =>{ // alterar o nome do teste
    await page.goto(homePage);
    await page.getByRole('link', { name: homePageComponents.telefoneComponents}).isVisible(); //alterar os componentes
    console.log('existe o componente telefone'); //alterar a confirmaçao do teste
});

