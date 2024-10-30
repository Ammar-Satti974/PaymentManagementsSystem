import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { FormsModule } from '@angular/forms';
import { provideAnimations  } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    PaymentDetailsComponent, 
    FormsModule, 
    CommonModule ,
    // BrowserAnimationsModule,
  ],
  providers: [
      provideAnimations(),
  ],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'PaymentApp';
}
