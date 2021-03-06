export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';

    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    };

    getAllCharacters = async () => {
        const res = await this.getResource('/characters?page=5');
        return res.map(this._transformCharacter);
    }

    getCharacters = async(id) => {
        const character = await this.getResource(`/characters/${41+id}/`);
        return this._transformCharacter(character);
    }

    getAllHouses = async () => {
        const res = await this.getResource(`/houses/`);
        return res.map(this._transformHouse)
    }

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}/`);
        return this._transformHouse(house);
    }

    getAllBooks = async () => {
        const res = await this.getResource(`/books/`);
        return res.map(this._transformBook)
    }

    getBook = async (id)=> {
        const book = await this.getResource(`/books/${id}/`);
        return this._transformBook(book);
    }

    isSet(data) {
        if (data) {
            return data
        } else {
            return 'no data :('
        }
    }

    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            worlds: house.worlds,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            mediaType: book.mediaType,
            publiser: book.publiser,
            released: book.released
        }

    }
}