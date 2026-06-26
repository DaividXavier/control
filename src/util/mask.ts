export function maskData(valor: string) {
    valor =valor.replace(/\D/g, "");

    if (valor.length > 2) {
    valor = valor.replace(/^(\d{2})(\d)/, "$1/$2");
    }

    if (valor.length > 5) {
    valor = valor.replace(/^(\d{2})\/(\d{2})(\d)/, "$1/$2/$3");
    }
    return valor.substring(0, 10);
}
export function maskValor(valor:
string) {
    valor = valor.replace(/\D/g, "");

    const numero = (Number(valor) / 100).toFixed(2) + "";

    return numero.replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}