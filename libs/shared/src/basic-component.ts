import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

export class BasicComponent implements OnDestroy {

    protected subscription: Subscription = new Subscription();

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}