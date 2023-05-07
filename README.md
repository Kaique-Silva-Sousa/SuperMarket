API SIMULADOR DE MERCADO

Simulador de um "Mercado" onde voce pode fazer as compras e adicionar produtos.

usando a rota /product/addProdut em POST voce envia os dados :
{
    "name":"nome do produto",
    "price: preco do produto,
    "productID": um ID para o produto
}

usando a rota /product/buy em POST voce envia os productID dos produtos que deseja comprar
{
    "products":[1,1,2,3,]
}
como no exemplo : 2 produtos de ID 1, 1 de ID 2 e 1 de ID 3

Projeto apenas para relembrar alguns conceitos, está bem cru, posteriormente devo atualizar algo.


para usar basta criar um arquivo .env 
criar a variavel " STRING_CONNECTION " e colocar o link do seu banco de dados mongoDB