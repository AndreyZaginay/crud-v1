import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
@Input()
data!: {}[]

@Input()
displayColums!: string[];

@Input()
currentRoute!: string

constructor(
  private readonly router: Router
) {}

fullInfo(id: number): void {
  this.router.navigate([`dashboard/${this.currentRoute}/${id}`])
}

}
