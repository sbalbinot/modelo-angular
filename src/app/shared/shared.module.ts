import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OrderService } from "../order/order.service";
import { ShoppingCartService } from "../restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantsService } from "../restaurants/restaurants.service";
import { LoginService } from "../security/login/login.service";
import { InputComponent } from "./input/input.component";
import { NotificationService } from "./messages/notification.service";
import { SnackbarComponent } from "./messages/snackbar/snackbar.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule,FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartService, RestaurantsService, OrderService, NotificationService, LoginService]
        }
    }
}