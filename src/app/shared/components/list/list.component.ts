import { Router } from '@angular/router';
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
route!: string

constructor(
  private readonly router: Router
) {}

public fullInfo(id: number): void {
  this.router.navigate([`${this.route}/${id}`])
}

}
