import { test, expect } from '@playwright/test';
import { contatosPage } from '../locators/urlweb.json';
import { contatosPageComp } from '../components/contatosPageComponets.json';

test('preencher formulario', async ({ page }) => {
    await page.goto(contatosPage);
    //await page.getByRole('link', { name: contatosPageComp.contatosComponents.telefone }).isVisible();
    
    await page.getByPlaceholder('Nome').fill('andre');
    await page.getByPlaceholder('E-mail').fill('andrelcosta@gmail.com');
    await page.getByPlaceholder('Telefone').fill('34991037755')
    await page.getByPlaceholder('Assunto').fill('orçamento')
    await page.getByPlaceholder('Mensagem').fill('orcamentos de tintas acrilicas')
});




    
   
  

