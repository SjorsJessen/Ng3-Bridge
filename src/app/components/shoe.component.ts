import {
  NgtObjectMap,
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
import {AsyncPipe, NgIf, NgFor, KeyValuePipe, CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Observable, Observer, of} from 'rxjs';
import {LinearEncoding, Group, MeshStandardMaterial, Mesh} from 'three';
import { ShoeGLTF} from "../interfaces/shoe-gltf";
import {LogPipe} from "../pipes/log.pipe";
import {NgtSobaDetailed} from "@angular-three/soba/performances";

@Component({
  selector: 'sandbox-shoe',
  standalone: true,
  template: `
    <ng-container *ngIf="loadModel$ | async as loadModel">
      <ngt-group *ngFor="let mesh of loadModel.nodes">
         <ngt-mesh [geometry]="mesh.geometry" [material]="mesh.material"></ngt-mesh>
      </ngt-group>
    </ng-container>
  `,
  providers: [provideNgtObject(Shoe), provideObjectRef(Shoe), provideObjectHostRef(Shoe)],
  imports: [LogPipe, NgIf, NgFor, CommonModule, AsyncPipe, NgtGroup, NgtObjectPassThrough, NgtMesh, NgtValueAttribute, NgtMeshStandardMaterial, KeyValuePipe, NgtSobaDetailed],
})
export class Shoe extends NgtObjectProps<Group> {
  public loadModel$!: Observable<ShoeGLTF>;

  private gltfLoader = inject(NgtGLTFLoader);
  readonly shoe$: Observable<ShoeGLTF> = this.gltfLoader.load('assets/shoe.gltf') as unknown as Observable<ShoeGLTF>;
  readonly encoding = LinearEncoding;

  constructor() {
    super();
    this.loadModel();
  }

  public loadModel(): void {
    this.loadModel$ = new Observable((observer: Observer<ShoeGLTF>) => {
      this.shoe$.subscribe((bridge: ShoeGLTF) => {
        const { nodes } = bridge;

        const shoeNodes: Array<Mesh> = [];
        const shoeMaterials: Array<MeshStandardMaterial> = [];

        if(nodes) {
          for (const [name, geometry] of Object.entries(nodes)) {
            if(geometry !== null && geometry.type === 'Mesh'){
              shoeNodes.push(geometry);
            }
          }
        }
        // @ts-ignore
        const shoeGLTF: ShoeGLTF = {
          nodes: shoeNodes
        };

        shoeGLTF.nodes.forEach((node: Mesh) => {
          console.log(node);
        });

        observer.next(shoeGLTF);
        observer.complete();
      });
    });
  }
}
