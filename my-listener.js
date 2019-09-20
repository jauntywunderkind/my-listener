"use module"

import Listener from "./listener"

export class MyListener extends HTMLElement{
	constructor(){
		if( !(this instanceof MyListener)){
			mixinClass( this, MyListener)
		}
	}
	addEventListener( type, handler, options){
		const listener= new Listener( type, handle, options)
		
	}
	removeEventListener( type, handler){
	}
}
