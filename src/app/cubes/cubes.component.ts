import { NgtVector3 } from '@angular-three/core';
import { NgtMesh } from '@angular-three/core/meshes';
import { NgtBoxGeometry } from '@angular-three/core/geometries'
import { NgtMeshStandardMaterial } from '@angular-three/core/materials'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Mesh } from 'three';

@Component({
  selector: 'app-cube',
  standalone: true,
  templateUrl: 'cubes.component.html',
  imports: [NgtMesh, NgtBoxGeometry, NgtMeshStandardMaterial],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CubesComponent {
  // component that can accept Inputs
  @Input() position?: NgtVector3;

  // has internal state
  hovered = false;
  active = false;

  // registers the wrapped object in the animation loop that runs outside of Angular Zone
  onBeforeRender(cube: Mesh) {
    cube.rotation.x += 0.01;
  }
}