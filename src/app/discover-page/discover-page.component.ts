import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-discover-page',
    standalone: true,
    templateUrl: './discover-page.component.html',
    styleUrl: './discover-page.component.scss',
    imports: [FooterComponent]
})
export class DiscoverPageComponent {

}
