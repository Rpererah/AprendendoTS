import{Negociacao} from './index'
import {logarTempoDeExecucao} from './../helpers/decorators/index';
import {MeuObjeto} from './MeuObjeto';

export class Negociacoes implements MeuObjeto<Negociacoes>{
    private _negociacoes:Negociacao[]=[];
    adiciona(negociao:Negociacao):void{
        this._negociacoes.push(negociao);
    }
    @logarTempoDeExecucao()
    paraArray():Negociacao[]{
        return ([] as Negociacao[]).concat(this._negociacoes);
    }
    paraTexto():void{
        console.log(JSON.stringify(this._negociacoes))
    }
    ehIgual(negociacoes:Negociacoes):boolean{
        return JSON.stringify(this._negociacoes)==JSON.stringify(negociacoes.paraArray())
    }
}