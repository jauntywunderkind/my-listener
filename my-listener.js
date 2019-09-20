"use module"

import Listener from "./listener"

export class MyListener extends HTMLElement{
	constructor(){
		if( !(this instanceof MyListener)){
			mixinClass( this, MyListener)
		}
	}
	addEventListener( type, handler){
		
	}
	removeEventListener( type, handler){
	}
}
