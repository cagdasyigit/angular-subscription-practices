import {Component, OnDestroy, OnInit} from "@angular/core";
import {DummyService} from "./dummy.service";
import {NavigationEnd, Router, RouterEvent} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
    selector: 'logger',
    template: '<div>Check the console dude...</div>'
})
export class LoggerComponent implements OnInit, OnDestroy {

    private subscription: Subscription;

    constructor(
        private dummyService: DummyService,
        private router: Router
    ) {
        this.subscription = new Subscription();

        // Service method subscription
        const dummyConstructorSub = this.dummyService.getDummyObject().subscribe(magicNumber => {
            console.log('[contructor] Your magic number is: ', magicNumber);
        });

        // Router subscription
        const routerConstructorSub = this.router.events.subscribe((event: RouterEvent) => {
            if (event instanceof NavigationEnd) {
                console.log('[constructor] router event: ', event);
            }
        });

        this.subscription.add(dummyConstructorSub);
        this.subscription.add(routerConstructorSub);
    }

    ngOnInit(): void {
        // Service method subscription
        const dummyInitSub = this.dummyService.getDummyObject().subscribe(magicNumber => {
            console.log('[ngOnInit] Your magic number is: ', magicNumber);
        });

        // Router subscription
        const routerInitSub = this.router.events.subscribe((event: RouterEvent) => {
            if (event instanceof NavigationEnd) {
                console.log('[ngOnInit] router event: ', event);
            }
        });

        this.subscription.add(dummyInitSub);
        this.subscription.add(routerInitSub);

    }

    ngOnDestroy(): void {
        // this.subscription.unsubscribe();
    }
}