import {Negociacao} from './Negociacao';


export class Negociacoes{
    private _negociacoes:Negociacao[]=[];
    adiciona(negociao:Negociacao):void{
        this._negociacoes.push(negociao);
    }
    paraArray():Negociacao[]{
        return [].concat(this._negociacoes);
    }
}