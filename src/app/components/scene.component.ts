import {ChangeDetectionStrategy, Component} from "@angular/core";
import {NgtSobaStage, NgtSobaStageContent} from "@angular-three/soba/staging";
import {NgtRadianPipe} from "@angular-three/core";
import {NgtSobaOrbitControls} from "@angular-three/soba/controls";
import {Shoe} from "./shoe.component";

@Component({
  selector: 'sandbox-scene',
  standalone: true,
  template: `
      <ngt-soba-stage environment="city" intensity="0.6">
        <ng-template ngt-soba-stage-content>
          <sandbox-shoe color="tomato" [position]="[0, 0, 0]"></sandbox-shoe>
          <sandbox-shoe
            color="orange"
            [scale]="-1"
            [rotation]="[0, 0.5, 180 | radian]"
            [position]="[0, 0, -2]"
          ></sandbox-shoe>
        </ng-template>
      </ngt-soba-stage>

      <ngt-soba-orbit-controls [autoRotateSpeed]="0.25" autoRotate></ngt-soba-orbit-controls>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgtSobaStage, NgtSobaStageContent, Shoe, NgtRadianPipe, NgtSobaOrbitControls],
})
export class Scene {}
