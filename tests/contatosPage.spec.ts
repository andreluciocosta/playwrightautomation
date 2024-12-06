import { test, expect } from '@playwright/test';
import { contatosPage } from '../locators/urlweb.json';
import { contatosPageComp } from '../components/contatosPageComponets.json';

test('ir para contatos na page', async ({ page }) => {
    await page.goto(contatosPage);
    console.log('acesso contatos com sucesso');
});

test('verificar se existe o componente nome', async ({ page }) => {
    await page.goto(contatosPage);
    await page.getByRole('link', { name: contatosPageComp.contatosComponents.nome }).isVisible();
    console.log('existe o componente nome');

});

test('verificar se existe o componente email', async ({ page }) => {
    await page.goto(contatosPage);
    await page.getByRole('link', { name: contatosPageComp.contatosComponents.email }).isVisible();
    console.log('existe o componente email');

});

test('verificar se existe o componente telefone', async ({ page }) => {
    await page.goto(contatosPage);
    await page.getByRole('link', { name: contatosPageComp.contatosComponents.telefone }).isVisible();
    console.log('existe o componente telefone');

});

test('verificar se existe o componente assunto', async ({ page }) => {
    await page.goto(contatosPage);
    await page.getByRole('link', { name: contatosPageComp.contatosComponents.assunto }).isVisible();
    console.log('existe o componente assunto');

});

test('verificar se existe o componente mensagem', async ({ page }) => {
    await page.goto(contatosPage);
    await page.getByRole('link', { name: contatosPageComp.contatosComponents.mensagem }).isVisible();
    console.log('existe o componente mensagem');

});