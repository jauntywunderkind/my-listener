"use module"

export class MyListenerListener extends HTMLElement{
	get type(){
		return this.getAttribute( "type")
	}
	set type( type){
		this.type= type
	}
	get passive(){
		return this.options&& this.options.passive
	}
	get capture(){
		return this.options&& this.options.capture
	}
	get options(){
		return this.options
	}
	set options( options){
		this.options= options
		[ "capture", "passive"].forEach( attribute){
			const
			  had= this.getAttribute( attribute)!== null,
			  have= options&& !!options[ attribute]
			if( had&& !have){
				this.removeAttribute( attribute)
			}else if( !had&& have){
				this.setAttribute( attribute, "")
			}
		})
	}

	constructor( type, handler, options){
		if( !(this instanceof MyListenerListener)){
			mixinClass( this, MyListenerListener)
		}
		this.type= type
		this.handler= handler
		this.options= options
	}

	removeListener(){
		this.parentNode.removeEventListener( this.type, this.handler)
	}
	connectedCallback(){
		this.parentNode.addEventListener( this.type, this.handler)
	}
	disconnectedCallback(){
		this.removeListener()
	}
}
export default MyListenerListener

export function register(){
	window.customElements.define('my-listener', Listener);
}
