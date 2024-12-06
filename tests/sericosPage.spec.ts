import { test, expect } from '@playwright/test';
import { servicosPage } from '../locators/urlweb.json';
import { servicosPageComponents} from '../components/servicosPageComponents.json';

test('ir para page servicos', async ({ page }) => {
    await page.goto(servicosPage);
    console.log('acesso a page servicos');
});

test('verificar se existe enderecos componente ', async ({ page }) => {
    await page.goto(servicosPage);
    await page.getByRole('link', { name: servicosPageComponents.enderecosComponent.araLoja1 }).isVisible();
    console.log('existe o componente ara1 ');
});

test('verificar se existe enderecos ara2 ', async ({ page }) => {
    await page.goto(servicosPage);
    await page.getByRole('link', { name: servicosPageComponents.enderecosComponent.araLoja2 }).isVisible();
    console.log('existe o componente enderecos');
});

test('verificar se existe enderecos udia1 ', async ({ page }) => {
    await page.goto(servicosPage);
    await page.getByRole('link', { name: servicosPageComponents.enderecosComponent.udiLoja1 }).isVisible();
    console.log('existe o componente udia1');
});

test('verificar se existe enderecos udia2 ', async ({ page }) => {
    await page.goto(servicosPage);
    await page.getByRole('link', { name: servicosPageComponents.enderecosComponent.udiLoja2 }).isVisible();
    console.log('existe o componente udia2');
});

test('verificar se existe enderecos udia3 ', async ({ page }) => {
    await page.goto(servicosPage);
    await page.getByRole('link', { name: servicosPageComponents.enderecosComponent.udiLoja3 }).isVisible();
    console.log('existe o componente udia3');
});