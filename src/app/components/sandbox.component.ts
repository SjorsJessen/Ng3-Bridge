import {ChangeDetectionStrategy, Component} from "@angular/core";
import {NgtCanvas} from "@angular-three/core";
import {Scene} from "./scene.component";
import {NgtStats} from "@angular-three/core/stats";

@Component({
  selector: 'sandbox-reuse-gltf',
  standalone: true,
  template: `
      <ngt-canvas shadows initialLog [dpr]="[1, 2]" [camera]="{ position: [0, 0, 150], fov: 40 }">
        <sandbox-scene></sandbox-scene>
      </ngt-canvas>
      <ngt-stats></ngt-stats>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgtCanvas, Scene, Scene, NgtStats],
})
export class ReuseGltfComponent {}
