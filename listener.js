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
		//const
		//  attributes= ["capture, passive"],
		//  had= attributes.map


		const
		  hadCapture= this.getAttribute( "capture")!== null,
		  hadPassive= this.getAttribute( "passive")!== null
		this.options= options

		const
		  haveCapture= options&& options.capture|| false,
		  havePassive= options&& options.passive|| false

		if( havePassive&& !hadPassive){
			this.setAttribute( "passive", "")
		}else if( !havePassive&& hadPassive){
			this.removeAttribute( "passive")
		}
		if( haveCapture&& !hadCapture){
			this.setAttribute( "capture", "")
		}else if( !haveCapture&& hadCapture){
			this.removeAttribute( "capture")
		}
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
