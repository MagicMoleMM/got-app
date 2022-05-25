export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';

    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    };

    async getAllCharacters() {
        const res = await this.getResource('/characters?page=5');
        return res.map(this._transformCharacter);
    }

    async getCharacters(id) {
        const character = await this.getResource(`/characters/${id}/`);
        return this._transformCharacter(character);
    }

    getAllHouses() {
        const res = this.getResource(`/houses/`);
        return res.map(this._transformHouse)
    }

    getHouse(id) {
        const house = this.getResource(`/houses/${id}/`);
        return this._transformHouse(house);
    }

    getAllBooks() {
        const res = this.getResource(`/book/`);
        return res.map(this._transformBook)
    }

    getBook(id) {
        const book =  this.getResource(`/book/${id}/`);
        return this._transformBook(book);
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
            publiser: book.publiser,
            released: book.released
        }

    }
}