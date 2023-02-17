import { NgtAmbientLight, NgtSpotLight, NgtPointLight } from "@angular-three/core/lights";
import { NgtCanvas } from "@angular-three/core";
import { ReuseGltfComponent } from "./components/sandbox.component";
import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<sandbox-reuse-gltf></sandbox-reuse-gltf>`,
  imports: [NgtCanvas, NgtAmbientLight, NgtSpotLight, NgtPointLight, ReuseGltfComponent]
})
export class AppComponent {}
