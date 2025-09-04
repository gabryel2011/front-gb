numero = input("Por favor, digite um número: ")
numero2 = int(numero)
if numero2 > 0:
    print("O numero é positivo")
else:
    print(numero2)

opreco = input("Digite o preço original do produto: ")
opreco2 = float(opreco)
if opreco2 > 100.00:
    desconto = opreco2 * 0.9
    print(desconto)
else:
    print(opreco2)

numero = input("Digite um número inteiro: ")
modulo = int(numero)
modulo2 = modulo % 5
if modulo2 == 0:
    print("O número é divisivel por 5")
else:
    print("O número não é divisivel por 5")

senhasecreta = "1234"
senha = input("Digitar senha:")
if senha == senhasecreta:
    print("Acesso permitido")
else:
    print("Senha incorreta")

numero1 = input("Digite número inteiro: ")
numero1 = int(numero1)
numero2 = input("Digite número inteiro: ")
numero2 = int(numero2)
if numero1 > numero2:
    print(f"o numero {numero1} é maior que o número {numero2}")
else:
    print(f"o numero {numero1} é menor que o número {numero2}")

numero = input("Digite um número inteiro: ")
modulo = int(numero)
modulo2 = modulo % 2
if modulo2 == 0:
    print("Par")
else:
    print("Ímpar")

