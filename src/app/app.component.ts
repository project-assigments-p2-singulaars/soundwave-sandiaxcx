import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { DiscoverPageComponent } from "./discover-page/discover-page.component";
import { FooterComponent } from "./footer/footer.component";
import { JoinPageComponent } from "./join-page/join-page.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, LandingPageComponent, DiscoverPageComponent, FooterComponent, JoinPageComponent]
})
export class AppComponent {
  title = 'soundwave';
}
