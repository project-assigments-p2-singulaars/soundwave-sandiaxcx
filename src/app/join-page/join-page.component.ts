import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-join-page',
    standalone: true,
    templateUrl: './join-page.component.html',
    styleUrl: './join-page.component.scss',
    imports: [FooterComponent]
})
export class JoinPageComponent {

}
