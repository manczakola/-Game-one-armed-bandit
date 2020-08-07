class Wallet {
    constructor(money) {
        let _money = money;
        //pobieranie aktualnej zawartości portfela
        this.getWalletValue = () => _money;
        //sprawczanie czy uzytkownik ma odpowiednia ilosc środków

        this.checkCanPlay = (value) => {
            if (_money >= value) {
                return true;
            } else {
                return false
            }
        }

        this.changeWalllet = (value, type = '+') => {
            if (typeof value === 'number' && !isNaN(value)) {
                if (type === '+') {
                    return _money += value;
                } else if (type === '-') {
                    return _money -= value;
                } else {
                    throw new Error('Nieprawidłowy typ działania')
                }
            } else {
                console.log(typeof value);
                throw new Error("Nieprawidłowa liczba")
            }

        }
    };

}


const wallet = new Wallet(200)