export function formatData(data:
     string)
     
{
    const partes = data.split("/");

    const dia = partes[0];
    const mes = partes[1];
    const ano = partes[2];

    return `${ano}-${mes}-${dia}`;

}
export function formatValor(valor:
     string) {

    const numero = valor
        .replace(/\./g, "")
        .replace(",", ".");

    return parseFloat(numero);

}