import { Scene } from 'three'
import Renderer from 'three/examples/jsm/renderers/common/Renderer'

window.addEventListener('mousedown',function(){
	gsap.to(camera.position,{
		z:14,
		direction:1.5
	});
})
function animate (){
Renderer.Render(scene, camera)
}