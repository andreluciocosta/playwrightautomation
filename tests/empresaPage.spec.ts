import { test, expect } from '@playwright/test';
import { empresaPage } from '../locators/urlweb.json';
import { empresaPage1 } from '../components/empresaPageComponets.json';

test('verificar se existe a pagina empresa', async ({ page }) => {
    await page.goto(empresaPage);
    console.log('existe a pagina empresa');
});

test('verificar se existe o componente telefone', async ({ page }) => {
    await page.goto(empresaPage);
    await page.getByRole('link', { name: empresaPage1.telefoneComponents }).isVisible();
    console.log('existe o componente telefone');

});

test('verificar se existe o componente logo', async ({ page }) => {
    await page.goto(empresaPage);
    await page.getByRole('heading', { name: empresaPage1.logoComponents }).isVisible();
    console.log('existe o componente logo');

});

test('verificar se existe o componente empresa', async ({ page }) => {
    await page.goto(empresaPage);
    await page.getByRole('heading', { name: empresaPage1.empresaComponents }).isVisible();
    console.log('existe o componente empresa');

});

test('verificar se existe o componente missao', async ({ page }) => {
    await page.goto(empresaPage);
    await page.getByRole('heading', { name: empresaPage1.missaoComponents }).isVisible();
    console.log('existe o componente missao');

});

test('verificar se existe o componente loja1', async ({ page }) => {
    await page.goto(empresaPage);
    await page.locator('li').filter({ hasText: empresaPage1.lojasComponents.udiLoja1.component }).getByRole('img').isVisible();
    console.log('existe o componente loja1');

});

test('verificar se existe o componente loja2', async ({ page }) => {
    await page.locator('li').filter({ hasText: empresaPage1.lojasComponents.udiLoja1.component }).getByRole('img').isVisible();
    await page.goto(empresaPage);

    console.log('existe o componente loja2');

});

test('verificar se existe o componente loja3', async ({ page }) => {
    await page.goto(empresaPage);
    await page.locator('li').filter({ hasText: empresaPage1.lojasComponents.udiLoja1.component }).getByRole('img').isVisible();
    console.log('existe o componente loja3');

});

test('verificar se existe o componente loja4', async ({ page }) => {
    await page.goto(empresaPage);
    await page.locator('li').filter({ hasText: empresaPage1.lojasComponents.lojasComponets.araLoja1.component }).getByRole('img').isVisible();
    console.log('existe o componente loja4');

});

test('verificar se existe o componente loja5', async ({ page }) => {
    await page.goto(empresaPage);
    await page.locator('li').filter({ hasText: empresaPage1.lojasComponents.lojasComponets.araLoja2.lojacomponent }).getByRole('img').isVisible();
    console.log('existe o componente loja5');

});