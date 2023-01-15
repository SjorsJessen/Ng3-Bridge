import { NgtAmbientLight, NgtSpotLight, NgtPointLight } from "@angular-three/core/lights";
import { NgtCanvas } from "@angular-three/core";
import { CubesComponent } from "./cubes/cubes.component";
import { ReuseGltfComponent } from "./reuse-gltf/reuse-gltf.component";
import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [NgtCanvas, NgtAmbientLight, NgtSpotLight, NgtPointLight, CubesComponent, ReuseGltfComponent]
})
export class AppComponent {}