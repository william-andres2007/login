print("---------------------")
print("     Bienvenido      ")
print("---------------------")

def suma():
    primer_numero = int(input("Primer número: "))
    segundo_numero = int(input("Segundo número: "))
    resultado = primer_numero + segundo_numero
    print("resultado:", resultado)


respuesta = "si"

while respuesta.lower() == "si":
    print("===============")
    print(" Vamos de nuevo")
    suma()
    respuesta = input("¿Deseas volver a sumar? (si/no): ")





