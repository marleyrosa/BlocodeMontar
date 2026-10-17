# Tarefas da loja BlocodeMontar

Este arquivo guarda o estado do trabalho. Leia este arquivo antes de começar.
Ao terminar uma tarefa, marque a caixa e anote a data. Coloque tarefas novas na fase certa.

Detalhes de cada assunto:
- `GUIA-LOJA.md`: configuração do admin (coleções, menus, campos)
- `PLANO-MIDIA.md`: banners, vídeos e melhorias de tema para o Copilot
- `PLANO-IMAGENS.md` e `midia/produtos-referencia.csv`: busca das fotos dos produtos
- `PUBLICACAO-LOJA.md`: publicação, contas e o que pedir ao cliente

## Feito

- [x] Tema completo com a estrutura da referência e a marca BlocodeMontar (2026-10-15)
- [x] Repositório no GitHub e `shopify theme dev` funcionando (2026-10-15)
- [x] Guias: loja, mídia, imagens e publicação (2026-10-15)
- [x] Pasta "Imagens dos produtos" no Drive e lista de 32 modelos no CSV (2026-10-15)
- [x] Carrinho lateral: "Adicionar" abre o carrinho de lado, sem sair da página (2026-10-17)

## Fase 1: dados do cliente

- [ ] Enviar ao cliente a mensagem do `PUBLICACAO-LOJA.md`, item 7
- [ ] Receber razão social, CNPJ, endereço, e-mail e WhatsApp
- [ ] Receber logotipo, favicon e links das redes sociais
- [ ] Receber as regras comerciais: Pix, parcelas, frete, cupons e margem
- [ ] Combinar por escrito o uso das fotos da minha loja no Mercado Livre
- [ ] Decidir com o cliente como tratar os nomes de marcas (F1, Disney, Star Wars)

## Fase 2: admin da loja (`GUIA-LOJA.md`)

- [ ] Preencher as configurações do tema (logo, cores, Pix, parcelas, WhatsApp, CNPJ)
- [ ] Criar as 12 coleções com os handles do guia
- [ ] Criar os menus `main-menu`, `footer` e "Informações"
- [ ] Criar os 5 campos de produto (`custom.pecas`, `escala`, `dimensoes`, `especificacoes`, `mecanica`)
- [ ] Criar os produtos "Caixa de presente" e "Organizador de peças"
- [ ] Criar a página "Rastrear pedido" com o modelo `page.rastrear-pedido`
- [ ] Preencher as políticas

## Fase 3: produtos e imagens (`PLANO-IMAGENS.md`)

- [ ] Criar as subpastas no Drive a partir do CSV
- [ ] Achar o fornecedor de cada modelo (coluna `status` do CSV)
- [ ] Buscar no AliExpress e Mercado Livre os 164 modelos de `midia/lista-modelos-blocobox.csv` (lista criada em 2026-10-17; as fotos do blocobox em `midia/images/` não podem ser usadas)
- [ ] Importar os 15 primeiros produtos pelo DSers ou CJ (9 já criados como rascunho em 2026-10-17: 488 Racing, Mercedes W14, SF-24, Audi RS6, Dodge Charger, Batmóvel, Navio Pérola Negra, Bloco de Interrogação Mario, B-2 Spirit; falta preço e revisar as fotos 2 a 6)
- [ ] Tratar as fotos no Canva (`-final.jpg`, 1200 x 1200, menos de 300 KB)
- [ ] Preencher peças, escala e dimensões em cada produto
- [ ] Colocar cada produto nas coleções

## Fase 4: banners e vídeos (`PLANO-MIDIA.md`)

- [ ] Criar banners da home, imagens das categorias, logotipo e favicon no Canva
- [ ] Ligar os vídeos aos produtos na seção "Vídeos de produtos"

## Fase 5: melhorias do tema (Copilot, `PLANO-MIDIA.md`, etapa 5)

- [ ] Imagem opcional nos cartões de ajuda
- [ ] Segunda imagem ao passar o mouse no cartão de produto
- [ ] Vídeos na galeria do produto
- [ ] Vídeo toca só quando aparece na tela
- [ ] Banners passam sozinhos a cada 5 segundos

## Fase 6: publicação (`PUBLICACAO-LOJA.md`)

- [ ] Loja do cliente e acesso de colaborador (ou transferir a loja de desenvolvimento)
- [ ] Conectar o tema pelo GitHub e publicar
- [ ] Gateway de pagamento, frete e cupons
- [ ] Domínio e e-mail do remetente
- [ ] Google, Meta e Judge.me
- [ ] Testes da fase 8 do guia
- [ ] Tirar a senha da loja

## Decisões

- Copiar só a estrutura do blocobox.com. Nenhuma imagem, vídeo, texto ou nome de cupom de lá.
- Fotos: fornecedor (AliExpress, CJ) ou fotos próprias da minha loja no Mercado Livre.
- Hospedagem: a própria Shopify. Tema ligado ao GitHub, branch `main`.
