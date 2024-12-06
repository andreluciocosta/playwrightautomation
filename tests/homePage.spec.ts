import { test, expect } from '@playwright/test';
import { homePage } from '../locators/urlweb.json';
import { homePageComponents } from '../components/homePageComponents.json';

test('ir para home page da uniao tintas', async ({ page }) => {
    await page.goto(homePage);
    console.log('acesso a pagina com sucesso');
});

test('verificar se existe o componente telefone', async ({ page }) => {
    await page.goto(homePage);
    await page.getByRole('link', { name: homePageComponents.telefoneComponents }).isVisible();
    console.log('existe o componente telefone');

});

test('verificar se existe o componente logo', async ({ page }) => {
    await page.goto(homePage);
    await page.getByRole('link', { name: homePageComponents.logoComponents}).isVisible();
    console.log('existe o componente logo');

});

test('verificar se existe o componente ferramentas', async ({ page }) => {
    await page.goto(homePage);
    await page.getByRole('link', { name: homePageComponents.ferramentasComponents.ferramentas}).isVisible();
    console.log('existe o componente ferramentas');

});

test('verificar se existe o componente ambientes', async ({ page }) => {
    await page.goto(homePage);
    await page.getByRole('link', { name: homePageComponents.ambientesComponents.component}).isVisible();
    console.log('existe o componente ambientes');

});

test('verificar se existe o componente dicas', async ({ page }) => {
    await page.goto(homePage);
    await page.getByRole('link', { name: homePageComponents.dicasComponents.component}).isVisible();
    console.log('existe o componente dicas');

});

test('verificar se existe o contato uniao tintas', async ({ page }) => {
    await page.goto(homePage);
    await page.getByRole('link', { name: homePageComponents.dicasComponents.component}).isVisible();
    console.log('existe o componente contato uniao tintas');

});


