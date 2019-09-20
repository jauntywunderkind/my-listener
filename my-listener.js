"use module"

import Listener from "./listener"

const
  $addEventListener= Symbol.for( "my-listener:addEventListener"),
  $removeEventListener= Symbol.for( "my-listener:removeEventListener")

export class MyListener extends HTMLElement{
	constructor(){
		if( !(this instanceof MyListener)){
			mixinClass( this, MyListener)
		}
		this[ $addEventListener]= super.addEventListener|| EventTarget.addEventListener
		this[ $removeEventListener]= super.removeEventListener|| EventTarget.removeEventListener
		return this
	}
	addEventListener( type, handler, options){
		const superAdd= this[ $addEventListener]
		let rv
		if( superAdd){
			rv= superAdd.call( this, type, handler, options)
		}

		const listener= new Listener( type, handle, options)
		this.appendChild( listener)
		return rv
	}
	removeEventListener( type, handler, options){
		const superRemove= this[ $removeEventListener]
		let rv
		if( superRemove){
			rv= superRemove.call( this, type, handler, options)
		}

		for( let child of this.children){
			if( child.type=== type&& child.handler=== handler){
				this.removeChild( child)
			}
		}
		return rv
	}
}
export default MyListener
