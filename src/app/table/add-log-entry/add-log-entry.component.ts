import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-add-log-entry',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './add-log-entry.component.html',
  styleUrl: './add-log-entry.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddLogEntryComponent {

}
