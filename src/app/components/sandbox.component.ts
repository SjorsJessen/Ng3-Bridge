import {ChangeDetectionStrategy, Component} from "@angular/core";
import {NgtCanvas} from "@angular-three/core";
import {Scene} from "./scene.component";

@Component({
  selector: 'sandbox-reuse-gltf',
  standalone: true,
  template: `
      <ngt-canvas shadows [dpr]="[1, 2]" initialLog [camera]="{ position: [0, 0, 150], fov: 40 }">
        <sandbox-scene></sandbox-scene>
      </ngt-canvas>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgtCanvas, Scene, Scene],
})
export class ReuseGltfComponent {}
