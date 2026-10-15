# Guia da loja BlocodeMontar

Este tema segue a estrutura da loja de referência, com a marca BlocodeMontar.
Não usamos imagens, logotipo, textos ou nomes de cupons da referência.
Coloque fotos, banners e textos próprios no editor de tema.

## O que o tema já tem

| Área | O que tem |
| --- | --- |
| Topo | Barra de avisos rolando (Pix, 6x, garantia, cashback), logo, busca, conta, carrinho e menu com submenus |
| Home | Banners rotativos, "Como podemos ajudar?", categorias, carrosséis de produtos, banner de modelos surpresa, vídeos, perguntas frequentes, selo de confiança, contato e newsletter |
| Cartão de produto | Selo de desconto, número de peças, tamanho, preço no Pix, parcelas e botão "Adicionar" |
| Página de produto | Galeria, peças / escala / dimensões, preço no Pix e parcelado, variações, "Aproveite e leve junto" (caixa de presente e organizador), botão de WhatsApp com o SKU, abas de descrição, especificações e mecânica, fotos de clientes e produtos relacionados |
| Outras páginas | Coleção com ordenação, carrinho com total no Pix, página de rastreio |
| Rodapé | Duas colunas de menu, atendimento, formas de pagamento, redes sociais, razão social e CNPJ |

## Configure no admin da Shopify

### 1. Configurações do tema
Abra **Loja virtual > Temas > Personalizar > Configurações do tema** e preencha:
- **Identidade da marca:** logotipo e favicon.
- **Cores:** a cor principal padrão é o amarelo `#FFC20E`.
- **Condições comerciais:** desconto no Pix (10%) e parcelas (6x).
- **Atendimento e empresa:** WhatsApp (só números, por exemplo `5511999999999`), e-mail, horário, razão social e CNPJ.
- **Redes sociais.**

O desconto no Pix do tema só muda o preço exibido na vitrine.
Configure o desconto real no gateway de pagamento (Mercado Pago, Appmax ou Yampi).

### 2. Coleções
A home procura coleções com estes identificadores (handles). Crie as coleções em **Produtos > Coleções**:

`mais-vendidos`, `comece-sua-colecao`, `lancamentos`, `modelos-surpresa`, `formula-1`, `filmes-e-herois`, `veiculos`, `arquitetura`, `espacial`, `botanica`, `acessorios`, `quadros`

Também é possível trocar cada coleção no editor de tema.

### 3. Menus
Em **Loja virtual > Navegação**:
- **Menu principal** (`main-menu`): Início, Mais vendidos, Ofertas, Lançamentos, Fórmula 1, Filmes e heróis, Coleções, Acessórios, Rastrear pedido. Arraste itens para dentro de outro item para criar submenus.
- **Rodapé** (`footer`): Quem somos, Fale conosco, Termos de serviço.
- Crie um segundo menu (por exemplo "Informações") e escolha esse menu na coluna 2 do rodapé.

### 4. Campos do produto (metafields)
Em **Configurações > Dados personalizados > Produtos**, crie estes campos:

| Nome | Namespace e chave | Tipo |
| --- | --- | --- |
| Peças | `custom.pecas` | Número inteiro |
| Escala | `custom.escala` | Texto de linha única |
| Dimensões | `custom.dimensoes` | Texto de linha única |
| Especificações | `custom.especificacoes` | Texto com formatação |
| Mecânica | `custom.mecanica` | Texto com formatação |

Depois preencha esses campos em cada produto.

### 5. "Aproveite e leve junto"
Crie os produtos **Caixa de presente** (`caixa-de-presente`) e **Organizador de peças** (`organizador-de-pecas`).
Para trocar os produtos, abra o editor de tema na página de produto e edite a seção do produto.

### 6. Página de rastreio
Crie a página **Rastrear pedido** em **Loja virtual > Páginas** e escolha o modelo `page.rastrear-pedido`.
O endereço fica `/pages/rastrear-pedido`.

### 7. Políticas
Preencha as políticas de reembolso, privacidade, termos e frete em **Configurações > Políticas**.
Coloque os links dessas políticas no menu do rodapé.

### 8. Aplicativos
- **Avaliações:** instale Judge.me (ou outro app) e adicione o bloco do app na seção do produto ou na seção "Fotos de clientes".
- **Dropshipping:** instale DSers ou CJ Dropshipping para importar os produtos.
- **Cupons:** crie os cupons em **Descontos**. Escolha nomes próprios, por exemplo `BEMVINDO10`.
