# Plano de imagens e vídeos da BlocodeMontar

Este plano serve para o GitHub Copilot (VS Code) e para você.
O objetivo é ter fotos e vídeos dos mesmos produtos da loja de referência sem usar o material próprio dela.

## Regra principal

- **Use:** fotos e vídeos do fornecedor (AliExpress, CJ Dropshipping), que os revendedores podem usar.
- **Use:** material que você mesmo produzir (fotos, vídeos de montagem, banners).
- **Não use:** banners, fotos editadas, vídeos, logotipo ou ícones baixados do blocobox.com.
  Esse material pertence a outra empresa. Usá-lo pode gerar notificação de direitos autorais, remoção de anúncios e bloqueio da loja.

## Etapa 1: produtos com fotos e vídeos do fornecedor (painel da Shopify, sem código)

1. Para cada produto da referência, anote o nome do modelo e o número de peças.
2. No DSers ou no CJ Dropshipping, procure o mesmo modelo pelo nome ou pelo número de peças.
3. Importe o produto. O app traz junto as fotos, as variações e, quando existe, o vídeo do fornecedor.
4. No produto, apague as fotos com marca d'água ou com texto em chinês.
5. Preencha os campos Peças, Escala e Dimensões (veja o `GUIA-LOJA.md`, item 4).
6. Coloque o produto nas coleções certas (`mais-vendidos`, `formula-1` etc.).

Comece com os 15 produtos previstos na proposta.

## Etapa 2: tratamento das imagens (fora do VS Code)

- Deixe as fotos de produto quadradas, 1200 x 1200 px, com fundo branco ou cinza claro.
- Use o Canva ou o remove.bg para tirar o fundo e as marcas d'água.
- Salve em `.webp` ou `.jpg` com menos de 300 KB.

## Etapa 3: banners e imagens da home (Canva + editor de tema)

Crie no Canva, com as cores da marca (amarelo `#FFC20E` e azul-marinho `#1B1F3B`):

| Peça | Tamanho | Onde entra |
| --- | --- | --- |
| Banner principal (computador) | 2000 x 700 px | Banners rotativos, imagem computador |
| Banner principal (celular) | 800 x 1000 px | Banners rotativos, imagem celular |
| Banner "Modelos surpresa" | 2000 x 700 px | Segundo bloco de banners da home |
| Imagens das categorias | 400 x 400 px | Categorias em destaque |
| Logotipo | 600 px de largura, PNG transparente | Configurações do tema |
| Favicon | 32 x 32 px | Configurações do tema |

Para a arte, use as fotos do fornecedor da Etapa 1.
Envie as imagens no editor de tema: **Loja virtual > Temas > Personalizar**.

## Etapa 4: vídeos

- Use o vídeo do fornecedor que veio na importação, ou grave a montagem com o celular na vertical (9:16).
- Envie os vídeos em **Conteúdo > Arquivos** no admin.
- No editor de tema, abra a seção "Vídeos de produtos", escolha o vídeo e o produto de cada bloco.

## Etapa 5: tarefas para o GitHub Copilot

Abra o projeto no VS Code e use o Copilot Chat no modo Agent.
Peça uma tarefa por vez e confira no `shopify theme dev` antes do commit.

1. "Adicione um bloco de imagem opcional em `sections/help-cards.liquid` para substituir o ícone. Siga o AGENTS.md."
2. "Em `snippets/product-card.liquid`, mostre a segunda imagem do produto quando o mouse passar sobre o cartão."
3. "Em `sections/product.liquid`, mostre os vídeos do produto na galeria com um ícone de play na miniatura."
4. "Em `sections/video-products.liquid`, toque o vídeo só quando ele aparecer na tela, para a página carregar mais rápido."
5. "Em `sections/promo-slider.liquid`, passe os banners sozinhos a cada 5 segundos e adicione um ajuste para ligar e desligar."

Depois de cada tarefa:
```bash
git add .
git commit -m "descreva a mudança"
git push
```

## Checklist final

- [ ] Nenhuma imagem ou vídeo baixado do blocobox.com
- [ ] 15 produtos importados com fotos do fornecedor
- [ ] Fotos sem marca d'água e com menos de 300 KB
- [ ] Banners, logotipo e favicon próprios enviados
- [ ] Vídeos ligados aos produtos certos
- [ ] Teste no celular e no computador
