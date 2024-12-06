import { test, expect } from '@playwright/test';
import { produtosPage } from '../locators/urlweb.json';
import { produtosPageComponents} from '../components/produtosPageComponets.json';

test('ir para page produtos', async ({ page }) => {
    await page.goto(produtosPage);
    console.log('acesso a pge produtos');
});

test('verificar se existe catalaco componente ', async ({ page }) => {
    await page.goto(produtosPage);
    await page.getByRole('link', { name: produtosPageComponents.catalagoComponent.acessoriosComponent }).isVisible();
    console.log('existe o componente catalago');
});

test('verificar se existe entre sem bater ', async ({ page }) => {
    await page.goto(produtosPage);
    await page.getByRole('link', { name: produtosPageComponents.catalagoComponent.entreSemBaterComponent }).isVisible();
    console.log('existe o componente entre sem bater');
});

test('verificar se existe calculadora de tintas ', async ({ page }) => {
    await page.goto(produtosPage);
    await page.getByRole('link', { name: produtosPageComponents.catalagoComponent.calculadoraDeTintasComponent }).isVisible();
    console.log('existe o componente calculadora de tintas');
});

test('verificar se existe dicas de pintura ', async ({ page }) => {
    await page.goto(produtosPage);
    await page.getByRole('link', { name: produtosPageComponents.catalagoComponent.dicasDePinturasComponent }).isVisible();
    console.log('existe o componente dicas de pinturas');
});