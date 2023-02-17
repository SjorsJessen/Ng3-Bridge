import {
  NgtObjectPassThrough,
  NgtObjectProps,
  provideNgtObject,
  provideObjectHostRef,
  provideObjectRef,
} from '@angular-three/core';
import {NgtValueAttribute} from '@angular-three/core/attributes';
import {NgtGroup} from '@angular-three/core/group';
import {NgtMeshStandardMaterial} from '@angular-three/core/materials';
import {NgtMesh} from '@angular-three/core/meshes';
import {NgtGLTFLoader} from '@angular-three/soba/loaders';
import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Observable} from 'rxjs';
import {LinearEncoding, Group} from 'three';
import {ShoeGLTF} from "../interfaces/shoe-gltf";

@Component({
  selector: 'sandbox-shoe',
  standalone: true,
  template: `
    <ng-container *ngIf="shoe$ | async as shoe">
      <ngt-group [ngtObjectPassThrough]="this">
        <ngt-mesh castShadow receiveShadow [geometry]="shoe.nodes.shoe.geometry" [material]="shoe.materials.laces">
          <ngt-value [attach]="['material', 'envMapIntensity']" [value]="0.8"></ngt-value>
        </ngt-mesh>

        <ngt-mesh castShadow receiveShadow [geometry]="shoe.nodes.shoe_1.geometry">
          <ngt-mesh-standard-material
            [color]="$any(color)"
            [aoMap]="shoe.materials.mesh.aoMap"
            [normalMap]="shoe.materials.mesh.normalMap"
            [roughnessMap]="shoe.materials.mesh.roughnessMap"
            [metalnessMap]="shoe.materials.mesh.metalnessMap"
            envMapIntensity="0.8"
          >
            <ngt-value [attach]="['normalMap', 'encoding']" [value]="encoding"></ngt-value>
          </ngt-mesh-standard-material>
        </ngt-mesh>

        <ngt-mesh castShadow receiveShadow [geometry]="shoe.nodes.shoe_2.geometry" [material]="shoe.materials.caps">
          <ngt-value [attach]="['material', 'envMapIntensity']" [value]="0.8"></ngt-value>
        </ngt-mesh>
        <ngt-mesh castShadow receiveShadow [geometry]="shoe.nodes.shoe_3.geometry" [material]="shoe.materials.inner">
          <ngt-value [attach]="['material', 'envMapIntensity']" [value]="0.8"></ngt-value>
        </ngt-mesh>
        <ngt-mesh castShadow receiveShadow [geometry]="shoe.nodes.shoe_4.geometry" [material]="shoe.materials.sole">
          <ngt-value [attach]="['material', 'envMapIntensity']" [value]="0.8"></ngt-value>
        </ngt-mesh>
        <ngt-mesh castShadow receiveShadow [geometry]="shoe.nodes.shoe_5.geometry" [material]="shoe.materials.stripes">
          <ngt-value [attach]="['material', 'envMapIntensity']" [value]="0.8"></ngt-value>
        </ngt-mesh>
        <ngt-mesh castShadow receiveShadow [geometry]="shoe.nodes.shoe_6.geometry" [material]="shoe.materials.band">
          <ngt-value [attach]="['material', 'envMapIntensity']" [value]="0.8"></ngt-value>
        </ngt-mesh>
        <ngt-mesh castShadow receiveShadow [geometry]="shoe.nodes.shoe_7.geometry" [material]="shoe.materials.patch">
          <ngt-value [attach]="['material', 'envMapIntensity']" [value]="0.8"></ngt-value>
        </ngt-mesh>
      </ngt-group>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNgtObject(Shoe), provideObjectRef(Shoe), provideObjectHostRef(Shoe)],
  imports: [NgIf, AsyncPipe, NgtGroup, NgtObjectPassThrough, NgtMesh, NgtValueAttribute, NgtMeshStandardMaterial],
})
export class Shoe extends NgtObjectProps<Group> {
  private gltfLoader = inject(NgtGLTFLoader);

  readonly shoe$: Observable<ShoeGLTF> = this.gltfLoader.load('assets/shoe.gltf') as Observable<ShoeGLTF>;
  readonly encoding = LinearEncoding;
}
